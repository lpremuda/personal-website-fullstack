import React, { useEffect } from 'react'

import ContactForm from '../ContactForm'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  contactFormContainer: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    maxWidth: theme.breakpoints.values['sm'],
    [theme.breakpoints.down('xs')]: {
      width: '90%'
    },
  }
}))

export default function Contact() {
  const classes = useStyles()

  return (
    <div className={classes.contactFormContainer}>
      <ContactForm /> 
    </div>
  )
}
