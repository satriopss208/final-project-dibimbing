import Footer from '@/sections/Footer'
import Header from '@/sections/TopNavbar'
import React from 'react'
import backdrop from '@/public/assets/image-backdrop-2.jpg';
import Hero from '@/sections/Hero';

export default function Destination() {
  return (
    <>
      <Header/>

      <Hero backdrop={backdrop} title="Wander Beyond Limits, Discover Infinite Wonders"/>

      <div className='p-[72px]'>Destination</div>

      <Footer/>
    </>
  )
}
