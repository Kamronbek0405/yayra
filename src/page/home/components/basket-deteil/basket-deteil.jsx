import React from 'react';
import { useParams } from 'react-router-dom';
import { pricingData } from '@/data/data-service';
import { basketData } from '@/data/data-service';
import { Button } from '@/components/ui/button';

export const BasketDeteil = () => {
    const { id } = useParams();
    const pricingItem = pricingData.find(item => item.id === parseInt(id));
    const basketItem = basketData.find(item => item.id === parseInt(id));

    if (!pricingItem || !basketItem) {
        return <p>Item not found.</p>;
    }

    return (
        <div className=' flex flex-col items-center gap-10 lg:w-[100%] lg:h-[670px] bg-slate-100 lg:flex-row lg:flex lg:items-center lg:justify-center lg:gap-7 '>
            <div className='  w-[350px] h-[534px] bg-white rounded-xl py-5 px-8 flex flex-col items-start justify-between '>
                <img className='ml-5' src={basketItem.img} alt="img" />
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

            <div className=' flex flex-col items-center gap-5 lg:flex lg:flex-wrap lg:w-[670px] lg:h-[550px] lg:gap-2 lg:items-center lg:justify-center  '>
                <div className='w-[230px] h-[273px]  px-5 py-2 mr-12 bg-white rounded-xl '>
                    <img className='w-[180px] h-[180px]' src={basketItem.img} alt="" />
                    <p className='mt-2 font-medium text-lg'>{basketItem.price}</p>
                    <div className='flex items-center gap-5 mt-3'>
                    {basketItem.basketIcon && <basketItem.basketIcon/>}
                    {basketItem.arrowIcon && <basketItem.arrowIcon/>}
                    </div>
                </div>
                <div className='w-[230px] h-[273px]  px-5 lg:py-2 bg-white rounded-xl '>
                    <img className='w-[180px] h-[180px]' src={basketItem.img} alt="" />
                    <p className='mt-2 font-medium text-lg'>{basketItem.price}</p>
                    <div className='flex items-center gap-5 mt-3'>
                    {basketItem.basketIcon && <basketItem.basketIcon/>}
                    {basketItem.arrowIcon && <basketItem.arrowIcon/>}
                    </div>
                </div>
                <div className=' flex w-[340px] px-2 py-2 lg:flex lg:items-center lg:justify-between lg:w-[600px] lg:px-5 lg:h-[250px] bg-white rounded-xl '>
                   <div >
                  
                   <h1 className='font-medium text-xl'>{basketItem.title}</h1>
                   <p className=' w-[200px] text-gray-400 mb-20'>{basketItem.discription}</p>
                  
                   <Button className={"rounded-full px-12"}>{basketItem.bottomText}</Button>
                   </div>
                   {<img className=' w-[80px] h-[80px] lg:w-[200px] lg:h-[200px] lg:mb-12' src={basketItem.img} alt="img" /> ||  <img className='w-[200px] h-[200px] mb-12' src={basketItem.img2} alt="img" />}

                  
                </div>

            </div>

            <div className='  w-[350px] bg-white rounded-xl h-[534px] py-5 px-8 flex flex-col items-start justify-between '>
                <img className='ml-5' src={basketItem.img} alt="img" />
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
        </div>
    );
};
