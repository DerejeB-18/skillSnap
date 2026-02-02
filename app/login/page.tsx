"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Zap, Github, ArrowRight, Linkedin, Lock } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
)

export default function LoginPage() {
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock authentication success
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      {/* Visual background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md"
      >
        <div className="bg-zinc-900/40 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-2xl shadow-2xl">
          
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center gap-2 mb-6 group">
              <div className="bg-blue-600 p-1.5 rounded-lg group-hover:scale-110 transition-transform">
                <Zap className="w-5 h-5 text-white fill-white" />
              </div>
              <span className="text-xl font-bold text-white tracking-tighter">SkillSnap</span>
            </Link>
            <h1 className="text-2xl font-bold text-white tracking-tight">Welcome back</h1>
            <p className="text-zinc-500 mt-2 text-sm">Enter your credentials to access your account</p>
          </div>

          <div className="space-y-3">
            <Button variant="outline" className="w-full h-12 border-white/10 bg-white/5 hover:bg-white/10 text-white flex items-center justify-center gap-3 rounded-xl transition-all">
              <GoogleIcon />
              Login with Google
            </Button>

            <Button variant="outline" className="w-full h-12 border-white/10 bg-white/5 hover:bg-white/10 text-white flex items-center justify-center gap-3 rounded-xl transition-all">
              <Github className="w-5 h-5" />
              Login with GitHub
            </Button>
            
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-white/5" /></div>
              <div className="relative flex justify-center text-xs uppercase"><span className="bg-[#0c0c0c] px-4 text-zinc-600 font-bold">Or use email</span></div>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-zinc-400 text-xs font-semibold uppercase ml-1 tracking-wider">Email</Label>
                <Input id="email" type="email" required placeholder="you@example.com" className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus:border-blue-500 transition-all" />
              </div>
              
              <div className="grid gap-2">
                <div className="flex justify-between items-center ml-1">
                  <Label htmlFor="password" className="text-zinc-400 text-xs font-semibold uppercase tracking-wider">Password</Label>
                  <Link href="#" className="text-xs text-blue-400 hover:text-blue-300">Forgot?</Link>
                </div>
                <Input id="password" type="password" required placeholder="••••••••" className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus:border-blue-500 transition-all" />
              </div>
              
              <Button type="submit" className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl mt-4 shadow-lg shadow-blue-900/20 active:scale-[0.98] transition-all">
                Sign In <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
        
        <p className="text-center text-zinc-500 text-sm mt-6">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-blue-400 font-semibold hover:text-blue-300 transition-colors">Create one</Link>
        </p>
      </motion.div>
    </div>
  )
}