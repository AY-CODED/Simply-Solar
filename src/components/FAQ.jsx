import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How long do solar panels last?",
    answer: "Most modern solar panels are designed to last 25 to 30 years or more. While they will continue to generate electricity after this point, their efficiency slightly decreases over time. We provide a 25-year performance guarantee on all our installations."
  },
  {
    question: "What happens on cloudy days?",
    answer: "Solar panels still generate power on cloudy or rainy days, as they can use direct or indirect sunlight. However, they are most productive when they receive direct sunlight. Your system will still be contributing to your home's energy needs even when the sun isn't perfectly clear."
  },
  {
    question: "Is my roof suitable for solar?",
    answer: "A suitable roof typically needs to be in good structural condition and have enough space for the panels. South-facing roofs usually get the most sunlight, but east and west-facing roofs can also be very effective. During our free assessment, we check for shading, roof angle, and structural integrity."
  },
  {
    question: "How much can I actually save?",
    answer: "Savings vary based on your location, roof orientation, and current energy usage. On average, our customers see a 70% reduction in their monthly electricity bills. With rising energy costs, your savings typically increase year over year."
  },
  {
    question: "What is the installation process like?",
    answer: "Once the design is approved and permits are secured, the actual installation usually takes only 1-3 days. We handle everything from engineering and permitting to the final connection with your utility company."
  }
];

const FAQItem = ({ faq, isOpen, toggle }) => {
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        onClick={toggle}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-primary' : 'text-slate-800'}`}>
          {faq.question}
        </span>
        <div className={`p-1 rounded-full transition-colors ${isOpen ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500'}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-600 leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 md:px-6"
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600">
              Everything you need to know about switching to solar energy.
            </p>
          </div>

          <div className="bg-slate-50 rounded-[2rem] p-4 md:p-8">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                isOpen={openIndex === index}
                toggle={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FAQ;
