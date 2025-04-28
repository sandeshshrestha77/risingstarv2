"use client"

import { Facebook, Linkedin, Twitter } from "lucide-react"
import { getShareUrl } from "@/lib/blog"
import { Button } from "@/components/ui/button"

interface ShareButtonsProps {
  url: string
  title: string
}

export function ShareButtons({ url, title }: ShareButtonsProps) {
  const fullUrl = typeof window !== "undefined" ? `${window.location.origin}${url}` : url

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium text-gray-600">Share:</span>
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8 rounded-full"
        onClick={() => window.open(getShareUrl("twitter", fullUrl, title), "_blank")}
        aria-label="Share on Twitter"
      >
        <Twitter className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8 rounded-full"
        onClick={() => window.open(getShareUrl("facebook", fullUrl, title), "_blank")}
        aria-label="Share on Facebook"
      >
        <Facebook className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8 rounded-full"
        onClick={() => window.open(getShareUrl("linkedin", fullUrl, title), "_blank")}
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="h-4 w-4" />
      </Button>
    </div>
  )
}
