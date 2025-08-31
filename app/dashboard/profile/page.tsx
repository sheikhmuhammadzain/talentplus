"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { Profile } from "@/components/dashboard/profile"

export default function ProfilePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex pt-24">
        <DashboardSidebar />
        <main className="flex-1 p-6">
          <Profile />
        </main>
      </div>
      <Footer />
    </div>
  )
}
