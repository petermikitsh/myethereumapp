const proc = require('child_process');
const nodeExternals = require('webpack-node-externals');
const path = require('path');
const StartServerPlugin = require('start-server-webpack-plugin');
const webpack = require('webpack');

const fingerprint = proc.execSync('git rev-parse --short HEAD').toString().trim();

function isDevMode(env) {
  return Boolean(env && env.dev);
}

function getDevTool(env) {
  if (isDevMode(env)) {
    return 'cheap-eval-source-map';
  }
  return 'source-map';
}

function getEntry(env) {
  const entry = [];
  if (isDevMode(env)) {
    entry.push('webpack/hot/poll?1000');
  }
  entry.push('./src/server/index.js');
  return entry;
}

function getPlugins(env) {
  const plugins = [];
  if (isDevMode(env)) {
    plugins.push(
      new StartServerPlugin('server.js'),
      new webpack.HotModuleReplacementPlugin(),
    );
  }
  plugins.push(
    new webpack.BannerPlugin(`Version: ${fingerprint}`),
  );
  return plugins;
}

module.exports = function config(env) {
  return {
    devtool: getDevTool(env),
    entry: getEntry(env),
    externals: [
      nodeExternals({
        whitelist: [
          'webpack/hot/poll?1000',
        ],
      }),
    ],
    mode: isDevMode(env) ? 'development' : 'production',
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          include: [
            /src\/client/,
            /src\/server/,
          ],
        },
      ],
    },
    output: {
      path: path.join(__dirname, '.tmp'),
      filename: 'server.js',
    },
    plugins: getPlugins(env),
    target: 'node',
    watch: Boolean(isDevMode(env)),
  };
};
