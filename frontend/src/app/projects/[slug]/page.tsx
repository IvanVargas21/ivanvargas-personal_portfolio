import { projectsDetails } from '@/constants/projects';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github, Lock } from 'lucide-react';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projectsDetails.find(p => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <Link 
          href="/projects"
          className="inline-flex items-center gap-2 text-rose-400 hover:text-rose-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        {/* Project Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {project.title}
          </h1>
          <div className="w-24 h-1 bg-rose-500"></div>
        </div>

        {/* Project Image */}
        <div className="mb-8">
          {project.title === "Government Operations Management System" ? (
            // Confidential project placeholder
            <div className="w-full h-64 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-600">
              <div className="text-center">
                <Lock className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-400 text-lg font-medium">Confidential Project</p>
                <p className="text-gray-500 text-sm mt-2">Government Operations</p>
              </div>
            </div>
          ) : (
            <img
              src={typeof project.image === 'string' ? project.image : project.image.src}
              alt={project.alt || project.title}
              className="w-full rounded-xl shadow-2xl"
            />
          )}
        </div>

        {/* Project Description */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">About This Project</h2>
          <p className="text-gray-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-4">
              {project.techStack.map((tech, index) => (
                <div key={index} className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg">
                  <img
                    src={tech.src}
                    alt={project.techs[index] || 'Technology'}
                    className="w-6 h-6"
                  />
                  <span className="text-gray-300 text-sm">
                    {project.techs[index]}
                  </span>
                </div>
              ))}
            </div>
        </div>

        {/* Project Links */}
        <div className="flex flex-col sm:flex-row gap-4">
          {project.codeLink && (
            <Link
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              <Github className="w-5 h-5" />
              View Code
            </Link>
          )}
          {project.demo && (
            <Link
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-lg transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              Live Demo
            </Link>
          )}
        </div>
      </div>
    </div>
  );
} 