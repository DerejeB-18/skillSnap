"use client"

import * as React from "react"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface Tag {
  id: string
  label: string
}

interface TagCloudProps {
  tags: Tag[]
  onRemove: (id: string) => void
}

export function TagCloud({ tags, onRemove }: TagCloudProps) {
  return (
    <div className="flex flex-wrap gap-2 p-2">
      <AnimatePresence>
        {tags.map((tag) => (
          <motion.div
            key={tag.id}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <Badge
              variant="secondary" 
              className="pl-3 pr-1 py-1 gap-1 border-primary/20 bg-primary/5 text-primary flex items-center"
            >
              {tag.label}
              <Button
                variant="ghost"
                size="icon"
                type="button" // Critical: prevents form submission
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  onRemove(tag.id)
                }}
                className="h-4 w-4 p-0 hover:bg-transparent text-primary/50 hover:text-primary transition-colors"
              >
                <X className="h-3 w-3" />
                <span className="sr-only">Remove {tag.label}</span>
              </Button>
            </Badge>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}