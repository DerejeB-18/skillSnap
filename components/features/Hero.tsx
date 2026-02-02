"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Terminal } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-[95vh] flex items-center">
      {/* BACKGROUND TEXTURE: Subtle Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium mb-8 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
            <span className="text-gray-300">v1.0 Public Beta</span>
          </div>

          {/* Headline - Removed the parent text-transparent to fix visibility */}
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight mb-8 text-white leading-[1.1]">
            Level Up Your <br />
            <span 
              className="bg-clip-text text-transparent font-bold"
              style={{
                backgroundImage: "linear-gradient(90deg, #3b82f6 0%, #10b981 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              } as React.CSSProperties}
            >
              Tech Stack
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Showcase your developer journey. Track your skills, share your projects, 
            and get discovered by the best teams in tech.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="h-14 px-8 rounded-full text-base font-bold bg-white text-black hover:bg-gray-200 transition-all hover:scale-105">
              <Link href="/dashboard">
                Start Building Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-8 rounded-full text-base border-white/10 bg-white/5 hover:bg-white/10 text-white transition-all">
              <Link href="/discover">
                <Terminal className="mr-2 h-4 w-4" />
                View Showcase
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Soft Decorative Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[40vh] bg-blue-500/10 blur-[120px] rounded-full -z-10 pointer-events-none"
        aria-hidden="true"
      />
    </section>
  )
}