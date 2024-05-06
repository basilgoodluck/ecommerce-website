import React from 'react'

function FLashSalesCard({imageSrc}) {
  return (
    <div className='group flex flex-col gap-4 w-64' style={{flex: '0 0 auto'}}>
        <div className='bg-gray-200 p-2 relative h-64 '>
            <div className='absolute bg-red-600 text-white p-1 top-2 left-2'>-50%</div>
            <div></div>
            <div></div>
            <div className='w-full h-full p-10 flex justify-center items-center overflow-hidden'>
                <img src={imageSrc} alt='gamePad' className='m-auto' />
            </div>
        </div> 
        <div>
            <h4>HAVIT HV-G92 Gamepad</h4>
            <div>
                <p>$200</p>
                <p>$500</p>
            </div>
            <div>
                <p></p>
                <p>(80)</p>
            </div>
        </div>     
    </div>
  )
}
export default FLashSalesCard
