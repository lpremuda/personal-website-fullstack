import React from 'react'


import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import GetAppIcon from '@material-ui/icons/GetApp';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    boxSizing: 'border-box',
    color: theme.palette.primary.contrastText,
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
  },
  icon: {
    marginRight: theme.spacing(2)
  },
  fontSize: {
    fontSize: '1.8rem',
  }
}));

export default function DownloadButton() {
  const classes = useStyles()

  return (
    <a
      href="/files/dummy.pdf"
      download
      style={{ textDecoration: 'none'}}
    >
      <Button size="large" variant="contained" color="primary" className={classes.button}>
        <GetAppIcon fontSize="large" className={`${classes.icon} ${classes.fontSize}`} />
        <Typography className={classes.fontSize}>Download</Typography>
      </Button>
    </a>
  )
}