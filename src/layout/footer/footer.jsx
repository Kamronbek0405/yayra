import React from 'react';
import { foooterData } from '@/data/data-service';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { basketData } from '@/data/data-service';

export const Footer = () => {
  const {id} = useParams()
  const basketItem = basketData.find(item => item.id === parseInt(id));
  return (
    <div className='  flex flex-col items-center justify-center text-center h-[950px] lg:flex   w-[100%] lg:h-[500px] md:gap-12  md:h-[500px]  md:px-20  md:flex md:flex-row md:items-center md:justify-center md:flex-wrap lg:flex-row lg:items-center lg:justify-between lg:px-20 lg:text-left  '>
     <div className='     md:w-[300px] md:flex   lg:flex lg:w-[300px]  lg:items-start '>
     {foooterData?.slice(0,2).map((item) => (
       <div   key={item.id}>
          <Link    to={"/"}>{item.logo && <item.logo/>}</Link>
          <p className='mt-5 text-lg py-2 md:text-left  '>{item.title}</p>
          <div className=' flex  items-center justify-center gap-5 mt-5 md:flex md:gap-3 md:mr-20     lg:flex lg:mt-6 lg:items-center lg:gap-5'>
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
     <div className='mt-6 md:text-left '>
     {foooterData?.slice(1, 2).map((item) => (
            <div className='flex flex-col gap-5  '>
            <strong >{item.name}</strong>
            <ul className='flex flex-col gap-4'>
              <a href="#myaccount">{item.text}</a>
              <Link to={"/login"}>{item.text2}</Link>
              <a href="#wishlist">{item.text3}</a>
              <Link to={`/basket-single/${id}`}>{item.text4}</Link>
              
            </ul>
          </div>
          ))}
     </div>
     
     <div className='mt-6 md:text-left '>
     {foooterData?.slice(2, 3).map((item) => (
            <div className='flex flex-col gap-5  '>
            <strong >{item.name}</strong>
            <ul className='flex flex-col gap-4'>
              <a href="#policy">{item.text}</a>
              <a href='#catalog'>{item.text2}</a>
              <a href="#policy">{item.text3}</a>
              <a href="#asked">{item.text4}</a>
            </ul>
          </div>
          ))}
     </div>
     <div className='mt-6 md:text-left '>
     {foooterData?.slice(3, 4).map((item) => (
            <div className='flex flex-col gap-5  '>
            <strong >{item.name}</strong>
            <ul className='flex flex-col gap-4'>
              <a href="#about">{item.text}</a>
              <a href='#policy'>{item.text2}</a>
              <a href="#invite">{item.text3}</a>
              <a href="#contact">{item.text4}</a>
            </ul>
          </div>
          ))}
     </div>
    </div>
  );
};
