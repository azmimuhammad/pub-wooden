import React from 'react'
import {Divider, Grid, Tooltip} from '@mui/material'
import {
  ContentWrapper,
  Title,
  CustomFlex,
  CustomText,
} from '../../config/Global.styles'
import {CategoryImage} from './HomePage.style'
import {Categories} from '../../utils/constans'
import {tooltipClasses} from '@mui/material/Tooltip'
import {styled} from '@mui/material/styles'

import Zoom from 'react-reveal/Zoom'

import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'

const HtmlTooltip = styled(({className, ...props}) => (
  <Tooltip {...props} classes={{popper: className}} />
))(({theme}) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    width: 550,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}))

const ProductCategoryComponent = () => {
  return (
    <ContentWrapper withPadding>
      <Title marginTop={10}>Kategori Produk</Title>
      <Divider />
      <Grid container>
        {Categories.map((item, i) => {
          return (
            <Grid item xs={6} md={2} key={i} style={{padding: '10px'}}>
              <Zoom>
                <HtmlTooltip
                  arrow
                  title={
                    <CustomFlex direction="column" gap="10px" padding="10px">
                      <CustomText fw="bold" fs="16px">
                        {item.name}
                      </CustomText>
                      <CustomFlex gap="5px">
                        {item.isCustomDesign ? (
                          <CheckIcon sx={{fontSize: 13, color: 'green'}} />
                        ) : (
                          <CloseIcon sx={{fontSize: 13, color: 'red'}} />
                        )}
                        <CustomText>Custom Desain</CustomText>
                      </CustomFlex>
                      <CustomFlex gap="5px">
                        {item.isCustomSize ? (
                          <CheckIcon sx={{fontSize: 13, color: 'green'}} />
                        ) : (
                          <CloseIcon sx={{fontSize: 13, color: 'red'}} />
                        )}
                        <CustomText>Custom Ukuran</CustomText>
                      </CustomFlex>
                      <CustomFlex gap="5px">
                        {item.isCustomMaterial ? (
                          <CheckIcon sx={{fontSize: 13, color: 'green'}} />
                        ) : (
                          <CloseIcon sx={{fontSize: 13, color: 'red'}} />
                        )}
                        <CustomText>Bahan Menyesuaikan</CustomText>
                      </CustomFlex>
                    </CustomFlex>
                  }
                >
                  <CategoryImage src={item.picture} alt="" />
                </HtmlTooltip>
              </Zoom>
            </Grid>
          )
        })}
      </Grid>
    </ContentWrapper>
  )
}

export default ProductCategoryComponent
