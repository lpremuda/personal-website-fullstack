import React from 'react'
import { useTheme } from '@material-ui/styles'

const navBarHeight = 64
const navBarCollapseHeight = 64
const navBarOffset = -navBarHeight - navBarCollapseHeight

export const config = {
  Navbar: {
    main: {
      height: `${navBarHeight}px`,
    },
    secondary: {
      height: `${navBarCollapseHeight}px`,
    },
    link: {
      darkenValue: 0.04,
    },
  },
  scrollLink: {
    spy: true,
    smooth: true,
    offset: navBarOffset,
    duration: 750,
  },
  Footer: {
    link: {
      darkenValue: 0.14,
    }
  }
}