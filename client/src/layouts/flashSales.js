import { useState, useEffect } from 'react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../components/productCard';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';

function FlashSales() {
    const [products, setProducts] = useState([]);
    const data = useLoaderData();

    useEffect(() => {
        if (Array.isArray(data)) {
            setProducts(data);
        }
    }, [data]);
  return (
    <div className=' w-11/12 md:w-4/5 m-auto pt-[25px] pb-[50px] flex flex-col gap-4 border-b border-gray-400'>
        <div className='flex flex-col gap-7'>
            <div className='flex gap-7 items-center'>
                <div className={`relative w-1 h-6 md:h-10 before:absolute before:left-0 before:top-0 before:content-[''] before:bg-red-500 before:w-4 before:h-full before:rounded-sm`}></div>
                <h1 className='font-semibold text-sm md:text-md text-red-600'>Today's</h1>
            </div>
            <div className='w-full flex justify-between items-center '>
                <div className='flex justify-between items-center'>
                    <h1 className='text-black text-xl md:text-2xl font-medium' style={{whiteSpace:'nowrap'}}>Flash Sales</h1>
                    <div className='flex gap-3 text-red-600 font-black text-xl md:text-2xl items-center ml-[20px]'>
                        <div className='text-xl md:text-2xl font-black text-black'>
                            <p className=' text-xs md:text-sm'>Days</p>
                            <p className=' text-xs md:text-sm'>04</p>
                        </div> :
                        <div className='text-xl md:text-2xl font-black text-black'>
                            <p className='text-xs md:text-sm'>Hours</p>
                            <p className='text-xs md:text-sm'>08</p>
                        </div> :
                        <div className='text-xl md:text-2xl font-black text-black'>
                            <p className='text-xs md:text-sm'>Minutes</p>
                            <p className='text-xs md:text-sm'>23</p>
                        </div> :
                        <div className='text-xl md:text-2xl font-black text-black'>
                            <p className='text-xs md:text-sm font-sm'>Seconds</p>
                            <p className='text-xs md:text-sm font-sm'>40</p>
                        </div>
                    </div>
                </div>
                <div className='md:flex gap-2 text-gray-700 hidden '>
                    <div className='bg-gray-200 rounded-full p-1 cursor-pointer'><FaArrowLeft className='text-xl md:text-2xl' /></div>
                    <div className='bg-gray-200 rounded-full p-1 cursor-pointer'><FaArrowRight className='text-xl md:text-2xl' /></div>
                </div>
            </div>
        </div>
        <div className='flex gap-4 w-full overflow-x-auto scrollbar-x-none  pt-3 pb-10 scroll-snap-x'>
            {products.map((product) => (
                <div className="min-w-[300px] md:min-w-[350px] flex-shrink-0">
                    <ProductCard key={product._id} product={product} />
                </div>
            ))}
        </div>
        <div className='w-full py-10'>
            <button className='block text-white text-xs md:text-md bg-red-600 rounded-md m-auto py-4 px-5'><Link to="/products">View All Products</Link></button>
        </div>  
    </div>
  )
}
export default FlashSales
