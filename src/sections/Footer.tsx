import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/logo-name.webp"
import { Mail, Phone, MapPinned } from "lucide-react"

export default function Footer() {
    return (
        <footer className=' bg-primary 
                            pt-6
                            pb-2
                            '>
            <div className="container
                            flex
                            items-center
                            justify-between 
                            max-w-6xl
                            pt-5
                            ">
                <div className="flex
                                flex-col
                                items-start
                                justify-center
                                gap-5
                                ">
                    <Link href='/' className='font-serif text-2xl'>
                        <Image
                            src={logo}
                            height={40}
                            alt="Logo with name AE Travelia"
                        />
                    </Link>
                    <h1 className="text-white font-black">Your Gateway to the World’s Wonders</h1>
                </div>

                <div className="flex
                                flex-col
                                items-start
                                justify-start
                                gap-5
                                ">
                    <h1 className="text-white font-extrabold">Services</h1>
                    <Link href='/' className="text-white font-medium">Home</Link>
                    <Link href='/destination' className="text-white font-medium">Destination</Link>
                    <Link href='/faqs' className="text-white font-medium">FAQs</Link>
                </div>

                <div className="flex
                                flex-col
                                items-start
                                justify-start
                                gap-5
                                ">
                    <h1 className="text-white font-extrabold">Contacts</h1>
                    <div className="flex items-center justify-start gap-[10px] text-white">
                        <Mail />
                        <p className="font-medium">marketing@aetravelia.com</p>
                    </div>
                    <div className="flex items-center justify-start gap-[10px] text-white">
                        <Phone />
                        <p className="font-medium">+62-811-234-5678</p>
                    </div>
                    <div className="flex items-center justify-start gap-[10px] text-white">
                        <MapPinned />
                        <p className="font-medium">Bali, Indonesia</p>
                    </div>
                </div>

            </div>
            <div className="flex items-center justify-center pt-10">
                <p className="text-white font-medium text-xs">© 2025 AE Travelia. All rights reserved</p>
            </div>
        </footer>
    )
}
