const http = require('http');
const enableDestroy = require('server-destroy');
let app = require('./app').default;
const constants = require('./constants');

let server = http.createServer(app);
server.listen(constants.PORT, '0.0.0.0', () => {
  app.setup(server);
});

if (module.hot) {
  module.hot.accept('./app', () => {
    enableDestroy(server);
    server.destroy();
    // eslint-disable-next-line global-require
    app = require('./app').default;
    server = http.createServer(app);
    server.listen(constants.PORT, '0.0.0.0', () => {
      app.setup(server);
    });
  });
}
