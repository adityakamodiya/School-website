import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../Images/galler1.jpeg';
import img2 from '../Images/gallery2.jpeg';
import img3 from '../Images/gallery3.jpeg';
import img4 from '../Images/gallery4.jpeg';
import culturalImg from '../Images/cultural.jpeg';
import scienceImg from '../Images/scienceex.jpeg';
import campusVideo from '../Images/video1.mp4';

const Gallery = () => {
  const videoRef = React.useRef(null);
  const [isPlaying, setIsPlaying] = React.useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const photos = [
    { src: img1, title: 'Annual Sports Meet', category: 'Sports' },
    { src: culturalImg, title: 'Cultural Festival', category: 'Arts' },
    { src: scienceImg, title: 'Science Exhibition', category: 'Academics' },
    { src: img4, title: 'Graduation Day', category: 'Events' },
    { src: img2, title: 'Art Workshop', category: 'Arts' },
    { src: img3, title: 'Interschool Debate', category: 'Academic' },
  ];

  return (
    <div className="pt-24 pb-20">
      <section className="bg-primary-950 py-24 text-white text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 tracking-tight">Our Visual Legacy</h1>
        <p className="text-primary-100 max-w-2xl mx-auto text-lg leading-relaxed opacity-80 font-medium">
          Capturing the moments that define our student experience and campus life.
        </p>
      </section>

      <section className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="relative group rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200/50 aspect-square"
            >
              <img 
                src={photo.src} 
                alt={photo.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                 <span className="text-secondary-400 text-xs font-bold uppercase tracking-widest mb-2">{photo.category}</span>
                 <h3 className="text-2xl font-bold text-white font-heading">{photo.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Highlight Section */}
        <section className="mt-40 bg-slate-50 rounded-[3rem] p-12 md:p-24 text-center">
           <h2 className="text-4xl font-bold text-primary-900 mb-8 font-heading italic tracking-tight">Vibrant Campus Moments</h2>
           <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
             Experience the energy and excitement of Apex Academy through our community highlights and special event coverage.
           </p>
           <div className="aspect-video max-w-4xl mx-auto bg-primary-900 rounded-[2rem] shadow-2xl shadow-primary-900/30 relative overflow-hidden group border-8 border-white shadow-xl">
              <video 
                ref={videoRef}
                src={campusVideo} 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-transparent to-primary-950/20 pointer-events-none" />
              
              <div className="relative z-10 h-full flex flex-col items-center justify-center p-8">
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-24 h-24 bg-white/10 backdrop-blur-2xl rounded-full flex items-center justify-center text-white border-2 border-white/30 shadow-2xl transition-all"
                  onClick={togglePlay}
                >
                  {isPlaying ? (
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-8 bg-white rounded-full" />
                      <div className="w-2.5 h-8 bg-white rounded-full" />
                    </div>
                  ) : (
                    <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-2" />
                  )}
                </motion.button>
                <div className="mt-8 text-white/80 text-xs font-bold tracking-[0.3em] uppercase">Campus Highlight Reel</div>
              </div>
           </div>
        </section>
      </section>
    </div>
  );
};

export default Gallery;
