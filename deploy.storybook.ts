/* eslint-disable no-console */
import path from 'path'
import dotenv from 'dotenv'
import DeployService from './utils/deploy.service'

dotenv.config();

(async () => {
  const deployService = new DeployService({
    host: process.env.DEPLOY_STORYBOOK_HOST || '',
    port: Number(process.env.DEPLOY_STORYBOOK_PORT),
    username: process.env.DEPLOY_STORYBOOK_USERNAME || '',
    password: process.env.DEPLOY_STORYBOOK_PASSWORD || '',
    remoteCatalog: process.env.DEPLOY_STORYBOOK_REMOTE_CATALOG || '/',
    remoteIgnoreFile: (process.env.DEPLOY_STORYBOOK_REMOTE_IGNORE_FILE || '').split(','),
    localCatalog: path.resolve(__dirname, process.env.DEPLOY_STORYBOOK_LOCAL_CATALOG || './storybook-static')
  })
  await deployService.start()
})()
