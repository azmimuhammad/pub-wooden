import React from 'react'
import {Grid} from '@mui/material'
import {CarouselWrapper} from './HomePage.style'
import {
  ContentWrapper,
  Title,
  CustomFlex,
  SubTitle1,
  SubTitle2,
} from '../../config/Global.styles'

import CarouselComponent from '../../components/Carousel'
import TaskAltIcon from '@mui/icons-material/TaskAlt'

const highlight = [
  {
    title: 'Custom Design',
    subTitle:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    title: 'Custom Bahan',
    subTitle:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    title: 'Kualitas Terbaik',
    subTitle:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
]

const HomePage = () => {
  return (
    <div>
      <CarouselWrapper>
        <CarouselComponent />
      </CarouselWrapper>
      <ContentWrapper style={{marginTop: '10px'}}>
        <Grid container style={{margin: '40px 0px'}}>
          {highlight.map((item, i) => {
            return (
              <Grid item xs={12} md={4} key={i}>
                <CustomFlex gap="15px" justifyContent="center">
                  <TaskAltIcon sx={{color: '#9a6725', fontSize: 80}} />
                  <CustomFlex direction="column" padding="0px 20px 20px 0px">
                    <SubTitle1>{item.title}</SubTitle1>
                    <SubTitle2>{item.subTitle}</SubTitle2>
                  </CustomFlex>
                </CustomFlex>
              </Grid>
            )
          })}
        </Grid>
        <Title>Produk Terlaris</Title>
        <Grid container>
          <Grid item xs={12} md={5}>
            asdadsaa
          </Grid>
          <Grid item xs={12} md={7}>
            asdadsaa
          </Grid>
        </Grid>
      </ContentWrapper>
    </div>
  )
}

export default HomePage
