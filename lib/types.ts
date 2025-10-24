export interface Project {
  id: number
  scope: string
  year: string
  client: string
  category: "TSS" | "TDD" | "EPM" | "RE"
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  slug: string
}

export interface ContactFormData {
  name: string
  email: string
  company: string
  message: string
}
