'use client';
import React, { useState, useEffect } from "react";
import { Menu, Home, IndianRupee, LayoutGrid, Wifi, Image, MapPin, Video, Phone } from "lucide-react";
import { Button, PopupTriggerButton } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navItems = [
  { id: "welcome", icon: <Home className="w-4 h-4" />, label: "Home" },
  { id: "price", icon: <IndianRupee className="w-4 h-4" />, label: "Price" },
  { id: "siteplan", icon: <LayoutGrid className="w-4 h-4" />, label: "Site & Floor Plan" },
  { id: "amenities", icon: <Wifi className="w-4 h-4" />, label: "Amenities" },
  { id: "gallery", icon: <Image className="w-4 h-4" />, label: "Gallery" },
  { id: "location", icon: <MapPin className="w-4 h-4" />, label: "Location" },
  { id: "virtualtour", icon: <Video className="w-4 h-4" />, label: "Virtual Site Visit" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("welcome");
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (sectionId:string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      const scrollPosition = window.scrollY + 100;
      
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "py-2" : "py-4"
    }`}>
      {/* Backdrop blur effect */}
      <div className="absolute inset-0 bg-white/90 backdrop-blur-sm shadow-sm"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between relative z-10">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden hover:bg-gray-100">
                  <Menu className="w-6 h-6 text-gray-700" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[280px] sm:w-[350px] border-r border-gray-200">
                <div className="flex flex-col h-full">
                  <div className="flex justify-center py-6 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <img src="https://iili.io/3lODhX9.png" alt="Logo" className="h-10" />
              <div className="mx-3 h-8 w-px bg-gray-200 block"></div>
                      <img src="https://iili.io/3lODXz7.png" alt="Group Logo" className="h-10" />
                    </div>
                  </div>
                  <div className="flex flex-col space-y-1 mt-6 flex-1">
                    {navItems.map((item) => (
                      <SheetClose asChild key={item.id}>
                        <button
                          onClick={() => scrollToSection(item.id)}
                          className={`flex items-center gap-3 py-3 px-4 rounded-lg transition-all ${
                            activeSection === item.id 
                              ? "bg-blue-50 text-blue-600 font-medium" 
                              : "hover:bg-gray-50 text-gray-700"
                          }`}
                        >
                          <div className={`${activeSection === item.id ? "text-blue-600" : "text-gray-500"}`}>
                            {item.icon}
                          </div>
                          <span className="text-base">{item.label}</span>
                        </button>
                      </SheetClose>
                    ))}
                  </div>
                  <div className="mt-auto border-t border-gray-100 py-4 px-4">
                    <PopupTriggerButton className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2">
                      Pre Register
                    </PopupTriggerButton>
                    <a 
                      href="tel:+912248972062" 
                      className="flex items-center justify-center gap-2 mt-4 text-gray-700 font-medium"
                    >
                      <Phone className="w-5 h-5 text-blue-600" /> 
                      <span>+91 2248972062</span>
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            <div className="flex items-center">
              <img src="https://iili.io/3lODhX9.png" alt="Logo" className="h-10" />
              <div className="mx-3 h-8 w-px bg-gray-200 block"></div>
              <img src="https://iili.io/3lODXz7.png" alt="Group Logo" className="h-10 block" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <div className="flex mx-6">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 mx-1 group transition-all duration-200 ${
                    activeSection === item.id ? "text-blue-600" : "text-gray-600 hover:text-blue-500"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {item.icon}
                    <span className="font-medium text-sm">{item.label}</span>
                  </div>
                  
                  {/* Active indicator */}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></span>
                  )}
                  
                  {/* Hover indicator - only shows when not active */}
                  {activeSection !== item.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
                  )}
                </button>
              ))}
            </div>
            
            {/* Call to action section */}
            <div className="flex items-center gap-6 ml-4 pl-6 border-l border-gray-200">
              <a 
                href="tel:+912248972062" 
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-600">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500">Call Us</span>
                  <span className="text-sm font-medium">+91 2248972062</span>
                </div>
              </a>
              
              <PopupTriggerButton className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 rounded-lg">
                Pre Register
              </PopupTriggerButton>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;