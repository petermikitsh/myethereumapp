const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

function isDevMode(env) {
  return Boolean(env && env.dev);
}

function getEntry(env) {
  const entries = [];
  if (isDevMode(env)) {
    entries.push('webpack-dev-server/client?http://0.0.0.0:8080');
  }
  entries.push(
    './src/client/index',
  );
  return entries;
}

module.exports = function config(env) {
  return {
    cache: true,
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      disableHostCheck: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      host: '0.0.0.0',
      hot: true,
      publicPath: 'http://0.0.0.0:8080/',
      stats: 'errors-only',
    },
    devtool: isDevMode(env) ? 'cheap-module-source-map' : 'hidden-source-map',
    entry: {
      client: getEntry(env),
    },
    mode: isDevMode(env) ? 'development' : 'production',
    module: {
      rules: [
        {
          test: /\.js$/,
          include: [
            path.join(__dirname, 'node_modules'),
            path.join(__dirname, 'src/client'),
          ],
          use: 'babel-loader',
        },
        {
          test: /\.css$/,
          include: [
            path.join(__dirname, 'src/client'),
            path.join(__dirname, 'node_modules/material-react-components')
          ],
          use: [
            isDevMode(env) ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader?modules&localIdentName=[name].[local]',
            'postcss-loader',
          ],
        },
        {
          test: /\.svg$/,
          include: [
            path.join(__dirname, 'src/client'),
            path.join(__dirname, 'node_modules/material-design-icons'),
          ],
          use: [
            'babel-loader',
            'react-svg-loader',
          ],
        },
      ],
    },
    output: {
      filename: '[name].js',
      publicPath: 'http://0.0.0.0:8080/',
    },
    plugins: [
      new CaseSensitivePathsPlugin(),
      new MiniCssExtractPlugin(),
    ],
    stats: {
      children: false,
    },
    target: 'web',
  };
};
