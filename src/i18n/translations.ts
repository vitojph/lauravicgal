export type Language = 'en' | 'es';

export const translations = {
  // Navigation
  nav: {
    home: { en: 'Home', es: 'Inicio' },
    ceremonies: { en: 'Events', es: 'Eventos' },
    workshops: { en: 'Workshops', es: 'Talleres' },
    commissions: { en: 'Commissions', es: 'Encargos' },
    gallery: { en: 'Gallery', es: 'Galería' },
    about: { en: 'About', es: 'Sobre Mí' },
    contact: { en: 'Contact', es: 'Contacto' },
  },

  // Common
  common: {
    learnMore: { en: 'Learn More', es: 'Saber Más' },
    bookNow: { en: 'Book Now', es: 'Reservar' },
    getInTouch: { en: 'Get in Touch', es: 'Contactar' },
    viewGallery: { en: 'View Gallery', es: 'Ver Galería' },
    startingAt: { en: 'Starting at', es: 'Desde' },
    includes: { en: 'Includes', es: 'Incluye' },
    features: { en: 'Features', es: 'Características' },
    price: { en: 'Price', es: 'Precio' },
    size: { en: 'Size', es: 'Tamaño' },
    allRightsReserved: { en: 'All rights reserved', es: 'Todos los derechos reservados' },
  },

  // Home Page
  home: {
    heroTitle: {
      en: 'Art that Celebrates Love & Life',
      es: 'Arte que Celebra el Amor y la Vida'
    },
    heroSubtitle: {
      en: 'Transformational event leader and watercolor artist, creating meaningful ceremonies and immersive creative experiences. Based in NY/NJ',
      es: 'Líder de eventos transformacionales y artista de acuarela, creando ceremonias significativas y experiencias creativas inmersivas. Basada en NY/NJ'
    },
    servicesTitle: {
      en: 'What I Offer',
      es: 'Lo Que Ofrezco'
    },
    ceremoniesTitle: {
      en: 'Wedding Ceremonies',
      es: 'Ceremonias de Boda'
    },
    ceremoniesDesc: {
      en: 'Personalized bilingual ceremonies that honor your unique love story',
      es: 'Ceremonias bilingües personalizadas que honran su historia de amor única'
    },
    workshopsTitle: {
      en: 'Art Workshops',
      es: 'Talleres de Arte'
    },
    workshopsDesc: {
      en: 'Creative experiences for team building, private events, and group sessions',
      es: 'Experiencias creativas para equipos, eventos privados y sesiones grupales'
    },
    commissionsTitle: {
      en: 'Custom Artwork',
      es: 'Arte Personalizado'
    },
    commissionsDesc: {
      en: 'Original watercolor paintings created just for you',
      es: 'Pinturas originales en acuarela creadas especialmente para ti'
    },
    featuredWork: {
      en: 'Featured Work',
      es: 'Trabajo Destacado'
    },
  },

  // Ceremonies Page
  ceremonies: {
    pageTitle: {
      en: 'Wedding Ceremonies',
      es: 'Ceremonias de Boda'
    },
    pageSubtitle: {
      en: 'EnamorARTE - Where love meets art',
      es: 'EnamorARTE - Donde el amor encuentra el arte'
    },
    intro: {
      en: 'I create personalized, bilingual wedding ceremonies that reflect your unique love story. As a certified officiant, I bring warmth, cultural sensitivity, and artistic flair to your special day.',
      es: 'Creo ceremonias de boda bilingües y personalizadas que reflejan su historia de amor única. Como oficiante certificada, aporto calidez, sensibilidad cultural y un toque artístico a su día especial.'
    },
    pricingTitle: {
      en: 'Ceremony Packages',
      es: 'Paquetes de Ceremonia'
    },
    ritualsTitle: {
      en: 'Symbolic Rituals',
      es: 'Rituales Simbólicos'
    },
    ritualsDesc: {
      en: 'Add meaningful traditions to your ceremony',
      es: 'Añade tradiciones significativas a tu ceremonia'
    },
    // Ritual names
    sandCeremony: { en: 'Sand Ceremony', es: 'Ceremonia de Arena' },
    handfasting: { en: 'Handfasting', es: 'Handfasting' },
    treePlanting: { en: 'Tree Planting', es: 'Plantación de Árbol' },
    timeCapsule: { en: 'Time Capsule', es: 'Cápsula del Tiempo' },
    redThread: { en: 'Red Thread', es: 'Hilo Rojo' },
    enamorarte: { en: 'EnamorARTE', es: 'EnamorARTE' },
    // Tier names
    simpleTier: { en: 'Simple & Sweet', es: 'Simple y Dulce' },
    personalizedTier: { en: 'Personalized', es: 'Personalizada' },
    deluxeTier: { en: 'Deluxe', es: 'Deluxe' },
  },

  // Workshops Page
  workshops: {
    pageTitle: {
      en: 'Art Workshops',
      es: 'Talleres de Arte'
    },
    pageSubtitle: {
      en: 'Unleash your creativity',
      es: 'Libera tu creatividad'
    },
    intro: {
      en: 'Experience the joy of creating with watercolors. Perfect for team building, private parties, or learning something new.',
      es: 'Experimenta la alegría de crear con acuarelas. Perfecto para team building, fiestas privadas o aprender algo nuevo.'
    },
    teamBuilding: { en: 'Team Building', es: 'Team Building' },
    teamBuildingDesc: {
      en: 'Bring your team together for a creative, stress-relieving experience',
      es: 'Reúne a tu equipo para una experiencia creativa y relajante'
    },
    privateEvents: { en: 'Private Events', es: 'Eventos Privados' },
    privateEventsDesc: {
      en: 'Perfect for bachelorette parties, birthdays, and celebrations',
      es: 'Perfecto para despedidas de soltera, cumpleaños y celebraciones'
    },
    groupClasses: { en: 'Group Classes', es: 'Clases Grupales' },
    groupClassesDesc: {
      en: 'Join other art enthusiasts in a fun, supportive environment',
      es: 'Únete a otros entusiastas del arte en un ambiente divertido y de apoyo'
    },
    bookWorkshop: { en: 'Book a Workshop', es: 'Reservar un Taller' },
  },

  // Commissions Page
  commissions: {
    pageTitle: {
      en: 'Custom Artwork',
      es: 'Arte Personalizado'
    },
    pageSubtitle: {
      en: 'Original watercolor paintings made just for you',
      es: 'Pinturas originales en acuarela hechas para ti'
    },
    intro: {
      en: 'Transform your cherished memories, beloved pets, or dream landscapes into beautiful watercolor art.',
      es: 'Transforma tus recuerdos preciados, mascotas queridas o paisajes soñados en hermoso arte de acuarela.'
    },
    pricingTitle: { en: 'Pricing by Size', es: 'Precios por Tamaño' },
    processTitle: { en: 'The Process', es: 'El Proceso' },
    faqTitle: { en: 'Frequently Asked Questions', es: 'Preguntas Frecuentes' },
    // Process steps
    step1: { en: 'Share your vision', es: 'Comparte tu visión' },
    step1Desc: { en: 'Send me your photos and ideas', es: 'Envíame tus fotos e ideas' },
    step2: { en: 'Review the sketch', es: 'Revisa el boceto' },
    step2Desc: { en: 'I\'ll create a preliminary sketch for your approval', es: 'Crearé un boceto preliminar para tu aprobación' },
    step3: { en: 'Painting begins', es: 'Comienza la pintura' },
    step3Desc: { en: 'I bring your vision to life with watercolors', es: 'Doy vida a tu visión con acuarelas' },
    step4: { en: 'Delivery', es: 'Entrega' },
    step4Desc: { en: 'Receive your finished artwork, ready to frame', es: 'Recibe tu obra terminada, lista para enmarcar' },
  },

  // Gallery Page
  gallery: {
    pageTitle: { en: 'Gallery', es: 'Galería' },
    pageSubtitle: {
      en: 'Weddings, workshops, and custom artwork',
      es: 'Bodas, talleres y arte personalizado'
    },
    filterAll: { en: 'All', es: 'Todo' },
    filterWeddings: { en: 'Weddings', es: 'Bodas' },
    filterWorkshops: { en: 'Workshops', es: 'Talleres' },
    filterCustomArtwork: { en: 'Custom Artwork', es: 'Arte Personalizado' },
    filterWeddingArt: { en: 'Wedding + Art', es: 'Boda + Arte' },
  },

  // About Page
  about: {
    pageTitle: { en: 'About Laura', es: 'Sobre Laura' },
    intro: {
      en: 'I\'m Laura Vicente Gallardo, a watercolor artist and certified wedding officiant based in the NY/NJ area.',
      es: 'Soy Laura Vicente Gallardo, artista de acuarela y oficiante de bodas certificada en el área de NY/NJ.'
    },
    bio: {
      en: 'My journey began in Madrid, Spain, where I developed a deep appreciation for art and culture. Now based in New Jersey, I combine my Spanish roots with my American home to create meaningful connections through art and ceremony.',
      es: 'Mi viaje comenzó en Madrid, España, donde desarrollé un profundo aprecio por el arte y la cultura. Ahora en Nueva Jersey, combino mis raíces españolas con mi hogar americano para crear conexiones significativas a través del arte y la ceremonia.'
    },
    credentials: { en: 'Credentials', es: 'Credenciales' },
    approach: { en: 'My Approach', es: 'Mi Enfoque' },
    approachText: {
      en: 'Whether I\'m painting a portrait or officiating a wedding, my goal is always the same: to capture the essence of what makes each moment, person, or relationship special.',
      es: 'Ya sea pintando un retrato u oficiando una boda, mi objetivo es siempre el mismo: capturar la esencia de lo que hace especial cada momento, persona o relación.'
    },
  },

  // Contact Page
  contact: {
    pageTitle: { en: 'Get in Touch', es: 'Contacto' },
    pageSubtitle: {
      en: 'I\'d love to hear from you',
      es: 'Me encantaría saber de ti'
    },
    emailLabel: { en: 'Instagram', es: 'Instagram' },
    phoneLabel: { en: 'Phone', es: 'Teléfono' },
    followMe: { en: 'Follow Me', es: 'Sígueme' },
    locationLabel: { en: 'Location', es: 'Ubicación' },
    location: { en: 'NY/NJ area', es: 'Área metropolitana de NY/NJ' },
  },

  // Footer
  footer: {
    tagline: {
      en: 'Creating beauty through art and ceremony',
      es: 'Creando belleza a través del arte y la ceremonia'
    },
    quickLinks: { en: 'Quick Links', es: 'Enlaces Rápidos' },
    connect: { en: 'Connect', es: 'Conectar' },
  },
} as const;

// Helper function to get translation
export function t(
  key: string,
  lang: Language = 'en'
): string {
  const keys = key.split('.');
  let result: unknown = translations;

  for (const k of keys) {
    if (result && typeof result === 'object' && k in result) {
      result = (result as Record<string, unknown>)[k];
    } else {
      return key; // Return key if translation not found
    }
  }

  if (result && typeof result === 'object' && lang in result) {
    return (result as Record<Language, string>)[lang];
  }

  return key;
}

// Get all translations for a given language (useful for client-side)
export function getAllTranslations(lang: Language) {
  const flattenTranslations = (
    obj: Record<string, unknown>,
    prefix = ''
  ): Record<string, string> => {
    const result: Record<string, string> = {};

    for (const [key, value] of Object.entries(obj)) {
      const newKey = prefix ? `${prefix}.${key}` : key;

      if (value && typeof value === 'object') {
        if ('en' in value && 'es' in value) {
          result[newKey] = (value as Record<Language, string>)[lang];
        } else {
          Object.assign(result, flattenTranslations(value as Record<string, unknown>, newKey));
        }
      }
    }

    return result;
  };

  return flattenTranslations(translations);
}
