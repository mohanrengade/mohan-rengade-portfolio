import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-5 py-24 text-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Get In <span className="text-orange-500">Touch</span>
        </h2>
        <p className="text-gray-400 text-lg">Let's discuss your project</p>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left Side: Avatar */}
        <div className="flex-1 w-full flex justify-center relative">
          <div className="w-[85%] max-w-[420px] aspect-[4/5] bg-[#0c1222] rounded-[2.5rem] border border-gray-800 flex items-center justify-center relative z-10 shadow-[0_0_40px_rgba(0,0,0,0.6)] overflow-hidden">
              <div className="flex flex-col items-center justify-center text-gray-500 text-center px-6">
                <span className="text-xl font-medium mb-2 text-gray-400">Contact Avatar</span>
                <span className="text-sm">(Placeholder Image)</span>
              </div>
          </div>
          {/* Decorative glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-orange-500/10 blur-[100px] rounded-full z-0 pointer-events-none"></div>
        </div>

        {/* Right Side: Form */}
        <div className="flex-1 w-full bg-[#131b2f]/90 backdrop-blur-md p-8 sm:p-10 rounded-[2rem] border border-gray-800/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col sm:flex-row gap-6">
              <input 
                type="text" 
                placeholder="First Name" 
                className="w-full bg-[#1e293b]/50 border border-gray-700/80 rounded-xl px-5 py-4 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors text-white placeholder-gray-500 font-medium" 
              />
              <input 
                type="text" 
                placeholder="Last Name" 
                className="w-full bg-[#1e293b]/50 border border-gray-700/80 rounded-xl px-5 py-4 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors text-white placeholder-gray-500 font-medium" 
              />
            </div>
            
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full bg-[#1e293b]/50 border border-gray-700/80 rounded-xl px-5 py-4 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors text-white placeholder-gray-500 font-medium" 
            />
            
            <input 
              type="tel" 
              placeholder="Phone Number" 
              className="w-full bg-[#1e293b]/50 border border-gray-700/80 rounded-xl px-5 py-4 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors text-white placeholder-gray-500 font-medium" 
            />
            
            <textarea 
              placeholder="Your Message" 
              rows="5" 
              className="w-full bg-[#1e293b]/50 border border-gray-700/80 rounded-xl px-5 py-4 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors text-white placeholder-gray-500 resize-none font-medium"
            ></textarea>
            
            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white font-bold text-lg py-4 rounded-xl mt-2 transition-all duration-300 shadow-[0_8px_25px_rgba(249,115,22,0.3)] hover:shadow-[0_10px_30px_rgba(249,115,22,0.4)] hover:-translate-y-1"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
