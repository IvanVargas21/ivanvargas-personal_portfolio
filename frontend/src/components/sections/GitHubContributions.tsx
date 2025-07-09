'use client'

import React from 'react';
import GitHubCalendar from '../ui/GitHubCalendar';
import Image from 'next/image';

const GitHubContributions = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">    
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/60 rounded-2xl shadow-2xl p-6 md:p-8 backdrop-blur-lg border border-rose-400/10">
            <div className="text-center mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                My Coding Journey
              </h3>
              <p className="text-gray-400 text-sm md:text-base">
                Track my development activity and contributions on GitHub
              </p>
            </div>
            
            {/* GitHub Contributions Calendar */}
            <div className="flex justify-center mb-8">
              <div className="w-full max-w-4xl">
                <GitHubCalendar username="IvanVargas21" />
              </div>
            </div>
            
            {/* GitHub Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border border-rose-400/20">
                <Image 
                  src="https://github-readme-stats.vercel.app/api?username=IvanVargas21&show_icons=true&theme=radical&hide_border=true&bg_color=0d1117&text_color=ffffff&icon_color=ec4899"
                  alt="GitHub Stats"
                  className="w-full h-auto"
                  onError={(e) => {
                    // Fallback for stats
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `
                      <div class="text-center p-4">
                        <div class="text-2xl font-bold text-rose-400 mb-2">GitHub Stats</div>
                        <div class="text-gray-400">36 Repositories • Active Developer</div>
                      </div>
                    `;
                  }}
                />
              </div>
              
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border border-rose-400/20">
                <Image 
                  src="https://github-readme-streak-stats.herokuapp.com/?user=IvanVargas21&theme=radical&hide_border=true&background=0d1117&stroke=ec4899&ring=ec4899&fire=ec4899&currStreakNum=ffffff&currStreakLabel=ec4899&sideNums=ffffff&sideLabels=ec4899&dates=ffffff"
                  alt="GitHub Streak Stats"
                  className="w-full h-auto"
                  onError={(e) => {
                    // Fallback for streak stats
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `
                      <div class="text-center p-4">
                        <div class="text-2xl font-bold text-rose-400 mb-2">Contribution Streak</div>
                        <div class="text-gray-400">Consistent GitHub Activity</div>
                      </div>
                    `;
                  }}
                />
              </div>
            </div>
            
            {/* GitHub Profile Link */}
            <div className="text-center mt-6">
              <a 
                href="https://github.com/IvanVargas21" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-rose-500 to-rose-600 text-white font-semibold rounded-lg hover:from-rose-600 hover:to-rose-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
                View GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubContributions; 