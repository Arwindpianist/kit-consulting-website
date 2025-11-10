import type { Metadata } from "next"
import { MessageSquare, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import TestimonialForm from "@/components/TestimonialForm"

export const metadata: Metadata = {
  title: "Submit Testimonial - KIT Consulting",
  description: "Share your experience working with KIT Consulting",
  robots: {
    index: false,
    follow: false,
  },
}

export default function TestimonialSubmitPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl">
          {/* Header */}
          <div className="mb-8 text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">
              <MessageSquare className="mr-1 h-3 w-3" />
              Client Testimonial
            </Badge>
            <h1 className="mb-4 text-4xl font-bold text-[#003366] md:text-5xl">
              Share Your Experience
            </h1>
            <p className="text-lg text-slate-600">
              Your feedback helps us improve and shows others the value we deliver. 
              Thank you for taking the time to share your thoughts!
            </p>
          </div>

          {/* Form Card */}
          <Card className="glass-card shadow-xl">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-[#003366]">Testimonial Form</CardTitle>
              <CardDescription>
                Please share your experience working with KIT Consulting. Your testimonial 
                may be featured on our website (with your permission).
              </CardDescription>
            </CardHeader>
            <CardContent>
              <TestimonialForm />
            </CardContent>
          </Card>

          {/* Privacy Notice */}
          <div className="mt-6 text-center text-sm text-slate-500">
            <p>
              We respect your privacy. Your information will only be used for testimonial 
              purposes and will not be shared without your explicit consent.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

