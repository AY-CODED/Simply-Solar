import React from 'react';
import LeadForm from '../components/LeadForm';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="pb-20">
      <div className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Get a Free Quote
          </motion.h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Take the first step towards energy independence. Fill out the form below and we'll be in touch soon.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-primary mb-8">Let's Talk Solar</h2>
              <LeadForm />
            </div>
            <div className="bg-slate-900 p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary p-3 rounded-xl text-accent">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Phone</h4>
                    <p className="text-slate-300">(800) SUN-POWR</p>
                    <p className="text-slate-300">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary p-3 rounded-xl text-accent">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Email</h4>
                    <p className="text-slate-300">hello@simplysolar.com</p>
                    <p className="text-slate-300">support@simplysolar.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary p-3 rounded-xl text-accent">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Office</h4>
                    <p className="text-slate-300">123 Energy Lane</p>
                    <p className="text-slate-300">Sunshine Valley, CA 90210</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-slate-800">
                <h4 className="font-bold text-xl mb-6">Service Hours</h4>
                <div className="space-y-2 text-slate-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
