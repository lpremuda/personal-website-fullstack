import React, { useState } from 'react'

import DemoButton from './DemoButton'
import ModalBody3 from './ModalBody3'

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
    marginTop: `${theme.spacing(4)}px`,
    fontWeight: 700,
  },
  projectDescriptionContainer: {
    margin: `${theme.spacing(4)}px 0`,
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: `${theme.spacing(4)}px 0`,
  },
}))

export default function ProjectMain({ config }) {
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
          {config.hero.title}
        </Typography>
      </div>
      <div className={classes.projectDescriptionContainer}>
        <Typography display="block" variant="h3" align="center">
          {config.hero.description}
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
        <ModalBody3 open={open} handleClose={handleClose} config={config} />
        <DemoButton href={config.links.demo} />
      </div>
    </div>
  )
}