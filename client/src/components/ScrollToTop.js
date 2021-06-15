import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { config } from '../config'

export default function ScrollToTop() {
  const location = useLocation()

  useEffect(()=> {
    if (location.hash) {
        let elem = document.getElementById(location.hash.slice(1))
        if (elem) {
          const yDestination = elem.getBoundingClientRect().top + window.pageYOffset + config.Navbar.navBarOffset
          window.scrollTo({top:yDestination, left:0, behavior: "smooth"})
        }
    } else {
    window.scrollTo({top:0, left:0, behavior: "smooth"})
    }
  }, [location,])

  return (null)
}
