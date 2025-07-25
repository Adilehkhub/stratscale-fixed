import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-main to-brand-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className={`font-display font-bold text-xl transition-colors ${
              isScrolled ? 'text-brand-main' : 'text-white'
            }`}>
              StratScale
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`transition-all duration-200 hover:scale-105 ${
                  location.pathname === item.path
                    ? isScrolled 
                      ? 'text-brand-accent font-semibold' 
                      : 'text-brand-accent font-semibold'
                    : isScrolled
                      ? 'text-gray-700 hover:text-brand-accent'
                      : 'text-white/90 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 hover:scale-105 ${
                isScrolled
                  ? 'bg-brand-main text-white hover:bg-brand-accent'
                  : 'bg-brand-accent text-white hover:bg-brand-main border border-brand-accent'
              }`}
            >
              Schedule Discussion
            </Link>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block h-0.5 w-6 transition-all ${
                isScrolled ? 'bg-brand-main' : 'bg-white'
              } ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 w-6 transition-all ${
                isScrolled ? 'bg-brand-main' : 'bg-white'
              } ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-6 transition-all ${
                isScrolled ? 'bg-brand-main' : 'bg-white'
              } ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 animate-slide-up">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md transition-colors ${
                    location.pathname === item.path
                      ? 'text-brand-accent font-semibold bg-orange-50'
                      : 'text-gray-700 hover:text-brand-accent hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block mx-3 mt-4 px-6 py-2 bg-brand-main text-white text-center rounded-full font-semibold hover:bg-brand-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Schedule Discussion
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-main text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-accent to-white rounded-lg flex items-center justify-center">
                <span className="text-brand-main font-bold text-xl">S</span>
              </div>
              <span className="font-display font-bold text-2xl">StratScale</span>
            </div>
            <p className="text-gray-300 max-w-md mb-6">
              Implementation Program Executive Services - Dedicated ERP Leadership for Growing Enterprises
            </p>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 mb-6">
              <p className="text-brand-accent font-semibold mb-2">Dedicated ERP Leadership So You Focus On Growth</p>
              <div className="flex flex-wrap gap-2">
                {['Strategy', 'Systems', 'Execution', 'Results'].map((keyword) => (
                  <span key={keyword} className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Crisis Recovery</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Implementation Partnership</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Readiness Assessment</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Get Started</h3>
            <div className="space-y-3 text-gray-300">
              <div>
                <p className="font-medium text-white">Email</p>
                <a href="mailto:hello@stratscale.co" className="text-brand-accent hover:text-white transition-colors">
                  hello@stratscale.co
                </a>
              </div>
              <div>
                <p className="font-medium text-white">Website</p>
                <a href="https://stratscale.co" className="text-brand-accent hover:text-white transition-colors">
                  stratscale.co
                </a>
              </div>
              <div>
                <Link to="/contact" className="inline-block mt-2 px-4 py-2 bg-brand-accent text-white rounded-full text-sm font-semibold hover:bg-white hover:text-brand-main transition-colors">
                  Schedule Discussion
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 py-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            <p>© 2025 StratScale. All rights reserved.</p>
            <p className="mt-1">Implementation Program Executive Services</p>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
