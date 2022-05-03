
import picOfMe from "../../assets/images/me.png"

import React from 'react'
import "./Mainheading.scss"

const MainHeading = () => {
  return (
    <div className='heading-container'>
      <div className='headings'>
      <h1 className="welcome-heading">Welcome! I'm Patricia.</h1>
      <h2 className="header-description">I am training to be a full stack web-developer with _nology.</h2>
      <h1 className="heading-last">Check out my projects below!</h1>
      </div>
<img className="picOfMe" src={picOfMe} alt="Patricia smiling" />
    </div>
  )
}

export default MainHeading