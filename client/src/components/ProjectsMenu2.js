import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ScrollLinkCustom from './ScrollLinkCustom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  navProjectLink: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    borderRadius: 0,
    '&:hover': {
      borderBottom: '1px solid white',
    }
  },
  navBarEndLink: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    height: '64px',
    textTransform: 'uppercase',
    textDecoration: 'none',
    color: 'inherit',
    '&:hover': {
      borderBottom: '1px solid white',
    },
    padding: theme.spacing(1.5),
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize,
  },
  cursorPointer: {
    cursor: 'pointer'
  }
}));

export default function ProjectsMenu(props) {
  const classes = useStyles()
  
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function onMouseEnterFunc() {
    props.setOnProjectsMenu(true);
  }

  function onMouseLeaveFunc() {
    props.setOnProjectsMenu(false);
  }

  return (

    <div onMouseEnter={onMouseEnterFunc} onMouseLeave={onMouseLeaveFunc} className={props.customItemStyle}>
      <div className={`${classes.navBarEndLink} ${classes.cursorPointer}`} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Projects
      </div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>
          <Button color="inherit" className={classes.navProjectLink}>
            <ScrollLinkCustom to="project1" text="Project 1" handleClose={handleClose} />
          </Button>
        </MenuItem>
        <MenuItem>
          <Button color="inherit" className={classes.navProjectLink}>
            <ScrollLinkCustom to="project2" text="Project 2" handleClose={handleClose} />
          </Button>
        </MenuItem>
        <MenuItem>
          <Button color="inherit" className={classes.navProjectLink}>
            <ScrollLinkCustom to="project3" text="Project 3" handleClose={handleClose} />
          </Button>        
        </MenuItem>
        <MenuItem>
          <Button color="inherit" className={classes.navProjectLink}>
            <ScrollLinkCustom to="project4" text="Project 4" handleClose={handleClose} />
          </Button>
        </MenuItem>
      </Menu>
    </div>
  );
}