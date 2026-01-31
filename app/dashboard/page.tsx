"use client"

import * as React from "react"
import Navbar from "@/components/layout/Navbar"
import SkillRadar from "@/components/dashboard/SkillRadar"
import SkillCard from "@/components/dashboard/SkillCard"
import { SkillCommand } from "@/components/dashboard/SkillCommand"
import { ProfileHeader } from "@/components/dashboard/ProfileHeader"
import { SkillTimeline } from "@/components/dashboard/SkillTimeline"
import { AddSkillForm } from "@/components/dashboard/AddSkillForm"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Main Content Container */}
      <main className="container mx-auto px-4 pt-24 pb-12">
        
        {/* DAY 5: PROFILE HEADER SECTION */}
        <header className="mb-10">
          <ProfileHeader />
          <div className="mt-6 flex justify-between items-end">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Skill Dashboard</h1>
              <p className="text-muted-foreground">Manage and visualize your professional growth.</p>
            </div>
            <SkillCommand />
          </div>
        </header>

        {/* BENTO GRID START */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[180px]">

          {/* Large Card: Skill Radar Chart */}
          <div className="md:col-span-4 lg:col-span-4 row-span-2 rounded-3xl border border-border bg-card/50 p-6 flex flex-col overflow-hidden">
            <h3 className="font-semibold mb-2">Skill Overview</h3>
            <div className="flex-1 w-full min-h-0">
              <SkillRadar />
            </div>
          </div>

          {/* DAY 5: NEW - Timeline Card (Social Proof) */}
          <div className="md:col-span-2 lg:col-span-2 row-span-2 rounded-3xl border border-border bg-card/50 p-6 flex flex-col">
            <h3 className="font-semibold text-sm text-muted-foreground mb-4">Growth Journey</h3>
            <div className="flex-1">
              <SkillTimeline />
            </div>
            <p className="text-[10px] text-muted-foreground mt-4 uppercase tracking-widest font-bold text-center">
              Skill Proficiency over 12 months
            </p>
          </div>

          {/* Medium Card: Stats */}
          <div className="md:col-span-2 lg:col-span-2 row-span-1 rounded-3xl border border-border bg-card/50 p-6">
            <h3 className="font-semibold text-sm text-muted-foreground">Global Rank</h3>
            <p className="text-4xl font-bold mt-2">#1,240</p>
            <div className="mt-4 text-xs text-emerald-500 font-medium">↑ 12% from last month</div>
          </div>

          {/* Medium Card: Verification Status */}
          <div className="md:col-span-2 lg:col-span-2 row-span-1 rounded-3xl border border-border bg-card/50 p-6 flex flex-col justify-between">
            <h3 className="font-semibold text-sm text-muted-foreground">Verified Skills</h3>
            <div className="flex -space-x-2 mt-2">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">
                    ✓
                  </div>
                ))}
            </div>
            <p className="text-xs text-muted-foreground mt-2">4 Skills fully verified</p>
          </div>
        </div>
        {/* BENTO GRID END */}

        {/* DAY 5: ADD SKILL SECTION (Management) */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h2 className="text-xl font-bold mb-2">Update Profile</h2>
              <p className="text-sm text-muted-foreground mb-6">Add new competencies to your public portfolio.</p>
              <div className="rounded-3xl border border-border bg-card/30 p-6">
                <AddSkillForm />
              </div>
            </div>
          </div>

          {/* INDIVIDUAL SKILL CARDS SECTION (Visual List) */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold mb-6">Detailed Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SkillCard 
                name="Next.js" 
                level="Expert" 
                years={3} 
                progress={92} 
                isVerified 
              />
              <SkillCard 
                name="TypeScript"
                level="Intermediate"
                years={2}
                progress={75}
                isVerified
              />
              <SkillCard
                name="PostgreSQL"
                level="Beginner"
                years={1}
                progress={40}
              />
              <SkillCard
                name="Tailwind CSS" 
                level="Expert" 
                years={4} 
                progress={98} 
                isVerified 
              />
            </div>
          </div>
        </div>

      </main>
    </div>
  )
}