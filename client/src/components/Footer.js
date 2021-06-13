import React from 'react'

import { config } from '../config'
import ScrollLinkCustom from './ScrollLinkCustom'

import { Link, useLocation } from 'react-router-dom'

import { makeStyles, darken } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  footer: {
    height: '1000px',
    backgroundColor: 'black',
    color: 'white',
  },
  footerBox: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    height: '225px',
  },
  footerContainer: {
    height: '100%',
  },
  footerGridContainer: {
    height: '100%',
    alignItems: 'center',
  },
  footerGridItem: {
    boxSizing: 'border-box',
    paddingLeft: theme.spacing(4),
    height: '75%',
    borderLeft: `2px solid ${theme.palette.primary.contrastText}`
  },
  footerLink: {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize,
    textTransform: 'uppercase',
    textDecoration: 'none',
    color: 'inherit',
    cursor: 'pointer',
    '&:hover': {
      color: darken(theme.palette.primary.contrastText, config.Footer.link.darkenValue)
    }
  },
  iconLink: {
    color: 'inherit',
    '&:hover': {
      color: darken(theme.palette.primary.contrastText, config.Footer.link.darkenValue)
    }
  },
}))

const mbFooterLink = 1.25
const mbFooterIcon = 1

export default function Footer() {
  const classes = useStyles()
  const location = useLocation()

  const projectNumbers = [1,2,3,4]

  return (
    <footer>
      <Box className={classes.footerBox}>
        <Container className={classes.footerContainer}>
          <Grid container spacing={0} className={classes.footerGridContainer}>
            <Grid item xs={0} sm={3} />
            <Grid item xs={4} sm={3} className={classes.footerGridItem}>
              {/* PROJECT LINKS */}
              {projectNumbers.map((num) => (
                <Box mb={mbFooterLink}>
                  {location.pathname === '/'
                  ?
                    <ScrollLinkCustom
                      to={`project${num}`}
                      text={`Project ${num}`}
                      showActive={false}
                      className={classes.footerLink} 
                    />
                  :
                    <Link
                      to={`/#project${num}`}
                      className={classes.footerLink}
                    >
                      {`Project ${num}`}
                    </Link>
                  }
                </Box>
              ))}
            </Grid>
            <Grid item xs={4} sm={3} className={classes.footerGridItem}>
              <Box mb={mbFooterLink}>
                {location.pathname === '/'
                  ?
                    <ScrollLinkCustom
                      to="resume"
                      text="Resume"
                      showActive={false}
                      className={classes.footerLink} 
                    />
                  :
                    <Link
                      to="/#resume"
                      className={classes.footerLink}
                    >
                      Resume
                    </Link>
                }
              </Box>
              <Box mb={mbFooterLink}>
                <Link to="/contact" color="inherit" className={classes.footerLink}>
                  Contact
                </Link>
              </Box>
              <Box mb={mbFooterLink}>
                <Link to="/about" color="inherit" className={classes.footerLink}>
                  About
                </Link>
              </Box>
            </Grid>
            <Grid item xs={4} sm={3} className={classes.footerGridItem}>
              <Box mb={mbFooterIcon}>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/lucas-premuda-151b1a65" className={classes.iconLink}>
                  <LinkedInIcon fontSize="large"/>
                </a>
              </Box>
              <Box mb={mbFooterIcon}>
                <a target="_blank" rel="noreferrer" href="https://github.com/lpremuda" className={classes.iconLink} >
                  <GitHubIcon fontSize="large" />
                </a>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  )
}