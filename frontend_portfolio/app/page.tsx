"use client"

import {
  ChevronDown,
  Code,
  Figma,
  Layout,
  LineChart,
  Palette,
  PenTool,
  Search,
  Smartphone,
  Sparkles,
  Workflow,
  Moon,
  Sun,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ProjectCard from "@/components/project-card"
import SkillBar from "@/components/skill-bar"
import ContactForm from "@/components/contact-form"
import SocialLinks from "@/components/social-links"
import { motion } from "framer-motion"
import { Typewriter } from "react-simple-typewriter"
import { Particles } from "@tsparticles/react"
import { useTheme } from "next-themes"

export default function Portfolio() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-background/80 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-primary dark:text-white">
              <span className="text-accent">U</span>rja
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="#about" className="text-gray-600 dark:text-white hover:text-accent transition-colors">
                About
              </Link>
              <Link href="#projects" className="text-gray-600 dark:text-white hover:text-accent transition-colors">
                Projects
              </Link>
              <Link href="#skills" className="text-gray-600 dark:text-white hover:text-accent transition-colors">
                Skills
              </Link>
              <Link href="#contact" className="text-gray-600 dark:text-white hover:text-accent transition-colors">
                Contact
              </Link>
            </div>
            <div className="flex items-center gap-4">
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
              <Link
                href="#contact"
                className="hidden md:inline-block px-6 py-2 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Animated Particles Background */}
        <div className="absolute inset-0 -z-10">
          <Particles
            options={{
              background: { color: { value: "#fff" } },
              fpsLimit: 60,
              interactivity: { events: { onClick: { enable: false }, onHover: { enable: false } } },
              particles: {
                color: { value: "#a78bfa" },
                links: { enable: true, color: "#a78bfa", distance: 150 },
                move: { enable: true, speed: 1 },
                number: { value: 40 },
                opacity: { value: 0.2 },
                shape: { type: "circle" },
                size: { value: 3 },
              },
            }}
          />
        </div>
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-primary dark:text-white mb-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              HI, I'm Urja Saha
            </motion.h1>
            <motion.h2
              className="text-xl md:text-2xl text-gray-600 dark:text-white mb-4 max-w-2xl min-h-[2.5rem]"
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
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                href="#projects"
                className="px-8 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-transform transform hover:scale-105 shadow-lg"
              >
                View My Work
              </Link>
              <Link
                href="#contact"
                className="px-8 py-3 bg-accent text-white rounded-md hover:bg-accent/90 transition-transform transform hover:scale-105 shadow-lg"
              >
                Contact Me
              </Link>
            </motion.div>
            <motion.div
              className="mt-10 mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-accent shadow-xl">
                <Image src="/urjasaree (2).jpg" alt="Urja Saha" fill className="object-cover" />
                <span className="absolute inset-0 rounded-full border-4 border-accent animate-pulse" style={{ boxShadow: '0 0 0 4px #a78bfa33' }}></span>
              </div>
            </motion.div>
            <Link
              href="#about"
              className="mt-8 animate-bounce text-gray-400 hover:text-accent transition-colors"
              aria-label="Scroll down to about section"
            >
              <ChevronDown size={32} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-background transition-colors duration-300">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-12 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3">
              <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image src="/urjasaree (2).jpg" alt="Urja Saha" fill className="object-cover" />
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-700 dark:text-white mb-6 leading-relaxed">
                I'm Urja Saha, a final-year Electronics and Telecommunication Engineering student at Sardar Patel Institute of Technology (SPIT), Mumbai.
              </p>
              <p className="text-gray-700 dark:text-white mb-6 leading-relaxed">
                I am passionate about exploring the intersection of technology and user-centered design. From blockchain-powered applications to intuitive user experiences, I love building solutions that create impact.
              </p>
              <p className="text-gray-700 dark:text-white leading-relaxed">
                Beyond coding, I enjoy participating in hackathons, designing prototypes, and leading initiatives that empower women in tech as Chairperson of WIE-IEEE SPIT.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="NFC Smart Attendance"
              description="Fingerprint-activated NFC attendance system secured by blockchain (Hyperledger Fabric)."
              tags={["Blockchain", "NFC", "Hyperledger Fabric"]}
              imageUrl="/zen-tap-wthout-bg.png"
            />
            <ProjectCard
              title="SwiftClaim"
              description="Blockchain-powered smart insurance claim platform using smart contracts and AI-driven fraud detection."
              tags={["Blockchain", "Smart Contracts", "AI"]}
              imageUrl="/logo-white-bg.png"
            />
            <ProjectCard
              title="Long-Range Communication for Mining Workers"
              description="Built a LoRa-based communication system for underground mining safety."
              tags={["LoRa", "IoT", "Safety"]}
              imageUrl="/download.png"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 dark:bg-background transition-colors duration-300">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-12 text-center">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold text-primary dark:text-white mb-6 flex items-center">
                <Code className="mr-2 text-accent" size={24} />
                Languages and Frameworks
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-white p-2 rounded-full shadow-sm">
                    <Code size={20} className="text-accent" />
                  </div>
                  <SkillBar skill="Java" percentage={90} />
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-white p-2 rounded-full shadow-sm">
                    <Code size={20} className="text-accent" />
                  </div>
                  <SkillBar skill="JavaScript" percentage={85} />
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-white p-2 rounded-full shadow-sm">
                    <Layout size={20} className="text-accent" />
                  </div>
                  <SkillBar skill="HTML5 & CSS3" percentage={95} />
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-white p-2 rounded-full shadow-sm">
                    <Code size={20} className="text-accent" />
                  </div>
                  <SkillBar skill="Node.js" percentage={80} />
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-white p-2 rounded-full shadow-sm">
                    <Code size={20} className="text-accent" />
                  </div>
                  <SkillBar skill="Solidity" percentage={75} />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary dark:text-white mb-6 flex items-center">
                <Palette className="mr-2 text-accent" size={24} />
                Tools and Platforms
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-white p-2 rounded-full shadow-sm">
                    <Figma size={20} className="text-accent" />
                  </div>
                  <SkillBar skill="Figma" percentage={90} />
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-white p-2 rounded-full shadow-sm">
                    <PenTool size={20} className="text-accent" />
                  </div>
                  <SkillBar skill="Adobe XD" percentage={85} />
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-white p-2 rounded-full shadow-sm">
                    <Layout size={20} className="text-accent" />
                  </div>
                  <SkillBar skill="Justinmind" percentage={80} />
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-white p-2 rounded-full shadow-sm">
                    <Code size={20} className="text-accent" />
                  </div>
                  <SkillBar skill="Git & GitHub" percentage={90} />
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-white p-2 rounded-full shadow-sm">
                    <Code size={20} className="text-accent" />
                  </div>
                  <SkillBar skill="Firebase" percentage={85} />
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-white p-2 rounded-full shadow-sm">
                    <Code size={20} className="text-accent" />
                  </div>
                  <SkillBar skill="Hyperledger Fabric" percentage={75} />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary dark:text-white mb-6 flex items-center">
                <Sparkles className="mr-2 text-accent" size={24} />
                Interests
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-white p-2 rounded-full shadow-sm">
                    <Code size={20} className="text-accent" />
                  </div>
                  <SkillBar skill="Blockchain Development" percentage={85} />
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-white p-2 rounded-full shadow-sm">
                    <PenTool size={20} className="text-accent" />
                  </div>
                  <SkillBar skill="UX/UI Design" percentage={90} />
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-white p-2 rounded-full shadow-sm">
                    <Workflow size={20} className="text-accent" />
                  </div>
                  <SkillBar skill="Product Building" percentage={85} />
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-white p-2 rounded-full shadow-sm">
                    <Sparkles size={20} className="text-accent" />
                  </div>
                  <SkillBar skill="AI-powered Applications" percentage={80} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-12 text-center">Get In Touch</h2>
          <div className="flex flex-col md:flex-row gap-12 max-w-4xl mx-auto">
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold text-primary dark:text-white mb-4">Contact Information</h3>
              <p className="text-gray-700 dark:text-white mb-6">
                I'm always excited to collaborate on tech projects, UX design initiatives, or simply discuss new ideas. Feel free to reach out!
              </p>
              <div className="mb-8">
                <p className="text-gray-700 dark:text-white mb-2">
                  <span className="font-medium">Email:</span> urjasaha.contact@gmail.com
                </p>
                <p className="text-gray-700 dark:text-white mb-2">
                  <span className="font-medium">LinkedIn:</span> linkedin.com/in/urjasaha
                </p>
                <p className="text-gray-700 dark:text-white mb-2">
                  <span className="font-medium">GitHub:</span> github.com/urjasaha
                </p>
              </div>
              <SocialLinks />
            </div>
            <div className="md:w-1/2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-primary dark:bg-background text-white dark:text-foreground transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0">© 2025 Urja Saha. Made with passion and ☕.</p>
            <div className="flex space-x-6">
              <Link href="#" className="text-white/80 hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-white/80 hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
