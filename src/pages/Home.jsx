import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../Images/hero.png';
import campusVideo from '../Images/video2.mp4';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      title: "Excellence in Academics",
      description: "Our students consistently rank in the top 1% nationally with a curriculum designed for the future.",
      icon: "🎓"
    },
    {
      title: "Art & Culture",
      description: "Nurturing creativity through world-class facilities in music, dance, and fine arts.",
      icon: "🎨"
    },
    {
      title: "Sports & Athletics",
      description: "A 20-acre sports complex supporting 15+ different athletic disciplines.",
      icon: "🏆"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Apex Academy Campus" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950/80 to-transparent" />
        </div>

        <div className="section-padding relative z-10 text-white w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1.5 bg-secondary-500 text-primary-950 font-bold text-xs uppercase tracking-widest rounded-full mb-6">
              Admissions Open 2026-27
            </span>
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-[1.1]">
              Empowering Minds, <br />
              <span className="text-secondary-400 font-normal italic">Inspiring</span> Futures.
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed">
              At Apex Academy, we believe in a holistic approach to education. Our environment fosters curiosity, creativity, and critical thinking.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/Admissions" className="btn-secondary text-lg px-8">
                Apply Now
              </Link>
              <Link to="/About us" className="px-8 py-3 border-2 border-white/30 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white hover:text-primary-900 transition-all duration-300">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary-900 py-12 relative z-20 -mt-16 mx-6 rounded-2xl shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Students', value: '2500+' },
            { label: 'Teachers', value: '150+' },
            { label: 'Years Legacy', value: '25+' },
            { label: 'Motto', value: 'Excellence' },
          ].map((stat, i) => (
            <div key={i} className="text-center border-r last:border-0 border-white/10 px-4">
              <p className="text-secondary-400 text-3xl font-bold mb-1">{stat.value}</p>
              <p className="text-white/60 text-sm uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-primary-900 mb-4">Why Choose Apex Academy?</h2>
          <p className="text-slate-600 text-lg">We provide a nurturing environment where every student can discover their unique potential.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="glass-card p-10 hover:shadow-cyan-100 transition-shadow"
            >
              <div className="text-4xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-primary-800 mb-4">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modern Notice Board / News */}
      <section className="bg-slate-100 py-20">
        <div className="section-padding grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-primary-900 mb-6">Experience Excellence</h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Our campus is more than just buildings; it's a vibrant community where students are encouraged to push boundaries and explore new horizons. From advanced STEM labs to creative art studios, we provide the tools for success.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Global Curriculum Standards",
                "Advanced Technology Integration",
                "Personalized Mentorship Programs",
                "State-of-the-art Infrastructure"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 text-xs">✓</div>
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/Admissions" className="text-primary-600 font-bold hover:underline">View Admission Process →</Link>
          </div>
          <div className="relative group">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary-400/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-500/20 rounded-full blur-2xl" />
            <div className="aspect-video bg-white rounded-2xl shadow-2xl border-8 border-white overflow-hidden relative">
               <video 
                 src={campusVideo} 
                 autoPlay 
                 loop 
                 muted 
                 playsInline 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-primary-900/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
