import React from 'react'
import {Divider, Grid} from '@mui/material'
import {ContentWrapper, Title} from '../../config/Global.styles'
import {CategoryImage} from './HomePage.style'

import Cupboard from '../../assets/images/product-category/cupboard.png'
import Custom from '../../assets/images/product-category/custom.png'
import DeskSet from '../../assets/images/product-category/desk-set.jpg'
import KitchenSet from '../../assets/images/product-category/kitchen-set.png'
import RakGantung from '../../assets/images/product-category/rak-gantung.jpg'
import Backdrop from '../../assets/images/product-category/backdrop.jpg'

const categories = [
  {icon: Cupboard},
  {icon: KitchenSet},
  {icon: RakGantung},
  {icon: DeskSet},
  {icon: Backdrop},
  {icon: Custom},
]

const ProductCategoryComponent = () => {
  return (
    <ContentWrapper withPadding>
      <Title marginTop={10}>Kategori Produk</Title>
      <Divider />
      <Grid container>
        {categories.map((item, i) => {
          return (
            <Grid item xs={6} md={2} key={i} style={{padding: '10px'}}>
              <CategoryImage src={item.icon} alt="" />
            </Grid>
          )
        })}
      </Grid>
    </ContentWrapper>
  )
}

export default ProductCategoryComponent
