import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
  buttonLink: {
    textDecoration: 'none',
  }
})

export default function ButtonLink({ children, href, variant, color, size }) {
  const classes = useStyles()

  return (
    <a target="_blank" rel="noreferrer" href={href} className={classes.buttonLink} >
      <Button
        variant={variant}
        color={color}
        size={size}
      >
        {children}
      </Button>
    </a>
  )
} 