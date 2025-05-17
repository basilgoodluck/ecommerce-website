import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

function SlideCard({promo_product}) {
  return (
    <div className='w-full flex items-center justify-between gap-4 p-2' style={{flex: '0 0 100%'}}>
        <div className='w-full flex flex-col gap-4 items-start justify-center'>
            <div className='flex gap-4 items-center'>
                <img src='./assets/iphone_logo.png' alt='iphoneLogo' className='w-full' />
                <p className='text-base' style={{whiteSpace:'nowrap'}}>{promo_product.title}</p>
            </div>
            <h1 className='text-xl md:text-2xl font-bold'>{promo_product.incentive}</h1>
            <button style={{whiteSpace:'nowrap'}} className='group underline underline-offset-4 cursor-pointer text-sm md:text-lg'>Shop Now <FaArrowRight className='inline group-hover:translate-x-1 transition-transform'/></button>
        </div>
        <div className='h-full w-full'>
            <img className='object-cover' src={promo_product.img}  alt='iphoneImage' />
        </div>
    </div>    
  )
}

export default SlideCard
