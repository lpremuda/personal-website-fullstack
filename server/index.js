console.log("Starting index.js file")

const express = require('express');
const path = require('path');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const thisRouter = require('./thisRouter')
const bodyParser = require('body-parser')

const isDev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 5000;

// Set our frontend port to be either an environment variable or port 5000
const portClient = process.env.REACT_APP_PORT || 3000

// Multi-process to utilize all CPU cores.
if (!isDev && cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
  });

} else {
  const app = express();

  // Priority serve any static files.
  app.use(express.static(path.resolve(__dirname, '../client/build')));

  // Helpful Link #1: https://create-react-app.dev/docs/proxying-api-requests-in-development/
  //    CRA webpage that references Helpful Link #2
  // Helpful Link #2: https://enable-cors.org/server_expressjs.html
  //    What I copy and pasted from
  // app.use(function(req, res, next) {
  //   res.header("Access-Control-Allow-Origin", `http://localhost:${portClient}`); // update to match the domain you will make the request from
  //   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  //   next();
  // });

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use('/send-email', thisRouter)

  // All remaining requests return the React app, so it can handle routing.
  app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });

  app.listen(PORT, function () {
    console.log(`App listening on port ${PORT}`)
    console.error(`Node ${isDev ? 'dev server' : 'cluster worker '+process.pid}: listening on port ${PORT}`);
  });
}