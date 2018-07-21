import bodyParser from 'body-parser';
import express from '@feathersjs/express';
import feathers from '@feathersjs/feathers';
import error from '@feathersjs/express/errors';
import socketio from '@feathersjs/socketio';
import services from './services';

function makeApp() {
  const app = express(feathers());

  app.get(`/client-${__GIT_SHA__}.js`, (req, res) => {
    res.setHeader('Cache-Control', 'public, max-age=31536000');
    res.setHeader('content-type', 'application/javascript');
    res.send(__CLIENT_JS__);
  });

  app.get(`/client-${__GIT_SHA__}.css`, (req, res) => {
    res.setHeader('Cache-Control', 'public, max-age=31536000');
    res.setHeader('content-type', 'text/css');
    res.send(__CLIENT_CSS__);
  });

  app
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .configure(express.rest())
    .configure(socketio())
    .configure(services)
    .use(error({ html: false }));

  return app;
}

export default makeApp();
