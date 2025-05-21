import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { portfolioItems } from '@/data/portfolioData';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [nextProject, setNextProject] = useState(null);
  const [prevProject, setPrevProject] = useState(null);

  useEffect(() => {
    const projectId = parseInt(id);
    const foundProject = portfolioItems.find(item => item.id === projectId);
    
    if (foundProject) {
      setProject(foundProject);
      
      const currentIndex = portfolioItems.findIndex(item => item.id === projectId);
      setPrevProject(currentIndex > 0 ? portfolioItems[currentIndex - 1] : null);
      setNextProject(currentIndex < portfolioItems.length - 1 ? portfolioItems[currentIndex + 1] : null);
    }
    
    setLoading(false);
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return (
      <div className="pt-24 pb-20 flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="pt-24 pb-20 container mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <p className="mb-8">The project you are looking for does not exist or has been removed.</p>
        <Button asChild>
          <Link to="/portfolio">Back to Portfolio</Link>
        </Button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-20"
    >
      <div className="container mx-auto px-4">
        <Link 
          to="/portfolio" 
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Portfolio
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img  
                alt={project.imageAlt}
                className="w-full h-auto"
               src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-xs font-medium mb-4">
              {project.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">{project.title}</h1>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              {project.description}
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-1">Client</h3>
                <p className="font-medium">{project.client}</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-1">Year</h3>
                <p className="font-medium">{project.year}</p>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3">The Challenge</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {project.challenge}
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3">The Solution</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {project.solution}
              </p>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                className="rounded-xl overflow-hidden shadow-lg"
              >
                <div className="aspect-[4/3] w-full">
                  <img  
                    alt={image.alt}
                    className="w-full h-full object-cover"
                   src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />
                </div>
                <div className="p-4 bg-white dark:bg-gray-800">
                  <p className="font-medium">{image.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-200 dark:border-gray-800 pt-8">
          {prevProject ? (
            <Link 
              to={`/portfolio/${prevProject.id}`}
              className="flex items-center text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 mb-4 sm:mb-0"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              <div>
                <p className="text-xs">Previous Project</p>
                <p className="font-medium">{prevProject.title}</p>
              </div>
            </Link>
          ) : (
            <div></div>
          )}
          
          {nextProject && (
            <Link 
              to={`/portfolio/${nextProject.id}`}
              className="flex items-center text-right text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
            >
              <div>
                <p className="text-xs">Next Project</p>
                <p className="font-medium">{nextProject.title}</p>
              </div>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;