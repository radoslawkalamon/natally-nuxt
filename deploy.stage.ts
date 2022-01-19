import path from 'path'
import { config } from 'dotenv'
import { ServiceDeploy } from './devtools/service.deploy'

config();

(async () => {
  const serviceDeploy = new ServiceDeploy({
    host: process.env.DEPLOY_STAGE_HOST || '',
    port: Number(process.env.DEPLOY_STAGE_PORT),
    username: process.env.DEPLOY_STAGE_USERNAME || '',
    password: process.env.DEPLOY_STAGE_PASSWORD || '',
    remoteCatalog: process.env.DEPLOY_STAGE_REMOTE_CATALOG || '/',
    remoteIgnoreFile: (process.env.DEPLOY_STAGE_REMOTE_IGNORE_FILE || '').split(','),
    localCatalog: path.resolve(__dirname, process.env.DEPLOY_STAGE_LOCAL_CATALOG || './dist')
  })
  await serviceDeploy.start()
})()
