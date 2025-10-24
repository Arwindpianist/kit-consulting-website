"use client"

import { cn } from "@/lib/utils"
import React, { useEffect, useRef, useState } from "react"
import { createNoise3D } from "simplex-noise"

interface WavyBackgroundProps {
  children?: React.ReactNode
  className?: string
  containerClassName?: string
  colors?: string[]
  waveWidth?: number
  backgroundFill?: string
  blur?: number
  speed?: "slow" | "fast"
  waveOpacity?: number
  [key: string]: any
}

export const WavyBackground: React.FC<WavyBackgroundProps> = ({
  children,
  className,
  containerClassName,
  colors = ["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"],
  waveWidth = 50,
  backgroundFill = "white",
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}) => {
  const noise = createNoise3D()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isSafari, setIsSafari] = useState(false)

  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001
      case "fast":
        return 0.002
      default:
        return 0.001
    }
  }

  useEffect(() => {
    // Detect Safari
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    )
  }, [])

  const init = () => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (!canvas || !ctx) return

    let animationId: number
    let w = (canvas.width = window.innerWidth)
    let h = (canvas.height = window.innerHeight)
    ctx.filter = `blur(${blur}px)`
    let nt = 0

    const drawWave = (n: number) => {
      nt += getSpeed()
      for (let i = 0; i < n; i++) {
        ctx.beginPath()
        ctx.lineWidth = waveWidth
        ctx.strokeStyle = colors[i % colors.length]
        for (let x = 0; x < w; x += 5) {
          const y = noise(x / 800, 0.3 * i, nt) * 100
          ctx.lineTo(x, y + h * 0.5)
        }
        ctx.stroke()
        ctx.closePath()
      }
    }

    const render = () => {
      ctx.fillStyle = backgroundFill
      ctx.globalAlpha = waveOpacity
      ctx.fillRect(0, 0, w, h)
      drawWave(5)
      animationId = requestAnimationFrame(render)
    }

    const handleResize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
      ctx.filter = `blur(${blur}px)`
    }

    window.addEventListener("resize", handleResize)
    render()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", handleResize)
    }
  }

  useEffect(() => {
    const cleanup = init()
    return cleanup
  }, [colors, waveWidth, blur, speed, waveOpacity, backgroundFill])

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div
      className={cn(
        "flex h-full w-full flex-col items-center justify-center",
        containerClassName
      )}
      {...props}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      ></canvas>
      <div className={cn("relative z-10", className)} style={{ zIndex: 10 }}>
        {children}
      </div>
    </div>
  )
}

