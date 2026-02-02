import { Zap } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-16 bg-black text-gray-400">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Identity */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-600/20 p-1 rounded-md">
                <Zap className="w-4 h-4 text-blue-500 fill-blue-500" />
              </div>
              <span className="text-xl font-bold text-white tracking-tighter">
                SkillSnap
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Empowering developers to showcase their journey and master their craft. Built for the modern tech stack.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/dashboard" className="hover:text-blue-400 transition-colors">Analytics</Link></li>
              <li><Link href="/discover" className="hover:text-blue-400 transition-colors">Showcase</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Integrations</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-white font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Twitter</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">GitHub</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Discord</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 SkillSnap Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              Systems Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}