import React, { useState, useEffect } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import ProjectsMenu from './ProjectsMenu'
import ProjectsMenu2 from './ProjectsMenu2'
import ProjectsScrollLinks from './ProjectsScrollLinks'
import HomeIcon from '@material-ui/icons/Home';
import Collapse from '@material-ui/core/Collapse';
import Grow from '@material-ui/core/Grow';
import ScrollLinkCustom from './ScrollLinkCustom'
import { useLocation } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  appbar: {
    // alignItems: 'center' // alignItems instead of justifyContent because .MuiAppBar-root default is flex-direction: column
  },
  toolbarContainer: {
    // display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    maxWidth: theme.breakpoints.values['xl'],
    margin: 'auto',
  },
  // // Upper Nav Bar
  // toolbar: {
  //   // margin: 'auto',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   flexGrow: 1,
  // },
  upperNavWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  homeLink: {
    textDecoration: 'none',
    color: 'inherit',
  },
  homeBtnContainer: {
    display: 'flex',
    height: '64px',
    alignItems: 'center',
    boxSizing: 'border-box',
  },
  homeBtn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '64px',
    boxSizing: 'border-box',
    color: 'inherit'
  },
  homeIcon: {
    marginRight: theme.spacing(2)
  },
  // Menu Button
  menuButton: {
    marginRight: theme.spacing(2),
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
  navBarLink: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    height: '64px',
    textTransform: 'uppercase',
    textDecoration: 'none',
    color: 'inherit',
    padding: theme.spacing(1.5),
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize
  },
  btnLinkWrapper: {
    height: '64px',
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
    maxWidth: theme.breakpoints.values['lg'],
    // maxWidth: theme.breakpoints.values['md'],
    margin: 'auto',
  },
  projectsDropDown: {
    height: '64px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
}));

export default function Navbar({ showNavProjects, toggleDrawer }) {
  const classes = useStyles()

  const [onProjectsMenu, setOnProjectsMenu] = useState(true)
  const [onProjectsDropDown, setOnProjectsDropDown] = useState(false)

  let location = useLocation()
  useEffect(() => {
    console.log(location.pathname)
  }, [location])

  function homeBtnClick() {
    topFunction()
  }

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  function onMouseEnterFunc() {
    setOnProjectsDropDown(true);
  }

  function onMouseLeaveFunc() {
    setOnProjectsDropDown(false);
  }

  return (
    <AppBar color="primary" position="fixed" elevation={2} className={classes.appbar} >
      <div className={classes.toolbarContainer} >
        <Toolbar className={classes.toolbar}>
            <div className={classes.homeBtnContainer}>
              <Link to="/" className={classes.homeLink}>
                <Button className={classes.homeBtn} onClick={homeBtnClick}>
                  <HomeIcon fontSize="large" className={classes.homeIcon} />
                  <Typography variant="h6" className={classes.homeTitle}>Lucas.Premuda</Typography>
                </Button>
              </Link>
            </div>
            <IconButton edge="start" className={classes.menuButton} onClick={toggleDrawer(true)} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>

            {/* <Button color="inherit" className={`${classes.btnLinkWrapper} ${classes.homeLink}`}>
              <Link className={`${classes.navBarLink}`} to="/" color="inherit">Home</Link>
            </Button> */}
              <Box className={classes.grow} />
              
              {/* {showNavProjects &&
              <>
                  <ProjectsMenu2 customItemStyle={classes.navProjectsMenu} setOnProjectsMenu={setOnProjectsMenu} />
                  <ProjectsScrollLinks customItemStyle={classes.navProjects}/>
              </>} */}
              {/* <Box className={classes.grow} /> */}
            <Box className={classes.navBarEnd}>
              {/* <Button component={Link} to="/resume" color="inherit">Resume</Button>
              <Button component={Link} to="/contact" color="inherit">Contact</Button>
              <Button component={Link} to="/about" color="inherit">About</Button> */}
              <Button color="inherit" className={classes.btnLinkWrapper}>
                <Link className={classes.navBarLink} to="/resume" color="inherit">Resume</Link>
              </Button>
              <Button color="inherit" className={classes.btnLinkWrapper}>
                <Link className={classes.navBarLink} to="/contact" color="inherit">Contact</Link>
              </Button>
              <Button color="inherit" className={classes.btnLinkWrapper}>
                <Link className={classes.navBarLink} to="/about" color="inherit">About</Link>
              </Button>
            </Box>
        </Toolbar>
      </div>
      {/* {(onProjectsMenu || onProjectsDropDown) && 
      <Box onMouseEnter={onMouseEnterFunc} onMouseLeave={onMouseLeaveFunc} className={classes.projectsDropDown}>

      </Box>} */}
    {/* <Collapse in={onProjectsMenu || onProjectsDropDown}> */}
    <Collapse in={location.pathname === "/"} className={classes.collapseContainer}>
      <Box onMouseEnter={onMouseEnterFunc} onMouseLeave={onMouseLeaveFunc} className={classes.projectsDropDownWrapper}>
        <Box className={classes.projectsDropDown}>
          <Grow
          in={location.pathname === "/"}
          {...((onProjectsMenu || onProjectsDropDown) ? { timeout: 0 } : {})}
          >
            <div className={classes.project}>
              <Button color="inherit" className={`${classes.navBarLink} ${classes.btnLinkWrapper}`}>
                <ScrollLinkCustom to="project1" text="Project 1" />
              </Button>
            </div>
          </Grow>
          <Grow
          in={location.pathname === "/"}
          {...((onProjectsMenu || onProjectsDropDown) ? { timeout: 1000 } : {})}
          >
            <div className={classes.project}>
              <Button color="inherit" className={`${classes.navBarLink} ${classes.btnLinkWrapper}`}>
                <ScrollLinkCustom to="project2" text="Project 2" />
              </Button>
            </div>          
          </Grow>
          <Grow
          in={location.pathname === "/"}
          {...((onProjectsMenu || onProjectsDropDown) ? { timeout: 2000 } : {})}
          >
            <div className={classes.project}>
              <Button color="inherit" className={`${classes.navBarLink} ${classes.btnLinkWrapper}`}>
                <ScrollLinkCustom to="project3" text="Project 3" />
              </Button>
            </div>          
          </Grow>
          <Grow
          in={location.pathname === "/"}
          {...((onProjectsMenu || onProjectsDropDown) ? { timeout: 3000 } : {})}
          >
            <div className={classes.project}>
              <Button color="inherit" className={`${classes.navBarLink} ${classes.btnLinkWrapper}`}>
                <ScrollLinkCustom to="project4" text="Project 4" />
              </Button>
            </div>
          </Grow>
        </Box>
      </Box>
      </Collapse>
    </AppBar>
  )
}