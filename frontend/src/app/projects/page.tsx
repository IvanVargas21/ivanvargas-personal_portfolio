import { projectsDetails } from '@/constants/projects';
import Link from 'next/link';
import { Lock } from 'lucide-react';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Projects
          </h1>
          <div className="w-24 h-1 bg-rose-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsDetails.map((project) => (
            <Link 
              key={project.slug} 
              href={`/projects/${project.slug}`}
              className="group block cursor-pointer"
            >
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-rose-500/20 hover:-translate-y-1 border border-gray-700 hover:border-rose-500/50">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  {project.title === "Government Agency Operations Management System" ? (
                    // Confidential project placeholder
                    <div className="w-full h-48 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-600">
                      <div className="text-center">
                        <Lock className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-400 text-sm font-medium">Confidential Project</p>
                        <p className="text-gray-500 text-xs mt-1">Government Operations</p>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={typeof project.image === 'string' ? project.image : project.image.src}
                      alt={project.alt || project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-rose-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4 mb-4">
                  {project.techStack.map((tech, index) => (
                    <img
                      key={index}
                      src={tech.src}
                      alt={`${project.title} tech stack`}
                      className="w-6 h-6"
                    />
                  ))}
                </div>
                <div className="mt-auto pt-4">
                  <div className="inline-flex items-center gap-2 text-rose-400 text-sm font-medium group-hover:text-rose-300 transition-colors">
                    View Details
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 