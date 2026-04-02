import React from 'react';
import { motion } from 'framer-motion';

const Map = () => {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-primary-900 py-24 text-white text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 tracking-tight">Connect With Us</h1>
        <p className="text-primary-100 max-w-2xl mx-auto text-lg leading-relaxed opacity-80 font-medium">
          Whether you're a prospective parent, an alumnus, or a community member, we'd love to hear from you.
        </p>
      </section>

      <section className="section-padding">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Contact Details */}
          <div className="lg:col-span-1 space-y-12">
            <div>
               <h3 className="text-2xl font-bold text-primary-900 mb-8 font-heading">Our Location</h3>
               <div className="space-y-6">
                  <div className="flex gap-4">
                     <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 text-xl flex-shrink-0">📍</div>
                     <div>
                        <p className="font-bold text-slate-800">Campus Address</p>
                        <p className="text-slate-600">123 Academy Lane, Educational District, PIN 402301</p>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 text-xl flex-shrink-0">📞</div>
                     <div>
                        <p className="font-bold text-slate-800">Phone & WhatsApp</p>
                        <p className="text-slate-600">+91-98765-43210 <br />+91-98765-43211</p>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 text-xl flex-shrink-0">✉️</div>
                     <div>
                        <p className="font-bold text-slate-800">Email Inquiry</p>
                        <p className="text-slate-600">info@apexacademy.edu <br />admissions@apexacademy.edu</p>
                     </div>
                  </div>
               </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
               <h4 className="font-bold text-primary-900 mb-4">Visiting Hours</h4>
               <p className="text-slate-600 text-sm mb-2 font-medium">Mon - Fri: 8:00 AM - 4:00 PM</p>
               <p className="text-slate-600 text-sm font-medium">Sat: 9:00 AM - 1:00 PM (By appointment)</p>
            </div>
          </div>

          {/* Interactive Map Placeholder */}
          <div className="lg:col-span-2 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50 border-8 border-white min-h-[500px] relative group">
             <div className="absolute inset-0 bg-slate-200 animate-pulse flex items-center justify-center grayscale overflow-hidden">
                <iframe 
                  title="School Location"
                  className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700" 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115348.66986514496!2d75.7673415132223!3d26.885438883610943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c20573e0a174f%3A0xc3f8373b88939c8a!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1711234567890!5m2!1sen!2sin" 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
             </div>
             <div className="absolute bottom-10 right-10 bg-white/90 backdrop-blur px-6 py-4 rounded-xl shadow-xl border border-slate-100 hidden md:block">
                <p className="text-xs font-bold text-primary-600 uppercase tracking-widest mb-1">Campus Tour</p>
                <p className="text-2xl font-bold text-primary-900 font-heading tracking-tight underline cursor-pointer">Find Your Way →</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Map;
