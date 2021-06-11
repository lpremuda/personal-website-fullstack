import React from 'react'

import { config } from '../config'

import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import HomeIcon from '@material-ui/icons/Home';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: config.Navbar.main.height,
    boxSizing: 'border-box',
    color: 'inherit'
  },
  icon: {
    marginRight: theme.spacing(2)
  }
}));

export default function HomeButton() {
  const classes = useStyles()

  return (
    <Button className={classes.button}>
      <HomeIcon fontSize="large" className={classes.icon} />
      <Box fontWeight={800} fontSize="1.5rem">
        {/* <Typography variant="h6" fontWeight={800}> */}
        <span style={{ color: config.hero.name.colorMain }}>LUCAS</span>
        <span style={{ color: config.hero.name.colorOff }}>PREMUDA</span>
        {/* </Typography> */}
      </Box>

    </Button>

  )
}