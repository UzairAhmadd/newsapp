import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import News from './news';


export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">MyNewsApp</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/business" category="business">Business</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/entertainment" category="entertainment">Entertainment</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/general">General</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/health">Health</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/science">Science</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/sports">Sports</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/technology">Technology</a>
              </li>
            </ul>
            <Link type="button" className="btn btn-sm btn-light mx-3" to="/login">Login</Link>
            <Link type="button" className="btn btn-sm btn-secondary" to="/signup">SignUp</Link>

          </div>
        </div>
      </nav>
    )
  }
}
