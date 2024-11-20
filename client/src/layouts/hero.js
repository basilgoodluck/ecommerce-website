import React from 'react'
import SliderCase from '../components/slider';

function Hero() {
  return (
    <div className='pb-10'>
        <div className='w-11/12 md:w-4/5 m-auto flex lg:gap-11 md:gap-3 md:justify-between lg:justify-normal '>
            <div className='hidden md:block border-r border-gray-400 w-1/3 lg:w-2/6 md:w-3/6'>
                <ul className='h-full flex flex-col justify-between items-start pt-6'>
                    <li><a className=' text-lg p-2' href='./'>Phones</a></li>
                    <li><a className=' text-lg p-2' href='./'>Computers</a></li>
                    <li><a className=' text-lg p-2' href='./'>SmartWatch</a></li>
                    <li><a className=' text-lg p-2' href='./'>Camera</a></li>
                    <li><a className=' text-lg p-2' href='./'>HeadPhones</a></li>
                    <li><a className=' text-lg p-2' href='./'>Gaming</a></li>
                    <li><a className=' text-lg p-2' href='./'>Tablets</a></li>
                    <li><a className=' text-lg p-2' href='./'>Accessories</a></li>
                    <li><a className=' text-lg p-2' href='./'>Speakers</a></li>
                </ul>
            </div>
            <div className='pt-6 m-auto w-full md:w-3/5 '>
                <SliderCase />
            </div>
        </div>
    </div>
  )
}

export default Hero
