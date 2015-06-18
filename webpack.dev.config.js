var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: ['webpack/hot/dev-server', './src/js/main.js'],
  output: {
    path: path.resolve(__dirname, 'build/js'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devtool: 'inline-source-map',
  debug: true,
  devServer: {
    hot: true,
    contentBase: "./build",
    port: 80,
    publicPath: '/js',
    noInfo: true
  }
}