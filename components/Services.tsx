import React from 'react';
import { PaintRoller, Home, Building2, Hammer, Droplets, Grid } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <Home className="h-8 w-8 mb-4 text-slate-700" />,
    title: 'İç Cephe Boyama',
    description: 'Kusursuz duvarlar, tavanlar ve pervazlar. Eşyalarınızı ve zeminlerinizi koruyarak çalışıyoruz.',
  },
  {
    icon: <PaintRoller className="h-8 w-8 mb-4 text-slate-700" />,
    title: 'Dış Cephe Boyama',
    description: 'Binanızın ömrünü uzatan, hava koşullarına dayanıklı ve estetik dış cephe uygulamaları.',
  },
  {
    icon: <Building2 className="h-8 w-8 mb-4 text-slate-700" />,
    title: 'Ticari & Ofis Boyama',
    description: 'Ofisler ve iş yerleri için iş akışınızı aksatmadan, hızlı ve profesyonel çözümler.',
  },
  {
    icon: <Hammer className="h-8 w-8 mb-4 text-slate-700" />,
    title: 'Tadilat Sonrası Boya',
    description: 'İnşaat ve tadilat sonrası son dokunuş. Detaylı astarlama, zımpara ve boya uygulaması.',
  },
  {
    icon: <Droplets className="h-8 w-8 mb-4 text-slate-700" />,
    title: 'Vernik & Cila',
    description: 'Ahşap kapı, pencere ve detaylarınız için koruyucu ve canlandırıcı vernik işlemleri.',
  },
  {
    icon: <Grid className="h-8 w-8 mb-4 text-slate-700" />,
    title: 'Alçı & Duvar Tamiri',
    description: 'Boya öncesi çatlak tamiri, alçı çekme ve kusursuz yüzey hazırlığı.',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 px-4 md:px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Hizmetlerimiz</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Tek bir odadan tüm binaya kadar, her projeyi hassasiyetle ve kaliteli malzemelerle ele alıyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full hover:shadow-md transition-shadow duration-300 border-slate-100 bg-slate-50/50">
                <CardHeader>
                  <div className="bg-white w-14 h-14 rounded-lg flex items-center justify-center border border-slate-100 shadow-sm mb-2">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;