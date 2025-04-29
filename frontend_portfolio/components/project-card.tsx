import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  projectUrl?: string
}

export default function ProjectCard({ title, description, tags, imageUrl, projectUrl = "#" }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={projectUrl}
          className="inline-flex items-center text-accent hover:text-accent/80 transition-colors font-medium"
        >
          View Project <ExternalLink size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  )
}
