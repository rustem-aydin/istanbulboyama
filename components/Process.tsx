import React from 'react';
import { ClipboardCheck, BadgeDollarSign, CalendarDays, ThumbsUp } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: <ClipboardCheck className="h-10 w-10 text-white" />,
    title: 'Keşif & Danışmanlık',
    description: 'Mekanınızı ziyaret edip yapılacak işleri belirliyor ve renk seçiminde yardımcı oluyoruz.',
  },
  {
    icon: <BadgeDollarSign className="h-10 w-10 text-white" />,
    title: 'Net Fiyatlandırma',
    description: 'Gizli ücret içermeyen, detaylı ve şeffaf bir fiyat teklifi sunuyoruz.',
  },
  {
    icon: <CalendarDays className="h-10 w-10 text-white" />,
    title: 'Planlı Boyama',
    description: 'Ekibimiz tam zamanında gelir, koruma örtülerini serer ve işe başlar.',
  },
  {
    icon: <ThumbsUp className="h-10 w-10 text-white" />,
    title: 'Temiz Teslimat',
    description: 'İşi sizinle kontrol eder, son rötuşları yapar ve mekanı tertemiz bırakırız.',
  },
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 px-4 md:px-6 bg-slate-50 border-y border-slate-100">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nasıl Çalışır?</h2>
          <p className="text-lg text-slate-600">Basit, şeffaf ve sorunsuz bir süreç.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line for large screens */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="flex flex-col items-center text-center bg-transparent"
            >
              <div className="w-24 h-24 rounded-full bg-slate-900 flex items-center justify-center shadow-lg mb-6 border-4 border-slate-50 relative z-10">
                {step.icon}
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center font-bold text-slate-900 text-sm">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 px-2">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;