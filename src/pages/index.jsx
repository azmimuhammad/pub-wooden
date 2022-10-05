import React from 'react'
import {Routes, Route} from 'react-router-dom'
import RouterConfig from '../config/Router.config'

import Navbar from '../components/Navbar'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        {RouterConfig.map((item, i) => {
          return <Route path={item.path} element={item.component} key={i} />
        })}
      </Routes>
    </div>
  )
}

export default HomePage
