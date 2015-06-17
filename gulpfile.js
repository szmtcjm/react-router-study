var gulp = require('gulp');
var gulpUtil = require('gulp-util');
var htmlreplace = require('gulp-html-replace');
var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');

var allPath = {
  HTML: './src/index.html',
  DEST: './build'
};

gulp.task('watch', function() {
  gulp.watch(allPath.HTML, ['copy']);
});

gulp.task('webpack-dev-server', function() {
  var compiler = webpack(require('./webpack.dev.config.js'));
  new webpackDevServer(compiler, {
    hot: true,
    contentBase: './build',
    publicPath: '/js',
    stats: {
      colors: true
    }
  }).listen(80, 'localhost', function(err) {
    if(err) throw new gulpUtil.PluginError("webpack-dev-server", err);
    gulpUtil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
  });
});

gulp.task('html:dev', function() {
  gulp.src(allPath.HTML)
    .pipe(gulp.dest(allPath.DEST));
});

gulp.task('html:build', function() {
  gulp.src(allPath.HTML)
    .pipe(htmlreplace({dev: ''}))
    .pipe(gulp.dest(allPath.DEST));
});

gulp.task('webpack:build', function(done) {
  webpack(require('./webpack.config.js'), function(err, stats) {
    if(err) throw new gulpUtil.PluginError("webpack:build", err);
    gulpUtil.log("[webpack:build]", stats.toString({
      colors: true
    }));
    done();
  });
});

gulp.task('build', ['webpack:build', 'html:build']);
gulp.task('dev', ['html:dev', 'watch', 'webpack-dev-server']);
gulp.task('default', ['dev']);