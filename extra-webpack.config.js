const chunkChangeWebpackPlugin = require('chunk-change-time-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
const HappyPack = require('happypack');
const path = require('path');

module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'async', 
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        },
        style:{
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
          priority: 20, 
        }
      }
    }
  },
  module: {
    noParse: /node_modules\/(jquey\.js)/,
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
              cacheDirectory: true
          }}]
      },
      {
        test:/\.js$/,
        use:['happypack/loader?id=babel'],
        exclude:/node_modules/
      }]
  },
  plugins: [
    new chunkChangeWebpackPlugin({
      name:'chunk-change-time-webpack-plugin'
    }),
    new HappyPack({
      id: 'babel',
      loaders: ['babel-loader?cacheDirectory']
    }),
    // new BundleAnalyzerPlugin(),
  ],
  devServer:{
    contentBase: path.join(__dirname, 'dist'),
    compress:true,
    host:'localhost',
    serveIndex:true,
    port: 8000,
    overlay: true,
    open: false
  },
};