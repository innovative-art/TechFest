interface Speaker {
  name: string;
  title: string;
  company: string;
  bio: string;
  image: string;
  social: {
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
  type: string;
  schedule: string;
}

const speakers: Speaker[] = [
  {
    name: "Dr. Maya Patel",
    title: "CTO",
    company: "TechVision",
    bio: "Leading AI researcher and former head of Google's DeepMind project. Expert in neural networks and machine learning applications.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    social: {
      twitter: "#",
      linkedin: "#",
      website: "#"
    },
    type: "Keynote Speaker",
    schedule: "Day 1 • 9:00 AM"
  },
  {
    name: "Alexander Chen",
    title: "Founder",
    company: "Quantum Labs",
    bio: "Pioneer in quantum computing applications for cybersecurity. Led breakthrough research in quantum encryption protocols.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    social: {
      twitter: "#",
      linkedin: "#",
      website: "#"
    },
    type: "Workshop Leader",
    schedule: "Day 1 • 11:00 AM"
  },
  {
    name: "Dr. Sofia Rodriguez",
    title: "Director",
    company: "Ethics in Tech",
    bio: "Leading advocate for ethical AI implementation. Author of \"The Conscious Machine\" and advisor to multiple tech policy groups.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    social: {
      twitter: "#",
      linkedin: "#",
      website: "#"
    },
    type: "Panel Moderator",
    schedule: "Day 1 • 2:00 PM"
  }
];

const Speakers: React.FC = () => {
  return (
    <section id="speakers" className="py-20 bg-[#0a192980]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4 pink-neon-text">Featured Speakers</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#ff2a6d] to-[#9d4edd] mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">Learn from the brightest minds and industry pioneers shaping the future of technology.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <div key={index} className="speaker-card group relative">
              <div className="glassmorphism p-1 rounded-xl overflow-hidden transition-transform transform hover:scale-[1.02] duration-300">
                <div className="relative">
                  <img src={speaker.image} alt={speaker.name} className="w-full h-64 object-cover rounded-t-lg" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1929] via-[#0a192980] to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-orbitron font-bold text-white">{speaker.name}</h3>
                    <p className="text-[#00f0ff] font-medium">{speaker.title}, {speaker.company}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-4">{speaker.bio}</p>
                  <div className="flex space-x-3 mb-4">
                    {speaker.social.twitter && (
                      <a href={speaker.social.twitter} className="text-gray-400 hover:text-[#00f0ff] transition-colors">
                        <i className="fab fa-twitter"></i>
                      </a>
                    )}
                    {speaker.social.linkedin && (
                      <a href={speaker.social.linkedin} className="text-gray-400 hover:text-[#00f0ff] transition-colors">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    )}
                    {speaker.social.website && (
                      <a href={speaker.social.website} className="text-gray-400 hover:text-[#00f0ff] transition-colors">
                        <i className="fas fa-globe"></i>
                      </a>
                    )}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#9d4edd]">{speaker.type}</span>
                    <span className="text-sm text-gray-400">{speaker.schedule}</span>
                  </div>
                </div>
              </div>
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00f0ff00] via-[#9d4edd00] to-[#ff2a6d00] group-hover:from-[#00f0ff33] group-hover:via-[#9d4edd33] group-hover:to-[#ff2a6d33] opacity-0 group-hover:opacity-100 blur-xl transition-opacity -z-10"></div>
            </div>
          ))}
          
          {/* View All Speakers Button */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 flex justify-center mt-8">
            <button className="bg-transparent font-orbitron font-bold py-3 px-8 rounded-full text-[#ff2a6d] border border-[#ff2a6d] hover:bg-[#ff2a6d1a] transition-all">
              View All 50+ Speakers
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
