
import React from 'react'
import { Hero } from './components/hero'
import { Basket } from './components/basket'
import { Invite } from './components/invite'
import { Cotolog } from './components/cotolog'
import { Clients } from './components/clients'
import { Blog } from '../blog'
import { Portfolio } from './components/portfolio'
import { Busines } from '../business'

export const Home = () => {
  
  return (
    <div >
      <section className='m-auto max-w-[1519px] w-[100%] h-[100vh] bg-[url("/blur.png")] bg-no-repeat bg-cover  '>
        <Hero />
        </section>
      <section className=' w-[100%]  lg:max-w-[1519px] lg:w-[100%] lg:h-[50vh] m-auto '>
        <Busines />
      </section>
      <section className='lg:w-[1519px] lg:h-[100vh] bg-blue-300 '>
        <Basket />
      </section>
      <section className=' w-[100%] h-[60vh] overflow-hidden lg:w-[1519px] lg:h-[100vh]  flex items-center justify-center'>
        <Invite/>
      </section>
      <section className=' w-[100%] h-[210vh] md:h-[121vh]  lg:w-[1519px] lg:h-[130vh] m-auto'>
        <Cotolog/>
      </section>
      <section className=' w-[100%]  lg:w-[1519px]  md:h-[520px] lg:h-[100vh] overflow-hidden  m-auto flex items-center  justify-center'>
        <Clients/>
      </section>
      <section className=' w-[100%] h-[220vh]  md:h-[110vh] lg:w-[1519px] lg:h-[100vh] overflow-hidden m-auto flex items-center  justify-center '>
        <Blog/>
      </section>
      <section className=' w-[100%] h-[650px] lg:w-[100%] lg:h-[52vh] md:h-[500px] bg-portfolioColor flex items-center justify-center'>
        <Portfolio/>
      </section>
      <section>
        
      </section>
    </div>
  )
}