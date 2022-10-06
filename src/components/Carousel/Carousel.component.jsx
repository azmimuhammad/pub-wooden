import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import {Img} from './Carousel.style'

const CarouselComponent = () => {
  return (
    <Carousel
      autoPlay
      dynamicHeight
      emulateTouch
      infiniteLoop
      showThumbs={false}
    >
      <div>
        <Img src="https://images4.alphacoders.com/936/936378.jpg" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <Img src="https://wallpaperaccess.com/full/2381677.jpg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <Img src="https://i.pinimg.com/originals/a5/96/e9/a596e9612df0c371926e1f35da81e387.jpg" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  )
}

export default CarouselComponent
