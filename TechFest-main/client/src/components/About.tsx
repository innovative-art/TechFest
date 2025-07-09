const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#0a192980]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4 purple-neon-text">About The Event</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#9d4edd] to-[#00f0ff] mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative glassmorphism rounded-xl overflow-hidden p-1 neon-border">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80" 
                alt="Tech conference with futuristic lighting" 
                className="rounded-xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a192980] to-transparent pointer-events-none"></div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-orbitron font-bold mb-6 text-[#00f0ff]">Exploring Tomorrow's Innovations</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Future Tech Fest brings together the brightest minds, cutting-edge technologies, and visionary companies for three days of immersive experiences, thought-provoking discussions, and hands-on workshops.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Our mission is to showcase the technologies that will shape our future, connect innovators with opportunities, and inspire the next generation of tech pioneers.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glassmorphism rounded-xl p-5 border border-[#00f0ff33] hover:border-[#00f0ff80] transition-all">
                <div className="w-12 h-12 rounded-full bg-[#00f0ff33] flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#00f0ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="font-orbitron font-bold text-lg mb-2 text-white">Innovation Showcases</h4>
                <p className="text-gray-400">Cutting-edge products and prototypes from leading tech companies and startups.</p>
              </div>
              
              <div className="glassmorphism rounded-xl p-5 border border-[#9d4edd33] hover:border-[#9d4edd80] transition-all">
                <div className="w-12 h-12 rounded-full bg-[#9d4edd33] flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#9d4edd]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="font-orbitron font-bold text-lg mb-2 text-white">Expert Networking</h4>
                <p className="text-gray-400">Connect with industry leaders, investors, and fellow tech enthusiasts.</p>
              </div>
              
              <div className="glassmorphism rounded-xl p-5 border border-[#ff2a6d33] hover:border-[#ff2a6d80] transition-all">
                <div className="w-12 h-12 rounded-full bg-[#ff2a6d33] flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ff2a6d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h4 className="font-orbitron font-bold text-lg mb-2 text-white">Interactive Workshops</h4>
                <p className="text-gray-400">Hands-on sessions on AI, blockchain, VR/AR, robotics, and more.</p>
              </div>
              
              <div className="glassmorphism rounded-xl p-5 border border-[#00f0ff33] hover:border-[#00f0ff80] transition-all">
                <div className="w-12 h-12 rounded-full bg-[#00f0ff33] flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#00f0ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h4 className="font-orbitron font-bold text-lg mb-2 text-white">Competitive Hackathons</h4>
                <p className="text-gray-400">Test your skills and creativity in our themed coding challenges with amazing prizes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
