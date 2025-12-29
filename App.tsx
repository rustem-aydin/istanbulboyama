import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import WhyUs from './components/WhyUs';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-slate-200">
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <Services />
        <Process />
        <WhyUs />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;