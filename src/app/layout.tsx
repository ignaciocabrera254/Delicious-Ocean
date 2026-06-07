import React from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "Delicious Ocean - Pescadería y Marisquería Premium en Pirque",
  description: "La mejor pescadería y marisquería de Pirque. Pescados y mariscos frescos de primera calidad seleccionados diariamente.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body>
        {children}
      </body>
    </html>
  );
}
