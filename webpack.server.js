const fs = require('fs');
const proc = require('child_process');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const constants = require('./src/server/constants');

const __GIT_SHA__ = proc.execSync('git rev-parse --short HEAD').toString().trim();

function readFileSync(file) {
  return fs.readFileSync(file).toString();
}

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
  const globals = {
    __CLIENT_CSS__: JSON.stringify('client.css'),
    __CLIENT_JS__: JSON.stringify('client.js'),
    __GIT_SHA__: JSON.stringify(__GIT_SHA__),
    'process.env.NODE_ENV': JSON.stringify(
      isDevMode(env) ? 'development' : 'production',
    ),
  };
  const plugins = [];

  if (isDevMode(env)) {
    plugins.push(
      new StartServerPlugin('server.js'),
      new webpack.HotModuleReplacementPlugin(),
      new OpenBrowserPlugin({ url: `http://0.0.0.0:${constants.PORT}` }),
    );
  } else {
    globals.__CLIENT_CSS__ = JSON.stringify(readFileSync(path.join('dist', 'client.css')));
    globals.__CLIENT_JS__ = JSON.stringify(readFileSync(path.join('dist', 'client.js')));
  }

  plugins.push(
    new webpack.BannerPlugin(`Version: ${__GIT_SHA__}`),
    new webpack.DefinePlugin(globals),
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
    mode: isDevMode(env) ? 'development' : 'none',
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
      filename: 'server.js',
    },
    plugins: getPlugins(env),
    target: 'node',
    watch: Boolean(isDevMode(env)),
  };
};
