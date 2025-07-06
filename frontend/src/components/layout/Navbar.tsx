'use client'

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Experience', href: '#experience' },
  { label: 'Tech', href: '#tech' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
];

const Navbar: React.FC = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  const toggleNavbar = (): void => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'experience', 'tech', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle navigation click
  const handleNavClick = (href: string, section: string, event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setActiveSection(section);
    setMobileDrawerOpen(false);
    
    if (href === '/') {
      // Scroll to top for home
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Smooth scroll to section
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const getNavItemClass = (href: string, section: string) => {
    const isActive = activeSection === section;
    return `relative text-lg 2xl:text-xl transition-all duration-300 ease-in-out ${
      isActive 
        ? 'text-rose-400' 
        : 'text-gray-300 hover:text-rose-400'
    }`;
  };

  return (
    <nav id="navbar" className="sticky top-0 z-50 px-10 py-3 lg:px-14 lg:py-2 backdrop-blur-lg border-b border-neutral-700/80 w-full lg:h-16 2xl:h-14 bg-black/90">
      <div className="container px-4 mx-auto relative text-sm lg:pt-1">
        <div className="flex justify-between items-center">
          <p className="text-lg 2xl:text-2xl tracking-tight text-white">ivan<span className="text-rose-400"> vargas</span></p>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => {
              const section = item.href === '/' ? 'home' : item.href.replace('#', '');
              return (
                <li key={index}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(item.href, section, e)}
                    className={getNavItemClass(item.href, section)}
                  >
                    <span className="text-rose-400">0<span>{index + 1}</span>.</span> {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button 
              onClick={toggleNavbar}
              className="text-gray-300 hover:text-rose-400 transition-colors duration-300"
            >
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {mobileDrawerOpen && (
          <div className="fixed right-0 top-16 z-20 bg-black/95 w-full p-12 flex flex-col justify-center items-center lg:hidden border-t border-neutral-700/80">
            <ul>
              {navItems.map((item, index) => {
                const section = item.href === '/' ? 'home' : item.href.replace('#', '');
                return (
                  <li key={index} className='py-4'>
                    <a 
                      href={item.href}
                      onClick={(e) => handleNavClick(item.href, section, e)}
                      className={`transition-colors duration-300 text-lg ${
                        activeSection === section 
                          ? 'text-rose-400' 
                          : 'text-gray-300 hover:text-rose-400'
                      }`}
                    >
                      <span className="text-rose-400">0<span>{index + 1}</span>.</span> {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;