import { motion } from 'framer-motion';
import { BarChart, Eye, Code2, PieChart } from 'lucide-react';
import { highlights } from '../data/highlights';

const Highlights = () => {
  const focuses = [
    {
      title: "Data Analysis & Predictive Modeling",
      desc: highlights[0].description,
      icon: <BarChart size={24} />,
      bgColor: 'bg-[#5d59ef]/5',
      borderColor: 'border-[#5d59ef]/10',
      iconBg: 'bg-[#5d59ef]/10',
      iconColor: 'text-[#5d59ef]'
    },
    {
      title: "Computer Vision",
      desc: highlights[1].description,
      icon: <Eye size={24} />,
      bgColor: 'bg-[#6366f1]/5',
      borderColor: 'border-[#6366f1]/10',
      iconBg: 'bg-[#6366f1]/10',
      iconColor: 'text-[#6366f1]'
    },
    {
      title: "Backend Development",
      desc: highlights[2].description,
      icon: <Code2 size={24} />,
      bgColor: 'bg-[#22d3ee]/5',
      borderColor: 'border-[#22d3ee]/10',
      iconBg: 'bg-[#22d3ee]/10',
      iconColor: 'text-[#22d3ee]'
    },
    {
      title: "Data Visualization",
      desc: highlights[3].description,
      icon: <PieChart size={24} />,
      bgColor: 'bg-[#fbbf24]/5',
      borderColor: 'border-[#fbbf24]/10',
      iconBg: 'bg-[#fbbf24]/10',
      iconColor: 'text-[#fbbf24]'
    }
  ];

  return (
    <section id="highlights" className="py-24">
      <div className="section-label" data-index="04">HIGHLIGHTS</div>
      <h2 className="section-title">What I focus on.</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {focuses.map((f, idx) => (
          <motion.div 
            key={f.title}
            className={`${f.bgColor} border ${f.borderColor} p-10 md:p-12 rounded-[32px] flex flex-col gap-8 hover:shadow-md transition-all group`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className={`${f.iconBg} ${f.iconColor} w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
              {f.icon}
            </div>
            <div>
              <span className="block text-[10px] font-bold text-slate-400 tracking-[0.2em] mb-2 uppercase">Focus Area</span>
              <h3 className="text-xl md:text-2xl font-bold text-dark mb-4 tracking-tight leading-tight">{f.title}</h3>
              <p className="text-sm md:text-base text-slate-500 leading-relaxed font-normal">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
