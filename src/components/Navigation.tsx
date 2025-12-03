
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, Calendar, FileText, BookOpen } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navItems = [
    { label: "Accueil", href: "#hero", isAnchor: true },
    { label: "Portfolio", href: "#portfolio", isAnchor: true },
    { label: "Services", href: "#services", isAnchor: true },
    { label: "Témoignages", href: "#testimonials", isAnchor: true },
    { label: "Blog", href: "/blog", isAnchor: false },
    { label: "Contact", href: "#contact", isAnchor: true }
  ];

  const scrollToSection = (href: string) => {
    if (!isHomePage) {
      window.location.href = '/' + href;
      return;
    }
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const openCalendly = () => {
    window.open('https://calendly.com/convertilab-5bsc/30min', '_blank');
  };

  const scrollToContact = () => {
    if (!isHomePage) {
      window.location.href = '/#contact';
      return;
    }
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                ConvertiLab
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              item.isAnchor ? (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium cursor-pointer relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium cursor-pointer relative group flex items-center gap-1 ${location.pathname === item.href ? 'text-purple-600' : ''}`}
                >
                  {item.label === 'Blog' && <BookOpen className="w-4 h-4" />}
                  {item.label}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 ${location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              )
            ))}
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button 
              onClick={scrollToContact}
              variant="outline"
              className="border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white px-6 py-2 font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <FileText className="mr-2 w-4 h-4" />
              Obtenir un devis
            </Button>
            
            <Button 
              onClick={openCalendly}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Calendar className="mr-2 w-4 h-4" />
              Prendre rendez-vous
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                item.isAnchor ? (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-md transition-colors duration-200 font-medium cursor-pointer"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center gap-2 w-full px-3 py-2 hover:text-purple-600 hover:bg-gray-50 rounded-md transition-colors duration-200 font-medium ${location.pathname === item.href ? 'text-purple-600 bg-purple-50' : 'text-gray-700'}`}
                  >
                    {item.label === 'Blog' && <BookOpen className="w-4 h-4" />}
                    {item.label}
                  </Link>
                )
              ))}
              <div className="pt-2 space-y-2">
                <Button 
                  onClick={scrollToContact}
                  variant="outline"
                  className="w-full border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white font-semibold"
                >
                  <FileText className="mr-2 w-4 h-4" />
                  Obtenir un devis
                </Button>
                
                <Button 
                  onClick={openCalendly}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold"
                >
                  <Calendar className="mr-2 w-4 h-4" />
                  Prendre rendez-vous
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
