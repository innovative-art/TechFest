const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] py-10 border-t border-[#00f0ff4d]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-r from-[#00f0ff] to-[#9d4edd] p-0.5 rounded-full">
                <div className="bg-[#050505] p-1.5 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#00f0ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <span className="font-orbitron text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#9d4edd]">TECH FEST</span>
            </a>
            <p className="text-gray-400 mb-6">Experience the future of technology at the year's most immersive tech festival.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#00f0ff] transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#9d4edd] transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#ff2a6d] transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00f0ff] transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-orbitron font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#00f0ff] transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-[#00f0ff] transition-colors">About</a></li>
              <li><a href="#timeline" className="text-gray-400 hover:text-[#00f0ff] transition-colors">Schedule</a></li>
              <li><a href="#speakers" className="text-gray-400 hover:text-[#00f0ff] transition-colors">Speakers</a></li>
              <li><a href="#workshops" className="text-gray-400 hover:text-[#00f0ff] transition-colors">Workshops</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-[#00f0ff] transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-[#00f0ff] transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-orbitron font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#9d4edd] transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#9d4edd] transition-colors">Sponsorship Info</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#9d4edd] transition-colors">Venue Details</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#9d4edd] transition-colors">Accommodation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#9d4edd] transition-colors">Travel Info</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#9d4edd] transition-colors">Media Kit</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-orbitron font-bold text-white mb-4">Subscribe</h4>
            <p className="text-gray-400 mb-4">Stay updated with the latest news and event details.</p>
            <form className="mb-4">
              <div className="flex">
                <input type="email" placeholder="Your email" className="w-full bg-[#0a192980] border border-gray-700 focus:border-[#ff2a6d] rounded-l-lg px-4 py-2 text-white focus:outline-none" />
                <button type="submit" className="bg-[#ff2a6d] text-white px-4 py-2 rounded-r-lg hover:bg-[#ff2a6dcc] transition-colors">
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </form>
            <p className="text-gray-500 text-sm">By subscribing, you agree to our Privacy Policy and Terms of Service.</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
          <p>&copy; 2023 Future Tech Fest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
