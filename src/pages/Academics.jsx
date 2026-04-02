import React from 'react';
import { motion } from 'framer-motion';
import scienceImg from '../Images/scienceex.jpeg';
import libraryImg from '../Images/library.jpeg';
import sportsImg from '../Images/sports.png';

const Academics = () => {
  const subjects = [
    { title: 'Mathematics', description: 'Advanced calculus, statistics, and logical reasoning to build strong foundations.' },
    { title: 'Science', description: 'Hands-on learning in Physics, Chemistry, and Biology with modern laboratory facilities.' },
    { title: 'Information Tech', description: 'Coding, AI, and digital literacy to prepare for the technological future.' },
    { title: 'Humanities', description: 'Social studies, history, and geography to understand global perspectives.' },
  ];

  return (
    <div className="pt-24 pb-20">
      <section className="bg-primary-950 py-20 text-white text-center mb-20 px-6">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-4xl md:text-5xl font-bold font-heading mb-4"
        >
          Academics at Apex
        </motion.h1>
        <p className="text-primary-100 max-w-2xl mx-auto text-lg opacity-80">
          Curating a world-class curriculum that goes beyond textbooks to foster critical thinking and innovation.
        </p>
      </section>

      {/* Curriculum Grid */}
      <section className="section-padding">
        <h2 className="text-3xl font-bold text-primary-900 mb-12 text-center font-heading">Our Comprehensive Curriculum</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {subjects.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 group hover:bg-primary-900 hover:text-white transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-4 group-hover:text-secondary-400">{s.title}</h3>
              <p className="text-slate-600 group-hover:text-primary-100 text-sm leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-slate-50 py-20">
        <div className="section-padding space-y-24">
          {/* Science & Tech */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold text-primary-900 mb-6 font-heading">Interactive STEM Hubs</h3>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Our science laboratories are equipped with the latest technology, allowing students to bridge the gap between theory and practice through cutting-edge experimentation.
              </p>
              <div className="flex gap-4">
                 <div className="p-4 bg-white rounded-xl shadow-md flex-1">
                    <p className="text-primary-600 font-bold mb-1">98%</p>
                    <p className="text-xs text-slate-500 uppercase font-semibold">Practical Success</p>
                 </div>
                 <div className="p-4 bg-white rounded-xl shadow-md flex-1">
                    <p className="text-primary-600 font-bold mb-1">20+</p>
                    <p className="text-xs text-slate-500 uppercase font-semibold">STEM Clubs</p>
                 </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img src={scienceImg} alt="Science Lab" className="rounded-2xl shadow-xl hover:scale-105 transition-transform" />
            </div>
          </div>

          {/* Library & Resource */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
             <div>
                <img src={libraryImg} alt="Library" className="rounded-2xl shadow-xl hover:scale-105 transition-transform" />
             </div>
             <div>
                <h3 className="text-3xl font-bold text-primary-900 mb-6 font-heading">The Digital Library</h3>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  With over 50,000 titles and a vast digital archive, our library is the intellectual heart of the school, supporting research and independent inquiry.
                </p>
                <button className="btn-primary">Reserve Resources</button>
             </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="section-padding text-center">
         <h2 className="text-3xl font-bold text-primary-900 mb-12 font-heading">Academic Methodology</h2>
         <div className="grid md:grid-cols-3 gap-12">
            {[
               { title: 'Project-Based', text: 'Engaging real-world tasks that solve problems through collaboration.' },
               { title: 'Adaptive Learning', text: 'Personalized paths that match every student\'s unique pace.' },
               { title: 'Global Outlook', text: 'Integration of international case studies and perspectives.' }
            ].map((m, i) => (
               <div key={i} className="bg-white p-10 rounded-2xl border border-slate-100 hover:border-primary-200 shadow-lg shadow-slate-200/50">
                  <div className="w-12 h-12 rounded-full bg-secondary-100 text-secondary-600 flex items-center justify-center font-bold text-xl mx-auto mb-6">
                    {i + 1}
                  </div>
                  <h4 className="text-xl font-bold text-primary-800 mb-4">{m.title}</h4>
                  <p className="text-slate-600">{m.text}</p>
               </div>
            ))}
         </div>
      </section>
    </div>
  );
};

export default Academics;
