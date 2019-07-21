const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: './src/index.tsx',
  output: {
    path: __dirname + '/build',
    publicPath: './',
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './build',
  },
  resolve: {
    modules: [path.resolve('src'), 'node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
      { test: /\.(gif|jpe?g|png|ttf|woff2?|eot|svg)$/, use: [{ loader: 'url-loader', options: { limit: 10000 } }] }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./index.html')
    })
  ]
};