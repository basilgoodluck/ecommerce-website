import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

function slider() {
  return (
    <div className='w-full overflow-hidden py-6 text-white'>
        <div>
            <div className='bg-black p-2 w-11/12 md:w-4/5 m-auto'>
                <div className='flex items-center justify-center gap-11'>
                    <dvi>
                        <div>
                            <img src='./assets/iphone_logo.png' alt='iphoneLogo' />
                            <p>iPhone 14 Series</p>
                        </div>
                        <h1 className='text-2xl font-bold'>Up to 10% off Voucher</h1>
                        <p>Shop Now <FaArrowRight /></p>
                    </dvi>
                    <dvi><img className='w-full' src='./assets/iphone.png' alt='iphoneImage'/></dvi>
                </div>
            </div>
        </div>
        <div className='w-full h-20 flex justify-center items-center gap-2'>
            <button className='w-1 h-1 rounded-full bg-gray-400 p-1'></button>
            <button className='w-1 h-1 rounded-full bg-gray-400 p-1'></button>
            <button className='w-1 h-1 rounded-full bg-gray-400 p-1'></button>
            <button className='w-1 h-1 rounded-full bg-gray-400 p-1'></button>
            <button className='w-1 h-1 rounded-full bg-gray-400 p-1'></button>
        </div>
    </div>
  )
}

export default slider
