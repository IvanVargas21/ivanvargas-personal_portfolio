'use client'

import React, { useState } from 'react';
import { techData } from '../../constants/techData';

const Tech = () => {
  const [activeTab, setActiveTab] = useState<'main' | 'all'>('main');
  const filteredTech = activeTab === 'main' 
    ? techData.filter(item => item.category === 'main')
    : techData; // Show all technologies when 'all' is selected

  return (
    <section id="tech" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">03 Tech & Tools</h2>
          <div className="w-24 h-1 bg-rose-500 mx-auto"></div>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-xl border border-gray-800 bg-black/50 p-1.5 shadow-lg shadow-rose-500/10">
            <button
              onClick={() => setActiveTab('main')}
              className={`px-8 py-3 rounded-lg transition-all duration-300 ${
                activeTab === 'main'
                  ? 'bg-gradient-to-r from-rose-500 to-rose-600 text-white shadow-lg shadow-rose-500/20'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
              }`}
            >
              Main Technologies
            </button>
            <button
              onClick={() => setActiveTab('all')}
              className={`px-8 py-3 rounded-lg transition-all duration-300 ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-rose-500 to-rose-600 text-white shadow-lg shadow-rose-500/20'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
              }`}
            >
              All Technologies
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredTech.map((item) => (
            <div
              key={item.title}
              className="group relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-rose-500/20 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-rose-500/0 to-rose-500/0 group-hover:from-rose-500/5 group-hover:to-rose-500/10 rounded-xl transition-all duration-300"></div>
              <div className="flex flex-col items-center relative z-10">
                <div className="w-16 h-16 mb-4 transition-transform duration-300 group-hover:scale-110">
                  <img
                    src={`/assets/vectors/${item.src}`}
                    alt={item.alt}
                    className="w-full h-full object-contain filter group-hover:brightness-110"
                  />
                </div>
                <h3 className="text-white text-center font-medium transition-colors duration-300 group-hover:text-rose-400">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {activeTab === 'all' && (
          <div className="mt-8 text-center text-gray-400 text-sm">
            <p><em>Disclaimer: This list contains all the technologies that I have worked with in the past. Not necessarily the technologies that I am most comfortable with.</em></p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Tech;