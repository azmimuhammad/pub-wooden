import React from 'react'

import CarouselComponent from '../../components/Carousel'

import {CarouselWrapper} from './HomePage.style'

const HomePage = () => {
  return (
    <div>
      <CarouselWrapper>
        <CarouselComponent />
      </CarouselWrapper>
    </div>
  )
}

export default HomePage
