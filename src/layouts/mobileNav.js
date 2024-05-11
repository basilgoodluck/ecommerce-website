import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from 'react-router-dom';


function MobileNav({ toggleMobileNav, isOpen }) {
  return (
    <div id='mobile-nav' className={`text-black z-50 bg-white shadow-2xl fixed top-0 w-full h-full flex-col justify-start ${isOpen ? 'fixed' : 'hidden'} `}
    style={{
        
    }}>
        <div className='bg-black text-white'>
            <div className='w-11/12 m-auto py-1 md:w-4/5 md:py-2 md:flex md:justify-between md:items-center'>
              <p className='text-sm md:text-center md:w-full md:text-base'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <Link to='/products' className='font-bold px-3'>ShopNow</Link></p>
              <p className='text-sm hidden md:block' style={{whiteSpace: 'nowrap'}}>English <RiArrowDropDownLine className='inline text-2xl'/></p>
            </div>
        </div>
        <div className='w-11/12 m-auto flex justify-between items-center'>
            <h1 className='font-bold text-2xl' style={{whiteSpace: 'nowrap'}}>Ecommerce App</h1>
            <div>
                <button style={{whiteSpace: "nowrap"}} onClick={toggleMobileNav}>Back <MdKeyboardArrowRight className='inline'/></button>
            </div>
        </div>
        <nav className='w-11/12 m-auto '>
            <ul className='flex flex-col gap-10'>
                <li className='border-b pt-5 pb-2 text-xl'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='border-b pt-5 pb-2 text-xl'>
                    <Link to='/products'>Products</Link>
                </li>
                <li className='border-b pt-5 pb-2 text-xl'>
                    <Link to='/contact'>Contact</Link>
                </li>
                <li className='border-b pt-5 pb-2 text-xl'>
                    <Link to='/about'>About</Link>
                </li>
                <li className='border-b pt-5 pb-2 text-xl'>
                    <Link to='/sign-up'>Sign Up</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default MobileNav
