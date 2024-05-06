import React from 'react'
import Header from '../layouts/header'
import Footer from '../layouts/footer'
import Hero from '../layouts/hero'
import FlashSales from '../layouts/flashSales'
import Categories from '../layouts/categories'

function Home() {
  
  return (
    <div className=' -z-50'>
        <Header />
        <Hero /> 
        <FlashSales /> 
        <Categories />
        <Footer />    
    </div>
  )
}

export default Home
