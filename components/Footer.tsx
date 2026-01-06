import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"
import ProtectedEmailLink from "@/components/ProtectedEmailLink"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/brochure", label: "Brochure" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-white">
      <div className="container-custom py-6">
        {/* Main Content - Single Row */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.1fr_1fr] lg:grid-cols-[1fr_0.9fr_1.1fr] lg:items-start">
          {/* Logo & Description */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link href="/" className="mb-4 inline-block">
              <Image
                src="/kit-logo-light.svg"
                alt="KIT Consulting Logo"
                width={230}
                height={50}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
              Engineering excellence in Construction Execution, Tendering, and Process Optimization since 2014.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-1 lg:col-span-1 lg:pl-4">
            <h3 className="mb-3 text-sm font-semibold">Quick Links</h3>
            <div className="grid grid-cols-2 gap-y-2 gap-x-6 text-left text-xs text-slate-400">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-2 lg:col-span-1 lg:justify-self-end">
            <h3 className="mb-3 text-sm font-semibold">Contact</h3>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-slate-400">
              <div className="group flex items-center gap-2 text-xs text-slate-400 transition-all hover:text-white hover:translate-x-1">
                <Mail className="h-3.5 w-3.5 flex-shrink-0 text-blue-400" />
                <ProtectedEmailLink
                  email="info@kitengineeringconsulting.net"
                  className="truncate text-xs"
                  rel="nofollow"
                />
              </div>
              <a
                href="tel:+60122333880"
                className="group flex items-center gap-2 transition-all hover:text-white hover:translate-x-1"
              >
                <Phone className="h-3.5 w-3.5 flex-shrink-0 text-blue-400" />
                <span>+6012-2333 880</span>
              </a>
              <a
                href="https://maps.app.goo.gl/L1Emmw3HXdA1L5TP9?utm_source=website&utm_medium=footer&utm_campaign=map_link"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 transition-all hover:text-white hover:translate-x-1"
              >
                <MapPin className="h-3.5 w-3.5 flex-shrink-0 text-blue-400" />
                <span>Level 32, Q Sentral, Kuala Lumpur Sentral</span>
              </a>
            </div>
            <Link
              href="https://g.page/r/CXO2VjS02kEDEBM/review?utm_source=website&utm_medium=footer&utm_campaign=google_reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 rounded-full border border-blue-400/60 px-4 py-2 text-xs font-semibold text-blue-200 transition-all hover:border-blue-200 hover:text-white"
            >
              ⭐ Review Us on Google
            </Link>
          </div>
        </div>

        {/* Bottom Bar - Minimal */}
        <div className="mt-4 flex flex-col items-center justify-between gap-2 border-t border-slate-800 pt-4 text-xs sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-slate-500">
              © {currentYear} KIT Consulting. All rights reserved.
            </p>
            <p className="text-slate-600 text-[10px] mt-1">
              Business Registration No.: RA0067918M / 202103015495
            </p>
          </div>
          <div className="flex items-center gap-4 text-slate-500">
            <span className="rounded-full border border-slate-700 px-2 py-0.5 text-[10px]">ISO Certified</span>
            <Link href="/privacy" className="transition-colors hover:text-slate-300">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-slate-300">
              Terms
            </Link>
            <Link
              href="https://share.google/3gTKCfsL5pL9eRLuP?utm_source=website&utm_medium=footer&utm_campaign=google_profile"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-slate-300"
            >
              Google Business Profile
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
