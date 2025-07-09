import { useState } from 'react';

type Day = 'day1' | 'day2' | 'day3';

interface TimelineItem {
  time: string;
  title: string;
  description: string;
  location: string;
  type: string;
  colorClass: string;
}

const Timeline: React.FC = () => {
  const [activeDay, setActiveDay] = useState<Day>('day1');
  
  const timelineData: Record<Day, TimelineItem[]> = {
    day1: [
      {
        time: '9:00 AM - 10:30 AM',
        title: 'Opening Keynote',
        description: 'Welcome address and keynote speech on "The Future of AI" by Dr. Maya Patel, CTO of TechVision.',
        location: 'Main Stage',
        type: 'Keynote',
        colorClass: 'text-[#00f0ff]'
      },
      {
        time: '11:00 AM - 1:00 PM',
        title: 'Workshop Sessions',
        description: 'Multiple parallel workshops on AR/VR development, blockchain applications, and quantum computing basics.',
        location: 'Tech Labs',
        type: 'Interactive',
        colorClass: 'text-[#9d4edd]'
      },
      {
        time: '2:00 PM - 4:00 PM',
        title: 'Panel Discussion',
        description: '"Ethics in AI" - Leading experts debate the future of responsible artificial intelligence development.',
        location: 'Conference Hall B',
        type: 'Discussion',
        colorClass: 'text-[#ff2a6d]'
      },
      {
        time: '5:00 PM - 8:00 PM',
        title: 'Networking Mixer',
        description: 'Connect with fellow attendees, speakers, and industry leaders in our immersive networking experience with holographic displays.',
        location: 'Grand Hall',
        type: 'Social',
        colorClass: 'text-[#00f0ff]'
      }
    ],
    day2: [
      {
        time: '9:00 AM - 10:30 AM',
        title: 'Future of Quantum Computing',
        description: 'Keynote presentation on the latest breakthroughs in quantum computing by Alexander Chen.',
        location: 'Main Stage',
        type: 'Keynote',
        colorClass: 'text-[#00f0ff]'
      },
      {
        time: '11:00 AM - 5:00 PM',
        title: 'Hackathon Kickoff',
        description: 'AI for Good challenge begins! Teams will have 48 hours to develop solutions for social impact.',
        location: 'Innovation Hub',
        type: 'Competition',
        colorClass: 'text-[#9d4edd]'
      },
      {
        time: '1:00 PM - 3:00 PM',
        title: 'Startup Showcase',
        description: 'Emerging tech startups present their cutting-edge products and solutions.',
        location: 'Exhibition Hall',
        type: 'Presentation',
        colorClass: 'text-[#ff2a6d]'
      },
      {
        time: '4:00 PM - 6:00 PM',
        title: 'VR Film Festival',
        description: 'Experience immersive storytelling through VR films created by leading digital artists.',
        location: 'Virtual Theater',
        type: 'Entertainment',
        colorClass: 'text-[#00f0ff]'
      }
    ],
    day3: [
      {
        time: '9:00 AM - 10:30 AM',
        title: 'Robotics Revolution',
        description: 'Keynote and live demonstration of next-generation robotics technologies.',
        location: 'Main Stage',
        type: 'Keynote & Demo',
        colorClass: 'text-[#00f0ff]'
      },
      {
        time: '11:00 AM - 1:00 PM',
        title: 'Future of Work Panel',
        description: 'Experts discuss how AI and automation will transform careers and workplaces.',
        location: 'Conference Hall A',
        type: 'Panel',
        colorClass: 'text-[#9d4edd]'
      },
      {
        time: '2:00 PM - 4:00 PM',
        title: 'Hackathon Presentations',
        description: 'Teams present their AI solutions developed during the 48-hour hackathon.',
        location: 'Innovation Hub',
        type: 'Competition',
        colorClass: 'text-[#ff2a6d]'
      },
      {
        time: '5:00 PM - 8:00 PM',
        title: 'Closing Ceremony',
        description: 'Awards presentation, hackathon winners announced, and closing remarks.',
        location: 'Grand Hall',
        type: 'Ceremony',
        colorClass: 'text-[#00f0ff]'
      }
    ]
  };
  
  const activeTimelineItems = timelineData[activeDay];
  
  return (
    <section id="timeline" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4 cyan-neon-text">Event Timeline</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00f0ff] to-[#9d4edd] mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">Discover our action-packed schedule featuring keynotes, workshops, networking sessions, and more.</p>
        </div>
        
        <div className="relative">
          {/* Day Tabs */}
          <div className="flex justify-center mb-12 space-x-4 overflow-x-auto">
            <button 
              className={`px-6 py-3 rounded-full text-white font-orbitron font-bold border transition-all ${
                activeDay === 'day1' 
                  ? 'bg-[#00f0ff] bg-opacity-20 border-[#00f0ff]' 
                  : 'bg-transparent hover:bg-[#00f0ff]/10 border-gray-700 hover:border-[#00f0ff]'
              }`}
              onClick={() => setActiveDay('day1')}
            >
              Day 1
            </button>
            <button 
              className={`px-6 py-3 rounded-full text-white font-orbitron font-bold border transition-all ${
                activeDay === 'day2' 
                  ? 'bg-[#9d4edd] bg-opacity-20 border-[#9d4edd]' 
                  : 'bg-transparent hover:bg-[#9d4edd]/10 border-gray-700 hover:border-[#9d4edd]'
              }`}
              onClick={() => setActiveDay('day2')}
            >
              Day 2
            </button>
            <button 
              className={`px-6 py-3 rounded-full text-white font-orbitron font-bold border transition-all ${
                activeDay === 'day3' 
                  ? 'bg-[#ff2a6d] bg-opacity-20 border-[#ff2a6d]' 
                  : 'bg-transparent hover:bg-[#ff2a6d]/10 border-gray-700 hover:border-[#ff2a6d]'
              }`}
              onClick={() => setActiveDay('day3')}
            >
              Day 3
            </button>
          </div>
          
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#9d4edd] via-[#00f0ff] to-[#ff2a6d] hidden md:block" style={{ top: '12rem' }}></div>
          
          {/* Timeline Items */}
          <div className="timeline-items space-y-12 relative">
            {activeTimelineItems.map((item, index) => (
              <div key={index} className="timeline-item flex flex-col md:flex-row md:justify-center items-start relative">
                {index % 2 === 0 ? (
                  // Left-aligned item
                  <>
                    <div className="md:w-1/2 md:text-right md:pr-12 mb-4 md:mb-0">
                      <div className="md:hidden absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00f0ff] to-[#9d4edd]"></div>
                      <span className={`timeline-point relative bg-[#0a1929] md:hidden pl-6 block font-rajdhani ${item.colorClass}`}>{item.time}</span>
                      <span className={`hidden md:block font-rajdhani ${item.colorClass}`}>{item.time}</span>
                      <h3 className="text-2xl font-orbitron font-bold mt-2 md:mt-3 text-white md:mr-0 pl-6 md:pl-0">{item.title}</h3>
                      <p className="text-gray-300 mt-2 pl-6 md:pl-0">{item.description}</p>
                      <div className="mt-4 pl-6 md:pl-0">
                        <span className="inline-block px-3 py-1 rounded-full bg-[#00f0ff]/10 text-[#00f0ff] text-sm mr-2 mb-2">{item.location}</span>
                        <span className="inline-block px-3 py-1 rounded-full bg-[#9d4edd]/10 text-[#9d4edd] text-sm mb-2">{item.type}</span>
                      </div>
                    </div>
                    
                    {/* Circle Connector */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#00f0ff] rounded-full shadow-[0_0_10px_rgba(0,240,255,0.7)]"></div>
                    
                    {/* Content (empty for right-aligned items) */}
                    <div className="md:w-1/2 md:pl-12"></div>
                  </>
                ) : (
                  // Right-aligned item
                  <>
                    {/* Content (empty for left-aligned items) */}
                    <div className="md:w-1/2 md:pr-12"></div>
                    
                    {/* Circle Connector */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#9d4edd] rounded-full shadow-[0_0_10px_rgba(157,78,221,0.7)]"></div>
                    
                    {/* Time and Title */}
                    <div className="md:w-1/2 md:pl-12">
                      <div className="md:hidden absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#9d4edd] to-[#ff2a6d]"></div>
                      <span className={`timeline-point relative bg-[#0a1929] md:hidden pl-6 block font-rajdhani ${item.colorClass}`}>{item.time}</span>
                      <span className={`hidden md:block font-rajdhani ${item.colorClass}`}>{item.time}</span>
                      <h3 className="text-2xl font-orbitron font-bold mt-2 md:mt-3 text-white pl-6 md:pl-0">{item.title}</h3>
                      <p className="text-gray-300 mt-2 pl-6 md:pl-0">{item.description}</p>
                      <div className="mt-4 pl-6 md:pl-0">
                        <span className="inline-block px-3 py-1 rounded-full bg-[#ff2a6d]/10 text-[#ff2a6d] text-sm mr-2 mb-2">{item.location}</span>
                        <span className="inline-block px-3 py-1 rounded-full bg-[#00f0ff]/10 text-[#00f0ff] text-sm mb-2">{item.type}</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
