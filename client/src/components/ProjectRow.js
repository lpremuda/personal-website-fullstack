import React from 'react'

import GridItem from './GridItem'
import ImageItem from './ImageItem'
import ProjectMain from './ProjectMain'

import Grid from '@material-ui/core/Grid'
import { makeStyles, useTheme } from '@material-ui/core/styles'

export default function ProjectRow({ id, imageFirst, config }) {

  const theme = useTheme()

  const paddingX = 10
  const gridItemProjectMinHeight = "70vh"
  const gridItemProjectHeight = "70vh"
  const projGridRowSpacing = 0
  const backgroundColor = imageFirst ? theme.palette.primary.light : "#fff"

  const useStyles = makeStyles((theme) => ({
    projectGridRow: {
      // backgroundColor: backgroundColor,
      [theme.breakpoints.up('lg')]: {
        paddingLeft: theme.spacing(paddingX),
        paddingRight: theme.spacing(paddingX),
      }

    }
  }))

  const classes = useStyles()

  const ProjectGridItem = () => {
    return (
      <GridItem
        id={id}
        position={imageFirst ? "1" : "0"}
        xs={12}
        sm={6}
        md={7}
        minHeight={gridItemProjectMinHeight}
        // height={gridItemProjectHeight}
      >
        <ProjectMain config={config} />
      </GridItem>
    )
  }

  const ImageGridItem = () => {
    return (
      <GridItem
        position={imageFirst ? "0" : "1"}
        xs={12}
        sm={6}
        md={5}
        minHeight={gridItemProjectMinHeight}
        // height={gridItemProjectHeight}
      >
        <ImageItem config={config} />
      </GridItem>
    )
  }

  return (
    <Grid item xs={12}
    container spacing={projGridRowSpacing}
    className={classes.projectGridRow}
    >
      <ProjectGridItem />
      <ImageGridItem />
    </Grid>
  )
}