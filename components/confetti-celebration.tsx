"use client"

import { useEffect, useState } from "react"

interface ConfettiPiece {
  id: number
  left: string
  color: string
  size: number
  delay: number
  duration: number
  rotation: number
}

const COLORS = [
  "#e0245e",
  "#ff6b81",
  "#ffb8c6",
  "#ff4757",
  "#ffa502",
  "#ff6348",
  "#f8b500",
  "#ffffff",
  "#ff69b4",
  "#c44569",
]

export function ConfettiCelebration() {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([])

  useEffect(() => {
    const generated: ConfettiPiece[] = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      size: Math.random() * 10 + 5,
      delay: Math.random() * 2,
      duration: Math.random() * 3 + 2,
      rotation: Math.random() * 360,
    }))
    setPieces(generated)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50" aria-hidden="true">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute top-0 animate-confetti-fall"
          style={{
            left: piece.left,
            width: `${piece.size}px`,
            height: `${piece.size * 0.6}px`,
            backgroundColor: piece.color,
            borderRadius: piece.id % 3 === 0 ? "50%" : "2px",
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
            transform: `rotate(${piece.rotation}deg)`,
            animationIterationCount: "infinite",
          }}
        />
      ))}
    </div>
  )
}
