import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiJquery, SiExpress, SiMongodb } from 'react-icons/si';

const skillsData = [
  { name: 'HTML', icon: <FaHtml5 className="w-6 h-6 text-orange-500" />, level: 95, color: 'bg-orange-500' },
  { name: 'CSS', icon: <FaCss3Alt className="w-6 h-6 text-blue-500" />, level: 90, color: 'bg-blue-500' },
  { name: 'JavaScript', icon: <FaJs className="w-6 h-6 text-yellow-400" />, level: 85, color: 'bg-yellow-400' },
  { name: 'jQuery', icon: <SiJquery className="w-6 h-6 text-blue-400" />, level: 80, color: 'bg-blue-400' },
  { name: 'React JS', icon: <FaReact className="w-6 h-6 text-cyan-400" />, level: 85, color: 'bg-cyan-400' },
  { name: 'Node JS', icon: <FaNodeJs className="w-6 h-6 text-green-500" />, level: 80, color: 'bg-green-500' },
  { name: 'Express JS', icon: <SiExpress className="w-6 h-6 text-gray-300" />, level: 75, color: 'bg-gray-400' },
  { name: 'MongoDB', icon: <SiMongodb className="w-6 h-6 text-green-400" />, level: 80, color: 'bg-green-400' },
];

const Skills = () => {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-5 py-20 text-center">
      <h2 className="text-4xl font-bold text-white mb-4">
        My <span className="text-orange-500">Skills</span>
      </h2>
      <p className="text-gray-400 max-w-xl mx-auto mb-16">
        Full Stack Developer skilled in HTML, CSS, JavaScript, Bootstrap, React.js, jQuery, Node.js, Express.js, and MongoDB. I build responsive, user-friendly web apps and enjoy turning ideas into real products.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="bg-[#131b2f]/90 backdrop-blur border border-gray-800 p-6 rounded-[1.5rem] text-left hover:-translate-y-2 transition-transform duration-300 flex flex-col justify-between group shadow-lg hover:shadow-orange-500/10"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-2xl bg-[#1b253b] flex items-center justify-center border border-gray-700/50 shadow-inner group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-white font-bold text-lg capitalize">{skill.name}</h3>
            </div>

            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-gray-400 font-medium text-sm">Proficiency</span>
                <span className="text-orange-500 font-bold text-sm">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-800/60 rounded-full h-2.5 overflow-hidden">
                <div
                  className={`h-2.5 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
