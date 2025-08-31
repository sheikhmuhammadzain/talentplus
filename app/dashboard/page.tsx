"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { DashboardOverview } from "@/components/dashboard/overview"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6">
          {/* Back Button */}
          <div className="mb-6">
            <Button variant="ghost" asChild className="p-0 h-auto font-normal text-muted-foreground hover:text-foreground">
              <Link href="/" className="inline-flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
          <DashboardOverview />
        </main>
      </div>
      <Footer />
    </div>
  )
}
