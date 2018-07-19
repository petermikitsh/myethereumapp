import express from '@feathersjs/express';
import feathers from '@feathersjs/feathers';

function makeApp() {
  const app = express(feathers());
  app.configure(express.rest());
  app.use((req, res) => res.json({ message: 'Hello world' }));
  return app;
}

export default makeApp();
