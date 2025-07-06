'use client'

import React from 'react';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">02 Experience</h2>
          <div className="w-24 h-1 bg-rose-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Experience Card */}
          <div className="group relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-rose-500/20 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-b from-rose-500/0 to-rose-500/0 group-hover:from-rose-500/5 group-hover:to-rose-500/10 rounded-xl transition-all duration-300"></div>
            
            <div className="relative z-10">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-rose-400 transition-colors">
                    Web Developer Intern
                  </h3>
                  <p className="text-rose-400 font-semibold text-lg">
                    Linoflap Technology Philippines Inc.
                  </p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="inline-block bg-rose-500/20 text-rose-400 px-4 py-2 rounded-lg text-sm font-medium border border-rose-500/30">
                    January 2025 - May 2025
                  </span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-rose-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 leading-relaxed">
                      Developed an interactive web application prototype using Next.js, React.js, and TypeScript in an Agile environment
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-rose-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 leading-relaxed">
                    Translated Figma designs into functional React components with MUI and Tailwind CSS, establishing core application architecture.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-rose-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 leading-relaxed">
                    Implemented RESTful API integration with Axios for dynamic data flow and user interactions.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-rose-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 leading-relaxed">
                    Implemented Zustand for efficient state management and component rendering.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-rose-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 leading-relaxed">
                  Collaborated with cross-functional teams to troubleshoot and resolve frontend issues.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-rose-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 leading-relaxed">
                    Conducted API testing using Postman to validate data being returned from the backend.
                  </p>
                </div>
              </div>

              {/* Tech Stack Used */}
              <div className="mt-8 pt-6 border-t border-gray-700">
                <h4 className="text-lg font-semibold text-white mb-4">Technologies Used:</h4>
                <div className="flex flex-wrap gap-3">
                  {['Next.js', 'React.js', 'TypeScript', 'MUI', 'Tailwind CSS', 'Axios', 'Zod', 'Zustand', 'Postman', 'Figma'].map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-rose-500/20 text-rose-400 rounded-lg text-sm font-medium border border-rose-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection; 