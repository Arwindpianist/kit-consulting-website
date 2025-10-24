import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Building2, FileCheck, Cog, TrendingUp, Users, Wrench, ClipboardCheck, BarChart3, Shield } from "lucide-react"
import BlurFade from "@/components/magicui/blur-fade"
import { Button } from "@/components/ui/button"
import { RainbowButton } from "@/components/ui/rainbow-button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Our Services | KIT Consulting",
  description:
    "Comprehensive engineering services including Construction Execution, Tendering & Procurement, Process Optimization, and Technical Due Diligence for the energy and manufacturing sectors.",
}

const mainServices = [
  {
    icon: Building2,
    title: "EPCC Project Management",
    description: "Our experts guide you through project execution and provide strategic oversight for efficient delivery.",
    gradient: "from-blue-500 to-cyan-500",
    features: [
      "Meticulous project planning and execution",
      "Technical due diligence and risk identification",
      "Strategic management and resource optimization",
      "Engineering design oversight",
      "Construction supervision",
      "Quality assurance and control",
    ],
    benefits: [
      "Enhanced project success",
      "Reduced project risks",
      "Efficient resource utilization",
      "On-time and on-budget delivery",
    ],
  },
  {
    icon: FileCheck,
    title: "Tendering Support and Strategies",
    description: "We assist in developing effective tendering strategies to support and enhance competitiveness and project success.",
    gradient: "from-violet-500 to-purple-500",
    features: [
      "Effective bidding process optimization",
      "Expert guidance and strategic support",
      "Technical and commercial proposal compilation",
      "Tender document preparation",
      "Industry standards alignment",
      "Competitive proposal development",
    ],
    benefits: [
      "Enhanced bidding success",
      "Stand-out proposals",
      "Meet client expectations",
      "Improved competitiveness",
    ],
  },
  {
    icon: TrendingUp,
    title: "Technical Support and Due Diligence",
    description: "We provide thorough evaluations for chemical and power plants to ensure compliance and risk management.",
    gradient: "from-green-500 to-emerald-500",
    features: [
      "Infrastructure assessment",
      "Safety protocols evaluation",
      "Efficiency analysis",
      "Site visit assessments",
      "Compliance verification",
      "Actionable insights and recommendations",
    ],
    benefits: [
      "Operational excellence",
      "Risk management",
      "Informed decision-making",
      "Industry compliance",
    ],
  },
  {
    icon: Cog,
    title: "Remote Engineering",
    description: "We provide minor engineering and drafting services remotely to provide you a hassle-free experience.",
    gradient: "from-orange-500 to-red-500",
    features: [
      "Minor engineering work",
      "Precise drafting services",
      "3D modeling and AutoCAD drawings",
      "Piping isometric generation",
      "Single line diagrams",
      "Technical documentation",
    ],
    benefits: [
      "Quality and efficiency",
      "On-time delivery",
      "Budget-friendly solutions",
      "Industry standards adherence",
    ],
  },
]

const additionalServices = [
  {
    icon: Users,
    title: "Remote Engineering Support",
    description: "Expert engineering resources on-demand for your projects.",
  },
  {
    icon: Wrench,
    title: "Maintenance Planning",
    description: "Strategic maintenance programs to maximize asset life.",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance & Safety Audits",
    description: "Ensure adherence to industry standards and regulations.",
  },
  {
    icon: BarChart3,
    title: "Feasibility Studies",
    description: "Comprehensive analysis for new project viability.",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Identify and mitigate project risks proactively.",
  },
]

const industries = [
  {
    name: "Oil & Gas",
    description: "Upstream, midstream, and downstream operations",
    icon: "🛢️",
  },
  {
    name: "Power Generation",
    description: "Conventional and renewable energy facilities",
    icon: "⚡",
  },
  {
    name: "Chemical Processing",
    description: "Petrochemical and specialty chemical plants",
    icon: "🧪",
  },
  {
    name: "Manufacturing",
    description: "Industrial and consumer goods production",
    icon: "🏭",
  },
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <BlurFade delay={0.1}>
              <Badge className="mb-4 bg-blue-100 text-blue-700">
                Professional Services
              </Badge>
            </BlurFade>

            <BlurFade delay={0.2}>
              <h1 className="mb-6 text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
                Engineering Solutions for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Complex Challenges
                </span>
              </h1>
            </BlurFade>

            <BlurFade delay={0.3}>
              <p className="mb-8 text-xl text-slate-700">
                Comprehensive engineering services tailored to the energy and manufacturing sectors. 
                From concept to commissioning, we deliver excellence at every stage.
              </p>
            </BlurFade>

            <BlurFade delay={0.4}>
              <RainbowButton
                size="lg"
                asChild
              >
                <Link href="/contact">
                  Discuss Your Project
                </Link>
              </RainbowButton>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <BlurFade delay={0.1}>
              <h2 className="mb-4 text-4xl font-bold text-slate-900">
                Core Service Offerings
              </h2>
            </BlurFade>
            
            <BlurFade delay={0.2}>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">
                End-to-end solutions designed to meet the unique demands of your industry
              </p>
            </BlurFade>
          </div>

          <Tabs defaultValue="0" className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-2 lg:grid-cols-4">
              {mainServices.map((service, index) => {
                const Icon = service.icon
                return (
                  <TabsTrigger
                    key={index}
                    value={index.toString()}
                    className="flex items-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white"
                  >
                    <Icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{service.title.split(" ")[0]}</span>
                  </TabsTrigger>
                )
              })}
            </TabsList>

            {mainServices.map((service, index) => {
              const Icon = service.icon
              return (
                <TabsContent key={index} value={index.toString()}>
                  <BlurFade delay={0.1}>
                    <Card className="glass-card">
                      <CardHeader>
                        <div className="mb-4 flex items-start justify-between">
                          <div className={cn(
                            "flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br text-white",
                            service.gradient
                          )}>
                            <Icon className="h-8 w-8" />
                          </div>
                          <Badge variant="secondary">{`0${index + 1}`}</Badge>
                        </div>
                        <CardTitle className="text-3xl">{service.title}</CardTitle>
                        <CardDescription className="text-base">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent>
                        <div className="grid gap-8 lg:grid-cols-2">
                          <div>
                            <h4 className="mb-4 text-lg font-semibold text-slate-900">
                              Key Features
                            </h4>
                            <ul className="space-y-3">
                              {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                  <div className={cn(
                                    "mt-0.5 h-5 w-5 flex-shrink-0 rounded-full bg-gradient-to-br p-1 text-white",
                                    service.gradient
                                  )}>
                                    <ArrowRight className="h-3 w-3" />
                                  </div>
                                  <span className="text-slate-700">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="mb-4 text-lg font-semibold text-slate-900">
                              Benefits
                            </h4>
                            <div className="space-y-4">
                              {service.benefits.map((benefit, idx) => (
                                <Card key={idx} className="border-slate-200 ">
                                  <CardContent className="p-4">
                                    <p className="font-medium text-slate-900">{benefit}</p>
                                  </CardContent>
                                </Card>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="mt-8 flex justify-end">
                          <Button asChild>
                            <Link href="/contact">
                              Request Quote
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </BlurFade>
                </TabsContent>
              )
            })}
          </Tabs>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <BlurFade delay={0.1}>
              <h2 className="mb-4 text-4xl font-bold text-slate-900">
                Additional Services
              </h2>
            </BlurFade>
            
            <BlurFade delay={0.2}>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">
                Complementary services to support your complete project lifecycle
              </p>
            </BlurFade>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {additionalServices.map((service, index) => {
              const Icon = service.icon
              return (
                <BlurFade key={index} delay={0.1 + index * 0.1}>
                  <Card className="glass-card glass-card-hover group h-full flex flex-col">
                    <CardContent className="p-6 text-center flex flex-col flex-1">
                      <Icon className="mx-auto mb-4 h-12 w-12 text-blue-600 transition-transform group-hover:scale-110" />
                      <h3 className="mb-2 font-semibold text-slate-900 transition-colors duration-300 group-hover:text-blue-700">
                        {service.title}
                      </h3>
                      <p className="text-sm text-slate-600 flex-1">
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

      {/* Industries Served */}
      <section className="py-16">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <BlurFade delay={0.1}>
              <h2 className="mb-4 text-4xl font-bold text-slate-900">
                Industries We Serve
              </h2>
            </BlurFade>
            
            <BlurFade delay={0.2}>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">
                Specialized expertise across key sectors of the energy and manufacturing landscape
              </p>
            </BlurFade>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, index) => (
              <BlurFade key={index} delay={0.1 + index * 0.1}>
                <Card className="glass-card glass-card-hover group h-full overflow-hidden flex flex-col">
                  <CardContent className="p-6 text-center flex flex-col flex-1">
                    <div className="mb-4 text-5xl transition-transform duration-300 group-hover:scale-110">{industry.icon}</div>
                    <h3 className="mb-2 text-xl font-semibold text-slate-900 transition-colors duration-300 group-hover:text-blue-700">
                      {industry.name}
                    </h3>
                    <p className="text-sm text-slate-600 flex-1">
                      {industry.description}
                    </p>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container-custom text-center">
          <BlurFade delay={0.1}>
            <h2 className="mb-4 text-4xl font-bold text-slate-900">
              Let's Build Something Great Together
            </h2>
          </BlurFade>
          
          <BlurFade delay={0.2}>
            <p className="mb-8 text-xl text-slate-600">
              Ready to elevate your project? Our team is here to help.
            </p>
          </BlurFade>
          
          <BlurFade delay={0.3}>
            <RainbowButton size="lg" asChild>
              <Link href="/contact">
                Start Your Project Today
              </Link>
            </RainbowButton>
          </BlurFade>
        </div>
      </section>
    </div>
  )
}
