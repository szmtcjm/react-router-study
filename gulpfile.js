var gulp = require('gulp');
var gulpUtil = require('gulp-util');
var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');

gulp.task('dev', function() {
  webpackDevServer();
})