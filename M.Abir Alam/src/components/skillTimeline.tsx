import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

interface Skill {
  id: string;
  title: string;
  softwareSkills: { name: string; icon: string }[];
  points: string[];
}

interface AdvancedSkillTimelineProps {
  skills: Skill[];
}

const AdvancedSkillTimeline: React.FC<AdvancedSkillTimelineProps> = ({ skills }) => {
  return (
    <div className="relative mx-auto px-4 md:px-8 py-16">
      {/* Dotted Timeline with Rocket Icon */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full">
        <div className="h-full w-px border-l-2 border-accent border-dashed" />
        <motion.div
          className="absolute -top-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          
        </motion.div>
      </div>

      {/* Skills Cards */}
      <div className="relative">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="mb-24"
          >
            <div
              className={`flex justify-center items-start gap-8 md:gap-16 relative ${
                index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-6">
                <div className="w-6 h-6 bg-accent rounded-full shadow-md border-2 border-white" />
              </div>

              {/* Content Card */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`w-full md:w-[500px] bg-bg-secondary rounded-xl shadow-lg 
                           border border-gray-200 dark:border-gray-700 p-6 transition-transform 
                           ${index % 2 === 0 ? 'md:mr-[55%]' : 'md:ml-[55%]'}`}
              >
                {/* Card Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-accent/10 ">
                    
                  </div>
                  <h3 className="text-2xl font-bold text-">
                    {skill.title}
                  </h3>
                </div>

                {/* Skills Icons */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {skill.softwareSkills.map((software) => (
                    <div key={software.name} className="group relative">
                      <div
                        className="p-2.5 bg-bg hover:bg-bg-secondary rounded-lg 
                                    shadow transition-all duration-300"
                      >
                        <Icon
                          icon={software.icon}
                          className="w-8 h-8 text-accent"
                        />
                      </div>
                      <span
                        className="absolute -top-10 left-1/2 transform -translate-x-1/2 
                                     hidden group-hover:block bg-accent text-white text-xs 
                                     py-1.5 px-3 rounded-full whitespace-nowrap z-20
                                     animate-fade-in"
                      >
                        {software.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Skills Points */}
                <ul className="space-y-3">
                  {skill.points.map((point, idx) => (
                    <motion.li
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      key={idx}
                      className="flex items-start gap-3 group"
                    >
                      <span className="mt-1.5">
                        <Icon
                          icon="ph:check-circle-fill"
                          className="w-5 h-5 text-accent group-hover:text-accent-light 
                                   transition-colors duration-300"
                        />
                      </span>
                      <span className="text-text-secondary text-sm leading-relaxed">
                        {point}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AdvancedSkillTimeline;
