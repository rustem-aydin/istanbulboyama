import React from 'react';
import { Clock, CheckCircle2, DollarSign, UserCheck } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Clock className="h-6 w-6 text-slate-900" />,
    title: 'Zamanında Teslim',
    description: 'Programınıza sadık kalıyor ve işi söz verdiğimiz sürede tamamlıyoruz.',
  },
  {
    icon: <CheckCircle2 className="h-6 w-6 text-slate-900" />,
    title: 'Temiz İşçilik',
    description: 'Yerleri örter, pervazları bantlar ve iş bitiminde detaylı temizlik yaparız.',
  },
  {
    icon: <DollarSign className="h-6 w-6 text-slate-900" />,
    title: 'Uygun Fiyatlar',
    description: 'Profesyonel kalitede hizmet için rekabetçi fiyatlar. Sürpriz maliyet yok.',
  },
  {
    icon: <UserCheck className="h-6 w-6 text-slate-900" />,
    title: 'Deneyimli Ustalar',
    description: 'Ekibimiz eğitimli, güvenilir ve tüm boya tekniklerinde uzmandır.',
  },
];

const testimonials = [
  {
    quote: "İşçilikten çok memnun kaldım. Tam zamanında geldiler, çok kibarlardı ve duvarlar yepyeni görünüyor. Kesinlikle tavsiye ederim.",
    author: "Ayşe Y.",
    location: "Ev Sahibi"
  },
  {
    quote: "Kullandığım en iyi boya servisi. Hızlı, temiz ve verdikleri fiyat teklifine sadık kaldılar. Teşekkürler.",
    author: "Mehmet T.",
    location: "İşletme Sahibi"
  }
];

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 px-4 md:px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Neden İstanbul Boyama?</h2>
            <p className="text-lg text-slate-600 mb-10">
              Evinize ustaları davet etmenin güven gerektirdiğini biliyoruz. Bu güveni tutarlı kalite, saygı ve titiz çalışma ile inşa ediyoruz.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col space-y-2">
                  <div className="flex items-center space-x-3 mb-1">
                    <div className="p-2 bg-slate-100 rounded-md">
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold text-slate-900">{feature.title}</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed pl-12 sm:pl-0">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Müşterilerimiz Ne Diyor?</h3>
            <div className="space-y-6">
              {testimonials.map((t, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                >
                  <Card className="border-none shadow-sm">
                    <CardContent className="p-6">
                      <p className="italic text-slate-600 mb-4">"{t.quote}"</p>
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500 mr-3">
                          {t.author.charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">{t.author}</p>
                          <p className="text-xs text-slate-500">{t.location}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyUs;