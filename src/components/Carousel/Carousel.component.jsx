import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import {Img} from './Carousel.style'
import Banner1 from '../../assets/images/banner-001.png'
import Banner2 from '../../assets/images/banner-002.png'
import Banner3 from '../../assets/images/banner-003.png'

const CarouselComponent = () => {
  const banners = [Banner1, Banner2, Banner3]

  return (
    <Carousel
      autoPlay
      dynamicHeight
      emulateTouch
      infiniteLoop
      showThumbs={false}
    >
      {banners.map((val, key) => {
        return (
          <div key={key}>
            <Img src={val} />
          </div>
        )
      })}
    </Carousel>
  )
}

export default CarouselComponent
