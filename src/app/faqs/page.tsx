import Footer from '@/sections/Footer'
import Header from '@/sections/TopNavbar'
import backdrop from '@/public/assets/image-backdrop-3.jpeg';
import Hero from '@/sections/Hero';

export default function Faqs() {
    return (
        <>
            <Header />

            <Hero backdrop={backdrop} title="Venture Beyond Boundaries, Unveil Endless Possibilities"/>

            <div className='p-[72px]'>Faqs</div>

            <Footer />
        </>
    )
}
