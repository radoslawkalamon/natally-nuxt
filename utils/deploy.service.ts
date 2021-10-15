/* eslint-disable no-console */
import { Client, FileInfo, FTPResponse } from 'basic-ftp'
import { ProgressInfo } from 'basic-ftp/dist/ProgressTracker'
import capitalize from './formatters/capitalize'
import spacelize from './formatters/spacelize'

type DeployServiceConfig = {
  host: string;
  port: number;
  username: string;
  password: string;
  remoteCatalog: string;
  remoteIgnoreFile: string[];
  localCatalog: string;
}

type RemoveStrategies = {
  [key in FileInfo['type']]: (name: FileInfo['name']) => Promise<void | FTPResponse>
}

function decoratorLogCall () {
  return function (_target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const targetMethod = descriptor.value

    descriptor.value = function (...args: any[]) {
      const formattedName = spacelize(capitalize(propertyKey))
      console.log(`::: ${formattedName} :::`)
      return targetMethod.apply(this, args)
    }

    return descriptor
  }
}

class DeployService {
  readonly host: string;
  readonly port: number;
  readonly username: string;
  readonly password: string;
  readonly remoteCatalog: string;
  readonly remoteIgnoreFile: string[];
  readonly localCatalog: string;
  FTPClient = new Client()

  constructor (config: DeployServiceConfig) {
    this.host = config.host
    this.port = Number(config.port)
    this.username = config.username
    this.password = config.password
    this.remoteCatalog = config.remoteCatalog
    this.remoteIgnoreFile = config.remoteIgnoreFile
    this.localCatalog = config.localCatalog
  }

  public async start (): Promise<void> {
    try {
      await this.openConnection()
      await this.ensureRemoteCatalog()
      await this.openRemoteCatalog()
      await this.cleanRemoteCatalog()
      await this.uploadToRemoteCatalog()
    } catch (e) {
      console.error(e)
      throw e
    } finally {
      this.closeConnection()
    }
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
    await this.FTPClient.uploadFromDir(this.localCatalog)
    this.FTPClient.trackProgress()
  }

  private handlerUploadProgress (info: ProgressInfo): void {
    if (info.bytes === 0) {
      process.stdout.write(`Uploading file ${info.name}\n`)
    }
  }

  @decoratorLogCall()
  private closeConnection (): void {
    this.FTPClient.close()
  }
}

export default DeployService
