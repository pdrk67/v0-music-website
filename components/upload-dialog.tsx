"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface UploadDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function UploadDialog({ open, onOpenChange }: UploadDialogProps) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [file, setFile] = useState<File | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Upload submitted!\nTitle: ${title}\nDescription: ${description}\nFile: ${file?.name || "No file"}`)
    setTitle("")
    setDescription("")
    setFile(null)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-background border-2 border-primary font-mono max-w-md">
        <DialogHeader>
          <DialogTitle className="text-primary text-xl font-bold">UPLOAD IMAGE</DialogTitle>
          <DialogDescription className="text-accent">Share your art with the community</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title" className="text-foreground">
              Title
            </Label>
            <Input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-background border-primary text-foreground font-mono"
              placeholder="Enter image title..."
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description" className="text-foreground">
              Description
            </Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="bg-background border-primary text-foreground font-mono min-h-[100px]"
              placeholder="Describe your artwork..."
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="file" className="text-foreground">
              Image File
            </Label>
            <Input
              id="file"
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="bg-background border-primary text-foreground font-mono"
              required
            />
          </div>
          <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
            UPLOAD
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
