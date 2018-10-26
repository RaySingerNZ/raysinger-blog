import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'
import './app.css'

import Footer from 'components/Footer'

const App = () => (
  <Router>
    <div>
      <nav>
        <Link to="/">Home</Link>
        {/* <Link to="/about">About</Link> */}
        <Link to="/blog">Blog</Link>
      </nav>
      <div className="content">
        <Routes />
      </div>
      <Footer></Footer>
    </div>
  </Router>
)

export default hot(module)(App)
