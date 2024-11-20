import React from 'react'
import { FaArrowRight, FaArrowLeft} from "react-icons/fa";
import ProductCard from '../components/productCard'

function OurProducts({ products }) {
    
    const bestProducts = ( )=> {
        const filteredProducts = products.filter((item, idx)=>{
            return idx >= 3
        })
        return filteredProducts.slice(4, 16).map((item) => (
            <ProductCard
                product={item}
            />
        ))
    }
  return (
    <div className=' w-11/12 md:w-4/5 m-auto mt-[50px] mb-[50px] flex flex-col gap-11 pb-24 '>
        <div className='flex flex-col gap-3'>
            <div className='flex gap-7 items-center'>
                <div className={`relative w-1 h-6 md:h-10 before:absolute before:left-0 before:top-0 before:content-[''] before:bg-red-500 before:w-4 before:h-full before:rounded-sm`}></div>
                <h1 className='font-semibold text-sm md:text-md text-red-600'>Our Products</h1>
            </div>
            <div className='flex gap-11 items-center justify-between'>
                <h1 className='text-black text-xl md:text-2xl font-medium' style={{whiteSpace:'nowrap'}}>Explore Our Products</h1>
                <div className='flex gap-2 text-gray-700 '>
                    <div className='bg-gray-200 rounded-full p-1 cursor-pointer'><FaArrowLeft className='text-xl' /></div>
                    <div className='bg-gray-200 rounded-full p-1 cursor-pointer'><FaArrowRight className='text-xl' /></div>
                </div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {bestProducts()}
            </div> 
        </div>
        <div className='w-full'>
            <button className='block text-white text-xs md:text-md bg-red-600 rounded-md m-auto py-2 px-5'>View All Products</button>
        </div>  
    </div>
  )
}

export default OurProducts
