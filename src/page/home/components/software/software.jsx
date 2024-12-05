import { softwareData } from '@/data/data-service'
import React from 'react'

export const Software = () => {
  return (
    <div className=' flex flex-col items-center py-20  '>
        <h1 className='text-xl mt-10'>Over 32k+ software  businesses growing with Yayra</h1>
       <div className='flex items-center  gap-10 mt-10'>
       {softwareData?.map((item) => (
            <div key={item.id} >
                <img src={item.img} alt="img" />
            </div>
        ))}
       </div>
    </div>
  )
}
