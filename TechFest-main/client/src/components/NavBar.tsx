import { useState, useEffect } from 'react';
import { Link } from 'wouter';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setIsOpen(false);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <header className={`glassmorphism fixed w-full top-0 z-50 transition-all duration-300 border-b border-[#00f0ff] border-opacity-30 ${isScrolled ? 'py-2' : 'py-3'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-[#00f0ff] to-[#9d4edd] p-0.5 rounded-full">
              <div className="bg-[#0a1929] p-1.5 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#00f0ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <span className="font-orbitron text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#9d4edd]">TECH FEST</span>
          </Link>
          
          {/* Main Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-[#00f0ff] hover:text-white font-medium transition-colors">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-[#00f0ff] font-medium transition-colors">About</button>
            <button onClick={() => scrollToSection('timeline')} className="text-gray-400 hover:text-[#9d4edd] font-medium transition-colors">Timeline</button>
            <button onClick={() => scrollToSection('speakers')} className="text-gray-400 hover:text-[#ff2a6d] font-medium transition-colors">Speakers</button>
            <button onClick={() => scrollToSection('workshops')} className="text-gray-400 hover:text-[#00f0ff] font-medium transition-colors">Workshops</button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-400 hover:text-[#9d4edd] font-medium transition-colors">Gallery</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-[#ff2a6d] font-medium transition-colors">Contact</button>
          </nav>
          
          {/* Register Button */}
          <div className="hidden md:block">
            <button className="cyberpunk-gradient font-orbitron font-bold py-2 px-6 rounded-full text-white hover:shadow-lg hover:shadow-[#ff2a6d4d] transition-all duration-300">
              Register Now
            </button>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-gray-200 focus:outline-none" 
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-4 pb-4 space-y-3`}>
          <button onClick={() => scrollToSection('home')} className="block text-[#00f0ff] font-medium py-2 w-full text-left">Home</button>
          <button onClick={() => scrollToSection('about')} className="block text-gray-400 hover:text-[#00f0ff] font-medium py-2 w-full text-left">About</button>
          <button onClick={() => scrollToSection('timeline')} className="block text-gray-400 hover:text-[#9d4edd] font-medium py-2 w-full text-left">Timeline</button>
          <button onClick={() => scrollToSection('speakers')} className="block text-gray-400 hover:text-[#ff2a6d] font-medium py-2 w-full text-left">Speakers</button>
          <button onClick={() => scrollToSection('workshops')} className="block text-gray-400 hover:text-[#00f0ff] font-medium py-2 w-full text-left">Workshops</button>
          <button onClick={() => scrollToSection('gallery')} className="block text-gray-400 hover:text-[#9d4edd] font-medium py-2 w-full text-left">Gallery</button>
          <button onClick={() => scrollToSection('contact')} className="block text-gray-400 hover:text-[#ff2a6d] font-medium py-2 w-full text-left">Contact</button>
          <button className="cyberpunk-gradient w-full font-orbitron font-bold py-2 px-6 rounded-full text-white mt-2">
            Register Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
