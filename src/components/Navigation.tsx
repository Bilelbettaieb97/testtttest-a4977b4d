
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, Calendar, FileText, BookOpen, Globe, Palette, Search, Target, ChevronDown, Rocket, Store, Code, RefreshCw, PenTool, Fingerprint, TrendingUp, ClipboardCheck, Mail, Share2, BarChart3, Megaphone, type LucideIcon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

interface SubService {
  name: string;
  icon: LucideIcon;
  href: string;
}

interface ServiceCategory {
  label: string;
  href: string;
  icon: LucideIcon;
  description: string;
  subServices: SubService[];
}

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const location = useLocation();

  const serviceCategories: ServiceCategory[] = [
    { 
      label: "Sites Web", 
      href: "/services/sites-web", 
      icon: Globe,
      description: "Sites vitrines, e-commerce et applications web",
      subServices: [
        { name: "Landing Page", icon: Rocket, href: "/services/sites-web/landing-page" },
        { name: "Site Vitrine", icon: FileText, href: "/services/sites-web/site-vitrine" },
        { name: "Site E-commerce", icon: Store, href: "/services/sites-web/site-ecommerce" },
        { name: "Application Web", icon: Code, href: "/services/sites-web/application-web" },
        { name: "Refonte de Site", icon: RefreshCw, href: "/services/sites-web/refonte-site" },
      ]
    },
    { 
      label: "SEO", 
      href: "/services/seo", 
      icon: Search,
      description: "Référencement naturel et visibilité Google",
      subServices: [
        { name: "Référencement SEO", icon: TrendingUp, href: "/services/seo/referencement" },
        { name: "Audit SEO", icon: ClipboardCheck, href: "/services/seo/audit" },
      ]
    },
    { 
      label: "Publicité", 
      href: "/services/sea", 
      icon: Target,
      description: "Google Ads, Meta Ads et campagnes payantes",
      subServices: [
        { name: "Google Ads", icon: Search, href: "/services/sea/google-ads" },
        { name: "Meta Ads", icon: Megaphone, href: "/services/sea/meta-ads" },
      ]
    },
    { 
      label: "Social Media", 
      href: "/services/social-media", 
      icon: Share2,
      description: "Gestion et stratégie réseaux sociaux",
      subServices: [
        { name: "Community Management", icon: Share2, href: "/services/social-media" },
        { name: "Stratégie Social Media", icon: BarChart3, href: "/services/social-media" },
      ]
    },
    { 
      label: "Design", 
      href: "/services/design", 
      icon: Palette,
      description: "Identité visuelle, UI/UX et branding",
      subServices: [
        { name: "Design UI/UX", icon: PenTool, href: "/services/design/ui-ux" },
        { name: "Identité Visuelle", icon: Fingerprint, href: "/services/design/identite-visuelle" },
      ]
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

  const activeCategory = hoveredCategory 
    ? serviceCategories.find(c => c.label === hoveredCategory) 
    : serviceCategories[0];

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
          <div className="hidden lg:flex items-center space-x-5">
            {/* Services Dropdown - FIRST */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`h-auto px-0 py-1 text-sm text-gray-700 hover:text-purple-600 bg-transparent hover:bg-transparent data-[state=open]:bg-transparent font-medium ${location.pathname.startsWith('/services') ? 'text-purple-600' : ''}`}>
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="flex w-[700px] bg-white">
                      {/* Categories Column */}
                      <ul className="w-[300px] gap-1 p-3 border-r border-gray-100">
                        {serviceCategories.map((service) => (
                          <li key={service.href}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={service.href}
                                onMouseEnter={() => setHoveredCategory(service.label)}
                                className={cn(
                                  "group flex items-center gap-3 select-none rounded-lg p-3 leading-none no-underline outline-none transition-all duration-200",
                                  (hoveredCategory === service.label || (!hoveredCategory && service.label === "Sites Web")) 
                                    ? "bg-gradient-to-r from-purple-50 to-pink-50 shadow-sm" 
                                    : "hover:bg-gray-50",
                                  location.pathname === service.href && "bg-purple-50"
                                )}
                              >
                                <div className={cn(
                                  "flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-200",
                                  (hoveredCategory === service.label || (!hoveredCategory && service.label === "Sites Web"))
                                    ? "bg-gradient-to-br from-purple-500 to-pink-500"
                                    : "bg-gradient-to-br from-purple-100 to-pink-100 group-hover:from-purple-200 group-hover:to-pink-200"
                                )}>
                                  <service.icon className={cn(
                                    "h-4 w-4 transition-all duration-200",
                                    (hoveredCategory === service.label || (!hoveredCategory && service.label === "Sites Web"))
                                      ? "text-white"
                                      : "text-purple-600"
                                  )} />
                                </div>
                                <div className="flex-1">
                                  <div className="text-sm font-semibold text-gray-800">{service.label}</div>
                                  <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{service.description}</p>
                                </div>
                                <ChevronDown className={cn(
                                  "w-4 h-4 -rotate-90 transition-all duration-200",
                                  (hoveredCategory === service.label || (!hoveredCategory && service.label === "Sites Web"))
                                    ? "text-purple-500"
                                    : "text-gray-300"
                                )} />
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                        <li className="border-t border-purple-100 pt-2 mt-2">
                          <NavigationMenuLink asChild>
                            <Link
                              to="/services"
                              className="group flex items-center justify-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700 p-2 rounded-lg hover:bg-purple-50 transition-all duration-200"
                            >
                              Voir tous les services
                              <ChevronDown className="w-4 h-4 -rotate-90 group-hover:translate-x-1 transition-transform duration-200" />
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>

                      {/* Sub-services Column */}
                      <div className="flex-1 p-4 bg-gray-50/50">
                        <div className="mb-3">
                          <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                            {activeCategory?.label} - Nos services
                          </h4>
                        </div>
                        <ul className="space-y-1">
                          {activeCategory?.subServices.map((subService) => (
                            <li key={subService.name}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={subService.href}
                                  className="group flex items-center gap-3 p-2.5 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200"
                                >
                                  <subService.icon className="w-4 h-4 text-purple-500 group-hover:text-purple-600 transition-colors" />
                                  <span className="text-sm text-gray-700 group-hover:text-gray-900 font-medium">{subService.name}</span>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                          <li className="border-t border-gray-200 pt-2 mt-2">
                            <NavigationMenuLink asChild>
                              <Link
                                to={activeCategory?.href || '/services'}
                                className="group flex items-center justify-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700 p-2 rounded-lg hover:bg-purple-50 transition-all duration-200"
                              >
                                Voir tous les {activeCategory?.label}
                                <ChevronDown className="w-4 h-4 -rotate-90 group-hover:translate-x-1 transition-transform duration-200" />
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`text-sm text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium cursor-pointer relative group flex items-center gap-1 ${location.pathname === item.href ? 'text-purple-600' : ''}`}
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
                Audit gratuit
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
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile Services Dropdown - FIRST */}
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
                  className={`flex items-center gap-2 w-full px-3 py-2.5 hover:text-purple-600 hover:bg-gray-50 rounded-md transition-colors duration-200 font-medium text-sm ${location.pathname === item.href ? 'text-purple-600 bg-purple-50' : 'text-gray-700'}`}
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
                    Audit gratuit
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
