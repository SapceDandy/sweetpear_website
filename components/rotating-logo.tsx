"use client"

import { useEffect, useState } from "react"

interface RotatingLogoProps {
  size?: "nav" | "hero"
}

export default function RotatingLogo({ size = "nav" }: RotatingLogoProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className={size === "hero" ? "w-full h-96" : "w-64 h-16"} />
  }

  const textClass = size === "hero" ? "text-8xl md:text-9xl font-black" : "text-3xl font-black"
  const containerClass = size === "hero" ? "w-full h-96" : "w-64 h-16"

  const createExtrusionLayers = () => {
    const layers = []
    const depth = 20 // Number of layers for depth

    for (let i = 0; i < depth; i++) {
      const zPos = -i * 2 // Each layer goes deeper
      const darkness = i / depth // Gradual darkening for depth
      const scale = 1 - i * 0.002 // Slight scaling for perspective

      layers.push(
        <div
          key={i}
          className={`
            absolute inset-0 flex items-center justify-center
            ${textClass}
            tracking-wider
          `}
          style={{
            fontFamily: "'Great Vibes', cursive",
            transform: `translateZ(${zPos}px) scale(${scale})`,
            color:
              i === 0
                ? "transparent" // Front layer uses gradient
                : `rgba(${Math.floor(220 - darkness * 100)}, ${Math.floor(50 - darkness * 30)}, ${Math.floor(50 - darkness * 30)}, ${0.8 - darkness * 0.3})`,
            background: i === 0 ? "linear-gradient(45deg, #ef4444, #eab308, #22c55e)" : "none",
            WebkitBackgroundClip: i === 0 ? "text" : "initial",
            backgroundClip: i === 0 ? "text" : "initial",
            zIndex: depth - i,
          }}
        >
          SweetPear
        </div>,
      )
    }
    return layers
  }

  return (
    <div className={`flex items-center justify-center ${containerClass}`}>
      <div
        className="relative animate-rotate-y transform-gpu"
        style={{
          perspective: "1500px",
          transformStyle: "preserve-3d",
        }}
      >
        {createExtrusionLayers()}
        <div
          className="absolute inset-0 animate-shimmer pointer-events-none overflow-hidden"
          style={{
            background: "linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.8) 50%, transparent 75%)",
            transform: "translateX(-100%) skewX(-15deg)",
            zIndex: 25,
            mixBlendMode: "screen",
            width: "200%",
            height: "100%",
          }}
        />
      </div>
    </div>
  )
}

export { RotatingLogo }
