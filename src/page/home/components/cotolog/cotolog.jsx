import { Button } from '@/components/ui/button'
import { catalogData } from '@/data/data-service'
import { Download } from '@/icon/download'
import { SeeIcon } from '@/icon/see'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Cotolog = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // AOS ni boshlash va davomiylikni sozlash
      }, []);
    return (
        <div>
            {catalogData?.map((item) => (
                <div key={item.id}>
                    <div className='w-[100%]  flex  flex-col items-center py-2'>
                        <span className='text-sm md:text-lg font-medium text-blue-500'>{item.topText.toUpperCase()}</span>
                        <h1 className=' text-xl  md:text-3xl md:w-[550px] lg:text-5xl font-medium lg:w-[900px] text-center'>{item.text}</h1>
                        <p className=' text-sm px-5 text-center mt-5 md:text-lg lg:text-lg text-gray-700'>{item.description}</p>
                        <div className='flex items-center gap-5 lg:gap-3 mt-8'>
                            <Button className={"px-8 py-6 rounded-full  hover:bg-black"} startIcon={Download} >{item.download}</Button>
                            <Button className={"rounded-full bg-black py-6 px-7"} startIcon={SeeIcon} >{item.view}</Button>
                        </div>
                    </div>
                    <div className=' w-[100%] gap-12  lg:px-10 h-[700px] flex  flex-col lg:gap-16'>
                        <h1 className=' text-3xl ml-24 mt-10 md:text-3xl md:mt-20 lg:text-4xl font-medium lg:mt-20 lg:ml-28'>{item.advantages}</h1>
                        <div className='flex flex-col items-center justify-center gap-7 md:flex-row md:flex-wrap lg:flex-row lg:items-center lg:justify-center lg:gap-10'
>
                            <div className="  w-[320px] h-[370px]  md:w-[370px] md:h-[430px]  lg:w-[389px] lg:h-[448px]  flex flex-col items-center justify-between  bg-cover bg-no-repeat" data-aos="zoom-in-up" style={{ backgroundImage: `url(${item.bgColor})` }}>
                                <img className='mt-12 w-[150px] h-[150px] md:w-[180px] md:h-[180px] lg:w-[208px] lg:h-[208px]' src={item.starImg} alt="img" />
                                <div className='bg-blue-400 flex items-center justify-center  w-full h-[60px] md:h-[80px] rounded-b-[40px] lg:h-[100px] lg:rounded-b-[50px]'>
                               <span className='text-white text-xl font-medium'>{item.lorem}</span>
                               </div>
                            </div>
                            <div className="  w-[320px] h-[370px]  md:w-[370px] md:h-[430px]  lg:w-[389px] lg:h-[448px]  flex flex-col items-center justify-between  bg-cover bg-no-repeat" data-aos="zoom-in-up" style={{ backgroundImage: `url(${item.bgColor})` }}>
                                <img className='mt-12 w-[150px] h-[150px] md:w-[180px] md:h-[180px] lg:w-[208px] lg:h-[208px]' src={item.targetImg} alt="img" />
                                <div className='bg-blue-400 flex items-center justify-center  w-full h-[60px] md:h-[80px] rounded-b-[40px] lg:h-[100px] lg:rounded-b-[50px]'>
                               <span className='text-white text-xl font-medium'>{item.lorem}</span>
                               </div>
                            </div>
                            <div className="  w-[320px] h-[370px]  md:w-[370px] md:h-[430px]  lg:w-[389px] lg:h-[448px]  flex flex-col items-center justify-between  bg-cover bg-no-repeat" data-aos="zoom-in-up" style={{ backgroundImage: `url(${item.bgColor})` }}>
                                <img className='mt-12 w-[150px] h-[150px] md:w-[180px] md:h-[180px] lg:w-[208px] lg:h-[208px]' src={item.lampImg} alt="img" />
                                <div className='bg-blue-400 flex items-center justify-center  w-full h-[60px] md:h-[80px] rounded-b-[40px] lg:h-[100px] lg:rounded-b-[50px]'>
                               <span className='text-white text-xl font-medium'>{item.lorem}</span>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
