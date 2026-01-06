import CTAButton from "./CTAButton"
import { ArrowRight, Mail, Phone, CheckCircle } from "./icons"
import ProtectedEmailLink from "@/components/ProtectedEmailLink"

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-24 text-white md:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute -left-64 top-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute -right-64 bottom-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-5">
          {/* Left Content - Spans 3 columns */}
          <div className="space-y-8 lg:col-span-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold backdrop-blur-sm">
              <div className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              Ready to Start?
            </div>

            <h2 className="text-balance text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
              Transform Your Next
              <br />
              <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                Engineering Project
              </span>
            </h2>

            <p className="max-w-2xl text-lg leading-relaxed text-blue-100">
              Partner with KIT Consulting for expert solutions in construction execution, tendering strategies, 
              and EPCC project management. Let's achieve excellence together.
            </p>

            {/* Key Benefits */}
            <div className="space-y-3">
              {[
                "Fast response within 24 hours",
                "Free initial consultation",
                "Proven track record of success"
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-sm text-blue-100">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <CTAButton
                href="/contact"
                variant="primary"
                className="group bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 font-semibold shadow-lg shadow-blue-500/25 transition-all hover:scale-105 hover:shadow-xl"
              >
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </CTAButton>
              <CTAButton
                href="/services"
                variant="secondary"
                className="border-2 border-white/30 bg-white/5 px-8 py-4 font-semibold backdrop-blur-sm transition-all hover:bg-white/10"
              >
                Explore Services
              </CTAButton>
            </div>
          </div>

          {/* Right Contact Cards - Spans 2 columns */}
          <div className="space-y-4 lg:col-span-2">
            <ProtectedEmailLink
              email="info@kitengineeringconsulting.net"
              rel="nofollow"
              className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-left text-white backdrop-blur-xl transition-all hover:border-blue-400/50 hover:bg-white/10 hover:no-underline"
            >
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20">
                <Mail className="h-6 w-6 text-blue-300" />
              </div>
              <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-300">Email Us</div>
              <div className="text-sm font-semibold text-white">info@kitengineeringconsulting.net</div>
            </ProtectedEmailLink>

            <a
              href="tel:+60122333880"
              className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all hover:border-cyan-400/50 hover:bg-white/10"
            >
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/20">
                <Phone className="h-6 w-6 text-cyan-300" />
              </div>
              <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-cyan-300">Call Us</div>
              <div className="text-sm font-semibold text-white">+6012-2333 880</div>
            </a>

            {/* Additional Info Card */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-emerald-300">Business Hours</div>
              <div className="space-y-1 text-sm text-blue-100">
                <div>Mon-Fri: 9:00 AM - 6:00 PM</div>
                <div className="text-xs text-blue-200/60">Malaysia Time (GMT+8)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
