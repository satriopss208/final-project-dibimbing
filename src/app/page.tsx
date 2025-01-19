'use client'
import Footer from "../sections/Footer";
import TopNavbar from "../sections/TopNavbar";
import Hero from "../sections/Hero";
import imageBg from '@/public/assets/image-backdrop-1.webp';


export default function Home() {
  return (
    <>
      <TopNavbar/>

      <Hero backdrop={imageBg} title="Your Gateway to the World’s Wonders"/>
      
      <div className='p-[72px]'>Home</div>

      <Footer/>
    </>
  );
}
