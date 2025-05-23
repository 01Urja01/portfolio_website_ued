import Link from "next/link"
import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react"

export default function SocialLinks() {
  return (
    <div className="flex space-x-4">
      <Link
        href="https://github.com/01urja01"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-accent hover:text-white transition-colors"
        aria-label="GitHub Profile"
      >
        <Github size={20} />
      </Link>
      <Link
        href="https://linkedin.com/in/urja-saha-a4755523a"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-accent hover:text-white transition-colors"
        aria-label="LinkedIn Profile"
      >
        <Linkedin size={20} />
      </Link>
      <Link
        href="https://twitter.com/urja_saha"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-accent hover:text-white transition-colors"
        aria-label="Twitter Profile"
      >
        <Twitter size={20} />
      </Link>
      <Link
        href="https://instagram.com/urjasaha_"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-accent hover:text-white transition-colors"
        aria-label="Instagram Profile"
      >
        <Instagram size={20} />
      </Link>
      <Link
        href="mailto:urja.saha23@spit.ac.in"
        className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-accent hover:text-white transition-colors"
        aria-label="Email"
      >
        <Mail size={20} />
      </Link>
    </div>
  )
}
