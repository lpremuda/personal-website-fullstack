import React from 'react'

import { config } from '../config'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import HomeIcon from '@material-ui/icons/Home';
import Typography from '@material-ui/core/Typography'
import TelegramIcon from '@material-ui/icons/Telegram';

import { IconContext } from 'react-icons'
import { GrSend } from 'react-icons/gr'
import { FcBookmark } from 'react-icons/fc'


const useStyles = makeStyles((theme) => ({
  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    boxSizing: 'border-box',
    color: theme.palette.primary.contrastText,
    fontSize: '1rem',
  },
  icon: {
    marginRight: theme.spacing(0.5),
    // fontSize: '1rem',
  }
}));

export default function SendButton() {
  const classes = useStyles()

  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      size="large"
      className={classes.button}
    >
      <TelegramIcon color="inherit" fontSize="medium" className={classes.icon} />
      Submit
    </Button>

  )
}