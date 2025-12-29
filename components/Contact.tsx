import React, { useState } from 'react';
import { Phone, Mail, MapPin, Check } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Ücretsiz Teklif Alın</h2>
            <p className="text-lg text-slate-600 mb-8">
              Mekanınızı yenilemeye hazır mısınız? Formu doldurun veya bizi arayın. Genellikle 24 saat içinde dönüş yapıyoruz.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start space-x-4">
                <div className="bg-slate-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-slate-900" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Telefon</h3>
                  <p className="text-slate-600">(0212) 123 45 67</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-slate-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-slate-900" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">E-posta</h3>
                  <p className="text-slate-600">info@istanbulboyama.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-slate-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-slate-900" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Hizmet Bölgeleri</h3>
                  <p className="text-slate-600">İstanbul Avrupa, Anadolu Yakası ve çevre semtler.</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Card>
              <CardContent className="p-6 md:p-8">
                {submitted ? (
                  <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center space-y-4">
                    <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Mesajınız İletildi!</h3>
                    <p className="text-slate-600">Bize ulaştığınız için teşekkürler. En kısa sürede size dönüş yapacağız.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-slate-700">İsim Soyisim</label>
                        <Input id="name" placeholder="Adınız Soyadınız" required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-slate-700">Telefon</label>
                        <Input id="phone" type="tel" placeholder="(555) 123 45 67" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-slate-700">E-posta</label>
                      <Input id="email" type="email" placeholder="ornek@email.com" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-medium text-slate-700">Hizmet Türü</label>
                      <select className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                        <option>İç Cephe Boyama</option>
                        <option>Dış Cephe Boyama</option>
                        <option>Ticari Boyama</option>
                        <option>Tamir & Hazırlık</option>
                        <option>Diğer</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-slate-700">Mesajınız</label>
                      <Textarea id="message" placeholder="Projenizden kısaca bahsedin..." className="min-h-[120px]" required />
                    </div>
                    <Button type="submit" className="w-full text-base py-6">Talep Gönder</Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;