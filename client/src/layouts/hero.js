import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import SliderCase from '../components/slider';

function Hero() {
  return (
    <div className='pb-10'>
        <div className='w-11/12 md:w-4/5 m-auto flex lg:gap-11 md:gap-3 md:justify-between lg:justify-normal '>
            <div className='hidden md:block border-r border-gray-400 w-1/3 lg:w-2/6 md:w-3/6'>
                <ul className='h-full flex flex-col justify-between items-start pt-6'>
                    <li><a className=' text-lg p-2 flex justify-between' href='./'>Women's Fashion <MdKeyboardArrowRight className='inline text-2xl' /></a></li>
                    <li><a className=' text-lg p-2 flex justify-between' href='./'>Men's Fashion <MdKeyboardArrowRight  className='inline text-2xl'/></a></li>
                    <li><a className=' text-lg p-2' href='./'>Electronics</a></li>
                    <li><a className=' text-lg p-2' href='./'>Home & Lifestyle</a></li>
                    <li><a className=' text-lg p-2' href='./'>Medicine</a></li>
                    <li><a className=' text-lg p-2' href='./'>Sports and Outdoor</a></li>
                    <li><a className=' text-lg p-2' href='./'>Baby's and Toys</a></li>
                    <li><a className=' text-lg p-2' href='./'>Groceries and Pets</a></li>
                    <li><a className=' text-lg p-2' href='./'>Health and Beauty</a></li>
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
