import React, { useState, useEffect } from 'react'

import { config } from '../../config'
import { configProjects } from '../../configProjects'

import GridItem from '../GridItem'
import GridItem2 from '../GridItem2'
import ProjectRow from '../ProjectRow'
import ProjectRow2 from '../ProjectRow2'
import ResumeMain from '../ResumeMain'
// import heroImage from '../../images/christopher-gower-m_HRfLhgABo-unsplash.jpg'
// import heroImage from '../../images/casey-horner-O0R5XZfKUGQ-unsplash.jpg'
// import heroImage from '../../images/marek-piwnicki-UlMIs4XFNqY-unsplash.jpg'
// import heroImage from '../../images/florian-schonbrunner-TS6-Mqg_Q5E-unsplash.jpg'
import heroImage from '../../images/ryan-park-LN8lAZsM-NU-unsplash.jpg'

import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Box from '@material-ui/core/Box'
import Collapse from '@material-ui/core/Collapse'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'

import { Link as ScrollLink } from 'react-scroll'

const useStyles = makeStyles((theme) => ({
  heroMainContainer: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.50), rgba(0,0,0,0.50)), url(${heroImage})`,
    backgroundSize: 'cover',
    backgroundPosition: '50% 45%',
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontWeight: config.hero.name.fontWeight,
  },
  // projectsGridContainer: {
  //   width: '100%',
  // },
}));

export default function Home({ enableShowNavProjects }) {
  const classes = useStyles()
  const theme = useTheme()

  const sm = useMediaQuery(theme => theme.breakpoints.down('sm'))
  const up_lg = useMediaQuery(theme => theme.breakpoints.up('lg'))

  const [enCollapse, setEnCollapse] = useState(false)

  useEffect(() => {
    enableShowNavProjects()
    setEnCollapse(true)
  }, [])

  return (
    <>
      {/* HERO     */}
      <Box id="homeTop" className={classes.heroMainContainer}>
        <Box className={classes.heroBoxContainer}>

            <Box
              flex="1 0 60%"
              display="flex"
              alignItems="center"
            >
              <Collapse
                in={enCollapse}
                {...(enCollapse ? { timeout: 1000 } : {})}
                collapsedHeight={0}
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                >
                  <Box
                    display="flex"
                    flexDirection={sm ? "column" : "row"}
                    justifyContent="center"
                    alignItems="center"
                  > 
                    <Typography variant="h1" className={classes.name}>
                      <span style={{ color: config.hero.name.colorMain }}>LUCAS</span>
                    </Typography>
                    <Typography variant="h1" className={classes.name}>
                      <span style={{ color: theme.palette.secondary.main }}>PREMUDA</span>
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant={up_lg ? "h4": "h5"} >
                      Software/Web Developer
                    </Typography>
                  </Box>
                </Box>
              </Collapse>
            </Box>
          

            <Box
              flex="1 0 40%"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
            >
                      <Collapse
            in={enCollapse}
            {...(enCollapse ? { timeout: 1000 } : {})}
            collapsedHeight={0}
          >
              <Typography variant="h3">
                PROJECTS
              </Typography>
              <ScrollLink
                to="project1"
                spy={config.scrollLink.spy}
                smooth={config.scrollLink.smooth}
                offset={config.scrollLink.offset}
                duration={config.scrollLink.duration}
              >
                <IconButton>
                  <ExpandMoreIcon
                    fontSize="large"
                    style={{ color: "#fff", fontSize: "50px"}}
                  />
                </IconButton>
              </ScrollLink>
              </Collapse>
            </Box>
          
        </Box>
      </Box>

      {/* PROJECTS AND RESUME*/}
      <Box
        display="flex"
        flexDirection="column"
      >
        <ProjectRow2 id="project1" imageFirst={false} config={configProjects.reactSignIn} />
        <ProjectRow2 id="project2" imageFirst={true} config={configProjects.me_nLibrary} />
        <ProjectRow2 id="project3" imageFirst={false} config={configProjects.personalWebsite} />
        <ProjectRow2 id="project4" imageFirst={true} config={configProjects.reactSignIn} />
        <ResumeMain />
        {/* <Grid className={classes.projectsGridContainer} container spacing={0} >
          <GridItem2
            id="resume"
            position="8"
            xs={12}
            bgColor="#fff"
            minHeight="50vh"
          >
            <ResumeMain />
          </GridItem2>
        </Grid> */}
      </Box>
    </>
  )
}