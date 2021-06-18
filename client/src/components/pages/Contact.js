import React, { useState, useEffect } from 'react'

import ContactForm from '../ContactForm'

import { makeStyles } from '@material-ui/core/styles'
import Collapse from '@material-ui/core/Collapse'

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

export default function Contact({ disableShowNavProjects }) {
  const classes = useStyles()

  useEffect(() => {
    disableShowNavProjects()
    console.log('Contact useEffect() run')
  }, [])

  return (
    <div className={classes.contactFormContainer}>
      <ContactForm /> 
      {/* <Collapse
        in={open}
        collapsedHeight={0}
        {...(open ? { timeout: 2000 } : {})}
      >
        <div style={{ height: '200px', width: '400px', backgroundColor: 'green'}}>

        </div>
      </Collapse>
      <Collapse
        in={open}
        collapsedHeight={0}
        {...(open ? { timeout: 2000 } : {})}
      >
        <div style={{ height: '200px', width: '400px', backgroundColor: 'blue'}}>

        </div>
      </Collapse> */}
    </div>
  )
}
