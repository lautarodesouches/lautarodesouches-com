import type { ServiceItem } from '../types'

export const servicesData: ServiceItem[] = [
  {
    id: 'corporate-websites',
    iconName: 'Globe',
    badge: 'Presencia & Conversión',
    title: 'Sitios Web Corporativos & Landing Pages de Alto Rendimiento',
    summary:
      'Diseño y desarrollo de sitios institucionales que transmiten credibilidad, cargan al instante y convierten visitantes en clientes.',
    deliverables: [
      'Puntuación 95+ en Core Web Vitals (Lighthouse) para máximo posicionamiento',
      'Estructuración SEO avanzada con Schema.org y metadatos OpenGraph',
      'Integración con WhatsApp, formularios transaccionales y pasarelas de pago',
      'Diseño responsive adaptado a móviles con micro-interacciones fluidas',
    ],
    clientImpact: 'Tiempos de carga < 1.5s y reducción inmediata en la tasa de rebote.',
  },
  {
    id: 'b2b-platforms',
    iconName: 'Layers',
    badge: 'Operaciones & Sistemas',
    title: 'Aplicaciones Web a Medida, Catálogos B2B & Paneles de Control',
    summary:
      'Soluciones digitales que automatizan procesos comerciales, ordenamiento de inventario masivo y flujos de trabajo internos sin depender de plantillas rígidas.',
    deliverables: [
      'Paneles administrativos interactivos (Drag & Drop, dashboards de métricas)',
      'Gestión de catálogos con cientos de productos y filtros instantáneos',
      'Autenticación segura multi-rol, control de sesiones y exportación a PDF/Excel',
      'Arquitectura desacoplada y bases de datos transaccionales de alta disponibilidad',
    ],
    clientImpact: 'Eliminación de errores manuales y pedidos centralizados en tiempo real.',
  },
  {
    id: 'performance-modernization',
    iconName: 'Zap',
    badge: 'Escalabilidad & Deuda Técnica',
    title: 'Optimización de Velocidad, Auditoría & Modernización de Plataformas',
    summary:
      'Diagnóstico y reescritura de sitios web lentos o plataformas legadas hacia arquitecturas modernas que disminuyen el costo de mantenimiento.',
    deliverables: [
      'Auditoría técnica de cuellos de botella en renderizado y consumo de red',
      'Migración de sitios WordPress o monolitos hacia Astro / Next.js',
      'Optimización de imágenes en el Edge y compresión de assets al 80%',
      'Configuración de pipelines CI/CD automatizados para despliegues con cero caídas',
    ],
    clientImpact: 'Ahorro en costos de servidor y experiencia de navegación instantánea.',
  },
]

