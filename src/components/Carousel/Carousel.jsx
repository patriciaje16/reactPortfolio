import React, { useState } from 'react'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import "./Carousel.scss"


const Carousel = ({ portfolioData, projects }) => {

  const [currentImage, setCurrentImage] = useState(0)
  const length = projects.length

  const nextSlide = () => {
    setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1)
  }

  const prevSlide = () => {
    setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1)
  }


  return (
    <>
    <h1 className='carouselHeading'>Projects</h1>
    <div id="projects"className='carousel'>
      
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {portfolioData.map((project, index) => {
        return (
          <div  className={index === currentImage ? 'slide active' : 'slide'} key={index} >{index === currentImage && <h1 className='projectTitle'>{project.name}</h1>}
            {index === currentImage && 
             <img src={project.image} alt='project' className='project-images' /> 
            } {index === currentImage && <p className="description">
            {project.description}</p> } 
          </div>
          
        )
        
      })}
      
      
      
      
      
    </div>
    </>
  )
}

export default Carousel