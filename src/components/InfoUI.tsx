"use client";

import { useState } from 'react';
import { testimonialsData, faqData, businessData } from '../data';
import { MapPin, Clock, Phone, ChevronDown, ChevronUp, Star } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="conocenos" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-brand-primary mb-6">Conócenos</h2>
            <div className="prose prose-lg text-gray-700">
              <p className="mb-4">
                En Delicious Ocean, llevamos la frescura del mar directamente a tu mesa en Pirque. 
                Somos una empresa familiar comprometida con ofrecer los mejores pescados y mariscos, 
                seleccionados meticulosamente cada madrugada en los terminales pesqueros.
              </p>
              <p>
                Nuestra filosofía de "Elegancia Marítima" significa que no solo te entregamos un producto, 
                sino una experiencia culinaria premium, manteniendo siempre precios accesibles para 
                nuestra comunidad local.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square max-w-lg mx-auto">
              <img 
                src="/logo.webp" 
                alt="Mariscos y pescados premium - Nuestra calidad en Delicious Ocean" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TestimonialSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-brand-primary">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&w=2000&q=80" 
          alt="Restaurante de mariscos" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-white mb-16">Lo que dicen nuestros clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <article key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-xl flex flex-col">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-accent text-brand-accent" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 flex-grow">"{testimonial.text}"</p>
              <footer className="font-bold text-brand-primary block">
                - {testimonial.author}
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/3">
             <div className="sticky top-24">
                <h2 className="text-brand-primary mb-6">Preguntas Frecuentes</h2>
                <p className="text-gray-600 mb-8">
                  Respondemos las dudas más comunes sobre nuestros pescados, 
                  mariscos y envíos para tu total tranquilidad.
                </p>
             </div>
          </div>
          <div className="lg:w-2/3 w-full">
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <article 
                  key={index} 
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-brand-primary/20 shadow-md' : 'border-gray-200 bg-gray-50/50 hover:border-gray-300'}`}
                >
                  <button
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    aria-expanded={openIndex === index}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-brand-accent bg-brand-accent/10 p-2 rounded-full">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 11v-4a5 5 0 0 1 10 0v4"/><path d="M15.5 15.5 14 17l-1-1-1 1-1-1-1 1-1.5-1.5"/></svg>
                      </span>
                      <span className="font-bold text-gray-900 pr-4">{faq.question}</span>
                    </div>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="px-6 pb-6 pt-2 text-gray-600 pl-[3.25rem]">
                      {faq.answer}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contacto" className="py-24 bg-[#f0eded]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row bg-white rounded-3xl overflow-hidden shadow-oceanic">
          <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
            <h2 className="text-brand-primary mb-8">Contacto</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="mt-1 bg-brand-accent/10 p-3 rounded-full h-fit">
                  <MapPin className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Ubicación</h3>
                  <p className="text-gray-900 font-medium text-lg">{businessData.address.streetAddress}</p>
                  <p className="text-gray-600">{businessData.address.addressLocality}, {businessData.address.addressRegion}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 bg-brand-accent/10 p-3 rounded-full h-fit">
                  <Clock className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Horario de Atención</h3>
                  <p className="text-gray-900 font-medium text-lg">Lunes a Sábado: 09:00 - 18:00</p>
                  <p className="text-gray-600">Domingo: 09:00 - 14:00</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 bg-brand-accent/10 p-3 rounded-full h-fit">
                  <Phone className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Teléfono / WhatsApp</h3>
                  <p className="text-gray-900 font-medium text-lg">{businessData.telephone}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 pt-8 border-t border-gray-100">
               <a 
                href={`https://wa.me/${businessData.telephone.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full justify-center items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-md"
              >
                Escríbenos por WhatsApp
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 min-h-[400px] relative bg-gray-200">
            {/* Real Map or Placeholder */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207.6094731515563!2d-70.57730988036354!3d-33.63768291060389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d79f4f6a996f%3A0x1118d8be66c8fe96!2sM%C3%A1s%20Center%20Pirque!5e0!3m2!1ses!2scl!4v1780791966693!5m2!1ses!2scl" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de ubicación en Pirque"
              className="absolute inset-0 w-full h-full object-cover"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
