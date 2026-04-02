import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.png';

const Footer = () => {
  return (
    <footer className="bg-primary-950 text-white pt-20 pb-10">
      <div className="section-padding grid md:grid-cols-4 gap-12 border-b border-white/10 mb-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <Link to="/" className="flex items-center gap-3 mb-6">
            <img src={logo} alt="Apex Logo" className="h-10 w-auto" />
            <span className="text-xl font-bold font-heading">APEX ACADEMY</span>
          </Link>
          <p className="text-white/60 text-sm leading-relaxed mb-6">
            Providing world-class education since 1998, Apex Academy is committed to nurturing future leaders and innovators through a balanced and progressive curriculum.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-secondary-400">Quick Links</h4>
          <ul className="space-y-4 text-white/70 text-sm">
            <li><Link to="/About us" className="hover:text-white transition-colors">About Our School</Link></li>
            <li><Link to="/Academics" className="hover:text-white transition-colors">Academic Programs</Link></li>
            <li><Link to="/Admissions" className="hover:text-white transition-colors">Admission Process</Link></li>
            <li><Link to="/Faculty" className="hover:text-white transition-colors">Our Faculty</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-secondary-400">Campus Life</h4>
          <ul className="space-y-4 text-white/70 text-sm">
            <li><Link to="/Gallery" className="hover:text-white transition-colors">Campus Gallery</Link></li>
            <li><Link to="/Students" className="hover:text-white transition-colors">Student Activities</Link></li>
            <li><Link to="/Events" className="hover:text-white transition-colors">Upcoming Events</Link></li>
            <li><Link to="/Address" className="hover:text-white transition-colors">Contact & Map</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-secondary-400">Contact Us</h4>
          <div className="space-y-4 text-white/70 text-sm">
            <p className="flex items-start gap-3">
              <span className="text-secondary-400">📍</span>
              123 Academy Lane, <br />Educational District, PIN 402301
            </p>
            <p className="flex items-center gap-3">
              <span className="text-secondary-400">📞</span>
              +91-98765-43210
            </p>
            <p className="flex items-center gap-3">
              <span className="text-secondary-400">✉️</span>
              info@apexacademy.edu
            </p>
          </div>
        </div>
      </div>

      <div className="section-padding py-0 text-center text-white/40 text-xs tracking-widest uppercase">
        © {new Date().getFullYear()} Apex Academy of Excellence. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
