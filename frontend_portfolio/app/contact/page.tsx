"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import ContactForm from "@/components/contact-form"
import SocialLinks from "@/components/social-links"

export default function ContactPage() {
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
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-4">
            Get in Touch
          </h1>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold text-primary dark:text-white mb-6">
              Contact Form
            </h2>
            <ContactForm />
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-semibold text-primary dark:text-white mb-6">
                Connect With Me
              </h2>
              <SocialLinks />
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-primary dark:text-white mb-4">
                Quick Contact
              </h3>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  <span className="font-semibold">Email:</span>
                  <br />
                  <a href="mailto:urja.saha23@spit.ac.in" className="text-accent hover:underline">
                    urja.saha23@spit.ac.in
                  </a>
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  <span className="font-semibold">Location:</span>
                  <br />
                  Mumbai, India
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-primary dark:text-white mb-4">
                Available For
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Full-time Opportunities</li>
                <li>• Freelance Projects</li>
                <li>• Technical Collaborations</li>
                <li>• Speaking Engagements</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
} 