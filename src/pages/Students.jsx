import React from 'react';
import { motion } from 'framer-motion';
import sportsImg from '../Images/sports.png';
import culturalImg from '../Images/cultural.jpeg';
import clubsImg from '../Images/clubs.webp';

const Students = () => {
  const activities = [
    { title: 'Robotics Club', description: 'Exploring the future with Arduino and Raspberry Pi projects.', icon: '🤖', image: clubsImg },
    { title: 'Performing Arts', description: 'Nurturing talent in drama, dance, and vocal music.', icon: '🎭', image: culturalImg },
    { title: 'Athletics & Sports', description: 'Field and track events, swimming, and team sports.', icon: '🏅', image: sportsImg }
  ];

  return (
    <div className="pt-24 pb-20">
      <section className="bg-primary-900 py-24 text-white text-center px-6 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-64 h-64 bg-secondary-400/10 rounded-full -ml-32 -mt-32 blur-3xl z-0" />
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 tracking-tight relative z-10">Student Life at Apex</h1>
        <p className="text-primary-100 max-w-2xl mx-auto text-lg leading-relaxed opacity-80 relative z-10">
          Discover a vibrant community where students are encouraged to pursue their passions beyond the classroom.
        </p>
      </section>

      <section className="section-padding">
        <div className="grid md:grid-cols-3 gap-12">
          {activities.map((act, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200/50 group border border-slate-100"
            >
              <div className="h-64 relative overflow-hidden">
                <img src={act.image} alt={act.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full font-bold text-primary-900 shadow-lg text-lg">
                  {act.icon}
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-bold text-primary-900 mb-4 font-heading">{act.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{act.description}</p>
                <div className="mt-8 pt-8 border-t border-slate-100 flex items-center justify-between">
                   <button className="text-primary-600 font-bold hover:gap-4 flex items-center transition-all group-hover:gap-3">
                      Learn More <span className="text-xl">→</span>
                   </button>
                   <span className="text-slate-300 text-xs font-bold uppercase tracking-widest">Active Club</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="bg-slate-900 py-24 text-white">
         <div className="section-padding text-center">
            <h2 className="text-4xl font-bold font-heading mb-16 text-secondary-400">Voices of Excellence</h2>
            <div className="grid md:grid-cols-2 gap-12 text-left">
               {[
                 { name: "Rahul Sharma", grade: "Class 12", quote: "Apex Academy gave me the confidence to pursue my dream of becoming an aerospace engineer. The STEM labs and mentors are truly world-class." },
                 { name: "Priya Patel", grade: "Class 10", quote: "I love the emphasis on arts here. The annual cultural fest is where I found my passion for contemporary dance." }
               ].map((testi, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-2xl backdrop-blur-sm">
                     <p className="text-xl italic mb-8 leading-relaxed opacity-90">"{testi.quote}"</p>
                     <div>
                        <p className="font-bold text-secondary-400">{testi.name}</p>
                        <p className="text-xs text-white/50 uppercase tracking-widest font-bold mt-1">{testi.grade}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
};

export default Students;
