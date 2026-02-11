import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src="/images/s-s.png" alt="Simply Solar Logo" className="h-10 w-auto brightness-0 invert" />
              <span className="text-2xl font-heading font-bold">Simply Solar</span>
            </div>
            <p className="text-blue-100 mb-8 leading-relaxed">
              Leading the way in sustainable energy solutions for homes and businesses. Quality, reliability, and savings guaranteed.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-blue-100">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/calculator" className="hover:text-accent transition-colors">Savings Calculator</Link></li>
              <li><Link to="/faq" className="hover:text-accent transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Get a Quote</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-blue-100">
              <li>Residential Solar</li>
              <li>Commercial Installation</li>
              <li>Solar Maintenance</li>
              <li>Energy Storage</li>
              <li>Consultation</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-blue-100">
              <li className="flex items-start gap-3">
                <MapPin className="text-accent shrink-0" size={20} />
                <span>45 Victoria Island, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-accent shrink-0" size={20} />
                <span>+234 (0) 800 SOLAR NG</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-accent shrink-0" size={20} />
                <span>info@simplysolar.com.ng</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 text-center text-blue-200 text-sm">
          <p>© {new Date().getFullYear()} Simply Solar. All rights reserved. Designed for a brighter future.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
