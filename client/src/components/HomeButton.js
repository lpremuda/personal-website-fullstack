import React from 'react'

import { config } from '../config'

import { makeStyles } from '@material-ui/core/styles'
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
      <Typography variant="h6">Lucas.Premuda</Typography>
    </Button>

  )
}