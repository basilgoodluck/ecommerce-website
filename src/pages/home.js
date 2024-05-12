import React from 'react'
import Hero from '../layouts/hero'
import FlashSales from '../layouts/flashSales'
import Categories from '../layouts/categories'
import BestSellingProducts from '../layouts/bestSellingProducts'
import OurProducts from '../layouts/ourProducts'
import NewArrivals from '../layouts/newArrivals'
import { useLoaderData } from 'react-router-dom'

export default function Home() {
  const data = useLoaderData()
  return (
    <div>
        <Hero /> 
        <FlashSales products={data} /> 
        <Categories />
        <BestSellingProducts products={data} />
        <OurProducts products={data} />
        <NewArrivals />  
    </div>
  )
}

