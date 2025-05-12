"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", icon: "💻" },
      { name: "JavaScript", icon: "🌐" },
      { name: "Python", icon: "🐍" },
      { name: "C++", icon: "⚡" }
    ]
  },
  {
    title: "Web Technologies",
    skills: [
      { name: "React.js", icon: "⚛️" },
      { name: "Next.js", icon: "🔥" },
      { name: "HTML5 & CSS3", icon: "🎨" },
      { name: "Node.js", icon: "🟢" }
    ]
  },
  {
    title: "Blockchain & IoT",
    skills: [
      { name: "Hyperledger Fabric", icon: "🔗" },
      { name: "Smart Contracts", icon: "📝" },
      { name: "LoRa Technology", icon: "📡" },
      { name: "IoT Protocols", icon: "🌐" }
    ]
  },
  {
    title: "Design & Tools",
    skills: [
      { name: "Figma", icon: "🎯" },
      { name: "UI/UX Design", icon: "🎨" },
      { name: "Git & GitHub", icon: "🔄" },
      { name: "Adobe XD", icon: "✨" }
    ]
  }
]

export default function SkillsPage() {
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
            Skills & Expertise
          </h1>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My technical toolkit is constantly evolving. Here are the technologies and skills I've mastered 
            through hands-on experience and continuous learning.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={item}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold text-primary dark:text-white mb-4">
                {category.title}
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-2 p-2 rounded-lg hover:bg-accent/10 transition-colors"
                  >
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-semibold text-primary dark:text-white mb-4">
            Always Learning
          </h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technology never stands still, and neither do I. I'm constantly exploring new tools and 
            frameworks to stay at the forefront of innovation.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
} 