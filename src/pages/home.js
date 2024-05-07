import React from 'react'
import Header from '../layouts/header'
import Footer from '../layouts/footer'
import Hero from '../layouts/hero'
import FlashSales from '../layouts/flashSales'
import Categories from '../layouts/categories'
import BestSellingProducts from '../layouts/bestSellingProducts'
import OurProducts from '../layouts/ourProducts'
import NewArrivals from '../layouts/newArrivals'

function Home() {
  
  return (
    <div className=' -z-50'>
        <Header />
        <Hero /> 
        <FlashSales /> 
        <Categories />
        <BestSellingProducts />
        <OurProducts />
        <NewArrivals />  
        <Footer />  
    </div>
  )
}

export default Home
