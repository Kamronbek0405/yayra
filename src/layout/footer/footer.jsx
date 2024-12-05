import React from 'react';
import { Facebook } from '@/icon/facebook';
import { foooterData } from '@/data/data-service';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className='  flex flex-col items-center justify-center text-center h-[950px] lg:flex w-[100%] lg:h-[500px] lg:flex-row lg:items-center lg:justify-between lg:px-20 lg:text-left  '>
     <div className='      lg:flex lg:w-[300px] lg:items-start '>
     {foooterData?.slice(0,2).map((item) => (
       <div   key={item.id}>
          <Link    to={"/"}>{item.logo && <item.logo/>}</Link>
          <p className='mt-5 text-lg py-2  '>{item.title}</p>
          <div className=' flex  items-center justify-center gap-5 mt-5 lg:flex lg:mt-6 lg:items-center lg:gap-5'>
          <a href="https://www.facebook.com/">{item.facebook && <item.facebook />}</a>
          <a href="https://www.instagram.com/">{item.instagram && <item.instagram />}</a>
          <a href="https://x.com/">{item.twitter && <item.twitter />}</a>
          <a href="https://mail.google.com/mail/">{item.email && <item.email />}</a>
          </div>
        
         
         
         <div>
          
         </div>
        </div>
        
      ))}
     </div>
     <div className='mt-6'>
     {foooterData?.slice(1, 2).map((item) => (
            <div className='flex flex-col gap-5  '>
            <strong >{item.name}</strong>
            <ul className='flex flex-col gap-4'>
              <a href="">{item.text}</a>
              <Link to={"/login"}>{item.text2}</Link>
              <a href="">{item.text3}</a>
              <a href="">{item.text4}</a>
              
            </ul>
          </div>
          ))}
     </div>
     <div className='mt-6'>
     {foooterData?.slice(2, 3).map((item) => (
            <div className='flex flex-col gap-5  '>
            <strong >{item.name}</strong>
            <ul className='flex flex-col gap-4'>
              <a href="">{item.text}</a>
              <a href=''>{item.text2}</a>
              <a href="">{item.text3}</a>
              <a href="">{item.text4}</a>
              
            </ul>
          </div>
          ))}
     </div>
     <div className='mt-6'>
     {foooterData?.slice(3, 4).map((item) => (
            <div className='flex flex-col gap-5  '>
            <strong >{item.name}</strong>
            <ul className='flex flex-col gap-4'>
              <a href="">{item.text}</a>
              <a href=''>{item.text2}</a>
              <a href="">{item.text3}</a>
              <a href="">{item.text4}</a>
              
            </ul>
          </div>
          ))}
     </div>
    </div>
  );
};
