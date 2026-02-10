import React from 'react';
import Services from '../components/Services';
import { motion } from 'framer-motion';

const ServicesPage = () => {
  return (
    <div className="pb-20">
      <div className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our Solar Services
          </motion.h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Comprehensive renewable energy solutions for every need. From design to installation and maintenance.
          </p>
        </div>
      </div>

      <Services />

      <section className="container mx-auto px-4 md:px-6 py-12">
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Installation Process</h2>
              <div className="space-y-6">
                {[
                  { step: '01', title: 'Consultation', desc: 'We assess your energy needs and roof suitability.' },
                  { step: '02', title: 'Design & Engineering', desc: 'Custom solar layout optimized for your specific location.' },
                  { step: '03', title: 'Permitting', desc: 'We handle all the paperwork with local authorities.' },
                  { step: '04', title: 'Installation', desc: 'Professional installation usually completed in 1-2 days.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <span className="text-2xl font-bold text-accent">{item.step}</span>
                    <div>
                      <h4 className="font-bold text-primary text-lg">{item.title}</h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/Solar-System-Maintenance.webp"
                alt="Installation process"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
