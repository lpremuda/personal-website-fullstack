import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import MuiLink from '@material-ui/core/Link'


const useStyles = makeStyles({
  buttonLink: {
    textDecoration: 'none',
  }
})

export default function ButtonLink({ children, href, variant, color, size }) {
  const classes = useStyles()

  const BtnBody = () => {
    return (
      <Button
        variant={variant}
        color={color}
        size={size}
      >
        {children}
      </Button>
    )
  }

  return (
    <MuiLink target="_blank" rel="noreferrer" href={href} className={classes.buttonLink} >
      <BtnBody />
    </MuiLink>
  )
} 