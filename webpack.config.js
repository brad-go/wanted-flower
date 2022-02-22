const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  mode: 'production',
  devServer: { static: './dist' },
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: { keep: /\.git/ },
    assetModuleFilename: 'assets/[hash][ext][query]',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      { test: /\.js$/, loader: 'babel-loader' },
      {
        test: /\.css$/i,
        exclude: /\.module\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.module\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: './index.html' }),
  ],
};
