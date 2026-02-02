"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Zap, ExternalLink, ArrowRight, Sparkles } from "lucide-react"

export default function RecruiterLandingPage() {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 font-sans selection:bg-blue-500/30">
      {/* Subtle Background Glow for that "Light Dark" feel */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-600/5 blur-[100px] rounded-full" />
      </div>

      {/* --- HERO SECTION --- */}
      <main className="max-w-5xl mx-auto px-6 pt-24 pb-32 text-center">
        
        {/* Top Badge - Darker background with subtle border */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/50 rounded-full border border-zinc-800 mb-10 backdrop-blur-sm"
        >
          <Sparkles className="w-4 h-4 text-blue-400" />
          <span className="text-xs font-bold text-zinc-400 tracking-wide">Modern ATS Built for Cost & Time Efficiency</span>
        </motion.div>

        {/* Headline - Brighter white for contrast */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6"
        >
          HireSmart ATS <br />
          <span className="text-zinc-500">Recruiter & AI Powered</span>
        </motion.h1>

        {/* Sub-headline - Vivid Blue */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-3xl font-bold text-blue-500 mb-8"
        >
          Hire First Pay Later
        </motion.p>

        {/* Description - Zinc 400 for readability */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-zinc-400 max-w-3xl mx-auto mb-4 leading-relaxed"
        >
          Complete hiring platform with <span className="font-bold text-zinc-200">AI matching</span>, multi-board job posting, automated interviews, and full GDPR compliance.
        </motion.p>

        {/* Callout */}
        <motion.p 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.4 }}
           className="text-lg font-bold text-emerald-500 mb-14"
        >
          First job posting FREE
        </motion.p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          {/* Primary Button */}
          <Button asChild size="lg" className="h-16 px-10 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl text-lg font-bold shadow-2xl shadow-blue-900/20 transition-all active:scale-95">
            <Link href="/signup" className="flex items-center gap-2">
              Try Live Demo Platform <ExternalLink className="w-5 h-5" />
            </Link>
          </Button>
          
          {/* Secondary Button - Dark variant */}
          <Button asChild variant="outline" size="lg" className="h-16 px-10 border-zinc-800 bg-zinc-900/30 hover:bg-zinc-800 text-white rounded-2xl text-lg font-bold transition-all active:scale-95 backdrop-blur-sm">
            <Link href="/signup" className="flex items-center gap-2">
              Start Free Trial <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>

        {/* Footer info - Low contrast zinc */}
        <div className="mt-20 text-zinc-600 text-sm font-semibold flex flex-wrap justify-center gap-x-8 gap-y-3">
          <span className="flex items-center gap-2 hover:text-zinc-400 transition-colors">No credit card required</span>
          <span className="hidden sm:block text-zinc-800">•</span>
          <span className="flex items-center gap-2 hover:text-zinc-400 transition-colors">Few Hours Setup</span>
          <span className="hidden sm:block text-zinc-800">•</span>
          <span className="flex items-center gap-2 hover:text-zinc-400 transition-colors">Sweden & Global Market Ready</span>
        </div>
      </main>
    </div>
  )
}