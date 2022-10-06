import {Grid} from '@mui/material'
import React from 'react'
import {FooterWrapper, Content, Title} from './Footer.style'

const FooterComponent = () => {
  return (
    <FooterWrapper>
      <Grid container>
        <Grid item xs={12} md={4}>
          <Content>
            <Title variant={'h6'} align="center">
              Kontak Kami
            </Title>
          </Content>
        </Grid>
        <Grid item xs={12} md={4}>
          <Content>
            <Title variant={'h6'} align="center">
              Kontak Kami
            </Title>
          </Content>
        </Grid>
        <Grid item xs={12} md={4}>
          <Content>
            <Title variant={'h6'} align="center">
              Kontak Kami
            </Title>
          </Content>
        </Grid>
      </Grid>
    </FooterWrapper>
  )
}

export default FooterComponent
