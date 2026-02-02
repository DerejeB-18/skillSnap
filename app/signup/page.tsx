"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Zap, ArrowRight, Eye, EyeOff, User, Briefcase, Github, Linkedin } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

// Custom Google Icon SVG
const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
)

export default function SignUpPage() {
  const router = useRouter()
  
  // State Management
  const [role, setRole] = React.useState<"jobseeker" | "employer">("jobseeker")
  const [showPassword, setShowPassword] = React.useState(false)
  const [agreed, setAgreed] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!agreed) return
    
    setIsLoading(true)
    // Simulate API Call
    setTimeout(() => {
      setIsLoading(false)
      router.push(role === "jobseeker" ? "/dashboard" : "/employer/dashboard")
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full -z-10" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="bg-zinc-900/40 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-2xl shadow-2xl relative">
          
          {/* Logo Area */}
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center gap-2 mb-6 group">
              <div className="bg-blue-600 p-1.5 rounded-lg group-hover:scale-110 transition-transform">
                <Zap className="w-5 h-5 text-white fill-white" />
              </div>
              <span className="text-xl font-bold tracking-tighter">SkillSnap</span>
            </Link>
            <h1 className="text-2xl font-bold tracking-tight">Create your account</h1>
          </div>

          <div className="space-y-4">
            {/* Social Buttons */}
            <div className="grid grid-cols-3 gap-3">
              <Button type="button" variant="outline" className="h-12 border-white/10 bg-white/5 hover:bg-white/10 transition-all rounded-xl">
                <GoogleIcon />
              </Button>
              <Button type="button" variant="outline" className="h-12 border-white/10 bg-white/5 hover:bg-white/10 transition-all rounded-xl text-[#0077B5]">
                <Linkedin className="w-5 h-5 fill-current" />
              </Button>
              <Button type="button" variant="outline" className="h-12 border-white/10 bg-white/5 hover:bg-white/10 transition-all rounded-xl">
                <Github className="w-5 h-5" />
              </Button>
            </div>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-white/5" /></div>
              <div className="relative flex justify-center text-[10px] uppercase"><span className="bg-[#0c0c0c] px-4 text-zinc-500 font-bold tracking-widest">Or use email</span></div>
            </div>

            <form onSubmit={handleSignup} className="space-y-5">
              
              {/* Role Selection Toggle */}
              <div className="grid grid-cols-2 gap-2 p-1 bg-white/5 rounded-2xl border border-white/10">
                <button
                  type="button"
                  onClick={() => setRole("jobseeker")}
                  className={`flex items-center justify-center gap-2 py-2.5 rounded-xl transition-all text-sm font-bold ${
                    role === "jobseeker" ? "bg-blue-600 text-white shadow-lg" : "text-zinc-500 hover:text-white"
                  }`}
                >
                  <User className="w-4 h-4" /> Jobseeker
                </button>
                <button
                  type="button"
                  onClick={() => setRole("employer")}
                  className={`flex items-center justify-center gap-2 py-2.5 rounded-xl transition-all text-sm font-bold ${
                    role === "employer" ? "bg-blue-600 text-white shadow-lg" : "text-zinc-500 hover:text-white"
                  }`}
                >
                  <Briefcase className="w-4 h-4" /> Employer
                </button>
              </div>

              {/* Input Fields */}
              <div className="space-y-3">
                <div className="grid gap-1.5">
                  <Label className="text-zinc-500 text-[10px] font-bold uppercase ml-1">Email</Label>
                  <Input type="email" required placeholder="you@example.com" className="bg-white/5 border-white/10 h-12 rounded-xl focus:border-blue-500" />
                </div>
                
                <div className="grid gap-1.5">
                  <Label className="text-zinc-500 text-[10px] font-bold uppercase ml-1">Password</Label>
                  <div className="relative">
                    <Input 
                      type={showPassword ? "text" : "password"} 
                      required 
                      placeholder="••••••••" 
                      className="bg-white/5 border-white/10 h-12 rounded-xl focus:border-blue-500 pr-12" 
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Agreement Checkbox - FIXED Infinite Loop */}
              <div className="flex items-start space-x-3 p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                <Checkbox 
                  id="terms" 
                  checked={agreed}
                  onCheckedChange={(checked) => setAgreed(checked as boolean)}
                  className="w-6 h-6 border-white/20 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600 rounded-md shrink-0 transition-all"
                />
                <label 
                  htmlFor="terms" 
                  className="text-xs text-zinc-400 leading-tight cursor-pointer select-none mt-0.5"
                >
                  I agree to the <span className="text-blue-400">Terms of Service</span> and <span className="text-blue-400">Privacy Policy</span>.
                </label>
              </div>
              
              <Button 
                type="submit" 
                disabled={isLoading || !agreed}
                className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-xl shadow-blue-900/20 disabled:opacity-30 disabled:grayscale transition-all active:scale-[0.98]"
              >
                {isLoading ? "Creating account..." : "Get Started Free"} 
                {!isLoading && <ArrowRight className="ml-2 w-4 h-4" />}
              </Button>
            </form>
          </div>

          <p className="text-center text-zinc-500 text-sm mt-8">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-400 font-bold hover:text-blue-300 transition-colors">Log in</Link>
          </p>
        </div>
      </motion.div>
    </div>
  )
}