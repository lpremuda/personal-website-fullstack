import React from 'react'

import GridItem from './GridItem'
import ImageItem from './ImageItem'
import ProjectMain from './ProjectMain'

import useMediaQuery from '@material-ui/core/useMediaQuery'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { makeStyles, useTheme } from '@material-ui/core/styles'

export default function ProjectRow({ id, imageFirst, configProject }) {

  const theme = useTheme()

  const minHeightMobile = "50vh"
  const minHeightLarge = "70vh"
  const maxHeightMobile = "70vh"
  const maxHeightLarge = "100vh"
  const projGridRowSpacing = 10 // 10 is max
  const backgroundColor = imageFirst ? theme.palette.primary.light : "#fff"
  const projectGridSize = 6

  const down_sm = useMediaQuery(theme => theme.breakpoints.down('sm'))

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
        minHeight={down_sm ? minHeightMobile : minHeightLarge}
        orderLarge={imageFirst ? 1 : 0}
        orderMobile={0}
      >
        <ProjectMain configProject={configProject} />
      </GridItem>
    )
  }

  const ImageGridItem = () => {
    return (
      <GridItem
        xs={12}
        sm={12}
        md={12-projectGridSize}
        minHeight={down_sm ? minHeightMobile : minHeightLarge}
        maxHeight={down_sm ? maxHeightMobile : maxHeightLarge}
        orderLarge={imageFirst ? 0 : 1}
        orderMobile={1}
      >
        <ImageItem configProject={configProject} />
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
          container
          spacing={projGridRowSpacing}
        >
          <ProjectGridItem />
          <ImageGridItem />
        </Grid>
      </Container>
    </Box>
  )
}