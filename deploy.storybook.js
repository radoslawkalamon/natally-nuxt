/* eslint-disable no-console */
(() => {
  require('dotenv').config()
  const path = require('path')
  const FtpDeploy = require('ftp-deploy')
  const ftpDeploy = new FtpDeploy()

  const config = {
    user: process.env.DEPLOY_STORYBOOK_USERNAME,
    password: process.env.DEPLOY_STORYBOOK_PASSWORD,
    host: process.env.DEPLOY_STORYBOOK_HOST,
    port: process.env.DEPLOY_STORYBOOK_PORT,
    localRoot: path.resolve(__dirname, process.env.DEPLOY_STORYBOOK_LOCAL_CATALOG),
    remoteRoot: process.env.DEPLOY_STORYBOOK_REMOTE_CATALOG,
    include: ['*', '**/*'],
    exclude: ['**/*.map'],
    deleteRemote: true,
    forcePasv: true,
    sftp: false
  }

  console.log('Commencing start...')

  ftpDeploy.deploy(config)
  ftpDeploy.on('uploading', (data) => {
    console.log(`${data.filename.padEnd(80, ' ')} uploaded successfully. File ${data.transferredFileCount + 1}/${data.totalFilesCount}`)
  })
  ftpDeploy.on('upload-error', (data) => {
    console.log(data)
  })
})()
