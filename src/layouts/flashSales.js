import React from 'react'
import FLashSalesCard from '../components/flashSalesCard';
import { Link } from 'react-router-dom';

function FlashSales({ products }) {

    const returnProducts = ( )=> {
        return products.slice(0, 5).map((item)=>(
            <FLashSalesCard key={item.id} imageSrc={item.images[0]} />

        ))
    }
  return (
    <div className=' w-11/12 md:w-4/5 m-auto pt-[25px] pb-[50px] flex flex-col gap-4 border-b border-gray-400'>
        <div className='flex flex-col gap-7'>
            <div className='flex gap-7 items-center'>
                <div className={`relative w-1 h-6 md:h-10 before:absolute before:left-0 before:top-0 before:content-[''] before:bg-red-500 before:w-4 before:h-full before:rounded-sm`}></div>
                <h1 className='font-semibold text-sm md:text-md text-red-600'>Today's</h1>
            </div>
            <div className='flex justify-between items-center md:justify-normal md:gap-11'>
                <h1 className='text-black text-xl md:text-2xl font-medium' style={{whiteSpace:'nowrap'}}>Flash Sales</h1>
                <div className='flex gap-3 text-red-600 font-black text-xl md:text-2xl items-center ml-[20px]'>
                    <div className='text-xl md:text-2xl font-black text-black'>
                        <p className=' text-xs md:text-sm'>Days</p>
                        <h4>04</h4>
                    </div> :
                    <div className='text-xl md:text-2xl font-black text-black'>
                        <p className='text-xs md:text-sm'>Hours</p>
                        <h4>12</h4>
                    </div> :
                    <div className='text-xl md:text-2xl font-black text-black'>
                        <p className='text-xs md:text-sm'>Minutes</p>
                        <h4>45</h4>
                    </div> :
                    <div className='text-xl md:text-2xl font-black text-black'>
                        <p className='text-xs md:text-sm font-sm'>Seconds</p>
                        <h4>32</h4>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex gap-6 items-center justify-between'>
            {/* <FLashSalesCard imageSrc={'./assets/gamePad.png'} />
            <FLashSalesCard imageSrc={'./assets/chair.png'}/>
            <FLashSalesCard imageSrc={'./assets/firefox.png'}/>
            <FLashSalesCard imageSrc={'./assets/keyboard.png'}/>
            <FLashSalesCard imageSrc={'./assets/gamePad.png'}/>
            <FLashSalesCard imageSrc={'./assets/chair.png'}/>
            <FLashSalesCard imageSrc={'./assets/firefox.png'}/> */}
            {returnProducts()}
        </div>
        <div className='w-full py-10'>
            <button className='block text-white text-xs md:text-md bg-red-600 rounded-md m-auto py-4 px-5'><Link to="/products">View All Products</Link></button>
        </div>  
    </div>
  )
}
export default FlashSales
