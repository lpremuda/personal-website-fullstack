import React, { useState, useEffect } from 'react'

import { config } from '../config'
import { configProjects } from '../configProjects'

import HomeButton from './HomeButton'
import ScrollLinkCustom from './ScrollLinkCustom'

import { Link, useLocation } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'

import { makeStyles, darken } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Collapse from '@material-ui/core/Collapse';
import Grow from '@material-ui/core/Grow';
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'

const useStyles = makeStyles((theme) => ({
  toolbarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    maxWidth: '1500px',
    margin: 'auto',
  },
  toolbar: {
    [theme.breakpoints.down('xs')]: {
      paddingLeft: theme.spacing(1),
    }
  },
  // Upper Nav Bar
  homeLink: {
    textDecoration: 'none',
    color: 'inherit',
  },
  homeBtnContainer: {
    display: 'flex',
    height: config.Navbar.main.height,
    alignItems: 'center',
    boxSizing: 'border-box',
  },
  // Menu Button
  menuButton: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    display: 'flex',
  },
  grow: {
    flexGrow: 1,
  },
  navProjectsMenu: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  navProjects: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  boxBorder: {
    border: `1px solid ${theme.palette.primary.contrastText}`,
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  navProjectLink: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    borderRadius: 0,
    '&:hover': {
      borderBottom: `1px solid ${theme.palette.primary.contrastText}`,
    }
  },
  navBarEnd: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navLinkBase: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    textTransform: 'uppercase',
    textDecoration: 'none',
    color: 'inherit',
    padding: theme.spacing(1.5),
    cursor: 'pointer',
    fontFamily: theme.typography.fontFamily,
    fontSize: '1.1rem',
  },
  navLinkMain: {
    height: config.Navbar.main.height,
    '&:hover': {
      borderBottom: `1px solid ${theme.palette.primary.contrastText}`,
      backgroundColor: darken(theme.palette.primary.main, config.Navbar.link.darkenValue)
    },
  },
  navLinkSecondary: {
    height: config.Navbar.secondary.height,
    '&:hover': {
      borderBottom: `1px solid ${theme.palette.primary.contrastText}`,
      backgroundColor: darken(theme.palette.primary.light, config.Navbar.link.darkenValue)
    },
  },
  btnLinkWrapper: {
    height: config.Navbar.main.height,
    borderRadius: 0,
    '&:hover': {
      borderBottom: `1px solid ${theme.palette.primary.contrastText}`,
    },
  },
  // Lower Nav Bar (Projects Menu)
  collapseContainer: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
  },
  projectsDropDownWrapper: {
    width: '90%',
    maxWidth: theme.breakpoints.values['md'],
    margin: 'auto',
  },
  projectsDropDown: {
    height: config.Navbar.secondary.height,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  active: {
    borderBottom: `1px solid ${theme.palette.primary.contrastText}`
  }
}));

export default function Navbar({ toggleSidebar, changeHashStr }) {
  const classes = useStyles()

  const onProjectsMenu = true

  const [onProjectsDropDown, setOnProjectsDropDown] = useState(false)

  let location = useLocation()
  useEffect(() => {
    console.log(location.pathname)
  }, [location])

  function onMouseEnterFunc() {
    setOnProjectsDropDown(true);
  }

  function onMouseLeaveFunc() {
    setOnProjectsDropDown(false);
  }

  return (
    <>
      <AppBar color="primary" position="fixed" elevation={4}>
        <div className={classes.toolbarContainer} >
          <Toolbar className={classes.toolbar}>
            <Grow
              in={true}
              {...((onProjectsMenu || onProjectsDropDown) ? { timeout: 400 } : {})}
            >
              <div className={`${classes.homeBtnContainer} ${classes.navLinkMain}`} >
                {location.pathname === '/'
                ?
                  <ScrollLink
                    activeClass={config.scrollLink.activeClass}
                    to="homeTop"
                    spy={config.scrollLink.spy}
                    smooth={config.scrollLink.smooth}
                    offset={config.scrollLink.offset}
                    duration={config.scrollLink.duration}
                  >
                    <HomeButton />
                  </ScrollLink>
                :
                  <Link to="/" className={classes.homeLink}>
                    <HomeButton />
                  </Link>
                }
              </div>
            </Grow>
              <Box className={classes.grow} />
              <IconButton
                color="inherit"
                edge="end"
                onClick={toggleSidebar(true)}
                className={classes.menuButton}
                aria-label="menu">
                  <MenuIcon />
              </IconButton>
              <Box className={classes.navBarEnd}>
                <Box>
                  {location.pathname === '/'
                    ?
                      <ScrollLinkCustom
                        to="resume"
                        text="Resume"
                        showActive={false}
                        className={`${classes.navLinkBase} ${classes.navLinkMain}`}
                      />
                    :
                      <Link
                        to="/#resume"
                        // to="/"
                        className={`${classes.navLinkBase} ${classes.navLinkMain}`}
                        // onClick={() => changeHashStr('resume')}
                      >
                        Resume
                      </Link>
                  }
                </Box>
                <Grow
                  in={true}
                  {...((onProjectsMenu || onProjectsDropDown) ? { timeout: 2000 } : {})}
                >
                  <Link className={`${classes.navLinkBase} ${classes.navLinkMain}`} to="/contact" color="inherit">Contact</Link>
                </Grow>
                <Grow
                  in={true}
                  {...((onProjectsMenu || onProjectsDropDown) ? { timeout: 2250 } : {})}
                >
                  <Link className={`${classes.navLinkBase} ${classes.navLinkMain}`} to="/about" color="inherit">About</Link>
                </Grow>
              </Box>
          </Toolbar>
        </div>
      <Collapse in={location.pathname === "/"} className={classes.collapseContainer}>
        <Box onMouseEnter={onMouseEnterFunc} onMouseLeave={onMouseLeaveFunc} className={classes.projectsDropDownWrapper}>
          <Box className={classes.projectsDropDown}>
            {configProjects.map((configProject,iCP) => {
              const timeout = 500 * iCP + 500

              return (
                <Grow
                  in={location.pathname === "/"}
                  {...((onProjectsMenu || onProjectsDropDown) ? { timeout: timeout } : {})}
                  key={iCP}
                >
                  <div>
                    <ScrollLinkCustom
                      to={`project${iCP+1}`}
                      text={`Project ${iCP+1}`}
                      showActive={true}
                      className={`${classes.navLinkBase} ${classes.navLinkSecondary}`}
                    />
                  </div>
                </Grow> 
              )
              })}
          </Box>
        </Box>
      </Collapse>
      </AppBar>
      {location.pathname !== '/' && <div style={{ height: config.Navbar.main.height }}></div>}
    </>
  )
}