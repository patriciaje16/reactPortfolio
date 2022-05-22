import "./Nav.scss"
import React from 'react'


const Nav = () => {
  return (
    <div className="nav">
      <h3 className="my-name">Patricia Edwards</h3>
      
        <ul className="sections-list">
     <li onClick={() => window.location.replace("/#about")} className="aboutMe">About Me</li> 
      <li onClick={() => window.location.replace("/#projects")} className="projects">Projects</li>
      <li onClick={() => window.location.replace("/#resume")} className="resume">Resume</li>
      <li onClick={() => window.location.replace("/#contact")} className="contact">Contact</li>
      </ul>

    </div>
  )
}

export default Nav