"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { MyInvoices } from "@/components/dashboard/my-invoices"

export default function MyInvoicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6">
          <MyInvoices />
        </main>
      </div>
      <Footer />
    </div>
  )
}
