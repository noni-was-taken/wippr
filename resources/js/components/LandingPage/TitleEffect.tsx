import { motion } from "motion/react"
import React, { useState } from "react"

export default function TitleEffect() {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <motion.div
      className="relative w-full h-40 -translate-x-2/7 flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Base text (always visible) */}
      <span className="text-8xl font-light text-white font-serif select-none">
        Welcome to Wippr.
      </span>

      {/* Masked overlay text */}
      <motion.span
        className="absolute inset-0 flex items-center justify-center text-8xl font-extrabold text-amber-600 font-serif select-none"
        style={{
          WebkitMaskImage: `radial-gradient(circle 120px at ${pos.x}px ${pos.y}px, white 0%, transparent 80%)`,
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "cover",
        }}
        transition={{ type: "tween", duration: 0.2 }}
      >
        Welcome to Wippr.
      </motion.span>
    </motion.div>
  )
}
