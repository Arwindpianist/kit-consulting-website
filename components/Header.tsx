"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ]

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === href
    }
    return pathname.startsWith(href)
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "border-b border-slate-200 bg-white/90 shadow-lg backdrop-blur-xl"
          : "border-b border-white/20 bg-white/80 backdrop-blur-md"
      )}
    >
      <nav className="container-custom flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <Image
            src="/kit-logo.svg"
            alt="KIT Consulting Logo"
            width={276}
            height={60}
            className="h-12 w-auto transition-transform group-hover:scale-105"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative rounded-lg px-4 py-2 text-sm font-semibold transition-all",
                isActive(link.href)
                  ? "bg-blue-50 text-blue-600"
                  : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
              )}
            >
              {link.label}
              {isActive(link.href) && (
                <div className="absolute bottom-0 left-1/2 h-0.5 w-8 -translate-x-1/2 bg-blue-600" />
              )}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden items-center gap-4 lg:flex">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md hover:shadow-lg"
          >
            <Link href="/contact">
              Get Started
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <SheetHeader>
              <SheetTitle className="text-left">
                <Image
                  src="/kit-logo.svg"
                  alt="KIT Consulting Logo"
                  width={230}
                  height={50}
                  className="h-10 w-auto"
                />
              </SheetTitle>
            </SheetHeader>

            <div className="mt-8 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center justify-between rounded-lg px-4 py-3 text-base font-semibold transition-all",
                    isActive(link.href)
                      ? "bg-blue-50 text-blue-600"
                      : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                  )}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <Badge className="bg-blue-600 text-white">Active</Badge>
                  )}
                </Link>
              ))}
              
              <Button
                asChild
                size="lg"
                className="mt-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
                onClick={() => setOpen(false)}
              >
                <Link href="/contact">
                  Get Started
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="mt-8 border-t pt-8">
              <div className="space-y-4 text-sm text-slate-600">
                <div>
                  <p className="mb-1 font-semibold text-slate-900">Email</p>
                  <a
                    href="mailto:kit.engineering.consulting@gmail.com"
                    className="text-blue-600 hover:underline"
                  >
                    kit.engineering.consulting@gmail.com
                  </a>
                </div>
                <div>
                  <p className="mb-1 font-semibold text-slate-900">Phone</p>
                  <a href="tel:+60123456789" className="text-blue-600 hover:underline">
                    +60 123 456 7890
                  </a>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
