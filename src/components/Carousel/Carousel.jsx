import React, { useState } from 'react'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import "./Carousel.scss"


const Carousel = ({ portfolioData, slides }) => {

  const [currentImage, setCurrentImage] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1)
  }

  const prevSlide = () => {
    setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <div className='carousel'>
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {portfolioData.map((slide, index) => {
        return (
          <div className={index === currentImage ? 'slide active' : 'slide'} key={index}>
            {index === currentImage && 
              <img src={slide.image} alt='project' className='project-images' /> 
            } {index === currentImage && <h1>{slide.name}</h1>}
          </div>
        )
        
      })}
      
      
      
      
      
    </div>
  )
}

export default Carousel