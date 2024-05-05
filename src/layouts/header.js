// import React, { useEffect, useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";


function Header() {    
    return (
        <div className='text-white border-b border-gray-200 pb-3 z-50'>
          <div className='bg-black'>
            <div className='bg-black w-11/12 m-auto py-2 md:w-4/5 md:p-3 md:flex md:justify-between md:items-center'>
              <p className='text-sm md:text-center md:w-full md:text-base'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href='./' className='font-bold px-3'>ShopNow</a></p>
              <p className='text-sm hidden md:block' style={{whiteSpace: 'nowrap'}}>English <RiArrowDropDownLine className='inline text-2xl'/></p>
            </div>
          </div>
          <div className='w-full bg-white text-black pt-16 pb-3 sticky top-0 z-50'>
            <div className='w-11/12 m-auto md:w-4/5 md:m-auto flex justify-between items-center'>
              <h1 className='font-bold text-2xl md:text-3xl'>Ecommerce App</h1>
              <nav className='hidden md:block'>
                <ul className="flex gap-8 items-center text-lg">
                    <li><a href='./' className='py-2 px-4'>Home</a></li>
                    <li><a href='./' className='py-2 px-4'>Contact</a></li>
                    <li><a href='./' className='py-2 px-4'>About</a></li>
                    <li><a href='./' className='py-2 px-4'>Blog</a></li>
                </ul>
               </nav>
              <div className='flex justify-between items-center'>
                <div className='hidden md:flex bg-gray-200 p-2 rounded-xl lg:w-96 lg:flex lg:justify-between lg:items-center'>
                  <input type='text' placeholder='What are you looking for ?' className='bg-inherit text-base lg:w-full outline-0'/>
                  <CiSearch className='inline text-2xl'/>
                </div>
                <div className='p-2'>
                  <CiHeart className='text-2xl text-red-600'/>
                </div>
                <div className='p-2'>
                  <AiOutlineShoppingCart className='text-2xl text-amber-500'/>
                </div>
                <div className='md:hidden p-2'>
                  <p style={{whiteSpace: "nowrap", cursor:'pointer'}} id='mobile-nav-bar'><MdKeyboardArrowLeft className='inline'/> Menu</p>
                </div>
                <div className='p-2'>
                    <FaRegUserCircle className='text-2xl text-green-500' />
                </div>
              </div>
            </div>
          </div>
        </div>
      )
      
}

export default Header


