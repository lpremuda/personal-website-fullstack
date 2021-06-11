import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

export default function GridItem2({ children, position, imageFirst, xs, sm, md, bgColor, minHeight, height, ...otherVars }) {

  const isProject = children.type['name'].search('Project') !== -1
  console.log(isProject)

  // For mobile: if child is a project, gets 0 (i.e. goes first)
  // Image gets 1 (goes second)
  const orderMobile = isProject ? 0 : 1

  // For large screens: if child is a project 
  let orderLarge
  // If its a project
  if (isProject) {
    orderLarge = imageFirst ? 1 : 0
  // If its a image
  } else {
    orderLarge = imageFirst ? 0 : 1
  }

  const useStyles = makeStyles((theme) => ({
    gridClass: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: minHeight,
      // height: '70vh',
      height: height,
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