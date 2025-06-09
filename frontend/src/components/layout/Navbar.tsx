import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
];

const Navbar: React.FC = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState<boolean>(false);

  const toggleNavbar = (): void => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav id="navbar" className="sticky top-0 z-50 px-10 py-3 lg:px-14 lg:py-2 backdrop-blur-lg border-b border-neutral-700/80 w-full lg:h-16 2xl:h-14">
      <div className="container px-4 mx-auto relative text-sm lg:pt-1">
        <div className="flex justify-between items-center">
          <p className="text-lg 2xl:text-2xl tracking-tight">ivan<span className="text-green-500"> vargas</span></p>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="relative text-lg 2xl:text-xl text-white hover:text-green-500 transition-all duration-300 ease-in-out"
                  style={{ textShadow: '3px 11px 6px rgba(0, 0, 0, 0.41)' }}
                >
                  <span className="text-green-500">0<span>{index + 1}</span>.</span> {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {/* Conditional Rendering */}
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-slate-800 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className='py-4'>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
