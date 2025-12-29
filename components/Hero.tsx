import React from 'react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 md:px-6 bg-slate-50">
      <div className="container mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-slate-200 text-slate-700 text-sm font-medium mb-6">
            Eviniz ve İş Yeriniz İçin Profesyonel Çözümler
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
            Güvenebileceğiniz <br className="hidden md:block" /> Profesyonel Boya Hizmetleri
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Temiz işçilik, zamanında teslimat ve dürüst fiyatlandırma ile konut ve ticari boyama. Mekanınızı özenle yeniliyoruz.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="h-12 px-8 text-base w-full sm:w-auto" onClick={scrollToContact}>
              Ücretsiz Teklif Al <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="h-12 px-8 text-base w-full sm:w-auto">
              <Phone className="mr-2 h-4 w-4" /> Hemen Ara
            </Button>
          </div>
        </motion.div>
        
        {/* Placeholder for an image or graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-16 rounded-xl overflow-hidden shadow-xl border border-slate-200"
        >
           <img 
            src="https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Duvarda rulo ile boya yapan usta" 
            className="w-full h-auto object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;