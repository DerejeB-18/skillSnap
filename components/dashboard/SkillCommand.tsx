"use client"

import * as React from "react"
import {  Settings, Plus } from "lucide-react"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "@/components/ui/command"
import { Dialog, DialogContent } from "@/components/ui/dialog"

export function SkillCommand() {
  const [open, setOpen] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)

  // Listen for Cmd+K or Ctrl+K
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      <button 
        onClick={() => setOpen(true)}
        className="text-xs text-muted-foreground border border-border px-2 py-1 rounded-md bg-secondary/30 flex items-center gap-2 hover:bg-secondary/50 transition-all"
      >
        <span className="text-[10px]">CMD + K</span>
        <span>Quick Add Skill</span>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="p-0 overflow-hidden shadow-2xl border-border">
          <Command className="rounded-lg border shadow-md">
            <CommandInput placeholder="Search for a skill to add..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem className="cursor-pointer">
                  <Plus className="mr-2 h-4 w-4" />
                  <span>React.js</span>
                  <CommandShortcut>⌘R</CommandShortcut>
                </CommandItem>
                <CommandItem className="cursor-pointer">
                  <Plus className="mr-2 h-4 w-4" />
                  <span>Python</span>
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem className="cursor-pointer">
                  <Plus className="mr-2 h-4 w-4" />
                  <span>Figma</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Manage Categories</span>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>
    </>
  )
}