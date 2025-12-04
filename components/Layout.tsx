import React from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';
import { Terminal, PenTool, Home, Github, Twitter } from 'lucide-react';

const Layout: React.FC = () => {
  const navClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-200 ${
      isActive
        ? 'bg-blue-600 text-white shadow-md'
        : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600'
    }`;

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold text-gray-900 tracking-tight">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                <Terminal size={20} />
              </div>
              DevSpace
            </Link>

            <nav className="hidden md:flex space-x-2">
              <NavLink to="/" className={navClass}>
                <Home size={18} />
                <span>Home</span>
              </NavLink>
              <NavLink to="/blog" className={navClass}>
                <PenTool size={18} />
                <span>Blog</span>
              </NavLink>
              <NavLink to="/tools" className={navClass}>
                <Terminal size={18} />
                <span>Tools</span>
              </NavLink>
            </nav>
            
            <div className="flex items-center gap-4">
                 <button className="hidden md:block text-sm font-medium text-gray-500 hover:text-gray-900">
                    Subscribe
                 </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Nav (simplified) */}
        <div className="md:hidden border-t border-gray-100 flex justify-around p-2 bg-white">
            <NavLink to="/" className={({isActive}) => isActive ? "text-blue-600" : "text-gray-500"}>
                <Home />
            </NavLink>
            <NavLink to="/blog" className={({isActive}) => isActive ? "text-blue-600" : "text-gray-500"}>
                <PenTool />
            </NavLink>
            <NavLink to="/tools" className={({isActive}) => isActive ? "text-blue-600" : "text-gray-500"}>
                <Terminal />
            </NavLink>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
               <div className="w-6 h-6 bg-gray-900 rounded-md flex items-center justify-center text-white">
                <Terminal size={14} />
              </div>
              <span className="text-gray-900 font-semibold">DevSpace</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          <p className="mt-4 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} DevSpace. All rights reserved. Built with React & Tailwind.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;