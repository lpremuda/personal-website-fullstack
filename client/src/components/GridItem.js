import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

export default function GridItem({ children, position, xs, sm, md, bgColor, minHeight, ...otherVars }) {

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

  const useStyles = makeStyles((theme) => ({
    gridClass: {
      display: 'flex',
      flexDirection: 'column',
      // minHeight: '350px',
      minHeight: minHeight,
      // height: '70vh',
      justifyContent: 'space-around',
      alignItems: 'center',
      order: pos,
      [theme.breakpoints.down('xs')]: {
        order: xsPos,
      },
      backgroundColor: bgColor,
    }
  }))

  const classes = useStyles()
  
  return (
    <Grid {...(otherVars.id ? { id: otherVars.id } : {})} item xs={xs} sm={sm} md={md} className={classes.gridClass}>
      {children} 
    </Grid>
  )
}