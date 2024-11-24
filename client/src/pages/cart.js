import React from 'react'
import { RiArrowUpSLine } from "react-icons/ri";
import { RiArrowDownSLine } from "react-icons/ri";
import { useCart } from '../hooks/cartContext';

function Cart() {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } = useCart();
  // console.log(cart)
  return (
    <>
    <h1 className='text-xl font-bold px-4 mx-auto mt-5'>Your Cart</h1>
    {cart.length === 0 ? (
      <p className='text-center font-bold text-3xl text-red-600 p-6'>Oops, Your Cart is empty!</p>
    ):(
      <div className="flex flex-col gap-10 w-11/12 m-auto lg:w-4/5 py-10">
      <div className="grid grid-cols-4 shadow shadow-gray-400 py-6 px-4">
        <div>Product</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Subtotal</div>
      </div>
    {cart.map((item) => (
      <div className="grid grid-cols-4 gap-x-11 shadow shadow-gray-400 py-4 px-4 items-center">
        <div className="flex flex-col ">
          <p >{item.title}</p>
        </div>
        <div>${item.price}</div>
        <div>
          <div className="w-fit border border-gray-400 p-3 flex items-center gap-2">
            {item.quantity}
            <div className="flex flex-col justify-between gap-8">
              <button onClick={() => increaseQuantity(item._id)}>
                <RiArrowUpSLine />
              </button>
              <button onClick={() => decreaseQuantity(item._id)}>
                <RiArrowDownSLine />
              </button>
            </div>
          </div>
        </div>
        <div>$900</div>
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
            <p>$799</p>
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
