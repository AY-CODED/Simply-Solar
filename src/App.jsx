import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import SavingsCalculator from './components/SavingsCalculator';
import LeadForm from './components/LeadForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <SavingsCalculator />
        <FAQ />
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
