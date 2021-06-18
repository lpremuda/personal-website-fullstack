import React, { useEffect } from 'react'

import { makeStyles, useTheme } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  projectsContainer: {
    display: 'flex',
    justifyContent: 'center',
    maxWidth: theme.breakpoints.values['lg'],
    marginBottom: theme.spacing(4),
  },
  gridClass: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '350px',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  aboutMeText: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '350px',
  },
  large: {
    width: theme.spacing(56),
    height: theme.spacing(56),
    maxWidth: '100%',
    maxHeight: '100%',
    [theme.breakpoints.down('xs')]: {
      width: theme.spacing(42),
      height: theme.spacing(42),
    }
  },
  aboutMeBox: {
    padding: theme.spacing(2)
  },
  aboutMeJobTitle: {
    marginTop: theme.spacing(0.5),
  },
  aboutMeLocation: {
    marginTop: theme.spacing(0.25),
  },
  subHeading: {
    fontWeight: 550,
  },
  mtSpacing2: {
    marginTop: theme.spacing(2),
  },
  mlSpacing2: {
    marginLeft: theme.spacing(2),
  },
  aboutMeExperienceContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  aboutMeExperienceColumn: {

  }
}))

export default function About({ disableShowNavProjects }) {
  const classes = useStyles()
  const theme = useTheme()
  
  useEffect(disableShowNavProjects, [])

  return (
    <Box mt={2} mx="auto" className={classes.projectsContainer}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} className={classes.gridClass}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Avatar variant='circle' alt='profile-picture' src='/images/lucas_beach.jpg' className={classes.large} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} className={classes.aboutMeText}>
          <Box className={classes.aboutMeBox}>
            <Typography variant="h2" display="inline" style={{ fontWeight: '700'}}>
              <span>Lucas </span>
            </Typography>
            <Typography variant="h2" display="inline" style={{ fontWeight: '700'}}>
              <span style={{ color: theme.palette.secondary.main }}>Premuda</span>
            </Typography>
            <Typography variant="h4" className={classes.aboutMeJobTitle} color="textSecondary">
              Software/Web Developer
            </Typography>
            <Typography variant="h6" className={classes.aboutMeLocation} color="textSecondary">
              Santa Barbara, CA
            </Typography>
            <Box mt={3}>
              <Typography variant="h6" className={`${classes.subHeading}`}>
                About Me
              </Typography>
              <Typography variant="body1">
                I've been working as an engineer in the infrared imaging industry, primarily focused on test, design, and camera system architecture.
                Throughout my career, I've mostly enjoyed and focused on software, image processing, and data analysis.
                I'm focused on taking my career in the direction of strictly software engineering, particularly web development, which I have enjoyed most out of all of my software endeavors.
                During my time learning and working with web development, I have focused more on front-end development, such as React.js,
              <Typography>
              </Typography>
              </Typography>
              <Typography variant="h6" className={`${classes.mtSpacing2} ${classes.subHeading}`}>
                Interests
              </Typography>
              <Typography variant="body1">
                Front End and Back End Web Development
              </Typography>
              <Typography variant="body1">
                Computer Programming
              </Typography>
              <Typography variant="h6" className={`${classes.mtSpacing2} ${classes.subHeading}`}>
                Experience
              </Typography>
              <Box className={classes.aboutMeExperienceContainer}>
                <Box mr={8} className={classes.aboutMeExperienceColumn}>
                  <Typography variant="body1">Javascript (ES6)</Typography>
                  <Typography variant="body1">HTML5</Typography>
                  <Typography variant="body1">CSS3</Typography>
                  <Typography variant="body1">Node.js</Typography>
                  <Typography variant="body1">Express.js</Typography>
                  <Typography variant="body1">React.js</Typography>
                  <Typography variant="body2" color="textSecondary" className={classes.mlSpacing2}>Material UI</Typography>
                  <Typography variant="body2" color="textSecondary" className={classes.mlSpacing2}>React Bootstrap</Typography>
                  <Typography variant="body2" color="textSecondary" className={classes.mlSpacing2}>React Router</Typography>
                  <Typography variant="body2" color="textSecondary" className={classes.mlSpacing2}>React Hooks</Typography>
                </Box>
                <Box mr={8}>
                  <Typography variant="body1">Python</Typography>
                  <Typography variant="body1">MATLAB</Typography>
                  <Typography variant="body1">Bash</Typography>
                  <Typography variant="body1">C/C++</Typography>
                  <Typography variant="body1">C#</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
