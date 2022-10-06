import React from 'react'
import {Routes, Route} from 'react-router-dom'
import RouterConfig from '../config/Router.config'
import {Container} from '../config/Global.styles'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

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
    </div>
  )
}

export default HomePage
