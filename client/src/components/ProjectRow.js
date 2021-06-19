import React from 'react'

import GridItem from './GridItem'
import ImageItem from './ImageItem'
import ProjectMain from './ProjectMain'

import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { makeStyles, useTheme } from '@material-ui/core/styles'

export default function ProjectRow({ id, imageFirst, config }) {

  const theme = useTheme()

  const gridItemProjectMinHeight = "70vh"
  const projGridRowSpacing = 10 // 10 is max
  const backgroundColor = imageFirst ? theme.palette.primary.light : "#fff"
  const projectGridSize = 6

  const useStyles = makeStyles((theme) => ({
    container: {
      maxWidth: '1330px'
    }
  }))

  const classes = useStyles()

  const ProjectGridItem = () => {
    return (
      <GridItem
        xs={12}
        sm={12}
        md={projectGridSize}
        minHeight={gridItemProjectMinHeight}
        orderLarge={imageFirst ? 1 : 0}
        orderMobile={0}
      >
        <ProjectMain config={config} />
      </GridItem>
    )
  }

  const ImageGridItem = () => {
    return (
      <GridItem
        xs={12}
        sm={12}
        md={12-projectGridSize}
        minHeight={gridItemProjectMinHeight}
        orderLarge={imageFirst ? 0 : 1}
        orderMobile={1}
      >
        <ImageItem config={config} />
      </GridItem>
    )
  }

  return (
    <Box
      id={id}
      bgcolor={backgroundColor}
      py={2}
    >
      <Container className={classes.container}>
        <Grid
        container spacing={projGridRowSpacing}
        >
          <ProjectGridItem />
          <ImageGridItem />
        </Grid>
      </Container>
    </Box>
  )
}