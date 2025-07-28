import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"

const inter = Inter({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  title: "TOO Alex - Система управления заявками",
  description: "Веб-сервис для управления заявками и поставщиками",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <div className="min-h-screen bg-slate-50/50">
          <Navigation />
          <div className="md:pl-64">
            <main className="p-4 md:p-8">{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}
