"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RainbowButton } from "@/components/ui/rainbow-button"
import { Drawer } from "vaul"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [dragY, setDragY] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startY, setStartY] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Drag handlers for sheet
  const handleDragStart = (clientY: number) => {
    setStartY(clientY)
    setIsDragging(true)
  }

  const handleDragMove = (clientY: number) => {
    if (!isDragging) return
    const delta = clientY - startY
    // Only allow dragging down (positive delta)
    if (delta > 0) {
      setDragY(delta)
    }
  }

  const handleDragEnd = () => {
    setIsDragging(false)
    // Close if dragged more than 100px or with velocity
    if (dragY > 100) {
      setOpen(false)
    }
    // Reset drag position with animation
    setDragY(0)
  }

  // Reset drag state when menu closes
  useEffect(() => {
    if (!open) {
      setDragY(0)
      setIsDragging(false)
    }
  }, [open])

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
            className="h-8 w-auto transition-transform group-hover:scale-105 sm:h-12"
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
                "group relative rounded-lg px-4 py-2 text-sm font-semibold transition-all hover:scale-105",
                isActive(link.href)
                  ? "bg-blue-50 text-blue-600"
                  : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
              )}
            >
              <span className="relative">
                {link.label}
                {!isActive(link.href) && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full" />
                )}
              </span>
              {isActive(link.href) && (
                <div className="absolute bottom-0 left-1/2 h-0.5 w-8 -translate-x-1/2 bg-blue-600" />
              )}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden items-center gap-4 lg:flex">
          <RainbowButton
            asChild
            size="lg"
            className="group"
          >
            <Link href="/contact" className="flex items-center gap-2">
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </RainbowButton>
        </div>

        {/* Mobile Menu */}
        <Drawer.Root open={open} onOpenChange={setOpen} dismissible={true}>
          <Drawer.Trigger asChild className="lg:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              className="group relative h-10 w-10 rounded-full hover:bg-blue-50 transition-all"
            >
              <div className="flex flex-col items-center justify-center gap-1.5">
                <span className={cn(
                  "h-0.5 w-5 bg-slate-700 rounded-full transition-all duration-300",
                  open && "rotate-45 translate-y-2"
                )} />
                <span className={cn(
                  "h-0.5 w-5 bg-slate-700 rounded-full transition-all duration-300",
                  open && "opacity-0"
                )} />
                <span className={cn(
                  "h-0.5 w-5 bg-slate-700 rounded-full transition-all duration-300",
                  open && "-rotate-45 -translate-y-2"
                )} />
              </div>
              <span className="sr-only">Toggle menu</span>
            </Button>
          </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 z-40 bg-slate-900/10" />
          <Drawer.Content className="fixed bottom-0 left-0 right-0 z-50 flex h-[75vh] flex-col overflow-hidden rounded-t-[2rem] border-t border-white/15 bg-white/85 shadow-[0_-8px_24px_rgba(15,23,42,0.08)]">
              {/* Accessibility Elements (Hidden) */}
              <Drawer.Title className="sr-only">Navigation Menu</Drawer.Title>
              <Drawer.Description className="sr-only">
                Access all pages and contact information for KIT Consulting
              </Drawer.Description>

              {/* Drag Handle */}
              <div className="relative z-10 flex justify-center pt-3 pb-4 cursor-grab active:cursor-grabbing">
                <div className="h-1.5 w-12 rounded-full bg-slate-200/70 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-transform active:scale-95" />
              </div>

            {/* Scrollable Navigation */}
            <div className="relative z-10 flex-1 overflow-y-auto px-4 pb-5 pt-1">
                {/* iOS-style Navigation Cards */}
                <div className="space-y-3 mb-6">
                  {navLinks.map((link, index) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "group relative flex items-center justify-between rounded-2xl px-5 py-4 transition-transform duration-150 active:scale-[0.97]",
                        isActive(link.href)
                          ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-sm shadow-blue-500/15"
                          : "bg-white/65 text-slate-700 hover:bg-white/75 shadow-sm shadow-slate-900/8 border border-white/25"
                      )}
                    >
                      <span className="text-lg font-semibold">{link.label}</span>
                      <ChevronRight className={cn(
                        "h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-active:translate-x-0",
                        isActive(link.href) ? "text-white" : "text-slate-400"
                      )} />
                    </Link>
                  ))}
                </div>

                {/* CTA Section */}
                <div 
                  className="relative rounded-2xl border border-white/20 bg-gradient-to-br from-blue-600/80 via-blue-500/70 to-sky-400/65 p-6 text-white shadow-sm shadow-blue-500/15"
                >
                  <div className="relative z-10">
                    <p className="mb-2 text-sm font-medium opacity-90">Ready to start?</p>
                    <h3 className="mb-4 text-xl font-bold">Let's Work Together</h3>
                    <RainbowButton
                      asChild
                      className="group w-full bg-white/95 hover:bg-white text-blue-600 active:scale-95 backdrop-blur-sm"
                      onClick={() => setOpen(false)}
                    >
                      <Link href="/contact" className="flex items-center justify-center gap-2">
                        Get Started
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </RainbowButton>
                  </div>
                </div>

                {/* Contact Cards */}
                <div 
                  className="mt-4 grid grid-cols-2 gap-3"
                >
                  <a
                    href="mailto:info@kitengineeringconsulting.net"
                    className="group flex flex-col items-center justify-center rounded-2xl border border-white/20 bg-white/70 p-4 text-center shadow-sm shadow-slate-900/8 transition-transform hover:bg-white/75 hover:shadow-md hover:shadow-slate-900/10 active:scale-95"
                  >
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50/70">
                      <span className="text-xl">📧</span>
                    </div>
                    <span className="text-xs font-semibold text-slate-900">Email Us</span>
                    <span className="text-xs text-slate-500 mt-1 truncate w-full">info@kit...</span>
                  </a>
                  <a
                    href="tel:+60129100417"
                    className="group flex flex-col items-center justify-center rounded-2xl border border-white/20 bg-white/70 p-4 text-center shadow-sm shadow-slate-900/8 transition-transform hover:bg-white/75 hover:shadow-md hover:shadow-slate-900/10 active:scale-95"
                  >
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50/70">
                      <span className="text-xl">📞</span>
                    </div>
                    <span className="text-xs font-semibold text-slate-900">Call Us</span>
                    <span className="text-xs text-slate-500 mt-1">012-9100 417</span>
                  </a>
                </div>
              </div>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      </nav>
    </header>
  )
}
