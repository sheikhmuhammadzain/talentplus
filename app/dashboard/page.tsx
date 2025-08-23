"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { DashboardOverview } from "@/components/dashboard/overview"

export default function DashboardPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6">
          <DashboardOverview />
        </main>
      </div>
      <Footer />
    </div>
  )
}
