import type { Metadata } from "next"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import BlurFade from "@/components/magicui/blur-fade"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Contact KIT Consulting Malaysia - Engineering Consultancy in Kuala Lumpur",
  description:
    "Contact KIT Consulting (KITCON) for EPCC Project Management, Tendering Support, and Engineering Services in Malaysia. Based in Kuala Lumpur, serving Oil & Gas, Power, and Chemical industries across Southeast Asia. Call +60-12-9100417 or email info@kitengineeringconsulting.net",
  keywords: [
    "contact engineering consultant malaysia",
    "kuala lumpur engineering services",
    "epcc contractor contact",
    "tendering support malaysia",
    "technical due diligence services",
    "engineering consultation malaysia"
  ]
}

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "justin@kitengineeringconsulting.net",
    link: "mailto:justin@kitengineeringconsulting.net",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "012-9100 417",
    link: "tel:+60129100417",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "Kuala Lumpur, Malaysia",
    link: "#",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon-Fri: 8:00 AM - 6:00 PM",
    link: "#",
    gradient: "from-purple-500 to-pink-500",
  },
]

const offices = [
  {
    city: "Kuala Lumpur",
    country: "Malaysia",
    address: "Malaysia",
    phone: "012-9100 417",
    isPrimary: true,
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
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <BlurFade key={index} delay={0.1 + index * 0.1}>
                  <Card className="glass-card glass-card-hover group overflow-hidden">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className={`flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-gradient-to-br ${info.gradient} text-white transition-transform group-hover:scale-110`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-medium text-slate-900 mb-0.5">
                            {info.title}
                          </h3>
                          <a
                            href={info.link}
                            className="text-xs text-slate-600 hover:text-blue-600 hover:underline block truncate"
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </BlurFade>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Form */}
            <div>
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
                    Visit Our Location
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
                        <Badge className="bg-blue-600 text-white text-xs">
                          Primary Office
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-slate-600 flex-shrink-0" />
                          <p className="text-sm text-slate-700">{office.address}</p>
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
                      </div>
                      <div className="mt-4 pt-4 border-t border-slate-200">
                        <p className="text-xs font-semibold text-slate-700 mb-1">Business Name</p>
                        <p className="text-sm text-slate-900 mb-2">KIT CONSULTING</p>
                        <p className="text-xs font-semibold text-slate-700 mb-1">Business Registration No.</p>
                        <p className="text-sm text-slate-900">RA0067918M / 202103015495</p>
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
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127641.38905851927!2d101.61425674316408!3d3.1385036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49c701efeae7%3A0xf4d98e5b2f1c287d!2sKuala%20Lumpur%2C%20Federal%20Territory%20of%20Kuala%20Lumpur%2C%20Malaysia!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Kuala Lumpur, Malaysia"
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
                  answer: "We provide comprehensive engineering consulting including Construction Execution (EPCC), Tendering & Procurement, Process Optimization, and Technical Due Diligence services.",
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
        <div className="container-custom text-center">
          <BlurFade delay={0.1}>
            <Send className="mx-auto mb-4 h-12 w-12 text-blue-600" />
          </BlurFade>
          
          <BlurFade delay={0.2}>
            <h2 className="mb-3 text-3xl font-bold text-slate-900">
              Ready to Get Started?
            </h2>
          </BlurFade>
          
          <BlurFade delay={0.3}>
            <p className="mb-6 text-lg text-slate-600">
              We're excited to hear about your project and explore how we can help.
            </p>
          </BlurFade>
          
          <BlurFade delay={0.4}>
            <p className="text-slate-700">
              Or email us directly at{" "}
              <a
                href="mailto:justin@kitengineeringconsulting.net"
                className="font-semibold text-blue-600 underline hover:text-blue-700"
              >
                justin@kitengineeringconsulting.net
              </a>
            </p>
          </BlurFade>
        </div>
      </section>
    </div>
  )
}
