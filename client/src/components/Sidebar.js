import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { Link } from 'react-router-dom'
import ScrollLinkCustom from './ScrollLinkCustom'
import CancelIcon from '@material-ui/icons/Cancel'

const useStyles = makeStyles((theme) => ({
  list: {
    width: '75vw',
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    flexGrow: 1,
  },
  sideBarLink: {
    color: 'inherit',
    fontFamily: theme.typography.fontFamily,
    fontSize: '1.5rem',
    justifyContent: 'center', // centers the elements w/ class called out in ListItem element
    textAlign: 'center',      // centers the elements w/ class called out in Link element
    flexGrow: 1,              // centers the elements w/ class called out in Link element
    '&:hover': {
      borderRight: '1px solid white'
    },
    marginTop: theme.spacing(1.5),
    marginBottom: theme.spacing(1.5),
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
  },
  iconContainer: {
    justifyContent: 'center',
  },
  icon: {
    justifyContent: 'center',
    color: 'inherit'
  },
  divider: {
    backgroundColor: theme.palette.primary.contrastText,
  }
}));

export default function Sidebar({ toggleDrawer, dwrOpen }) {
  const classes = useStyles();

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button key="icon" className={classes.iconContainer} >
            <ListItemIcon className={classes.icon}>
              <CancelIcon />
            </ListItemIcon>
        </ListItem>
        <ListItem button key="home" className={classes.sideBarLink} >
          <Link to="/" color="inherit" className={classes.link}>Home</Link>
        </ListItem>
      </List>
      <Divider className={classes.divider}/>
      <List>
        <ListItem button key="project1" className={classes.sideBarLink}>
          <ScrollLinkCustom to="project1" text="Project 1" closeDrawerFunc={toggleDrawer(false)} />
        </ListItem>
        <ListItem button key="project2" className={classes.sideBarLink}>
          <ScrollLinkCustom to="project2" text="Project 2" closeDrawerFunc={toggleDrawer(false)} />
        </ListItem>
        <ListItem button key="project3" className={classes.sideBarLink}>
          <ScrollLinkCustom to="project3" text="Project 3" closeDrawerFunc={toggleDrawer(false)} />
        </ListItem>
        <ListItem button key="project4" className={classes.sideBarLink}>
          <ScrollLinkCustom to="project4" text="Project 4" closeDrawerFunc={toggleDrawer(false)} />
        </ListItem>
      </List>
      <Divider className={classes.divider}/>
      <List>
        <ListItem button key="resume" className={classes.sideBarLink}>
          <ScrollLinkCustom to="resume" text="Resume" closeDrawerFunc={toggleDrawer(false)} />
        </ListItem>
        <ListItem button key="contact" className={classes.sideBarLink}>
          <Link className={classes.link} to="/contact" color="inherit">Contact</Link>
        </ListItem>
        <ListItem button key="about" className={classes.sideBarLink}>
          <Link className={classes.link} to="/about" color="inherit">About</Link>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment>
        <Drawer anchor='left' open={dwrOpen} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}