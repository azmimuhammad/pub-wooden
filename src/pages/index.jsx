import React from 'react'
import {Routes, Route} from 'react-router-dom'
import RouterConfig from '../config/Router.config'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        {RouterConfig.map((item, i) => {
          return <Route path={item.path} element={item.component} key={i} />
        })}
      </Routes>
      <Footer />
    </div>
  )
}

export default HomePage
