import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { ComboBox } from "@/components/ComboBox"

export function RegisterForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Hi, Lets Get Started Now!</h1>
        <p className="text-balance text-sm ">
          Fill this form to create your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="username">Username</Label>
          <Input id="username" type="text" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
          </div>
          <Input id="password" type="password" required />
          <div className="flex items-center">
            <Label>Confirm Password</Label>
          </div>
          <Input id="confirmPassword" type="password" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <Input id="phoneNumber" type="text" placeholder="+628112345678" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="role">Role</Label>
          <ComboBox/>
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
