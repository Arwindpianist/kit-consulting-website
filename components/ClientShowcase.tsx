import { Building2, Zap, Award, TrendingUp } from "./icons"

export default function ClientShowcase() {
  const clients = [
    { name: "Shell", logo: "Shell", industry: "Energy" },
    { name: "Petronas", logo: "Petronas", industry: "Petroleum" },
    { name: "BASF", logo: "BASF", industry: "Chemical" },
    { name: "Genetec", logo: "Genetec", industry: "Technology" },
  ]

  const achievements = [
    {
      icon: Building2,
      value: "$50M+",
      label: "Project Value Managed",
      color: "from-blue-600 to-blue-700",
      description: "Total value across all projects"
    },
    {
      icon: Zap,
      value: "98%",
      label: "On-Time Delivery",
      color: "from-cyan-600 to-cyan-700",
      description: "Consistently meet deadlines"
    },
    {
      icon: Award,
      value: "15+",
      label: "Industry Partners",
      color: "from-teal-600 to-teal-700",
      description: "Leading organizations"
    },
    {
      icon: TrendingUp,
      value: "25%",
      label: "Average Cost Savings",
      color: "from-emerald-600 to-emerald-700",
      description: "Through optimization"
    },
  ]

  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-white to-slate-50/50" />
      <div className="absolute left-1/4 top-0 h-96 w-96 bg-blue-100/20 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 bg-cyan-100/20 blur-3xl" />

      <div className="container-custom relative">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2 text-sm font-semibold text-emerald-700">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
            Trusted by Industry Leaders
          </div>
          <h2 className="mb-6 text-balance text-4xl font-extrabold text-slate-900 md:text-5xl">
            Powering Success for
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
              Global Organizations
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Delivering exceptional results for energy and manufacturing leaders across Asia-Pacific
          </p>
        </div>

        {/* Clients Grid */}
        <div className="mb-20 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
              
              <div className="relative text-center">
                <div className="mb-3 text-3xl font-black text-slate-800 transition-colors group-hover:text-blue-600">
                  {client.logo}
                </div>
                <div className="text-xs font-medium text-slate-500">{client.industry}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.label}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${achievement.color} p-8 text-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px)`,
                  backgroundSize: '30px 30px'
                }} />
              </div>

              {/* Icon */}
              <div className="relative mb-6">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm transition-transform group-hover:scale-110">
                  <achievement.icon className="h-7 w-7" />
                </div>
              </div>

              {/* Value */}
              <div className="relative">
                <div className="mb-2 text-5xl font-extrabold leading-none">{achievement.value}</div>
                <div className="mb-1 text-base font-bold">{achievement.label}</div>
                <div className="text-sm text-white/80">{achievement.description}</div>
              </div>

              {/* Glow Effect */}
              <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-white/20 blur-2xl transition-all group-hover:bg-white/30" />
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className="mt-20 text-center">
          <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-slate-50 p-8 md:p-12">
            <div className="mb-4 text-4xl text-blue-600">❝</div>
            <p className="mb-6 text-xl font-medium leading-relaxed text-slate-700 md:text-2xl">
              KIT Consulting's expertise has been instrumental in delivering our projects on time and within budget
            </p>
            <div className="text-sm font-semibold text-slate-600">— Leading Energy Sector Client</div>
          </div>
        </div>
      </div>
    </section>
  )
}
