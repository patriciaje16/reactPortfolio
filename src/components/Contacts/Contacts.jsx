import React from 'react'
import "./Contacts.scss"
import EmailImage from "../../assets/images/email.png"
import GithubImage from "../../assets/images/github.png"
import LinkedinImage from "../../assets/images/linkedin.png"

const Contacts = () => {
  return (
    <div className='container'>
      <h1 id="contact"className="Contacts-header">Contacts</h1>
      <ul className='Contacts-images_list'>
        <div>
          <li ><img className = "email-image"src={EmailImage} alt="Email"/></li>
          <p className='link-title'>Email</p>
        </div>
        <div>
          <li > <a href="https://www.linkedin.com/in/patricia-edwards-706773161/" target="_blank" rel="noreferrer"> <img className="linkedin-image"src={LinkedinImage} alt="LinkedIn"/></a></li>
          <p className='link-title'>LinkedIn</p>
        </div>
        <div>
          <li ><a href="https://github.com/patriciaje16" target="_blank" rel="noreferrer"><img className="github-image" src={GithubImage} alt="Github"/></a></li>
          <p className='link-title'>GitHub</p>
        </div>
        </ul>
    </div>
  )
}

export default Contacts