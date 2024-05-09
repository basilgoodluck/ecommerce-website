import React from 'react'
import Hero from '../layouts/hero'
import FlashSales from '../layouts/flashSales'
import Categories from '../layouts/categories'
import BestSellingProducts from '../layouts/bestSellingProducts'
import OurProducts from '../layouts/ourProducts'
import NewArrivals from '../layouts/newArrivals'

export default function Home() {
  
  return (
    <div>
        <Hero /> 
        <FlashSales /> 
        <Categories />
        <BestSellingProducts />
        <OurProducts />
        <NewArrivals />  
    </div>
  )
}

