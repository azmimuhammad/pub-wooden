import React, {useState} from 'react'
import {Divider, Grid} from '@mui/material'
import {ContentWrapper, Title} from '../../config/Global.styles'
import {SummaryWrapper} from './HomePage.style'
import {productList} from '../../utils/constans'

import Bounce from 'react-reveal/Bounce'

import DialogDetail from '../../components/Dialog/DialogDetail.component'

const imageStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '5px',
  cursor: 'pointer',
}

const _productList = productList.sort((a, b) => a.sold - b.sold).reverse()
const bestSeller = _productList[0]
const hotProduct = _productList.slice(1)

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
      <Title marginTop={10}>Produk Terlaris</Title>
      <Divider />
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <Bounce left>
            <img
              src={bestSeller.picture}
              style={{...imageStyle, height: '98%'}}
              onClick={() => onSelectDetail(bestSeller)}
              alt=""
            />
          </Bounce>
        </Grid>
        <Grid container item xs={12} md={5} spacing={2}>
          {hotProduct.slice(0, 4).map((val, i) => {
            return (
              <Grid item xs={12} md={6} key={i}>
                <SummaryWrapper>
                  <Bounce right>
                    <img
                      src={val.picture}
                      style={imageStyle}
                      onClick={() => onSelectDetail(val)}
                      alt=""
                    />
                  </Bounce>
                </SummaryWrapper>
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
