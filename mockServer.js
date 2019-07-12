const jsonServer = require('json-server');

const mockServerData = require('./mockServerData');

const server = jsonServer.create();
const router = jsonServer.router({});
const middlewares = jsonServer.defaults();

server.use(middlewares);

const mockServerDataJson = mockServerData();

// Routes
server.get('/products', (req, res) => {
  const data = mockServerDataJson.products;
  res.jsonp(data);
});

server.use(router);

server.listen(2000, () => {
  /* eslint-disable no-console */
  console.log('JSON Server is running');
});
