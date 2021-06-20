import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

export default function GridItem({ children, position, xs, sm, md, bgColor, minHeight, maxHeight, orderLarge, orderMobile, ...otherVars }) {

  const useStyles = makeStyles((theme) => ({
    gridClass: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: minHeight,
      maxHeight: maxHeight,
      justifyContent: 'space-around',
      alignItems: 'center',
      order: orderLarge,
      [theme.breakpoints.down('sm')]: {
        order: orderMobile,
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