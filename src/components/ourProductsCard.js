import React from 'react'
import { FaStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function OurProductsCard({imageSrc, title, price, rate}) {

    const navigate = useNavigate()

    const id = title
    const idString = (id)=>{
        return String(id).toLowerCase().split(" ").join("").slice(0, 10)
    }
    const rootId = idString(id)

    function handleClick (){
        console.log(rootId)
    }
  return (
    <div onClick={handleClick} className='group flex flex-col gap-4 w-96' style={{flex:'0 0 23%'}}>
        <div className='relative h-64 overflow-hidden'>
            <div className='absolute bg-green-600 text-white p-1 text-xs top-2 left-2'>NEW</div>
            <div></div>
            <div></div>
            <img src={imageSrc} alt='gamePad' className='m-auto h-full w-full object-cover' />
            <div className='overflow-hidden'>
            </div>
        </div> 
        <div className='flex flex-col gap-2'>
            <h4 className='font-semibold ' style={{letterSpacing: '1px', whiteSpce: 'nowrap'}}>{title}</h4>
            <div className='flex gap-3 items-center '>
                <p className='text-red-500 font-medium'>${price}</p>
            </div>
            <div className='flex gap-3 '>
                <p className='flex gap-1 items-center'>
                    <FaStar className='text-yellow-500' />
                    <FaStar className='text-yellow-500' />
                    <FaStar className='text-yellow-500' />
                    <FaStar className='text-yellow-500' />
                    <FaStar className='text-yellow-500' />
                </p>
                <p>({rate})</p>
            </div>
        </div>     
    </div>
  )
}
export default OurProductsCard
