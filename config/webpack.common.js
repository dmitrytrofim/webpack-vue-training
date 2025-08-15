const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

const __base = path.resolve(__dirname, '..');
const __src = path.resolve(__base, 'src');
const __public = path.resolve(__base, 'public');

module.exports = {
  entry: path.resolve(__src, 'main.js'),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__base, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Minimal Vue Webpack',
      // favicon: path.resolve(__src, 'static', 'favicon.ico'),
      template: path.resolve(__public, 'index.html'),
    }),
    new VueLoaderPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
      },
      {
        test: /\.png$/,
        type: 'asset/resource',
      },
    ],
  },
};
