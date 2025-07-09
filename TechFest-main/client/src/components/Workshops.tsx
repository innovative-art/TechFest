import { useState } from 'react';

type EventType = 'all' | 'workshops' | 'hackathons' | 'competitions';

interface Event {
  type: 'Workshop' | 'Hackathon' | 'Competition';
  title: string;
  description: string;
  time: string;
  location: string;
  leader: string;
  spotsLeft: number;
  colorClass: string;
  borderColor: string;
  glowColor: string;
}

const workshopEvents: Event[] = [
  {
    type: 'Workshop',
    title: 'VR/AR Development Masterclass',
    description: 'Create immersive experiences with the latest VR/AR frameworks. Bring your laptop for this hands-on session.',
    time: '3 hours • Day 1, 11:00 AM',
    location: 'Tech Lab A',
    leader: 'James Wilson',
    spotsLeft: 30,
    colorClass: 'text-[#00f0ff]',
    borderColor: 'border-[#00f0ff4d]',
    glowColor: 'bg-[#00f0ff33]'
  },
  {
    type: 'Hackathon',
    title: 'AI for Good Challenge',
    description: 'Build AI solutions that address real-world social, environmental, or healthcare challenges. $10,000 in prizes.',
    time: '48 hours • Starts Day 2, 9:00 AM',
    location: 'Innovation Hub',
    leader: 'Teams of 2-5',
    spotsLeft: 15,
    colorClass: 'text-[#9d4edd]',
    borderColor: 'border-[#9d4edd4d]',
    glowColor: 'bg-[#9d4edd33]'
  },
  {
    type: 'Workshop',
    title: 'Blockchain Development Intensive',
    description: 'Learn to build and deploy smart contracts on Ethereum and Solana. Includes NFT creation workshop.',
    time: '4 hours • Day 2, 1:00 PM',
    location: 'Tech Lab B',
    leader: 'Elena Vega',
    spotsLeft: 10,
    colorClass: 'text-[#ff2a6d]',
    borderColor: 'border-[#ff2a6d4d]',
    glowColor: 'bg-[#ff2a6d33]'
  }
];

const Workshops: React.FC = () => {
  const [activeTab, setActiveTab] = useState<EventType>('all');
  
  const filteredEvents = activeTab === 'all' 
    ? workshopEvents
    : workshopEvents.filter(event => {
        if (activeTab === 'workshops') return event.type === 'Workshop';
        if (activeTab === 'hackathons') return event.type === 'Hackathon';
        if (activeTab === 'competitions') return event.type === 'Competition';
        return true;
      });
  
  return (
    <section id="workshops" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4 cyan-neon-text">Workshops & Hackathons</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00f0ff] to-[#ff2a6d] mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">Get hands-on experience with cutting-edge technologies and compete in exciting challenges.</p>
        </div>
        
        {/* Tabs */}
        <div className="flex justify-center mb-12 space-x-4 overflow-x-auto">
          <button 
            className={`px-6 py-3 rounded-full whitespace-nowrap border font-orbitron font-bold transition-all ${
              activeTab === 'all' 
                ? 'bg-[#00f0ff] bg-opacity-20 text-[#00f0ff] border-[#00f0ff]' 
                : 'bg-transparent hover:bg-[#00f0ff]/10 text-gray-300 border-gray-700 hover:border-[#00f0ff]'
            }`}
            onClick={() => setActiveTab('all')}
          >
            All Events
          </button>
          <button 
            className={`px-6 py-3 rounded-full whitespace-nowrap border font-orbitron font-bold transition-all ${
              activeTab === 'workshops' 
                ? 'bg-[#00f0ff] bg-opacity-20 text-[#00f0ff] border-[#00f0ff]' 
                : 'bg-transparent hover:bg-[#00f0ff]/10 text-gray-300 border-gray-700 hover:border-[#00f0ff]'
            }`}
            onClick={() => setActiveTab('workshops')}
          >
            Workshops
          </button>
          <button 
            className={`px-6 py-3 rounded-full whitespace-nowrap border font-orbitron font-bold transition-all ${
              activeTab === 'hackathons' 
                ? 'bg-[#9d4edd] bg-opacity-20 text-[#9d4edd] border-[#9d4edd]' 
                : 'bg-transparent hover:bg-[#9d4edd]/10 text-gray-300 border-gray-700 hover:border-[#9d4edd]'
            }`}
            onClick={() => setActiveTab('hackathons')}
          >
            Hackathons
          </button>
          <button 
            className={`px-6 py-3 rounded-full whitespace-nowrap border font-orbitron font-bold transition-all ${
              activeTab === 'competitions' 
                ? 'bg-[#ff2a6d] bg-opacity-20 text-[#ff2a6d] border-[#ff2a6d]' 
                : 'bg-transparent hover:bg-[#ff2a6d]/10 text-gray-300 border-gray-700 hover:border-[#ff2a6d]'
            }`}
            onClick={() => setActiveTab('competitions')}
          >
            Competitions
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <div key={index} className="workshop-card group relative">
              <div className={`glassmorphism rounded-xl overflow-hidden h-full transition-transform transform hover:scale-[1.02] duration-300 ${event.borderColor}`}>
                <div className="p-6">
                  <span className={`inline-block px-3 py-1 rounded-full ${event.glowColor} ${event.colorClass} text-sm mb-4`}>{event.type}</span>
                  <h3 className="text-xl font-orbitron font-bold text-white mb-3">{event.title}</h3>
                  <p className="text-gray-300 mb-6">{event.description}</p>
                  
                  <div className="flex items-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${event.colorClass} mr-2`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-400">{event.time}</span>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${event.colorClass} mr-2`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-400">{event.location}</span>
                  </div>
                  
                  <div className="flex items-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${event.colorClass} mr-2`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="text-gray-400">Led by: {event.leader}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className={`${event.colorClass} font-bold font-orbitron`}>{event.spotsLeft} spots left</span>
                    <button className={`px-4 py-2 rounded-full ${event.glowColor} hover:${event.glowColor.replace('33', '4d')} ${event.colorClass} font-medium transition-colors`}>
                      Register{event.type === 'Hackathon' ? ' Team' : ''}
                    </button>
                  </div>
                </div>
              </div>
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 rounded-xl ${event.glowColor.replace('33', '00')} group-hover:${event.glowColor} opacity-0 group-hover:opacity-100 blur-xl transition-opacity -z-10`}></div>
            </div>
          ))}
        </div>
        
        {/* Load More Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-transparent font-orbitron font-bold py-3 px-8 rounded-full text-[#00f0ff] border border-[#00f0ff] hover:bg-[#00f0ff1a] transition-all">
            Explore All Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default Workshops;
