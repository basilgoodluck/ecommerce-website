import React from 'react'
import { FaArrowRight, FaArrowLeft} from "react-icons/fa";
import OurProductsCard from '../components/ourProductsCard';

function OurProducts() {
  return (
    <div className=' w-11/12 md:w-4/5 m-auto mt-[50px] mb-[50px] flex flex-col gap-11 pb-24 '>
        <div className='flex flex-col gap-3'>
            <div className='flex gap-7 items-center'>
                <div className={`relative w-1 h-10 before:absolute before:left-0 before:top-0 before:content-[''] before:bg-red-500 before:w-4 before:h-full before:rounded-sm`}></div>
                <h1 className='font-semibold text-md text-red-600'>Our Products</h1>
            </div>
            <div className='flex gap-11 items-center justify-between'>
                <h1 className='text-black text-4xl font-medium'>Explore Our Products</h1>
                <div className='flex gap-2 text-gray-700 '>
                    <div className='bg-gray-200 rounded-full p-1 cursor-pointer'><FaArrowLeft className='text-3xl' /></div>
                    <div className='bg-gray-200 rounded-full p-1 cursor-pointer'><FaArrowRight className='text-3xl' /></div>
                </div>
            </div>
            <div className='flex flex-col gap-6'>
                <div className='flex items-center gap-6 justify-between '>
                    <OurProductsCard imageSrc={'./assets/dogFeed.png'} />
                    <OurProductsCard imageSrc={'./assets/camera.png'} />
                    <OurProductsCard imageSrc={'./assets/laptop.png'} />
                    <OurProductsCard imageSrc={'./assets/perfume.png'} />
                </div>
                <div className='flex  items-center gap-6 justify-between'>
                    <OurProductsCard imageSrc={'./assets/mp3Speaker.png'} />
                    <OurProductsCard imageSrc={'./assets/mercedes.png'} />
                    <OurProductsCard imageSrc={'./assets/redJacket.png'} />
                    <OurProductsCard imageSrc={'./assets/keyboard.png'} />
                </div>
            </div> 
        </div>
        <div className='w-full'>
            <button className='block text-white text-md bg-red-600 rounded-md m-auto py-4 px-10'>View All Products</button>
        </div>  
    </div>
  )
}

export default OurProducts
