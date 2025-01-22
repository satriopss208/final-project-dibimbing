"use client";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { ComboBox } from "@/components/ComboBox"
import useRegister from "@/hooks/useRegister"
import { Register } from "@/hooks/registerInterface"
import { useState } from "react"
import { useRouter } from 'next/navigation';

export function RegisterForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {

  const router = useRouter();
  const { register, loading, success, error } = useRegister();
  const [formData, setFormData] = useState<Register>({
    name: '',
    email: '',
    password: '',
    passwordRepeat: '',
    role: '',
    profilePictureUrl: '',
    phoneNumber: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await register(formData);
      alert('Registration successful!');
      setTimeout(() => {
        router.push('/login');
      }, 2000);
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      setFormData({
        name: '',
        email: '',
        password: '',
        passwordRepeat: '',
        role: '',
        profilePictureUrl: '',
        phoneNumber: '',
      });
    }
  };

  return (
    <form className={cn("flex flex-col gap-6", className)} {...props} onSubmit={handleSubmit}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Hi, Lets Get Started Now!</h1>
        <p className="text-balance text-sm ">
          Fill this form to create your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="name">Username</Label>
          <Input id="name" name="name" type="text" placeholder="example" required onChange={handleChange} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder="m@example.com" required onChange={handleChange} />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
          </div>
          <Input id="password" name="password" type="password" required onChange={handleChange} />
          <div className="flex items-center">
            <Label>Confirm Password</Label>
          </div>
          <Input id="passwordRepeat" name="passwordRepeat" type="password" required onChange={handleChange} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <Input id="phoneNumber" name="phoneNumber" type="text" placeholder="+628112345678" required onChange={handleChange} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="role">Role</Label>
          <ComboBox name="role" onChange={handleChange} />
        </div>
        <Button type="submit" className="w-full">
          Sign Up
        </Button>
      </div>
      <div className="text-center text-sm">
        Already have an account?{" "}
        <Link href="/login" className="underline text-primary underline-offset-4 hover:font-bold">
          Sign In
        </Link>
      </div>
    </form>
  )
}