"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface LeaderboardDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const mockLeaderboard = [
  { rank: 1, username: "cyb3r_angel", score: 9999, avatar: "🌸" },
  { rank: 2, username: "neon_dreamer", score: 8888, avatar: "✨" },
  { rank: 3, username: "pixel_princess", score: 7777, avatar: "💖" },
  { rank: 4, username: "vaporwave_kid", score: 6666, avatar: "🌊" },
  { rank: 5, username: "retro_artist", score: 5555, avatar: "🎨" },
  { rank: 6, username: "glitch_master", score: 4444, avatar: "⚡" },
  { rank: 7, username: "anime_lover", score: 3333, avatar: "🌙" },
  { rank: 8, username: "y2k_aesthetic", score: 2222, avatar: "💫" },
]

export function LeaderboardDialog({ open, onOpenChange }: LeaderboardDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-background border-2 border-primary font-mono max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-primary text-xl font-bold">LEADERBOARD</DialogTitle>
          <DialogDescription className="text-accent">Top artists this month</DialogDescription>
        </DialogHeader>
        <div className="space-y-2">
          {mockLeaderboard.map((entry) => (
            <div
              key={entry.rank}
              className="flex items-center justify-between p-3 bg-background border border-primary/30 hover:border-primary transition-colors"
            >
              <div className="flex items-center gap-4">
                <span className="text-primary font-bold text-lg w-8">#{entry.rank}</span>
                <span className="text-2xl">{entry.avatar}</span>
                <span className="text-accent font-bold">{entry.username}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary font-bold">{entry.score.toLocaleString()}</span>
                <span className="text-foreground/60 text-sm">pts</span>
              </div>
            </div>
          ))}
        </div>
        <Button
          onClick={() => onOpenChange(false)}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold mt-4"
        >
          CLOSE
        </Button>
      </DialogContent>
    </Dialog>
  )
}
