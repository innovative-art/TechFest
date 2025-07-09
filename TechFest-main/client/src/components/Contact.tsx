import { useState } from 'react';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill out all fields",
        variant: "destructive"
      });
      return;
    }
    
    try {
      setIsSubmitting(true);
      
      const response = await apiRequest('POST', '/api/contact', formData);
      
      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your message has been sent. We'll get back to you soon.",
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: 'General Inquiry',
          message: ''
        });
      } else {
        const error = await response.json();
        throw new Error(error.message || 'Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "An error occurred while sending your message",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4 pink-neon-text">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#ff2a6d] to-[#00f0ff] mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">Have questions about the event? We're here to help you with registration, sponsorship opportunities, or any other inquiries.</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <div className="glassmorphism rounded-xl p-8 h-full border border-[#ff2a6d4d]">
              <h3 className="text-2xl font-orbitron font-bold mb-6 text-white">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#ff2a6d33] p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ff2a6d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[#ff2a6d] font-medium mb-1">Email</h4>
                    <p className="text-gray-300">info@futuretech-fest.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#00f0ff33] p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#00f0ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[#00f0ff] font-medium mb-1">Phone</h4>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#9d4edd33] p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#9d4edd]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[#9d4edd] font-medium mb-1">Location</h4>
                    <p className="text-gray-300">Tech Innovation Center<br />123 Future Avenue<br />San Francisco, CA 94105</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-xl font-orbitron font-bold mb-4 text-white">Connect With Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-[#00f0ff33] p-3 rounded-full text-[#00f0ff] hover:bg-[#00f0ff4d] transition-colors">
                    <i className="fab fa-twitter text-lg"></i>
                  </a>
                  <a href="#" className="bg-[#9d4edd33] p-3 rounded-full text-[#9d4edd] hover:bg-[#9d4edd4d] transition-colors">
                    <i className="fab fa-linkedin-in text-lg"></i>
                  </a>
                  <a href="#" className="bg-[#ff2a6d33] p-3 rounded-full text-[#ff2a6d] hover:bg-[#ff2a6d4d] transition-colors">
                    <i className="fab fa-instagram text-lg"></i>
                  </a>
                  <a href="#" className="bg-[#00f0ff33] p-3 rounded-full text-[#00f0ff] hover:bg-[#00f0ff4d] transition-colors">
                    <i className="fab fa-facebook-f text-lg"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="glassmorphism rounded-xl p-8 border border-[#00f0ff4d]">
              <h3 className="text-2xl font-orbitron font-bold mb-6 text-white">Send A Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-[#0a192980] border border-gray-700 focus:border-[#00f0ff] rounded-lg px-4 py-3 text-white focus:outline-none" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-[#0a192980] border border-gray-700 focus:border-[#00f0ff] rounded-lg px-4 py-3 text-white focus:outline-none" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                  <select 
                    id="subject" 
                    className="w-full bg-[#0a192980] border border-gray-700 focus:border-[#00f0ff] rounded-lg px-4 py-3 text-white focus:outline-none"
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option>General Inquiry</option>
                    <option>Registration Help</option>
                    <option>Sponsorship Opportunities</option>
                    <option>Speaker Application</option>
                    <option>Volunteer Information</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    className="w-full bg-[#0a192980] border border-gray-700 focus:border-[#00f0ff] rounded-lg px-4 py-3 text-white focus:outline-none" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="cyberpunk-gradient w-full font-orbitron font-bold py-3 px-6 rounded-full text-white hover:shadow-lg hover:shadow-[#ff2a6d4d] transition-all duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
