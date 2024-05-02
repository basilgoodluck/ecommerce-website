import React, { useEffect, useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardArrowLeft } from "react-icons/md";


function Header() {
    const [breakPointWidth, setBreakPointWidth] = useState(false)

    useEffect(()=>{
        const bodyWidth = () => {
            setBreakPointWidth(document.body.clientWidth > 768)
        }
        bodyWidth()

        window.addEventListener('resize', bodyWidth)

        return () => window.removeEventListener('resize', bodyWidth)
    }, [])

    const mobileNav = () => {
        return (
            <div className='h-screen w-screen bg-white p-3'>
                <nav>
                    <ul>
                        <li><a href='./'></a></li>
                        <li><a href='./'></a></li>
                        <li><a href='./'></a></li>
                        <li><a href='./'></a></li>
                        <li><a href='./'></a></li>
                    </ul>
                </nav>
                    
            </div>
        )
    
    }
  return (
        breakPointWidth ? (
            <div className='text-white lg:border-b lg:border-gray-200 pb-3 '>
                <div className='bg-black'>
                    <div className='bg-black lg:w-4/5 lg:m-auto lg:p-3 lg:flex lg:justify-between lg:items-center'>
                        <p className='lg:text-center lg:w-full'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href='./' className='font-bold px-3'>ShopNow</a></p>
                        <p className='' style={{whiteSpace: 'nowrap'}}>English <RiArrowDropDownLine className='inline text-2xl'/></p>
                    </div>
                </div>
                <div className='lg:w-full bg-white text-black pt-16 pb-3'>
                    <div className='lg:w-4/5 lg:m-auto lg:flex lg:justify-between lg:items-center'>
                        <h1 className='font-bold text-3xl'>Ecommerce App</h1>
                        <nav className=''>
                            <ul className="flex justify-between items-center text-lg">
                                <li><a href='./' className='py-2 px-6'>Home</a></li>
                                <li><a href='./' className='py-2 px-6'>Contact</a></li>
                                <li><a href='./' className='py-2 px-6'>About</a></li>
                                <li><a href='./' className='py-2 px-6'>Sign Up</a></li>
                            </ul>
                        </nav>
                        <div className='lg:flex lg:justify-between lg:items-center'>
                            <div className='bg-gray-200 p-2 rounded-xl lg:w-96 lg:flex lg:justify-between lg:items-center'>
                                <input type='text' placeholder='What are you looking for ?' className='bg-inherit text-base lg:w-full outline-0'/>
                                <CiSearch className='inline text-2xl '/>
                            </div>
                            <div className='p-2'>
                                <CiHeart className='text-2xl'/>
                            </div>
                            <div className='p-2'>
                                <AiOutlineShoppingCart className='text-2xl'/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <div className='text-white border-b border-gray-200 pb-3 '>
                <div className='bg-black'>
                    <div className='bg-black w-11/12 m-auto py-2 flex justify-between items-center'>
                        <p className='text-sm ' style={{whiteSpace: 'nowrap'}}>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href='./' className='font-bold px-3'>ShopNow</a></p>
                        <p className='text-sm' style={{whiteSpace: 'nowrap'}}>English <RiArrowDropDownLine className='inline text-2xl'/></p>
                    </div>
                </div>
                <div className='w-full bg-white text-black pt-16 pb-3'>
                    <div className='w-11/12 m-auto flex justify-between items-center'>
                        <h1 className='font-bold text-2xl' style={{whiteSpace: 'nowrap'}}>Ecommerce App</h1>
                        <div className='flex justify-between items-center'>
                            <div className='bg-gray-200 p-2 rounded-xl lg:flex justify-between items-center relative'>
                                <input type='text' placeholder='What are you looking for ?' className='absolte bg-inherit text-base hidden outline-0'/>
                                <CiSearch className='inline text-2xl '/>
                            </div>
                            <div className='p-2'>
                                <CiHeart className='text-2xl'/>
                            </div>
                            <div className='p-2'>
                                <AiOutlineShoppingCart className='text-2xl'/>
                            </div>
                            <div>
                                <p style={{whiteSpace: "nowrap"}}><MdKeyboardArrowLeft className='inline'/> Menu</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
  )
}

export default Header
