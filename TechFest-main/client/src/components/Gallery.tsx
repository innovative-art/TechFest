interface GalleryItem {
  image: string;
  title: string;
  event: string;
}

const galleryItems: GalleryItem[] = [
  {
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    title: "Opening Keynote",
    event: "Tech Fest 2022"
  },
  {
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    title: "VR Experience Zone",
    event: "Tech Fest 2022"
  },
  {
    image: "https://images.unsplash.com/photo-1652651989477-6072cceff271?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    title: "Holographic Displays",
    event: "Innovation Showcase"
  },
  {
    image: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    title: "Robotics Workshop",
    event: "Tech Fest 2022"
  },
  {
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    title: "Networking Mixer",
    event: "Evening Event"
  },
  {
    image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    title: "Drone Racing Competition",
    event: "Tech Challenge"
  },
  {
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    title: "Future of AI Panel",
    event: "Expert Discussion"
  },
  {
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    title: "Hackathon Winners",
    event: "Award Ceremony"
  }
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-[#0a192980]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4 purple-neon-text">Event Gallery</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#9d4edd] to-[#ff2a6d] mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">Explore the visual highlights from our previous technology festivals and exhibitions.</p>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <div key={index} className="gallery-item relative group overflow-hidden rounded-lg">
              <img src={item.image} alt={item.title} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1929] via-[#0a192980] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4">
                  <h4 className="text-white font-orbitron font-bold">{item.title}</h4>
                  <p className="text-gray-300 text-sm">{item.event}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View More Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-transparent font-orbitron font-bold py-3 px-8 rounded-full text-[#9d4edd] border border-[#9d4edd] hover:bg-[#9d4edd1a] transition-all">
            View Full Gallery
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
