"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-20 px-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto max-w-4xl"
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
          className="space-y-12"
        >
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-4">
              About Me
            </h1>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="md:w-1/3"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-accent shadow-xl transform hover:scale-105 transition-transform duration-300">
                <Image 
                  src="/urjasaree (2).jpg" 
                  alt="Urja Saha" 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            <motion.div 
              className="md:w-2/3 space-y-6"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Hello! I'm Urja Saha, a passionate final-year Electronics and Telecommunication Engineering student at Sardar Patel Institute of Technology (SPIT), Mumbai. My journey in technology has been driven by curiosity and creativity.
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                As someone who thrives at the intersection of technology and user-centered design, I find joy in creating solutions that make a real difference. Whether it's developing blockchain applications or crafting intuitive user experiences, I approach each project with enthusiasm and dedication.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Beyond my technical pursuits, I take pride in my role as the Chairperson of WIE-IEEE SPIT, where I lead initiatives to empower women in technology. This position has not only enhanced my leadership skills but also deepened my commitment to fostering diversity in tech.
              </p>

              <div className="pt-6">
                <h2 className="text-2xl font-semibold text-primary dark:text-white mb-4">What Drives Me</h2>
                <ul className="space-y-3">
                  <motion.li 
                    className="flex items-center space-x-3"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="h-2 w-2 bg-accent rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Innovation in Technology</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-center space-x-3"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="h-2 w-2 bg-accent rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">User-Centered Design</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-center space-x-3"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="h-2 w-2 bg-accent rounded-full"></span>
                    <span className="text-gray-700 dark:text-gray-300">Women Empowerment in Tech</span>
                  </motion.li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
} 