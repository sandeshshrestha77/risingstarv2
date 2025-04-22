"use client"

import { useState, useCallback } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev)
  }, [])

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  return (
      <header className="sticky top-0 z-50 w-full bg-secondary text-white">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
          aria-label="Home"
          onClick={closeMenu}
        >
          <img 
            src="/logo.png" 
            alt="SIKKIM Rising Star Logo" 
            className="h-auto max-h-12 mix-blend-screen"
            width={120} 
            height={256}
          />
        </Link>

        {/* Centered Nav */}
        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-300 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm px-2 py-1"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right-aligned Button */}
        <div className="hidden md:flex">
          <Link href="/contact" legacyBehavior passHref>
            <Button 
              asChild
              className="bg-primary hover:bg-primary/90 transition-colors focus-visible:ring-2 focus-visible:ring-offset-2"
            >
              <a>Register Now</a>
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" 
          onClick={toggleMenu} 
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-gray-300" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6 text-gray-300" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute top-16 left-0 right-0 bg-secondary z-50 border-b transition-all duration-300 ease-in-out ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        aria-hidden={!isMenuOpen}
      >
        <nav className="container flex flex-col py-4 gap-2">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-300 hover:text-primary transition-colors px-4 py-2 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
          <div className="px-4 mt-2">
            <Link href="https://surveyheart.com/form/6804a758e96bdb66c8dfc332" passHref legacyBehavior>
              <Button 
                asChild
                className="w-full bg-primary hover:bg-primary/90 transition-colors focus-visible:ring-2 focus-visible:ring-offset-2"
                onClick={closeMenu}
              >
                <a>Register Now</a>
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
