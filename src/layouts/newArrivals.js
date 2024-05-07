import React from 'react'

function NewArrivals() {
  return (
    <div className=' w-11/12 md:w-4/5 m-auto mb-[50px]'>
        <div className='flex flex-col gap-3'>
            <div className='flex gap-7 items-center'>
                <div className={`relative w-1 h-6 md:h-10 before:absolute before:left-0 before:top-0 before:content-[''] before:bg-red-500 before:w-4 before:h-full before:rounded-sm`}></div>
                <h1 className='font-semibold text-sm md:text-md text-red-600'>Featured</h1>
            </div>
            <div className=''>
                <h1 className='text-black text-xl md:text-2xl font-medium' style={{whiteSpace:'nowrap'}}>New Arrival</h1>
            </div>
            <div className=' flex flex-col md:flex-row gap-11 text-white w-full justify-between'>
                <div className='relative bg-black md:w-1/2'>
                    <img src='./assets/playStation.png' className='h-full w-full object-cover' alt='sdfkadk'/>
                    <div className='absolute bottom-3 left-3  flex flex-col gap-2 items-start'>
                        <h4 className='text-2xl font-semibold'>PlayStation 5</h4>
                        <p className='text-md'>Black and White version of the PS5 coming out on sale.</p>
                        <button className='font-semibold text-md underline underline-offset-4'>Shop Now</button>
                    </div>
                </div>
                <div className='md:w-1/2'>
                    <div className='flex flex-col gap-6'>
                        <div className='relative bg-black'>
                            <img src='./assets/hat.png' className='h-full w-full object-cover' alt='sdfadj' />
                            <div className='absolute bottom-3 left-3  flex flex-col gap-2 items-start'>
                                <h4 className='text-2xl font-semibold'>PlayStation 5</h4>
                                <p className='text-md'>Black and White version of the PS5 coming out on sale.</p>
                                <button className='font-semibold text-md underline underline-offset-4'>Shop Now</button>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row gap-6 w-full justify-between'>
                            <div className='relative bg-black md:w-1/2'>
                                <img src='./assets/mp3Speaker.png' className='h-full w-full object-cover' alt='dsfksdf' />
                                <div className='absolute bottom-3 left-3 flex flex-col gap-2 items-start'>
                                    <h4 className='text-2xl font-semibold'>PlayStation 5</h4>
                                    <p className='text-md'>Black and White version of the PS5 coming out on sale.</p>
                                    <button className='font-semibold text-md underline underline-offset-4'>Shop Now</button>
                                </div>
                            </div>
                            <div className='relative bg-black md:w-1/2'>
                                <img src='./assets/perfume.png' className='w-full object-cover h-full' alt='dsksd' />
                                <div className='absolute bottom-3 left-3 flex flex-col gap-2 items-start'>
                                    <h4 className='text-2xl font-semibold'>PlayStation 5</h4>
                                    <p className='text-md'>Black and White version of the PS5 coming out on sale.</p>
                                    <button className='font-semibold text-md underline underline-offset-4'>Shop Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewArrivals
