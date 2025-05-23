import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/Navbar"

export const metadata: Metadata = {
  title: "Urja Saha Website",
  description:
    "Portfolio of Urja Saha: Engineering Student, Tech Enthusiast, and UX Design Learner. Explore projects, skills, and ways to connect!",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="pt-16">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
