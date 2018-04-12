'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '" https://www.easy-mock.com/mock/59bb7d44e0dc663341ab7963/example"', //api请求地址
  FILE_UPLOAD_URL:'""', //文件地址
  VIDEO_FILE_UPLOAD_URL:'""' //视频地址
})
