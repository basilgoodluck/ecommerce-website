import React from 'react'
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { TbDeviceWatchStats } from "react-icons/tb";
import { PiHeadphones } from "react-icons/pi";
import { LuGamepad } from "react-icons/lu";
import { CiCamera } from "react-icons/ci";
import { FaArrowRight, FaArrowLeft} from "react-icons/fa";
import { useRef, useState, useEffect } from 'react';

function Categories() {
    const CategoryRef = useRef(null);

  return (
    <div className=' w-11/12 md:w-4/5 m-auto mt-[50px] mb-[50px] flex flex-col gap-11 border-b pb-24 border-gray-400'>
        <div className='flex flex-col gap-3'>
            <div className='flex gap-7 items-center'>
                <div className={`relative w-1 h-6 md:h-10 before:absolute before:left-0 before:top-0 before:content-[''] before:bg-red-500 before:w-4 before:h-full before:rounded-sm`}></div>
                <h1 className='font-semibold text-sm md:text-md text-red-600'>Categories</h1>
            </div>
            <div className='flex gap-11 items-center justify-between'>
                <h1 className='text-black text-xl md:text-2xl font-medium' style={{whiteSpace:'nowrap'}}>Browse By Category</h1>
                <div className='flex gap-2 text-gray-700 '>
                    <div className='bg-gray-200 rounded-full p-1 cursor-pointer'><FaArrowLeft className='text-xl md:text-2xl' /></div>
                    <div className='bg-gray-200 rounded-full p-1 cursor-pointer'><FaArrowRight className='text-xl md:text-2xl' /></div>
                </div>
            </div>
        </div>
        <div className='flex gap-11 items-center overflow-x-hidden ' ref={CategoryRef}>
            <div className='w-32 h-32 md:w-48 md:h-48 hover:bg-red-600 hover:border-red-600 hover:text-white cursor-pointer transition-all  border border-gray-400 rounded-md p-6 flex items-center justify-center flex-col gap-4' style={{flex: '0 0 auto'}}>
                <div className='flex justify-center items-center w-full'><HiOutlineDevicePhoneMobile className=' text-7xl' /></div>
                <div className='text-center font-normal text-xl'><h4>Phones</h4></div>
            </div>
            <div className='w-32 h-32 md:w-48 md:h-48 hover:bg-red-600 hover:border-red-600 hover:text-white cursor-pointer transition-all  border border-gray-400 rounded-md p-6 flex items-center justify-center flex-col gap-4' style={{flex: '0 0 auto'}}>
                <div className='flex justify-center items-center w-full'><HiOutlineDesktopComputer className=' text-7xl' /></div>
                <div className='text-center font-normal text-xl'><h4>Computers</h4></div>
            </div>
            <div className='w-32 h-32 md:w-48 md:h-48 hover:bg-red-600 hover:border-red-600 hover:text-white cursor-pointer transition-all  border border-gray-400 rounded-md p-6 flex items-center justify-center flex-col gap-4' style={{flex: '0 0 auto'}}>
                <div className='flex justify-center items-center w-full'><TbDeviceWatchStats className=' text-7xl' /></div>
                <div className='text-center font-normal text-xl'><h4>SmartWatch</h4></div>
            </div>
            <div className='w-32 h-32 md:w-48 md:h-48 hover:bg-red-600 hover:border-red-600 hover:text-white cursor-pointer transition-all  border border-gray-400 rounded-md p-6 flex items-center justify-center flex-col gap-4' style={{flex: '0 0 auto'}}>
                <div className='flex justify-center items-center w-full'><CiCamera className=' text-7xl' /></div>
                <div className='text-center font-normal text-xl'><h4>Camera</h4></div>
            </div>
            <div className='w-32 h-32 md:w-48 md:h-48 hover:bg-red-600 hover:border-red-600 hover:text-white cursor-pointer transition-all  border border-gray-400 rounded-md p-6 flex items-center justify-center flex-col gap-4' style={{flex: '0 0 auto'}}>
                <div className='flex justify-center items-center w-full'><PiHeadphones className=' text-7xl' /></div>
                <div className='text-center font-normal text-xl'><h4>HeadPhones</h4></div>
            </div>
            <div className='w-32 h-32 md:w-48 md:h-48 hover:bg-red-600 hover:border-red-600 hover:text-white cursor-pointer transition-all  border border-gray-400 rounded-md p-6 flex items-center justify-center flex-col gap-4' style={{flex: '0 0 auto'}}>
                <div className='flex justify-center items-center w-full'><LuGamepad className=' text-7xl' /></div>
                <div className='text-center font-normal text-xl'><h4>Gaming</h4></div>
            </div>
            <div className='w-32 h-32 md:w-48 md:h-48 hover:bg-red-600 hover:border-red-600 hover:text-white cursor-pointer transition-all  border border-gray-400 rounded-md p-6 flex items-center justify-center flex-col gap-4' style={{flex: '0 0 auto'}}>
                <div className='flex justify-center items-center w-full'><HiOutlineDesktopComputer className=' text-7xl' /></div>
                <div className='text-center font-normal text-xl'><h4>Tablets</h4></div>
            </div>
            <div className='w-32 h-32 md:w-48 md:h-48 hover:bg-red-600 hover:border-red-600 hover:text-white cursor-pointer transition-all  border border-gray-400 rounded-md p-6 flex items-center justify-center flex-col gap-4' style={{flex: '0 0 auto'}}>
                <div className='flex justify-center items-center w-full'><HiOutlineDesktopComputer className=' text-7xl' /></div>
                <div className='text-center font-normal text-xl'><h4>Accessories</h4></div>
            </div>
            <div className='w-32 h-32 md:w-48 md:h-48 hover:bg-red-600 hover:border-red-600 hover:text-white cursor-pointer transition-all  border border-gray-400 rounded-md p-6 flex items-center justify-center flex-col gap-4' style={{flex: '0 0 auto'}}>
                <div className='flex justify-center items-center w-full'><HiOutlineDesktopComputer className=' text-7xl' /></div>
                <div className='text-center font-normal text-xl'><h4>Speakers</h4></div>
            </div>
        </div>   
    </div>
  )
}

export default Categories
