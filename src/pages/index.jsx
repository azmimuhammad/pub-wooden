import React from 'react'
import {Fab} from '@mui/material'
import {Routes, Route} from 'react-router-dom'
import RouterConfig from '../config/Router.config'
import {Container} from '../config/Global.styles'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Routes>
          {RouterConfig.map((item, i) => {
            return <Route path={item.path} element={item.component} key={i} />
          })}
        </Routes>
      </Container>
      <Footer />
      <Fab
        component="a"
        href="https://bit.ly/ChatAzmi"
        target="_blank"
        aria-label="add"
        style={{
          backgroundColor: '#25D366',
          margin: 0,
          top: 'auto',
          right: 20,
          bottom: 20,
          left: 'auto',
          position: 'fixed',
        }}
      >
        <WhatsAppIcon />
      </Fab>
    </div>
  )
}

export default HomePage
