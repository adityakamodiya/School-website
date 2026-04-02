import React from 'react';
import { motion } from 'framer-motion';
import johnImg from '../Images/jhon.jpeg';
import jamesImg from '../Images/jame.jpeg';
import sophiaImg from '../Images/sophia.jpg';
import davidImg from '../Images/david.png';

const Faculty = () => {
  const staff = [
    { name: 'Dr. Johnathan Smith', role: 'Head of Mathematics', qualification: 'Ph.D. in Applied Mathematics, MIT', image: johnImg },
    { name: 'Mrs. Sophia Williams', role: 'Modern Literature', qualification: 'M.A. in English Literature, Oxford', image: sophiaImg },
    { name: 'Mr. James Anderson', role: 'Sports & Athletics Director', qualification: 'B.P.Ed, Sports Authority of India', image: jamesImg },
    { name: 'Dr. David Miller', role: 'Advanced Science Research', qualification: 'Ph.D. in Physics, Stanford', image: davidImg },
  ];

  return (
    <div className="pt-24 pb-20">
      <section className="bg-primary-950 py-24 text-white text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 tracking-tight">Our Distinguished Faculty</h1>
        <p className="text-primary-100 max-w-2xl mx-auto text-lg leading-relaxed opacity-80 font-medium">
          Meet the mentors who shape future leaders. Our educators are leaders in their fields, committed to personalized learning and academic excellence.
        </p>
      </section>

      <section className="section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {staff.map((member, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-100 group"
            >
              <div className="aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              <div className="p-8">
                <p className="text-secondary-600 text-xs font-bold uppercase tracking-widest mb-2">{member.role}</p>
                <h3 className="text-xl font-bold text-primary-900 mb-3 font-heading">{member.name}</h3>
                <p className="text-slate-500 text-sm italic font-medium leading-relaxed">{member.qualification}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Philosophy Section */}
        <div className="bg-slate-50 rounded-[2.5rem] p-12 md:p-20 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100/30 rounded-full -mr-32 -mt-32 blur-3xl z-0" />
           <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
              <div>
                 <h2 className="text-4xl font-bold text-primary-900 mb-6 font-heading">Our Teaching Philosophy</h2>
                 <p className="text-slate-600 text-lg leading-relaxed mb-8">
                   We believe every student is unique. Our faculty is trained in modern pedagogical techniques that focus on inquiry-based learning, critical thinking, and emotional intelligence.
                 </p>
                 <div className="space-y-4">
                    <p className="flex items-center gap-4 text-slate-700 font-bold">
                       <span className="w-12 h-0.5 bg-primary-600" /> Continuous Professional Development
                    </p>
                    <p className="flex items-center gap-4 text-slate-700 font-bold">
                       <span className="w-12 h-0.5 bg-secondary-500" /> Student-Centered Approach
                    </p>
                 </div>
              </div>
              <div className="p-10 glass-card bg-primary-900/5 border-primary-200">
                 <p className="text-4xl text-primary-200 font-serif mb-6 opacity-30">“</p>
                 <p className="text-primary-900 font-bold text-xl italic mb-6 leading-relaxed">
                   "A teacher is a compass that activates the magnets of curiosity, knowledge, and wisdom in the pupils."
                 </p>
                 <p className="text-primary-700 font-bold uppercase tracking-widest text-xs">— Ever Garrison</p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;