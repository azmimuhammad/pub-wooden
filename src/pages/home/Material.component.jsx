import React from 'react'
import {
  Divider,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material'
import {
  ContentWrapper,
  Title,
  CustomFlex,
  CustomText,
} from '../../config/Global.styles'
import {ProductExampleImage} from './HomePage.style'

import Zoom from 'react-reveal/Zoom'

import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList'
import RoomPreferencesIcon from '@mui/icons-material/RoomPreferences'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import KitchenSetImage from '../../assets/images/top-product/kitchen-set.jpg'
import CupboardImage from '../../assets/images/top-product/lemari-pakaian.jpg'
import HangingCupboardImage from '../../assets/images/top-product/lemari-gantung.jpg'

const product = [
  {
    title: 'Kitchen Set',
    picture: KitchenSetImage,
    name: 'Kitchen Set & Lemari Gantung',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    feature: [
      'Lemari Gantung 2 Pintu',
      'Lemari Gantung 4 Pintu',
      'Lemari Berdiri 2 Pintu',
      'Laci',
      'Dll',
    ],
    material: ['kayu', 'baud', 'lem'],
  },
  {
    title: 'Lemari',
    picture: CupboardImage,
    name: 'Lemari Pakaian',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    feature: ['Cermin', '1 Laci', '1 Tempat untuk gantungan'],
    material: ['kayu', 'baud', 'lem'],
  },
  {
    title: 'Furniture Lainnya',
    picture: HangingCupboardImage,
    name: 'Hiasan Dinding Persegi Panjang',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    feature: ['Persegi panjang beberapa ukuran', 'Lampu backlit LED'],
    material: ['kayu', 'baud', 'lem'],
  },
]

const MaterialComponent = () => {
  const [expanded, setExpanded] = React.useState('Kitchen Set')

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : '')
  }

  return (
    <ContentWrapper withPadding>
      <Title marginTop={10}>Contoh Produk</Title>
      <Divider />
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          {product.map((item, i) => {
            return (
              <Accordion
                expanded={expanded === item.title}
                onChange={handleChange(item.title)}
                defaultExpanded
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <CustomText fw="bold" fs="16px">
                    {item.title}
                  </CustomText>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Zoom opposite when={expanded === item.title}>
                        <ProductExampleImage src={item.picture} alt="" />
                      </Zoom>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Zoom opposite when={expanded === item.title}>
                        <CustomFlex direction="column" gap="10px">
                          <CustomText fw="bold" fs="16px" fc="#606060">
                            {item.name}
                          </CustomText>
                          <Divider style={{width: '100%'}} />
                          <CustomText fs="14px" fc="#a3a3a3">
                            {item.description}
                          </CustomText>

                          <CustomFlex gap="10px" padding="20px 0 0 0">
                            <FeaturedPlayListIcon sx={{color: '#606060'}} />
                            <CustomText fw="bold" fs="16px" fc="#606060">
                              Fitur-Fitur
                            </CustomText>
                          </CustomFlex>
                          <Divider style={{width: '100%'}} />
                          <Grid container spacing={1}>
                            {item.feature.map((val, i) => {
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
                            {item.material.map((val, i) => {
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
                      </Zoom>
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            )
          })}
        </Grid>
        <Grid item xs={12} md={4}>
          <Zoom>
            <iframe
              src="https://www.youtube.com/embed/V8VgHSbv5ew?controls=0&autoplay=1&mute=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{width: '100%', height: '400px'}}
            ></iframe>
          </Zoom>
        </Grid>
      </Grid>
    </ContentWrapper>
  )
}

export default MaterialComponent
