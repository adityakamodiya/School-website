import React from 'react';
import { motion } from 'framer-motion';

const Admissions = () => {
  const steps = [
    { number: '01', title: 'Registration', text: 'Apply online or visit our campus for the registration form.' },
    { number: '02', title: 'Interaction', text: 'A scheduled interaction between the student and our faculty.' },
    { number: '03', title: 'Evaluation', text: 'Brief academic evaluation based on the last grade passed.' },
    { number: '04', title: 'Admission', text: 'Completion of documentation and fee payment.' },
  ];

  return (
    <div className="pt-24 pb-20">
      <section className="bg-primary-900 py-24 text-white text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 tracking-tight">Join Our Community</h1>
        <p className="text-primary-100 max-w-2xl mx-auto text-lg leading-relaxed opacity-90">
          We invite you to experience the vibrant learning atmosphere at Apex Academy. Begin your child's journey towards excellence today.
        </p>
      </section>

      <section className="section-padding grid md:grid-cols-2 gap-20">
        <div>
          <span className="text-secondary-600 font-bold uppercase tracking-widest text-sm mb-4 block">Apply Now</span>
          <h2 className="text-4xl font-bold text-primary-900 mb-8 font-heading">Application Process</h2>
          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 }}
                className="flex gap-8 group"
              >
                <div className="text-3xl font-black text-slate-100 group-hover:text-primary-100 transition-colors">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-800 mb-2">{step.title}</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">{step.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Admission Form */}
        <div className="glass-card p-10 relative overflow-hidden border-t-8 border-primary-600 shadow-2xl">
          <div className="absolute top-0 right-0 p-8 text-primary-50 text-7xl font-bold opacity-10 pointer-events-none">
            FORM
          </div>
          <h3 className="text-2xl font-bold text-primary-900 mb-8 relative z-10">Online Inquiry Form</h3>
          <form className="space-y-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Student Name</label>
                <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-all" placeholder="Enter student's full name" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Grade Applying For</label>
                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-400 outline-none">
                   <option>Nursery - KG</option>
                   <option>Grade 1 - 5</option>
                   <option>Grade 6 - 8</option>
                   <option>Grade 9 - 12</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Parent/Guardian Name</label>
              <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-400 outline-none" placeholder="Enter parent's name" />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Contact Email</label>
              <input type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-400 outline-none" placeholder="example@email.com" />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
              <input type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-400 outline-none" placeholder="+91-00000-00000" />
            </div>
            <button type="submit" className="w-full btn-primary py-4 text-lg">Submit Inquiry</button>
          </form>
          <p className="text-xs text-slate-400 mt-6 text-center italic">
            * Our admissions officer will contact you within 2 working days.
          </p>
        </div>
      </section>

      {/* FAQs or Info */}
      <section className="bg-slate-50 py-20 px-6">
         <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-900 mb-12 text-center font-heading">Common Queries</h2>
            <div className="space-y-4">
              {[
                { q: "What is the age criteria for Kindergarten?", a: "The child must be 3 years of age as of April 1st of the academic year." },
                { q: "Are scholarships available?", a: "Yes, we offer merit-based scholarships for students excelling in academics or sports." },
                { q: "Is transport facility available?", a: "Yes, we have a fleet of air-conditioned buses covering major areas of the city." }
              ].map((faq, i) => (
                <details key={i} className="bg-white rounded-xl border border-slate-200 hover:border-primary-200 group transition-all">
                  <summary className="px-6 py-5 font-bold text-primary-800 cursor-pointer list-none flex justify-between items-center group-open:text-primary-600 transition-colors">
                    {faq.q}
                    <span className="text-xl group-open:rotate-180 transition-transform">↓</span>
                  </summary>
                  <div className="px-6 pb-6 text-slate-600 border-t border-slate-100 pt-4 leading-relaxed font-medium">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
      </section>
    </div>
  );
};

export default Admissions;
