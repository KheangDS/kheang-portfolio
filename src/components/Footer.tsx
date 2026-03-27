import { profile } from '../data/profile';
import { Mail, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-slate-100 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo */}
        <div className="flex items-center gap-1.5">
          <span className="font-extrabold text-lg tracking-tight text-dark uppercase">YENG</span>
          <span className="font-normal text-lg tracking-tight text-slate-400">Kheang</span>
          <div className="w-1.5 h-1.5 bg-primary rounded-full ml-0.5"></div>
        </div>

        {/* Copyright */}
        <p className="text-[11px] font-medium text-slate-400 tracking-wider uppercase">
          &copy; {currentYear} &bull; Built with care
        </p>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a 
            href={`mailto:${profile.email}`}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 text-slate-400 hover:border-primary hover:text-primary transition-all shadow-sm"
          >
            <Mail size={16} />
          </a>
          <a 
            href={profile.github} 
            target="_blank" 
            rel="noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 text-slate-400 hover:border-dark hover:text-dark transition-all shadow-sm"
          >
            <Github size={16} />
          </a>
          <a 
            href={profile.linkedin} 
            target="_blank" 
            rel="noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 text-slate-400 hover:border-[#0077b5] hover:text-[#0077b5] transition-all shadow-sm"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
