
import { softwareData } from '@/data/data-service'
import React from 'react'

export const Busines  = () => {
  return (
    <div className=' flex flex-col items-center py-20  '>
        <h1 className=' text-center text-xl md:text-2xl font-medium lg:text-xl mt-10'>Over 32k+ software  businesses growing with Yayra</h1>
       <div className=' flex  flex-wrap justify-center  gap-7 md:px-10 md:flex md:items-center md:justify-center lg:flex lg:items-center  lg:gap-10 mt-10'>
       {softwareData?.map((item) => (
            <div key={item.id} >
                <img className='hover:scale-x-110 duration-300 transition-all' src={item.img} alt="img" />
            </div>
        ))}
       </div>
    </div>
  )
}
