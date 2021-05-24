const express = require('express')
const nodemailer = require('nodemailer')
const sendinBlue = require('nodemailer-sendinblue-transport')

const router = express.Router()

// Line of code added
// Line of code added for dev1 branch
// Line of code added for dev1 branch - second line

router.get('/', (req,res) => {
  res.send('get thisRouter')
  // sendEmail()
})

router.post('/', async (req,res) => {
  console.log('post request to "/" in thisRouter')
  console.log(req.body)
  await sendEmail(req.body.name, req.body.email, req.body.message)
})

// async..await is not allowed in global scope, must use a wrapper
async function sendEmail(formName, formEmail, formMessage) {

    // Create a SMTP transporter object
    let transporter = nodemailer.createTransport({
        host: 'smtp-relay.sendinblue.com',
        port: 587,
        // secure: account.smtp.secure,
        auth: {
            user: 'lucas.premuda@gmail.com',
            pass: 'Fpq4frgSEVAn9HBN'
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
        // html: '<p><b>Hello</b> to myself!</p>'
    };

    // Send email
    transporter.sendMail(message, (err, info) => {
    if (err) {
      console.log('Error occurred. ' + err.message)
      return process.exit(1)
    }

    // console.log('Message sent: %s', info.messageId)
    // // Preview only available when sending through an Ethereal account
    // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
  });
  }

module.exports = router