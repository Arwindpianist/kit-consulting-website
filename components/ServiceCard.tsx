import type { IconComponent } from "./icons"
import CTAButton from "./CTAButton"

interface ServiceCardProps {
  icon: IconComponent
  title: string
  description: string
  slug: string
}

export default function ServiceCard({ icon: Icon, title, description, slug }: ServiceCardProps) {
  return (
    <div className="glass-card group scale-in rounded-2xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#003366] to-[#0066cc] text-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="mb-4 text-xl font-bold text-[#003366] md:text-2xl">{title}</h3>
      <p className="mb-6 leading-relaxed text-[#666666]">{description}</p>
      <CTAButton href={`/contact?service=${slug}`} variant="secondary">
        Enquire Now
      </CTAButton>
    </div>
  )
}
