// import React, { useEffect, useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";


function Header() {    
    return (
        <div className='text-white border-b border-gray-200'>
          <div className='bg-black'>
            <div className='w-11/12 m-auto py-1 md:w-4/5 md:py-2 md:flex md:justify-between md:items-center'>
              <p className='text-sm md:text-center md:w-full md:text-base'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href='./' className='font-bold px-3'>ShopNow</a></p>
              <p className='text-sm hidden md:block' style={{whiteSpace: 'nowrap'}}>English <RiArrowDropDownLine className='inline text-2xl'/></p>
            </div>
          </div>
          <div className=' w-full bg-white text-black pt-16 pb-3 sticky top-0 z-50'>
            <div className='w-11/12 m-auto lg:w-4/5 md:m-auto flex justify-between items-center'>
              <h1 className='font-bold text-xl md:text-2xl' style={{whiteSpace:'nowrap'}}>Ecommerce App</h1>
              <nav className='hidden md:block'>
                <ul className="flex gap-2 lg:gap-4 items-center text-md lg:text-lg">
                    <li><a href='./' className='py-2 px-1 hover:underline hover:underline-offset-2'>Home</a></li>
                    <li><a href='./' className='py-2 px-1 hover:underline hover:underline-offset-2'>Contact</a></li>
                    <li><a href='./' className='py-2 px-1 hover:underline hover:underline-offset-2'>About</a></li>
                    <li><a href='./' className='py-2 px-1 hover:underline hover:underline-offset-2'>Blog</a></li>
                </ul>
               </nav>
              <div className='flex justify-between items-center'>
                <div className='hidden md:flex bg-gray-100 p-2 rounded-xl lg:w-96 lg:flex lg:justify-between lg:items-center'>
                  <input type='text' placeholder='What are you looking for ?' className='bg-inherit text-base lg:w-full outline-0'/>
                  <button><CiSearch className='inline md:text-xl lg:text-2xl text-gray-600'/></button>
                </div>
                <button className='p-2'>
                  <CiHeart className='text-2xl text-red-600'/>
                </button>
                <button className='p-2'>
                  <AiOutlineShoppingCart className='text-2xl text-amber-500'/>
                </button>
                <div className='md:hidden p-2'>
                  <p style={{whiteSpace: "nowrap", cursor:'pointer'}} id='mobile-nav-bar'><MdKeyboardArrowLeft className='inline'/> Menu</p>
                </div>
                <button className='p-2'>
                    <FaRegUserCircle className='text-2xl text-green-500' />
                </button>
              </div>
            </div>
          </div>
        </div>
      )
      
}

export default Header


