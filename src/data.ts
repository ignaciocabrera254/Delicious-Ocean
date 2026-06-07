export const businessData = {
  name: "Delicious Ocean",
  description: "La mejor pescadería y marisquería de Pirque. Pescados y mariscos frescos seleccionados diariamente.",
  address: {
    streetAddress: "Av. Virginia Subercaseaux 447, local 8",
    addressLocality: "Pirque",
    addressRegion: "Región Metropolitana",
    addressCountry: "CL"
  },
  telephone: "+56923951003",
  geo: {
    latitude: -33.6333, // Approximate for Pirque center, normally you'd use exact
    longitude: -70.5500
  },
  openingHours: [
    { dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "09:00", closes: "18:00" },
    { dayOfWeek: ["Sunday"], opens: "09:00", closes: "14:00" }
  ]
};

export const offersData = [
  { 
    id: 1, 
    title: "Salmón Filete Congelado", 
    price: "$15.990", 
    unit: "/Kg", 
    image: "/promo1.webp", 
    tag: "OFERTA",
    alt: "Filete de salmón congelado en oferta - Pescadería en Pirque"
  },
  { 
    id: 2, 
    title: "Hamburguesa de Salmón", 
    price: "$1.990", 
    unit: "c/u", 
    image: "/promo2.webp", 
    tag: "OFERTA ESPECIAL",
    alt: "Rica hamburguesa de salmón fresca - Pescadería Pirque local"
  },
  { 
    id: 3, 
    title: "Reineta Gran Oferta", 
    price: "$6.980", 
    unit: "/Kilo", 
    image: "/promo3.webp", 
    tag: "GRAN OFERTA",
    alt: "Reineta fresca entera en promoción - Delicious Ocean Pirque"
  }
];

export const fishData = [
  { id: 1, title: "Reineta", description: "Selección del día, frescura garantizada del mar a tu mesa.", price: "$10.990", unit: "/Kg", image: "/reineta.png", alt: "Corte de Reineta fresca en mostrador de pescadería" },
  { id: 2, title: "Corvina", description: "Cortes perfectos, listos para cocinar, sin espinas.", price: "$13.500", unit: "/Kg", image: "/corvina.png", alt: "Filetes de corvina de alta calidad listos para venta" },
  { id: 3, title: "Trucha", description: "Calidad exportación, ideal para preparaciones gourmet.", price: "$16.900", unit: "/Kg", image: "/trucha.png", alt: "Trucha fresca calidad exportación - Marisquería Pirque" }
];

export const seafoodData = [
  { id: 1, title: "Camarones Ecuatorianos", description: "Calibre grande, textura firme y sabor dulce inigualable.", price: "$12.500", unit: "/Kg", image: "/camarones.png", alt: "Plato de camarones ecuatorianos frescos y grandes" },
  { id: 2, title: "Almejas Frescas", description: "Seleccionadas a mano todos los días para mayor frescura.", price: "$8.900", unit: "/Kg", image: "/almejas.png", alt: "Conchas de almejas frescas recién seleccionadas" },
  { id: 3, title: "Calamar Nacional", description: "Perfecto para rabas crujientes o preparaciones al ajillo.", price: "$10.500", unit: "/Kg", image: "/calamar.png", alt: "Calamar nacional limpio y empacado" },
  { id: 4, title: "Jaiba", description: "El sabor más exclusivo del extremo sur, carne premium.", price: "$35.000", unit: "/Kg", image: "/jaiva.png", alt: "Carne de jaiba premium fresca" }
];

export const testimonialsData = [
  { id: 1, text: "La mejor calidad en Pirque, lejos. El salmón siempre está fresquísimo y la atención es impecable.", author: "María José R." },
  { id: 2, text: "Precios justos y mariscos de primera. Hago mis pedidos por WhatsApp y siempre me tienen todo listo.", author: "Carlos T." },
  { id: 3, text: "Excelente presentación. Parecen productos de boutique pero al alcance del bolsillo. Muy recomendados.", author: "Andrea P." }
];

export const faqData = [
  { 
    question: "¿Realizan despachos a domicilio?", 
    answer: "Actualmente nos enfocamos en el retiro en local y pedidos programados vía WhatsApp para asegurar la máxima frescura, pero puedes consultarnos por disponibilidad de despacho en zonas cercanas de Pirque." 
  },
  { 
    question: "¿Cómo garantizan la frescura de sus productos?", 
    answer: "Seleccionamos personalmente cada producto en el terminal pesquero todas las madrugadas. Mantenemos una cadena de frío estricta y renovamos nuestro stock diariamente." 
  },
  { 
    question: "¿Qué medios de pago aceptan?", 
    answer: "Aceptamos efectivo, transferencias bancarias y tarjetas de débito/crédito (Transbank) directamente en nuestro local." 
  },
  { 
    question: "¿Cómo puedo saber el stock del día?", 
    answer: "Lo más rápido es escribirnos a nuestro WhatsApp. Actualizamos a nuestros clientes frecuentes cada mañana con las novedades y ofertas del día." 
  }
];
