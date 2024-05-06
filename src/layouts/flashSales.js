import React from 'react'
import FLashSalesCard from '../components/flashSalesCard'

function FlashSales() {
  return (
    <div className=' ml-[4.1667%] md:ml-[10%] mt-[50px]'>
        <div className='flex gap-11 items-center justify-between'>
            <FLashSalesCard imageSrc={'./assets/gamePad.png'} />
            <FLashSalesCard imageSrc={'./assets/chair.png'}/>
            <FLashSalesCard imageSrc={'./assets/firefox.png'}/>
            <FLashSalesCard imageSrc={'./assets/keyboard.png'}/>
            <FLashSalesCard imageSrc={'./assets/gamePad.png'}/>
            <FLashSalesCard imageSrc={'./assets/chair.png'}/>
            <FLashSalesCard imageSrc={'./assets/firefox.png'}/>
        </div>     
    </div>
  )
}

export default FlashSales
