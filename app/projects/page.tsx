"use client"

import { useState } from "react"
import { ArrowRight, Building2, Search, Filter } from "lucide-react"
import BlurFade from "@/components/magicui/blur-fade"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import projectsData from "@/lib/data/projects.json"

const categoryMap: Record<string, { label: string; color: string }> = {
  TSS: { label: "Tendering Support", color: "bg-blue-100 text-blue-700 border-blue-200" },
  TDD: { label: "Technical Due Diligence", color: "bg-purple-100 text-purple-700 border-purple-200" },
  EPM: { label: "EPCC Project Management", color: "bg-green-100 text-green-700 border-green-200" },
  RE: { label: "Remote Engineering", color: "bg-orange-100 text-orange-700 border-orange-200" },
}

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedYear, setSelectedYear] = useState<string>("all")

  // Get unique years
  const years = Array.from(new Set(projectsData.map((p) => p.year))).sort().reverse()

  // Filter projects
  const filteredProjects = projectsData.filter((project) => {
    const matchesSearch =
      project.scope.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.client.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory
    const matchesYear = selectedYear === "all" || project.year === selectedYear
    return matchesSearch && matchesCategory && matchesYear
  })

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <BlurFade delay={0.1}>
              <Badge className="mb-4 bg-blue-100 text-blue-700">
                Our Portfolio
              </Badge>
            </BlurFade>

            <BlurFade delay={0.2}>
              <h1 className="mb-6 text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
                Projects That{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Drive Success
                </span>
              </h1>
            </BlurFade>

            <BlurFade delay={0.3}>
              <p className="text-xl text-slate-700">
                Explore our portfolio of successful engineering projects across the energy 
                and manufacturing sectors. Each project represents our commitment to excellence 
                and client satisfaction.
              </p>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="container-custom">
          {/* Filters */}
          <BlurFade delay={0.1}>
            <Card className="mb-8 border-2 bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  Filter Projects
                </CardTitle>
                <CardDescription>
                  Search and filter through our {projectsData.length} completed projects
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <Input
                    type="text"
                    placeholder="Search by project name or client..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

                {/* Category Filter */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Service Category
                  </label>
                  <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
                    <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
                      <TabsTrigger value="all">All</TabsTrigger>
                      <TabsTrigger value="TSS">Tendering</TabsTrigger>
                      <TabsTrigger value="TDD">Due Diligence</TabsTrigger>
                      <TabsTrigger value="EPM">EPCC</TabsTrigger>
                      <TabsTrigger value="RE">Remote Eng.</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>

                {/* Year Filter */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Project Year
                  </label>
                  <Tabs value={selectedYear} onValueChange={setSelectedYear}>
                    <TabsList className="flex flex-wrap gap-1 h-auto p-1">
                      <TabsTrigger value="all" className="flex-shrink-0">All Years</TabsTrigger>
                      {years.map((year) => (
                        <TabsTrigger key={year} value={year} className="flex-shrink-0">
                          {year}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </Tabs>
                </div>

                {/* Results count */}
                <div className="flex items-center justify-between border-t pt-4">
                  <p className="text-sm text-slate-600">
                    Showing <span className="font-semibold">{filteredProjects.length}</span> of{" "}
                    <span className="font-semibold">{projectsData.length}</span> projects
                  </p>
                  {(searchTerm || selectedCategory !== "all" || selectedYear !== "all") && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setSearchTerm("")
                        setSelectedCategory("all")
                        setSelectedYear("all")
                      }}
                    >
                      Clear Filters
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </BlurFade>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <BlurFade key={project.id} delay={0.1 + index * 0.05}>
                  <Card className="group flex h-full flex-col overflow-hidden border-2 bg-white/95 backdrop-blur-sm transition-all hover:border-blue-500 hover:shadow-xl hover:-translate-y-1">
                    <CardHeader>
                      <div className="mb-3 flex items-start justify-between">
                        <Badge className={categoryMap[project.category].color}>
                          {categoryMap[project.category].label}
                        </Badge>
                        <Badge variant="outline">{project.year}</Badge>
                      </div>
                      <CardTitle className="text-xl leading-tight">
                        {project.scope}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="flex flex-1 flex-col">
                      <div className="mb-4 flex items-center gap-2 text-sm text-slate-600">
                        <Building2 className="h-4 w-4" />
                        <span className="font-medium">{project.client}</span>
                      </div>
                      
                      <Button
                        variant="ghost"
                        size="sm"
                        className="mt-auto w-full justify-center text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                        asChild
                      >
                        <a href="/contact">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </BlurFade>
              ))}
            </div>
          ) : (
            <BlurFade delay={0.2}>
              <Card className="border-2 border-dashed bg-white/95 backdrop-blur-sm">
                <CardContent className="flex flex-col items-center justify-center py-16 text-center">
                  <Building2 className="mb-4 h-16 w-16 text-slate-300" />
                  <h3 className="mb-2 text-xl font-semibold text-slate-900">
                    No projects found
                  </h3>
                  <p className="mb-6 text-slate-600">
                    Try adjusting your filters or search terms
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchTerm("")
                      setSelectedCategory("all")
                      setSelectedYear("all")
                    }}
                  >
                    Clear All Filters
                  </Button>
                </CardContent>
              </Card>
            </BlurFade>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "50+", label: "Projects Completed" },
              { value: "15+", label: "Years Experience" },
              { value: "98%", label: "Success Rate" },
              { value: "30+", label: "Expert Team" },
            ].map((stat, index) => (
              <BlurFade key={index} delay={0.1 + index * 0.1}>
                <Card className="border-blue-200 bg-blue-50/95 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="mb-2 text-5xl font-bold text-blue-900">{stat.value}</div>
                    <p className="text-sm font-medium text-slate-700">{stat.label}</p>
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
              Ready to Start Your Project?
            </h2>
          </BlurFade>
          
          <BlurFade delay={0.2}>
            <p className="mb-8 text-xl text-slate-600">
              Let's discuss how we can help you achieve similar success.
            </p>
          </BlurFade>
          
          <BlurFade delay={0.3}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
              asChild
            >
              <a href="/contact">
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </BlurFade>
        </div>
      </section>
    </div>
  )
}
