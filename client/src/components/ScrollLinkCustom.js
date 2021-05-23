import React from 'react'
import { Link as ScrollLink } from 'react-scroll'

export default function ScrollLinkCustom({ to , text, handleClose, closeDrawerFunc }) {

  function handleClick() {
    if (handleClose) {
      console.log('run')
      handleClose()
    }
  }

  return (
    <ScrollLink
      activeClass="active"
      to={to}
      spy={true}
      smooth={true}
      offset={-128}
      // offset={0}
      duration={500}
      onClick={closeDrawerFunc ? closeDrawerFunc : handleClose}
    >{text}</ScrollLink>
  )
}