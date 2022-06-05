import "./Nav.scss"
import React from 'react'


const Nav = () => {
  return (
    <div className="nav">
      <h3 className="my-name">Patricia Edwards</h3>
      
        <ul className="sections-list">
     <li className="aboutMe" ><a href="#about">About Me</a></li> 
     <li className="projects" ><a href="#projects">Projects</a></li>
     <li className="resume" ><a href="#resume">Resume</a></li>
     <li className="contact" ><a href="#contact">About Me</a></li>   
      </ul>

    </div>
  )
}

export default Nav