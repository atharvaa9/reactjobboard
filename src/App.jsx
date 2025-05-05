import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
const App = () => {
  return (
    <>
      <Navbar />
      <Hero title='React Jobs' description='Find your dream job in the tech industry with our React Job Board' />
      <HomeCards />
    </>
  )
}

export default App
