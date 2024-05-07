import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

function SlideCard({contentImg}) {
  return (
    <div className='w-full flex items-center justify-center p-10 gap-4' style={{flex: '0 0 100%',
        width: '100%',}}>
        <div className='w-full flex flex-col gap-4 items-start'>
            <div className='flex gap-4 items-center'>
                <img src='./assets/iphone_logo.png' alt='iphoneLogo' className='w-full' />
                <p style={{whiteSpace:'nowrap'}}>iPhone 14 Series</p>
            </div>
            <h1 className='text-2xl font-bold'>Up to 10% off Voucher</h1>
            <button style={{whiteSpace:'nowrap'}} className='group underline underline-offset-4 cursor-pointer text-sm md:text-lg'>Shop Now <FaArrowRight className='inline group-hover:translate-x-1 transition-transform'/></button>
        </div>
        <div className=''>
            <img className='w-full' src={contentImg}  alt='iphoneImage' />
        </div>
    </div>    
  )
}

export default SlideCard
