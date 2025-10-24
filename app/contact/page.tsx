import type { Metadata } from "next"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import BlurFade from "@/components/magicui/blur-fade"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Contact Us | KIT Consulting",
  description:
    "Get in touch with KIT Consulting for engineering consultation. We're here to discuss your projects and provide expert guidance for your construction execution, tendering, and process optimization needs.",
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
      <section className="py-16">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <BlurFade delay={0.1}>
              <Badge className="mb-4 bg-blue-100 text-blue-700">
                Get In Touch
              </Badge>
            </BlurFade>

            <BlurFade delay={0.2}>
              <h1 className="mb-6 text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
                Let's Start a{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Conversation
                </span>
              </h1>
            </BlurFade>

            <BlurFade delay={0.3}>
              <p className="text-xl text-slate-700">
                Have a project in mind? We'd love to hear from you. 
                Reach out to discuss how we can help you achieve your engineering goals.
              </p>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <BlurFade key={index} delay={0.1 + index * 0.1}>
                  <Card className="group h-full overflow-hidden border-2 transition-all hover:shadow-xl hover:-translate-y-1">
                    <CardContent className="p-6 text-center">
                      <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${info.gradient} text-white transition-transform group-hover:scale-110`}>
                        <Icon className="h-7 w-7" />
                      </div>
                      <h3 className="mb-2 font-semibold text-slate-900">
                        {info.title}
                      </h3>
                      <a
                        href={info.link}
                        className="text-sm text-slate-600 hover:text-blue-600 hover:underline"
                      >
                        {info.value}
                      </a>
                    </CardContent>
                  </Card>
                </BlurFade>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Form */}
            <div>
              <BlurFade delay={0.1}>
                <div className="mb-8">
                  <Badge className="mb-4 bg-blue-100 text-blue-700">
                    Send Us a Message
                  </Badge>
                  <h2 className="mb-4 text-4xl font-bold text-slate-900">
                    Tell Us About Your Project
                  </h2>
                  <p className="text-lg text-slate-600">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>
              </BlurFade>

              <BlurFade delay={0.2}>
                <ContactForm />
              </BlurFade>
            </div>

            {/* Office Locations */}
            <div>
              <BlurFade delay={0.2}>
                <div className="mb-8">
                  <Badge className="mb-4 bg-blue-100 text-blue-700">
                    Our Offices
                  </Badge>
                  <h2 className="mb-4 text-4xl font-bold text-slate-900">
                    Visit Our Locations
                  </h2>
                  <p className="text-lg text-slate-600">
                    We operate across Southeast Asia with offices in key business hubs.
                  </p>
                </div>
              </BlurFade>

              <div className="space-y-6">
                {offices.map((office, index) => (
                  <BlurFade key={index} delay={0.3 + index * 0.1}>
                    <Card className={`border-2 ${office.isPrimary ? "border-blue-300 bg-blue-50/50" : ""}`}>
                      <CardContent className="p-6">
                        <div className="mb-4 flex items-start justify-between">
                          <div>
                            <h3 className="mb-1 text-2xl font-bold text-slate-900">
                              {office.city}
                            </h3>
                            <p className="text-sm text-slate-600">{office.country}</p>
                          </div>
                          {office.isPrimary && (
                            <Badge className="bg-blue-600 text-white">
                              Primary Office
                            </Badge>
                          )}
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-slate-600" />
                            <p className="text-slate-700">{office.address}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <Phone className="h-5 w-5 flex-shrink-0 text-slate-600" />
                            <a
                              href={`tel:${office.phone.replace(/\s/g, "")}`}
                              className="text-blue-600 hover:underline"
                            >
                              {office.phone}
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </BlurFade>
                ))}
              </div>

              {/* Map */}
              <BlurFade delay={0.5}>
                <Card className="mt-6 overflow-hidden border-2">
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
      <section className="py-16">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <BlurFade delay={0.1}>
                <Badge className="mb-4 bg-blue-100 text-blue-700">
                  FAQ
                </Badge>
              </BlurFade>
              
              <BlurFade delay={0.2}>
                <h2 className="mb-4 text-4xl font-bold text-slate-900">
                  Frequently Asked Questions
                </h2>
              </BlurFade>
            </div>

            <div className="space-y-4">
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
                  <Card className="border-2">
                    <CardContent className="p-6">
                      <h3 className="mb-2 font-semibold text-slate-900">
                        {faq.question}
                      </h3>
                      <p className="text-slate-600">{faq.answer}</p>
                    </CardContent>
                  </Card>
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
            <Send className="mx-auto mb-6 h-16 w-16 text-blue-600" />
          </BlurFade>
          
          <BlurFade delay={0.2}>
            <h2 className="mb-4 text-4xl font-bold text-slate-900">
              Ready to Get Started?
            </h2>
          </BlurFade>
          
          <BlurFade delay={0.3}>
            <p className="mb-8 text-xl text-slate-600">
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
