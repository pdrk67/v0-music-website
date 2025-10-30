"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { AuthDialog } from "./auth-dialog"
import { UploadDialog } from "./upload-dialog"
import { LeaderboardDialog } from "./leaderboard-dialog"

export function Header() {
  const [authDialogOpen, setAuthDialogOpen] = useState(false)
  const [authMode, setAuthMode] = useState<"login" | "register">("login")
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false)
  const [leaderboardDialogOpen, setLeaderboardDialogOpen] = useState(false)

  const handleAuthClick = (mode: "login" | "register") => {
    setAuthMode(mode)
    setAuthDialogOpen(true)
  }

  return (
    <>
      <header className="relative border-b-2 border-primary">
        {/* Top section with matrix code indicator */}
        <div className="bg-background border-b border-primary/30 px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-24 h-8 bg-primary/20 border border-primary flex items-center justify-center">
              <span className="text-primary text-xs font-mono">ONLINE</span>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <h1 className="text-primary font-mono text-lg font-bold tracking-wider">NUM SEI O QUE LÁ RECORDS</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-foreground hover:text-primary hover:bg-primary/10"
              onClick={() => handleAuthClick("register")}
            >
              REGISTER
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-foreground hover:text-primary hover:bg-primary/10"
              onClick={() => handleAuthClick("login")}
            >
              LOGIN
            </Button>
          </div>
        </div>

        {/* Main header with geometric shapes */}
        <div className="relative bg-secondary h-32 overflow-hidden">
          {/* Geometric shapes */}
          <div className="absolute right-0 top-0 w-64 h-full">
            <svg viewBox="0 0 200 100" className="w-full h-full">
              <polygon points="0,0 100,0 150,100 50,100" fill="#7cb342" opacity="0.8" />
              <polygon points="100,0 200,0 200,100 150,100" fill="#558b2f" opacity="0.6" />
            </svg>
          </div>

          {/* Navigation */}
          <div className="relative z-10 flex items-center h-full px-8">
            <nav className="flex gap-4">
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold"
                onClick={() => setUploadDialogOpen(true)}
              >
                UPLOAD
              </Button>
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold"
                onClick={() => setLeaderboardDialogOpen(true)}
              >
                LEADERBOARD
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <AuthDialog open={authDialogOpen} onOpenChange={setAuthDialogOpen} mode={authMode} />
      <UploadDialog open={uploadDialogOpen} onOpenChange={setUploadDialogOpen} />
      <LeaderboardDialog open={leaderboardDialogOpen} onOpenChange={setLeaderboardDialogOpen} />
    </>
  )
}
