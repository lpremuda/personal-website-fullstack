import React, { useEffect } from 'react'

import { configProjects } from '../../configProjects'

import GridItem from '../GridItem'
import ImageItem from '../ImageItem'
import ProjectMain from '../ProjectMain'
import ProjectRow from '../ProjectRow'
import ResumeMain from '../ResumeMain'
import heroImage from '../../images/christopher-gower-m_HRfLhgABo-unsplash.jpg'

import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles, useTheme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  heroMainContainer: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${heroImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    fontSize: '4rem',
    color: '#fff',
    position: 'relative',
  },
  heroBoxContainer: {
    position: 'absolute',
    top: '128px',
    height: 'calc(100% - 128px)',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroBoxSubContainer: {
    height: '90%',
    width: '90%',

    border: '2px solid red',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  heroBoxSub2Container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    border: '2px solid orange',
  },
  heroGridContainer: {
    height: '100%',
    boxSizing: 'border-box',
    border: '2px solid yellow',
  },
  heroGridItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: '200px',
    border: '2px solid blue',
  },
  gridItemDiv: {
    backgroundColor: 'purple',
    flex: '1 1 20px',
    height: '50px',
  },
  projectsContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  projectsGridContainer: {
    width: '100%',
  },
  projectGridRow: {
    backgroundColor: 'green',
    paddingLeft: theme.spacing(20),
    paddingRight: theme.spacing(20),
  }
}));

const gridItemProjectMinHeight = "70vh"
const gridItemProjectHeight = "70vh"

const projGridRowSpacing = 0

export default function Home({ enableShowNavProjects }) {
  const classes = useStyles()
  const theme = useTheme()

  useEffect(enableShowNavProjects, [])

  return (
    <>
      {/* HERO     */}
      <div id="homeTop" className={classes.heroMainContainer}>
        <Box className={classes.heroBoxContainer}>
          <Box className={classes.heroBoxSubContainer}>
            <Box className={classes.heroBoxSub2Container}>
              {/* <span>Welcome to Website</span> */}
              <Grid
                container
                direction="row"
                justify="flex-end"
                alignItems="flex-end"
                spacing={4}>
                <Grid item xs={6} children={<div className={classes.gridItemDiv} />} className={classes.heroGridItem} />
                <Grid item xs={6} children={<div className={classes.gridItemDiv} />} className={classes.heroGridItem} />
                <Grid item xs={6} children={<div className={classes.gridItemDiv} />} className={classes.heroGridItem} />
                <Grid item xs={6} children={<div className={classes.gridItemDiv} />} className={classes.heroGridItem} />
              </Grid>
            </Box>
          </Box>
        </Box>
      </div>
      {/* PROJECTS */}
      {/* <Container> */}
        <Box className={classes.projectsContainer}>
          <Grid className={classes.projectsGridContainer} container spacing={0} >

            <ProjectRow id="project1" imageFirst={false} config={configProjects.reactSignIn} />
            <ProjectRow id="project2" imageFirst={true} config={configProjects.me_nLibrary} />
            <ProjectRow id="project3" imageFirst={false} config={configProjects.personalWebsite} />
            <ProjectRow id="project4" imageFirst={true} config={configProjects.reactSignIn} />

            <Grid item xs={12}
            container spacing={projGridRowSpacing}
            className={classes.projectGridRow}
            >
              <GridItem
                id="project1"
                position="0"
                xs={12}
                sm={6}
                md={7}
                bgColor="#fff"
                minHeight={gridItemProjectMinHeight}
                height={gridItemProjectHeight}
              >
                <ProjectMain config={configProjects.reactSignIn} />
              </GridItem>
              <GridItem
                position="1"
                xs={12}
                sm={6}
                md={5}
                bgColor="#fff"
                minHeight={gridItemProjectMinHeight}
                height={gridItemProjectHeight}
              >
                <ImageItem config={configProjects.reactSignIn} />
              </GridItem>
            </Grid>

            <Grid item xs={12}
            container spacing={projGridRowSpacing}
            className={classes.projectGridRow}
            >
              <GridItem
                position="2"
                xs={12}
                sm={6}
                md={5}
                bgColor={theme.palette.primary.light}
                minHeight={gridItemProjectMinHeight}
                height={gridItemProjectHeight}
              >
                <ImageItem config={configProjects.me_nLibrary} />
              </GridItem>
              <GridItem
                id="project2"
                position="3"
                xs={12}
                sm={6}
                md={7}
                bgColor={theme.palette.primary.light}
                minHeight={gridItemProjectMinHeight}
                height={gridItemProjectHeight}
              >
                <ProjectMain config={configProjects.me_nLibrary} />
              </GridItem>
            </Grid>

            <Grid item xs={12}
            container spacing={projGridRowSpacing}
            className={classes.projectGridRow}
            >
              <GridItem
                id="project3"
                position="4"
                xs={12}
                sm={6}
                md={7}
                bgColor="#fff"
                minHeight={gridItemProjectMinHeight}
                height={gridItemProjectHeight}
              >
                <ProjectMain config={configProjects.personalWebsite} />
              </GridItem>
              <GridItem
                position="5"
                xs={12}
                sm={6}
                md={5}
                bgColor="#fff"
                minHeight={gridItemProjectMinHeight}
                height={gridItemProjectHeight}
              >
                <ImageItem config={configProjects.personalWebsite} />
              </GridItem>
            </Grid>

            <Grid item xs={12}
            container spacing={projGridRowSpacing}
            className={classes.projectGridRow}
            >
              <GridItem
                position="6"
                xs={12}
                sm={6}
                md={5}
                bgColor={theme.palette.primary.light}
                minHeight={gridItemProjectMinHeight}
                height={gridItemProjectHeight}
              >
                <ImageItem config={configProjects.reactSignIn} />
              </GridItem>
              <GridItem
                id="project4"
                position="7"
                xs={12}
                sm={6}
                md={7}
                bgColor={theme.palette.primary.light}
                minHeight={gridItemProjectMinHeight}
                height={gridItemProjectHeight}
              >
                <ProjectMain config={configProjects.reactSignIn} />
              </GridItem>
            </Grid>

            <GridItem
              id="resume"
              position="8"
              xs={12}
              bgColor="#fff"
              minHeight="50vh"
            >
              <ResumeMain />
            </GridItem>
          </Grid>
        </Box>
      {/* </Container> */}
    </>
  )
}