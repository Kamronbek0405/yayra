import React from 'react'
import { heroData } from '@/data/data-service'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Bucket } from '@/icon/bucket';
import { Bucket2 } from '@/icon/bucket2';
import { Button } from '@/components/ui/button';
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
      <div className='h-[720px] flex items-center relative py-10 '>
        {heroData?.slice(0, 1).map((item) => {
          const words = item.text.split(" ");
          const lastWord = words[words.length - 1]; // Oxirgi so'zni ajratib olish

          return (
            <div key={item.id}> {/* Yagona key bu yerda */}
              <h1 style={{ transform: "scaleY(1.5)" }} className="text-7xl font-extrabold w-[300px] top-52 left-[300px] absolute tracking-widest">
                {words.slice(0, -1).join(" ").toUpperCase()} <span className="text-blue-400">{lastWord.toUpperCase()}</span>
              </h1>
              <Button className={"bottom-40 left-[300px] absolute px-8 py-5"}>Buyurtma berish</Button>
            </div>
          );
        })}
        <div className='absolute right-20 top-24'>
          <Bucket />
        </div>
      </div>
      <div className='h-[720px] flex items-center relative py-10'>
        {heroData?.slice(0, 1).map((item) => {
          const words = item.text.split(" ");
          const lastWord = words[words.length - 1]; // Oxirgi so'zni ajratib olish

          return (
            <div key={item.id}> {/* Yagona key bu yerda */}
              <h1 style={{ transform: "scaleY(1.5)" }} className="text-7xl font-extrabold w-[300px] top-52 left-[300px] absolute tracking-widest">
                {words.slice(0, -1).join(" ").toUpperCase()} <span className="text-blue-400">{lastWord.toUpperCase()}</span>
              </h1>
              <Button className={"bottom-40 left-[300px] absolute px-8 py-5"}>Buyurtma berish</Button>
            </div>
          );
        })}
        <div className='absolute right-20 top-24'>
          <Bucket2 />
        </div>
      </div>
    </Slider>
  );
};
