import React, { useEffect, useRef, useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from '../hooks/cartContext';
import { MdFavorite } from "react-icons/md";
import { useWish } from '../hooks/wishlistContext';

function Header({ toggleMobileNav }) {
  const { cart } = useCart()  
  const { wish } = useWish()
  const blackH = useRef(0);
  const [hei, setHei] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setHei(0);
    };

    document.body.addEventListener('scroll', handleScroll);

    return () => {
      document.body.removeEventListener('scroll', handleScroll);
    };
  }, [blackH.current.offSetBottom]);

  return (
      <div className='text-white border-b border-gray-200 sticky top-0 w-full z-50'>
        <div className={`bg-black`} ref={blackH}>
          <div className='w-11/12 m-auto py-2 md:w-4/5 md:flex md:justify-between md:items-center text-center'>
            <p className='text-[9px] md:text-center md:w-full md:text-base'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href='./' className='font-bold px-3'>ShopNow</a></p>
            <p className='text-sm hidden md:block' style={{whiteSpace: 'nowrap'}}>English <RiArrowDropDownLine className='inline text-2xl'/></p>
          </div>
        </div>
        <div className={`bg-white w-full text-black pt-7 pb-3 z-50 {top-[${hei}px]}`}>
          <div className='w-11/12 m-auto lg:w-4/5 md:m-auto flex justify-between items-center'>
            <h1 className='font-bold text-base md:text-2xl' style={{whiteSpace:'nowrap'}}>Nobledev</h1>
            <nav className='hidden md:block'>
              <ul className="flex gap-2 lg:gap-4 items-center text-sm lg:text-lg">
                  <li><Link to='/' className='py-2 px-1 hover:underline hover:underline-offset-2'>Home</Link></li>
                  <li><Link to='/products' className='py-2 px-1 hover:underline hover:underline-offset-2'>Products</Link></li>
                  <li><Link to='/contact' className='py-2 px-1 hover:underline hover:underline-offset-2'>Contact</Link></li>
                  <li><Link to='/about' className='py-2 px-1 hover:underline hover:underline-offset-2'>About</Link></li>
                  <li><Link to='/blog' className='py-2 px-1 hover:underline hover:underline-offset-2'>Blog</Link></li>
              </ul>
              </nav>
            <div className='flex justify-between items-center gap-3'>
              <div className='hidden md:flex bg-gray-100 p-2 rounded-xl lg:w-96 lg:flex lg:justify-between lg:items-center'>
                <input type='text' placeholder='What are you looking for ?' className='bg-inherit text-base lg:w-full outline-0'/>
                <button><CiSearch className='inline md:text-xl lg:text-2xl text-gray-600'/></button>
              </div>
              <Link to="/wishlist" className='relative'>
                <MdFavorite className='text-xl md:text-2xl text-red-600 font-bold'/>
                <div className='absolute bg-white text-[8px] text-red-600 font-semibold rounded-full w-3 h-3 flex justify-center items-center p-1 left-0 -top-1'>{wish && wish.length}</div>
              </Link>
              <Link to='/users/user/cart' className='relative'>
                <div className='absolute bg-red-600 text-[8px] text-white font-semibold rounded-full w-3 h-3 flex justify-center items-center p-1 left-0 -top-1'>{cart.length}</div>
                <AiOutlineShoppingCart className='text-xl md:text-2xl text-black'/>
              </Link>
              <Link to="/sign-up" className=''>
                  <FaRegUserCircle className='text-xl md:text-2xl text-black' />
              </Link>
              <div className='md:hidden'>
                <button className='text-sm' style={{whiteSpace: "nowrap", cursor:'pointer'}} onClick={toggleMobileNav} id='mobile-nav-bar'><MdKeyboardArrowLeft className='inline '/> Menu</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
      
}

export default Header


