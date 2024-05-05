import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

function SlideCard() {
  return (
    <div className='flex items-center gap-11 justify-center p-10' style={{flex: '0 0 100%',
        width: '100%',}}>
        <div className='w-full flex flex-col gap-4'>
            <div className='flex gap-4 items-center'>
                <img src='./assets/iphone_logo.png' alt='iphoneLogo' />
                <p style={{whiteSpace:'nowrap'}}>iPhone 14 Series</p>
            </div>
            <h1 className='text-3xl font-bold'>Up to 10% off Voucher</h1>
            <p style={{whiteSpace:'nowrap'}} className='group underline underline-offset-4 cursor-pointer'>Shop Now <FaArrowRight className='inline group-hover:translate-x-1 transition-transform'/></p>
        </div>
        <div className=''>
            <img className='w-full' src='./assets/iphone.png' alt='iphoneImage'/>
        </div>
    </div>    
  )
}

export default SlideCard
