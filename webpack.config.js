var webpack = require('webpack')
var path = require('path')

module.exports = {
  context: path.join(__dirname, './app'),
  entry: [
    jsx: './index.js',
    html: './index.html',
    vendor: [
      'react',
      'react-dom'
      // 'react-redux',
      // 'react-router',
      // 'react-router-redux',
      // 'redux'
    ]
  ]
  output: {
    path: path.join(__dirname, './static'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot',
          'babel-loader'
        ]
      },
      {
        test: /\.css$/,
        include: /app/,
        loaders: [
          'style-loader',
          'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[local]___[hash:base64:5]',
          'postcss-loader'
        ]
      },
    ]
  },
  devServer: {
    contentBase: './app',
    hot: true
  }
}
