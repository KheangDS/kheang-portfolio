import { motion } from 'framer-motion';
import { skills } from '../data/skills';

const Skills = () => {
  const cardStyles = [
    { bg: 'bg-[#5d59ef]/5', border: 'border-[#5d59ef]/10', dot: 'bg-[#5d59ef]', text: 'text-[#5d59ef]' },
    { bg: 'bg-[#22d3ee]/5', border: 'border-[#22d3ee]/10', dot: 'bg-[#22d3ee]', text: 'text-[#22d3ee]' },
    { bg: 'bg-[#fb7185]/5', border: 'border-[#fb7185]/10', dot: 'bg-[#fb7185]', text: 'text-[#fb7185]' },
    { bg: 'bg-[#fbbf24]/5', border: 'border-[#fbbf24]/10', dot: 'bg-[#fbbf24]', text: 'text-[#fbbf24]' },
  ];

  return (
    <section id="skills" className="py-24">
      <div className="section-label" data-index="02">SKILLS</div>
      <h2 className="section-title">Tools I work with.</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((category, idx) => {
          const style = cardStyles[idx % 4];
          return (
            <motion.div 
              key={category.category}
              className={`${style.bg} border ${style.border} rounded-[32px] p-8 md:p-10 flex flex-col gap-8 shadow-sm`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 ${style.dot} rounded-full`}></div>
                <h3 className={`text-[10px] font-bold uppercase tracking-[0.2em] ${style.text}`}>
                  {category.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <div 
                    key={skill} 
                    className="bg-white text-dark px-5 py-2.5 rounded-full text-sm font-bold border border-slate-100 shadow-sm hover:border-slate-300 transition-all cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
