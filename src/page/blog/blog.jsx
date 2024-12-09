import { Button } from '@/components/ui/button'
import { blogData } from '@/data/data-service'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Blog = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // AOS ni boshlash va davomiylikni sozlash
  }, []);
  return (
    <div>
      {blogData?.slice(0,1).map((item) => (
        <div className=' ml-8 lg:px-20 h-auto   flex items-center justify-between flex-col lg:gap-10'>
          
           <div className=' md:flex md:items-center md:justify-between md:w-[740px] lg:w-[1200px]   lg:flex lg:items-center lg:justify-between'>
           <h1 className=' text-2xl md:text-3xl lg:text-4xl font-medium py-5' data-aos="fade-right">{item.text}</h1>
            <Button className={" ml-10 py-5 md:px-6 md:py-6 lg:px-8 lg:py-6 "} data-aos="fade-left">{item.topright}</Button>
           </div>
          <div className=' flex flex-col gap-5   lg:flex lg:flex-row lg:items-center lg:gap-5 '>
          <div className=' flex flex-col   md:flex md:flex-row  gap-7  lg:flex lg:flex-row lg:gap-10 mt-7 '>
            {blogData?.slice(0,2).map((item) => (
              <div className='flex flex-col  lg:flex-none'>
                <img className=' w-[320px] h-[240px] md:w-[350px] md:h-[260px] lg:w-[392px] lg:h-[281px] '  data-aos="flip-down" src={item.img} alt="img" />
                <span className='text-gray-500 mt-5' data-aos="fade-right">{item.day}</span>
                <h1 className='mt-5 text-lg  w-[320px] md:text-xl md:w-[350px] lg:text-xl font-medium lg:w-[400px]' data-aos="fade-right">{item.title}</h1>
                <p className='mt-3  w-[320px]  text-gray-500 lg:w-[350px]' data-aos="fade-right">{item.description}</p>
              </div>
            ))}
           </div>
           <div className='rightimages mb-2 flex flex-col   '>
            {blogData?.slice(2).map((item) => (
              <div>
                <div className='flex gap-5 mt-4  '>
                <img src={item.img2} alt="img2"  data-aos="flip-down" />
                <div>
                  <span className='text-gray-500' data-aos="fade-left" >{item.day}</span>
                  <p className=' w-[220px] md:text-lg md:w-[300px] lg:text-lg  font-medium lg:w-[300px]' data-aos="fade-left">{item.title}</p>
                </div>
              </div>
              <div className='bg-slate-500  px-5 lg:w-[400px] h-[1px] mt-5 '></div>
              </div>
            ))}
           </div>
          </div>
            
        </div>
      ) )}
    </div>
  )
}
