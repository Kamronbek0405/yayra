import React from 'react'
import { Header } from '../header'
import {Outlet} from 'react-router-dom'
import { Footer } from '../footer'
import { Navigate } from 'react-router-dom'
import { loadState } from '@/config/storage'


export const MainLayout = () => {
  const user   = loadState("user")
  if(!user){return <Navigate  to={"/login"} />}
  return (
    <div>
        <Header/>
        <main>
            <Outlet/>
        </main>
          
        <Footer/>
    </div>
  )
}
