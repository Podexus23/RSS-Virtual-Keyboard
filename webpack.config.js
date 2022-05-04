const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const DIST_DIR = path.resolve(__dirname, 'dist');

module.exports = (env) => ({
  entry: './src/main.js',
  mode: env.mode,
  devtool: env.mode === 'development' ? 'inline-source-map' : false,
  devServer: {
    static: './dist',
    hot: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
  output: {
    filename: '[fullhash].bundle.js',
    path: DIST_DIR,
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'RSS Virtual Keyboard',
    }),
    new MiniCssExtractPlugin(),
    new ESLintPlugin({
      exclude: ['node_modules', 'dist'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          env.mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
});
