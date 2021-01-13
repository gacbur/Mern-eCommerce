import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom'

import { useState } from 'react';

import Nav from './layouts/Nav'
import Main from './layouts/Main'
import Footer from './layouts/Footer'

import SideDrawer from './components/SideDrawer'
import Backdrop from './components/Backdrop'

import './App.css';

function App() {

  const [sideToggle, setSideToggle] = useState(false)

  return (
    <Router>
      <div className="app">
        <div className="app__content-wrap">
          <Nav show_menu={() => setSideToggle(true)} />
          <SideDrawer show={sideToggle} hide_menu={() => setSideToggle(false)} />
          <Backdrop show={sideToggle} hide_menu={() => setSideToggle(false)} />
          <Main />
        </div>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </Router>
  )
}

export default App;
