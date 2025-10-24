import { FileText, Search, Briefcase, Monitor, ArrowRight } from "./icons"
import Link from "next/link"

export default function ServicePreview() {
  const services = [
    {
      icon: FileText,
      title: "Tendering Support & Strategies",
      description: "Win competitive bids with strategic planning, cost optimization, and technical proposal development.",
      slug: "tendering-support",
      gradient: "from-blue-600 via-blue-500 to-cyan-500",
      number: "01"
    },
    {
      icon: Search,
      title: "Technical Due Diligence",
      description: "In-depth technical assessments to identify risks, validate designs, and ensure project feasibility.",
      slug: "technical-due-diligence",
      gradient: "from-cyan-600 via-cyan-500 to-teal-500",
      number: "02"
    },
    {
      icon: Briefcase,
      title: "EPCC Project Management",
      description: "End-to-end project delivery ensuring on-time, on-budget completion with quality assurance.",
      slug: "epcc-project-management",
      gradient: "from-teal-600 via-teal-500 to-emerald-500",
      number: "03"
    },
    {
      icon: Monitor,
      title: "Remote Engineering Solutions",
      description: "Cost-effective remote support providing expert guidance, optimization, and problem-solving.",
      slug: "remote-engineering",
      gradient: "from-emerald-600 via-emerald-500 to-green-500",
      number: "04"
    },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-24 md:py-32">
      {/* Background decoration */}
      <div className="absolute left-0 top-0 h-[600px] w-[600px] bg-blue-100/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[600px] w-[600px] bg-cyan-100/30 blur-3xl" />

      <div className="container-custom relative">
        {/* Header */}
        <div className="mb-20 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700">
            <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-600" />
            Our Core Services
          </div>
          <h2 className="mb-6 text-balance text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
            Engineering Excellence
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Across Every Phase
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600">
            Comprehensive solutions for complex engineering challenges. From initial planning to final execution.
          </p>
        </div>

        {/* Services Grid - Bento Style */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              href="/services"
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${service.gradient} p-8 text-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
                                   radial-gradient(circle at 80% 80%, white 1px, transparent 1px)`,
                  backgroundSize: '40px 40px'
                }} />
              </div>

              {/* Number Badge */}
              <div className="absolute right-6 top-6 text-6xl font-black text-white/10">{service.number}</div>

              {/* Content */}
              <div className="relative flex h-full flex-col">
                {/* Icon */}
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm transition-all group-hover:scale-110 group-hover:bg-white/30">
                  <service.icon className="h-8 w-8" />
                </div>

                {/* Text */}
                <h3 className={`mb-4 font-bold leading-tight ${index === 0 ? "text-3xl" : "text-xl"}`}>
                  {service.title}
                </h3>
                <p className={`mb-6 leading-relaxed text-white/90 ${index === 0 ? "text-lg" : "text-base"}`}>
                  {service.description}
                </p>

                {/* Arrow */}
                <div className="mt-auto inline-flex items-center gap-2 text-sm font-semibold">
                  <span>Explore Service</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-white/20 blur-2xl transition-all group-hover:bg-white/30" />
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border-2 border-blue-600 bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl"
          >
            View All Services
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
