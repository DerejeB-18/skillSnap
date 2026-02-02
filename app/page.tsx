"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { 
  ArrowRight, CheckCircle2, Briefcase, User, 
  Zap, BarChart3, Shield, Terminal, Globe 
} from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white selection:bg-blue-500/30">
      
      {/* 1. HERO SECTION (Based on image_03af3e) */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex items-center min-h-[90vh]">
        <div className="absolute inset-0 z-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-1 text-left"
            >
              <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium mb-8 text-emerald-400">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-3 animate-pulse"></span>
                14 days avg. hire time
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
                Hire Smarter. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                  Get Hired Faster.
                </span>
              </h1>

              <p className="text-xl text-gray-400 mb-6 font-semibold">
                Smart Job Matching & ATS for Ethiopia & Global IT Talent
              </p>
              
              <ul className="space-y-3 mb-10">
                <li className="text-gray-400 flex items-center gap-2">
                  <span className="font-bold text-white">For jobseekers:</span> Skill-first upskilling, career growth & matching
                </li>
                <li className="text-gray-400 flex items-center gap-2">
                  <span className="font-bold text-white">For employers:</span> Noise-free ATS with verified talent
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                {/* Find this in app/page.tsx */}
                <Button asChild size="lg" className="h-14 px-8 rounded-lg bg-blue-600 text-white font-bold">
                  <Link href="/jobseeker"> {/* Change this from /dashboard to /jobseeker */}
                    Start as Jobseeker <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="...">
                <Link href="/recruiter"> {/* Updated path */}
                  Explore more as Recruiter
                </Link>
              </Button>
              </div>
            </motion.div>
            {/* Visual Element (Right side of image_03af3e) */}
            <div className="flex-1 hidden lg:grid grid-cols-2 gap-4 relative">
                <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full" />
                {[
                  { icon: Zap, label: "AI Matching", sub: "Smart skill-to-role" },
                  { icon: Globe, label: "Sourcing by AI", sub: "Global discovery" },
                  { icon: BarChart3, label: "Analytics", sub: "Real-time metrics" },
                  { icon: Shield, label: "AI Automation", sub: "Streamline tasks" }
                ].map((item, i) => (
                  <div key={i} className="bg-zinc-900/80 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                    <item.icon className="h-8 w-8 text-blue-400 mb-3" />
                    <h4 className="font-bold text-white">{item.label}</h4>
                    <p className="text-xs text-gray-500">{item.sub}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. EVERYTHING YOU NEED TO KNOW (Based on image_03af9b) */}
      <section className="py-24 bg-zinc-950 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Everything You Need to Know</h2>
            <p className="text-gray-400">Understanding SkillSnap in 4 simple questions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { q: "What is SkillSnap?", a: "AI-powered recruitment platform connecting IT talent with employers through intelligent matching and CV analysis. An ATS built for modern hiring.", color: "text-blue-400" },
              { q: "Who is it for?", a: "Ethiopian & global recruiters seeking AI-matched candidates, and IT jobseekers who want real opportunities with transparent processes.", color: "text-emerald-400" },
              { q: "Why choose SkillSnap?", a: "No CV spam. No black holes. Just AI-powered matching, transparent hiring pipelines, and streamlined recruitment.", color: "text-orange-400" },
              { q: "How does it work?", a: "Post job → AI analyzes and matches candidates → Review & shortlist → Schedule interviews → Hire efficiently. Simple, transparent, effective.", color: "text-blue-500" }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-zinc-900 border border-white/5 hover:border-white/20 transition-all">
                <h3 className={`text-xl font-bold mb-4 ${item.color}`}>{item.q}</h3>
                <p className="text-gray-400 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CHOOSE YOUR PATH (Based on image_04017c) */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Choose Your Path</h2>
            <p className="text-gray-400 text-lg">Get started based on your role</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* For Employers */}
            <div className="flex flex-col rounded-3xl overflow-hidden border border-blue-500/20 bg-zinc-900/50">
              <div className="p-8 pb-0">
                  <div className="aspect-video bg-zinc-800 rounded-xl border border-white/5 overflow-hidden">
                    <div className="p-4 border-b border-white/5 flex gap-2"><div className="w-3 h-3 rounded-full bg-red-500"/><div className="w-3 h-3 rounded-full bg-yellow-500"/><div className="w-3 h-3 rounded-full bg-green-500"/></div>
                    <div className="p-4 space-y-2"><div className="h-4 w-3/4 bg-white/10 rounded"/><div className="h-4 w-1/2 bg-white/10 rounded"/></div>
                  </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Briefcase className="text-blue-500" /> For Employers
                </h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start text-gray-400"><CheckCircle2 className="mr-3 h-5 w-5 text-blue-500 shrink-0" /> <div><span className="text-white font-medium">Zero upfront cost.</span> Traditional ATS = 36,000 ETB/year before hiring anyone</div></li>
                  <li className="flex items-start text-gray-400"><CheckCircle2 className="mr-3 h-5 w-5 text-blue-500 shrink-0" /> <div><span className="text-white font-medium">AI-powered matching.</span> Smart candidate analysis, not resume spam</div></li>
                  <li className="flex items-start text-gray-400"><CheckCircle2 className="mr-3 h-5 w-5 text-blue-500 shrink-0" /> <div><span className="text-white font-medium">Streamlined hiring.</span> Efficient pipeline from job post to offer</div></li>
                </ul>
                <Button className="w-full h-12 bg-blue-600 hover:bg-blue-700 font-bold rounded-xl text-white">
                  <Link href="/signup">
                  Explore employer features
                  </Link>
                  </Button>
              </div>
            </div>

            {/* For Jobseekers */}
            <div className="flex flex-col rounded-3xl overflow-hidden border border-emerald-500/20 bg-zinc-900/50">
                <div className="p-8 pb-0">
                  <div className="aspect-video bg-zinc-800 rounded-xl border border-white/5 overflow-hidden">
                    <div className="p-4 border-b border-white/5 flex items-center justify-between"><div className="w-8 h-8 rounded-full bg-emerald-500/20"/><div className="w-20 h-4 bg-white/10 rounded"/></div>
                    <div className="p-8 flex justify-center items-center"><div className="w-24 h-24 rounded-full border-4 border-emerald-500/20 border-t-emerald-500 animate-spin"/></div>
                  </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <User className="text-emerald-500" /> For Jobseekers
                </h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start text-gray-400"><CheckCircle2 className="mr-3 h-5 w-5 text-emerald-500 shrink-0" /> <div><span className="text-white font-medium">No more black holes.</span> Get real feedback on every application</div></li>
                  <li className="flex items-start text-gray-400"><CheckCircle2 className="mr-3 h-5 w-5 text-emerald-500 shrink-0" /> <div><span className="text-white font-medium">AI-analyzed profiles.</span> Smart matching based on your skills and experience</div></li>
                  <li className="flex items-start text-gray-400"><CheckCircle2 className="mr-3 h-5 w-5 text-emerald-500 shrink-0" /> <div><span className="text-white font-medium">Career growth tools.</span> AI interview prep, skill tests, CV builder</div></li>
                </ul>
                <Button className="w-full h-12 bg-emerald-600 hover:bg-emerald-700 font-bold rounded-xl text-white">Discover jobseeker tools</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MODERN HIRING TEAMS (Based on image_0404d9) */}
      <section className="py-24 bg-zinc-950 text-center border-t border-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Built for Modern Hiring Teams</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-16">
            Designed by recruitment experts to solve real hiring challenges in Ethiopia and globally.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20">
            <div>
              <div className="text-3xl font-bold text-blue-500 mb-2">AI-Powered</div>
              <p className="text-gray-500 text-sm">Smart matching & analysis</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-500 mb-2">Full ATS</div>
              <p className="text-gray-500 text-sm">Complete hiring platform</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">100%</div>
              <p className="text-gray-500 text-sm">GDPR compliant</p>
            </div>
          </div>

          <div className="bg-blue-600 rounded-[2rem] p-12 md:p-20 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-4xl md:text-6xl font-bold text-white mb-8">Ready to Transform Your Journey?</h3>
                <p className="text-blue-100 text-xl mb-10 max-w-3xl mx-auto">
                  Join leading Ethiopian companies and job seekers upgrading from traditional platforms.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  
              <Button asChild variant="outline" size="lg" className="h-16 px-10 border-white/10 bg-white/5 rounded-2xl cursor-pointer">
              <Link href="/signup">Try Live Demo Platform</Link>
            </Button>
          
                  <Button size="lg" variant="outline" className="border-white/30 bg-blue-700/50 text-white hover:bg-blue-700/80 font-bold h-14 px-10 rounded-xl">
                  <Link href="/signup">
                  Get Started Free
                  </Link>
                  </Button>
                </div>
              </div>
          </div>
        </div>
      </section>

    </div>
  )
}