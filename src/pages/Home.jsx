import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Hero />
      <div id="services-summary">
        <Services />
      </div>
      <WhyChooseUs />
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Power Your Home with the Sun?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join thousands of happy homeowners who have switched to clean, renewable energy.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-accent text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-300 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
