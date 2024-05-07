import React from 'react'
import FLashSalesCard from '../components/flashSalesCard'

function FlashSales() {
  return (
    <div className=' w-11/12 md:w-4/5 m-auto mt-[50px] mb-[50px] flex flex-col gap-11 border-b pb-24 border-gray-400'>
        <div className='flex flex-col gap-3'>
            <div className='flex gap-7 items-center'>
                <div className={`relative w-1 h-10 before:absolute before:left-0 before:top-0 before:content-[''] before:bg-red-500 before:w-4 before:h-full before:rounded-sm`}></div>
                <h1 className='font-semibold text-md text-red-600'>Today's</h1>
            </div>
            <div className='flex gap-11 items-center'>
                <h1 className='text-black text-4xl font-medium'>Flash Sales</h1>
                <div className='flex gap-3 text-red-600 font-black text-4xl items-center ml-[20px]'>
                    <div className='text-3xl font-black text-black'>
                        <p className='text-sm font-sm'>Days</p>
                        <h4>04</h4>
                    </div> :
                    <div className='text-3xl font-black text-black'>
                        <p className='text-sm font-sm'>Hours</p>
                        <h4>12</h4>
                    </div> :
                    <div className='text-3xl font-black text-black'>
                        <p className='text-sm font-sm'>Minutes</p>
                        <h4>45</h4>
                    </div> :
                    <div className='text-3xl font-black text-black'>
                        <p className='text-sm font-sm'>Seconds</p>
                        <h4>32</h4>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex gap-6 items-center justify-between'>
            <FLashSalesCard imageSrc={'./assets/gamePad.png'} />
            <FLashSalesCard imageSrc={'./assets/chair.png'}/>
            <FLashSalesCard imageSrc={'./assets/firefox.png'}/>
            <FLashSalesCard imageSrc={'./assets/keyboard.png'}/>
            <FLashSalesCard imageSrc={'./assets/gamePad.png'}/>
            <FLashSalesCard imageSrc={'./assets/chair.png'}/>
            <FLashSalesCard imageSrc={'./assets/firefox.png'}/>
        </div>   
        <div className='w-full'>
            <button className='block text-white text-md bg-red-600 rounded-md m-auto py-4 px-10'>View All Products</button>
        </div>  
    </div>
  )
}

export default FlashSales
