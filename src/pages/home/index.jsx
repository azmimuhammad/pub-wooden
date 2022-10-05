import React from 'react'
import {Link} from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      <Link to={'/'}>HOmepage</Link>
      <br />
      <br />
      <Link to={'/about'}>ABOUt</Link>
    </div>
  )
}

export default HomePage
