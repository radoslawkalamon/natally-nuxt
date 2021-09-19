/* eslint-disable no-console */
(() => {
  require('dotenv').config()
  const path = require('path')
  const FtpDeploy = require('ftp-deploy')
  const ftpDeploy = new FtpDeploy()

  const config = {
    user: process.env.STORYBOOK_DEPLOY_FTP_USERNAME,
    password: process.env.STORYBOOK_DEPLOY_FTP_PASSWORD,
    host: process.env.STORYBOOK_DEPLOY_FTP_HOST,
    port: process.env.STORYBOOK_DEPLOY_FTP_PORT,
    localRoot: path.resolve(__dirname, process.env.STORYBOOK_DEPLOY_FTP_LOCAL_CATALOG),
    remoteRoot: process.env.STORYBOOK_DEPLOY_FTP_REMOTE_CATALOG,
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
