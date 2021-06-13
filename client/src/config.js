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
    navBarOffset: navBarOffset
  },
  scrollLink: {
    spy: true,
    smooth: true,
    offset: navBarOffset,
    duration: 750,
  },
  hero: {
    name: {
      fontWeight: 800,
      colorMain: '#fff',
      colorOff: 'red',
    }
  },
  Footer: {
    link: {
      darkenValue: 0.14,
    }
  },
}