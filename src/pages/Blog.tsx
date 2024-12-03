import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Tag } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: 'The Evolution of Animatronic Technology',
      excerpt: 'Exploring the latest advancements in animatronic systems and their applications in entertainment...',
      date: '2024-03-15',
      readTime: '5 min read',
      category: 'Animatronics',
      image: 'https://wjwelsh.com/images/blog/animatronics.jpg'
    },
    {
      title: 'VR Props: Enhancing Virtual Experiences',
      excerpt: 'How physical props are revolutionizing virtual reality interactions...',
      date: '2024-03-10',
      readTime: '8 min read',
      category: 'VR',
      image: 'https://wjwelsh.com/images/blog/vrprops.jpg'
    },
    {
      title: 'Interactive Kiosk Design Principles',
      excerpt: 'Best practices for creating engaging and user-friendly interactive kiosks...',
      date: '2024-03-05',
      readTime: '6 min read',
      category: 'Design',
      image: 'https://wjwelsh.com/images/blog/kiosks.jpg'
    }
  ];

  return (
    <div className="pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-12">Blog</h1>
        <div className="grid gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/10 transition-colors"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="flex items-center gap-4 text-sm text-gray-400 dark:text-gray-600 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Tag size={14} />
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-2xl font-semibold mb-3">{post.title}</h2>
                  <p className="text-gray-300 dark:text-gray-700 mb-4">{post.excerpt}</p>
                  <button className="text-blue-500 hover:text-blue-400 font-medium transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Blog;