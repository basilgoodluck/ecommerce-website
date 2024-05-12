import React from 'react'

function WishList() {
  return (
    <div className=' w-11/12 md:w-4/5 m-auto mt-[50px] mb-[50px] flex flex-col gap-11 pb-24 '>
        <div className='flex flex-col gap-3'>
            <div className='flex gap-11 items-center justify-between'>
                <h1 className='text-black text-xl md:text-2xl font-medium' style={{whiteSpace:'nowrap'}}>Wishlist(4)</h1>
                <div className=''>
                    <button className='block text-black border border-gray-400 rounded-md py-2 px-5'>Move All to Cart</button>
                </div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
              <h1>sdj</h1>
              <h1>sdj</h1>
              <h1>sdj</h1>
              <h1>sdj</h1>
              <h1>sdj</h1>
            </div> 
        </div>
    </div>
  )
}

export default WishList
