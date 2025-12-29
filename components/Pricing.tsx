import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardHeader, CardContent, CardTitle, CardFooter, CardDescription } from './ui/card';

const pricingPlans = [
  {
    title: 'Daire Boyama',
    subtitle: 'Başlangıç Fiyatı',
    price: '₺5.000',
    description: 'Stüdyo ve 1+1 daireler için ideal.',
    features: ['Duvar Hazırlığı & Alçı', '2 Kat Silikonlu Boya', 'Kestirme & Bantlama', '1 Günde Teslim İmkanı'],
  },
  {
    title: 'Ev Boyama',
    subtitle: 'Başlangıç Fiyatı',
    price: '₺12.000',
    description: 'Komple ev yenileme paketleri.',
    features: ['Detaylı Duvar Keşfi', 'Duvar & Tavan Tamirleri', 'Kaliteli Boya Dahil', 'Detaylı Temizlik'],
    popular: true,
  },
  {
    title: 'Ofis & İş Yeri',
    subtitle: 'Özel Teklif',
    price: 'İletişime Geçin',
    description: 'Ticari alanlar ve dükkanlar.',
    features: ['Mesai Dışı Çalışma', 'Dayanıklı Ticari Boya', 'İş Güvenliği Uyumu', 'Hızlı Uygulama'],
  },
];

const Pricing: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-20 px-4 md:px-6 bg-slate-900 text-slate-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Şeffaf Fiyatlandırma</h2>
          <p className="text-lg text-slate-400">Kaliteli işçilik için rekabetçi fiyatlar.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`border-0 relative flex flex-col ${plan.popular ? 'bg-white text-slate-900' : 'bg-slate-800 text-slate-100'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-bold py-1 px-3 rounded-full uppercase tracking-wider border border-slate-700">
                  En Çok Tercih Edilen
                </div>
              )}
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-xl mb-1">{plan.title}</CardTitle>
                <CardDescription className={plan.popular ? "text-slate-500" : "text-slate-400"}>
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col items-center">
                <div className="mb-6 text-center">
                  <span className={`text-sm ${plan.popular ? "text-slate-500" : "text-slate-400"}`}>{plan.subtitle}</span>
                  <div className="text-4xl font-bold mt-1">{plan.price}</div>
                </div>
                <ul className="space-y-3 w-full">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <Check className={`h-4 w-4 mr-3 flex-shrink-0 ${plan.popular ? "text-slate-900" : "text-slate-400"}`} />
                      <span className={plan.popular ? "text-slate-700" : "text-slate-300"}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={scrollToContact}
                  className={`w-full ${plan.popular ? "bg-slate-900 text-white hover:bg-slate-800" : "bg-white text-slate-900 hover:bg-slate-200"}`}
                >
                  Teklif Al
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-400">
            * Nihai fiyatlar mülk büyüklüğüne, duvar durumuna ve keşif sonucuna göre değişiklik gösterebilir.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;