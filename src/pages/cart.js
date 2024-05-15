import React from 'react'
import { RiArrowUpSLine } from "react-icons/ri";
import { RiArrowDownSLine } from "react-icons/ri";

function Cart() {
  return (
    <div className="flex flex-col gap-10 w-11/12 m-auto lg:w-4/5 py-10">
      <div className="grid grid-cols-4 shadow shadow-gray-400 py-6 px-4">
        <div>Product</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Subtotal</div>
      </div>
      <div className="grid grid-cols-4 shadow shadow-gray-400 py-4 px-4 items-center">
        <div className="flex gap-4 items-center">
          <img src="./assets/boot.png" alt="dhsfhasdo" className="w-16 object-cover"/>
          <p >Football boot</p>
        </div>
        <div>$900</div>
        <div>
          <div className="w-fit border border-gray-400 p-3 flex items-center gap-2">
            4 
            <div className="flex flex-col justify-between ">
              <button>
                <RiArrowUpSLine />
              </button>
              <button>
                <RiArrowDownSLine />
              </button>
            </div>
          </div>
        </div>
        <div>$900</div>
      </div>
      <div className='flex justify-between items-center '>
         <button className='px-6 py-3 border border-gray-200'>
           Return To Shop
         </button>
         <button className='px-6 py-3 border border-gray-200'>
          Return To Cart
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
  )
}

export default Cart
