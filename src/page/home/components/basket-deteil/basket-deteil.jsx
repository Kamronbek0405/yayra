import React from 'react';
import { useParams } from 'react-router-dom';
import { pricingData } from '@/data/data-service';
import { basketData } from '@/data/data-service';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export const BasketDeteil = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const pricingItem = pricingData.find(item => item.id === parseInt(id));
    const basketItem = basketData.find(item => item.id === parseInt(id));

    if (!pricingItem || !basketItem) {
        return <p>Item not found.</p>;
    }


    const buyClick = () => {
        navigate(`/basket-single/${id}`); 
    };

    return (
        <div className=' flex overflow-hidden flex-col items-center gap-6 mt-7 md:w-[100%] md:h-[120vh] md:py-5 md:items-center md:justify-center md:flex md:flex-row md:flex-wrap  lg:h-[670px] bg-slate-100 lg:flex-row lg:flex lg:items-center  lg:justify-center lg:gap-7 '>
            <div className='  w-[350px] h-[534px] py-8   bg-white rounded-xl md:py-10 lg:py-5 px-8 flex flex-col items-start justify-between '  data-aos="zoom-in-right">
                <img className='lg:ml-5' src={basketItem.img} alt="img" />
                <div >
                <h2 className='font-medium'>{pricingItem.name}</h2>
                <p className='text-gray-500 text-sm mb-3'>{basketItem.description2}</p>
               <div className='flex  items-center gap-5'>
               <Button className="px-14 text-lg py-5 text-white">{basketItem.buy}</Button>
               {basketItem.basketIcon && <basketItem.basketIcon/>}
               {basketItem.arrowIcon && <basketItem.arrowIcon/>}
               </div>
                </div>
            </div>

            <div className=' flex   flex-wrap justify-center lg:order-1   items-center gap-5 md:order-2 md:gap-10 md:flex md:flex-row md:items-center md:justify-center  md:flex-wrap lg:flex lg:flex-wrap  lg:w-[700px] lg:h-[550px] lg:gap-2 lg:items-center lg:justify-center  '>
                <div className='w-[160px] h-[210px] px-3 py-2 bg-white md:w-[320px] md:px-12 md:py-7 md:h-[400px]  lg:px-5 lg:py-2 lg:mr-12 lg:w-[250px] lg:h-[300px] rounded-xl lg:ml-10  ' data-aos="flip-left" data-aos-easing="ease-out-cubic"     data-aos-duration="2000" >
                    <img className='  md:ml-8  md:w-[180px] md:h-[180px] lg:w-[180px] lg:h-[180px] lg:-ml-0.5' src={basketItem.img} alt="" />
                    <p className='lg:mt-2 md:mt-14 font-medium lg:text-lg'>{basketItem.price}</p>
                    <div className='flex items-center mt-1 gap-2 lg:gap-5 lg:mt-3'>
                    {basketItem.basketIcon && <basketItem.basketIcon/>}
                    {basketItem.arrowIcon && <basketItem.arrowIcon/>}
                    </div>
                </div>
                <div className='w-[160px] h-[210px] px-3 py-2 bg-white md:w-[320px] md:px-12 md:py-7 md:h-[400px]  lg:px-5 lg:py-2 lg:mr-12 lg:w-[250px] lg:h-[300px]  rounded-xl ' data-aos="flip-left" data-aos-easing="ease-out-cubic"     data-aos-duration="2000">
                    <img className='  md:ml-8  md:w-[180px] md:h-[180px] lg:w-[180px] lg:h-[180px] lg:-ml-0.5' src={basketItem.img} alt="" />
                    <p className='lg:mt-2 md:mt-14 font-medium lg:text-lg'>{basketItem.price}</p>
                    <div className='flex items-center gap-2 lg:gap-5 lg:mt-3'>
                    {basketItem.basketIcon && <basketItem.basketIcon/>}
                    {basketItem.arrowIcon && <basketItem.arrowIcon/>}
                    </div>
                </div>
                <div className=' flex w-[340px] items-center px-3 py-3  bg-white  md:w-[640px] md:flex md:items-center md:justify-between md:py-7 md:px-5 lg:flex lg:items-center lg:justify-between lg:w-[600px] lg:px-5 lg:h-[250px]  rounded-xl '  data-aos="flip-down">
                   <div >
                  
                   <h1 className='font-medium text-xl'>{basketItem.title}</h1>
                   <p className=' w-[200px] text-sm lg:text-lg lg:w-[280px] text-gray-400 md:mb-20 lg:mb-16'>{basketItem.discription}</p>
                  
                   <Button className={"rounded-full px-5  mt-2  md:px-10 lg:px-12"}>{basketItem.bottomText}</Button>
                   </div>
                   {<img className=' w-[130px] h-[130px] md:w-[200px] md:h-[200px] lg:w-[200px] lg:h-[200px] lg:mb-12' src={basketItem.img} alt="img" /> ||  <img className='w-[200px] h-[200px] mb-12' src={basketItem.img2} alt="img" />}

                  
                </div>

            </div>

            <div className='  w-[350px] h-[534px] py-8  lg:order-2  bg-white rounded-xl md:py-10  lg:py-5 px-8 flex flex-col items-start justify-between  ' data-aos="zoom-in-left">
                <img className='lg:ml-5' src={basketItem.img} alt="img" />
                <div >
                <h2 className='font-medium'>{pricingItem.name}</h2>
                <p className='text-gray-500 text-sm mb-3'>{basketItem.description2}</p>
               <div className='flex  items-center gap-5'>
               <Button onClick={buyClick}  className="px-14 text-lg py-5 text-white">{basketItem.buy}</Button>
               {basketItem.basketIcon && <basketItem.basketIcon/>}
               {basketItem.arrowIcon && <basketItem.arrowIcon/>}
               </div>
                </div>
            </div>
        </div>
    );
};
