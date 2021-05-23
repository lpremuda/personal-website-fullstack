import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Navbar2 from './components/Navbar2'
import Sidebar from './components/Sidebar'
import Home from './components/pages/Home'
import Resume from './components/pages/Resume'
import Contact from './components/pages/Contact'
import About from './components/pages/About'

function App() {
  
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
    <>
      <div className="App">
        <Router>

          <Navbar2 toggleDrawer={toggleDrawer} showNavProjects={showNavProjects} />
          <Sidebar toggleDrawer={toggleDrawer} dwrOpen={dwrOpen} />

          <Switch>
            <Route path="/" exact>
              <Home enableShowNavProjects={enableShowNavProjects} />
            </Route>
            <Route path="/resume" >
              <Resume disableShowNavProjects={disableShowNavProjects} />
            </Route>
            <Route path="/contact" >
              <Contact disableShowNavProjects={disableShowNavProjects} />
            </Route>
            <Route path="/about" >
              <About disableShowNavProjects={disableShowNavProjects} />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
