"use client"

import { Moon, Sun, Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Typewriter } from "react-simple-typewriter"
import { Particles } from "@tsparticles/react"
import { useTheme } from "next-themes"

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 -z-30">
        <Image
          src="/gettyimages-1346141988-640x640.jpg"
          alt="Background"
          fill
          className="object-cover opacity-5 dark:opacity-5"
          priority
          quality={100}
        />
      </div>
      
      {/* Tech Pattern Background */}
      <div className="fixed inset-0 -z-20 opacity-5 dark:opacity-10 mix-blend-multiply">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>
      
      {/* Gradient Orbs */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-background/90 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-primary dark:text-white">
              <span className="text-accent">U</span>rja
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/about" className="text-gray-600 dark:text-white hover:text-accent transition-colors">
                About
              </Link>
              <Link href="/projects" className="text-gray-600 dark:text-white hover:text-accent transition-colors">
                Projects
              </Link>
              <Link href="/skills" className="text-gray-600 dark:text-white hover:text-accent transition-colors">
                Skills
              </Link>
              <Link href="/contact" className="text-gray-600 dark:text-white hover:text-accent transition-colors">
                Contact
              </Link>
            </div>
            <button
              aria-label="Toggle Dark Mode"
              className="rounded-full p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Particles with updated config */}
        <div className="absolute inset-0 -z-10">
          <Particles
            options={{
              background: { color: { value: "transparent" } },
              fpsLimit: 60,
              interactivity: { 
                events: { 
                  onClick: { enable: true, mode: "push" },
                  onHover: { 
                    enable: true, 
                    mode: "repulse"
                  } 
                },
                modes: {
                  repulse: {
                    distance: 100,
                    duration: 0.4
                  }
                }
              },
              particles: {
                color: { value: theme === "dark" ? "#a78bfa" : "#6d28d9" },
                links: { 
                  enable: true, 
                  color: theme === "dark" ? "#a78bfa" : "#6d28d9",
                  distance: 150,
                  opacity: 0.3
                },
                move: { 
                  enable: true, 
                  speed: 1,
                  direction: "none",
                  random: true,
                  straight: false,
                  outModes: "out"
                },
                number: { value: 40 },
                opacity: { value: 0.3 },
                shape: { type: "circle" },
                size: { value: 3 },
              },
            }}
          />
        </div>

        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-8 relative group"
            >
              <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-accent shadow-xl">
                <Image src="/urjasaree (2).jpg" alt="Urja Saha" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-48 h-48 bg-accent/10 rounded-full blur-3xl -z-10"></div>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold text-primary dark:text-white mb-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              HI, I'm Urja Saha
            </motion.h1>

            <motion.h2
              className="text-xl md:text-2xl text-gray-600 dark:text-white mb-8 max-w-2xl min-h-[2.5rem]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Typewriter
                words={[
                  "Engineering Student | Tech Enthusiast | UX Design Learner",
                  "Passionate about blending technology and creativity to solve real-world problems."
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={40}
                deleteSpeed={30}
                delaySpeed={2000}
              />
            </motion.h2>

            <motion.div
              className="flex flex-col sm:flex-row items-center gap-4 mb-12"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                href="/about"
                className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center group"
              >
                Explore My Work
                <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="/urja_resume.pdf"
                className="px-8 py-3 bg-accent/10 text-accent rounded-full hover:bg-accent/20 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center"
              >
                Download Resume
                <Download className="ml-2 w-4 h-4" />
              </a>
            </motion.div>

            <motion.div
              className="flex items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <a
                href="https://github.com/01urja01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-accent transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/urja-saha-a4755523a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-accent transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:urja.saha23@spit.ac.in"
                className="text-gray-600 dark:text-gray-300 hover:text-accent transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </motion.div>

            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Currently available for opportunities
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
