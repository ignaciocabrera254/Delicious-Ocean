"use client";

import React from 'react';
import { offersData, fishData, seafoodData } from '../data';

interface ProductItem {
  id: number;
  title: string;
  description: string;
  price: string;
  unit: string;
  image: string;
  alt: string;
}

const ProductCard: React.FC<{ item: ProductItem }> = ({ item }) => {
  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-oceanic hover:shadow-oceanic-hover transition-all duration-300 group flex flex-col">
      <div className="relative h-56 overflow-hidden">
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-brand-primary/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
            Disponible
          </span>
        </div>
        <img 
          src={item.image} 
          alt={item.alt} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-brand-primary mb-2 line-clamp-1">{item.title}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-2">{item.description}</p>
        <div className="flex items-baseline gap-1 mt-auto">
          <span className="text-2xl font-bold text-gray-900">{item.price}</span>
          <span className="text-sm font-medium text-gray-500">{item.unit}</span>
        </div>
      </div>
    </article>
  );
}

export function OffersSection() {
  return (
    <section id="ofertas" className="py-20 lg:py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-brand-primary mb-16">Ofertas de la Semana</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offersData.map((offer) => (
            <article key={offer.id} className="relative rounded-2xl overflow-hidden shadow-oceanic group flex flex-col bg-white">
              <div className="relative overflow-hidden flex-grow">
                <img 
                  src={offer.image} 
                  alt={offer.alt} 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FishSection() {
  return (
    <section id="pescaderia" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-brand-primary mb-12">Nuestra Pescadería</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {fishData.map((fish) => (
            <ProductCard key={fish.id} item={fish} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function SeafoodSection() {
  return (
    <section id="marisqueria" className="py-16 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-brand-primary mb-12">Nuestra Marisquería</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {seafoodData.map((seafood) => (
            <ProductCard key={seafood.id} item={seafood} />
          ))}
        </div>
      </div>
    </section>
  );
}
