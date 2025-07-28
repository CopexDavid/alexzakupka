"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  LayoutDashboard,
  FileText,
  Users,
  Shield,
  Settings,
  LogOut,
  Menu,
  Building2,
  MessageSquare,
  Brain,
  Search,
} from "lucide-react"

const navigation = [
  {
    name: "Дашборд",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Заявки",
    href: "/requests",
    icon: FileText,
  },
  {
    name: "Поиск поставщиков",
    href: "/search-process",
    icon: Search,
  },
  {
    name: "Чаты с ИИ",
    href: "/chats",
    icon: MessageSquare,
  },
  {
    name: "ИИ Анализ",
    href: "/ai-analysis",
    icon: Brain,
  },
  {
    name: "Поставщики",
    href: "/suppliers",
    icon: Users,
  },
  {
    name: "Журнал аудита",
    href: "/audit",
    icon: Shield,
  },
  {
    name: "Настройки",
    href: "/settings",
    icon: Settings,
  },
]

export function Navigation() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const NavItems = () => (
    <>
      {navigation.map((item) => {
        const isActive = pathname === item.href
        return (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              isActive
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            }`}
            onClick={() => setOpen(false)}
          >
            <item.icon className="h-4 w-4" />
            <span>{item.name}</span>
          </Link>
        )
      })}
    </>
  )

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div className="flex flex-col flex-grow pt-5 bg-background border-r border-border overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <Building2 className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-bold">TOO Alex</span>
          </div>
          <div className="mt-8 flex-grow flex flex-col">
            <nav className="flex-1 px-2 space-y-1">
              <NavItems />
            </nav>
            <div className="flex-shrink-0 p-4 border-t border-border">
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <LogOut className="mr-2 h-4 w-4" />
                Выход
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <div className="flex items-center justify-between p-4 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex items-center">
            <Building2 className="h-6 w-6 text-primary" />
            <span className="ml-2 text-lg font-bold">TOO Alex</span>
          </div>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <div className="flex items-center mb-8">
                <Building2 className="h-8 w-8 text-primary" />
                <span className="ml-2 text-xl font-bold">TOO Alex</span>
              </div>
              <nav className="space-y-1">
                <NavItems />
              </nav>
              <div className="absolute bottom-4 left-4 right-4">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <LogOut className="mr-2 h-4 w-4" />
                  Выход
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  )
}
