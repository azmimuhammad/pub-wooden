import React from 'react'

import './App.css'

import {BrowserRouter} from 'react-router-dom'
import Mainpage from './pages'

// import MainPage from './pages';
// import HomePage from './pages/home';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainPage />,
//   },
//   {
//     path: "/about",
//     element: <HomePage />,
//   },
// ]);

function App() {
  return (
    <BrowserRouter>
      <Mainpage />
    </BrowserRouter>
  )
}

export default App
