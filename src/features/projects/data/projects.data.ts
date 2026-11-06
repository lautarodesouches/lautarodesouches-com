import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'chichess',
    title: 'Chichess — Fábrica de Juguetes',
    type: 'Catálogo B2B & Admin Panel',
    badge: 'B2B Enterprise',
    description:
      'Catálogo mayorista y panel interno administrativo de fábrica argentina de juguetes didácticos y de jardín fundada en 1993, cumpliendo normas de seguridad IRAM NM 300.',
    problem:
      'El negocio operaba con catálogos en papel y planillas desarticuladas, imposibilitando actualizar precios, priorizar dinámicamente líneas de producción y armar pedidos de gran volumen sin errores manuales.',
    solution:
      'Desarrollé una plataforma con Next.js 16 y Zustand, implementando reordenamiento global atómico mediante drag & drop (@dnd-kit) sincronizado con PDFs generados en tiempo real, persistencia ACID con Prisma y MariaDB, y un Testing Trophy blindado con Playwright y Husky v9.',
    impact:
      'Automatización total del ciclo de pedidos mayoristas, sincronización sin latencia de órdenes y cero regresiones en producción gracias a la cobertura E2E en CI/CD.',
    metrics: [
      { label: 'Pipeline Quality', value: 'Husky + Playwright E2E' },
      { label: 'Reordenamiento', value: 'Drag & Drop Atómico' },
      { label: 'Persistencia', value: 'Prisma + MariaDB ACID' },
    ],
    tech: ['Next.js 16', 'TypeScript', 'Zustand', 'Prisma ORM', 'MariaDB', '@dnd-kit', 'NextAuth.js', 'Playwright', 'Vitest'],
    demoUrl: 'https://www.chichess.com.ar/',
    repoUrl: '',
    isPrivateRepo: true,
    image: '/projects/chichess.png',
  },
  {
    id: 'gusto',
    title: 'Gusto — Social Restaurant Discovery',
    type: 'Plataforma Social & Discovery',
    badge: 'Geo-Social Platform',
    description:
      'Plataforma social para descubrir, calificar y recomendar gastronomía basada en círculos de confianza, con mapas en tiempo real y dashboards analíticos para propietarios de restaurantes.',
    problem:
      'Las plataformas tradicionales basan sus recomendaciones en reseñas anónimas de baja credibilidad y presentan interfaces pesadas con mala navegación geoespacial.',
    solution:
      'Diseñé la arquitectura con Next.js 15 App Router desacoplada de la capa de autenticación multi-proveedor con Firebase Auth, exploración cartográfica reactiva con Google Maps API y consumo optimizado de microservicios en .NET Core.',
    impact:
      'Interacción ultra-fluida con mapas dinámicos sin saltos de layout, arquitectura de estados desacoplada y panel de control con telemetría de interacción para locales.',
    metrics: [
      { label: 'Exploración', value: 'Google Maps Real-Time' },
      { label: 'Auth Layer', value: 'Multi-Provider Firebase' },
      { label: 'Arquitectura', value: 'Next.js 15 App Router' },
    ],
    tech: ['Next.js 15', 'React', 'TypeScript', 'CSS Modules', 'Firebase Auth', 'Google Maps API', '.NET Core API'],
    demoUrl: 'https://gusto-dusky.vercel.app/',
    repoUrl: 'https://github.com/lautarodesouches/gusto',
    isPrivateRepo: false,
    image: '/projects/gusto.png',
  },
  {
    id: 'zabala',
    title: 'Zabala Ingenieros',
    type: 'Website Corporativo Internacional',
    badge: 'High-Ticket B2B',
    description:
      'Portal institucional para constructora e ingeniería estructural de obras civiles con operaciones en Colombia y Panamá, especialista en impermeabilización con poliurea proyectada.',
    problem:
      'La firma requería posicionarse ante licitaciones de gran escala en Centro y Sudamérica, necesitando acreditar cobertura geográfica en vivo y capturar leads calificados sin fricción.',
    solution:
      'Construí una aplicación en Next.js App Router integrando mapas vectoriales de cobertura regional con React Simple Maps, micro-interacciones de precisión con Motion y un pipeline transaccional de correos corporativos con Resend.',
    impact:
      'Incremento directo en captación de cotizaciones internacionales de obra, velocidad de respuesta inferior a 1.2s y diseño que proyecta solvencia de ingeniería.',
    metrics: [
      { label: 'Presencia', value: 'Colombia & Panamá' },
      { label: 'Email Pipeline', value: 'Resend Transactional' },
      { label: 'Navegación', value: 'Mapas Vectoriales' },
    ],
    tech: ['Next.js', 'React 19', 'TypeScript', 'Motion', 'React Simple Maps', 'Resend', 'CSS Modules'],
    demoUrl: 'https://zabalaingenieros.com/',
    repoUrl: 'https://github.com/lautarodesouches/zabalaingenieros',
    isPrivateRepo: false,
    image: '/projects/zabalaingenieros.png',
  },
  {
    id: 'desouches',
    title: 'Desouches Propiedades — Real Estate',
    type: 'Real-Estate Web App',
    badge: 'Lighthouse 100/100',
    description:
      'Portal inmobiliario de alta gama para comercialización de propiedades residenciales y comerciales en Buenos Aires, con integración al ecosistema del sector.',
    problem:
      'Los portales del sector sobrecargan al navegador con bundles de JavaScript que superan 1.5MB, generando tiempos de carga superiores a 5s y pésimo posicionamiento orgánico.',
    solution:
      'Implementé la plataforma con Astro 5 bajo arquitectura de islas (0 KB de JavaScript en cliente para contenido estático), estilos CSS3 puros, optimización extrema de imágenes y datos estructurados Schema.org para bienes raíces.',
    impact:
      'Puntajes perfectos en Google PageSpeed: 95+ en Performance, 100 en Accesibilidad (WCAG 2.1 AAA), 100 en SEO y Largest Contentful Paint (LCP) < 2.5s.',
    metrics: [
      { label: 'Performance', value: '95+ PageSpeed' },
      { label: 'Accesibilidad', value: '100 WCAG AAA' },
      { label: 'LCP', value: '< 2.5s' },
    ],
    tech: ['Astro 5', 'TypeScript', 'CSS3', 'Schema.org', 'Google Analytics 4', 'Core Web Vitals'],
    demoUrl: 'https://desouchespropiedades.com.ar',
    repoUrl: 'https://github.com/lautarodesouches/desouches-propiedades',
    isPrivateRepo: false,
    image: '/projects/desouches-propiedades.png',
  },
]
