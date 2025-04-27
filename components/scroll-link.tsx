"use client"

import type React from "react"

import type { ReactNode } from "react"

interface ScrollLinkProps {
  href: string
  children: ReactNode
  className?: string
}

export default function ScrollLink({ href, children, className }: ScrollLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    // Remove the # from the href
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)

    if (element) {
      // Scroll to the element
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })

      // Update the URL without causing a page reload
      window.history.pushState({}, "", href)
    }
  }

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}
