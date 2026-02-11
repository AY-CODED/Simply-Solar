import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Banknote, TrendingDown, PiggyBank } from 'lucide-react';
import { Link } from 'react-router-dom';

const SavingsCalculator = () => {
  const [bill, setBill] = useState(50000);

  const annualSavings = Math.round((bill * 12) * 0.70);
  const twentyYearSavings = annualSavings * 20;

  return (
    <section id="calculator" className="py-24 bg-slate-50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 md:px-6"
      >
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100">
          <div className="grid lg:grid-cols-2">
            {/* Input Section */}
            <div className="p-8 md:p-12 lg:p-16">
              <h2 className="text-4xl font-bold text-primary mb-6">Solar Savings Calculator</h2>
              <p className="text-slate-600 mb-10 text-lg">
                See how much you could save by switching to solar energy today. Adjust the slider to match your current monthly electricity bill.
              </p>

              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-end mb-4">
                    <label className="text-sm font-bold uppercase tracking-wider text-slate-400">
                      Average Monthly Bill (NGN)
                    </label>
                    <span className="text-4xl font-extrabold text-primary">₦{bill.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="10000"
                    max="500000"
                    step="5000"
                    value={bill}
                    onChange={(e) => setBill(parseInt(e.target.value))}
                    className="w-full h-3 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-accent"
                  />
                  <div className="flex justify-between mt-2 text-sm text-slate-400 font-medium">
                    <span>₦10,000</span>
                    <span>₦500,000</span>
                  </div>
                </div>

                <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-white p-2 rounded-lg">
                      <TrendingDown size={20} />
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Based on our data, you could offset your bill by <span className="font-bold text-primary">70%</span> on average with a Simply Solar installation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="bg-primary p-8 md:p-12 lg:p-16 text-white flex flex-col justify-center">
              <div className="space-y-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={annualSavings}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <p className="text-blue-200 uppercase tracking-widest text-sm font-bold mb-2">Estimated Annual Savings (NGN)</p>
                    <div className="flex items-start">
                      <span className="text-2xl mt-1 mr-1 font-bold text-accent">₦</span>
                      <span className="text-6xl md:text-7xl font-extrabold">{annualSavings.toLocaleString()}</span>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="h-px bg-white/10 w-full" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={twentyYearSavings}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center gap-6"
                  >
                    <div className="bg-accent/20 p-4 rounded-2xl">
                      <PiggyBank className="text-accent" size={40} />
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm font-bold uppercase tracking-widest mb-1">20-Year Total Savings</p>
                      <p className="text-4xl font-extrabold text-accent">
                        ₦{twentyYearSavings.toLocaleString()}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="pt-4">
                  <Link
                    to="/contact"
                    className="block w-full bg-accent hover:bg-amber-500 text-primary font-bold text-center py-4 rounded-xl transition-all shadow-lg"
                  >
                    Lock In These Savings
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SavingsCalculator;
