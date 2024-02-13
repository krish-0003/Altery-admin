import React from 'react'
import Slider from 'react-slick'
import './Slider.css'

const ImageSlider = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div style={{ width: '200px', height: '100%' }}>
      <Slider {...settings}>
        {props?.imageData?.map((image, index) => {
          if (image?.isPhoto) {
            return (
              <div key={index} style={{ width: '100%', height: '100%' }}>
                <img
                  src={image?.photoUrl}
                  style={{ width: '100%', height: '100%' }}
                  alt='complaintimage'
                />
              </div>
            )
          }
        })}
      </Slider>
    </div>
  )
}

export default ImageSlider
