"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Moon, Sun, User, Menu } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function Navbar() {
  const { setTheme } = useTheme()

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-border/40 bg-background/60 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
          Skill<span className="text-primary">Snap</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <Link href="/dashboard" className="hover:text-foreground transition-colors">Dashboard</Link>
          <Link href="/discover" className="hover:text-foreground transition-colors">Discover</Link>
          <Link href="/profile" className="hover:text-foreground transition-colors">Profile</Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <DropdownMenu modal={false}> {/* modal={false} helps with hydration in some cases */}
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                {/* CSS handles the toggle visibility to avoid JS logic errors */}
                <Sun className="h-[1.2rem] w-[1.2rem] block dark:hidden" />
                <Moon className="h-[1.2rem] w-[1.2rem] hidden dark:block" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Avatar className="h-8 w-8 cursor-pointer border border-border">
            <AvatarFallback><User size={16} /></AvatarFallback>
          </Avatar>

          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}