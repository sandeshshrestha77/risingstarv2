"use client"

import { useState } from "react"
import Image from "next/image"
import { Eye } from "lucide-react"
import ImageLightbox from "./image-lightbox"

interface GalleryImageProps {
  src: string
  alt: string
  index: number
  allImages: string[]
}

export default function GalleryImage({ src, alt, index, allImages }: GalleryImageProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  return (
    <>
      <div
        className="relative aspect-square sm:aspect-video overflow-hidden rounded-lg group cursor-pointer"
        onClick={() => setIsLightboxOpen(true)}
      >
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          className="object-cover transition-all duration-300 group-hover:scale-110"
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-1 md:p-2">
            <Eye className="h-4 w-4 md:h-6 md:w-6 text-white" />
          </div>
        </div>
      </div>

      {isLightboxOpen && (
        <ImageLightbox images={allImages} initialIndex={index} onClose={() => setIsLightboxOpen(false)} />
      )}
    </>
  )
}
