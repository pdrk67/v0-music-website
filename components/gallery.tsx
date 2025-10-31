"use client"

import Image from "next/image"

export function Gallery() {
  const items = Array.from({ length: 16 }, (_, i) => i + 1)

  const descriptions = [
    "pink dreams ♡",
    "neon nights",
    "sunset vibes",
    "retro graphics",
    "sparkle & shine",
    "music lover",
    "pixel paradise",
    "glitch effect",
    "kawaii cuteness",
    "synthwave dreams",
    "neko girl ♡",
    "cosmic journey",
    "aesthetic statue",
    "90s nostalgia",
    "cyber princess",
    "butterfly magic",
  ]

  return (
    <main className="flex-1 p-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <div key={item} className="group cursor-pointer">
            <div className="aspect-square bg-card border-2 border-primary/30 hover:border-primary transition-colors relative overflow-hidden">
              <Image src="/kouon.jpg" alt={`Gallery image ${item}`} fill className="object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-background/90 border-t border-primary/50 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-primary text-xs font-bold">IMAGE_{item.toString().padStart(3, "0")}</p>
                <p className="text-muted-foreground text-xs">2003.12.{item.toString().padStart(2, "0")}</p>
              </div>
            </div>
            <p className="text-[#FF1493] text-sm font-mono mt-2 text-center">{descriptions[item - 1]}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
