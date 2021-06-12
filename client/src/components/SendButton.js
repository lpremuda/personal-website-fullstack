import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TelegramIcon from '@material-ui/icons/Telegram';

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