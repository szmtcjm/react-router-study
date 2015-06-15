var path = require('path');

module.exports = {
  entry: './router.jsx',
  output: {
    path: 'dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'jsx-loader?harmony'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  externals: {
    'react': 'React',
    'react-router': 'ReactRouter'
  }
}