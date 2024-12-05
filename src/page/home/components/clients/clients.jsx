import { ClientsCard } from '@/components/clients-card'
import { clientsData } from '@/data/data-service'
import React from 'react'

export const Clients = () => {
  return (
    <div>
        {clientsData?.map((item) => <ClientsCard key={item.id} {...item} />)}
    </div>
  )
}
