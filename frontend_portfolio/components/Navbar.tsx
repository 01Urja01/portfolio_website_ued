"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const routes = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()

  // Prevent scroll when mobile menu is open
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Glass effect background */}
      <div className="absolute inset-0 bg-background/70 backdrop-blur-lg border-b"></div>
      
      <nav className="container relative flex items-center justify-between h-16 px-4 mx-auto">
        {/* Logo/Name */}
        <Link 
          href="/" 
          className="relative font-bold text-xl tracking-tight hover:text-primary transition-colors"
        >
          Urja Saha
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="relative px-3 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-accent group"
            >
              {route.label}
              {pathname === route.href && (
                <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-primary/0 via-primary/70 to-primary/0"></span>
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden relative z-50 p-2 -mr-2 h-12 w-12 flex items-center justify-center rounded-lg hover:bg-accent transition-colors"
          aria-label="Open menu"
        >
          <div className="w-6 flex flex-col items-end space-y-1.5">
            <span className="w-full h-0.5 bg-foreground rounded-full"></span>
            <span className="w-2/3 h-0.5 bg-foreground rounded-full"></span>
            <span className="w-full h-0.5 bg-foreground rounded-full"></span>
          </div>
        </button>

        {/* Mobile Navigation Overlay */}
        {open && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setOpen(false)}
            />
            
            {/* Menu Panel */}
            <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-background p-6 shadow-lg z-50 border-l">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-lg font-semibold">Navigation</h2>
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-lg hover:bg-accent transition-colors"
                  aria-label="Close menu"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <nav className="space-y-2">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    onClick={() => setOpen(false)}
                    className={`block px-4 py-3 text-lg rounded-lg transition-colors ${
                      pathname === route.href 
                        ? "bg-primary/10 text-primary font-medium" 
                        : "hover:bg-accent"
                    }`}
                  >
                    {route.label}
                  </Link>
                ))}
              </nav>

              {/* Bottom section with social links or additional info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t">
                <p className="text-sm text-muted-foreground">
                  © 2024 Urja Saha
                </p>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  )
} 