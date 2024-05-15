import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function Product() {
  const location = useLocation()

  useEffect(()=>{
    console.log(location)

  })
  return (
    <div>
        <h1>{ location.state.item.title }</h1>
      
    </div>
  )
}

export default Product
