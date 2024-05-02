import React, { useEffect, useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";


function Header() {
    const [activeNav, setActiveNav] = useState(false)

    useEffect(() => {
        const handleClick = ()=>{
            setActiveNav(true)
            console.log('dsoifds')
        }
        document.getElementById('mobile-nav-bar').addEventListener('click', ()=>{
            handleClick()
        })
    }, [])

    const [breakPointWidth, setBreakPointWidth] = useState(false)

    useEffect(()=>{
        const bodyWidth = () => {
            setBreakPointWidth(document.body.clientWidth > 768)
        }
        bodyWidth()

        window.addEventListener('resize', bodyWidth)

        return () => window.removeEventListener('resize', bodyWidth)
    }, [])

    const mobileNav = () => (
            <div className={`text-black h-screen pt-4 p-3 z-40 bg-white shadow-2xl absolute top-0 ${activeNav ? 'w-4/5 left-0' : 'w-0 -left-96'}`} style={{transition: 'ease .5s '}}>
                <div className='w-11/12 m-auto flex justify-between items-center'>
                        <h1 className='font-bold text-2xl' style={{whiteSpace: 'nowrap'}}>Ecommerce App</h1>
                        <div>
                            <p style={{whiteSpace: "nowrap"}}>Back <MdKeyboardArrowRight className='inline'/></p>
                        </div>
                    </div>
                <nav className='w-11/12 m-auto py-10'>
                    <ul className='grid gap-4'>
                        <li className='border-b pt-5 pb-2 text-xl'><a href='./'>Home</a></li>
                        <li className='border-b pt-5 pb-2 text-xl'>
                            <div>
                                Categories <RiArrowDropDownLine className='inline text-2xl'/>
                                <ul className='h-0 overflow-hidden '>
                                    <li><a className='text-base p-2' href='./'>Women's Fashion</a></li>
                                    <li><a className='text-base p-2' href='./'>Men's Fashion</a></li>
                                    <li><a className='text-base p-2' href='./'>Electronics</a></li>
                                    <li><a className='text-base p-2' href='./'>Home & Lifestyle</a></li>
                                    <li><a className='text-base p-2' href='./'>Medicine</a></li>
                                    <li><a className='text-base p-2' href='./'>Sports and Outdoor</a></li>
                                    <li><a className='text-base p-2' href='./'>Baby's and Toys</a></li>
                                    <li><a className='text-base p-2' href='./'>Groceries and Pets</a></li>
                                    <li><a className='text-base p-2' href='./'>Health and Beauty</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className='border-b pt-5 pb-2 text-xl'><a href='./'>Contact</a></li>
                        <li className='border-b pt-5 pb-2 text-xl'><a href='./'>About</a></li>
                        <li className='border-b pt-5 pb-2 text-xl'><a href='./'>Sign Up</a></li>
                    </ul>
                </nav>
                    
            </div>
        )
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
                                <p style={{whiteSpace: "nowrap", cursor:'pointer'}} id='mobile-nav-bar'><MdKeyboardArrowLeft className='inline'/> Menu</p>
                            </div>
                        </div>
                    </div>
                </div>
                {activeNav && mobileNav()}
            </div>
            
        )
  )
}

export default Header
