import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'

export default function GridItem({ children, position, ...otherVars }) {

  const theme = useTheme()

  const pos = parseInt(position)

  let xsPos
  if (Math.round((pos+1) / 2) % 2 === 0) {
    if ( (pos % 2) === 0 ) {
      xsPos = pos + 1
    } else {
      xsPos = pos - 1
    }
  } else {
    xsPos = pos
  }

  const useStyles = makeStyles({
    gridClass: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '350px',
      justifyContent: 'center',
      alignItems: 'center',
      order: pos,
      [theme.breakpoints.down('xs')]: {
        order: xsPos,
      },
    }
  })

  const classes = useStyles()
  
  return (
    <Grid {...(otherVars.id ? { id: otherVars.id } : {})} item xs={12} sm={6} md={6} className={classes.gridClass}>
      {children} 
    </Grid>
  )
}