"use client"

import type React from "react"
import { useState } from "react"
import { toast } from "sonner"
import { AlertCircle } from "./icons"
import { RainbowButton } from "@/components/ui/rainbow-button"
import type { ContactFormData } from "@/lib/types"

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Partial<ContactFormData>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error for this field when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      toast.error("Please fix the errors in the form")
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        toast.success("Message sent successfully!", {
          description: "We'll get back to you as soon as possible.",
          duration: 5000,
        })
        setFormData({ name: "", email: "", company: "", message: "" })
        setErrors({})
      } else {
        toast.error("Failed to send message", {
          description: data.error || "Please try again or contact us directly via email.",
          duration: 5000,
        })
      }
    } catch (error) {
      console.error("Form submission error:", error)
      toast.error("Something went wrong", {
        description: "Please try again or contact us directly via email.",
        duration: 5000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-semibold text-[#003366]">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full rounded-xl border-2 px-4 py-3 text-sm transition-all focus:outline-none bg-white ${
            errors.name
              ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
              : "border-slate-300 focus:border-[#0066cc] focus:ring-2 focus:ring-[#0066cc]/20"
          }`}
          placeholder="Your full name"
        />
        {errors.name && (
          <p className="mt-1 flex items-center gap-1 text-xs text-red-600">
            <AlertCircle className="h-3 w-3" />
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[#003366]">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full rounded-xl border-2 px-4 py-3 text-sm transition-all focus:outline-none bg-white ${
            errors.email
              ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
              : "border-slate-300 focus:border-[#0066cc] focus:ring-2 focus:ring-[#0066cc]/20"
          }`}
          placeholder="your.email@company.com"
        />
        {errors.email && (
          <p className="mt-1 flex items-center gap-1 text-xs text-red-600">
            <AlertCircle className="h-3 w-3" />
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="company" className="mb-2 block text-sm font-semibold text-[#003366]">
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full rounded-xl border-2 border-slate-300 px-4 py-3 text-sm transition-all focus:border-[#0066cc] focus:outline-none focus:ring-2 focus:ring-[#0066cc]/20 bg-white"
          placeholder="Your company name"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-semibold text-[#003366]">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className={`w-full rounded-xl border-2 px-4 py-3 text-sm transition-all focus:outline-none bg-white ${
            errors.message
              ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
              : "border-slate-300 focus:border-[#0066cc] focus:ring-2 focus:ring-[#0066cc]/20"
          }`}
          placeholder="Tell us about your project or inquiry..."
        />
        {errors.message && (
          <p className="mt-1 flex items-center gap-1 text-xs text-red-600">
            <AlertCircle className="h-3 w-3" />
            {errors.message}
          </p>
        )}
      </div>

      <RainbowButton
        type="submit"
        disabled={isSubmitting}
        className="w-full"
        size="lg"
      >
        {isSubmitting ? (
          <>
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </RainbowButton>
    </form>
  )
}
