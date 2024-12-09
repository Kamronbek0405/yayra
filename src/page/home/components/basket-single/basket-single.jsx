import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { basketData } from '@/data/data-service';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const BasketSingle = () => {
    const { id } = useParams(); // URL dan id olamiz
    const basketItem = basketData.find(item => item.id === parseInt(id)); // id bo'yicha item qidirish

    useEffect(() => {
        AOS.init({ duration: 1000 }); // AOS ni boshlash va davomiylikni sozlash
    }, []);

    if (!basketItem) {
        return <p>Item not found.</p>; // Agar id bo'yicha element topilmasa
    }

    return (
        <div className='flex flex-col items-center mt-5'>
            <h1 className='text-2xl font-bold'>{basketItem.name}</h1>
            <img src={basketItem.img} alt={basketItem.name} className='w-[300px] h-[300px] mt-5' />
            <p className='text-lg mt-3'>{basketItem.discription}</p>
            <p className='text-xl font-medium mt-3'>{basketItem.price}</p>
           
        </div>
    );
};
