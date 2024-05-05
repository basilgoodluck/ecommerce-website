import React from 'react'
import Header from '../layouts/header'
import Footer from '../layouts/footer'
import Slider from '../components/slider'

function Home() {
  return (
    <div className='flex flex-col gap-11'>
        <Header />
        <Slider />  
        <Footer />    
    </div>
  )
}

export default Home
