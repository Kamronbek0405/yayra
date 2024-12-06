import React from 'react'
import { Header } from '../header'
import {Outlet} from 'react-router-dom'
import { Footer } from '../footer'
import { Navigate } from 'react-router-dom'
import { loadState } from '@/config/storage'
import { Basket } from '@/page/home/components/basket'
import { Home } from '@/page/home'


export const MainLayout = () => {
  const user   = loadState("user")
  if(!user){return <Navigate  to={"/login"} />}
  return (
    <div>
        <Header/>
        <div>
          <Home/>
        </div>
       
        
       
    </div>
  )
}
