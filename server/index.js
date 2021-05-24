console.log("Starting index.js file")

const express = require('express');
const path = require('path');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const thisRouter = require('./thisRouter')
const bodyParser = require('body-parser')

const isDev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 5000;
// const REACT_APP_PORT = process.env.REACT_APP_PORT || 3000

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
  app.use(function(req, res, next) {
    // Originally has Access-Control-Allow-Origin set to `http://localhost:${portClient}`, where const portClient = process.env.REACT_APP_PORT || 3000
    // This was working on local computer, but not on Heroku
    // Changed Access-Control-Allow-Origin to '*' which made Heroku work
    // Actually doesn't have to do with '*' anymore. I had been mistakenly running the server/index.js on my local computer and the POST requests were being sent to that, rather than Heroku
    // http://localhost:${portClient} does NOT work
    // http://localhost:3000 works
    res.header("Access-Control-Allow-Origin", 'http://localhost:3000'); // update to match the domain you will make the request from
    // I saw the below piece of code on Stack Overflow, but it ended up not being need to work:
    // res.header("Access-Control-Allow-Methods", "DELETE, PUT, GET, POST");
    res.header("Access-Control-Allow-Methods", "GET, POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  console.log(thisRouter)
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use('/send-email', thisRouter)

  // All remaining requests return the React app, so it can handle routing.
  // This seemed like it was necessary before, but after commenting it out and testing it on Heroku, everything works fine
  // app.get('*', function(request, response) {
  //   response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  // });

  app.listen(PORT, function () {
    console.log(`App listening on port ${PORT}`)
    console.error(`Node ${isDev ? 'dev server' : 'cluster worker '+process.pid}: listening on port ${PORT}`);
  });
}