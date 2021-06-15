import React, { useState } from 'react';
import axios from 'axios';

import SendButton from './SendButton'

import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

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
  }
}))

export default function ContactForm() {
  const classes = useStyles()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  function handleSubmit(e) {
    e.preventDefault();
    console.log("handleSubmit called")
    axios({
      method: "POST",
      url:'/send-email',
      data: formData
    }).then((response)=>{
      console.log(response)
      if (response.data.status === 'success') {
        alert("Message Sent.");
        resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      } else {
          console.log(response)
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
    console.log(formData)
  }

  const onEmailChange = (event) => {
	  setFormData({...formData, email: event.target.value})
    console.log(formData)
  }

  const onMessageChange = (event) => {
	  setFormData({...formData, message: event.target.value})
    console.log(formData)
  }

  return (
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
      {/* react-mail-icon */}
    </form>
  );
}