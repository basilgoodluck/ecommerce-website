import React from 'react'
import { FaStar } from "react-icons/fa";

function FLashSalesCard({imageSrc}) {
  return (
    <div className='group flex flex-col gap-4 w-64 rounded-xl' style={{flex: '0 0 auto'}}>
        <div className='bg-gray-200 p-2 relative h-56 md:h-64 rounded-2xl '>
            <div className='rounded-xl absolute bg-red-600 text-white py-1 px-2 top-2 left-2 text-xs '>-50%</div>
            <div></div>
            <div></div>
            <div className='w-full h-full p-5 flex justify-center items-center overflow-hidden'>
                <img src={imageSrc} alt='gamePad' className='m-auto' />
            </div>
        </div> 
        <div className='flex flex-col gap-2'>
            <h4 className='font-semibold ' style={{letterSpacing: '1px', whiteSpace: 'nowrap'}}>HAVIT HV-G92 Gamepad</h4>
            <div className='flex gap-3 items-center '>
                <p className='text-red-500 font-medium'>$200</p>
                <p className='text-gray-400 font-medium'>$500</p>
            </div>
            <div className='flex gap-3 '>
                <p className='flex gap-1 items-center'>
                    <FaStar className='text-yellow-500' />
                    <FaStar className='text-yellow-500' />
                    <FaStar className='text-yellow-500' />
                    <FaStar className='text-yellow-500' />
                    <FaStar className='text-yellow-500' />
                </p>
                <p>(80)</p>
            </div>
        </div>     
    </div>
  )
}
export default FLashSalesCard
