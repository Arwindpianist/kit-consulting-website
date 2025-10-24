"use client"

import { useState } from "react"

interface ClientLogoProps {
  name: string
  logo: string
}

export default function ClientLogo({ name, logo }: ClientLogoProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="flex flex-col items-center gap-3">
      {!imageError ? (
        <img
          src={logo}
          alt={`${name} logo`}
          className="h-12 w-12 object-contain grayscale hover:grayscale-0 transition-all"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white text-xl font-bold">
          {name.charAt(0)}
        </div>
      )}
      <p className="text-sm font-semibold text-slate-700">{name}</p>
    </div>
  )
}

