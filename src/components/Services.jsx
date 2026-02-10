import React from 'react';
import { motion } from 'framer-motion';
import { Home, Building2, Wrench } from 'lucide-react';

const services = [
  {
    title: 'Residential Solar',
    description: 'Transform your roof into a power plant. Custom-designed solar solutions for homes of all sizes.',
    icon: <Home size={32} />,
    image: '/images/Residential.webp',
    color: 'bg-blue-50',
  },
  {
    title: 'Commercial Solar',
    description: 'Reduce operating costs and reach sustainability goals with high-efficiency commercial solar installations.',
    icon: <Building2 size={32} />,
    image: '/images/Commercial-Solar-Installations-1.webp',
    color: 'bg-amber-50',
  },
  {
    title: 'Solar Maintenance',
    description: 'Keep your system performing at its peak with our comprehensive cleaning and maintenance services.',
    icon: <Wrench size={32} />,
    image: '/images/Solar-System-Maintenance.webp',
    color: 'bg-slate-50',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-primary mb-4"
          >
            Our Solar Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            We provide end-to-end clean energy services tailored to your specific needs, ensuring maximum efficiency and long-term reliability.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-2xl text-primary shadow-lg">
                  {service.icon}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="text-primary font-bold flex items-center gap-2 group/link"
                >
                  Learn More
                  <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
