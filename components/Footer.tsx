import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-white">
      <div className="container-custom py-6">
        {/* Main Content - Single Row */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
          {/* Logo & Description */}
          <div className="lg:col-span-4">
            <Link href="/" className="mb-3 inline-block">
              <Image
                src="/kit-logo-light.svg"
                alt="KIT Consulting Logo"
                width={230}
                height={50}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed">
              Engineering excellence in Construction Execution, Tendering, and Process Optimization since 2009.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3">
            <h3 className="mb-2 text-sm font-semibold">Quick Links</h3>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-slate-400 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-5">
            <h3 className="mb-2 text-sm font-semibold">Contact</h3>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
              <a
                href="mailto:justin@kitengineeringconsulting.net"
                className="flex items-center gap-2 text-xs text-slate-400 transition-colors hover:text-white"
              >
                <Mail className="h-3.5 w-3.5 flex-shrink-0 text-blue-400" />
                <span className="truncate">justin@kitengineeringconsulting.net</span>
              </a>
              <a
                href="tel:+60129100417"
                className="flex items-center gap-2 text-xs text-slate-400 transition-colors hover:text-white"
              >
                <Phone className="h-3.5 w-3.5 flex-shrink-0 text-blue-400" />
                <span>012-9100 417</span>
              </a>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <MapPin className="h-3.5 w-3.5 flex-shrink-0 text-blue-400" />
                <span>Kuala Lumpur</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Minimal */}
        <div className="mt-4 flex flex-col items-center justify-between gap-2 border-t border-slate-800 pt-4 text-xs sm:flex-row">
          <p className="text-slate-500">
            © {currentYear} KIT Consulting. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-slate-500">
            <span className="rounded-full border border-slate-700 px-2 py-0.5 text-[10px]">ISO Certified</span>
            <Link href="/privacy" className="transition-colors hover:text-slate-300">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-slate-300">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
