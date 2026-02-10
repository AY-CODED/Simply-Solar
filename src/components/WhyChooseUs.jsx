import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Leaf, Award } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <ShieldCheck className="text-accent" size={40} />,
      title: '25-Year Warranty',
      description: 'We stand by our work with industry-leading performance and product warranties.'
    },
    {
      icon: <Zap className="text-accent" size={40} />,
      title: 'Maximum Efficiency',
      description: 'Using only Tier-1 solar panels to ensure you get the most power from every sunrise.'
    },
    {
      icon: <Leaf className="text-accent" size={40} />,
      title: 'Eco-Friendly',
      description: 'Reduce your carbon footprint and contribute to a cleaner, greener planet.'
    },
    {
      icon: <Award className="text-accent" size={40} />,
      title: 'Certified Experts',
      description: 'Our NABCEP certified installers ensure your system is built to the highest standards.'
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-primary mb-4"
          >
            Why Choose Simply Solar?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            We are committed to providing the highest quality solar solutions with a focus on customer satisfaction and long-term performance.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
