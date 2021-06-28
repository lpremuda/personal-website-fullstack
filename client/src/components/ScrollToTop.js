import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { config } from '../config'

export default function ScrollToTop({ hashStr }) {
  const location = useLocation()

  useEffect(()=> {
    console.log('ScrollToTop useEffect() called')
    console.log(`hashStr = ${hashStr}`)
    // if (location.hash) {
    if (hashStr !== '') {
      setTimeout(() => {
        console.log('%cScrollToTop useEffect() - if block', 'color: red, fontWeight: 500')
        // let elem = document.getElementById(location.hash.slice(1))
        let elem = document.getElementById(hashStr)
        // let extraOffset
        // if (hashStr === "project2") {
        //   extraOffset = 144
        // } else if (hashStr === "project3") {
        //   extraOffset = 222
        // } else if (hashStr === "project4") {
        //   extraOffset = 256
        // } else {
        //   extraOffset = 0
        // }
        console.log(elem)
        if (elem) {
          console.log(elem.getBoundingClientRect())
          console.log(`offsetTop = ${elem.offsetTop}`)
          console.log(`elem.getBoundingClientRect().top = ${elem.getBoundingClientRect().top}`)
          console.log(`pageYOffset = ${window.pageYOffset}`)
          console.log(`navBarOffset = ${config.Navbar.navBarOffset}`)
          const yDestination = elem.getBoundingClientRect().top + window.pageYOffset + config.Navbar.navBarOffset
          console.log(`yDestination = ${yDestination}`)
          // setTimeout(() => {
          //   window.scrollTo({top:yDestination, left:0, behavior: "smooth"})
          // },1000)
          // setTimeout(() => {
          //   console.log(`500ms - pageYOffset = ${window.pageYOffset}`)
          //   console.log(`500ms - elem.getBoundingClientRect().top = ${elem.getBoundingClientRect().top}`)
          // },500)
          // setTimeout(() => {
          //   console.log(`500ms - pageYOffset = ${window.pageYOffset}`)
          // },3000)
          window.scrollTo({top:yDestination, left:0, behavior: "smooth"})
          // elem.scrollTop -= 400
          // elem.scrollIntoView({behavior: 'smooth'})
        }
      }, 500)
    } else {
    console.log('ScrollToTop useEffect() - else block')
    window.scrollTo({top:0, left:0, behavior: "smooth"})
    }
  }, [location,])

  return (null)
}
