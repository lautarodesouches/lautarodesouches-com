import type { ContactData } from '../types'

export const contactData: ContactData = {
  tag: '04 // CONTACTO & COMUNICACIÓN DIRECTA',
  title: 'Iniciemos una conversación técnica o de negocio.',
  description:
    'Disponible para consultoría en arquitectura web, desarrollo de software y plataformas a medida, auditorías de rendimiento y contrataciones en equipos de alta exigencia.',
  channels: [
    {
      id: 'whatsapp',
      label: '// MENSAJERÍA DIRECTA',
      title: 'WhatsApp Directo',
      description:
        'Canal prioritario para consultas comerciales inmediatas, coordinación de llamadas y definición de proyectos.',
      value: '+54 11 3011-1503',
      href: 'https://wa.me/541130111503?text=Hola%20Lautaro,%20estoy%20interesado%20en%20conversar%20sobre%20un%20proyecto.',
      isExternal: true,
      actionText: 'Iniciar chat en WhatsApp',
    },
    {
      id: 'email',
      label: '// CORREO ELECTRÓNICO',
      title: 'Email Profesional',
      description:
        'Ideal para solicitudes formales, propuestas contractuales, requerimientos técnicos detallados y NDA.',
      value: 'lautarodesouches@outlook.com',
      href: 'mailto:lautarodesouches@outlook.com',
      isExternal: false,
      actionText: 'Abrir cliente de correo',
      isCopyable: true,
    },
  ],
  socials: [
    {
      id: 'linkedin',
      platform: 'LinkedIn',
      handle: 'in/lautarodesouches',
      url: 'https://linkedin.com/in/lautarodesouches',
      badge: 'Red Profesional ↗',
    },
    {
      id: 'github',
      platform: 'GitHub',
      handle: 'lautarodesouches',
      url: 'https://github.com/lautarodesouches',
      badge: 'Código & Repositorios ↗',
    },
  ],
  telemetry: {
    status: 'DISPONIBLE PARA PROYECTOS',
    statusDetail: 'Consultoría y desarrollo Full Stack',
    location: 'Ramos Mejía, Buenos Aires, Argentina',
    timezone: 'GMT-3 (America/Argentina/Buenos_Aires)',
    responseLatency: '< 24 horas hábiles',
    languages: 'Español (Nativo) // Inglés (C1 Profesional)',
    availability: '100% Remoto // Híbrido CABA & GBA',
  },
  signature: {
    year: 2026,
    author: 'Lautaro Desouches',
    role: 'Desarrollador Web Full Stack',
    techStack: 'Construido con Astro 5, TypeScript, GSAP & Lenis',
  },
}
