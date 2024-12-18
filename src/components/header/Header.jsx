import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaRegUserCircle } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";
import { IoBagOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";

const Header = () => {
  const [show, setShow] = useState(true)
 
  return (
    <header id='header' className='max-[750px]:px-3'>
      <nav className='container h-[60px] flex items-center justify-between'>
        <div className='flex items-center gap-1'>
          <button onClick={()=> setShow(p => !p)} className='text-2xl min-[750px]:hidden'><IoIosMenu/></button>
          <NavLink to={"/"} className='text-2xl font-medium select-none'>3legant.</NavLink>
        </div>
        <ul style={{display: show ? "flex" : "none"}} className={`flex gap-10 max-[750px]:absolute max-[750px]:top-[60px] max-[750px]:left-0 max-[750px]:flex-col max-[750px]:bg-white max-[750px]:shadow-md max-[750px]:w-full max-[750px]:p-5 max-[750px]:gap-3 `} >
          <li>
            <NavLink className={"hover:text-blue-500"} to={"/"}><span>Home</span></NavLink>
          </li>
          <li>
            <NavLink className={"hover:text-blue-500"} to={"/"}><span>Shop</span></NavLink>
          </li>
          <li>
            <NavLink className={"hover:text-blue-500"} to={"/"}><span>Product</span></NavLink>
          </li>
          <li>
            <NavLink className={"hover:text-blue-500"} to={"/"}><span>Contact Us</span></NavLink>
          </li>
        </ul>
        <div className='flex gap-4'>
          <NavLink to={"/"} className='text-[20px] hover:text-blue-500'><LuSearch/></NavLink>
          <NavLink to={"/login"} className='text-[20px] hover:text-blue-500'><FaRegUserCircle/></NavLink>
          <NavLink to={"/"} className='text-[20px] hover:text-blue-500'><IoBagOutline/></NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Header