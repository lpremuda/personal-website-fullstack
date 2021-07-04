import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import MuiLink from '@material-ui/core/Link'

const useStyles = makeStyles({
  buttonLink: {
    textDecoration: 'none',
  }
})

export default function DemoButton({ href }) {
  const classes = useStyles()

  return (
    // <ButtonLink
    //   href={href}
    //   variant="contained"
    //   color="secondary"
    //   size="large"
    // >
    //   View Demo
    // </ButtonLink>

    // Eventually insert a Material UI popover
    <MuiLink target="_blank" rel="noreferrer" href={href} className={classes.buttonLink} >
      <Button
        variant="contained"
        color="secondary"
        size="large"
      >
        View Demo
      </Button>
    </MuiLink>
  )
} 