const http = require('http');
let app = require('./app').default;
const constants = require('./constants');

const server = http.createServer(app);
server.listen(constants.PORT, '0.0.0.0', () => {
  app.setup(server);
});

if (module.hot) {
  module.hot.accept('./app', () => {
    server.removeListener('request', app);
    // eslint-disable-next-line global-require
    app = require('./app').default;
    server.on('request', app);
  });
}
