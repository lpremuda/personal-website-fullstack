import React from 'react'

import DownloadButton from './DownloadButton'
import resumeSvg from '../images/resume.svg'

import { makeStyles } from '@material-ui/styles'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import GetAppIcon from '@material-ui/icons/GetApp'
import MuiLink from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: '1580px',
  },
  projectMainContainer: {
    width: '85%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: 'auto' 
  },
  projectTitleContainer: {
    height: '100%',
    fontWeight: 700,
    flex: '1 0 30%', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // margin: `${theme.spacing(2)}px 0`,
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
    marginBottom: theme.spacing(8)
  },
  buttonsContainer: {
    // height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: '5%',
    // textAlign: 'center',
    // flex: '1 0 35%',
    // margin: `${theme.spacing(2)}px 0`,
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
    padding: theme.spacing(2), 
    margin: `${theme.spacing(2)}px 0`,
    boxSizing: 'border-box',
  }
}))

export default function ProjectMain() {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <Grid container direction="row" justify="center" spacing={0} >
        <Grid item xs={12}>
          <div className={classes.projectTitleContainer}>
            <Typography display="block" variant="h2" align="center" className={classes.projectTitleContainer}>
              Download Resume
            </Typography>
          </div>
        </Grid>
        <Grid container spacing={0} >
          <Grid item xs={12} sm={6} justify="center" align="center">
            <div className={classes.projectDescriptionContainer}>
              <Typography display="block" variant="h4" align="left" className={classes.projectDescription}>
                Contact information, such as address and phone number, have been removed from the resume for privacy.
                <br />
                <br />
              {/* </Typography>
              <Typography display="block" variant="h4" align="center"> */}
                To get in direct contact, you can fill out the&nbsp;
                <MuiLink href="/contact">
                  contact form
                </MuiLink>
                &nbsp;or visit my&nbsp;
                <MuiLink target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/lucas-premuda-151b1a65">
                  LinkedIn page
                </MuiLink>
                .
              </Typography>
              <DownloadButton />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} justify="center" align="center" >
            <div className={classes.resumeSvgContainer}>
              <img src={resumeSvg} alt="resume.svg" />
            </div>
          </Grid>
        </Grid>
        {/* <Grid item xs={12} container alignItems="center" justify="flex-start" className={classes.buttonsContainer}>
          <div className={classes.buttonsContainer}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <DownloadButton />
            </div>
          </div>
        </Grid> */}
      </Grid>
    </Container>
  )
}