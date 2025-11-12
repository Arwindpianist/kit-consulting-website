import type { Metadata } from "next"
import { Shield, Eye, Lock, Database, Cookie, Mail } from "lucide-react"
import BlurFade from "@/components/magicui/blur-fade"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ProtectedEmailLink from "@/components/ProtectedEmailLink"

export const metadata: Metadata = {
  title: "Privacy Policy - KIT Consulting",
  description:
    "Learn how KIT Consulting protects your personal information and maintains your privacy. Our privacy policy outlines data collection, usage, and protection practices.",
}

const sections = [
  {
    icon: Database,
    title: "Information We Collect",
    content: [
      {
        subtitle: "Personal Information",
        text: "When you contact us or use our services, we may collect personal information including your name, email address, phone number, company name, and project details. This information is provided voluntarily by you when filling out forms or communicating with us.",
      },
      {
        subtitle: "Usage Data",
        text: "We automatically collect certain information about your device and how you interact with our website, including IP address, browser type, pages visited, time spent on pages, and referring website addresses.",
      },
      {
        subtitle: "Cookies and Tracking",
        text: "We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and improve our services. You can control cookie preferences through your browser settings.",
      },
    ],
  },
  {
    icon: Eye,
    title: "How We Use Your Information",
    content: [
      {
        subtitle: "Service Delivery",
        text: "We use your information to provide, maintain, and improve our engineering consulting services, respond to your inquiries, and communicate about projects and services you've requested.",
      },
      {
        subtitle: "Business Operations",
        text: "Your information helps us analyze website usage, improve user experience, send marketing communications (with your consent), and maintain our business records for legal and accounting purposes.",
      },
      {
        subtitle: "Legal Compliance",
        text: "We may use your information to comply with legal obligations, enforce our terms and conditions, and protect the rights, property, and safety of KIT Consulting, our clients, and others.",
      },
    ],
  },
  {
    icon: Lock,
    title: "Data Protection & Security",
    content: [
      {
        subtitle: "Security Measures",
        text: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and access controls.",
      },
      {
        subtitle: "Data Retention",
        text: "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this privacy policy, comply with legal obligations, resolve disputes, and enforce our agreements.",
      },
      {
        subtitle: "Third-Party Services",
        text: "We may use trusted third-party service providers to help operate our website and conduct our business. These parties are obligated to keep your information confidential and use it only for the purposes we specify.",
      },
    ],
  },
  {
    icon: Shield,
    title: "Your Rights & Choices",
    content: [
      {
        subtitle: "Access and Control",
        text: "You have the right to access, correct, update, or request deletion of your personal information. You can opt-out of marketing communications at any time by clicking the unsubscribe link in our emails.",
      },
      {
        subtitle: "Data Portability",
        text: "In certain circumstances, you have the right to request a copy of your personal information in a structured, commonly used, and machine-readable format.",
      },
      {
        subtitle: "Withdrawal of Consent",
        text: "Where we rely on your consent to process personal information, you have the right to withdraw that consent at any time. This will not affect the lawfulness of processing based on consent before withdrawal.",
      },
    ],
  },
]

export default function PrivacyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <BlurFade delay={0.1}>
              <Badge className="mb-4 bg-blue-100 text-blue-700">
                <Shield className="mr-2 h-3 w-3" />
                Privacy Policy
              </Badge>
            </BlurFade>

            <BlurFade delay={0.2}>
              <h1 className="mb-6 text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
                Your Privacy{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Matters to Us
                </span>
              </h1>
            </BlurFade>

            <BlurFade delay={0.3}>
              <p className="text-lg text-slate-600 leading-relaxed">
                At KIT Consulting, we are committed to protecting your personal information 
                and maintaining your trust. This privacy policy explains how we collect, use, 
                and safeguard your data.
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
                          <h3 className="mb-2 text-lg font-semibold text-slate-900">
                            {item.subtitle}
                          </h3>
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

            {/* Additional Information */}
            <BlurFade delay={0.5}>
              <Card className="glass-card-blue">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                      <Cookie className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-2xl">Cookies Policy</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-slate-900">
                      What Are Cookies?
                    </h3>
                    <p className="text-slate-700 leading-relaxed">
                      Cookies are small text files stored on your device when you visit our website. 
                      They help us provide you with a better experience by remembering your preferences 
                      and understanding how you use our site.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-slate-900">
                      Types of Cookies We Use
                    </h3>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold mt-1">•</span>
                        <span><strong>Essential Cookies:</strong> Required for the website to function properly</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold mt-1">•</span>
                        <span><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold mt-1">•</span>
                        <span><strong>Preference Cookies:</strong> Remember your settings and preferences</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </BlurFade>

            {/* International Transfers */}
            <BlurFade delay={0.6}>
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-xl">International Data Transfers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 leading-relaxed">
                    Your information may be transferred to and processed in countries other than 
                    your country of residence. These countries may have data protection laws that 
                    are different from the laws of your country. We ensure appropriate safeguards 
                    are in place to protect your information in accordance with this privacy policy.
                  </p>
                </CardContent>
              </Card>
            </BlurFade>

            {/* Children's Privacy */}
            <BlurFade delay={0.7}>
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-xl">Children's Privacy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 leading-relaxed">
                    Our services are not directed to individuals under the age of 18. We do not 
                    knowingly collect personal information from children. If you are a parent or 
                    guardian and believe your child has provided us with personal information, 
                    please contact us to have it removed.
                  </p>
                </CardContent>
              </Card>
            </BlurFade>

            {/* Changes to Policy */}
            <BlurFade delay={0.8}>
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-xl">Changes to This Privacy Policy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    We may update this privacy policy from time to time to reflect changes in our 
                    practices or for other operational, legal, or regulatory reasons. We will notify 
                    you of any material changes by posting the new privacy policy on this page and 
                    updating the "Last Updated" date.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    We encourage you to review this privacy policy periodically to stay informed 
                    about how we are protecting your information.
                  </p>
                </CardContent>
              </Card>
            </BlurFade>

            {/* Contact Section */}
            <BlurFade delay={0.9}>
              <Card className="glass-card-blue border-2 border-blue-200">
                <CardContent className="p-8 text-center">
                  <Mail className="mx-auto mb-4 h-12 w-12 text-blue-600" />
                  <h2 className="mb-3 text-2xl font-bold text-slate-900">
                    Questions About Your Privacy?
                  </h2>
                  <p className="mb-6 text-slate-700 leading-relaxed">
                    If you have any questions, concerns, or requests regarding this privacy policy 
                    or our data practices, please don't hesitate to contact us.
                  </p>
                  <div className="space-y-2">
                    <p className="text-slate-700">
                      <strong>Email:</strong>{" "}
                      <ProtectedEmailLink
                        email="info@kitengineeringconsulting.net"
                        className="text-blue-600 hover:text-blue-700"
                        rel="nofollow"
                      />
                    </p>
                    <p className="text-slate-700">
                      <strong>Phone:</strong>{" "}
                      <a
                        href="tel:+60129100417"
                        className="text-blue-600 hover:text-blue-700 underline"
                      >
                        012-9100 417
                      </a>
                    </p>
                    <p className="text-slate-700">
                      <strong>Address:</strong> Kuala Lumpur, Malaysia
                    </p>
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

