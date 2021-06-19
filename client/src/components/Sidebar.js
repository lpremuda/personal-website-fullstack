import React from 'react';

import { configProjects } from '../configProjects'

import ScrollLinkCustom from './ScrollLinkCustom'

import { Link, useLocation } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import CancelIcon from '@material-ui/icons/Cancel'

const useStyles = makeStyles((theme) => ({
  list: {
    width: '75vw',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    flexGrow: 1,
  },
  sideBarLink: {
    color: 'inherit',
    fontFamily: theme.typography.fontFamily,
    fontSize: '1.8rem',
    fontWeight: 500,
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

export default function Sidebar({ toggleSidebar, sidebarOpen }) {
  const classes = useStyles()
  const location = useLocation()

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleSidebar(false)}
      onKeyDown={toggleSidebar(false)}
    >
      <List>
        <ListItem button key="icon" className={classes.iconContainer} >
            <ListItemIcon className={classes.icon}>
              <CancelIcon fontSize="large" />
            </ListItemIcon>
        </ListItem>
        <ListItem button key="home" className={classes.sideBarLink} >
          <Link to="/" color="inherit" className={classes.link}>Home</Link>
        </ListItem>
      </List>
      <Divider className={classes.divider}/>
      <List>
        {configProjects.map((configProject,iCP) => (
          <ListItem button key={`project${iCP+1}`} className={classes.sideBarLink}>
            {location.pathname === "/"
            ?
              <ScrollLinkCustom to={`project${iCP+1}`} text={`Project ${iCP+1}`} closeDrawerFunc={toggleSidebar(false)} />
            :
              <Link to={`/#project${iCP+1}`} className={classes.link}>
                {`Project ${iCP+1}`}
              </Link>
            }
          </ListItem>
        ))}
      </List>
      <Divider className={classes.divider}/>
      <List>
        <ListItem button key="resume" className={classes.sideBarLink}>
          {location.pathname === "/"
          ?
            <ScrollLinkCustom to="resume" text="Resume" closeDrawerFunc={toggleSidebar(false)} />
          :
            <Link to="/#resume" className={classes.link}>
              Resume
            </Link>
          }
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
        <Drawer anchor='left' open={sidebarOpen} onClose={toggleSidebar(false)}>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}