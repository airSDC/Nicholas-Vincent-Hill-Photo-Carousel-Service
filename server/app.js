require('newrelic');
require('dotenv').config();

const express = require('express');
const path = require('path');
const cluster = require('cluster');
const routes = require('./../routes');

if (cluster.isMaster) {
  const numWorkers = 4;

  console.log(`Master cluster setting up ${numWorkers} workers...`);

  for (let i = 0; i < numWorkers; i += 1) {
    cluster.fork();
  }

  cluster.on('online', (worker) => {
    console.log(`Worker ${worker.process.pid} is online`);
  });

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died with code: ${code}, and signal: ${signal}`);
    console.log('Starting a new worker');
    cluster.fork();
  });
} else {
  const app = express();

  app.set('port', process.env.PORT || 3004);

  app.use((res, req, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    next();
  });

  app.use('/api', routes);

  app.get('/', (req, res) => {
    res.redirect('/rooms/1');
  });

  app.use(express.static('public/'));
  app.use(express.static('client/dist'));

  app.get('/rooms/:id', (req, res) => {
    const reactPath = path.join(__dirname, '../public/index.html');
    res.sendFile(reactPath);
  });

  app.listen(app.get('port'), () => console.log(`listening on port ${app.get('port')}...`));
}
