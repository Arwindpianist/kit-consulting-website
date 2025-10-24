"use client"

import { Particles } from "@/components/ui/shadcn-io/particles"

export default function GlobalParticles() {
  return (
    <div className="fixed inset-0 z-0">
      <Particles
        className="h-full w-full"
        quantity={200}
        ease={80}
        staticity={40}
        color="#3b82f6"
        size={1.5}
        refresh={false}
      />
    </div>
  )
}

