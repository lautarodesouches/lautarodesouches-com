import type { HeroData } from '../types'

export const heroData: HeroData = {
  availability: 'DISPONIBLE PARA PROYECTOS / REMOTO',
  locationTimezone: 'BUENOS AIRES, AR (GMT-3)',
  name: 'Lautaro Desouches',
  role: 'Desarrollador Web Full Stack',
  headline: 'Creación de software a medida, plataformas web escalables y experiencias de alto rendimiento.',
  description:
    'Especializado en desarrollo frontend y arquitecturas backend resilientes. Soluciones con código limpio, TypeScript estricto y cero deuda técnica desde el día uno.',
  metrics: [
    {
      id: 'vitals',
      label: 'Rendimiento',
      value: '95+ Core Web Vitals',
      detail: 'en producción',
    },
    {
      id: 'experience',
      label: 'Experiencia',
      value: '+5 Años',
      detail: 'resolviendo problemas en producción',
    },
    {
      id: 'location',
      label: 'Ubicación',
      value: 'Buenos Aires, Argentina',
      detail: 'zona horaria GMT-3',
    },
  ],
  cta: {
    primary: {
      label: 'Ver Proyectos',
      href: '#proyectos',
    },
    secondary: {
      label: 'Hablemos',
      href: '#contacto',
    },
  },
}
