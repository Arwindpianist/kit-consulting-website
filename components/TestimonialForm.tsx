"use client"

import { useState } from "react"
import { Star, Loader2, CheckCircle2, ArrowRight, ArrowLeft, User, Briefcase, MessageSquare, Award, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { motion, AnimatePresence } from "framer-motion"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"

type FormData = {
  name: string
  company: string
  projectType: string
  rating: number
  testimonial: string
  permissionToPublish: boolean
}

const steps = [
  { id: 1, title: "Quick Info", icon: User },
  { id: 2, title: "Rate Us", icon: Award },
  { id: 3, title: "Your Feedback", icon: MessageSquare },
]

export default function TestimonialForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [rating, setRating] = useState<number>(0)
  const [hoveredRating, setHoveredRating] = useState<number>(0)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    projectType: "",
    rating: 0,
    testimonial: "",
    permissionToPublish: false,
  })

  const updateFormData = (field: keyof FormData, value: string | number | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        if (!formData.name || !formData.company || !formData.projectType) {
          toast.error("Please fill in all required fields")
          return false
        }
        return true
      case 2:
        if (rating === 0) {
          toast.error("Please provide a rating")
          return false
        }
        return true
      case 3:
        if (!formData.testimonial || formData.testimonial.length < 30) {
          toast.error("Please write at least 30 characters")
          return false
        }
        return true
      default:
        return true
    }
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
      if (currentStep === 2) updateFormData("rating", rating)
      setCurrentStep(prev => Math.min(prev + 1, steps.length))
    }
  }

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)

    const data = {
      ...formData,
      rating: rating,
    }

    try {
      const response = await fetch("/api/testimonial", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to submit testimonial")
      }

      setIsSuccess(true)
      toast.success("Thank you! Your testimonial has been submitted successfully.")
    } catch (error) {
      toast.error("Failed to submit testimonial. Please try again.")
      console.error("Error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setCurrentStep(1)
    setIsSuccess(false)
    setRating(0)
    setFormData({
      name: "",
      company: "",
      projectType: "",
      rating: 0,
      testimonial: "",
      permissionToPublish: false,
    })
  }

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="py-12 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-lg"
        >
          <CheckCircle2 className="h-10 w-10 text-white" />
        </motion.div>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-3 text-3xl font-bold text-[#003366]"
        >
          Thank You!
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8 text-lg text-slate-600"
        >
          Your testimonial has been submitted successfully. We truly appreciate your feedback!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Button
            onClick={resetForm}
            className="bg-blue-600 hover:bg-blue-700"
            size="lg"
          >
            Submit Another Testimonial
          </Button>
        </motion.div>
      </motion.div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-center gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isActive = currentStep === step.id
            const isCompleted = currentStep > step.id
            
            return (
              <div key={step.id} className="flex items-center">
                <div className="flex flex-col items-center gap-2">
                  <motion.div
                    initial={false}
                    animate={{
                      scale: isActive ? 1.1 : 1,
                      backgroundColor: isCompleted ? "#10b981" : isActive ? "#0066cc" : "#e5e7eb",
                    }}
                    className={cn(
                      "relative z-10 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full shadow-lg transition-all",
                      isActive && "ring-4 ring-blue-200"
                    )}
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    ) : (
                      <Icon className={cn("h-5 w-5 sm:h-6 sm:w-6", isActive || isCompleted ? "text-white" : "text-slate-400")} />
                    )}
                  </motion.div>
                  <span
                    className={cn(
                      "text-xs font-medium text-center whitespace-nowrap",
                      isActive ? "text-[#003366]" : "text-slate-400"
                    )}
                  >
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className="relative mx-3 sm:mx-4 w-12 sm:w-16 md:w-24">
                    <div className="h-1 bg-slate-200 rounded" />
                    <motion.div
                      initial={false}
                      animate={{
                        width: currentStep > step.id ? "100%" : "0%",
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-0 h-1 bg-green-500 rounded"
                    />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Step Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="min-h-[400px]"
        >
          {/* Step 1: Quick Info */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="mb-4 text-2xl font-bold text-[#003366]">Quick Information</h2>
              <p className="mb-6 text-slate-600">This will only take 2 minutes</p>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name <span className="text-red-500">*</span></Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => updateFormData("name", e.target.value)}
                    placeholder="John Doe"
                    className="border-slate-300 bg-white h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company <span className="text-red-500">*</span></Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => updateFormData("company", e.target.value)}
                    placeholder="Your Company Name"
                    className="border-slate-300 bg-white h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="projectType">Service We Provided <span className="text-red-500">*</span></Label>
                  <Select value={formData.projectType} onValueChange={(value) => updateFormData("projectType", value)}>
                    <SelectTrigger className="border-slate-300 bg-white h-12 font-medium">
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-slate-300 shadow-xl">
                      <SelectItem value="Tendering Support" className="cursor-pointer">
                        Tendering Support
                      </SelectItem>
                      <SelectItem value="Technical Due Diligence" className="cursor-pointer">
                        Technical Due Diligence
                      </SelectItem>
                      <SelectItem value="Remote Engineering" className="cursor-pointer">
                        Remote Engineering
                      </SelectItem>
                      <SelectItem value="Other" className="cursor-pointer">
                        Other
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Rating */}
          {currentStep === 2 && (
            <div className="flex flex-col items-center justify-center space-y-8 py-12">
              <h2 className="text-center text-2xl font-bold text-[#003366]">How would you rate your experience?</h2>
              <div className="flex gap-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <motion.button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="transition-all"
                  >
                    <Star
                      className={cn(
                        "h-16 w-16 transition-all",
                        star <= (hoveredRating || rating)
                          ? "fill-yellow-400 text-yellow-400 drop-shadow-lg"
                          : "text-slate-300"
                      )}
                    />
                  </motion.button>
                ))}
              </div>
              {rating > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center"
                >
                  <p className="text-3xl font-bold text-[#003366]">{rating} out of 5 stars</p>
                  <p className="text-slate-600">
                    {rating === 5 && "Excellent! We're thrilled!"}
                    {rating === 4 && "Great! Thank you!"}
                    {rating === 3 && "Good! We appreciate your feedback"}
                    {rating === 2 && "Thank you for your honesty"}
                    {rating === 1 && "We'd love to hear how we can improve"}
                  </p>
                </motion.div>
              )}
            </div>
          )}

          {/* Step 3: Feedback */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="mb-6 text-2xl font-bold text-[#003366]">Share your experience</h2>
              <div className="space-y-2">
                <Label htmlFor="testimonial">Your Feedback <span className="text-red-500">*</span></Label>
                <Textarea
                  id="testimonial"
                  value={formData.testimonial}
                  onChange={(e) => updateFormData("testimonial", e.target.value)}
                  rows={6}
                  placeholder="What was your experience working with KIT Consulting? A brief sentence or two is perfect."
                  className="border-slate-300 bg-white"
                />
                <div className="flex justify-between text-xs text-slate-500">
                  <span>Keep it brief - quality over quantity</span>
                  <span className={cn(formData.testimonial.length >= 30 ? "text-green-600" : "")}>
                    {formData.testimonial.length} characters
                  </span>
                </div>
              </div>

              {/* Preview Box */}
              {formData.testimonial && formData.testimonial.length >= 30 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-lg border-2 border-green-200 bg-green-50 p-4"
                >
                  <p className="mb-2 text-xs font-semibold text-green-700">PREVIEW</p>
                  <div className="flex gap-3">
                    <div className="h-12 w-12 shrink-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold">
                      {formData.name.split(" ").map(n => n[0]).join("").toUpperCase()}
                    </div>
                    <div className="flex-1">
                      <div className="flex gap-1 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={cn(
                              "h-3 w-3",
                              i < rating ? "fill-yellow-400 text-yellow-400" : "text-slate-300"
                            )}
                          />
                        ))}
                      </div>
                      <p className="text-sm italic text-slate-700">"{formData.testimonial}"</p>
                      <p className="mt-1 text-xs text-slate-500">— {formData.name}, {formData.company}</p>
                    </div>
                  </div>
                </motion.div>
              )}

              <div className="flex items-start space-x-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
                <Checkbox
                  id="permissionToPublish"
                  checked={formData.permissionToPublish}
                  onCheckedChange={(checked) => updateFormData("permissionToPublish", checked as boolean)}
                />
                <div className="space-y-1 leading-none">
                  <Label htmlFor="permissionToPublish" className="text-sm font-medium leading-relaxed cursor-pointer">
                    I authorize KIT Consulting to publish this feedback
                  </Label>
                  <p className="text-xs text-slate-500">
                    Your name and company will be shown. We respect your privacy.
                  </p>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between pt-6 border-t">
        <Button
          type="button"
          onClick={prevStep}
          disabled={currentStep === 1}
          variant="outline"
          className={cn(currentStep === 1 && "invisible")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        {currentStep < steps.length ? (
          <Button
            type="button"
            onClick={nextStep}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Next
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        ) : (
          <Button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="bg-green-600 hover:bg-green-700"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                Submit Testimonial
                <CheckCircle2 className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        )}
      </div>
    </div>
  )
}

