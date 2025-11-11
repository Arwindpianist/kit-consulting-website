import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Target, Eye, Award, Users, TrendingUp, Shield, Lightbulb, Heart, Zap } from "lucide-react"
import BlurFade from "@/components/magicui/blur-fade"
import NumberTicker from "@/components/magicui/number-ticker"
import { Button } from "@/components/ui/button"
import { RainbowButton } from "@/components/ui/rainbow-button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const FOUNDING_YEAR = 2014;
const currentYear = new Date().getFullYear();
const yearsInBusiness = currentYear - FOUNDING_YEAR;

export const metadata: Metadata = {
  title: `About KIT Consulting - ${yearsInBusiness}+ Years Engineering Excellence in Malaysia`,
  description:
    `Founded in 2014 and Google-verified in Kuala Lumpur, KIT Consulting (KITCON) delivers EPCC Project Management, Tender Strategy, and Technical Due Diligence for Petronas, Shell, Hess, ExxonMobil, BASF and regional energy leaders. ${yearsInBusiness}+ years of excellence, 50+ completed projects, ISO-certified processes.`,
}

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for the highest standards in every project, delivering quality that exceeds expectations.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We conduct business with honesty, transparency, and ethical practices at all times.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace new technologies and methodologies to provide cutting-edge solutions.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Heart,
    title: "Client Focus",
    description: "Your success is our priority. We build lasting partnerships based on trust and results.",
    gradient: "from-purple-500 to-pink-500",
  },
]

const stats = [
  { value: yearsInBusiness, suffix: "+", label: "Years of Experience" },
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 30, suffix: "+", label: "Expert Team Members" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
]

const expertise = [
  {
    icon: TrendingUp,
    title: "Strategic Planning",
    description: "Comprehensive project planning and risk management strategies",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Certified professionals with decades of combined experience",
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Quick mobilization and efficient project execution",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Unwavering commitment to safety and compliance standards",
  },
]

const milestones = [
  {
    year: "2014",
    title: "Company Founded",
    description: "KIT Consulting established to serve the energy sector",
  },
  {
    year: "2015",
    title: "Regional Growth",
    description: "Extended operations across Southeast Asia",
  },
  {
    year: "2017",
    title: "Major Expansion",
    description: "Expanded services to include manufacturing and chemical processing",
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description: "Launched remote engineering services and digital solutions",
  },
  {
    year: "2025",
    title: "50+ Projects",
    description: "Celebrated successful delivery of over 50 major projects",
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <BlurFade delay={0.1}>
              <Badge className="mb-4 bg-blue-100 text-blue-700">
                About KIT Consulting
              </Badge>
            </BlurFade>

            <BlurFade delay={0.2}>
              <h1 className="mb-6 text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
                Engineering the{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Future of Industry
                </span>
              </h1>
            </BlurFade>

            <BlurFade delay={0.3}>
              <p className="text-xl text-slate-700">
                For over 11 years, KIT Consulting has been a trusted partner in the energy 
                and manufacturing sectors, delivering world-class engineering solutions that 
                drive success and innovation.
              </p>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid gap-6 lg:grid-cols-2">
            <BlurFade delay={0.1}>
              <Card className="glass-card h-full">
                <CardContent className="p-8">
                  <Target className="mb-4 h-12 w-12 text-blue-600" />
                  <h2 className="mb-4 text-3xl font-bold text-slate-900">Our Mission</h2>
                  <p className="text-lg leading-relaxed text-slate-700">
                    To deliver comprehensive solutions for your technical consultancy needs across various industries. 
                    We specialize in Remote Engineering Solutions, Tendering Strategies and Support, 
                    Technical Due Diligence for chemical and power plants, and EPCC Project Management, 
                    ensuring your projects are managed efficiently and effectively.
                  </p>
                </CardContent>
              </Card>
            </BlurFade>

            <BlurFade delay={0.2}>
              <Card className="glass-card h-full">
                <CardContent className="p-8">
                  <Eye className="mb-4 h-12 w-12 text-cyan-600" />
                  <h2 className="mb-4 text-3xl font-bold text-slate-900">Our Vision</h2>
                  <p className="text-lg leading-relaxed text-slate-700">
                    To be your trusted partner in Construction Execution, Tendering and Process Optimization. 
                    We guide your projects to success with unparalleled expertise and support tailored to your needs, 
                    ensuring operational excellence and project success across the energy and manufacturing sectors.
                  </p>
                </CardContent>
              </Card>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <BlurFade key={index} delay={0.1 + index * 0.1}>
                <Card className="glass-card-blue glass-card-hover">
                  <CardContent className="p-6 text-center">
                    <div className="mb-2 text-5xl font-bold text-blue-900">
                      <NumberTicker value={stat.value} />
                      {stat.suffix}
                    </div>
                    <p className="text-sm font-medium text-slate-700">{stat.label}</p>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <BlurFade delay={0.1}>
              <Badge className="mb-4 bg-blue-100 text-blue-700">
                Our Core Values
              </Badge>
            </BlurFade>
            
            <BlurFade delay={0.2}>
              <h2 className="mb-4 text-4xl font-bold text-slate-900">
                What Drives Us Forward
              </h2>
            </BlurFade>
            
            <BlurFade delay={0.3}>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">
                Our values shape every decision we make and define who we are as a company
              </p>
            </BlurFade>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <BlurFade key={index} delay={0.1 + index * 0.1}>
                  <Card className="glass-card glass-card-hover group h-full overflow-hidden flex flex-col">
                    <CardContent className="p-6 flex flex-col flex-1">
                      <div className={cn(
                        "mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br text-white transition-transform duration-300 group-hover:scale-110",
                        value.gradient
                      )}>
                        <Icon className="h-7 w-7" />
                      </div>
                      <h3 className="mb-3 text-xl font-semibold text-slate-900 transition-colors duration-300 group-hover:text-blue-700">
                        {value.title}
                      </h3>
                      <p className="text-slate-600 flex-1">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </BlurFade>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <BlurFade delay={0.1}>
                <Badge className="mb-4 bg-blue-100 text-blue-700">
                  Why Choose Us
                </Badge>
              </BlurFade>
              
              <BlurFade delay={0.2}>
                <h2 className="mb-6 text-4xl font-bold text-slate-900">
                  Industry-Leading Expertise
                </h2>
              </BlurFade>
              
              <BlurFade delay={0.3}>
                <p className="mb-8 text-lg text-slate-600">
                  Our team comprises seasoned professionals with deep industry knowledge and 
                  practical experience across major sectors. We combine technical excellence 
                  with innovative thinking to deliver solutions that work.
                </p>
              </BlurFade>

              <BlurFade delay={0.4}>
                <div className="space-y-4">
                  {expertise.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <div key={index} className="flex items-start gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-100">
                          <Icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="mb-1 font-semibold text-slate-900">{item.title}</h3>
                          <p className="text-sm text-slate-600">{item.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </BlurFade>
            </div>

            <BlurFade delay={0.3}>
              <Card className="glass-card-blue h-full">
                <CardContent className="p-8">
                  <h3 className="mb-6 text-2xl font-bold text-slate-900">Our Commitment</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="mb-2 text-4xl font-bold text-blue-600">24/7</div>
                      <p className="text-slate-700">Support availability for critical projects</p>
                    </div>
                    <div>
                      <div className="mb-2 text-4xl font-bold text-cyan-600">100%</div>
                      <p className="text-slate-700">Commitment to safety and compliance</p>
                    </div>
                    <div>
                      <div className="mb-2 text-4xl font-bold text-emerald-600">ISO</div>
                      <p className="text-slate-700">Certified quality management systems</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <BlurFade delay={0.1}>
              <Badge className="mb-4 bg-blue-100 text-blue-700">
                Our Journey
              </Badge>
            </BlurFade>
            
            <BlurFade delay={0.2}>
              <h2 className="mb-4 text-4xl font-bold text-slate-900">
                Milestones of Excellence
              </h2>
            </BlurFade>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-500 md:left-1/2" />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <BlurFade key={index} delay={0.1 + index * 0.1}>
                  <div className={cn(
                    "relative grid gap-4 md:grid-cols-2",
                    index % 2 === 0 ? "md:text-right" : "md:text-left md:grid-flow-col-dense"
                  )}>
                    {/* Content */}
                    <Card className={cn(
                      "glass-card glass-card-hover",
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8 md:col-start-2"
                    )}>
                      <CardContent className="p-6">
                        <div className="mb-3 inline-flex rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-1 text-sm font-bold text-white">
                          {milestone.year}
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-slate-900">
                          {milestone.title}
                        </h3>
                        <p className="text-slate-600">{milestone.description}</p>
                      </CardContent>
                    </Card>

                    {/* Dot */}
                    <div className="absolute left-4 top-6 h-4 w-4 -translate-x-[7px] rounded-full border-4 border-blue-600  md:left-1/2" />
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container-custom text-center">
          <BlurFade delay={0.1}>
            <h2 className="mb-4 text-4xl font-bold text-slate-900">
              Join Us on Our Journey
            </h2>
          </BlurFade>
          
          <BlurFade delay={0.2}>
            <p className="mb-8 text-xl text-slate-600">
              Partner with a team that's committed to your success.
            </p>
          </BlurFade>
          
          <BlurFade delay={0.3}>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <RainbowButton size="lg" asChild>
                <Link href="/contact">
                  Get In Touch
                </Link>
              </RainbowButton>
              
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">
                  Our Services
                </Link>
              </Button>
            </div>
          </BlurFade>
        </div>
      </section>
    </div>
  )
}
