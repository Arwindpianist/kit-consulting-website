import type { Metadata } from "next"
import Link from "next/link"
import { Mail, Phone, MapPin, Clock, Send, ShieldCheck, Star, ExternalLink, MessageCircle } from "lucide-react"
import BlurFade from "@/components/magicui/blur-fade"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import ContactForm from "@/components/ContactForm"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import ProtectedEmailLink from "@/components/ProtectedEmailLink"

export const metadata: Metadata = {
  title: "Contact KIT Consulting Malaysia - Engineering Consultancy in Kuala Lumpur",
  description:
    "Contact KIT Consulting (KITCON) for Tendering Support and Engineering Services in Malaysia. Based in Kuala Lumpur, serving Oil & Gas, Power, and Chemical industries across Southeast Asia. Call +6012-2333 880 or email info@kitengineeringconsulting.net",
  keywords: [
    "contact engineering consultant malaysia",
    "kuala lumpur engineering services",
    "tendering support malaysia",
    "technical due diligence services",
    "engineering consultation malaysia"
  ]
}

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    value: ["Level 20, Menara 1 Sentrum", "201 Jalan Tun Sambanthan", "Brickfields, 50470 Kuala Lumpur"],
    link: "https://maps.app.goo.gl/L1Emmw3HXdA1L5TP9?utm_source=website&utm_medium=contact_card&utm_campaign=map_link",
    gradient: "from-orange-500 to-red-500",
    variant: "address",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "info@kitengineeringconsulting.net",
    gradient: "from-blue-500 to-cyan-500",
    type: "email" as const,
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+6012-2333 880",
    link: "tel:+60122333880",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon-Fri, 9:00 AM – 5:00 PM",
    link: "#",
    gradient: "from-purple-500 to-pink-500",
  },
]

const offices = [
  {
    city: "Brickfields",
    country: "Malaysia",
    address: "Level 20, Menara 1 Sentrum, 201 Jalan Tun Sambanthan, Brickfields, 50470 Kuala Lumpur",
    phone: "+6012-2333 880",
    isPrimary: true,
    mapLink: "https://g.page/r/CXO2VjS02kEDEBM/review?utm_source=website&utm_medium=contact_office&utm_campaign=google_reviews",
  },
]

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-12">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <BlurFade delay={0.1}>
              <Badge className="mb-4 bg-blue-100 text-blue-700">
                Get In Touch
              </Badge>
            </BlurFade>

            <BlurFade delay={0.15}>
              <p className="mx-auto mb-4 flex items-center justify-center gap-2 text-xs text-blue-600">
                <ShieldCheck className="h-4 w-4" />
                Verified on Google Business
              </p>
            </BlurFade>

            <BlurFade delay={0.2}>
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Let's Start a{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Conversation
                </span>
              </h1>
            </BlurFade>

            <BlurFade delay={0.3}>
              <p className="text-lg text-slate-600">
                Have a project in mind? We'd love to hear from you. 
                Reach out to discuss how we can help you achieve your engineering goals.
              </p>
            </BlurFade>

            <BlurFade delay={0.35}>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button
                  size="sm"
                  className="bg-blue-600 text-white hover:bg-blue-700"
                  asChild
                >
                  <Link
                    href="https://g.page/r/CXO2VjS02kEDEBM/review?utm_source=website&utm_medium=hero_cta&utm_campaign=google_reviews"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ⭐ Review Us on Google
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                >
                  <Link
                    href="https://maps.app.goo.gl/L1Emmw3HXdA1L5TP9?utm_source=website&utm_medium=hero_cta&utm_campaign=get_directions"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Get Directions
                  </Link>
                </Button>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid gap-4 lg:grid-cols-[1fr_1.2fr] xl:grid-cols-[1.2fr_1.3fr]">
            {contactInfo.map((info, index) => {
              if (info.variant === "address") {
                const Icon = info.icon
                return (
                  <BlurFade key={index} delay={0.1}>
                    <Card className="glass-card glass-card-hover group overflow-hidden h-full lg:mx-auto lg:w-[90%] xl:w-4/5">
                      <CardContent className="p-5 sm:p-6 h-full">
                        <div className="flex h-full flex-col gap-3">
                          <div className="rounded-lg border border-slate-100/70 bg-white/80 p-5 shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md">
                            <div className="flex items-start gap-3">
                              <div className={`flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-gradient-to-br ${info.gradient} text-white transition-transform group-hover:scale-105`}>
                                <Icon className="h-5 w-5" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h3 className="text-sm font-semibold text-slate-900">
                                  {info.title}
                                </h3>
                                <div className="mt-2 space-y-1.5 text-sm leading-relaxed text-slate-700">
                                  {info.value.map((line, idx) => (
                                    <div key={idx}>{line}</div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mt-6 flex flex-col gap-2">
                            <Button
                              asChild
                              size="sm"
                              className="w-full bg-blue-600 text-white hover:bg-blue-700"
                            >
                              <Link href={info.link} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-3.5 w-3.5" />
                                Open in Google Maps
                              </Link>
                            </Button>
                            <Button
                              asChild
                              size="sm"
                              variant="outline"
                              className="w-full"
                            >
                              <Link
                                href="https://g.page/r/CXO2VjS02kEDEBM/review?utm_source=website&utm_medium=contact_card&utm_campaign=google_reviews"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                ⭐ Review Us
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </BlurFade>
                )
              }

              return null
            })}

            <BlurFade delay={0.2}>
              <Card className="glass-card glass-card-hover h-full p-4 lg:p-6">
                <div className="flex h-full flex-col justify-between gap-4">
                  {contactInfo
                    .filter((info) => info.variant !== "address")
                    .map((info, index) => {
                      const Icon = info.icon
                      return (
                        <div
                          key={index}
                          className="flex items-start gap-3 rounded-lg border border-slate-100/70 bg-white/70 p-4 transition-transform hover:-translate-y-0.5 hover:shadow-sm"
                        >
                          <div className={`flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-gradient-to-br ${info.gradient} text-white`}>
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-sm font-semibold text-slate-900">{info.title}</h4>
                            {info.type === "email" ? (
                              <ProtectedEmailLink
                                email={info.value}
                                className="text-xs"
                                rel="nofollow"
                              />
                            ) : info.link && info.link !== "#" ? (
                              <a
                                href={info.link}
                                className="text-xs text-blue-600 hover:text-blue-700 hover:underline"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p className="text-xs text-slate-600">{info.value}</p>
                            )}
                          </div>
                        </div>
                      )
                    })}
                </div>
              </Card>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Form */}
            <div id="form">
              <BlurFade delay={0.1}>
                <div className="mb-6">
                  <Badge className="mb-3 bg-blue-100 text-blue-700">
                    Send Us a Message
                  </Badge>
                  <h2 className="mb-2 text-3xl font-bold text-slate-900">
                    Tell Us About Your Project
                  </h2>
                  <p className="text-slate-600">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>
              </BlurFade>

              <BlurFade delay={0.2}>
                <ContactForm />
              </BlurFade>
            </div>

            {/* Office Locations & Map */}
            <div className="space-y-6">
              <BlurFade delay={0.2}>
                <div className="mb-4">
                  <Badge className="mb-3 bg-blue-100 text-blue-700">
                    Our Office
                  </Badge>
                  <h2 className="mb-2 text-3xl font-bold text-slate-900">
                    Visit Our Kuala Lumpur Office
                  </h2>
                </div>
              </BlurFade>

              {offices.map((office, index) => (
                <BlurFade key={index} delay={0.3}>
                  <Card className="glass-card-blue">
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-slate-900">
                            {office.city}
                          </h3>
                          <p className="text-sm text-slate-600">{office.country}</p>
                        </div>
                        {office.isPrimary ? (
                          <Badge className="bg-blue-600 text-white text-xs">
                            Primary Office
                          </Badge>
                        ) : (
                          <Badge className="bg-slate-200 text-slate-700 text-xs">
                            Satellite Office
                          </Badge>
                        )}
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-slate-600 flex-shrink-0" />
                          <p className="text-sm text-slate-700 leading-snug">{office.address}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-slate-600 flex-shrink-0" />
                          <a
                            href={`tel:${office.phone.replace(/\s/g, "")}`}
                            className="text-sm text-blue-600 hover:underline"
                          >
                            {office.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-blue-500 flex-shrink-0" />
                          <a
                            href={office.mapLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline leading-snug"
                          >
                            Read &amp; Leave Google Reviews
                          </a>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-slate-200">
                        <p className="text-xs font-semibold text-slate-700 mb-1">Business Name</p>
                        <p className="text-sm text-slate-900 mb-2">KIT CONSULTING</p>
                        <p className="text-xs font-semibold text-slate-700 mb-1">Business Registration No.</p>
                        <p className="text-sm text-slate-900">RA0067918M / 202103015495</p>
                        <p className="text-xs font-semibold text-slate-700 mb-1 mt-3">Service Area</p>
                        <p className="text-sm text-slate-900">Kuala Lumpur • Greater Klang Valley • Southeast Asia</p>
                      </div>
                    </CardContent>
                  </Card>
                </BlurFade>
              ))}

              {/* Map */}
              <BlurFade delay={0.4}>
                <Card className="glass-card overflow-hidden">
                  <div className="aspect-video w-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.4842919418325!2d101.68328007540772!3d3.132890296843333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49d8b61bdeab%3A0xfc85c96baa63d2b1!2sQ%20Sentral!5e0!3m2!1sen!2smy!4v1731302400000!5m2!1sen!2smy"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="KIT Consulting Office Location in Kuala Lumpur"
                    />
                  </div>
                </Card>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 text-center">
              <BlurFade delay={0.1}>
                <Badge className="mb-3 bg-blue-100 text-blue-700">
                  FAQ
                </Badge>
              </BlurFade>
              
              <BlurFade delay={0.2}>
                <h2 className="mb-2 text-3xl font-bold text-slate-900">
                  Frequently Asked Questions
                </h2>
              </BlurFade>
            </div>

            <div className="space-y-3">
              {[
                {
                  question: "What services do you offer?",
                  answer: "We provide comprehensive engineering consulting including Tendering & Procurement, Process Optimization, and Technical Due Diligence services.",
                },
                {
                  question: "What industries do you serve?",
                  answer: "We specialize in the energy sector (Oil & Gas, Power Generation) and manufacturing industries (Chemical Processing, Industrial Manufacturing).",
                },
                {
                  question: "How quickly can you start a project?",
                  answer: "We can typically mobilize our team within 1-2 weeks, depending on project requirements and scope.",
                },
                {
                  question: "Do you offer remote engineering services?",
                  answer: "Yes, we provide comprehensive remote engineering support, allowing us to serve clients efficiently across Southeast Asia and beyond.",
                },
              ].map((faq, index) => (
                <BlurFade key={index} delay={0.1 + index * 0.1}>
                  <Card className="glass-card">
                    <CardContent className="p-4">
                      <h3 className="mb-1 text-sm font-semibold text-slate-900">
                        {faq.question}
                      </h3>
                      <p className="text-sm text-slate-600">{faq.answer}</p>
                    </CardContent>
                  </Card>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="container-custom">
          <BlurFade delay={0.1}>
            <Card className="glass-card glass-card-hover mx-auto max-w-4xl overflow-hidden border border-blue-100/70 bg-gradient-to-b from-white/95 via-white to-blue-50/30">
              <CardContent className="p-8 sm:p-10">
                <div className="flex flex-col items-center gap-6 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600/10 text-blue-600">
                    <Send className="h-7 w-7" />
                  </div>
                  <div className="space-y-3">
                    <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                      Ready to Start Your Next Project?
                    </h2>
                    <p className="text-base text-slate-600 sm:text-lg">
                      Tell us about your goals and our engineering consultants will craft a bespoke plan within one business day.
                    </p>
                  </div>

                  <div className="flex w-full flex-wrap items-center justify-center gap-3 text-left sm:justify-between">
                    <div className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-600">
                      <Mail className="h-4 w-4 text-blue-600" />
                      <ProtectedEmailLink
                        email="info@kitengineeringconsulting.net"
                        className="font-semibold"
                        rel="nofollow"
                      />
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white/80 px-4 py-3 text-xs text-slate-600 sm:text-sm">
                      <Phone className="h-4 w-4 text-blue-600" />
                      <a
                        href="tel:+60122333880"
                        className="font-semibold text-blue-600 hover:text-blue-700"
                      >
                        +6012-2333 880
                      </a>
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-600">
                      <Clock className="h-4 w-4 text-blue-600" />
                      <span>Mon – Fri, 9:00 AM – 5:00 PM</span>
                    </div>
                  </div>

                  <div className="flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center">
                    <Button asChild size="lg" className="min-w-[200px] bg-blue-600 text-white hover:bg-blue-700">
                      <Link href="/contact#form">
                        Request a Consultation
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="min-w-[200px] border-green-500 text-green-600 hover:border-green-600 hover:text-green-700"
                    >
                      <Link
                        href="https://wa.me/60122333880?text=Hi%20KIT%20Consulting,%20I'd%20like%20to%20chat%20about%20a%20project."
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Chat on WhatsApp
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </BlurFade>
        </div>
      </section>
    </div>
  )
}
