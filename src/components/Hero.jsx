import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sun } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-50 to-white -z-10" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-amber-50/50 to-transparent -z-10" />

      {/* Animated shapes */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10"
      />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-primary mb-6">
              Power Your Home with <span className="text-accent">Pure Sunshine</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg">
              Switch to Simply Solar and reduce your electricity bills by up to 70%. Professional installation, premium panels, and a lifetime of clean energy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-800 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-blue-900/20"
              >
                Get a Free Quote
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#calculator"
                className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center"
              >
                Calculate Savings
              </a>
            </div>

            <div className="mt-10 flex items-center gap-4 text-sm font-medium text-slate-500">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200" />
                ))}
              </div>
              <p>Join 5,000+ happy homeowners</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/SS-Banner-02-01-scaled.webp"
                alt="Solar Panels Installation"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary/20 to-transparent" />
            </div>

            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4"
            >
              <div className="bg-accent/20 p-3 rounded-full">
                <Sun className="text-accent" size={32} />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">70%</p>
                <p className="text-sm text-slate-500">Avg. Savings</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
