import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import { Project } from '../types';
import { fetchProjects } from '../services/projectService';
import ProjectCard from '../components/ProjectCard';
import LoadingSpinner from '../components/LoadingSpinner';

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProjects();
        setProjects(data);
        setError(null);
      } catch (err) {
        setError('Unable to load projects. Please try again later.');
        console.error('Error loading projects:', err);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'hardware', label: 'Hardware' },
    { id: 'software', label: 'Software' },
    { id: 'interactive', label: 'Interactive' },
    { id: 'ai', label: 'AI' },
    { id: 'animatronics', label: 'Animatronics' },
    { id: 'vr', label: 'VR' },
    { id: 'kiosks', label: 'Kiosks' },
    { id: 'haptics', label: 'Haptics' },
    { id: 'fx', label: 'FX' }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => {
        // Check if project has the selected category tag
        return project.tags.some(tag => tag.toLowerCase() === filter.toLowerCase());
      });

  if (loading) {
    return (
      <div className="pt-24">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-24">
        <div className="max-w-md mx-auto text-center">
          <AlertCircle className="w-12 h-12 mx-auto mb-4 text-red-500" />
          <h2 className="text-xl font-semibold mb-2">Error Loading Projects</h2>
          <p className="text-gray-400">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8">Projects</h1>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map(category => (
            <motion.button
              key={category.id}
              onClick={() => setFilter(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full transition-colors ${
                filter === category.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-white/5 hover:bg-white/10'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400">No projects found for this category.</p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Projects;