import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { profile } from '../data/profile';
import { FaTelegram } from 'react-icons/fa';

const Contact = () => {
  // const copyToClipboard = (text: string) => {
  //   navigator.clipboard.writeText(text);
  //   alert('Copied to clipboard!');
  // };

  return (
    <section id="contact" className="py-24">
      <div className="section-label" data-index="05">CONTACT</div>
      <h2 className="section-title">Let's work together.</h2>

      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg md:text-xl text-slate-500 leading-relaxed mb-12 max-w-xl font-normal">
            I'm always open to discussing new projects, internships, or just a friendly 
            conversation about data and technology. Drop me a message — I'll get back to you soon.
          </p>

          {/* Contact Cards */}
          <div className="flex flex-col gap-4">
            {/* Email Card */}
            <a 
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-6 bg-white border border-slate-100 p-5 rounded-[24px] hover:border-primary transition-all shadow-sm no-underline"
            >
              <div className="w-12 h-12 bg-primary/5 text-primary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                <Mail size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <span className="block text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-1">EMAIL</span>
                <p className="text-sm font-bold text-dark truncate">{profile.email}</p>
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-xl text-slate-200 group-hover:text-primary transition-all group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRight size={18} />
              </div>
            </a>

            {/* GitHub Card */}
            <a 
              href={profile.github} 
              target="_blank" 
              rel="noreferrer" 
              className="group flex items-center gap-6 bg-white border border-slate-100 p-5 rounded-[24px] hover:border-dark transition-all shadow-sm no-underline"
            >
              <div className="w-12 h-12 bg-slate-100 text-dark rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-dark group-hover:text-white transition-colors">
                <Github size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <span className="block text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-1">GITHUB</span>
                <p className="text-sm font-bold text-dark">@KheangDS</p>
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-xl text-slate-200 group-hover:text-dark transition-all group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRight size={18} />
              </div>
            </a>

            {/* LinkedIn Card */}
            <a 
              href={profile.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="group flex items-center gap-6 bg-white border border-slate-100 p-5 rounded-[24px] hover:border-[#0077b5] transition-all shadow-sm no-underline"
            >
              <div className="w-12 h-12 bg-blue-50 text-[#0077b5] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#0077b5] group-hover:text-white transition-colors">
                <Linkedin size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <span className="block text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-1">LINKEDIN</span>
                <p className="text-sm font-bold text-dark">@yengkheang</p>
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-xl text-slate-200 group-hover:text-[#0077b5] transition-all group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRight size={18} />
              </div>
            </a>
          </div>
        </motion.div>

        {/* Right Column - CTA Card */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-full bg-primary bg-gradient-to-br from-[#5d59ef] to-[#6366f1] text-white p-12 md:p-16 rounded-[40px] shadow-2xl shadow-primary/20 flex flex-col justify-between aspect-[1/0.8]">
            <div>
              <span className="block text-[10px] font-bold tracking-[0.3em] uppercase opacity-60 mb-8">Ready to connect?</span>
              <h3 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tighter leading-tight">Get in touch</h3>
            </div>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-4xl md:text-3xl font-medium opacity-90">{profile.telegramName}</span>
              <a 
                href={profile.telegramUrl}
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 bg-white/10 hover:bg-white hover:text-primary rounded-full flex items-center justify-center transition-all group"
              >
                <FaTelegram size={30} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
