// import React, { useEffect, useRef } from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';

function MobileNav({ toggleMobileNav, isOpen, closeMobileNav }) {
    

    return (
        <div id='mobile-nav' className={`text-black z-50 bg-white shadow-2xl fixed top-0 flex h-screen flex-col justify-start pt-24 w-[80%] ${isOpen ? 'left-0' : '-left-[80%]'} `}
            style={{
                transition: 'left .3s ease'        
            }}>
            <div className='w-11/12 m-auto flex justify-between items-center -mt-1'>
                <h1 className='font-bold text-2xl mb-4' style={{whiteSpace: 'nowrap'}}>Ecommerce App</h1>
                <div>
                    <button style={{whiteSpace: "nowrap"}} onClick={toggleMobileNav}>Back <MdKeyboardArrowRight className='inline'/></button>
                </div>
            </div>
            <nav className='w-11/12 m-auto h-8/12 -mt-32'>
                <ul className='flex flex-col gap-10'>
                    <li className='' >
                        <Link 
                            to='/' 
                            className='w-full block border-b pt-5 pb-2 text-xl'
                            onClick={closeMobileNav}
                        >Home</Link>
                    </li>
                    <li >
                        <Link 
                            to='/products' 
                            className='w-full block border-b pt-5 pb-2 text-xl'
                            onClick={closeMobileNav}
                        >Products</Link>
                    </li>
                    <li >
                        <Link 
                            to='/contact' 
                            className='w-full block border-b pt-5 pb-2 text-xl'
                            onClick={closeMobileNav}
                        >Contact</Link>
                    </li>
                    <li >
                        <Link 
                            to='/about' 
                            className='w-full block border-b pt-5 pb-2 text-xl'
                            onClick={closeMobileNav}
                        >About</Link>
                    </li>
                    <li >
                        <Link 
                            to='/sign-up' 
                            className='w-full block border-b pt-5 pb-2 text-xl'
                            onClick={closeMobileNav}
                        >Sign Up</Link>
                    </li>
                </ul>
            </nav>
        </div>


    );
}

export default MobileNav;
