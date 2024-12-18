import React from 'react'
import brandLogo from "../../assets/images/brand.svg"

const Brands = () => {
  return (
    <>
        <p className='text-center text-xl mt-10 mb-4 font-medium'>Trending Brands</p>
        <div id='brands' className='container flex gap-6 overflow-auto max-[650px]:pl-2'>
            <img src={brandLogo} alt="" />
            <img src={brandLogo} alt="" />
            <img src={brandLogo} alt="" />
            <img src={brandLogo} alt="" />
            <img src={brandLogo} alt="" />
            <img src={brandLogo} alt="" />
        </div>
    </>
  )
}

export default Brands