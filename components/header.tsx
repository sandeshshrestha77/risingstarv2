"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet";
import Link from "next/link";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper to render nav links with active highlighting
  const renderNavLinks = (isMobile = false, onNavClick?: () => void) => (
    <>
      {NAV_ITEMS.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={
              isMobile
                ? `text-lg font-medium py-2 px-4 rounded-lg transition-colors ${
                    isActive
                      ? "text-primary bg-gray-800/70 underline underline-offset-4 decoration-2"
                      : "text-gray-300 hover:text-primary hover:bg-gray-800/50"
                  }`
                : `text-sm flex items-center transition-all duration-300 ${
                    isActive
                      ? "text-primary font-semibold border-b-2 border-primary pb-0.5"
                      : "text-gray-300 hover:text-primary hover:border-b-2 hover:border-primary"
                  }`
            }
            style={isMobile ? {} : {minHeight: '40px'}}
            onClick={onNavClick}
          >
            {item.label}
          </Link>
        );
      })}
    </>
  );

// Mobile Sheet with controlled open state
function SheetControlledNav() {
  const [open, setOpen] = useState(false);
  const handleNavClick = () => setOpen(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="outline" 
          size="icon" 
          className="bg-black/70 backdrop-blur-md hover:bg-gray-800/70 border-gray-700 text-white shadow-lg"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent 
        className="bg-black/70 backdrop-blur-xl w-[75vw] max-w-[400px] sm:w-[400px] border-l border-gray-800"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <SheetHeader>
          <SheetTitle className="text-left text-lg font-semibold text-white">
            Menu
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4 mt-6">
          {renderNavLinks(true, handleNavClick)}
          <Link 
            href="https://surveyheart.com/form/6804a758e96bdb66c8dfc332" 
            passHref 
            legacyBehavior
          >
            <Button 
              asChild
              className="bg-primary text-white hover:bg-primary/90 rounded-full w-full mt-2"
              onClick={handleNavClick}
            >
              <a target="_blank" rel="noopener noreferrer">Register Now</a>
            </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}

  return (
    <header
      className={`fixed top-3.5 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-2xl shadow-lg ${
        isScrolled
          ? "h-12 bg-black/60 backdrop-blur-2xl border border-gray-800 scale-95 w-[92%] max-w-2xl"
          : "h-14 bg-black/50 backdrop-blur-lg w-[96%] max-w-3xl"
      }`}
      style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.10)' }}
      role="banner"
    >
      <div className="mx-auto h-full px-4">
        <nav className="relative flex items-center h-full" aria-label="Main navigation">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md"
            aria-label="Go to homepage"
          >
            <img 
              src="/logo.png"
              alt="SIKKIM Rising Star logo" 
              className="h-8 w-auto"
              width={80}
              height={80}
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex flex-1 items-center justify-center relative">
            <div className="flex items-center gap-4">
              {renderNavLinks(false)}
            </div>
          </div>

          {/* Register Now Button - Right aligned */}
          <div className="hidden md:flex flex-shrink-0 items-center ml-auto">
            <Link href="https://surveyheart.com/form/6804a758e96bdb66c8dfc332" passHref legacyBehavior>
              <Button 
                asChild
                size="sm"
                className="bg-primary text-white hover:bg-primary/90 rounded-2xl px-4 py-2 ml-2 shadow"
              >
                <a target="_blank" rel="noopener noreferrer">Register Now</a>
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex-1 flex items-center justify-end">
            {/* Control Sheet open state */}
            <SheetControlledNav />
          </div>
        </nav>
      </div>
    </header>
  );
}