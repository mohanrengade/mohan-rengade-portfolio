import React from 'react';
import profilePhoto from '../assets/MyProfilePhoto.png';

const About = () => {
  return (
    <section id="about" className="max-w-6xl mx-auto px-5 py-20 flex flex-col md:flex-row items-center gap-12 text-white">
      {/* Left Image Section */}
      <div className="flex-1 w-full relative flex justify-center items-center">
        {/* Decorative background star/glow */}
        <div className="absolute inset-0 bg-orange-500/20 blur-[120px] rounded-full z-0 pointer-events-none"></div>
        <div className="relative z-10 w-full max-w-[450px] aspect-square bg-[#0d1526] rounded-[2rem] border border-gray-800 flex items-center justify-center overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          {/* Profile Photo */}
          <img
            src={profilePhoto}
            alt="Mohan Rengade"
            className="w-full h-full object-cover rounded-[2rem] hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Right Text Section */}
      <div className="flex-1 w-full flex flex-col items-start text-left">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          <span className="text-orange-500">About</span> Me
        </h2>

        <div className="bg-[#131b2f]/80 backdrop-blur-sm p-7 rounded-2xl border border-gray-800 shadow-xl mb-10">
          <p className="text-gray-300 leading-relaxed text-base">
            I am Mohan Rengade, a passionate Full Stack Developer with a strong foundation in building modern and responsive web applications. I specialize in front-end technologies like HTML, CSS, JavaScript, Bootstrap, React JS, and jQuery, along with back-end development using Node.js, Express.js, and MongoDB.

            I enjoy developing scalable applications and creating seamless user experiences by writing clean and efficient code. I am always eager to learn new technologies, improve my problem-solving skills, and stay updated with the latest trends in web development.

            Currently, I am focused on enhancing my expertise and working on real-world projects that help me grow as a developer and deliver high-quality solutions.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-10 md:gap-16 mb-12 w-full">
          <div>
            <h3 className="text-4xl font-extrabold text-orange-500 mb-2">5+</h3>
            <p className="text-gray-400 text-sm font-medium">Education</p>
          </div>
          <div>
            <h3 className="text-4xl font-extrabold text-orange-500 mb-2">0.6+</h3>
            <p className="text-gray-400 text-sm font-medium">Years Experience</p>
          </div>
          <div>
            <h3 className="text-4xl font-extrabold text-orange-500 mb-2">2+</h3>
            <p className="text-gray-400 text-sm font-medium">Projects Completed</p>
          </div>
        </div>

        <button className="px-8 py-3.5 rounded-full border-2 border-orange-500 text-white font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.2)] hover:shadow-[0_0_25px_rgba(249,115,22,0.4)]">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default About;
