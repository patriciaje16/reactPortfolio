import "./Nav.scss"
import React from 'react'

const Nav = () => {
  return (
    <div className="nav">
      <h3 className="my-name">Patricia Edwards</h3>
      
        <ul className="sections-list">
     <a href="AboutMe-header"><li  className="aboutMe">About Me</li></a> 
      <li className="projects">Projects</li>
      <li className="resume">Resume</li>
      <li className="contact">Contact</li>
      </ul>

    </div>
  )
}

export default Nav