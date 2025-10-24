"use client"

import { useEffect, useRef, useState } from "react"
import { createNoise3D } from "simplex-noise"
import { motion } from "framer-motion"

interface VortexProps {
  particleCount?: number
  rangeY?: number
  baseHue?: number
  rangeHue?: number
  baseSpeed?: number
  rangeSpeed?: number
  baseRadius?: number
  rangeRadius?: number
  backgroundColor?: string
  className?: string
  children?: React.ReactNode
}

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  hue: number
  speed: number
}

export function Vortex({
  particleCount = 700,
  rangeY = 800,
  baseHue = 220,
  rangeHue = 100,
  baseSpeed = 0.0,
  rangeSpeed = 1.5,
  baseRadius = 1,
  rangeRadius = 2,
  backgroundColor = "#000020",
  className = "",
  children,
}: VortexProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      // Use window dimensions for fixed positioned elements
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || dimensions.width === 0) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = dimensions.width
    canvas.height = dimensions.height

    const noise3D = createNoise3D()
    const particles: Particle[] = []

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: 0,
        vy: 0,
        radius: baseRadius + Math.random() * rangeRadius,
        hue: baseHue + Math.random() * rangeHue,
        speed: baseSpeed + Math.random() * rangeSpeed,
      })
    }

    let animationFrameId: number
    let time = 0

    const animate = () => {
      time += 0.01

      // Clear canvas with background
      ctx.fillStyle = backgroundColor
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Set composite operation for glow effect
      const isLightBackground = backgroundColor.match(/#[def]|#[89abcdef]{2}[89abcdef]{2}[89abcdef]{2}/)
      ctx.globalCompositeOperation = "source-over"

      particles.forEach((particle) => {
        // Generate noise-based movement
        const noiseX = noise3D(particle.x * 0.008, particle.y * 0.008, time)
        const noiseY = noise3D(particle.x * 0.008 + 1000, particle.y * 0.008, time)

        // Calculate angle to center for vortex effect
        const centerX = canvas.width / 2
        const centerY = canvas.height / 2
        const dx = particle.x - centerX
        const dy = particle.y - centerY
        const distance = Math.sqrt(dx * dx + dy * dy)
        const angle = Math.atan2(dy, dx)

        // Combine vortex spiral with noise
        const spiralForce = 0.3
        const noiseForce = 2.0

        particle.vx = Math.cos(angle + Math.PI / 2) * spiralForce * particle.speed + noiseX * noiseForce
        particle.vy = Math.sin(angle + Math.PI / 2) * spiralForce * particle.speed + noiseY * noiseForce

        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw particle with glow (optimized for light backgrounds)
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.radius * 4
        )
        
        if (isLightBackground) {
          // Visible blue particles for light backgrounds
          gradient.addColorStop(0, `hsla(${particle.hue}, 90%, 55%, 0.6)`)
          gradient.addColorStop(0.4, `hsla(${particle.hue}, 85%, 60%, 0.3)`)
          gradient.addColorStop(1, `hsla(${particle.hue}, 80%, 65%, 0)`)
        } else {
          // Bright particles for dark backgrounds
          gradient.addColorStop(0, `hsla(${particle.hue}, 100%, 60%, 1)`)
          gradient.addColorStop(0.5, `hsla(${particle.hue}, 100%, 50%, 0.5)`)
          gradient.addColorStop(1, `hsla(${particle.hue}, 100%, 50%, 0)`)
        }

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius * 4, 0, Math.PI * 2)
        ctx.fill()
      })

      // Reset composite operation
      ctx.globalCompositeOperation = "source-over"

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [
    dimensions,
    particleCount,
    rangeY,
    baseHue,
    rangeHue,
    baseSpeed,
    rangeSpeed,
    baseRadius,
    rangeRadius,
    backgroundColor,
  ])

  return (
    <motion.div
      ref={containerRef}
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        style={{
          background: backgroundColor,
          pointerEvents: 'none',
        }}
      />
      <div className="relative z-10 h-full w-full">{children}</div>
    </motion.div>
  )
}

