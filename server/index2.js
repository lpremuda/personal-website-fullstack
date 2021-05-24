const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const thisRouter = require('./thisRouter')

// Loads environment variable from .env file to process.env
require('dotenv').config()

const app = express()

// Set our backend port to be either an environment variable or port 5000
const portServer = process.env.SERVER_PORT || 5000

// Set our frontend port to be either an environment variable or port 5000
const portClient = process.env.REACT_APP_PORT || 3000

// Have Node serve the files for our built React app
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
console.log(path.resolve(__dirname, '../client/build', 'index.html'))
app.get('*', function(request, response) {
  console.log('app.get("*") called')
  response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(portServer, () => {
  console.log(`Express app listening on port ${portServer}`)
})