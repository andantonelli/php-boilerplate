'use strict'
const config = require('../config')
const notifyError = require('../lib/notifyError')

const gulp = require('gulp')
const connect = require('gulp-connect-php')
const browserSync = require('browser-sync').create()

gulp.task('connect-sync', function () {
  connect.server({}, function () {
    browserSync.init({
      proxy: '127.0.0.1:8000'
    })
  })
})

gulp.task('watch', ['connect-sync', 'style'], function () {
  gulp.watch(config.src.scss, ['style']).on('change', browserSync.reload)
})
