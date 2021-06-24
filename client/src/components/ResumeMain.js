import React from 'react'

import DownloadButton from './DownloadButton'
import resumeSvg from '../images/resume.svg'

import heroImage from '../images/ryan-park-LN8lAZsM-NU-unsplash.jpg'

import { makeStyles } from '@material-ui/styles'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import MuiLink from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  box: {
    color: '#fff',
    backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.75), rgba(0,0,0,0.5)), url(${heroImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 80%',
  },
  container: {
    maxWidth: '1580px',
  },
  projectTitleContainer: {
    height: '100%',
    fontWeight: 700,
    flex: '1 0 30%', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    paddingTop: theme.spacing(2),
  },
  projectDescriptionContainer: {
    height: '100%',
    flex: '1 0 35%',
    display: 'flex',
    flexDirection: 'column',   
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: `${theme.spacing(4)}px`,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: `${theme.spacing(4)}px`,
    },
    paddingRight: `${theme.spacing(4)}px`,
    margin: `${theme.spacing(2)}px 0`,
  },
  projectDescription: {
    marginBottom: theme.spacing(4),
    fontWeight: '600',
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing(4),    
  },
  button: {
    fontSize: '1.6rem',
  },
  largeIcon: {
    fontSize: '2rem',
  },
  resumeSvgContainer: {
    height: '450px',
    width: '450px',
    [theme.breakpoints.down('xs')]: {
      height: '375px',
      width: '375px',
    },
    padding: theme.spacing(2), 
    margin: `${theme.spacing(2)}px 0`,
    boxSizing: 'border-box',
  }
}))

export default function ProjectMain() {
  const classes = useStyles()

  return (
    <Box
      id="resume"
      py={2}
      className={classes.box}
    >
      <Container className={classes.container}>
        <Grid container direction="row" justify="center" spacing={0} >
          <Grid item xs={12}>
            <Box className={classes.projectTitleContainer}>
              <Typography display="block" variant="h2" align="center" className={classes.projectTitleContainer}>
                Download Resume
              </Typography>
            </Box>
          </Grid>
          <Grid container spacing={0} >
            <Grid item xs={12} md={6} justify="center" align="center">
              <Box className={classes.projectDescriptionContainer}>
                <Typography display="block" variant="h4" align="left" className={classes.projectDescription}>
                  Contact information, such as address and phone number, have been removed for privacy.
                  <br />
                  <br />
                  To get in direct contact, you can fill out the&nbsp;
                  <MuiLink color="secondary" href="/contact">
                    contact form
                  </MuiLink>
                  &nbsp;or visit my&nbsp;
                  <MuiLink color="secondary" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/lucas-premuda-151b1a65">
                    LinkedIn page
                  </MuiLink>
                  .
                </Typography>
                <DownloadButton />
              </Box>
            </Grid>
            <Grid item xs={12} md={6} justify="center" align="center" >
              <Box className={classes.resumeSvgContainer}>
                <img src={resumeSvg} alt="resume.svg" />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}