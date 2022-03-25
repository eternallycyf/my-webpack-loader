
const { resolve } = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: resolve(__dirname, 'src/app.js'),
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  devtool: 'cheap-module-source-map',
  resolveLoader: {
    modules: ['node_modules', resolve(__dirname, 'loaders')]
  },
  module: {
    // webpack-loader 执行顺序 从后到前
    rules: [
      {
        test: /\.tpl$/,
        use: [
          'babel-loader',
          {
            loader: 'tpl-loader',
            options: {
              log: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: resolve(__dirname, 'index.html'),
      filename: 'index.html',
    })
  ],
  devServer: {
    port: 3000,
    open: true
  }
}
