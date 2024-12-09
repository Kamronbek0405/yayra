import { ClientsCard } from '@/components/clients-card'
import { clientsData } from '@/data/data-service'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Clients = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // AOS ni boshlash va davomiylikni sozlash
  }, []);
  return (
    <div>
        {clientsData?.map((item) => <ClientsCard key={item.id} {...item} />)}
    </div>
  )
}
