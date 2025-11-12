import type { Metadata } from "next"
import { FileText, Scale, AlertCircle, CheckCircle2, XCircle, Briefcase } from "lucide-react"
import BlurFade from "@/components/magicui/blur-fade"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ProtectedEmailLink from "@/components/ProtectedEmailLink"

export const metadata: Metadata = {
  title: "Terms & Conditions - KIT Consulting",
  description:
    "Read KIT Consulting's terms and conditions for using our website and engineering consulting services. Understand your rights and responsibilities.",
}

const sections = [
  {
    icon: FileText,
    title: "Acceptance of Terms",
    content: [
      {
        text: "By accessing and using the KIT Consulting website (www.kitengineeringconsulting.net) and our services, you accept and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you should not use our website or services.",
      },
      {
        text: "These terms apply to all visitors, users, and others who access or use our services. We reserve the right to update or modify these terms at any time without prior notice. Your continued use of our services after any changes indicates your acceptance of the new terms.",
      },
    ],
  },
  {
    icon: Briefcase,
    title: "Services & Engagement",
    content: [
      {
        subtitle: "Scope of Services",
        text: "KIT Consulting provides engineering consulting services including but not limited to EPCC Project Management, Tendering Support, Technical Due Diligence, and Remote Engineering Services. Specific services, deliverables, timelines, and fees are outlined in individual service agreements or proposals.",
      },
      {
        subtitle: "Professional Standards",
        text: "We commit to providing our services with reasonable skill and care, in accordance with accepted industry standards and professional practices. However, engineering consulting involves professional judgment, and results may vary based on project-specific circumstances.",
      },
      {
        subtitle: "Client Responsibilities",
        text: "Clients are responsible for providing accurate, complete, and timely information necessary for service delivery. Clients must cooperate with our team, respond to requests promptly, and provide access to relevant sites, documents, and personnel as needed.",
      },
    ],
  },
  {
    icon: Scale,
    title: "Intellectual Property",
    content: [
      {
        subtitle: "Ownership of Content",
        text: "All content on this website, including text, graphics, logos, images, and software, is the property of KIT Consulting or its content suppliers and is protected by Malaysian and international copyright laws.",
      },
      {
        subtitle: "Work Product",
        text: "Unless otherwise agreed in writing, all reports, analyses, designs, and deliverables created by KIT Consulting remain our intellectual property until full payment is received. Upon payment, clients receive a license to use the work product for the intended project purpose.",
      },
      {
        subtitle: "Restricted Use",
        text: "You may not reproduce, distribute, modify, create derivative works of, publicly display, or commercially exploit any content from our website without express written permission from KIT Consulting.",
      },
    ],
  },
  {
    icon: AlertCircle,
    title: "Limitation of Liability",
    content: [
      {
        subtitle: "Service Limitations",
        text: "Our services are provided on an 'as is' and 'as available' basis. We make no warranties, expressed or implied, regarding the accuracy, reliability, or completeness of our services or any information provided.",
      },
      {
        subtitle: "Liability Cap",
        text: "To the maximum extent permitted by law, KIT Consulting's total liability for any claims arising from our services shall not exceed the total fees paid by the client for the specific services that gave rise to the claim.",
      },
      {
        subtitle: "Exclusion of Consequential Damages",
        text: "KIT Consulting shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services.",
      },
    ],
  },
]

const additionalTerms = [
  {
    icon: CheckCircle2,
    title: "Confidentiality",
    content: "Both parties agree to keep confidential any proprietary or sensitive information disclosed during the engagement. This obligation survives the termination of any service agreement. We implement reasonable measures to protect client information from unauthorized access or disclosure.",
  },
  {
    icon: XCircle,
    title: "Termination",
    content: "Either party may terminate an engagement by providing written notice as specified in the service agreement. Upon termination, clients remain responsible for payment of all services rendered up to the termination date. We reserve the right to suspend or terminate services for non-payment or breach of terms.",
  },
  {
    icon: Briefcase,
    title: "Payment Terms",
    content: "Payment terms are specified in individual service agreements or proposals. Unless otherwise stated, invoices are due within 30 days of receipt. Late payments may incur interest charges at the rate of 1.5% per month or the maximum rate permitted by law, whichever is lower. Clients are responsible for all costs of collection.",
  },
]

export default function TermsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <BlurFade delay={0.1}>
              <Badge className="mb-4 bg-blue-100 text-blue-700">
                <FileText className="mr-2 h-3 w-3" />
                Legal
              </Badge>
            </BlurFade>

            <BlurFade delay={0.2}>
              <h1 className="mb-6 text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
                Terms &{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Conditions
                </span>
              </h1>
            </BlurFade>

            <BlurFade delay={0.3}>
              <p className="text-lg text-slate-600 leading-relaxed">
                Please read these terms and conditions carefully before using our website or 
                engaging our services. These terms govern your use of KIT Consulting's services 
                and website.
              </p>
            </BlurFade>

            <BlurFade delay={0.4}>
              <p className="mt-4 text-sm text-slate-500">
                Last Updated: October 25, 2025
              </p>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl space-y-12">
            {sections.map((section, index) => {
              const Icon = section.icon
              return (
                <BlurFade key={index} delay={0.1 + index * 0.1}>
                  <Card className="glass-card">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
                          <Icon className="h-5 w-5" />
                        </div>
                        <CardTitle className="text-2xl">{section.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {section.content.map((item, idx) => (
                        <div key={idx}>
                          {item.subtitle && (
                            <h3 className="mb-2 text-lg font-semibold text-slate-900">
                              {item.subtitle}
                            </h3>
                          )}
                          <p className="text-slate-700 leading-relaxed">
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </BlurFade>
              )
            })}

            {/* Additional Terms */}
            <div className="grid gap-6 md:grid-cols-1">
              {additionalTerms.map((term, index) => {
                const Icon = term.icon
                return (
                  <BlurFade key={index} delay={0.5 + index * 0.1}>
                    <Card className="glass-card-blue">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                            <Icon className="h-5 w-5" />
                          </div>
                          <CardTitle className="text-xl">{term.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-700 leading-relaxed">
                          {term.content}
                        </p>
                      </CardContent>
                    </Card>
                  </BlurFade>
                )
              })}
            </div>

            {/* Dispute Resolution */}
            <BlurFade delay={0.8}>
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-xl">Dispute Resolution</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-slate-900">
                      Governing Law
                    </h3>
                    <p className="text-slate-700 leading-relaxed">
                      These Terms and Conditions shall be governed by and construed in accordance 
                      with the laws of Malaysia, without regard to its conflict of law provisions.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-slate-900">
                      Jurisdiction
                    </h3>
                    <p className="text-slate-700 leading-relaxed">
                      Any disputes arising out of or relating to these terms or our services shall 
                      be subject to the exclusive jurisdiction of the courts of Kuala Lumpur, Malaysia.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-slate-900">
                      Mediation
                    </h3>
                    <p className="text-slate-700 leading-relaxed">
                      Before pursuing formal legal action, parties agree to attempt to resolve 
                      disputes through good faith negotiation and, if necessary, mediation with 
                      a mutually agreed-upon mediator.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </BlurFade>

            {/* Indemnification */}
            <BlurFade delay={0.9}>
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-xl">Indemnification</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 leading-relaxed">
                    You agree to indemnify, defend, and hold harmless KIT Consulting, its officers, 
                    directors, employees, and agents from and against any claims, liabilities, damages, 
                    losses, and expenses, including reasonable legal fees, arising out of or in any way 
                    connected with your breach of these terms or your use of our services.
                  </p>
                </CardContent>
              </Card>
            </BlurFade>

            {/* Severability */}
            <BlurFade delay={1.0}>
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-xl">Severability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 leading-relaxed">
                    If any provision of these Terms and Conditions is found to be unenforceable or 
                    invalid under any applicable law, such unenforceability or invalidity shall not 
                    render these terms unenforceable or invalid as a whole. Such provisions shall be 
                    deleted without affecting the remaining provisions herein.
                  </p>
                </CardContent>
              </Card>
            </BlurFade>

            {/* Force Majeure */}
            <BlurFade delay={1.1}>
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-xl">Force Majeure</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 leading-relaxed">
                    KIT Consulting shall not be liable for any failure or delay in performance due to 
                    circumstances beyond its reasonable control, including but not limited to acts of 
                    God, war, terrorism, pandemic, labor disputes, or governmental actions. In such 
                    cases, we will make reasonable efforts to minimize disruption and notify affected 
                    parties promptly.
                  </p>
                </CardContent>
              </Card>
            </BlurFade>

            {/* Business Information */}
            <BlurFade delay={1.2}>
              <Card className="glass-card-blue border-2 border-blue-200">
                <CardContent className="p-8">
                  <h2 className="mb-4 text-2xl font-bold text-slate-900">
                    Company Information
                  </h2>
                  <div className="space-y-3 text-slate-700">
                    <p>
                      <strong>Business Name:</strong> KIT CONSULTING
                    </p>
                    <p>
                      <strong>Business Registration No.:</strong> RA0067918M / 202103015495
                    </p>
                    <p>
                      <strong>Registered Address:</strong> Kuala Lumpur, Malaysia
                    </p>
                    <p className="text-slate-700">
                      <strong>Email:</strong>{" "}
                      <ProtectedEmailLink
                        email="info@kitengineeringconsulting.net"
                        className="text-blue-600 hover:text-blue-700"
                        rel="nofollow"
                      />
                    </p>
                    <p>
                      <strong>Phone:</strong>{" "}
                      <a
                        href="tel:+60129100417"
                        className="text-blue-600 hover:text-blue-700 underline"
                      >
                        012-9100 417
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </BlurFade>

            {/* Contact for Questions */}
            <BlurFade delay={1.3}>
              <Card className="glass-card">
                <CardContent className="p-8 text-center">
                  <Scale className="mx-auto mb-4 h-12 w-12 text-blue-600" />
                  <h2 className="mb-3 text-2xl font-bold text-slate-900">
                    Questions About These Terms?
                  </h2>
                  <p className="mb-6 text-slate-700 leading-relaxed">
                    If you have any questions or concerns about these Terms and Conditions, 
                    please contact us. We're here to help clarify any aspect of our terms.
                  </p>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3 text-white font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all"
                  >
                    Contact Us
                  </a>
                </CardContent>
              </Card>
            </BlurFade>
          </div>
        </div>
      </section>
    </div>
  )
}

