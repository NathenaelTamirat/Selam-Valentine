"use client"

import { useEffect, useState } from "react"

const images = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-02-13%2021.26.03-eMhPoX7ZgWVKGRFxKrsvxhKfTW7y4v.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-02-13%2021.26.00-pgSN6xJpJEChYtAM1dHQWTtlXn9Aws.jpeg",
]

export function BackgroundSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 z-0" aria-hidden="true">
      {images.map((src, index) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-[2000ms] ease-in-out"
          style={{ opacity: index === currentIndex ? 1 : 0 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      ))}
      {/* Dark overlay with romantic tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(30,0,10,0.65)] via-[rgba(60,0,20,0.55)] to-[rgba(30,0,10,0.7)]" />
    </div>
  )
}
