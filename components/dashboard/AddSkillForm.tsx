"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import { TagCloud } from "./TagCloud"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const skillSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  years: z.coerce.number().min(0, "Years cannot be negative"),
})

export function AddSkillForm() {
  const [mounted, setMounted] = useState(false)
  const [skills, setSkills] = useState<{id: string, label: string}[]>([])
  const idCounter = React.useRef(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  const form = useForm<z.infer<typeof skillSchema>>({
    resolver: zodResolver(skillSchema),
    defaultValues: {
      name: "",
      years: 0,
    },
  })

  const onFinalSubmit = (data: z.infer<typeof skillSchema>) => {
    idCounter.current += 1
    const newId = "skill-" + idCounter.current.toString()
    const newLabel = data.name + " (" + data.years + "y)"

    setSkills((prev) => [...prev, { id: newId, label: newLabel }])
    form.reset()
  }

  if (!mounted) return null

  // SHARED PREMIUM CLASSES
  const inputClasses = "transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary border-muted-foreground/20 bg-muted/5 shadow-inner"

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-dashed border-border p-4 bg-muted/30">
        <TagCloud tags={skills} onRemove={(id) => setSkills(prev => prev.filter(s => s.id !== id))} />
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onFinalSubmit)}
          className="space-y-4"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Skill Name</FormLabel>
                <FormControl>
                  {/* --- POLISHED INPUT START --- */}
                  <Input 
                    placeholder="Enter skill name..." 
                    className={inputClasses}
                    {...field} 
                  />
                  {/* --- POLISHED INPUT END --- */}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="years"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Experience</FormLabel>
                <FormControl>
                  {/* Applied classes here too for consistency */}
                  <Input
                    type="number"
                    className={inputClasses}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Add Skill
          </Button>
        </form>
      </Form>
    </div>
  )
}