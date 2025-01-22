
import Footer from "../sections/Footer";
import TopNavbar from "../sections/TopNavbar";
import Hero from "../sections/Hero";
import imageBg from '@/public/assets/image-backdrop-1.webp';
import { MarqueePartnersCard } from "@/sections/PartnersCard";
import TopDestinationSection from "@/sections/TopDestinationSection";
import LatestPromo from "@/sections/LatestPromo";


export default function Home() {
  return (
    <>
      <TopNavbar/>

      <Hero backdrop={imageBg} title="Your Gateway to the World’s Wonders"/>
      
      <MarqueePartnersCard/>

      <TopDestinationSection/>

      <LatestPromo/>

      <Footer/>
    </>
  );
}
