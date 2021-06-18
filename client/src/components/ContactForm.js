import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SendButton from './SendButton'

import { makeStyles } from '@material-ui/core/styles'
import Alert from '@material-ui/lab/Alert'
import AlertTitle from '@material-ui/lab/AlertTitle'
import Box from '@material-ui/core/Box'
import CircularProgress from '@material-ui/core/CircularProgress'
import Collapse from '@material-ui/core/Collapse'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import MuiLink from '@material-ui/core/Link'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

import CloseIcon from '@material-ui/icons/Close'

const collapseTimeout = 350

export default function ContactForm() {

  const [emailSuccess, setEmailSuccess] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [loading, setLoading] = useState(false)

  const useStyles = makeStyles((theme) => ({
    projectTitleContainer: {
      fontWeight: 700,
    },
    submitButton: {
      marginTop: theme.spacing(1),
      color: 'inherit'
    },
    inputField: {
      marginBottom: theme.spacing(1)
    },
    p0: {
      padding: 0
    }
  }))

  const classes = useStyles()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  useEffect(() => {
    console.log('ContactForm useEffect() run')
  }, [])

  function handleSubmit(e) {
    e.preventDefault();
    setEmailSuccess(false)
    setEmailError(false)
    setLoading(true)
    console.log("handleSubmit called")
    axios({
      method: "POST",
      url:'/send-email',
      data: formData
    }).then((response)=>{
      console.log('promise resolved')
      console.log(response)
      if (response.status === 200) {
        setLoading(false)
        setEmailError(false)
        setEmailSuccess(true)
        resetForm()
      } else {
          console.log('else block')
      }
    }).catch((error) => {
      setLoading(false)
      setEmailSuccess(false)
      setEmailError(true)
      resetForm()
      console.error("This is the error block")
      console.log(error.toJSON())
      if (error.response) {
        console.log(error.response)
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
      }
    })
  }

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      message: ''
    })
  }
  
  const onNameChange = (event) => {
	  setFormData({...formData, name: event.target.value})
  }

  const onEmailChange = (event) => {
	  setFormData({...formData, email: event.target.value})
  }

  const onMessageChange = (event) => {
	  setFormData({...formData, message: event.target.value})
  }

  const CloseButton = ({ onClickFunc }) => {
    return (
      <IconButton
        color="inherit"
        size="large"
        onClick={() => onClickFunc()}
      >
        <CloseIcon fontSize="inherit" />
      </IconButton>
    )
  }

  function AlertSuccess() {
    return (
      <Alert
        severity="success"
        action={<CloseButton onClickFunc={() => setEmailSuccess(false)} />}
      >
        <AlertTitle>
          <Typography variant="h6" color="inherit">
            Success
          </Typography>
        </AlertTitle>
        <Typography variant="body1" color="inherit">
          Email sent successfully! 
        </Typography>
      </Alert>
    )
  }

  function AlertError() {
    return (
      <Alert
        severity="error"
        action={<CloseButton onClickFunc={() => setEmailError(false)} />}
      >
        <AlertTitle>
          <Typography variant="h6" color="inherit">
            Error
          </Typography>
        </AlertTitle>
        <Typography variant="body1" color="inherit">
          Error occurred while submitting form. Please try again.<br/>If this continues to happen, please reach out to me via&nbsp; 
          <MuiLink
            variant="inherit"
            color="error"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/lucas-premuda-151b1a65"
          >
            LinkedIn
          </MuiLink>
          .
        </Typography>
      </Alert>
    )
  }

  return (
    <>
      <form id="contact-form" onSubmit={handleSubmit} method="POST">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h2" align="center" gutterBottom className={classes.projectTitleContainer}>Contact</Typography>
            <Typography variant="subtitle1" gutterBottom>Please fill out the following fields on the contact form and I will respond within 24 hours.</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              variant="outlined"
              id="name"
              label="Name"
              fullWidth
              value={formData.name}
              onChange={onNameChange}
              className={classes.inputField}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              variant="outlined"
              id="email"
              label="Email Address"
              type="email"
              fullWidth
              value={formData.email}
              onChange={onEmailChange}
              className={classes.inputField}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              variant="outlined"
              id="message"
              label="Message"
              fullWidth
              value={formData.message}
              onChange={onMessageChange}
              multiline
              rows={6}
              className={classes.inputField}
            />
          </Grid>
          <Grid item xs={12} container justify="center">
            <SendButton />
          </Grid>
        </Grid>
      </form>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight={150}
        py={2}
        boxSizing="border-box"
      >
        <Collapse
          in={emailSuccess}
          // in={true}
          collapsedHeight={0}
          {...(emailSuccess ? { timeout: collapseTimeout } : {})}
        >
          <Box>
            <AlertSuccess />
          </Box>
        </Collapse>
        <Collapse
          in={emailError}
          collapsedHeight={0}
          {...(emailError ? { timeout: collapseTimeout } : {})}
        >
          <Box>
            <AlertError />
          </Box>
        </Collapse>
        <Collapse
          in={loading}
          collapsedHeight={0}
          {...(loading ? { timeout: 200 } : {})}
        >
          <Box
            m="auto"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            color="secondary.dark"
          >
            <CircularProgress color="inherit" />
            <Typography variant="h6" color="inherit" style={{ paddingTop: '12px'}}>
              Sending email...
            </Typography>
          </Box>
        </Collapse>
      </Box>
    </>
  );
}