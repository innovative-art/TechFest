import { useState, useRef, useEffect } from 'react';
import { getAIResponse } from '@/lib/openai';

interface Message {
  role: 'user' | 'bot';
  content: string;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', content: 'Hello! Welcome to Tech Fest 2023. How can I assist you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  
  const closeChat = () => {
    setIsOpen(false);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim() || isLoading) return;
    
    const userMessage = input.trim();
    setInput('');
    
    // Add user message to chat
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    
    // Show loading state
    setIsLoading(true);
    
    try {
      // Get AI response
      const botResponse = await getAIResponse(userMessage);
      
      // Add bot response to chat
      setMessages(prev => [...prev, { role: 'bot', content: botResponse }]);
    } catch (error) {
      console.error('Error getting AI response:', error);
      
      // Add error message
      setMessages(prev => [...prev, { 
        role: 'bot', 
        content: 'Sorry, I encountered an error. Please try again later.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };
  
  // Scroll to bottom of messages when new message is added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  return (
    <div className="fixed right-6 bottom-6 z-50" id="chatbot-container">
      {/* Chatbot Toggle Button */}
      <button 
        className="cyberpunk-gradient p-4 rounded-full shadow-lg hover:shadow-[#ff2a6d4d] transition-all duration-300" 
        onClick={toggleChat}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>
      
      {/* Chatbot Interface */}
      <div 
        className={`chatbot-wrapper absolute bottom-16 right-0 w-80 md:w-96 transform transition-all duration-300 ${
          isOpen 
            ? 'opacity-100 scale-100 pointer-events-auto' 
            : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <div className="glassmorphism rounded-xl overflow-hidden shadow-2xl border border-[#00f0ff4d]">
          {/* Chatbot Header */}
          <div className="bg-gradient-to-r from-[#9d4edd] to-[#00f0ff] p-4 flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-orbitron font-bold text-white">TechBot</h3>
                <p className="text-xs text-white/80">AI Assistant</p>
              </div>
            </div>
            <button onClick={closeChat} className="text-white hover:text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Chat Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-4" id="chat-messages">
            {messages.map((message, index) => (
              message.role === 'bot' ? (
                // Bot Message
                <div key={index} className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-[#00f0ff33] flex items-center justify-center mr-2 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#00f0ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="bg-[#00f0ff1a] rounded-lg rounded-tl-none p-3 max-w-[85%]">
                    <p className="text-white">{message.content}</p>
                  </div>
                </div>
              ) : (
                // User Message
                <div key={index} className="flex items-start flex-row-reverse">
                  <div className="w-8 h-8 rounded-full bg-[#ff2a6d33] flex items-center justify-center ml-2 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#ff2a6d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="bg-[#ff2a6d1a] rounded-lg rounded-tr-none p-3 max-w-[85%]">
                    <p className="text-white">{message.content}</p>
                  </div>
                </div>
              )
            ))}
            
            {isLoading && (
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-[#00f0ff33] flex items-center justify-center mr-2 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#00f0ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="bg-[#00f0ff1a] rounded-lg rounded-tl-none p-3 max-w-[85%]">
                  <p className="text-white">Thinking...</p>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
          
          {/* Chat Input */}
          <div className="p-4 border-t border-gray-800">
            <form onSubmit={handleSubmit} className="flex items-center">
              <input 
                type="text" 
                placeholder="Type your message..." 
                className="flex-1 bg-[#0a192980] border border-gray-700 focus:border-[#00f0ff] rounded-l-lg px-4 py-2 text-white focus:outline-none"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
              />
              <button 
                type="submit" 
                className="bg-gradient-to-r from-[#9d4edd] to-[#00f0ff] text-white px-4 py-2 rounded-r-lg hover:opacity-90 transition-opacity"
                disabled={isLoading}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-2 text-center">Powered by AI • Answers may not be 100% accurate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
