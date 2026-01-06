import CTAButton from "./CTAButton"
import { ArrowRight, CheckCircle } from "./icons"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#001a33] via-[#003366] to-[#004d7a] text-white">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, rgba(255,255,255,0.2) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid min-h-[85vh] items-center gap-12 py-20 lg:grid-cols-2 lg:py-0">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium backdrop-blur-md">
              <div className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              <span>Engineering Excellence Since 2020</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-balance text-5xl font-extrabold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
              Transform Complex
              <br />
              <span className="bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                Engineering Challenges
              </span>
            </h1>

            {/* Description */}
            <p className="max-w-xl text-lg leading-relaxed text-blue-100 md:text-xl">
              Expert solutions in construction execution and tendering strategies. 
              We deliver measurable results for industry leaders.
            </p>

            {/* Key Benefits */}
            <div className="space-y-3">
              {[
                "40+ Projects Delivered On-Time",
                "Proven Cost Optimization Strategies",
                "Industry-Leading Technical Expertise"
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-400/20">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                  </div>
                  <span className="text-base text-blue-100">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <CTAButton
                href="/contact"
                variant="primary"
                className="group bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 font-semibold shadow-lg shadow-blue-500/25 transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </CTAButton>
              <CTAButton
                href="/services"
                variant="secondary"
                className="border-2 border-white/30 bg-white/5 px-8 py-4 font-semibold backdrop-blur-sm transition-all hover:bg-white/10"
              >
                View Our Services
              </CTAButton>
            </div>
          </div>

          {/* Right Visual - Stats Cards */}
          <div className="hidden space-y-6 lg:block">
            {/* Main Stats Card */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl transition-all hover:bg-white/15">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-blue-400/20 blur-2xl" />
              <div className="relative">
                <div className="mb-6 text-5xl font-bold">98%</div>
                <div className="text-lg font-semibold text-blue-100">On-Time Delivery Rate</div>
                <div className="mt-2 text-sm text-blue-200">Across all project categories</div>
                <div className="mt-4 h-2 w-full rounded-full bg-white/10">
                  <div className="h-2 w-[98%] rounded-full bg-gradient-to-r from-blue-400 to-cyan-400" />
                </div>
              </div>
            </div>

            {/* Secondary Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl">
                <div className="text-3xl font-bold">$50M+</div>
                <div className="mt-2 text-sm text-blue-100">Project Value</div>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl">
                <div className="text-3xl font-bold">15+</div>
                <div className="mt-2 text-sm text-blue-100">Major Clients</div>
              </div>
            </div>

            {/* Client Logos Preview */}
            <div className="flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl">
              <div className="text-sm text-blue-100">Trusted by:</div>
              <div className="flex flex-1 items-center justify-around text-sm font-bold text-white">
                <span>Shell</span>
                <span>Petronas</span>
                <span>BASF</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute -right-64 -top-64 h-[800px] w-[800px] rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute -bottom-64 -left-64 h-[800px] w-[800px] rounded-full bg-cyan-500/10 blur-3xl" />
    </section>
  )
}
