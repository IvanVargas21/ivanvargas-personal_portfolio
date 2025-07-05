'use client'

import React from 'react';
import { projectsDetails } from '../../constants/projects';
import Link from 'next/link';
import { Lock, ExternalLink, Github } from 'lucide-react';

const ProjectSection = () => {
  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">03 Projects</h2>
          <div className="w-24 h-1 bg-rose-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsDetails.map((project, projectIndex) => (
            <div
              key={projectIndex}
              className="group relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-rose-500/20 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-rose-500/0 to-rose-500/0 group-hover:from-rose-500/5 group-hover:to-rose-500/10 rounded-xl transition-all duration-300"></div>
              
              <div className="relative z-10">
                {/* Project Image or Confidential Placeholder */}
                <div className="relative overflow-hidden rounded-lg mb-4">
                  {project.title === "Government Operations Management System" ? (
                    // Confidential project placeholder
                    <div className="w-full h-48 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-600">
                      <div className="text-center">
                        <Lock className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-400 text-sm font-medium">Confidential Project</p>
                        <p className="text-gray-500 text-xs mt-1">Government Operations</p>
                      </div>
                    </div>
                  ) : (
                    // Regular project image
                    <img
                      src={typeof project.image === 'string' ? project.image : project.image.src}
                      alt={project.alt || project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-rose-400 transition-colors">
                  {project.title}
                </h3>

                {/* Project Description */}
                <div className="mb-4">
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-4">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, index) => (
                    <img
                      key={index}
                      src={tech.src}
                      alt={tech.alt}
                      title={tech.title}
                      className="w-6 h-6 opacity-80 hover:opacity-100 transition-opacity"
                    />
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  {project.codeLink && project.codeLink !== 'n/a private repo' && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded-lg transition-colors text-sm"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {project.demo && project.demo !== 'n/a private repo' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white px-3 py-2 rounded-lg transition-colors text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  )}
                  {project.codeLink === 'n/a private repo' && (
                    <span className="flex items-center gap-2 bg-gray-700 text-gray-400 px-3 py-2 rounded-lg text-sm cursor-not-allowed">
                      <Lock className="w-4 h-4" />
                      Private
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-lg transition-colors font-semibold"
          >
            View All Projects
          </Link>
        </div>

        {/* Coming Soon Message */}
        <div className="text-center mt-8">
          <p className="text-rose-400 text-lg font-medium">More Projects Coming Soon!</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
