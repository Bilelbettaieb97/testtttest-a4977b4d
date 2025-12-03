
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, Calendar, FileText, BookOpen, Globe, Palette, Search, Target, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const serviceCategories = [
    { 
      label: "Sites Web", 
      href: "/services/sites-web", 
      icon: Globe,
      description: "Sites vitrines, e-commerce et applications web"
    },
    { 
      label: "Design", 
      href: "/services/design", 
      icon: Palette,
      description: "Identité visuelle, UI/UX et création graphique"
    },
    { 
      label: "SEO", 
      href: "/services/seo", 
      icon: Search,
      description: "Référencement naturel et optimisation"
    },
    { 
      label: "SEA", 
      href: "/services/sea", 
      icon: Target,
      description: "Publicité Google Ads et campagnes payantes"
    },
  ];

  const navItems = [
    { label: "Portfolio", href: "/portfolio" },
    { label: "À propos", href: "/a-propos" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" }
  ];

  const openCalendly = () => {
    window.open('https://calendly.com/convertilab-5bsc/30min', '_blank');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="cursor-pointer">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                ConvertiLab
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              to="/portfolio"
              className={`text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium cursor-pointer relative group ${location.pathname === '/portfolio' ? 'text-purple-600' : ''}`}
            >
              Portfolio
              <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 ${location.pathname === '/portfolio' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>

            {/* Services Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`text-gray-700 hover:text-purple-600 bg-transparent hover:bg-transparent data-[state=open]:bg-transparent font-medium ${location.pathname.startsWith('/services') ? 'text-purple-600' : ''}`}>
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[420px] gap-1 p-3 bg-white">
                      {serviceCategories.map((service, index) => (
                        <li key={service.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={service.href}
                              className={cn(
                                "group flex items-center gap-4 select-none rounded-lg p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:shadow-md hover:translate-x-1",
                                location.pathname === service.href && "bg-gradient-to-r from-purple-50 to-pink-50 shadow-md"
                              )}
                              style={{ animationDelay: `${index * 50}ms` }}
                            >
                              <div className={cn(
                                "flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 transition-all duration-300 group-hover:from-purple-500 group-hover:to-pink-500 group-hover:scale-110 group-hover:rotate-3",
                                location.pathname === service.href && "from-purple-500 to-pink-500"
                              )}>
                                <service.icon className={cn(
                                  "h-5 w-5 text-purple-600 transition-all duration-300 group-hover:text-white group-hover:scale-110",
                                  location.pathname === service.href && "text-white"
                                )} />
                              </div>
                              <div className="flex-1">
                                <div className="text-sm font-semibold text-gray-800 group-hover:text-purple-700 transition-colors duration-300">{service.label}</div>
                                <p className="text-xs text-gray-500 mt-0.5 group-hover:text-gray-600 transition-colors duration-300">{service.description}</p>
                              </div>
                              <ChevronDown className="w-4 h-4 -rotate-90 text-gray-300 group-hover:text-purple-500 group-hover:translate-x-1 transition-all duration-300" />
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                      <li className="border-t border-purple-100 pt-2 mt-2">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/services"
                            className="group flex items-center justify-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700 p-3 rounded-lg hover:bg-purple-50 transition-all duration-300"
                          >
                            Voir tous les services
                            <ChevronDown className="w-4 h-4 -rotate-90 group-hover:translate-x-1 transition-transform duration-300" />
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium cursor-pointer relative group flex items-center gap-1 ${location.pathname === item.href ? 'text-purple-600' : ''}`}
              >
                {item.label === 'Blog' && <BookOpen className="w-4 h-4" />}
                {item.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 ${location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button 
              asChild
              variant="outline"
              className="border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white px-6 py-2 font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <Link to="/contact">
                <FileText className="mr-2 w-4 h-4" />
                Obtenir un devis
              </Link>
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
              <Link
                to="/portfolio"
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center gap-2 w-full px-3 py-2 hover:text-purple-600 hover:bg-gray-50 rounded-md transition-colors duration-200 font-medium ${location.pathname === '/portfolio' ? 'text-purple-600 bg-purple-50' : 'text-gray-700'}`}
              >
                Portfolio
              </Link>

              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className={`flex items-center justify-between w-full px-3 py-2 hover:text-purple-600 hover:bg-gray-50 rounded-md transition-colors duration-200 font-medium ${location.pathname.startsWith('/services') ? 'text-purple-600 bg-purple-50' : 'text-gray-700'}`}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isServicesOpen && (
                  <div className="pl-4 mt-1 space-y-1">
                    {serviceCategories.map((service) => (
                      <Link
                        key={service.href}
                        to={service.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`flex items-center gap-2 w-full px-3 py-2 text-sm hover:text-purple-600 hover:bg-gray-50 rounded-md transition-colors duration-200 ${location.pathname === service.href ? 'text-purple-600 bg-purple-50' : 'text-gray-600'}`}
                      >
                        <service.icon className="w-4 h-4" />
                        {service.label}
                      </Link>
                    ))}
                    <Link
                      to="/services"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-2 w-full px-3 py-2 text-sm text-purple-600 hover:bg-purple-50 rounded-md transition-colors duration-200 font-medium"
                    >
                      Tous les services
                    </Link>
                  </div>
                )}
              </div>

              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-2 w-full px-3 py-2 hover:text-purple-600 hover:bg-gray-50 rounded-md transition-colors duration-200 font-medium ${location.pathname === item.href ? 'text-purple-600 bg-purple-50' : 'text-gray-700'}`}
                >
                  {item.label === 'Blog' && <BookOpen className="w-4 h-4" />}
                  {item.label}
                </Link>
              ))}
              <div className="pt-2 space-y-2">
                <Button 
                  asChild
                  variant="outline"
                  className="w-full border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white font-semibold"
                >
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    <FileText className="mr-2 w-4 h-4" />
                    Obtenir un devis
                  </Link>
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
