import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SkillSnap | Showcase Your Tech Journey",
  description: "Track your skills, share your projects, and get discovered by the best teams in tech.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased min-h-screen bg-background text-foreground`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark" // Day 6 Tip: Setting dark as default looks better for dev tools
          enableSystem
          disableTransitionOnChange
        >
          {/* Main Layout Wrapper */}
          <div className="relative flex min-h-screen flex-col">
            
            {/* Navigation stays at the top of every page */}
            <Navbar />

            {/* The 'flex-1' ensures this area takes up all available space, 
               pushing the footer to the bottom. 'pt-16' accounts for the fixed navbar.
            */}
            <main className="flex-1 pt-16">
              {children}
            </main>

            {/* Footer stays at the bottom of every page */}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}