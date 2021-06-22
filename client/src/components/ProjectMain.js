import React, { useState } from 'react'

import DemoButton from './DemoButton'
import ModalBody from './ModalBody'

import { makeStyles } from '@material-ui/styles'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  projectMainContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  boldFont: {
    fontWeight: 700,
  },
}))

const marginY = 4

export default function ProjectMain({ configProject }) {
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
      <Box
        my={marginY}
        fontWeight={700}
      >
        <Typography display="block" variant="h2" align="center" className={classes.boldFont}>
          {configProject.hero.title}
        </Typography>
      </Box>
      <Box
        my={marginY}
      >
        <Typography display="block" variant="h4" align="center">
          {configProject.hero.description}
        </Typography>
      </Box>
      {!configProject.hero.hideButtons &&
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-evenly"
        mx={0}
        my={marginY}
      >
        <Button
          variant="contained"
          color="primary"
          size='large'
          onClick={handleClick}
        >
          More Detail
        </Button>
        <ModalBody open={open} handleClose={handleClose} configProject={configProject} />
        {!configProject.hero.hideDemoButton &&
        <DemoButton
          href={configProject.links.demo}
        />}
      </Box>
      }
    </div>
  )
}