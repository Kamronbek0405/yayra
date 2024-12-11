import { aboutData } from "@/data/data-service";
import Slider from "react-slick";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // AOS ni boshlash va davomiylikni sozlash
  }, []);
    const settings = {
        dots: false, 
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 2000, 
      };
      
      
  return (
    <div id="started" className="slider-container">
      <Slider {...settings}>
       <div   className="lg:px-32 py-10 overflow-hidden  md:px-10 lg:py-10 px-4 ">
       {aboutData.slice(0,1).map((item) => (
            <div style={{ backgroundImage: `url(${item.broomImg})` }} className="bg-cover  w-[340px] h-[210px] md:w-[750px] md:h-[300px] md:rounded-3xl rounded-xl lg:rounded-[40px] bg-red-500 bg-no-repeat flex items-center  justify-center  lg:w-[1200px] lg:h-[500px]" >
               <div className="text-center gap-2  flex flex-col items-center md:gap-5 lg:gap-10 ">
               <span className="text-blue-500 md:text-lg  lg:text-xl lg:tracking-wider">{item.day}</span>
                <h1 className="text-white w-[300px] md:w-[500px] md:text-3xl lg:text-5xl lg:w-[800px] font-medium lg:leading-normal">{item.title}</h1>
                <p className="text-white w-[315px] text-sm md:w-[480px]  md:text-lg lg:w-[490px] font-thin  lg:tracking-widest  lg:text-lg">{item.description}</p>
               </div>
             </div>
        ) )}
       </div>
       <div   className="lg:px-32  overflow-hidden py-10 md:px-10 lg:py-10 px-4 ">
       {aboutData.slice(1,2).map((item) => (
            <div style={{ backgroundImage: `url(${item.overlayImg})` }} className="bg-cover  w-[340px] h-[210px] md:w-[750px] md:h-[300px] md:rounded-3xl rounded-xl lg:rounded-[40px] bg-red-500 bg-no-repeat flex items-center  justify-center  lg:w-[1200px] lg:h-[500px]" >
               <div className="text-center gap-2 flex flex-col items-center md:gap-5 lg:gap-10 ">
               <span className="text-blue-500 md:text-lg  lg:text-xl lg:tracking-wider">{item.day}</span>
                <h1 className="text-white w-[300px] md:w-[500px] md:text-3xl lg:text-5xl lg:w-[800px] font-medium lg:leading-normal">{item.title}</h1>
                <p className="text-white w-[315px] text-sm md:w-[480px]  md:text-lg lg:w-[490px] font-thin  lg:tracking-widest  lg:text-lg">{item.description}</p>
               </div>
             </div>
        ) )}
       </div>
      </Slider>

      <div id='about' className="w-[100%] overflow-hidden h-auto lg:h-[440px] md:h-[400px]  flex items-center justify-center">
        {aboutData.slice(2,3).map((item) => (
            <div className=" flex flex-col items-center px-7 gap-10 md:gap-20 md:px-10 mt-12 md:flex md:flex-row  lg:flex lg:flex-row lg:gap-20">
                <div>
                    <span data-aos="fade-right" className="lg:text-lg font-medium text-blue-400">{item.top}</span>
                    <h1 data-aos="fade-right" className="lg:text-6xl md:text-4xl text-lg font-medium lg:w-[480px] tracking-wider lg:mt-3">{item.title}</h1>
                    <p data-aos="fade-right" className="lg:w-[610px] lg:mt-5 text-gray-600 ">{item.description}</p>
                </div>
                <iframe data-aos="fade-left" className=" w-[330px] rounded-3xl h-[230px] lg:w-[475px] lg:h-[373px]  lg:rounded-3xl"  src="https://www.youtube.com/embed/LMflXm1P2hQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            </div>
        ))}
      </div>
    </div>
  )
}
