import { profile } from '../data/profile';
import { Mail, Github, Linkedin } from 'lucide-react';
import { FaTelegram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 md:py-12 border-t border-slate-100 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
        {/* Logo */}
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <span className="font-extrabold text-sm md:text-lg tracking-tight text-dark uppercase">YENG</span>
          <span className="font-normal text-sm md:text-lg tracking-tight text-slate-400">Kheang</span>
          <div className="w-1.5 h-1.5 bg-primary rounded-full ml-0.5 flex-shrink-0"></div>
        </div>

        {/* Copyright */}
        <p className="text-[10px] md:text-[11px] font-medium text-slate-400 tracking-wider uppercase whitespace-nowrap">
          &copy; {currentYear} &bull; Built with care
        </p>

        {/* Social Icons */}
        <div className="flex gap-3 md:gap-4 flex-shrink-0">
          <a 
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
            target="_blank"
            rel="noreferrer"
            className="w-9 md:w-10 h-9 md:h-10 flex items-center justify-center rounded-full border border-slate-200 text-slate-400 hover:border-primary hover:text-primary transition-all shadow-sm"
          >
            <Mail size={16} />
          </a>
          <a 
            href={profile.github} 
            target="_blank" 
            rel="noreferrer"
            className="w-9 md:w-10 h-9 md:h-10 flex items-center justify-center rounded-full border border-slate-200 text-slate-400 hover:border-dark hover:text-dark transition-all shadow-sm"
          >
            <Github size={16} />
          </a>
          <a 
            href={profile.linkedin} 
            target="_blank" 
            rel="noreferrer"
            className="w-9 md:w-10 h-9 md:h-10 flex items-center justify-center rounded-full border border-slate-200 text-slate-400 hover:border-[#0077b5] hover:text-[#0077b5] transition-all shadow-sm"
          >
            <Linkedin size={16} />
          </a>
          <a 
            href={profile.telegramUrl} 
            target="_blank" 
            rel="noreferrer"
            className="w-9 md:w-10 h-9 md:h-10 flex items-center justify-center rounded-full border border-slate-200 text-slate-400 hover:border-[#0088cc] hover:text-[#0088cc] transition-all shadow-sm"
          >
            <FaTelegram size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;