import React from 'react'
import { Code2, ExternalLink } from 'lucide-react'

function Card({ project, desc, git }: { project: string; desc: string; git: string }) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-black/10 p-6 transition-all duration-300 hover:bg-black/20 hover:shadow-xl">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">{project}</h3>
        <a href={git} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
          <Code2 className="h-6 w-6" />
        </a>
      </div>
      <p className="mt-4 text-gray-300 line-clamp-4">{desc}</p>
      <a href={git} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors duration-300">
        View Project <ExternalLink className="ml-1 h-4 w-4" />
      </a>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 blur transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  )
}

export default Card
