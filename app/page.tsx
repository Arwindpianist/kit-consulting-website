import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Building2, CheckCircle2, FileCheck, Cog, TrendingUp, Users, Award, ShieldCheck, Star } from "lucide-react"
import BlurFade from "@/components/magicui/blur-fade"
import ScrollReveal from "@/components/magicui/scroll-reveal"
import ScrollSection from "@/components/magicui/scroll-section"
import Marquee from "@/components/magicui/marquee"
import NumberTicker from "@/components/magicui/number-ticker"
import AuroraText from "@/components/magicui/aurora-text"
import Spotlight from "@/components/magicui/spotlight"
import DotPattern from "@/components/magicui/dot-pattern"
import ClientLogo from "@/components/ClientLogo"
import { Button } from "@/components/ui/button"
import { RainbowButton } from "@/components/ui/rainbow-button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const FOUNDING_YEAR = 2014;
const yearsInBusiness = new Date().getFullYear() - FOUNDING_YEAR;

export const metadata: Metadata = {
  title: "KIT Consulting Kuala Lumpur | Engineering Experts",
  description:
    "KIT Consulting (KITCON) delivers tendering support and technical due diligence across Malaysia and Southeast Asia from our Kuala Lumpur HQ.",
    keywords:
    "engineering consulting kuala lumpur, tendering support kuala lumpur, technical due diligence malaysia, remote engineering malaysia, construction execution kl, process optimization malaysia, Petronas partner, Shell Malaysia contractor, BASF vendor",
}

const clients = [
  { name: "Petronas", gradient: "from-emerald-500 via-teal-500 to-cyan-500" },
  { name: "Shell", gradient: "from-amber-500 via-orange-500 to-red-500" },
  { name: "BASF", gradient: "from-blue-500 via-indigo-500 to-purple-500" },
  { name: "Siemens", gradient: "from-sky-500 via-blue-500 to-slate-500" },
  { name: "Mitsubishi", gradient: "from-rose-500 via-red-500 to-orange-500" },
  { name: "Samsung", gradient: "from-cyan-500 via-blue-500 to-indigo-500" },
]

const stats = [
  { value: 40, label: "Projects Delivered", suffix: "+" },
  { value: 30, label: "Years Experience", suffix: "+" },
  { value: 99, label: "Client Satisfaction", suffix: "%" },
  { value: 30, label: "Industry Experts", suffix: "+" },
]

const services = [
  {
    icon: FileCheck,
    title: "Tender Support & Strategy",
    description: "Developing effective tendering strategies to enhance competitiveness and project success for our clients",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: TrendingUp,
    title: "Due Diligence",
    description: "Providing thorough and reliable technical & financial assessments for our clients",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Cog,
    title: "Remote Engineering",
    description: "Providing minor engineering and drafting services remotely to provide you a hassle-free experience",
    gradient: "from-orange-500 to-red-500",
  },
]

const googleReviews = [
  {
    name: "Project Director, Energy Sector",
    rating: 5,
    text: "KIT Consulting provided excellent tendering support and kept every stakeholder aligned. Their Kuala Lumpur team is responsive and detail-oriented.",
  },
  {
    name: "Head of Engineering, Manufacturing",
    rating: 5,
    text: "Tendering strategies from KIT Consulting helped us secure multiple bids in 2024. The team's due diligence is top-notch.",
  },
  {
    name: "Operations Lead, Power Generation",
    rating: 5,
    text: "Trusted partner for technical due diligence. Their insights on compliance and risk mitigation are second to none.",
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - The Grand Entrance */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-transparent">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="rgba(59, 130, 246, 0.4)" />
        <DotPattern className="opacity-30" />
        
        <div className="container-custom relative z-10 py-12">
          <div className="mx-auto max-w-4xl text-center">
            {/* Story Begins - Company Identity */}
            <BlurFade delay={0.2} yOffset={20}>
            <Badge className="mb-6 bg-blue-600 text-white hover:bg-blue-700 border border-blue-900 animate-pulse-glow text-sm px-4 py-2">
              <Award className="mr-2 h-4 w-4" />
              Engineering Excellence Since 2014
            </Badge>
            </BlurFade>

            {/* The Promise - Main Headline with dramatic reveal */}
            <BlurFade delay={0.4} yOffset={30} duration={0.8}>
              <h1 className="mb-8 text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl leading-tight">
                Engineering Solutions for{" "}
                <AuroraText className="text-5xl sm:text-6xl lg:text-7xl">
                  Tomorrow's Industries
                </AuroraText>
              </h1>
            </BlurFade>

            {/* The Vision - Supporting message */}
            <BlurFade delay={0.6} yOffset={20} duration={0.6}>
              <p className="mb-10 text-xl text-slate-700 sm:text-2xl max-w-3xl mx-auto leading-relaxed">
                Your trusted partner in Construction Execution, Tendering and Process Optimization. 
                We deliver comprehensive solutions for the energy and manufacturing sectors.
              </p>
            </BlurFade>

            {/* The Call to Action - Inviting engagement */}
            <BlurFade delay={0.8} yOffset={15} duration={0.5}>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row mb-16">
                <RainbowButton size="lg" asChild>
                  <Link href="/contact">
                    Start Your Project
                  </Link>
                </RainbowButton>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  asChild
                >
                  <Link href="/services">
                    Explore Services
                  </Link>
                </Button>
              </div>
            </BlurFade>

            <BlurFade delay={0.9} yOffset={8} duration={0.5}>
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
                <span className="flex items-center gap-1 text-blue-600">
                  <ShieldCheck className="h-4 w-4" />
                  Verified on Google Business
                </span>
                <span className="hidden sm:inline">•</span>
                <Link
                  href="https://g.page/r/CXO2VjS02kEDEBM/review?utm_source=website&utm_medium=hero_subtle&utm_campaign=google_reviews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 transition-colors"
                >
                  ⭐ Review Us on Google
                </Link>
              </div>
            </BlurFade>

            {/* Proof of Excellence - Stats cascade in */}
            <div className="mt-20">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((stat, index) => (
                  <BlurFade key={index} delay={1.0 + index * 0.15} yOffset={30}>
                    <Card className="glass-card glass-card-hover group relative overflow-hidden h-full">
                      <CardContent className="p-6 text-center relative z-10 flex flex-col items-center justify-center min-h-[120px]">
                        <div className="mb-2 text-4xl font-bold bg-linear-to-br from-blue-700 to-blue-500 bg-clip-text text-transparent whitespace-nowrap">
                          <NumberTicker value={stat.value} />
                          {stat.suffix}
                        </div>
                        <p className="text-sm font-medium text-slate-700 leading-tight">{stat.label}</p>
                      </CardContent>
                      <div className="absolute inset-0 bg-linear-to-br from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                    </Card>
                  </BlurFade>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 2: Building Trust - Social Proof */}
      <ScrollSection id="clients" className="border-y border-slate-200/50 py-16 bg-linear-to-b from-transparent to-blue-50/30">
        <div className="container-custom">
          <ScrollReveal delay={0.1} yOffset={20}>
            <div className="text-center mb-8">
              <p className="text-sm font-medium uppercase tracking-wider text-blue-600 mb-2">
                Trusted by Industry Leaders
              </p>
              <h2 className="text-2xl font-bold text-slate-900">
                Partnering with Global Excellence
              </h2>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2} yOffset={15}>
            <Marquee pauseOnHover className="[--duration:30s]">
              {clients.map((client, index) => (
                <Card
                  key={index}
                  className="glass-card glass-card-hover mx-3 flex w-40 items-center justify-center p-6 transform transition-transform hover:scale-110"
                >
                  <ClientLogo name={client.name} gradient={client.gradient} />
                </Card>
              ))}
            </Marquee>
          </ScrollReveal>
        </div>
      </ScrollSection>

      {/* Chapter 3: What We Do - Service Showcase */}
      <ScrollSection id="services" className="py-32 relative">
        <div className="absolute inset-0 bg-linear-to-b from-blue-50/30 via-transparent to-transparent" />
        
        <div className="container-custom relative">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <ScrollReveal delay={0.1} yOffset={20}>
              <Badge className="mb-6 bg-blue-600 text-white border border-blue-900 hover:bg-blue-700 text-sm px-4 py-2">
                Our Services
              </Badge>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2} yOffset={25} duration={0.7}>
              <h2 className="mb-6 text-4xl font-bold text-slate-900 sm:text-5xl">
                Comprehensive Engineering Solutions
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3} yOffset={20} duration={0.6}>
              <p className="text-xl text-slate-600 leading-relaxed">
                From initial concept to final commissioning, we provide end-to-end 
                engineering excellence tailored to your industry needs.
              </p>
            </ScrollReveal>
          </div>

          <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <ScrollReveal key={index} delay={0.4 + index * 0.1} yOffset={40} duration={0.6}>
                  <Card className="glass-card glass-card-hover group relative overflow-hidden flex flex-col h-full">
                    <div className={cn(
                      "absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-20",
                      `bg-linear-to-br ${service.gradient}`
                    )} />
                    
                    <div className="absolute inset-0 bg-linear-to-br from-blue-400/0 via-purple-400/0 to-blue-400/0 opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500 group-hover:from-blue-400/20 group-hover:via-purple-400/20 group-hover:to-blue-400/20" />
                    
                    <CardContent className="relative p-6 flex flex-col flex-1">
                      <div className={cn(
                        "mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3",
                        service.gradient
                      )}>
                        <Icon className="h-7 w-7 text-white transition-transform duration-500 group-hover:scale-110" />
                      </div>
                      
                      <h3 className="mb-3 text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-700">
                        {service.title}
                      </h3>
                      
                      <p className="text-sm text-slate-700 leading-relaxed mb-6 flex-1">
                        {service.description}
                      </p>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        asChild
                      >
                        <Link href="/services">
                          Learn More
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              )
            })}
          </div>

          <ScrollReveal delay={0.8}>
            <div className="mt-12 text-center">
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">
                  View All Services
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </ScrollSection>

      {/* Chapter 4: Why Us - The Differentiators */}
      <ScrollSection id="why-us" className="py-32 relative bg-linear-to-b from-transparent via-slate-50/50 to-transparent">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            <div>
              <ScrollReveal delay={0.1} yOffset={20}>
                <Badge className="mb-6 bg-blue-600 text-white border border-blue-900 hover:bg-blue-700 text-sm px-4 py-2">
                  Why Choose KIT Consulting
                </Badge>
              </ScrollReveal>
              
              <ScrollReveal delay={0.2} yOffset={25} duration={0.7}>
                <h2 className="mb-6 text-4xl font-bold text-slate-900 sm:text-5xl leading-tight">
                  Engineering Excellence, Delivered
                </h2>
              </ScrollReveal>
              
              <ScrollReveal delay={0.3} yOffset={20} duration={0.6}>
                <p className="mb-8 text-xl text-slate-600 leading-relaxed">
                  Providing <strong>tailor-made</strong> consulting solutions to meet our Client's needs within the 
                  <strong> Oil & Gas, Chemicals, Power & Energy industries</strong>. Total combined experience of more than 
                  <strong> 30 years</strong> and completed <strong>40+ projects</strong> to-date.
                </p>
              </ScrollReveal>
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
                  description: "99% client satisfaction rate",
                },
                {
                  icon: Building2,
                  title: "Industry Focus",
                  description: "Specialized in energy and manufacturing",
                },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <ScrollReveal key={index} delay={0.4 + index * 0.1} yOffset={30} duration={0.6}>
                    <Card className="glass-card glass-card-hover group h-full flex flex-col">
                      <CardContent className="p-6 flex flex-col flex-1">
                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 transition-all duration-300 group-hover:bg-blue-700 group-hover:scale-110 group-hover:rotate-6">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="mb-2 text-lg font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-700">{item.title}</h3>
                        <p className="text-sm text-slate-700 flex-1">{item.description}</p>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>
        </div>
      </ScrollSection>

      {/* Chapter 4.5: Social Proof - Google Reviews */}
      <ScrollSection id="reviews" className="py-24 bg-linear-to-b from-white via-blue-50/30 to-white">
        <div className="container-custom">
          <ScrollReveal delay={0.1} yOffset={20}>
            <div className="mx-auto max-w-3xl text-center mb-12">
              <Badge className="mb-4 bg-blue-600 text-white border border-blue-900 hover:bg-blue-700 text-sm px-4 py-2">
                Client Voices
              </Badge>
              <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl">
                See Why Kuala Lumpur Partners Trust KIT Consulting
              </h2>
              <p className="mt-4 text-base text-slate-600 leading-relaxed">
                Verified feedback from energy, manufacturing, and infrastructure leaders across Malaysia. We pair Google Business credibility with private testimonials from our clients.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 lg:grid-cols-3">
            {googleReviews.map((review, index) => (
              <ScrollReveal key={index} delay={0.2 + index * 0.1} yOffset={30}>
                <Card className="glass-card glass-card-hover h-full">
                  <CardContent className="p-6 flex h-full flex-col">
                    <div className="mb-3 flex items-center gap-1 text-amber-500">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed flex-1">
                      “{review.text}”
                    </p>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                      {review.name}
                    </p>
                    <p className="text-[11px] text-blue-600 mt-1">Google & private testimonials</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.5} yOffset={20}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                size="sm"
                className="bg-blue-600 text-white hover:bg-blue-700"
                asChild
              >
                <Link
                  href="https://g.page/r/CXO2VjS02kEDEBM/review?utm_source=website&utm_medium=reviews_section&utm_campaign=google_reviews"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ⭐ Review Us on Google
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href="/testimonials/submit">
                  Share a Private Testimonial
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </ScrollSection>

      {/* Chapter 5: The Finale - Call to Action */}
      <ScrollSection id="cta" className="relative overflow-hidden py-32 my-16">
        <div className="absolute inset-0 bg-linear-to-r from-blue-600 via-blue-700 to-purple-700 opacity-5" />
        <DotPattern className="opacity-20" />
        
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal delay={0.1} yOffset={30} duration={0.8}>
            <h2 className="mb-6 text-5xl font-bold text-slate-900 sm:text-6xl">
              Ready to Start Your{" "}
              <span className="bg-linear-to-r from-blue-700 via-blue-600 to-blue-800 bg-clip-text text-transparent">
                Next Project?
              </span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2} yOffset={20} duration={0.6}>
            <p className="mb-12 text-2xl text-slate-600 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your engineering goals.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3} yOffset={15} duration={0.5}>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <RainbowButton size="lg" asChild>
                <Link href="/contact">
                  Get In Touch
                </Link>
              </RainbowButton>
              
              <Button 
                size="lg" 
                variant="outline"
                asChild
              >
                <Link href="/projects">
                  View Our Work
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </ScrollSection>
    </div>
  )
}
