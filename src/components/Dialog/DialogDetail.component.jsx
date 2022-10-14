import React from 'react'
import {Dialog, Grid, Divider, Slide} from '@mui/material'
import {
  ProductExampleImage,
  CustomFlex,
  CustomText,
  Title,
} from '../../config/Global.styles'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {Carousel} from 'react-responsive-carousel'

import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'

import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList'
import RoomPreferencesIcon from '@mui/icons-material/RoomPreferences'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const DialogDetail = (props) => {
  const {open, onClose, data} = props

  return (
    <Dialog
      onClose={onClose}
      open={open}
      fullWidth
      maxWidth="md"
      keepMounted
      TransitionComponent={Transition}
    >
      <div style={{padding: '20px'}}>
        <Title style={{marginBottom: '20px'}}>Detail Produk</Title>
        {data ? (
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Zoom>
                {data.pictureDetails ? (
                  <Carousel swipeable={true}>
                    {data.pictureDetails.map((val, i) => {
                      return (
                        <div key={i}>
                          <ProductExampleImage src={val} alt="" height={300} />
                        </div>
                      )
                    })}
                  </Carousel>
                ) : (
                  <ProductExampleImage src={data.picture} alt="" />
                )}
              </Zoom>
            </Grid>
            <Grid item xs={12} md={6}>
              <Fade bottom>
                <CustomFlex direction="column" gap="10px">
                  <CustomText fw="bold" fs="16px" fc="#606060">
                    {data.name}
                  </CustomText>
                  <Divider style={{width: '100%'}} />
                  <CustomText fs="14px" fc="#a3a3a3">
                    {data.description}
                  </CustomText>

                  <CustomFlex gap="10px" padding="20px 0 0 0">
                    <FeaturedPlayListIcon sx={{color: '#606060'}} />
                    <CustomText fw="bold" fs="16px" fc="#606060">
                      Fitur-Fitur
                    </CustomText>
                  </CustomFlex>
                  <Divider style={{width: '100%'}} />
                  <Grid container spacing={1}>
                    {data.feature.map((val, i) => {
                      return (
                        <Grid item xs={12} md={6} key={i}>
                          <CustomText fs="14px" fc="#a3a3a3">
                            &#187; {val}
                          </CustomText>
                        </Grid>
                      )
                    })}
                  </Grid>

                  <CustomFlex gap="10px" padding="20px 0 0 0">
                    <RoomPreferencesIcon sx={{color: '#606060'}} />
                    <CustomText fw="bold" fs="16px" fc="#606060">
                      Bahan yang digunakan
                    </CustomText>
                  </CustomFlex>
                  <Divider style={{width: '100%'}} />
                  <Grid container spacing={1}>
                    {data.material.map((val, i) => {
                      return (
                        <Grid item xs={12} md={6} key={i}>
                          <CustomText fs="14px" fc="#a3a3a3">
                            &#187; {val}
                          </CustomText>
                        </Grid>
                      )
                    })}
                  </Grid>
                </CustomFlex>
              </Fade>
            </Grid>
          </Grid>
        ) : (
          <h4>No Detail Data</h4>
        )}
      </div>
    </Dialog>
  )
}

export default DialogDetail
