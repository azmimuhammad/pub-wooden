import React from 'react'
import {Divider, Grid} from '@mui/material'
import {ContentWrapper, Title} from '../../config/Global.styles'
import {SummaryWrapper} from './HomePage.style'

import KitchenSetImage from '../../assets/images/top-product/kitchen-set.jpg'
import CupBoardImage from '../../assets/images/top-product/lemari-pakaian.jpg'
import MirrorImage from '../../assets/images/top-product/cermin.jpg'
import TableImage from '../../assets/images/top-product/meja.jpg'
import HangerImage from '../../assets/images/top-product/lemari-gantung.jpg'

const imageStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '5px',
}

const HotProductComponent = () => {
  return (
    <ContentWrapper withPadding>
      <Title marginTop={10}>Produk Terlaris</Title>
      <Divider />
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <img
            src={KitchenSetImage}
            style={{...imageStyle, height: '98%'}}
            alt=""
          />
        </Grid>
        <Grid container item xs={12} md={5} spacing={2}>
          <Grid item xs={12} md={6}>
            <SummaryWrapper>
              <img src={CupBoardImage} style={imageStyle} alt="" />
            </SummaryWrapper>
          </Grid>
          <Grid item xs={12} md={6}>
            <SummaryWrapper>
              <img src={MirrorImage} style={imageStyle} alt="" />
            </SummaryWrapper>
          </Grid>
          <Grid item xs={12} md={6}>
            <SummaryWrapper>
              <img src={TableImage} style={imageStyle} alt="" />
            </SummaryWrapper>
          </Grid>
          <Grid item xs={12} md={6}>
            <SummaryWrapper>
              <img src={HangerImage} style={imageStyle} alt="" />
            </SummaryWrapper>
          </Grid>
        </Grid>
      </Grid>
    </ContentWrapper>
  )
}

export default HotProductComponent
