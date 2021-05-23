import React from 'react'
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
import ProjectsScrollLinks from './ProjectsScrollLinks'

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
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
  homeLink: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
}));

export default function Navbar({ showNavProjects, toggleDrawer }) {
  const classes = useStyles()

  return (
    <AppBar position="sticky" elevation={0} className={classes.appbar}>
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} onClick={toggleDrawer(true)} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        {/* <Typography component={Link} to="/" variant="h6">
          Home
        </Typography> */}
        <Button color="inherit" className={`${classes.btnLinkWrapper} ${classes.homeLink}`}>
          <Link className={`${classes.navBarLink}`} to="/" color="inherit">Home</Link>
        </Button>
        {/* <Button classes component={Link} to="/" color="inherit">Home</Button> */}
          <Box className={classes.grow} />
          
          {showNavProjects &&
          <>
            {/* <Box className={classes.boxBorder}> */}
              <ProjectsMenu customItemStyle={classes.navProjectsMenu} />
              <ProjectsScrollLinks customItemStyle={classes.navProjects}/>
            {/* </Box> */}
          </>}
          <Box className={classes.grow} />
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
    </AppBar>
  )
}