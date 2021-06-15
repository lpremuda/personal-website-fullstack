import React from 'react'

import { config } from '../config'

import WebsiteIcon from './WebsiteIcon'

import { makeStyles, useTheme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: config.Navbar.main.height,
    boxSizing: 'border-box',
    color: 'inherit'
  }
}));

export default function HomeButton() {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <Button className={classes.button}>
      <WebsiteIcon />
      <Box fontWeight={800} fontSize="1.9rem" ml={2}>
        <span style={{ color: config.hero.name.colorMain }}>LUCAS</span>
        <span style={{ color: theme.palette.secondary.main }}>PREMUDA</span>
      </Box>
    </Button>

  )
}