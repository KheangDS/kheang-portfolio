import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { profile } from '../data/profile';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 md:pt-40">
      <div className="max-w-6xl mx-auto px-6 w-full">
        {/* Status Pill */}
        <motion.div 
          className="flex items-center gap-2 bg-primary/5 border border-primary/10 text-primary px-4 py-2 rounded-full text-[10px] font-bold tracking-[0.2em] w-fit mb-12 shadow-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
          STATUS: {profile.status}
        </motion.div>

        {/* Name */}
        <motion.div 
          className="mb-10 space-y-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h1 className="text-7xl md:text-[120px] font-extrabold leading-[0.9] text-dark tracking-tighter">
            YENG
          </h1>
          <h1 className="text-7xl pb-5 md:text-[120px] font-extrabold leading-[0.9] text-gradient tracking-tighter">
            Kheang
          </h1>
        </motion.div>

        {/* Subtext */}
        <motion.div 
          className="flex flex-col md:flex-row md:items-center gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-[#f1f5f9] text-dark px-4 py-2 rounded-xl font-bold text-sm tracking-tight shadow-sm border border-slate-200/50 w-fit">
            {profile.title}
          </div>
          <div className="hidden md:block w-8 h-[1px] bg-slate-300"></div>
          <p className="text-justify text-lg md:text-xl text-text-muted font-normal max-w-2xl leading-relaxed">
            I turn raw data into meaningful insights and intelligent systems—combining analytics, machine learning, and backend development to solve real-world problems.
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          className="flex gap-4 mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a 
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 flex items-center justify-center bg-white border border-slate-200 rounded-xl text-slate-500 hover:border-primary hover:text-primary transition-all shadow-sm"
          >
            <Mail size={18} />
          </a>
          <a 
            href={profile.github} 
            target="_blank" 
            rel="noreferrer" 
            className="w-12 h-12 flex items-center justify-center bg-white border border-slate-200 rounded-xl text-slate-500 hover:border-primary hover:text-primary transition-all shadow-sm"
          >
            <Github size={18} />
          </a>
          <a 
            href={profile.linkedin} 
            target="_blank" 
            rel="noreferrer" 
            className="w-12 h-12 flex items-center justify-center bg-white border border-slate-200 rounded-xl text-slate-500 hover:border-primary hover:text-primary transition-all shadow-sm"
          >
            <Linkedin size={18} />
          </a>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link 
            to="projects" 
            smooth={true} 
            className="btn btn-primary sm:w-52"
          >
            View My Work
          </Link>
          <Link 
            to="contact" 
            smooth={true} 
            className="btn btn-outline sm:w-52 bg-white"
          >
            Say Hello
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[10px] font-bold tracking-[0.3em] text-text-dim uppercase">Scroll</span>
          <ChevronDown size={16} className="text-text-dim animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;