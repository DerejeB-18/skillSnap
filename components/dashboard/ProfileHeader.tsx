"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Link as LinkIcon, Calendar } from "lucide-react"

export function ProfileHeader() {
  return (
    <Card className="overflow-hidden border-none bg-transparent shadow-none">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
          <Avatar className="w-24 h-24 border-4 border-background shadow-xl">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          
          <div className="space-y-2 flex-1">
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="text-3xl font-bold tracking-tight">John Doe</h1>
              <Badge variant="secondary" className="bg-blue-500/10 text-blue-500 border-blue-500/20">
                Verified Expert
              </Badge>
            </div>
            
            <p className="text-lg text-muted-foreground font-medium">
              Senior Frontend Engineer & UI Designer
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground pt-2">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" /> San Francisco, CA
              </span>
              <span className="flex items-center gap-1">
                <LinkIcon className="w-4 h-4" /> portfolio.com
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" /> Joined Jan 2026
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}