import React from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";


function Header() {
  return (
    <div className='bg-gray-800 text-white lg:border-2 lg:border-gray-800'>
        <div className='lg:w-4/5 lg:m-auto lg:p-3 lg:flex lg:justify-between'>
            <p className='lg:text-center lg:w-full'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href='./' className='font-bold px-3'>ShopNow</a></p>
            <p className='' style={{whiteSpace: 'nowrap'}}>English <RiArrowDropDownLine className='inline'/></p>
        </div>
        <div className='w-4/5 '>
            <h1>Ecommerce App</h1>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About</li>
                    <li>Sign Up</li>
                </ul>
            </nav>
            <div>
                <div></div>
                <div>
                    <CiHeart />
                </div>
                <div>
                    <AiOutlineShoppingCart />
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Header
