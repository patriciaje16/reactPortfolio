import React from 'react'
import "./Resume.scss"

const Resume = () => {
  return (
    <div className='Resume-container'>
      <h1 id="resume" className="Resume-header">Resume</h1>
      <div className='paragraph2'> <ul>
        <li><span>International School of Tanganyika:</span> IB diploma</li>
        <li><span>University of Nottingham:</span> Occupational Psychology</li>
        <li><span>British Airways Executive Club:</span> Customer Advisor</li>
      </ul></div>
    </div>
  )
}

export default Resume