import { RegisterForm } from '@/sections/Register-form';
import Image from 'next/image';
import loginBackdrop from "@/public/assets/_ (1).png";
import logo from '@/public/assets/logo-name.webp';

export default function Register() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="relative hidden bg-muted lg:block">
        <Image
          src={loginBackdrop}
          alt="Login Backdrop"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute 
                        inset-0
                        object-cover
                        w-full 
                        h-full 
                        bg-black 
                        opacity-40 
                        ">
        </div>
      </div>
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
            <div className="flex items-center justify-center rounded-md text-primary-foreground">
              <Image
                src={logo}
                width={200}
                alt="Logo AE Travelia"
              />
            </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  )
}
