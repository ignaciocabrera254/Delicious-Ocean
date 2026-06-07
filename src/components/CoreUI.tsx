"use client";

import { Fish } from 'lucide-react';
import { businessData } from '../data';

export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Fish className="h-8 w-8 text-brand-accent" />
            <span className="font-epilogue text-2xl font-bold text-brand-primary tracking-tight">
              Delicious Ocean
            </span>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex space-x-8">
            <a href="#ofertas" className="text-gray-700 hover:text-brand-accent font-medium transition-colors">Ofertas</a>
            <a href="#pescaderia" className="text-gray-700 hover:text-brand-accent font-medium transition-colors">Pescadería</a>
            <a href="#marisqueria" className="text-gray-700 hover:text-brand-accent font-medium transition-colors">Marisquería</a>
            <a href="#conocenos" className="text-gray-700 hover:text-brand-accent font-medium transition-colors">Conócenos</a>
            <a href="#contacto" className="text-gray-700 hover:text-brand-accent font-medium transition-colors">Contacto</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <a 
              href={`https://wa.me/${businessData.telephone.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-accent text-white px-6 py-2.5 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
            >
              Pedir por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Fish className="h-6 w-6 text-brand-accent" />
            <span className="font-epilogue text-xl font-bold">
              Delicious Ocean
            </span>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-gray-300">
            <a href="#pescaderia" className="hover:text-white transition-colors">Pescadería</a>
            <a href="#marisqueria" className="hover:text-white transition-colors">Marisquería</a>
            <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
          </nav>
          
          <div className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Delicious Ocean. Diseño basado en Maritime Elegance para Pirque.
          </div>
        </div>
      </div>
    </footer>
  );
}

export function Hero() {
  return (
    <section className="relative bg-brand-primary min-h-[60vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero.webp" 
          alt="Exhibición de pescados y mariscos frescos de primera calidad en Pirque" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#001e40]/70 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        <h1 className="text-white mb-6 mx-auto max-w-4xl tracking-tight drop-shadow-md">
          Pescados y Mariscos Frescos en <span className="text-brand-accent">Pirque</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto mb-10 font-medium">
          Productos del mar de primera selección. Máxima calidad y precios que cuidan tu bolsillo, con stock renovado todos los días.
        </p>
        <a 
          href={`https://wa.me/${businessData.telephone.replace('+', '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-brand-accent text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 shadow-xl hover:-translate-y-0.5 transition-all"
        >
          Pedir por WhatsApp
        </a>
      </div>
    </section>
  );
}
