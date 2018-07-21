import http from 'http';
import fetch from 'node-fetch';
import constants from '../constants';
import app from '../app';

let server;

describe('src/server/app.js', async () => {
  beforeEach(async () => {
    server = http.createServer(app);
    await server.listen(constants.PORT);
  });

  afterEach(async () => {
    await server.close();
  });

  test('server should return a 200 status code at the server root', async () => {
    const res = await fetch(`http://0.0.0.0:${constants.PORT}/`);
    expect(res.status).toBe(200);
  });

  test('server should return HTTP 200 for client.css file', async () => {
    const res = await fetch(`http://0.0.0.0:${constants.PORT}/client-${__GIT_SHA__}.css`);
    expect(res.status).toBe(200);
  });

  test('server should return HTTP 200 for client.js file', async () => {
    const res = await fetch(`http://0.0.0.0:${constants.PORT}/client-${__GIT_SHA__}.js`);
    expect(res.status).toBe(200);
  });
});
