import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { portfolioData } from '@/data/data-service'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Portfolio = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);
  return (
    <div>
        {portfolioData?.map((item) => (
            <div className=' overflow-hidden flex flex-col gap-20 w-[100%] items-center md:px-5  md:flex md:flex-row md:items-center md:justify-center  md:w-[800px]  lg:flex lg:items-center lg:flex-row lg:justify-between  lg:w-[1100px] '>
               <div className='text-white flex flex-col ml-10  '>
               <span className='font-medium text-sm md:text-lg'>{item.topText}</span>
                <h1 className=' text-lg md:text-3xl  lg:text-5xl font-medium lg:w-[400px] py-3 lg:leading-tight '>{item.title}</h1>
                <p className='  text-sm lg:w-[400px] md:mt-2 md:text-lg '>{item.description}</p>
               </div>
              <form className='flex flex-col gap-5'>
               <div className='w-[320px] '>
               <Input className={"rounded-full bg-portfolioInput border-none text-white py-6"} type={"text"} placeholder={`${item.name}`} required data-aos="fade-right"/>
               </div>
               <div className='w-[320px] '>
               <Input className={"rounded-full bg-portfolioInput  text-white border-none py-6"} type={"number"}  placeholder={`${item.phone}`} required data-aos="fade-left"/>
               </div>
                <Button className={"w-[320px] rounded-full py-6"} type={"submit"} data-aos="fade-right">{item.textButton}</Button>
              </form>
            </div>
        ))}
    </div>
  )
}
