"use client"

interface ClientLogoProps {
  name: string
  gradient: string
}

export default function ClientLogo({ name, gradient }: ClientLogoProps) {
  const initials = name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .slice(0, 2)

  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} text-lg font-bold uppercase text-white shadow-lg shadow-blue-500/20 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl`}
      >
        {initials}
      </div>
      <p className="text-sm font-semibold text-slate-700">{name}</p>
    </div>
  )
}

