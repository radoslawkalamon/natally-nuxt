import path from 'path'
import dotenv from 'dotenv'
import { ServiceDeploy } from './devtools/service.deploy'

dotenv.config();

(async () => {
  const serviceDeploy = new ServiceDeploy({
    host: process.env.DEPLOY_PROD_HOST || '',
    port: Number(process.env.DEPLOY_PROD_PORT),
    username: process.env.DEPLOY_PROD_USERNAME || '',
    password: process.env.DEPLOY_PROD_PASSWORD || '',
    remoteCatalog: process.env.DEPLOY_PROD_REMOTE_CATALOG || '/',
    remoteIgnoreFile: (process.env.DEPLOY_PROD_REMOTE_IGNORE_FILE || '').split(','),
    localCatalog: path.resolve(__dirname, process.env.DEPLOY_PROD_LOCAL_CATALOG || './dist')
  })
  await serviceDeploy.start()
})()
