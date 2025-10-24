import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Building2, CheckCircle2, FileCheck, Cog, TrendingUp, Users, Award } from "lucide-react"
import BlurFade from "@/components/magicui/blur-fade"
import Marquee from "@/components/magicui/marquee"
import ShimmerButton from "@/components/magicui/shimmer-button"
import NumberTicker from "@/components/magicui/number-ticker"
import ClientLogo from "@/components/ClientLogo"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "KIT Consulting | Engineering & Project Management Solutions",
  description:
    "Your trusted partner in Construction Execution, Tendering and Process Optimization. Expert EPCC project management, technical due diligence, and remote engineering solutions for energy and manufacturing sectors in Malaysia.",
  keywords:
    "engineering consulting Malaysia, EPCC project management, tendering support, technical due diligence, remote engineering, construction execution, process optimization, Petronas, Shell, BASF",
}

const clients = [
  { name: "Petronas", logo: "https://logo.clearbit.com/petronas.com" },
  { name: "Shell", logo: "https://logo.clearbit.com/shell.com" },
  { name: "BASF", logo: "https://logo.clearbit.com/basf.com" },
  { name: "Siemens", logo: "https://logo.clearbit.com/siemens.com" },
  { name: "Mitsubishi", logo: "https://logo.clearbit.com/mitsubishielectric.com" },
  { name: "Samsung", logo: "https://logo.clearbit.com/samsung.com" },
]

const stats = [
  { value: 50, label: "Projects Delivered", suffix: "+" },
  { value: 15, label: "Years Experience", suffix: "+" },
  { value: 98, label: "Client Satisfaction", suffix: "%" },
  { value: 30, label: "Industry Experts", suffix: "+" },
]

const services = [
  {
    icon: Building2,
    title: "EPCC Project Management",
    description: "Our experts guide you through project execution and provide strategic oversight for efficient delivery",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: FileCheck,
    title: "Tendering Support and Strategies",
    description: "We assist in developing effective tendering strategies to support and enhance competitiveness",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: TrendingUp,
    title: "Technical Support and Due Diligence",
    description: "We provide thorough evaluations for chemical and power plants to ensure compliance",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Cog,
    title: "Remote Engineering",
    description: "We provide minor engineering and drafting services remotely for a hassle-free experience",
    gradient: "from-orange-500 to-red-500",
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-transparent">
        <div className="container-custom relative z-10 py-12">
          <div className="mx-auto max-w-4xl text-center">
            <BlurFade delay={0.1}>
              <Badge className="mb-4 bg-blue-600 text-white hover:bg-blue-700 border-2 border-blue-900">
                <Award className="mr-2 h-3 w-3" />
                Engineering Excellence Since 2009
              </Badge>
            </BlurFade>

            <BlurFade delay={0.2}>
              <h1 className="mb-6 text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
                Engineering Solutions for{" "}
                <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Tomorrow's Industries
                </span>
              </h1>
            </BlurFade>

            <BlurFade delay={0.3}>
              <p className="mb-8 text-lg text-slate-900 sm:text-xl">
                Your trusted partner in Construction Execution, Tendering and Process Optimization. 
                We deliver comprehensive solutions including EPCC project management, tendering support, 
                technical due diligence, and remote engineering services for the energy and manufacturing sectors.
              </p>
            </BlurFade>

            <BlurFade delay={0.4}>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/contact">
                  <ShimmerButton
                    shimmerColor="#3b82f6"
                    background="linear-gradient(to right, #003366, #0066cc)"
                    className="text-base font-semibold"
                  >
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </ShimmerButton>
                </Link>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-slate-900 bg-slate-900 text-blue-600 hover:bg-slate-800"
                  asChild
                >
                  <Link href="/services">
                    Explore Services
                  </Link>
                </Button>
              </div>
            </BlurFade>

            {/* Stats */}
            <BlurFade delay={0.5}>
              <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((stat, index) => (
                  <Card key={index} className="border-blue-200 bg-blue-50">
                    <CardContent className="p-6 text-center">
                      <div className="mb-2 text-4xl font-bold text-blue-900">
                        <NumberTicker value={stat.value} />
                        {stat.suffix}
                      </div>
                      <p className="text-sm text-slate-900">{stat.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="border-y border-slate-200/50 py-12">
        <div className="container-custom">
          <BlurFade delay={0.1}>
            <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-slate-600">
              Trusted by Industry Leaders
            </p>
          </BlurFade>
          
          <Marquee pauseOnHover className="[--duration:30s]">
            {clients.map((client, index) => (
              <Card
                key={index}
                className="mx-3 flex w-40 items-center justify-center border-slate-200 bg-white p-6 transition-all hover:shadow-lg"
              >
                <ClientLogo name={client.name} logo={client.logo} />
              </Card>
            ))}
          </Marquee>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <BlurFade delay={0.1}>
              <Badge className="mb-4 bg-blue-600 text-blue-900 border-2 border-blue-900 hover:bg-blue-700">
                Our Services
              </Badge>
            </BlurFade>
            
            <BlurFade delay={0.2}>
              <h2 className="mb-4 text-4xl font-bold text-slate-900">
                Comprehensive Engineering Solutions
              </h2>
            </BlurFade>
            
            <BlurFade delay={0.3}>
              <p className="text-lg text-slate-900">
                From initial concept to final commissioning, we provide end-to-end 
                engineering excellence tailored to your industry needs.
              </p>
            </BlurFade>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <BlurFade key={index} delay={0.1 + index * 0.1}>
                  <Card className="group relative overflow-hidden border-2 border-blue-200 bg-blue-50 transition-all hover:shadow-2xl hover:-translate-y-1 hover:border-blue-400">
                    <div className={cn(
                      "absolute inset-0 opacity-0 transition-opacity group-hover:opacity-5",
                      `bg-gradient-to-br ${service.gradient}`
                    )} />
                    
                    <CardContent className="relative p-6">
                      <div className={cn(
                        "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br shadow-lg",
                        service.gradient
                      )}>
                        <Icon className="h-6 w-6 text-blue-900" />
                      </div>
                      
                      <h3 className="mb-2 text-xl font-semibold text-slate-900">
                        {service.title}
                      </h3>
                      
                      <p className="text-sm text-slate-900">
                        {service.description}
                      </p>
                      
                      <Button
                        variant="ghost"
                        size="sm"
                        className="mt-4 text-blue-600 hover:text-blue-700"
                        asChild
                      >
                        <Link href="/services">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </BlurFade>
              )
            })}
          </div>

          <BlurFade delay={0.8}>
            <div className="mt-12 text-center">
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">
                  View All Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <BlurFade delay={0.1}>
                <Badge className="mb-4 bg-blue-600 text-blue-900 border-2 border-blue-900 hover:bg-blue-700">
                  Why Choose KIT Consulting
                </Badge>
              </BlurFade>
              
              <BlurFade delay={0.2}>
                <h2 className="mb-6 text-4xl font-bold text-slate-900">
                  Engineering Excellence, Delivered
                </h2>
              </BlurFade>
              
              <BlurFade delay={0.3}>
                <p className="mb-8 text-lg text-slate-900">
                  With over 15 years of experience in the energy and manufacturing sectors, 
                  KIT Consulting brings unparalleled expertise to every project. Our team of 
                  seasoned professionals ensures quality, efficiency, and innovation.
                </p>
              </BlurFade>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  icon: Users,
                  title: "Expert Team",
                  description: "30+ certified engineers and project managers",
                },
                {
                  icon: Award,
                  title: "Quality Assured",
                  description: "ISO certified processes and methodologies",
                },
                {
                  icon: TrendingUp,
                  title: "Proven Results",
                  description: "98% client satisfaction rate",
                },
                {
                  icon: Building2,
                  title: "Industry Focus",
                  description: "Specialized in energy and manufacturing",
                },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <BlurFade key={index} delay={0.4 + index * 0.1}>
                    <Card className="border-2 border-blue-200 bg-blue-50 hover:border-blue-400 transition-all">
                      <CardContent className="p-6">
                        <Icon className="mb-4 h-8 w-8 text-blue-600" />
                        <h3 className="mb-2 text-lg font-semibold text-slate-900">{item.title}</h3>
                        <p className="text-sm text-slate-900">{item.description}</p>
                      </CardContent>
                    </Card>
                  </BlurFade>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-12">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <BlurFade delay={0.1}>
            <h2 className="mb-4 text-4xl font-bold text-slate-900">
              Ready to Start Your Next Project?
            </h2>
          </BlurFade>
          
          <BlurFade delay={0.2}>
            <p className="mb-8 text-xl text-slate-900">
              Let's discuss how we can help you achieve your engineering goals.
            </p>
          </BlurFade>
          
          <BlurFade delay={0.3}>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact">
                <ShimmerButton shimmerColor="#3b82f6" background="#0066cc" className="shadow-2xl">
                  Get In Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </ShimmerButton>
              </Link>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-slate-900 bg-slate-900 text-blue-600 hover:bg-slate-800"
                asChild
              >
                <Link href="/projects">
                  View Our Work
                </Link>
              </Button>
            </div>
          </BlurFade>
        </div>
      </section>
    </div>
  )
}
