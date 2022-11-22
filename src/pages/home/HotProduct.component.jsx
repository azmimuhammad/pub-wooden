import React, {useState} from 'react'
import {Divider, Grid} from '@mui/material'
import {ContentWrapper, Title} from '../../config/Global.styles'
import {Highlight} from '../../utils/constans'

import Bounce from 'react-reveal/Bounce'

import DialogDetail from '../../components/Dialog/DialogDetail.component'

const imageStyle = {
  width: '90%',

  borderRadius: '5px',
  cursor: 'pointer',
}

const bestSeller = Highlight[0]
const hotProduct = Highlight.slice(1)

const HotProductComponent = () => {
  const [open, setOpen] = useState(false)
  const [detail, setDetail] = useState(null)

  const onClose = () => {
    setOpen(false)
    setDetail(null)
  }

  const onSelectDetail = (data) => {
    setDetail(data)
    setOpen(true)
  }

  return (
    <ContentWrapper withPadding>
      <Title marginTop={10}>Highlight Produk</Title>
      <Divider />
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <Bounce left>
            <img
              src={bestSeller.picture}
              style={{...imageStyle, maxHeight: '700px'}}
              onClick={() => onSelectDetail(bestSeller)}
              alt=""
            />
          </Bounce>
        </Grid>
        <Grid container item xs={12} md={5} spacing={2}>
          {hotProduct.slice(0, 4).map((val, i) => {
            return (
              <Grid item xs={12} md={6} key={i}>
                <img
                  src={val.picture}
                  style={{...imageStyle, maxHeight: '335px'}}
                  onClick={() => onSelectDetail(val)}
                  alt=""
                />
              </Grid>
            )
          })}
        </Grid>
      </Grid>
      <DialogDetail open={open} onClose={() => onClose()} data={detail} />
    </ContentWrapper>
  )
}

export default HotProductComponent
