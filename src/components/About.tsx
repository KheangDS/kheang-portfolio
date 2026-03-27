import { motion } from 'framer-motion';
import { User, MapPin, MoveRight } from 'lucide-react';
import { profile } from '../data/profile';
import { Link } from 'react-scroll';

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="section-label" data-index="01">ABOUT ME</div>
      <h2 className="section-title">A little about who I am.</h2>

      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-16 items-start">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-justify text-lg md:text-xl text-slate-500 leading-relaxed mb-10 max-w-2xl font-normal">
            {profile.shortBio}
          </p>

          {/* Info Cards Container */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            {/* Student Card */}
            <div className="flex-1 flex items-center gap-4 bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/5 text-primary rounded-xl group-hover:bg-primary group-hover:text-white transition-colors">
                <User size={20} />
              </div>
              <div>
                <span className="block text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-0.5">STUDENT</span>
                <p className="text-sm font-bold text-dark">{profile.title}</p>
              </div>
            </div>

            {/* Location Card */}
            <div className="flex-1 flex items-center gap-4 bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-50 text-blue-500 rounded-xl group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <MapPin size={20} />
              </div>
              <div>
                <span className="block text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-0.5">BASED IN</span>
                <p className="text-sm font-bold text-dark">Phnom Penh, Cambodia</p>
              </div>
            </div>
          </div>

          {/* CTA Link */}
          <Link 
            to="contact" 
            smooth={true} 
            className="inline-flex items-center gap-2 text-primary font-bold text-sm group cursor-pointer"
          >
            Get in touch 
            <MoveRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Right Column - Photo Placeholder */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="aspect-[4/5] bg-slate-50 border-2 border-dashed border-slate-200 rounded-[32px] flex flex-col items-center justify-center gap-6 p-8 group relative overflow-hidden">
             {profile.profilePhoto ? (
              <img 
                src={profile.profilePhoto} 
                alt={profile.name} 
                className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:opacity-100 group-hover:scale-105 transition-all"
              />
             ) : null}
             
             {/* <div className="w-16 h-16 bg-slate-200/50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:scale-110 transition-transform">
               <Camera size={28} />
             </div> */}
             
             <div className="text-center space-y-2">
               <p className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase">Photo Placeholder</p>
               <p className="text-[11px] text-slate-400 font-medium">
                 Set <code className="bg-slate-200/50 px-1.5 py-0.5 rounded text-slate-600">profileImage</code> in <code className="bg-slate-200/50 px-1.5 py-0.5 rounded text-slate-600">config.js</code>
               </p>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
