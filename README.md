## etherscan

[![Build Status](https://travis-ci.org/petermikitsh/myethereumapp.svg?branch=master)](https://travis-ci.org/petermikitsh/myethereumapp) [![Coverage Status](https://coveralls.io/repos/github/petermikitsh/myethereumapp/badge.svg?branch=master)](https://coveralls.io/github/petermikitsh/myethereumapp?branch=master) [![dependencies Status](https://david-dm.org/petermikitsh/myethereumapp/status.svg)](https://david-dm.org/petermikitsh/myethereumapp)

Web client for viewing data from the Etherscan API.

### Getting Started

This application requires a locally-running MySQL instance in development mode. By default, the application will attempt connecting to the following location: `mysql://localhost:3306/etherscan-local`. Once the MySQL server is available, run the following:

```
npm install
npm run db:migrate
npm start
```

Your browser will open when the bundle is ready.

### Architecture, design decisions, etc

- Server: [NodeJS](https://nodejs.org/en/) server using [FeathersJS](https://feathersjs.com/) for quickly building REST and real-time APIs. Data is persisted in [Google Cloud Platform's Cloud SQL](https://cloud.google.com/sql/) service. [Sequelize](https://github.com/sequelize/sequelize) is used as the ORM and to manage the database table structure with migration scripts.

- Client: Single-page [React](https://reactjs.org/) application, using [Redux](https://redux.js.org/) for state management. The [Material Design React components](https://github.com/collegepulse/material-react-components) used in this project were implemented by the author. These components were designed with a focus on performance, accessibility, and cross-browser support. Color palette and font choices inspired by the look-and-feel of the Apple Design Award winning [Robinhood](https://robinhood.com/) app. The following separation of concerns is applied:

  - The `src/client/components` directory contains React components primarily concerned with the DOM.

  - The `src/client/routes` directory contains React components that integrate with `react-router` and `redux` state management. No DOM-specific logic lives in this directory.

- Testing: When shipping enterprise applications, you need confidence in quality. The unit tests provide extensive coverage of the codebase, allowing developers to add or augment existing features, without fear of introducing a regression. Unit tests are written with [Jest](https://jestjs.io/) for parallelized, fast execution.

- Developer experience: If you want to move quickly, you need to be effectively utilizing developer tools. This project implements hot module reloading on **both** the client and server. When server code changes, the server is restarted. When client code changes, [react-hot-loader](https://github.com/gaearon/react-hot-loader) patches them into the browser (no hard page refresh). Seeing is believing!

- Automated deployments: Once unit tests and the build succeed, [Travis](https://travis-ci.org/petermikitsh/myethereumapp) automatically deploys the application to [Zeit](https://zeit.co/), a PaaS for NodeJS applications. The application is accessible at [https://myethereum.app](https://myethereum.app).

### Out of scope

- Locking down the API. In a true production environment, you'd want to rate limit requests, add pagination, and require authentication to reach the API endpoints.

- Server-side rendering. If you look at the response from the server root (e.g., `GET /`), you'll notice the [body](https://github.com/petermikitsh/myethereumapp/blob/master/src/server/services/render/index.js) is sparse, as the DOM is populated by React on the client. This can be less-than-ideal for SEO.
