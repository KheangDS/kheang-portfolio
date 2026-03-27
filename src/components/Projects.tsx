import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, BarChart3, Brain } from 'lucide-react';
import { projects } from '../data/projects';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Computer Vision', 'Data Analysis', 'Software Engineering'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.subtitle === filter);

  const getIcon = (subtitle: string) => {
    if (subtitle === 'Computer Vision') return <Brain size={14} />;
    if (subtitle === 'Data Analysis') return <BarChart3 size={14} />;
    return <Code2 size={14} />;
  };

  const getBadgeClass = (subtitle: string) => {
    if (subtitle === 'Computer Vision') return 'text-purple-500';
    if (subtitle === 'Data Analysis') return 'text-blue-500';
    return 'text-cyan-500';
  };

  return (
    <section id="projects" className="py-24">
      <div className="section-label" data-index="03">SELECTED WORKS</div>
      <h2 className="section-title">Projects I've built.</h2>

      {/* Filter Buttons */}
      <div className="flex gap-4 mb-12 flex-wrap">
        {categories.map((cat) => (
          <button 
            key={cat} 
            className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-sm ${
              filter === cat 
                ? 'bg-primary text-white shadow-btn' 
                : 'bg-white border border-slate-100 text-slate-500 hover:border-slate-300'
            }`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode='popLayout'>
          {filteredProjects.map((project, idx) => (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white border border-slate-100 rounded-[32px] overflow-hidden hover:shadow-xl transition-all flex flex-col group shadow-sm"
            >
              {/* Image Box */}
              <div className="relative w-full aspect-[4/3] bg-slate-50 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    const parent = (e.target as HTMLImageElement).parentElement;
                    if (parent) {
                      parent.innerHTML = '<div class="flex items-center justify-center h-full bg-slate-100 text-slate-300 font-bold text-[10px] tracking-widest uppercase">Project Image</div>';
                    }
                  }}
                />
                {/* Badge */}
                <div className={`absolute top-5 left-5 flex items-center gap-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-[10px] font-bold tracking-[0.1em] shadow-sm border border-slate-100/50 ${getBadgeClass(project.subtitle)}`}>
                  {getIcon(project.subtitle)}
                  <span>{project.subtitle.toUpperCase()}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-dark mb-3 tracking-tight group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-1 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-50">
                  {project.tech.map((t) => (
                    <span 
                      key={t} 
                      className="text-[10px] font-bold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg uppercase tracking-wider"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
