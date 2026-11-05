import type { ExperienceItem, EducationItem, LanguageItem } from '../types'

export const experienceItems: ExperienceItem[] = [
  {
    id: 'freelance-lead',
    period: '2019 — Presente',
    role: 'Desarrollador Full Stack & Consultor Independiente',
    company: 'Proyectos Comerciales, Clientes B2B & Productos SaaS',
    location: 'Buenos Aires, Argentina (Remoto)',
    description:
      'Liderazgo y desarrollo integral de soluciones de software de alto impacto. Relevamiento de requerimientos, diseño de arquitecturas escalables, implementación frontend/backend y aseguramiento de calidad con pipelines CI/CD.',
    highlights: [
      'Desarrollo de aplicaciones web escalables y plataformas B2B en Next.js (App Router), TypeScript y NestJS bajo arquitecturas limpias.',
      'Diseño de APIs RESTful seguras con persistencia SQL (PostgreSQL, MariaDB), validación preventiva con Zod y estrategias de caching.',
      'Implementación de suites de pruebas (unitarias, integración y E2E) con Vitest y Playwright garantizando cero regresiones en producción.',
      'Optimización extrema de Core Web Vitals en clientes, alcanzando puntuaciones de 100/100 en Google Lighthouse y LCP < 2.5s.',
    ],
    technologies: ['Next.js', 'React 19', 'TypeScript', 'Node.js', 'NestJS', 'Java Spring Boot', 'PostgreSQL', 'Playwright', 'Docker'],
  },
]

export const educationItems: EducationItem[] = [
  {
    institution: 'Universidad Nacional de La Matanza (UNLaM)',
    degree: 'Tecnicatura Universitaria en Desarrollo Web',
    period: '2021 — 2025',
    status: 'Graduado',
    details: 'Programación orientada a objetos (Java/Spring), arquitectura SQL, seguridad y algoritmos.',
  },
  {
    institution: 'Digital House',
    degree: 'Front End Specialist',
    period: '2024 — 2025',
    status: 'Certificación Profesional',
    details: 'React avanzado, Next.js, gestión de estado compleja, optimización de performance y microfrontends.',
  },
  {
    institution: 'Digital House',
    degree: 'Certified Tech Developer',
    period: '2022 — 2023',
    status: 'Certificación Profesional',
    details: 'Ingeniería de software, Java, Spring Boot, SQL, testing automatizado y metodologías ágiles Scrum.',
  },
]

export const languages: LanguageItem[] = [
  {
    language: 'Español',
    level: 'Nativo',
    details: 'Comunicación fluida y natural.',
  },
  {
    language: 'Inglés',
    level: 'Avanzado / Fluido (C1)',
    details: 'Lectura técnica fluida, redacción avanzada y comunicación oral en equipos multiculturales.',
  },
]

