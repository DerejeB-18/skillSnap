import { PlusCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center border-2 border-dashed rounded-3xl border-border/50 bg-muted/5">
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
        <PlusCircle className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-xl font-semibold">No skills added yet</h3>
      <p className="text-muted-foreground max-w-xs mt-2 mb-6">
        Start building your professional profile by adding your first technical skill.
      </p>
      <Button>Add Your First Skill</Button>
    </div>
  )
}