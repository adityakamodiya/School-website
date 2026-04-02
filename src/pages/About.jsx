import React from 'react';
import { motion } from 'framer-motion';
import visionImg from '../Images/vission.webp';
import principalImg from '../Images/principal.webp';

const About = () => {
  return (
    <div className="pt-24 pb-20">
      {/* Header Section */}
      <section className="bg-primary-900 py-20 text-white text-center mb-20 px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold font-heading mb-4"
        >
          About Apex Academy
        </motion.h1>
        <p className="text-primary-100 max-w-2xl mx-auto text-lg">
          A legacy of excellence, a future of innovation. Discover what makes us one of the leading educational institutions.
        </p>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary-400/20 rounded-full blur-3xl z-0" />
          <img 
            src={visionImg} 
            alt="Our Vision" 
            className="rounded-2xl shadow-2xl relative z-10 w-full object-cover aspect-[4/3]"
          />
        </div>
        <div>
          <span className="text-secondary-600 font-bold uppercase tracking-widest text-sm mb-4 block">Our Purpose</span>
          <h2 className="text-4xl font-bold text-primary-900 mb-6 font-heading">Vision & Mission</h2>
          <div className="space-y-8">
            <div className="glass-card p-6 border-l-4 border-primary-600">
              <h3 className="text-xl font-bold text-primary-800 mb-2">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To be a global leader in education, empowering students with the knowledge, skills, and values needed to thrive in an ever-changing world.
              </p>
            </div>
            <div className="glass-card p-6 border-l-4 border-secondary-500">
              <h3 className="text-xl font-bold text-primary-800 mb-2">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To provide a nurturing and inclusive learning environment that promotes academic excellence, creativity, and character development, preparing students for responsible global citizenship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Message from Principal */}
      <section className="bg-slate-50 py-24">
        <div className="section-padding grid md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-1">
             <div className="relative group">
                <div className="absolute -inset-2 bg-secondary-500/20 rounded-2xl blur group-hover:bg-secondary-500/30 transition duration-500" />
                <img src={principalImg} alt="Principal" className="relative rounded-2xl shadow-xl w-full" />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg">
                    <p className="font-bold text-primary-900">Dr. Sarah Jenkins</p>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Principal</p>
                </div>
             </div>
          </div>
          <div className="md:col-span-2">
            <h2 className="text-4xl font-bold text-primary-900 mb-8 font-heading">Principal's Message</h2>
            <div className="space-y-6 text-slate-600 italic text-lg leading-relaxed">
               <p>"At Apex Academy, we don't just teach subjects; we inspire passion. Every child has a unique spark, and our mission is to fan that spark into a flame of curiosity and lifelong learning."</p>
               <p>"Our curriculum is designed to challenge the mind while nurturing the soul. We invite you to join our community and experience education that truly transforms lives."</p>
               <div className="pt-4 block font-bold text-primary-900 not-italic">— Dr. Sarah Jenkins</div>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="section-padding">
        <h2 className="text-4xl font-bold text-primary-900 mb-16 text-center font-heading">Our Journey</h2>
        <div className="space-y-12 max-w-4xl mx-auto">
          {[
            { year: '1998', title: 'Foundation', text: 'Apex Academy was founded with 50 students and a vision for holistic education.' },
            { year: '2005', title: 'Campus Expansion', text: 'Inaugurated our 20-acre modern campus with state-of-the-art labs.' },
            { year: '2012', title: 'National Recognition', text: 'Awarded the "Best Progressive School" award by the Ministry of Education.' },
            { year: '2023', title: 'Global Partnership', text: 'Launched student exchange programs with leading schools in UK and USA.' },
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ x: 10 }}
              className="flex gap-8 group"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold text-xl border-2 border-primary-200 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  {item.year}
                </div>
                <div className="w-0.5 h-full bg-slate-200" />
              </div>
              <div className="pt-2 pb-8">
                <h3 className="text-2xl font-bold text-primary-800 mb-2">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
