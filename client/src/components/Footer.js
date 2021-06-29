import React from 'react'

import { config } from '../config'
import { configProjects } from '../configProjects'

import ScrollLinkCustom from './ScrollLinkCustom'
import WebsiteIcon from './WebsiteIcon'

import { Link, useLocation } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'

import { makeStyles, darken } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
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
    [theme.breakpoints.down('xs')]: {
      paddingLeft: theme.spacing(1),
    },
    height: '75%',
    borderLeft: `2px solid ${theme.palette.primary.contrastText}`
  },
  footerLink: {
    fontFamily: theme.typography.fontFamily,
    // fontSize: theme.typography.fontSize,
    fontSize: '1rem',
    textTransform: 'uppercase',
    textDecoration: 'none',
    color: 'inherit',
    cursor: 'pointer',
    '&:hover': {
      color: darken(theme.palette.primary.contrastText, config.Footer.link.darkenValue)
    }
  },
  iconLink: {
    cursor: 'pointer',
    color: 'inherit',
    '&:hover': {
      color: darken(theme.palette.primary.contrastText, config.Footer.link.darkenValue)
    }
  },
}))

export default function Footer({ changeHashStr }) {
  const classes = useStyles()
  const location = useLocation()

  const mbFooterLink = 1.5
  const mbFooterIcon = 1.5
  const iconFontSize = '2.75rem'

  return (
    <footer>
      <Box className={classes.footerBox}>
        <Container className={classes.footerContainer}>
          <Grid container spacing={0} className={classes.footerGridContainer}>
            <Grid item xs={3} className={classes.footerGridItem}>
              {location.pathname === "/"
              ?
                <ScrollLink
                      activeClass={config.scrollLink.activeClass}
                      to="homeTop"
                      spy={config.scrollLink.spy}
                      smooth={config.scrollLink.smooth}
                      offset={config.scrollLink.offset}
                      duration={config.scrollLink.duration}
                      className={classes.iconLink}
                >
                      <WebsiteIcon fontSize={iconFontSize} />
                </ScrollLink>
              :
                <Link
                  to="/"
                  className={classes.iconLink}
                  onClick={() => changeHashStr('homeTop')}
                >
                  <WebsiteIcon />
                </Link>
              }
            </Grid>
            <Grid item xs={3} className={classes.footerGridItem}>
              {/* PROJECT LINKS */}
              {configProjects.map((configProject, iCP) => (
                <Box mb={mbFooterLink} key={iCP}>
                  {location.pathname === '/'
                  ?
                    <ScrollLinkCustom
                      to={`project${iCP+1}`}
                      text={`Project ${iCP+1}`}
                      showActive={false}
                      className={classes.footerLink} 
                    />
                  :
                    <Link
                      to={`/#project${iCP+1}`}
                      // to="/"
                      className={classes.footerLink}
                      // onClick={() => changeHashStr(`project${iCP+1}`)}
                    >
                      {`Project ${iCP+1}`}
                    </Link>
                  }
                </Box>
              ))}
            </Grid>
            <Grid item xs={3} className={classes.footerGridItem}>
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
                      // to="/#resume"
                      to="/"
                      className={classes.footerLink}
                      onClick={() => changeHashStr('resume')}
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
            <Grid item xs={3} className={classes.footerGridItem}>
              <Box mb={mbFooterIcon}>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/lucas-premuda-151b1a65" className={classes.iconLink}>
                  <LinkedInIcon style={{ fontSize: iconFontSize}} />
                </a>
              </Box>
              <Box mb={mbFooterIcon}>
                <a target="_blank" rel="noreferrer" href="https://github.com/lpremuda" className={classes.iconLink} >
                  <GitHubIcon style={{ fontSize: iconFontSize}} />
                </a>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  )
}