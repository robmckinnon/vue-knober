const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.config.base')

module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: true,
    hot: true,
    compress: true,
    host: 'localhost',
    port: 8080,
    open: true
  },
  entry: {
    app: [
      'webpack/hot/only-dev-server',
      path.resolve(__dirname, '../example/main.js')
    ]
  },
  output: {
    path: path.join(__dirname, '../example/dist'),
    publicPath: '',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },
  resolve: {
    alias: {
      'vue-knober': '../../src/index',
      vue: 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      filename: path.join(__dirname, '../example/dist/index.html'),
      template: path.join(__dirname, '../example/index.html')
    })
  ]
})