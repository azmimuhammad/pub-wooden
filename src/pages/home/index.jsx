import React from 'react'
import {Grid} from '@mui/material'
import {CarouselWrapper} from './HomePage.style'
import {ContentWrapper, CustomFlex, SubTitle1} from '../../config/Global.styles'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'

import CarouselComponent from '../../components/Carousel'
import HotProductComponent from './HotProduct.component'
import ProductCategoryComponent from './ProductCategory.component'
import MaterialComponent from './Material.component'

import HandymanIcon from '@mui/icons-material/Handyman'
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill'
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining'
import PriceCheckIcon from '@mui/icons-material/PriceCheck'

const iconStyle = {
  fontSize: 35,
}

const highlight = [
  {
    title: 'Custom Design',
    icon: <FormatColorFillIcon sx={{...iconStyle, color: '#478AF8'}} />,
    color: 'red',
  },
  {
    title: 'Custom Material',
    icon: <HandymanIcon sx={{...iconStyle, color: '#ff5722'}} />,
    color: 'red',
  },
  {
    title: 'Free Delivery',
    icon: <DeliveryDiningIcon sx={{...iconStyle, color: '#ffc400'}} />,
    color: 'red',
  },
  {
    title: 'Best Price',
    icon: <PriceCheckIcon sx={{...iconStyle, color: '#3d5afe'}} />,
    color: 'red',
  },
]

const HomePage = () => {
  return (
    <div>
      <CarouselWrapper>
        <Fade>
          <CarouselComponent />
        </Fade>
      </CarouselWrapper>
      <ContentWrapper style={{marginTop: '10px'}}>
        <Grid container style={{paddingTop: '20px', background: '#F2F2F2'}}>
          {highlight.map((item, i) => {
            return (
              <Grid item xs={12} md={3} key={i}>
                <Slide right>
                  <CustomFlex gap="20px" justifyContent="center">
                    {item.icon}
                    <CustomFlex direction="column" padding="0px 20px 20px 0px">
                      <SubTitle1>{item.title}</SubTitle1>
                    </CustomFlex>
                  </CustomFlex>
                </Slide>
              </Grid>
            )
          })}
        </Grid>
      </ContentWrapper>
      <HotProductComponent />
      <ProductCategoryComponent />
      <MaterialComponent />
    </div>
  )
}

export default HomePage
