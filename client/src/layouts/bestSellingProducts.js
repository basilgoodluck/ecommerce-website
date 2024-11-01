import React from 'react'
import BestSellingProductsCard from '../components/bestSellingProductsCard'

function BestSellingProducts({ products }) {

    const bestProducts = ( )=> {
        const filteredProducts = products.filter((item, idx)=>{
            return idx >= 9
        })

        return filteredProducts.map((item, idx) => {
            return <BestSellingProductsCard
                key={idx}
                imageSrc={item.images[0]}
            />
        })
    }
  return (
    <div className=' w-11/12 md:w-4/5 m-auto mt-[50px] mb-[50px] flex flex-col gap-11 pb-24'>
        <div className='flex flex-col gap-3'>
            <div className='flex gap-7 items-center'>
                <div className={`relative w-1 h-6 md:h-10 before:absolute before:left-0 before:top-0 before:content-[''] before:bg-red-500 before:w-4 before:h-full before:rounded-sm`}></div>
                <h1 className='font-semibold text-sm md:text-md text-red-600'>This month</h1>
            </div>
            <div className='flex gap-11 items-center justify-between'>
                <h1 className='text-black text-xl md:text-2xl font-medium' style={{whiteSpace:'nowrap'}}>Best Selling Products</h1>
                <div className=''>
                    <button className='block text-sm text-white bg-red-600 py-1 px-3 text-md rounded-md'>View All</button>
                </div>
            </div>
        </div>
        <div className=''>
            <div className='flex gap-6 items-center'>
                { bestProducts()}
            </div>
        </div>   
        <div className='w-full'>
            <button className='block text-white text-xs md:text-md bg-red-600 rounded-md m-auto py-2 px-5'>View All Products</button>
        </div> 
           
    </div>
  )
}

export default BestSellingProducts
