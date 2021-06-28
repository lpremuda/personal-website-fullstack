const express = require('express')
const nodemailer = require('nodemailer')
require('dotenv').config()
const path = require('path')

const router = express.Router()

router.get('/*', (req,res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'), function(err) {
    res.status(500).send(err)
  })
})

router.post('/', async (req,res) => {
  console.log('post request to "/" in routerMain')
  console.log(req.body)
  try {
    const info = await sendEmail(req.body.name, req.body.email, req.body.message)
    res.status(200).send(info)
  } catch (err) {
    console.error('post request to "/" - error block')
    console.error(err)
    res.status(500).send(err)
  }
})

// async..await is not allowed in global scope, must use a wrapper
// removed async and returned promise
function sendEmail(formName, formEmail, formMessage) {

    // Create a SMTP transporter object
    let transporter = nodemailer.createTransport({
        host: 'smtp-relay.sendinblue.com',
        port: 587,
        // secure: account.smtp.secure,
        auth: {
            user: process.env.SIB_USER,
            pass: process.env.SIB_PASSWORD
        }
    });

    // Message object
    let message = {
        from: 'Do Not Reply <lucas.premuda@gmail.com>',
        to: 'Lucas Premuda <lucas.premuda@gmail.com>',
        subject: 'Website Contact Submission',
        text: `Name: ${formName}

        Email: ${formEmail}

        Message: ${formMessage}`,
    };

    // // Send email
    // transporter.sendMail(message, (err, info) => {
    //   // err is null if no issues
    //   if (err) {
    //     console.log('Error occurred in transporter.sendMail: ' + err.message)
    //     throw err
    //   } else {
    //     // info is a JSON object with values:
    //     // accepted
    //     // envelope
    //     // messageId
    //     // etc...
    //     return info
    //   }
    // });

    // Send email, return promise
    return transporter.sendMail(message)
  }

module.exports = router



// This is what outputs via "console.error(err)" when I set the auth.user email purposefully wrong:
//
// Error: Invalid login: 530 Invalid username or password
//     at SMTPConnection._formatError (C:\Users\lpremuda\Documents\Personal\Website\personal-website-fullstack2\node_modules\nodemailer\lib\smtp-connection\index.js:774:19)
//     at SMTPConnection._actionAUTHComplete (C:\Users\lpremuda\Documents\Personal\Website\personal-website-fullstack2\node_modules\nodemailer\lib\smtp-connection\index.js:1513:34)
//     at SMTPConnection.<anonymous> (C:\Users\lpremuda\Documents\Personal\Website\personal-website-fullstack2\node_modules\nodemailer\lib\smtp-connection\index.js:540:26)
//     at SMTPConnection._processResponse (C:\Users\lpremuda\Documents\Personal\Website\personal-website-fullstack2\node_modules\nodemailer\lib\smtp-connection\index.js:932:20)
//     at SMTPConnection._onData (C:\Users\lpremuda\Documents\Personal\Website\personal-website-fullstack2\node_modules\nodemailer\lib\smtp-connection\index.js:739:14)
//     at TLSSocket.SMTPConnection._onSocketData (C:\Users\lpremuda\Documents\Personal\Website\personal-website-fullstack2\node_modules\nodemailer\lib\smtp-connection\index.js:189:44)
//     at TLSSocket.emit (events.js:315:20)
//     at addChunk (internal/streams/readable.js:309:12)
//     at readableAddChunk (internal/streams/readable.js:284:9)
//     at TLSSocket.Readable.push (internal/streams/readable.js:223:10) {
//   code: 'EAUTH',
//   response: '530 Invalid username or password',
//   responseCode: 530,
//   command: 'AUTH PLAIN'
// }