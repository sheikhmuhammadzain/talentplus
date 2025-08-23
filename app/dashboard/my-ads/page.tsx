"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { MyAds } from "@/components/dashboard/my-ads"

export default function MyAdsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6">
          <MyAds />
        </main>
      </div>
      <Footer />
    </div>
  )
}
