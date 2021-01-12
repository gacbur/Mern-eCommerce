import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom'

import Nav from './layouts/Nav'
import Main from './layouts/Main'
import Footer from './layouts/Footer'

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="app__content-wrap">
          <Nav></Nav>
          <Main></Main>
        </div>
        <footer className="footer">
          <Footer></Footer>
        </footer>
      </div>
    </Router>
  )
}

export default App;
