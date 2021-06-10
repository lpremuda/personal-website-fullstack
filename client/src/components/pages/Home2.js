import React, { useEffect } from 'react'

import { configProjects } from '../../configProjects'

import GridItem from '../GridItem'
import ImageItem from '../ImageItem'
import ProjectMain from '../ProjectMain'
import ProjectRow from '../ProjectRow'
import ProjectRow2 from '../ProjectRow2'
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

export default function Home2({ enableShowNavProjects }) {
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
        <Box
          display="flex"
          flexDirection="column"
        >
          <ProjectRow2 id="project1" imageFirst={false} config={configProjects.reactSignIn} />
          <ProjectRow2 id="project2" imageFirst={true} config={configProjects.me_nLibrary} />
          <ProjectRow2 id="project3" imageFirst={false} config={configProjects.personalWebsite} />
          <ProjectRow2 id="project4" imageFirst={true} config={configProjects.reactSignIn} />

          <Grid className={classes.projectsGridContainer} container spacing={0} >
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