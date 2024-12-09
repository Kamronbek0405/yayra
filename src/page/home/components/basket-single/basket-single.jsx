import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { basketData } from '@/data/data-service';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {  useSelector } from 'react-redux';
import { ProductCard } from '@/components/product-card';
import { Button } from '@/components/ui/button';

export const BasketSingle = () => {
    const navigate = useNavigate()
    const {productList} = useSelector((state) => state.product)
    const { id } = useParams();

    const basketItem = basketData.find(item => item.id === parseInt(id)); // id bo'yicha item qidirish

    useEffect(() => {
        AOS.init({ duration: 1000 }); // AOS ni boshlash va davomiylikni sozlash
    }, []);

    if (!basketItem) {
        return <p>Item not found.</p>; // Agar id bo'yicha element topilmasa
    }
    const exitClick = () => {
        navigate(-1)
    }

    return (
        <div className= 'w-[100%] overflow-hidden py-20  lg:w-[100%] lg:h-[100vh] relative justify-center items-center flex-col flex'>
            <div className='lg:flex lg:items-center    '>
                <Button className='absolute bottom-16 left-32 px-9 py-5 text-lg md:bottom-14 md:left-[350px] md:px-10 md:py-6 lg:top-[40px] lg:left-20 bg-red-500 lg:px-9 lg:py-5' onClick={exitClick}>ortga</Button>
            <h1 className='text-5xl text-red-500 font-bold tracking-widest'>Korzinka</h1>
            </div>
           <div className='  mt-20 md:flex md:flex-wrap md:gap-10 md:justify-center lg:flex  lg:items-center lg:justify-center lg:mt-5 lg:gap-20 lg py-20'>
           {productList.map((item) => <ProductCard key={item.id} {...item} />)}
           </div>
        </div>
    );
};
