import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/assets/logo.webp'
import { Search } from 'lucide-react'
import { Button } from '../components/ui/button';

export default function TopNavbar() {
    return (
        <header className='fixed 
                           inset-x-0 
                           top-0 
                           z-50 
                           bg-background/40 
                           py-4 
                           backdrop-blur-sm 
                           drop-shadow-md
                           '>
            <nav className='container 
                            flex 
                            items-center 
                            justify-between
                            max-w-6xl 
                            '>
                <div>
                    <Link href='/' className='font-serif text-2xl font-bold'>
                        <Image
                            src={logo}
                            width={40}
                            height={40}
                            alt="Logo AE Travelia"
                        />
                    </Link>
                </div>

                <div>
                    <ul className='flex 
                                   items-stretch 
                                   gap-4 
                                   text-md 
                                   text-foreground 
                                   font-bold
                                   sm:gap-10
                                   '>
                        <li className='transition-colors 
                                       hover:text-primary 
                                       '>
                            <a href='/destination'>Destination</a>
                        </li>
                        <li className='transition-colors hover:text-primary'>
                            <a href='#promo'>Promo</a>
                        </li>
                        <li className='transition-colors hover:text-primary'>
                            <a href='#contact'>Gallery</a>
                        </li>
                    </ul>
                </div>
                
                <div>
                    <ul className='flex 
                                   items-center 
                                   gap-4 
                                   text-md 
                                   font-bold 
                                   text-foreground 
                                   sm:gap-10
                                   '>
                    <li className='transition-colors hover:text-primary'>
                            <Search/>
                        </li>
                        <li className='transition-colors hover:text-primary'>
                            <Link href="/register">Sign Up</Link>
                        </li>
                        <li className='transition-colors'>
                            <Link href="/login">
                                <Button className='text-md'>Login</Button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
