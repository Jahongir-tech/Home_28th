import React from 'react'

const Hero = () => {
  return (
    <div className='h-[820px] max-[1000px]:h-auto grid grid-cols-2 max-[1000px]:grid-cols-1'>
      <div className='bg-hero bg-no-repeat bg-cover max-[1000px]:h-[450px] max-[600px]:h-[375px]'></div>
      <div className='flex items-center max-[1000px]:py-12  bg-[#171D28]'>
        <div className='pl-[63px] max-[600px]:px-3 max-w-[500px] text-white'>
          <h1 className='text-7xl max-[600px]:text-5xl'>Bring the warmth.</h1>
          <p className='mt-2 mb-5'>Everyone needs a good winter jacket. 
          Find yours with our collection and more.</p>
          <button className='px-14 py-3 bg-blue-500 rounded-md hover:opacity-70'>Shopping Now</button>
        </div>
      </div>
    </div>
  )
}

export default Hero