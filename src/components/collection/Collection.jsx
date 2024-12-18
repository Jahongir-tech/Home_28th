import React from 'react'
import url1 from "@/assets/images/photo2.png"
import url2 from "@/assets/images/photo.png"
import url3 from "@/assets/images/register.png"
import url4 from "@/assets/images/login.png"
import { Link } from 'react-router-dom'
import { IoArrowForwardOutline } from "react-icons/io5";

const data = [
    {
        id: 1,
        title: "November Outfit",
        url: url1
    },
    {
        id: 2,
        title: "Cashmere Set",
        url: url2
    },
    {
        id: 3,
        title: "The New Nordic",
        url: url3
    },
    {
        id: 4,
        title: "The Leather",
        url: url4
    },
]

const Collection = () => {
  return (
    <div className='py-12 container grid grid-cols-2 gap-6 max-[500px]:px-4 max-[500px]:gap-4 max-[990px]:grid-cols-1'>
        {
            data?.map(item => (
                <div key={item.id} className='h-[664px] border relative max-[500px]:h-[377px]'>
                    <img src={item.url} className='absolute w-full h-full object-cover' alt="" />
                    <div className='absolute left-12 bottom-12 text-white'>
                        <p className='text-[34px] font-medium mb-3'>{item.title}</p>
                        <Link className='flex gap-1 items-center border-b w-[96px]' to={"/"}>
                            <span className='font-medium'>Collection</span>
                            <IoArrowForwardOutline/>
                        </Link>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Collection