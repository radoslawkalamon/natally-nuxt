/* eslint-disable no-console */
import path from 'path'
import dotenv from 'dotenv'
import DeployService from './utils/deploy.service'

dotenv.config();

(async () => {
  const deployService = new DeployService({
    host: process.env.DEPLOY_STAGE_HOST || '',
    port: Number(process.env.DEPLOY_STAGE_PORT),
    username: process.env.DEPLOY_STAGE_USERNAME || '',
    password: process.env.DEPLOY_STAGE_PASSWORD || '',
    remoteCatalog: process.env.DEPLOY_STAGE_REMOTE_CATALOG || '/',
    remoteIgnoreFile: (process.env.DEPLOY_STAGE_REMOTE_IGNORE_FILE || '').split(','),
    localCatalog: path.resolve(__dirname, process.env.DEPLOY_STAGE_LOCAL_CATALOG || './dist')
  })
  await deployService.start()
})()
