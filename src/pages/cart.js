import React from 'react'

function Cart() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-4">
        <div>Product</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Subtotal</div>
      </div>
    </div>
  )
}

export default Cart
