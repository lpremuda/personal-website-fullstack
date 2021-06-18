import React from 'react'

import { config } from '../config'

import { Link as ScrollLink } from 'react-scroll'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  active: {
    borderBottom: '1px solid white'
  }
})

export default function ScrollLinkCustom({ to , text, showActive, activeClass, handleClose, closeDrawerFunc, className }) {
  const classes = useStyles()

  return (
    <ScrollLink
      activeClass={showActive && classes.active}
      to={to}
      spy={config.scrollLink.spy}
      smooth={config.scrollLink.smooth}
      offset={config.scrollLink.offset}
      duration={config.scrollLink.duration}
      onClick={closeDrawerFunc ? closeDrawerFunc : handleClose}
      className={className ? className : ''}
    >{text}</ScrollLink>
  )
}