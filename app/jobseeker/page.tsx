"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { 
  ArrowRight, CheckCircle2, Search, 
  BrainCircuit, FileText, LayoutDashboard, 
  Zap, Sparkles
} from "lucide-react"
import Link from "next/link"

export default function JobseekerPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30 overflow-hidden">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full -z-10" />

      {/* 1. HERO SECTION */}
      <section className="container mx-auto px-4 pt-32 pb-20 text-center relative">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-white/10 text-sm font-medium text-zinc-400">
            <Sparkles className="h-4 w-4 text-blue-400" /> From Job Search to Job Offer — Faster
          </div>
        </motion.div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8 leading-[1.1]">
          Transform Into an <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            Interview-Ready
          </span> Candidate
        </h1>

        <p className="text-2xl md:text-3xl font-bold text-zinc-200 mb-6">
          Stop applying blindly. Start getting matched.
        </p>

        <p className="text-xl text-zinc-500 max-w-3xl mx-auto mb-12 leading-relaxed">
          We verify your skills, match you with the right jobs, and prepare you for success—all 
          in one platform tailored for the Ethiopian tech ecosystem.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" className="h-16 px-10 text-lg font-bold bg-blue-600 hover:bg-blue-700 rounded-2xl transition-all hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.3)]">
            <Link href="/signup">
            Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>

          <Button variant="outline" size="lg" className="h-16 px-10 text-lg font-bold border-white/10 bg-zinc-900/50 text-white hover:bg-zinc-800 rounded-2xl">
            Try Live Demo Platform
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-emerald-400 font-semibold text-sm">
          <div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5" /> No credit card required</div>
          <div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5" /> Hundreds of active jobs</div>
          <div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5" /> AI-powered matching</div>
        </div>
      </section>

      {/* 2. SOLUTIONS GRID */}
      <section className="bg-zinc-950/50 py-24 border-y border-white/5 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-500/20">Solutions</span>
            <h2 className="text-5xl font-black text-white mt-4 mb-4">Real Problems. Real Solutions.</h2>
            <p className="text-zinc-500 text-lg">Tools built to solve the actual challenges Ethiopian developers face</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="group bg-zinc-900/50 p-8 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-blue-500/10 text-blue-400 rounded-2xl border border-blue-500/20 group-hover:scale-110 transition-transform"><BrainCircuit className="h-6 w-6" /></div>
                <h3 className="text-2xl font-bold">Skill Verification</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3"><span className="bg-red-500/10 text-red-500 px-2 py-0.5 rounded text-[10px] font-bold uppercase border border-red-500/20">Problem</span><p className="text-zinc-400">Recruiters doubt your skills on paper</p></div>
                <div className="flex items-center gap-3"><span className="bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded text-[10px] font-bold uppercase border border-blue-500/20">Solution</span><p className="text-zinc-200 font-medium">AI-powered tests that grant verified badges</p></div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-zinc-900/50 p-8 rounded-3xl border border-white/5 hover:border-emerald-500/30 transition-all">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-2xl border border-emerald-500/20 group-hover:scale-110 transition-transform"><Search className="h-6 w-6" /></div>
                <h3 className="text-2xl font-bold">AI Job Matching</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3"><span className="bg-red-500/10 text-red-500 px-2 py-0.5 rounded text-[10px] font-bold uppercase border border-red-500/20">Problem</span><p className="text-zinc-400">Applications get lost in "black holes"</p></div>
                <div className="flex items-center gap-3"><span className="bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded text-[10px] font-bold uppercase border border-emerald-500/20">Solution</span><p className="text-zinc-200 font-medium">Direct matching to roles where you fit</p></div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-zinc-900/50 p-8 rounded-3xl border border-white/5 hover:border-orange-500/30 transition-all">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-orange-500/10 text-orange-400 rounded-2xl border border-orange-500/20 group-hover:scale-110 transition-transform"><FileText className="h-6 w-6" /></div>
                <h3 className="text-2xl font-bold">Profile Builder</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3"><span className="bg-red-500/10 text-red-500 px-2 py-0.5 rounded text-[10px] font-bold uppercase border border-red-500/20">Problem</span><p className="text-zinc-400">Static CVs don't show real potential</p></div>
                <div className="flex items-center gap-3"><span className="bg-orange-500/10 text-orange-400 px-2 py-0.5 rounded text-[10px] font-bold uppercase border border-orange-500/20">Solution</span><p className="text-zinc-200 font-medium">Dynamic, skill-first portfolios</p></div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group bg-zinc-900/50 p-8 rounded-3xl border border-white/5 hover:border-purple-500/30 transition-all">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-purple-500/10 text-purple-400 rounded-2xl border border-purple-500/20 group-hover:scale-110 transition-transform"><LayoutDashboard className="h-6 w-6" /></div>
                <h3 className="text-2xl font-bold">Hiring Pipeline</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3"><span className="bg-red-500/10 text-red-500 px-2 py-0.5 rounded text-[10px] font-bold uppercase border border-red-500/20">Problem</span><p className="text-zinc-400">No visibility into the process</p></div>
                <div className="flex items-center gap-3"><span className="bg-purple-500/10 text-purple-400 px-2 py-0.5 rounded text-[10px] font-bold uppercase border border-purple-500/20">Solution</span><p className="text-zinc-200 font-medium">Real-time status of your applications</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CALL TO ACTION */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="bg-blue-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-[0_20px_50px_rgba(37,99,235,0.3)]">
            {/* Inner background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-700 -z-10" />
            
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">Ready to Level Up?</h2>
            <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto">
              Join the growing community of Ethiopian IT talent and get matched with your dream job today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Button className="bg-white text-blue-600 hover:bg-zinc-100 font-bold h-16 px-10 rounded-2xl text-lg shadow-xl">
                 Create My Free Profile
               </Button>
               <Button variant="outline" className="border-white/30 bg-blue-700/50 text-white hover:bg-blue-700/80 font-bold h-16 px-10 rounded-2xl text-lg">
                 Browse Active Jobs
               </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}