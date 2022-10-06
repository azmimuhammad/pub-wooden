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

import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import EmailIcon from '@mui/icons-material/Email'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import CallIcon from '@mui/icons-material/Call'
import LogoIcon from '../../assets/images/logo-square.jpg'
import LogoTextIcon from '../../assets/images/text-logo.png'

const contact = [
  {
    link: 'https://www.facebook.com/mmd.azmi',
    icon: <FacebookIcon />,
    name: 'Azmi Muhammad',
  },
  {
    link: 'https://www.instagram.com/mmd_azmi/',
    icon: <InstagramIcon />,
    name: 'Azmi Muhammad',
  },
  {
    link: 'mailto:azmim@gmail.com',
    icon: <EmailIcon />,
    name: 'Azmi Muhammad',
  },
  {
    link: 'https://bit.ly/ChatAzmi',
    icon: <WhatsAppIcon />,
    name: 'Azmi Muhammad',
  },
  {
    link: 'https://bit.ly/ChatAzmi',
    icon: <CallIcon />,
    name: 'Azmi Muhammad',
  },
]

const FooterComponent = () => {
  return (
    <FooterWrapper>
      <Grid container>
        <Grid item xs={12} md={4}>
          <Content>
            <Logo src={LogoIcon} />
            <TextLogo src={LogoTextIcon} />
          </Content>
        </Grid>
        <Grid item xs={12} md={4}>
          <Content>
            <Title variant={'h6'} align="center">
              Kontak Kami
            </Title>
            <Divider style={{width: '50%', alignSelf: 'center'}} />
            {contact.map((item, i) => {
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
          </Content>
        </Grid>
        <Grid item xs={12} md={4}>
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
              frameborder="0"
              scrolling="no"
              style={{alignSelf: 'center', marginTop: '20px'}}
            ></iframe>
          </Content>
        </Grid>
      </Grid>
    </FooterWrapper>
  )
}

export default FooterComponent
