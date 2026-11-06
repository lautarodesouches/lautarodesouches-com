export interface Solution {
  id: string
  index: string
  title: string
  summary: string
  deliverables: string[]
  stack: string[]
}

export const solutions: Solution[] = [
  {
    id: 'custom-software',
    index: '01',
    title: 'Plataformas & Software a Medida',
    summary: 'Arquitectura y desarrollo de aplicaciones web complejas, portales B2B y sistemas de gestión interna desde cero. Tipado estricto, APIs resilientes y persistencia relacional optimizada.',
    deliverables: [
      'Paneles administrativos y dashboards reactivos',
      'APIs REST / GraphQL con autenticación y RBAC',
      'Bases de datos escalables y pipelines CI/CD',
    ],
    stack: ['TypeScript', 'Next.js', 'Node / NestJS', 'PostgreSQL', 'Docker'],
  },
  {
    id: 'corporate-sites',
    index: '02',
    title: 'Sitios Web & Landing Pages de Alta Conversión',
    summary: 'Presencia corporativa y páginas comerciales construidas con arquitectura estática ultra-liviana. Cero JavaScript innecesario, máxima velocidad de respuesta y diseño responsivo quirúrgico.',
    deliverables: [
      'Desarrollo headless sin dependencias bloated',
      'Micro-interacciones y transiciones fluidas a 60 fps',
      'Estructuras de layout optimizadas para conversión (CRO)',
    ],
    stack: ['Astro', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Lenis'],
  },
  {
    id: 'performance-cwv',
    index: '03',
    title: 'Rendimiento Extremo & Core Web Vitals',
    summary: 'Auditoría, saneamiento y refactorización de plataformas con problemas de carga. Erradicación de bloqueos en el hilo principal y optimización de renderizado para métricas verdes.',
    deliverables: [
      'Lighthouse 95+ en Performance, Accesibilidad y SEO',
      'Largest Contentful Paint (LCP) inferior a 1.8 segundos',
      'Eliminación de Cumulative Layout Shift (CLS zero)',
    ],
    stack: ['Core Web Vitals', 'Chrome DevTools Profiling', 'Code Splitting', 'Edge Cache'],
  },
  {
    id: 'analytics-infra',
    index: '04',
    title: 'Tracking Avanzado & Arquitectura Cloud',
    summary: 'Instrumentación precisa de telemetría de usuario y orquestación de servidores Linux. Aseguro datos limpios para decisiones comerciales y uptime continuo del servicio.',
    deliverables: [
      'Configuración de Google Tag Manager (GTM) y eventos GA4',
      'Despliegues automatizados en VPS con Coolify / PM2',
      'Monitoreo de latencia, copias de seguridad y logs en vivo',
    ],
    stack: ['GTM & GA4', 'Linux VPS', 'Coolify', 'Nginx / Caddy', 'GitHub Actions'],
  },
]

