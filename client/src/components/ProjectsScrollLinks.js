import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import ScrollLinkCustom from './ScrollLinkCustom'

const useStyles = makeStyles((theme) => ({
  navProjectLink: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    borderRadius: 0,
    // '&:hover': {
    //   borderBottom: '1px solid white',
    // }
  },
  navBarLink: {
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
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
}));

export default function ProjectsScrollLinks(props) {
  const classes = useStyles()

  return (
    <div className={props.customItemStyle}>
      <Button color="inherit" className={`${classes.navBarLink} ${classes.btnLinkWrapper}`}>
        <ScrollLinkCustom to="project1" text="Project 1" />
      </Button>
      <Button color="inherit" className={`${classes.navBarLink} ${classes.btnLinkWrapper}`}>
        <ScrollLinkCustom to="project2" text="Project 2" />
      </Button>
      <Button color="inherit" className={`${classes.navBarLink} ${classes.btnLinkWrapper}`}>
        <ScrollLinkCustom to="project3" text="Project 3" />
      </Button>
      <Button color="inherit" className={`${classes.navBarLink} ${classes.btnLinkWrapper}`}>
        <ScrollLinkCustom to="project4" text="Project 4" />
      </Button>
    </div>
  )
}