"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "NFC Smart Attendance",
    description: "Fingerprint-activated NFC attendance system secured by blockchain (Hyperledger Fabric). Built with security and efficiency in mind, this system revolutionizes traditional attendance tracking.",
    image: "/zen-tap-wthout-bg.png",
    tags: ["Blockchain", "NFC", "Hyperledger Fabric", "Security"]
  },
  {
    title: "SwiftClaim",
    description: "Blockchain-powered smart insurance claim platform using smart contracts and AI-driven fraud detection. Streamlines the claims process while ensuring security and transparency.",
    image: "/logo-white-bg.png",
    tags: ["Blockchain", "Smart Contracts", "AI", "Insurance Tech"]
  },
  {
    title: "Long-Range Communication for Mining Workers",
    description: "LoRa-based communication system ensuring safety and connectivity for underground mining workers. Features real-time tracking and emergency alerts.",
    image: "/download.png",
    tags: ["LoRa", "IoT", "Safety", "Real-time Tracking"]
  }
]

export default function ProjectsPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  }

  return (
    <div className="min-h-screen bg-background text-foreground py-20 px-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto max-w-6xl"
      >
        <Link 
          href="/"
          className="inline-flex items-center text-accent hover:text-accent/80 mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-4">
            My Projects
          </h1>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={item}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transform hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
} 