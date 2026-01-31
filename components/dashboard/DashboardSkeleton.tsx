import { Skeleton } from "@/components/ui/skeleton"

export function DashboardSkeleton() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Profile Header Skeleton */}
      <div className="flex items-center gap-6">
        {/* h-24 and w-24 are standard (96px) */}
        <Skeleton className="h-24 w-24 rounded-full" />
        <div className="space-y-3">
          {/* Replaced w-[250px] with w-64 (256px) */}
          <Skeleton className="h-8 w-64" />
          {/* Replaced w-[200px] with w-48 (192px) */}
          <Skeleton className="h-4 w-48" />
        </div>
      </div>

      {/* Bento Grid Skeleton */}
      {/* Replaced h-[400px] with aspect-video or a standard height like h-96 */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 h-auto">
        <Skeleton className="md:col-span-4 h-96 rounded-3xl" />
        <div className="md:col-span-2 flex flex-col gap-4">
          <Skeleton className="flex-1 rounded-3xl" />
          <Skeleton className="flex-1 rounded-3xl" />
        </div>
      </div>
    </div>
  )
}