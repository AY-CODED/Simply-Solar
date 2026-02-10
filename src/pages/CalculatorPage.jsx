import React from 'react';
import SavingsCalculator from '../components/SavingsCalculator';
import { motion } from 'framer-motion';

const CalculatorPage = () => {
  return (
    <div className="pb-20">
      <div className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Solar Savings Calculator
          </motion.h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Estimate your potential savings and see how much you could save over 20 years by switching to solar.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10 relative z-10">
        <SavingsCalculator />
      </div>

      <section className="container mx-auto px-4 md:px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center text-primary font-bold text-2xl mx-auto mb-6">1</div>
              <h3 className="font-bold text-xl mb-4">Input Bill</h3>
              <p className="text-slate-600">Enter your average monthly electricity cost to start the calculation.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center text-primary font-bold text-2xl mx-auto mb-6">2</div>
              <h3 className="font-bold text-xl mb-4">Calculate Offset</h3>
              <p className="text-slate-600">Our algorithm calculates a 70% energy offset based on typical solar efficiency.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center text-primary font-bold text-2xl mx-auto mb-6">3</div>
              <h3 className="font-bold text-xl mb-4">View Savings</h3>
              <p className="text-slate-600">See your immediate annual savings and long-term 20-year financial impact.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CalculatorPage;
