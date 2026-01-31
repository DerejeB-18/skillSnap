import Navbar from "@/components/layout/Navbar"
import Hero from "@/components/features/Hero"
import TechStack from "@/components/features/TechStack" // Import this
import Features from "@/components/features/Features"
import Footer from "@/components/layout/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TechStack /> {/* Add this here */}
      <Features />
      <Footer />
    </main>
  )
}