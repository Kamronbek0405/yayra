import React from 'react'
import { heroData } from '@/data/data-service'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Bucket } from '@/icon/bucket';
import { Bucket2 } from '@/icon/bucket2';
import { Button } from '@/components/ui/button';
import { BroomIcon } from '@/icon/broom-icon';
export const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings} >
      <div className=' flex flex-col items-center   h-[500px]  lg:h-[720px]  lg:flex lg:flex-row lg:items-center relative lg:py-10'>
        {heroData?.slice(0, 1).map((item) => {
          const words = item.text.split(" ");
          const lastWord = words[words.length - 1]; 

          return (
            <div key={item.id}>
              <h1 style={{ transform: "scaleY(1.5)" }} className=" text-xl  top-[300px] left-20 md:top-[150px] md:text-4xl md:w-[320px] lg:text-7xl font-extrabold lg:w-[300px] lg:top-60 lg:left-[300px] absolute tracking-widest">
                {words.slice(0, -1).join(" ").toUpperCase()} <span className="text-blue-400">{lastWord.toUpperCase()}</span>
              </h1>
              <Button className={"  top-[400px] md:top-[350px] md:px-6 md:py-5 left-20 absolute lg:px-8 lg:py-5 lg:left-[300px] lg:mt-48"}>Buyurtma berish</Button>
            </div>
          );
        })}
        <div className='absolute  md:left-[420px] md:top-16 lg:left-[60%] lg:top-20 left-14 top-5'>
          <Bucket />  
        </div>
      </div>
      <div className=' flex flex-col items-center   h-[500px]  lg:h-[720px]  lg:flex lg:flex-row lg:items-center relative lg:py-10'>
        {heroData?.slice(0, 1).map((item) => {
          const words = item.text.split(" ");
          const lastWord = words[words.length - 1]; 

          return (
            <div key={item.id}>
              <h1 style={{ transform: "scaleY(1.5)" }} className=" text-xl  top-[300px] left-20 md:top-[150px] md:text-4xl md:w-[320px] lg:text-7xl font-extrabold lg:w-[300px] lg:top-60 lg:left-[300px] absolute tracking-widest">
                {words.slice(0, -1).join(" ").toUpperCase()} <span className="text-blue-400">{lastWord.toUpperCase()}</span>
              </h1>
              <Button className={"  top-[400px] md:top-[350px] md:px-6 md:py-5 left-20 absolute lg:px-8 lg:py-5 lg:left-[300px] lg:mt-48"}>Buyurtma berish</Button>
            </div>
          );
        })}
        <div className='absolute  md:left-[420px] md:top-16 lg:left-[60%] lg:top-20 left-14 top-5'>
          <Bucket2 />  
        </div>
      </div>
      <div className=' flex flex-col items-center   h-[500px]  lg:h-[720px]  lg:flex lg:flex-row lg:items-center relative lg:py-10'>
        {heroData?.slice(0, 1).map((item) => {
          const words = item.text.split(" ");
          const lastWord = words[words.length - 1]; 

          return (
            <div key={item.id}>
              <h1 style={{ transform: "scaleY(1.5)" }} className=" text-xl  top-[300px] left-20 md:top-[150px] md:text-4xl md:w-[320px] lg:text-7xl font-extrabold lg:w-[300px] lg:top-60 lg:left-[300px] absolute tracking-widest">
                {words.slice(0, -1).join(" ").toUpperCase()} <span className="text-blue-400">{lastWord.toUpperCase()}</span>
              </h1>
              <Button className={"  top-[400px] md:top-[350px] md:px-6 md:py-5 left-20 absolute lg:px-8 lg:py-5 lg:left-[300px] lg:mt-48"}>Buyurtma berish</Button>
            </div>
          );
        })}
        <div className='absolute  md:left-[420px] md:top-16 lg:left-[60%] lg:top-20 left-14 top-5'>
          <BroomIcon/>  
        </div>
      </div>
    </Slider>
  );
};
