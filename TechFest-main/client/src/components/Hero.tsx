import ThreeScene from './ThreeScene';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen pt-24 relative overflow-hidden">
      {/* Background Mesh Animation Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full opacity-30 absolute pointer-events-none">
          <div className="absolute w-full h-full bg-gradient-to-br from-[#9d4edd1a] via-transparent to-[#00f0ff1a]"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-10 md:pt-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h5 className="text-[#9d4edd] font-rajdhani uppercase tracking-wider mb-2">August 15-18, 2023</h5>
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-6 leading-tight">
              <span className="text-white">Future</span> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9d4edd] to-[#00f0ff]">Tech</span> 
              <span className="text-[#ff2a6d] neon-text">Fest</span> 
              <span className="text-white">2023</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Experience the cutting edge of technology at the year's most immersive tech festival. Dive into AI, VR, robotics, and more.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="cyberpunk-gradient font-orbitron font-bold py-3 px-8 rounded-full text-white hover:shadow-lg hover:shadow-[#ff2a6d4d] transition-all duration-300">
                Get Tickets
              </button>
              <button className="bg-transparent font-orbitron font-bold py-3 px-8 rounded-full text-[#00f0ff] border border-[#00f0ff] hover:bg-[#00f0ff1a] transition-all duration-300">
                Learn More
              </button>
            </div>
            
            {/* Event Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <div className="text-center">
                <p className="text-3xl font-orbitron font-bold text-[#00f0ff]">50+</p>
                <p className="text-gray-400">Speakers</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-orbitron font-bold text-[#9d4edd]">12</p>
                <p className="text-gray-400">Workshops</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-orbitron font-bold text-[#ff2a6d]">5</p>
                <p className="text-gray-400">Hackathons</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-orbitron font-bold text-[#00f0ff]">3000+</p>
                <p className="text-gray-400">Attendees</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              {/* 3D Model Container with Three.js */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00f0ff4d] to-[#9d4edd4d] blur-xl animate-pulse-glow"></div>
              <ThreeScene className="animate-float" />
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-gray-400 mb-2">Scroll Down</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#00f0ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
