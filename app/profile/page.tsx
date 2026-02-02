import { DashboardSkeleton } from "@/components/dashboard/DashboardSkeleton"

export default function ProfilePage() {
  return (
    <div className="container mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold mb-8 text-white">Your Public Profile</h2>
      <DashboardSkeleton />
    </div>
  )
}