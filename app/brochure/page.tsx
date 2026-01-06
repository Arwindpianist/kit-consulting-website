import type { Metadata } from "next"
import Link from "next/link"
import { Download, FileText, ArrowRight, CheckCircle, Building2, FileCheck, TrendingUp, Cog, Mail, Phone, Target, Eye, Users } from "lucide-react"
import BlurFade from "@/components/magicui/blur-fade"
import { Button } from "@/components/ui/button"
import { RainbowButton } from "@/components/ui/rainbow-button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import ProtectedEmailLink from "@/components/ProtectedEmailLink"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Download KIT Consulting Brochure - Engineering Solutions Brochure",
  description:
    "Download the KIT Consulting brochure to learn about our engineering solutions, services, and expertise in Oil & Gas, Chemicals, Power & Energy industries. 30+ years experience, 40+ projects completed.",
}

const brochureHighlights = [
  {
    icon: Building2,
    title: "Our Mission",
    description: "To deliver practical engineering and commercial solutions that reduce risk and drive successful outcomes.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: FileCheck,
    title: "Tender Support & Strategy",
    description: "Developing effective tendering strategies to enhance competitiveness and project success for our clients.",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: TrendingUp,
    title: "Due Diligence",
    description: "Providing thorough and reliable technical & financial assessments for our clients.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Cog,
    title: "Remote Engineering",
    description: "Providing minor engineering and drafting services remotely to provide you a hassle-free experience.",
    gradient: "from-orange-500 to-red-500",
  },
]

const keyStats = [
  { value: "30+", label: "Years of Combined Experience" },
  { value: "40+", label: "Projects Completed" },
  { value: "3", label: "Core Service Areas" },
  { value: "100%", label: "Client-Focused Solutions" },
]

const industries = [
  "Oil & Gas",
  "Chemicals",
  "Power & Energy",
]

export default function BrochurePage() {
  const brochureUrl = "/KIT Consulting Brochure_02012026.pdf"
  const brochureFileName = "KIT-Consulting-Brochure-2026.pdf"

  return (
    <div className="flex flex-col">
      {/* Hero & Download Section */}
      <section className="py-8">
        <div className="container-custom">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-start">
              {/* Left: Title & Info */}
              <div>
                <BlurFade delay={0.1}>
                  <Badge className="mb-3 bg-blue-100 text-blue-700">
                    Company Brochure
                  </Badge>
                </BlurFade>

                <BlurFade delay={0.2}>
                  <h1 className="mb-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                    Engineering Solutions for{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      Tomorrow's Industries
                    </span>
                  </h1>
                </BlurFade>

                <BlurFade delay={0.3}>
                  <p className="mb-1 text-lg font-semibold text-blue-600">
                    Consult with us.
                  </p>
                  <p className="mb-6 text-base text-slate-700">
                    We provide dedicated solutions to your business needs
                  </p>
                </BlurFade>
              </div>

              {/* Right: Download Card */}
              <BlurFade delay={0.4}>
                <Card className="glass-card-blue border-2 border-blue-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
                        <FileText className="h-7 w-7" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h2 className="mb-2 text-xl font-bold text-slate-900">
                          Download Brochure
                        </h2>
                        <p className="mb-4 text-sm text-slate-600">
                          PDF Format • Updated January 2026
                        </p>
                        <div className="flex flex-col gap-2 sm:flex-row">
                          <RainbowButton
                            size="sm"
                            asChild
                            className="group"
                          >
                            <a
                              href={brochureUrl}
                              download={brochureFileName}
                            >
                              <Download className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                              Download PDF
                            </a>
                          </RainbowButton>
                          
                          <Button
                            variant="outline"
                            size="sm"
                            asChild
                          >
                            <a
                              href={brochureUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Online
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Company Combined */}
      <section className="py-8">
        <div className="container-custom">
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Mission */}
            <BlurFade delay={0.1}>
              <Card className="glass-card-blue h-full">
                <CardContent className="p-6">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
                    <Target className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-slate-900">
                    Our Mission
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-700">
                    To deliver <strong>practical</strong> engineering and commercial solutions that <strong>reduce risk</strong> and drive successful outcomes.
                  </p>
                </CardContent>
              </Card>
            </BlurFade>

            {/* Vision */}
            <BlurFade delay={0.2}>
              <Card className="glass-card-blue h-full">
                <CardContent className="p-6">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 text-white">
                    <Eye className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-slate-900">
                    Our Vision
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-700">
                    To be the <strong>trusted</strong> consulting partner for businesses operating in complex energy and industrial sectors.
                  </p>
                </CardContent>
              </Card>
            </BlurFade>

            {/* Company */}
            <BlurFade delay={0.3}>
              <Card className="glass-card h-full">
                <CardContent className="p-6">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-slate-900">
                    Our Company
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-700">
                    Providing <strong>tailor-made</strong> consulting solutions within the{" "}
                    <strong>Oil & Gas, Chemicals, Power & Energy industries</strong>.{" "}
                    <strong>30+ years</strong> experience, <strong>40+ projects</strong> completed.
                  </p>
                </CardContent>
              </Card>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-8">
        <div className="container-custom">
          <BlurFade delay={0.1}>
            <div className="mb-6 text-center">
              <Badge className="mb-3 bg-blue-100 text-blue-700">
                Our Services
              </Badge>
              <h2 className="text-3xl font-bold text-slate-900">
                What We Offer
              </h2>
            </div>
          </BlurFade>

          <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-3">
            {brochureHighlights.slice(1).map((service, index) => {
              const Icon = service.icon
              return (
                <BlurFade key={index} delay={0.1 + index * 0.1}>
                  <Card className="glass-card glass-card-hover group h-full flex flex-col">
                    <CardContent className="p-6 flex flex-col flex-1">
                      <div className={cn(
                        "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-white transition-transform duration-300 group-hover:scale-110",
                        service.gradient
                      )}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="mb-3 text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-700">
                        {service.title}
                      </h3>
                      <p className="text-slate-700 flex-1 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </BlurFade>
              )
            })}
          </div>
        </div>
      </section>


      {/* Industries, Stats & Contact Combined */}
      <section className="py-8">
        <div className="container-custom">
          <div className="grid gap-4 lg:grid-cols-3">
            {/* Industries */}
            <BlurFade delay={0.1}>
              <Card className="glass-card h-full">
                <CardContent className="p-6">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <h3 className="mb-4 text-lg font-bold text-slate-900">
                    Industries We Serve
                  </h3>
                  <div className="space-y-2">
                    {industries.map((industry, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                        <span className="text-sm font-medium text-slate-700">{industry}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </BlurFade>

            {/* Stats */}
            <BlurFade delay={0.2}>
              <Card className="glass-card-blue h-full">
                <CardContent className="p-6">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 text-white">
                    <Users className="h-5 w-5" />
                  </div>
                  <h3 className="mb-4 text-lg font-bold text-slate-900">
                    Track Record
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {keyStats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="mb-1 text-2xl font-bold text-blue-600">
                          {stat.value}
                        </div>
                        <p className="text-xs font-medium text-slate-700 leading-tight">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </BlurFade>

            {/* Contact */}
            <BlurFade delay={0.3}>
              <Card className="glass-card-blue h-full">
                <CardContent className="p-6">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 text-white">
                    <Mail className="h-5 w-5" />
                  </div>
                  <h3 className="mb-4 text-lg font-bold text-slate-900">
                    Contact Us
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="mb-1 text-xs font-semibold text-slate-600 uppercase">Email</p>
                      <ProtectedEmailLink
                        email="info@kitengineeringconsulting.net"
                        className="text-sm text-blue-600 hover:text-blue-700 font-medium break-all"
                        rel="nofollow"
                      />
                    </div>
                    <div>
                      <p className="mb-1 text-xs font-semibold text-slate-600 uppercase">Phone</p>
                      <a
                        href="tel:+60122333880"
                        className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                      >
                        +6012-2333 880
                      </a>
                    </div>
                    <div>
                      <p className="mb-1 text-xs font-semibold text-slate-600 uppercase">Website</p>
                      <a
                        href="https://www.kitengineeringconsulting.net"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:text-blue-700 font-medium break-all"
                      >
                        www.kitengineeringconsulting.net
                      </a>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-blue-200">
                    <Button asChild size="sm" className="w-full bg-blue-600 text-white hover:bg-blue-700">
                      <Link href="/contact">
                        Get In Touch
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </BlurFade>
          </div>
        </div>
      </section>

    </div>
  )
}
