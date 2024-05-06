import React from 'react'
import FLashSalesCard from '../components/flashSalesCard'

function FlashSales() {
  return (
    <div className=' ml-[4.1667%] md:ml-[10%] mt-[50px] mb-[50px]'>
        <div>
            <div className='relative'>
                <h1 className={` before:content-[''] bg-red-500 w-4 h-full rounded-sm`}>Tday</h1>
            </div>
            <div></div>
        </div>
        <div className='flex gap-11 items-center justify-between'>
            <FLashSalesCard imageSrc={'./assets/gamePad.png'} />
            <FLashSalesCard imageSrc={'./assets/chair.png'}/>
            <FLashSalesCard imageSrc={'./assets/firefox.png'}/>
            <FLashSalesCard imageSrc={'./assets/keyboard.png'}/>
            <FLashSalesCard imageSrc={'./assets/gamePad.png'}/>
            <FLashSalesCard imageSrc={'./assets/chair.png'}/>
            <FLashSalesCard imageSrc={'./assets/firefox.png'}/>
        </div>   
        <div>
            <button>View All Products</button>
        </div>  
    </div>
  )
}

export default FlashSales
