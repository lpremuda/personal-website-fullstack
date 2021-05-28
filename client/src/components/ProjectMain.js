import React, { useState } from 'react'

import ModalBody from './ModalBody'

import { makeStyles } from '@material-ui/styles'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  projectMainContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  projectTitleContainer: {
    marginTop: '5%',
    fontWeight: 700,
  },
  projectDescriptionContainer: {
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: '5%',
  },
}))

export default function ProjectMain() {
  const classes = useStyles()

  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className={classes.projectMainContainer}>
      <div className={classes.projectTitleContainer}>
        <Typography display="block" variant="h2" align="center" className={classes.projectTitleContainer}>
          React Sign-In App with Firebase
        </Typography>
      </div>
      <div className={classes.projectDescriptionContainer}>
        <Typography display="block" variant="h3" align="center">
          The Power of React with the utility of Firebase
        </Typography>
      </div>
      <div className={classes.buttonsContainer}>
        <Button
          variant="contained"
          color="primary"
          size='large'
          onClick={handleClick}
        >
          More Detail
        </Button>
        <ModalBody open={open} handleClose={handleClose} />
        <Button
          variant="contained"
          color="secondary"
          size='large'
        >
          Demo
        </Button>
      </div>
    </div>
  )
}