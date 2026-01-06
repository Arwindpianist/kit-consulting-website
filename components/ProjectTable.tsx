"use client"

import { useState } from "react"
import type { Project } from "@/lib/types"

interface ProjectTableProps {
  projects: Project[]
}

export default function ProjectTable({ projects }: ProjectTableProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const categories = [
    { value: "all", label: "All Projects" },
    { value: "TSS", label: "Tendering Support" },
    { value: "TDD", label: "Technical Due Diligence" },
    { value: "RE", label: "Remote Engineering" },
  ]

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.scope.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.client.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div>
      {/* Filters */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <input
          type="text"
          placeholder="Search projects or clients..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 rounded-xl border-2 border-gray-200 px-4 py-3 text-sm transition-all focus:border-[#0066cc] focus:outline-none focus:ring-2 focus:ring-[#0066cc]/20"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="rounded-xl border-2 border-gray-200 px-4 py-3 text-sm transition-all focus:border-[#0066cc] focus:outline-none focus:ring-2 focus:ring-[#0066cc]/20 md:min-w-[220px]"
        >
          {categories.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>
      </div>

      {/* Desktop Table */}
      <div className="hidden overflow-hidden rounded-2xl border-2 border-gray-200 bg-white shadow-md md:block">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-[#003366] to-[#0066cc] text-white">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold">Scope</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Year</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Client</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">Category</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredProjects.map((project, index) => (
              <tr 
                key={project.id} 
                className={`transition-colors hover:bg-[#0066cc]/5 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
              >
                <td className="px-6 py-4 text-sm font-medium text-[#003366]">{project.scope}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{project.year}</td>
                <td className="px-6 py-4 text-sm font-semibold text-[#0066cc]">{project.client}</td>
                <td className="px-6 py-4">
                  <span className="inline-flex rounded-full bg-gradient-to-r from-[#003366] to-[#0066cc] px-3 py-1 text-xs font-medium text-white">
                    {project.category}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="space-y-4 md:hidden">
        {filteredProjects.map((project) => (
          <div key={project.id} className="rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-md transition-all hover:border-[#0066cc]/50 hover:shadow-lg">
            <div className="mb-3 flex items-start justify-between gap-2">
              <h3 className="text-sm font-semibold text-[#003366]">{project.scope}</h3>
              <span className="inline-flex flex-shrink-0 rounded-full bg-gradient-to-r from-[#003366] to-[#0066cc] px-3 py-1 text-xs font-medium text-white">
                {project.category}
              </span>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-gray-600">
                <span className="font-semibold text-[#003366]">Client:</span>{" "}
                <span className="font-medium text-[#0066cc]">{project.client}</span>
              </p>
              <p className="text-gray-600">
                <span className="font-semibold text-[#003366]">Year:</span> {project.year}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredProjects.length === 0 && (
        <div className="rounded-2xl border-2 border-gray-200 bg-white p-12 text-center shadow-md">
          <p className="text-lg text-gray-600">No projects found matching your criteria.</p>
          <p className="mt-2 text-sm text-gray-500">Try adjusting your search or filter options.</p>
        </div>
      )}
    </div>
  )
}
