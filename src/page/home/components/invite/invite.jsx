import { Button } from '@/components/ui/button'
import { inviteData } from '@/data/data-service'
import React from 'react'

export const Invite = () => {
    return (
        <div>
            {inviteData?.map((item) => (
                <div key={item.id} style={{ backgroundImage: `url(${item.img})` }} className='relative bg-no-repeat bg-cover w-[358px] h-[165px]  md:w-[800px] md:h-[365px] lg:w-[1238px] lg:h-[565px] flex items-center justify-center text-white'>
                    {/* Fon uchun element */}
                    <div className='absolute top-0 left-0 w-full h-full bg-purple-800 opacity-20 rounded-t-[200px] rounded-bl-[200px]'></div>
                    
                    {/* Matn */}
                    <div className='relative px-10 text-center z-10 flex flex-col items-center'>
                        <h1 className=' text-lg w-[300px]  md:text-4xl md:w-[600px] lg:text-5xl font-medium lg:w-[800px]'>{item.title}</h1>
                        <p className=' w-[320px] text-sm  md:text-lg  md:w-[550px] md:mt-5 lg:text-lg  lg:w-[550px] lg:mt-5'>{item.description}</p>
                        <Button className={" md:mt-5 md:tracking-wider lg:px-12 lg:py-6 rounded-full lg:tracking-widest lg:mt-5"}>{item.topText}</Button>
                    </div>
                </div>
            ))}
        </div>
    )
}

