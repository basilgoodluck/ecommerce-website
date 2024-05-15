import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function Product() {
  const [details, setDetails] = useState({})
  const location = useLocation()

  useEffect(() => {
    setDetails(location.state.item)
  }, [])    

  useEffect(()=>{
    console.log(details)

  })
  return (
    <div className='w-11/12 lg:w-4/5 m-auto'>
      <div>
        <div className='flex md:flex-col gap-10'>
          <div className='w-24'><img src={details.images[0]} alt={details.title} className='w-full' /></div>
          <div className='w-24'><img src={details.images[0]} alt={details.title} className='w-full' /></div>
          <div className='w-24'><img src={details.images[0]} alt={details.title} className='w-full' /></div>
          <div className='w-24'><img src={details.images[0]} alt={details.title} className='w-full' /></div>
        </div>
        <div></div>
        <div></div>
      </div>
      
    </div>
  )
}

export default Product
