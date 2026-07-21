import React, { useState } from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { LuUser } from "react-icons/lu";
import { HiBars3 } from "react-icons/hi2";

const Navbar = () => {
  const [showMenu, setshowMenu] = useState(false)
  return (
    <div className='bg-secondary sticky top-0 z-50'>
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-24 text-primary">
        <div className="flex justify-between items-center py-6">
          <div className="logo text-xl font-bold ursor-pointer cursor-pointer"><a href="#">Stilo</a></div>
          <nav className='hidden md:flex items-center space-x-6'>
            <a className='text-md hover:text-acent cursor-pointer hover:underline underline-offset-6' href="#home">Home</a>
            <a className='text-md hover:text-acent cursor-pointer hover:underline underline-offset-6' href="#services">Services</a>
            <a className='text-md hover:text-acent cursor-pointer hover:underline underline-offset-6' href="#products">Products</a>
            <a className='text-md hover:text-acent cursor-pointer hover:underline underline-offset-6' href="#testimonials">Testimonials</a>
            <a className='text-md hover:text-acent cursor-pointer hover:underline underline-offset-6' href="#blog">Blog</a>
          </nav>
          <div className='flex items-center gap-3 text-xl '>
            <FiShoppingCart className='hover:text-acent cursor-pointer' />
            <LuUser className='hover:text-acent cursor-pointer'/>
            <div className="md:hidden text-2xl">
              <HiBars3 onClick={() => setshowMenu(!showMenu)}/>
            </div>
          </div>
        </div>
      </div>

      {
        showMenu && (
          <div className="mobileMenu absolute top-0 flex flex-col items-center space-y-6 py-20 bg-primary h-screen w-5/6">
            <a onClick={() => setshowMenu(!showMenu)} className='text-md hover:text-acent cursor-pointer' href="#home">Home</a>
            <a onClick={() => setshowMenu(!showMenu)} className='text-md hover:text-acent cursor-pointer' href="#services">Services</a>
            <a onClick={() => setshowMenu(!showMenu)} className='text-md hover:text-acent cursor-pointer' href="#products">Products</a>
            <a onClick={() => setshowMenu(!showMenu)} className='text-md hover:text-acent cursor-pointer' href="#testimonials">Testimonials</a>
            <a onClick={() => setshowMenu(!showMenu)} className='text-md hover:text-acent cursor-pointer' href="#blog">Blog</a>
            <div className='absolute top-2 right-4 bg-gray-300 rounded-full w-6 h-6 text-center leading-5 text-xl cursor-pointer' onClick={()=>setshowMenu(!showMenu)}>&times;</div>
          </div>
        )
      }
    </div>
  )
}

export default Navbar