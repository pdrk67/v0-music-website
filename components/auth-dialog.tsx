"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface AuthDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  mode: "login" | "register"
}

export function AuthDialog({ open, onOpenChange, mode }: AuthDialogProps) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Just for show - display alert
    if (mode === "login") {
      alert(`Welcome back, ${username}! (Demo login - no actual authentication)`)
    } else {
      alert(`Account created for ${username}! (Demo registration - no actual database)`)
    }
    onOpenChange(false)
    // Reset form
    setUsername("")
    setPassword("")
    setEmail("")
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-background border-2 border-primary sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-primary font-bold text-xl">
            {mode === "login" ? ">>> LOGIN" : ">>> REGISTER"}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground font-mono text-xs">
            {mode === "login"
              ? "Enter your credentials to access the gallery"
              : "Create a new account to join the community"}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          {mode === "register" && (
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-mono text-sm">
                EMAIL
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-background border-primary/50 focus:border-primary text-foreground font-mono"
                placeholder="user@example.com"
              />
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="username" className="text-foreground font-mono text-sm">
              USERNAME
            </Label>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="bg-background border-primary/50 focus:border-primary text-foreground font-mono"
              placeholder="cooluser2003"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-foreground font-mono text-sm">
              PASSWORD
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-background border-primary/50 focus:border-primary text-foreground font-mono"
              placeholder="••••••••"
            />
          </div>
          <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
            {mode === "login" ? "LOGIN >>>" : "CREATE ACCOUNT >>>"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
