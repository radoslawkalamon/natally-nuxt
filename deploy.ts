import path from 'path'
import { config } from 'dotenv'
import { ServiceDeploy } from './devtools/service.deploy'

config();

(async () => {
  const serviceDeploy = new ServiceDeploy({
    host: process.env.DEPLOY_HOST || '',
    port: Number(process.env.DEPLOY_PORT),
    username: process.env.DEPLOY_USERNAME || '',
    password: process.env.DEPLOY_PASSWORD || '',
    remoteCatalog: process.env.DEPLOY_REMOTE_CATALOG || '/',
    remoteIgnoreFile: (process.env.DEPLOY_REMOTE_IGNORE_FILE || '').split(','),
    remoteHostname: process.env.DEPLOY_REMOTE_HOSTNAME || 'https://127.0.0.1',
    localCatalog: path.resolve(__dirname, process.env.DEPLOY_LOCAL_CATALOG || './dist'),
    zipName: process.env.DEPLOY_ZIP_NAME || '__ZIPNAME__'
  })
  await serviceDeploy.start()
})()
