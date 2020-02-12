const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

function getWebpackConfig() {
  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.bundle.js',
      publicPath: isDevelopment ? '' : '/dist/',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.(css|scss)$/,
          use: [isDevelopment ? 'style-loader' : {
            loader: MiniCssExtractPlugin.loader,
          }, 'css-loader', 'sass-loader'],
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
            },
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/,
          use: [
            'file-loader?name=images/[name].[ext]',
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            'file-loader?name=fonts/[name].[ext]',
          ],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebPackPlugin({
        template: './src/index.html',
        filename: './index.html',
      }),
      new MiniCssExtractPlugin({
        filename: isDevelopment ? '[name].css' : 'css/[name].[hash].css',
        chunkFilename: isDevelopment ? '[id].css' : 'css/[id].[hash].css',
      }),
    ],
    resolve: {
      extensions: ['.scss', '.jpg', '.png', '.js', '.jsx'],
    },
  };
}

module.exports = getWebpackConfig();
