import React, { useState, useEffect } from 'react'

import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Footer from './components/Footer'
import Home from './components/pages/Home'
import Navbar from './components/Navbar'
import ScrollHandler from  './components/ScrollHandler'
import ScrollToTop from './components/ScrollToTop'
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

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [hashStr, setHashStr] = useState('')

  const changeHashStr = id => setHashStr(id)
  const resetHashStr = () => setHashStr('')

  useEffect(() => resetHashStr())

  const toggleSidebar = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setSidebarOpen(open);
  };

  return (
    <div className={classes.app} >
      <Router>  

        {/* <ScrollToTop hashStr={hashStr} /> */}
        <ScrollHandler />
      
        <div>
          <Navbar
            toggleSidebar={toggleSidebar}
            changeHashStr={changeHashStr}
          />
          <Sidebar
            toggleSidebar={toggleSidebar}
            sidebarOpen={sidebarOpen}
            changeHashStr={changeHashStr}
          />
        </div>

        <div className={classes.pageContent}>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
          </Switch>
        </div>

        <div>
          <Footer changeHashStr={changeHashStr} />
        </div>
        
      </Router>
    </div>
  );
}

export default App;
