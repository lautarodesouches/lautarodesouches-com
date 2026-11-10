import type { ServicePackage, ProcessStep, ServicesTelemetry } from '../types'

export const servicesData: ServicePackage[] = [
  {
    id: 'corporate-high-speed',
    index: '01',
    badge: 'ALTA VELOCIDAD // CORE WEB VITALS',
    title: 'Sitios Web Corporativos & Landing Pages de Conversión',
    targetAudience:
      'Empresas y marcas que necesitan validar autoridad, captar clientes calificados y superar a su competencia en velocidad.',
    summary:
      'Desarrollo exclusivo desde cero con arquitectura estática ultra-liviana. Cero JavaScript innecesario, diseño a medida y puntuación 95+ garantizada en Google PageSpeed.',
    deliverables: [
      'Arquitectura headless en Astro 5 con CSS3 optimizado',
      'Micro-interacciones fluidas a 60 fps e identidad de marca premium',
      'Estructura de contenidos optimizada para conversión (CRO)',
      'Indexación técnica Schema.org y SEO estructural de punta a punta',
    ],
    techStack: ['Astro', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Lenis'],
    deliveryTime: '1 a 3 semanas',
    investmentTier: 'Cotización a medida según alcance',
  },
  {
    id: 'custom-web-platform',
    index: '02',
    badge: 'FULL STACK // B2B ENTERPRISE',
    title: 'Plataformas Web & Software a Medida',
    targetAudience:
      'Negocios con operaciones críticas que requieren automatizar procesos, gestionar catálogos masivos o portales internos de clientes.',
    summary:
      'Construcción integral de sistemas web con tipado estricto, persistencia transaccional y paneles de administración a prueba de errores manuales.',
    deliverables: [
      'Paneles administrativos y dashboards reactivos con control de roles (RBAC)',
      'APIs REST / GraphQL con tipado estricto de punta a punta',
      'Bases de datos relacionales optimizadas (PostgreSQL / MariaDB)',
      'Integración con pasarelas de pago, APIs externas y webhooks',
      'Testing automatizado E2E para evitar regresiones en producción',
    ],
    techStack: ['Next.js / React', 'TypeScript', 'Node / NestJS', 'PostgreSQL', 'Prisma'],
    deliveryTime: '2 a 4 semanas',
    investmentTier: 'Cotización por hitos y sprint',
  },
  {
    id: 'architecture-performance-audit',
    index: '03',
    badge: 'REFACTORING // OPTIMIZACIÓN',
    title: 'Auditoría & Rescate de Rendimiento Web',
    targetAudience:
      'Empresas con plataformas existentes lentas, pérdida de conversión publicitaria o caídas de posicionamiento en Google.',
    summary:
      'Intervención quirúrgica sobre el código para erradicar cuellos de botella en el navegador, reducir tiempos de respuesta del servidor y sanear métricas Core Web Vitals.',
    deliverables: [
      'Auditoría profunda de bundles JS, bloqueos de hilo principal y LCP/CLS',
      'Refactorización de renderizado y lazy-loading de recursos pesados',
      'Optimización de infraestructura y caché en el Edge / CDN',
      'Informe técnico de telemetría antes y después de la intervención',
    ],
    techStack: ['Chrome DevTools', 'Next.js ISR', 'Cloudflare Edge', 'Docker'],
    deliveryTime: '1 a 2 semanas',
    investmentTier: 'Tarifa fija de auditoría e intervención',
  },
]

export const processRoadmap: ProcessStep[] = [
  {
    step: '01',
    name: 'Diagnóstico & Arquitectura',
    desc: 'Relevamiento del modelo de negocio, definición estricta del alcance (Scope of Work), selección del stack y cronograma de entregas.',
  },
  {
    step: '02',
    name: 'Prototipado & Validación',
    desc: 'Diseño interactivo de flujos clave y validación de la experiencia de usuario antes de picar la primera línea de código.',
  },
  {
    step: '03',
    name: 'Ingeniería & Testing',
    desc: 'Desarrollo en sprints con código limpio, arquitectura modular y pruebas automatizadas continuas.',
  },
  {
    step: '04',
    name: 'Despliegue & Handover',
    desc: 'Puesta en marcha en servidores de producción (VPS/Edge), instrumentación de analítica y transferencia total de propiedad del código.',
  },
]

export const servicesTelemetry: ServicesTelemetry = {
  status: 'DISPONIBLE — INICIO INMEDIATO O PRÓXIMO MES',
  model: 'Desarrollo Llave en Mano — Construcción desde Cero',
  responseLatency: '< 24 horas hábiles',
  ipOwnership: '100% código y repositorios transferidos al cliente',
}
