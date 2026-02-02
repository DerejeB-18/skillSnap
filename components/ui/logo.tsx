import { Box } from "lucide-react"

export function Logo() {
  return (
    <div className="flex items-center gap-2 group cursor-pointer">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.3)] group-hover:scale-110 transition-transform">
        <Box className="h-5 w-5 text-white" />
      </div>
      <span className="text-xl font-bold tracking-tighter text-white">
        Skill<span className="text-blue-500">Snap</span>
      </span>
    </div>
  )
}