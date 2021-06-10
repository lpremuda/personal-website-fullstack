import React from 'react'

import GridItem from './GridItem'
import GridItem2 from './GridItem2'
import ImageItem from './ImageItem'
import ProjectMain from './ProjectMain'

import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { makeStyles, useTheme } from '@material-ui/core/styles'

export default function ProjectRow2({ id, imageFirst, config }) {

  const theme = useTheme()

  const gridItemProjectMinHeight = "70vh"
  const gridItemProjectHeight = "70vh"
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
      <GridItem2
        // id={id}
        // position={imageFirst ? "1" : "0"}
        // position={0}
        imageFirst={imageFirst}
        xs={12}
        sm={6}
        md={projectGridSize}
        minHeight={gridItemProjectMinHeight}
        // height={gridItemProjectHeight}
      >
        <ProjectMain config={config} />
      </GridItem2>
    )
  }

  const ImageGridItem = () => {
    return (
      <GridItem2
        // position={1}
        imageFirst={imageFirst}
        xs={12}
        sm={6}
        md={12-projectGridSize}
        minHeight={gridItemProjectMinHeight}
        // height={gridItemProjectHeight}
      >
        <ImageItem config={config} />
      </GridItem2>
    )
  }

  return (
    <Box
      id={id}
      bgcolor={backgroundColor}
      my={2}
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