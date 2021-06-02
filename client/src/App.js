import React, { useState } from 'react'

import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Footer from './components/Footer'
import Home from './components/pages/Home'
import Navbar2 from './components/Navbar2'
import Sidebar from './components/Sidebar'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  app: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  pageContent: {
    flexGrow: 1,
  }
})

function App() {
  const classes = useStyles()

  const [showNavProjects, setShowNavProjects] = useState(true)
  const [dwrOpen, setDwrOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home')

  const disableShowNavProjects = () => {
    setShowNavProjects(false)
  }

  const enableShowNavProjects = () => {
    setShowNavProjects(true)
  }

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDwrOpen(open);
  };

  return (
    <div className={classes.app} >
      <Router>

        <div>
          <Navbar2 toggleDrawer={toggleDrawer} showNavProjects={showNavProjects} />
          <Sidebar toggleDrawer={toggleDrawer} dwrOpen={dwrOpen} />
        </div>

        <div className={classes.pageContent}>
          <Switch>
            <Route path="/" exact>
              <Home enableShowNavProjects={enableShowNavProjects} />
            </Route>
            <Route path="/contact" >
              <Contact disableShowNavProjects={disableShowNavProjects} />
            </Route>
            <Route path="/about" >
              <About disableShowNavProjects={disableShowNavProjects} />
            </Route>
          </Switch>
        </div>

        <div>
          <Footer />
        </div>
        
      </Router>
    </div>
  );
}

export default App;
