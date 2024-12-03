import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="mb-12 relative">
          <img
            src="https://wjwelsh.com/images/profile.jpg"
            alt="William J. Welsh"
            className="w-full h-64 object-cover rounded-xl mb-8"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent rounded-xl" />
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-gray-300 dark:text-gray-700">
            Specializing in animatronics, VR props, and interactive kiosks. Creating immersive experiences through innovative technology.
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="text-blue-500" />
              <h2 className="text-2xl font-semibold">Experience</h2>
            </div>
            <div className="space-y-6">
              {[
                {
                  role: 'Lead Animatronics Engineer',
                  company: 'Creative Technologies',
                  period: '2021 - Present',
                  description: 'Designing and developing cutting-edge animatronic systems and interactive experiences.'
                },
                {
                  role: 'VR Development Specialist',
                  company: 'Immersive Solutions',
                  period: '2019 - 2021',
                  description: 'Created innovative VR props and experiences for entertainment and education sectors.'
                }
              ].map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="pl-4 border-l-2 border-blue-500"
                >
                  <h3 className="font-semibold">{job.role}</h3>
                  <p className="text-sm text-gray-400 dark:text-gray-600">{job.company} | {job.period}</p>
                  <p className="mt-2">{job.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-blue-500" />
              <h2 className="text-2xl font-semibold">Skills</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                'Animatronics',
                'VR Development',
                'Interactive Design',
                'Robotics',
                'Hardware Integration',
                'Custom Electronics'
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-lg bg-white/5 backdrop-blur-sm"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default About;