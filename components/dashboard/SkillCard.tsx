import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, Award, Zap, BookOpen } from "lucide-react"

interface SkillCardProps {
  name: string;
  level: "Beginner" | "Intermediate" | "Expert";
  years: number;
  progress: number;
  isVerified?: boolean;
}

export default function SkillCard({ name, level, years, progress, isVerified }: SkillCardProps) {
  // Map levels to specific icons and colors
  const levelConfig = {
    Beginner: { icon: <BookOpen className="w-3 h-3" />, color: "bg-blue-500/10 text-blue-500" },
    Intermediate: { icon: <Zap className="w-3 h-3" />, color: "bg-emerald-500/10 text-emerald-500" },
    Expert: { icon: <Award className="w-3 h-3" />, color: "bg-purple-500/10 text-purple-500" },
  }

  const { icon, color } = levelConfig[level]

  return (
    <div className="group p-6 rounded-3xl border border-border bg-card/50 hover:bg-card hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:-translate-y-2 transition-all duration-500">
      <div className="flex justify-between items-start mb-4">
        <div className="space-y-1">
          <h3 className="font-bold text-lg flex items-center gap-2">
            {name}
            {isVerified && <CheckCircle2 className="w-4 h-4 text-primary" />}
          </h3>
          <p className="text-xs text-muted-foreground">{years} Years Experience</p>
        </div>
        
        <Badge className={`flex items-center gap-1 border-none ${color}`}>
          {icon}
          {level}
        </Badge>
      </div>

      <div className="mt-6 space-y-3">
        <div className="flex justify-between text-xs font-semibold">
          <span className="text-muted-foreground uppercase tracking-wider">Proficiency</span>
          <span>{progress}%</span>
        </div>
        <Progress value={progress} className="h-2 bg-secondary" />
      </div>
    </div>
  )
}