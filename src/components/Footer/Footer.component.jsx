import {Divider, Grid, Typography} from '@mui/material'
import React from 'react'
import {
  FooterWrapper,
  Content,
  Title,
  LinkContant,
  TextLogo,
  Logo,
} from './Footer.style'
import {CustomFlex} from '../../config/Global.styles'
import {Contact} from '../../utils/constans'

import Fade from 'react-reveal/Fade'

import LogoIcon from '../../assets/images/logo-square.jpg'
import LogoTextIcon from '../../assets/images/text-logo.png'

const FooterComponent = () => {
  return (
    <FooterWrapper>
      <Grid container>
        <Grid item xs={12} md={4}>
          <Fade bottom>
            <Content>
              <Logo src={LogoIcon} />
              <TextLogo src={LogoTextIcon} />
            </Content>
          </Fade>
        </Grid>
        <Grid item xs={12} md={4}>
          <Content>
            <Title variant={'h6'} align="center">
              Kontak Kami
            </Title>
            <Divider style={{width: '50%', alignSelf: 'center'}} />
            <Fade bottom>
              {Contact.map((item, i) => {
                return (
                  <CustomFlex style={{gap: '10px'}} key={i}>
                    {item.icon}
                    <LinkContant
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.name}
                    </LinkContant>
                  </CustomFlex>
                )
              })}
            </Fade>
          </Content>
        </Grid>
        <Grid item xs={12} md={4}>
          <Fade bottom>
            <Content>
              <Title align="center">Alamat</Title>
              <Divider style={{width: '50%', alignSelf: 'center'}} />
              <Typography align="center">
                Jln. Terusan Kaum RT 15/05 Desa Pagaden, Kecamatan Pagaden,
                Kabupaten Subang - 41252
              </Typography>
              <iframe
                title="address"
                width="300"
                height="300"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=GRV4+C88,%20Neglasari,%20Kec.%20Pagaden,%20Kabupaten%20Subang,%20Jawa%20Barat%2041252&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                style={{alignSelf: 'center', marginTop: '20px'}}
              ></iframe>
            </Content>
          </Fade>
        </Grid>
      </Grid>
    </FooterWrapper>
  )
}

export default FooterComponent
