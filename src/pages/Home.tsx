import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Cpu, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [particles, setParticles] = useState<{ x: number; y: number; }[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Initial dimensions
    updateDimensions();

    // Update particles based on screen size
    const particleCount = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 25000), 30);
    const newParticles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight
    }));
    setParticles(newParticles);

    // Listen for resize events
    window.addEventListener('resize', () => {
      updateDimensions();
      const newParticleCount = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 25000), 30);
      const updatedParticles = Array.from({ length: newParticleCount }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight
      }));
      setParticles(updatedParticles);
    });

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-pulse" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 relative z-10"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            William J. Welsh
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Innovating at the Intersection of Technology, Art, and Engineering
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full transition-all transform hover:scale-105"
            >
              View Projects
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-6 py-3 border border-blue-500 hover:bg-blue-500/10 rounded-full transition-all"
            >
              Contact Me
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
              initial={{ x: particle.x, y: particle.y }}
              animate={{
                x: [particle.x, Math.random() * dimensions.width],
                y: [particle.y, Math.random() * dimensions.height],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }}
            />
          ))}
        </div>
      </section>

      {/* Featured Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="w-8 h-8 mb-4" />,
                title: "Software Development",
                description: "Creating innovative solutions with cutting-edge technologies"
              },
              {
                icon: <Palette className="w-8 h-8 mb-4" />,
                title: "Creative Design",
                description: "Blending aesthetics with functionality for unique experiences"
              },
              {
                icon: <Cpu className="w-8 h-8 mb-4" />,
                title: "Engineering",
                description: "Building complex systems and interactive installations"
              }
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="p-6 rounded-xl backdrop-blur-lg bg-white/5 hover:bg-white/10 transition-all"
              >
                {skill.icon}
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-gray-300 dark:text-gray-700">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;