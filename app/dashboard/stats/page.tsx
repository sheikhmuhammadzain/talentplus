"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { Stats } from "@/components/dashboard/stats"

export default function StatsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6">
          <Stats />
        </main>
      </div>
      <Footer />
    </div>
  )
}
