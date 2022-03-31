import fs from 'fs'
import path from 'path'
import type { FileInfo, FTPResponse } from 'basic-ftp'
import type { ProgressInfo } from 'basic-ftp/dist/ProgressTracker'
import archiver from 'archiver'
import axios from 'axios'
import { Client } from 'basic-ftp'
import { formatterCapitalize } from '../utils/formatter.capitalize'
import { formatterSpacelize } from '../utils/formatter.spacelize'

type ServiceDeployConfig = {
  host: string;
  port: number;
  username: string;
  password: string;
  remoteCatalog: string;
  remoteIgnoreFile: string[];
  remoteHostname: string;
  localCatalog: string;
  zipName: string;
}

type RemoveStrategies = {
  [key in FileInfo['type']]: (name: FileInfo['name']) => Promise<void | FTPResponse>
}

function decoratorLogCall () {
  return function (_target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const targetMethod = descriptor.value

    descriptor.value = function (...args: any[]) {
      const formattedName = formatterSpacelize(formatterCapitalize(propertyKey))
      /* eslint-disable-next-line no-console */
      console.log(`::: ${formattedName} :::`)
      return targetMethod.apply(this, args)
    }

    return descriptor
  }
}

export class ServiceDeploy {
  readonly host: string
  readonly port: number
  readonly username: string
  readonly password: string
  readonly remoteCatalog: string
  readonly remoteIgnoreFile: string[]
  readonly remoteHostname: string
  readonly localCatalog: string
  readonly outputZipPath: string
  readonly outputHelperPath: string
  FTPClient = new Client()

  constructor (config: ServiceDeployConfig) {
    this.host = config.host
    this.port = Number(config.port)
    this.username = config.username
    this.password = config.password
    this.remoteCatalog = config.remoteCatalog
    this.remoteIgnoreFile = config.remoteIgnoreFile
    this.remoteHostname = config.remoteHostname
    this.localCatalog = config.localCatalog
    this.outputZipPath = path.join(__dirname, `${config.zipName}.zip`)
    this.outputHelperPath = path.join(__dirname, `${config.zipName}.php`)
  }

  public async start (): Promise<void> {
    try {
      await this.zipDestinationFolder()
      await this.prepareFileToSend()
      await this.openConnection()
      await this.ensureRemoteCatalog()
      await this.openRemoteCatalog()
      await this.cleanRemoteCatalog()
      await this.uploadToRemoteCatalog()
      await this.callHelperFile()
    } catch (e) {
      /* eslint-disable-next-line no-console */
      console.error(e)
    } finally {
      this.closeConnection()
      this.cleanup()
    }
  }

  @decoratorLogCall()
  private async zipDestinationFolder (): Promise<void> {
    const outputZipStream = fs.createWriteStream(this.outputZipPath)
    const archive = archiver('zip')
    archive.pipe(outputZipStream)
    archive.directory(this.localCatalog, false)
    await archive.finalize()
  }

  @decoratorLogCall()
  private prepareFileToSend (): void {
    const helperPath = path.join(__dirname, `helper.${path.basename(__filename, '.ts')}.php`)
    fs.copyFileSync(helperPath, this.outputHelperPath)
  }

  @decoratorLogCall()
  private async openConnection (): Promise<void> {
    await this.FTPClient.access({
      host: this.host,
      port: this.port,
      user: this.username,
      password: this.password,
      secure: false
    })
  }

  @decoratorLogCall()
  private async ensureRemoteCatalog (): Promise<void> {
    await this.FTPClient.ensureDir(this.remoteCatalog)
  }

  @decoratorLogCall()
  private async openRemoteCatalog (): Promise<void> {
    await this.FTPClient.cd(this.remoteCatalog)
  }

  @decoratorLogCall()
  private async cleanRemoteCatalog (): Promise<void> {
    const remoteFiles = await this.FTPClient.list()

    for (const file of remoteFiles) {
      if (this.remoteIgnoreFile.includes(file.name)) {
        continue
      }

      const removeStrategies: RemoveStrategies = {
        0: async () => await Promise.resolve(),
        1: async name => await this.FTPClient.remove(name),
        2: async name => await this.FTPClient.removeDir(name),
        3: async () => await Promise.resolve()
      }
      await removeStrategies[file.type](file.name)
    }
  }

  @decoratorLogCall()
  private async uploadToRemoteCatalog (): Promise<void> {
    this.FTPClient.trackProgress(this.handlerUploadProgress)
    await this.FTPClient.uploadFrom(this.outputZipPath, path.basename(this.outputZipPath))
    await this.FTPClient.uploadFrom(this.outputHelperPath, path.basename(this.outputHelperPath))
    this.FTPClient.trackProgress()
  }

  private handlerUploadProgress (info: ProgressInfo): void {
    if (info.bytes === 0) {
      process.stdout.write(`Uploading file ${info.name}\n`)
    }
  }

  @decoratorLogCall()
  private async callHelperFile (): Promise<void> {
    const helperRemotePath = new URL(path.basename(this.outputHelperPath), this.remoteHostname)
    await axios.get(helperRemotePath.toString())
  }

  @decoratorLogCall()
  private closeConnection (): void {
    this.FTPClient.close()
  }

  @decoratorLogCall()
  private cleanup (): void {
    fs.unlinkSync(this.outputZipPath)
    fs.unlinkSync(this.outputHelperPath)
  }
}
