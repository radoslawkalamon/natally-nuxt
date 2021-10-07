/* eslint-disable no-console */
import path from 'path'
import dotenv from 'dotenv'
import DeployService from './utils/deploy.service'

dotenv.config();

(async () => {
  const deployService = new DeployService({
    host: process.env.DEPLOY_PROD_HOST || '',
    port: Number(process.env.DEPLOY_PROD_PORT),
    username: process.env.DEPLOY_PROD_USERNAME || '',
    password: process.env.DEPLOY_PROD_PASSWORD || '',
    remoteCatalog: process.env.DEPLOY_PROD_REMOTE_CATALOG || '/',
    remoteIgnoreFile: (process.env.DEPLOY_PROD_REMOTE_IGNORE_FILE || '').split(','),
    localCatalog: path.resolve(__dirname, process.env.DEPLOY_PROD_LOCAL_CATALOG || './dist')
  })
  await deployService.start()
})()
