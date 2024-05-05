import React from 'react'
import { PiPaperPlaneRightBold } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <div className='w-full bg-black text-white'>
        <div className='w-11/12 md:w-4/5 m-auto flex flex-wrap flex-col md:flex-row gap-11 md:gap-8 md:justify-between py-16'>
            <div className='flex flex-col gap-4'>
                <h3 className='text-2xl font-bold'>E-commerce App</h3>
                <h4 className='text-xl font-semibold'>Subscribe</h4>
                <p className='text-gray-400 text-md'>Get 10% off your first order</p>
                <div>
                    <input placeholder='Enter your email'/>
                    <button className='bg-transparent'><PiPaperPlaneRightBold /></button>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <h4 className='text-xl font-semibold'>Support</h4>
                <p className='text-gray-400 text-md'>Oke Baale, Osun State University</p>
                <p className='text-gray-400 text-md'>basilgoodluck22@gmail.com</p>
                <p className='text-gray-400 text-md'>(234) 915 2678 414</p>
            </div>
            <div className='flex flex-col gap-4'>
                <h4 className='text-xl font-semibold'>Account</h4>
                <p className='text-gray-400 text-md'>My Account</p>
                <p className='text-gray-400 text-md'>Login / Register</p>
                <p className='text-gray-400 text-md'>Cart</p>
                <p className='text-gray-400 text-md'>Wishlist</p>
                <p className='text-gray-400 text-md'>Shop</p>
            </div>
            <div className='flex flex-col gap-4'>
                <h4 className='text-xl font-semibold'>Quick Link</h4>
                <p className='text-gray-400 text-md'>Privacy Policy</p>
                <p className='text-gray-400 text-md'>Terms Of Use</p>
                <p className='text-gray-400 text-md'>FAQ</p>
                <p className='text-gray-400 text-md'>Contact</p>
            </div>
            <div className='flex flex-col gap-4'>
                <h4 className='text-xl font-semibold'>Download App</h4>
                <p className='text-gray-400 text-md'>Save $50 with App, New Users Only</p>
                <div className='flex gap-4 '>
                    <FaXTwitter className='text-gray-400 text-md hover:text-white cursor-pointer'/>
                    <FaInstagram className='text-gray-400 text-md hover:text-white cursor-pointer'/>
                    <FaGithub className='text-gray-400 text-md hover:text-white cursor-pointer'/>
                    <FaFacebook className='text-gray-400 text-md hover:text-white cursor-pointer'/>
                    <FaWhatsapp className='text-gray-400 text-md hover:text-white cursor-pointer'/>
                </div>
            </div>
        </div>     
        <div className='w-full border-t border-gray-600 py-6'>
            <p className='text-center text-gray-600'>&#9400; Copyright Basil Goodluck 2024. All Rights Reserved</p>
        </div> 
    </div>
  )
}

export default Footer
