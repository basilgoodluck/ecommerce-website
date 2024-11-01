import React from 'react'
import { FaRegUserCircle } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

function About() {
  return (
    <div className=''>
      <div className=' md:flex justify-between items-center gap-5 py-10 mr-[4.166%] ml-[4.166%] md:mr-[0] lg:ml-[10%]'>
        <div className='flex flex-col gap-5 md:w-1/2'>
          <h1 className='text-2xl lg:text-3xl font-bold ' style={{letterSpacing: '3px'}}>Our Story</h1>
          <p className='text-lg '>Welcome to Ecommerce App, where convenience meets quality in the digital marketplace. As your premier destination for all things retail, we pride ourselves on providing an unparalleled shopping experience that caters to your every need.</p>
        </div>
        <div className='w-1/2 hidden md:block'><img src='./assets/about.png' alt='aboutIdfde' className='w-full' /></div>
      </div>    
      <div className='w-11/12 md:w-4/5 m-auto grid grid-cols-2 lg:grid-cols-4 justify-between gap-4 py-6'>
        <div className='text-center border h-56 w-full flex flex-col gap-3 bg-pink-600 border-pink-600 text-white rounded-md' >
          <FaRegUserCircle className='block m-auto text-5xl' />
          <h4 className='text-2xl font-black'>10.5k</h4>
          <p className='text-base '>Sallers active our site</p>
        </div>
        <div className='w-full text-center border border-gray-700 p-6 flex flex-col gap-3 hover:bg-pink-600 hover:border-pink-600 hover:text-white rounded-md' >
          <FaRegUserCircle className='block m-auto text-5xl' />
          <h4 className='text-2xl font-black'>10.5k</h4>
          <p className='text-base '>Sallers active our site</p>
        </div>
        <div className='w-full text-center border border-gray-700 p-6 flex flex-col gap-3 hover:bg-pink-600 hover:border-pink-600 hover:text-white rounded-md' >
          <FaRegUserCircle className='block m-auto text-5xl' />
          <h4 className='text-2xl font-black'>10.5k</h4>
          <p className='text-base '>Sallers active our site</p>
        </div>
        <div className='w-full text-center border border-gray-700 p-6 flex flex-col gap-3 hover:bg-pink-600 hover:border-pink-600 hover:text-white rounded-md' >
          <FaRegUserCircle className='block m-auto text-5xl' />
          <h4 className='text-2xl font-black'>10.5k</h4>
          <p className='text-base '>Sallers active our site</p>
        </div>
      </div> 
      <div className='w-11/12 lg:w-4/5 m-auto py-10 md:flex grid gap-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
        <div className='w-72 md:w-full '>
          <div className='bg-gray-200 p-4'>
            <div className='bg-gray-200 '><img src='./assets/AnnaBerlin.png' alt='sadfjsdl' className='w-full object-cover '/></div>
          </div>
          <div className='flex flex-col gap-2 py-2'>
            <h4 className='text-2xl font-bold'>Anna Berling</h4>
            <p className='text-xl'>Secetary</p>
            <div className='flex justify-start gap-4'>
              <FaXTwitter className='text-gray-400 text-md hover:text-white cursor-pointer'/>
              <FaInstagram className='text-gray-400 text-md hover:text-white cursor-pointer'/>
              <FaGithub className='text-gray-400 text-md hover:text-white cursor-pointer'/>
            </div>
          </div>
        </div>
        <div className='w-72 md:w-full  '>
          <div className='bg-gray-200 p-4'>
            <div className='bg-gray-200 m-auto'><img src='./assets/tomCruise.png' alt='sadfjsdl' className='w-full object-cover '/></div>
          </div>
          <div className='flex flex-col gap-2 py-2'>
            <h4 className='text-2xl font-bold'>Tommy Cruise</h4>
            <p className='text-xl'>Chief Marketer</p>
            <div className='flex justify-start gap-4'>
              <FaXTwitter className='text-gray-400 text-md hover:text-white cursor-pointer'/>
              <FaInstagram className='text-gray-400 text-md hover:text-white cursor-pointer'/>
              <FaGithub className='text-gray-400 text-md hover:text-white cursor-pointer'/>
            </div>
          </div>
        </div>
        <div className='w-72 md:w-full '>
          <div className='bg-gray-200 p-4'>
            <div className='bg-gray-200 m-auto'><img src='./assets/LuckyBill.png' alt='sadfjsdl' className='w-full object-cover '/></div>
          </div>
          <div className='flex flex-col gap-2 py-2'>
            <h4 className='text-2xl font-bold'>Basil Goodluck</h4>
            <p className='text-xl'>Founder & Chairman</p>
            <div className='flex justify-start gap-4'>
              <FaXTwitter className='text-gray-400 text-md hover:text-white cursor-pointer'/>
              <FaInstagram className='text-gray-400 text-md hover:text-white cursor-pointer'/>
              <FaGithub className='text-gray-400 text-md hover:text-white cursor-pointer'/>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center gap-4 w-[90%] md:w-[70%] lg:w-[50%] m-auto py-10'>
        <div className='flex flex-col gap-2 text-center'>
          <FaRegUserCircle className='block m-auto text-3xl' />
          <h4 className='text-base font-semibold'>Fast and Speedy delivery</h4>
          <p className='text-xs'>Free delivery for all orders above $140</p>
        </div>
        <div className='flex flex-col gap-2 text-center'>
          <FaRegUserCircle className='block m-auto text-3xl' />
          <h4 className='text-base font-semibold'>Fast and Speedy delivery</h4>
          <p className='text-xs'>Free delivery for all orders above $140</p>
        </div>
        <div className='flex flex-col gap-2 text-center'>
          <FaRegUserCircle className='block m-auto text-3xl' />
          <h4 className='text-base font-semibold'>Fast and Speedy delivery</h4>
          <p className='text-xs'>Free delivery for all orders above $140</p>
        </div>
      </div>
    </div>
  )
}

export default About