const http = require('http');
let app = require('./app').default;
const config = require('./config').default;

const server = http.createServer(app);
server.listen(config.PORT);

if (module.hot) {
  module.hot.accept('./app', () => {
    server.removeListener('request', app);
    // eslint-disable-next-line global-require
    app = require('./app').default;
    server.on('request', app);
  });
}
