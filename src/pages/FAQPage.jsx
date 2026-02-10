import React from 'react';
import FAQ from '../components/FAQ';
import { motion } from 'framer-motion';

const FAQPage = () => {
  return (
    <div className="pb-20">
      <div className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Frequently Asked Questions
          </motion.h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Find answers to common questions about solar energy, installation, and financing.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <FAQ />
      </div>

      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">Still have questions?</h2>
          <p className="text-lg text-slate-600 mb-10">
            Our solar experts are here to help you understand every detail of your clean energy transition.
          </p>
          <a
            href="/contact"
            className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-800 transition-colors"
          >
            Contact an Expert
          </a>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
