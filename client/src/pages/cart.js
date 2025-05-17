import React, { useEffect, useState } from 'react'
import { RiArrowUpSLine } from "react-icons/ri";
import { RiArrowDownSLine } from "react-icons/ri";
import { useCart } from '../hooks/cartContext';

function Cart() {
  const [totalPrice, setTotalPrice] = useState(0)
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } = useCart();
  console.log(cart)

  useEffect((total) => {
    for(let i = 0; i < cart.length; i++){
      total+=cart[i].price
    }
    setTotalPrice(parseInt(total))
  }, [cart])
  return (
    <>
    <div className='text-center py-3'>
      <h1 className='text-xl font-bold px-1 mx-auto'>Hey, Odogwu!</h1>
      <p className='px-1'>This is your cart. </p>
    </div>
    {cart.length === 0 ? (
      <div>
        <p className='text-center font-bold text-3xl text-red-600 p-6'>Oops, Your Cart is empty!</p>
      </div>
    ):(
      <div className="flex flex-col gap-3 w-11/12 m-auto lg:w-4/5 py-10 overflow-x-scroll">
        <div className="bg-white/70 grid grid-cols-4 shadow shadow-gray-400 py-6 font-semibold">
          <div>Product</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Subtotal</div>
        </div>
        {cart.map((item) => (
          <div className="grid grid-cols-4 gap-x-5 shadow shadow-gray-400 py-4 px-2 items-center">
            <div className="flex flex-col ">
              <img className='w-6 h-6' src={item.imageURL} alt={item.title} />
              <p className='text-[10px]' style={{whiteSpace: ""}}>{item.title}</p>
            </div>
            <div className='text-[12px]'>${item.price}</div>
            <div>
              <div className="">
                {item.quantity}
              </div>
            </div>
            <div className='text-[12px]'>${item.price * item.quantity}</div>
          </div>))}
          <div className='flex justify-between items-center '>
            <button className='px-6 py-3 border border-gray-200'>
              Return To Shop
            </button>
            <button onClick={clearCart} className='px-6 py-3 border border-gray-200'>
              Clear Cart
            </button>
          </div>
          <div className='flex justify-between flex-col md:flex-row w-full gap-10'>
            <div className='w-2/5'>
              <form className='flex gap-4'>
                <input placeholder='coupon code' className='border border-gray-200 p-2' />
                <button className='bg-red-400 px-6 text-white py-3'>submit</button>
              </form>
            </div>
            <div className='flex flex-col gap-6 md:w-2/5 w-full'>
              <h4>Cart Total</h4>
              <div className='flex justify-between'>
                <p>Subtotal:</p>
                <p>$799</p>
              </div>
              <div className='flex justify-between'>
                <p>Shipping:</p>
                <p>Free</p>
              </div>
              <div className='flex justify-between'>
                <p>Total:</p>
                <p>{parseInt(totalPrice)}</p>
              </div>
              <button className='text-white bg-red-400 px-6 py-3 w-3/5 m-auto'>proceed to checkout</button>
            </div>
          </div>
        </div>
        )}
    </>
  )
}

export default Cart
