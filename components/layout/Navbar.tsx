"use client"

import * as React from "react"
import { Zap, Moon, Sun, User, Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

// Your premium Logo component
export function Logo() {
  return (
    <div className="flex items-center gap-2 group cursor-pointer">
      <div className="h-9 w-9 bg-blue-600 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.4)] group-hover:scale-110 transition-all duration-300">
        <Zap className="h-5 w-5 text-white fill-white" />
      </div>
      <span className="text-xl font-bold tracking-tighter text-white">
        Skill<span className="text-blue-500">Snap</span>
      </span>
    </div>
  )
}

export default function Navbar() {
  const { setTheme } = useTheme()
  const pathname = usePathname()

  // Helper function to check if a link is active
  const isActive = (path: string) => pathname === path

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/60 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        
        {/* Logo - Now using your Logo component */}
        <Link href="/" className="transition-opacity hover:opacity-90">
          <Logo />
        </Link>

        {/* Desktop Navigation - Added Active Link Highlighting */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {[
            { name: "Dashboard", href: "/dashboard" },
            { name: "Discover", href: "/discover" },
            { name: "Profile", href: "/profile" },
          ].map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className={`transition-colors hover:text-blue-400 ${
                isActive(link.href) ? "text-blue-500" : "text-gray-400"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9 text-gray-400 hover:text-white hover:bg-white/10">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-zinc-900 border-white/10 text-white">
              <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Profile Avatar - Linked to /profile */}
          <Link href="/profile">
            <Avatar className={`h-8 w-8 cursor-pointer border transition-all hover:scale-110 ${
              isActive("/profile") ? "border-blue-500 ring-2 ring-blue-500/20" : "border-white/10"
            }`}>
              <AvatarFallback className="bg-zinc-800 text-gray-400">
                <User size={16} />
              </AvatarFallback>
            </Avatar>
          </Link>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" className="text-gray-400">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}