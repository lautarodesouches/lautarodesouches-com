import type { CareerData } from '../types'

export const careerData: CareerData = {
  telemetry: {
    experienceYears: '+5 Años',
    experiencePeriod: '2019 — Presente',
    degreeTitle: 'Tecnicatura Universitaria en Desarrollo Web',
    degreeInstitution: 'UNLaM',
    degreeStatus: 'Graduado',
    languages: [
      {
        language: 'Español',
        level: 'Nativo',
        detail: 'Lengua materna',
      },
      {
        language: 'Inglés',
        level: 'Avanzado / Fluido (C1)',
        detail: 'Lectura técnica, redacción avanzada y comunicación oral en equipos multiculturales',
      },
    ],
    availability: 'Remoto // Híbrido CABA & GBA',
  },
  categories: [
    { id: 'all', label: 'Todos', count: 6 },
    { id: 'experience', label: 'Experiencia', count: 2 },
    { id: 'education', label: 'Formación Universitaria', count: 2 },
    { id: 'certification', label: 'Especializaciones', count: 2 },
  ],
  milestones: [
    {
      id: 'independent-consultant',
      period: '2019 — PRESENTE',
      role: 'Desarrollador Full Stack / Backend / Frontend',
      organization: 'Proyectos Comerciales y Productos SaaS (Consultor Independiente)',
      location: 'Buenos Aires, Argentina (Remoto)',
      category: 'experience',
      categoryLabel: 'Experiencia Comercial',
      status: 'En curso',
      summary:
        'Desarrollo integral de soluciones de software: relevamiento de requerimientos, diseño de arquitectura, desarrollo backend y frontend, testing automatizado y despliegues en producción.',
      highlights: [
        'Desarrollo de aplicaciones web escalables y plataformas B2B utilizando React, Next.js (App Router), TypeScript y Node.js/NestJS bajo arquitecturas limpias y modulares.',
        'Diseño e implementación de servicios backend y APIs RESTful seguras con Node.js, NestJS y persistencia en bases de datos relacionales (SQL) mediante ORMs (Prisma), validación estricta con Zod y manejo eficiente de caché.',
        'Arquitectura y desarrollo de microservicios backend y endpoints empresariales en Java y Spring Boot con persistencia relacional SQL y mapeo con Hibernate.',
        'Implementación de suites de pruebas automatizadas (unitarias, integración y end-to-end) con Vitest y Playwright, garantizando estabilidad y cero regresiones en producción.',
        'Automatización de flujos de integración y despliegue continuo (CI/CD) mediante GitHub Actions y Git Hooks hacia servidores Linux VPS y entornos Cloud.',
        'Auditoría y optimización de Core Web Vitals en plataformas cliente, alcanzando 100/100 en Google Lighthouse y reduciendo LCP a menos de 2.5s.',
      ],
      tags: [
        'React',
        'Next.js',
        'TypeScript',
        'Node.js',
        'NestJS',
        'Java',
        'Spring Boot',
        'PostgreSQL',
        'Prisma',
        'Playwright',
        'Vitest',
        'CI/CD',
        'Docker',
      ],
    },
    {
      id: 'digital-house-frontend-specialist',
      period: '2024 — 2025',
      role: 'Front End Specialist',
      organization: 'Digital House',
      location: 'Remoto',
      category: 'certification',
      categoryLabel: 'Especialización Avanzada',
      status: 'Graduado',
      summary:
        'Especialización intensiva en desarrollo frontend avanzado, microfrontends, optimización de performance de renderizado y arquitecturas cliente a escala.',
      highlights: [
        'Desarrollo de aplicaciones complejas con React Avanzado y Next.js App Router.',
        'Patrones avanzados de gestión de estado global y diseño de microfrontends.',
        'Optimización de rendimiento en SPAs (React.memo, useMemo, useCallback, code splitting con React.lazy y Suspense).',
      ],
      tags: ['React Avanzado', 'Next.js', 'Microfrontends', 'Performance', 'State Management'],
    },
    {
      id: 'unlam-tecnicatura-desarrollo-web',
      period: '2021 — 2025',
      role: 'Tecnicatura Universitaria en Desarrollo Web',
      organization: 'Universidad Nacional de La Matanza (UNLaM)',
      location: 'San Justo, Buenos Aires',
      category: 'education',
      categoryLabel: 'Grado Universitario',
      status: 'Graduado',
      summary:
        'Formación universitaria rigurosa en ingeniería de software, arquitectura de sistemas, programación orientada a objetos y algoritmos.',
      highlights: [
        'Programación Orientada a Objetos en Java y desarrollo backend con Spring.',
        'Diseño de bases de datos, normalización y consultas complejas en arquitectura SQL.',
        'Arquitectura de aplicaciones web y principios de seguridad en sistemas distribuidos.',
        'Estructuras de datos y complejidad algorítmica.',
      ],
      tags: ['Java', 'Spring', 'SQL', 'Bases de Datos', 'Estructuras de Datos', 'Seguridad Web', 'OOP'],
    },
    {
      id: 'digital-house-certified-tech-developer',
      period: '2022 — 2023',
      role: 'Certified Tech Developer',
      organization: 'Digital House (co-creado con Mercado Libre & Globant)',
      location: 'Remoto',
      category: 'certification',
      categoryLabel: 'Especialización Técnica',
      status: 'Graduado',
      summary:
        'Programa intensivo de formación técnica en ingeniería de software, desarrollo backend empresarial y metodologías ágiles en entornos de alta exigencia.',
      highlights: [
        'Fundamentos de ingeniería de software y desarrollo de servicios con Java y Spring Boot.',
        'Persistencia de datos relacionales en SQL y testing automatizado.',
        'Dinámicas de trabajo colaborativo bajo marco metodológico Scrum.',
      ],
      tags: ['Java', 'Spring Boot', 'SQL', 'Testing', 'Scrum', 'Ingeniería de Software'],
    },
    {
      id: 'coderhouse-mentorship',
      period: '2022',
      role: 'Tutor / Asistente Técnico (React Native)',
      organization: 'CoderHouse',
      location: 'Buenos Aires, Argentina (Remoto)',
      category: 'experience',
      categoryLabel: 'Mentoría & Liderazgo',
      status: 'Completado',
      summary:
        'Tutoría técnica a estudiantes en desarrollo de aplicaciones móviles multiplataforma con React Native, realizando code reviews y soporte técnico en vivo.',
      highlights: [
        'Mentoría técnica y revisiones de código (code reviews) para estudiantes en desarrollo con React Native y JavaScript.',
        'Soporte en resolución de errores de compilación, gestión de estado y buenas prácticas mobile.',
      ],
      tags: ['React Native', 'JavaScript', 'Code Review', 'Mentoría', 'Mobile'],
    },
    {
      id: 'unlam-relaciones-laborales',
      period: '2017 — 2021',
      role: 'Licenciatura en Relaciones Laborales',
      organization: 'Universidad Nacional de La Matanza (UNLaM)',
      location: 'San Justo, Buenos Aires',
      category: 'education',
      categoryLabel: 'Formación Complementaria',
      status: 'Ciclo Básico Formativo Completado',
      summary:
        'Base formativa en dinámicas organizacionales, normativas de relaciones laborales y administración de personal, clave para el diseño y comprensión funcional de plataformas HR-Tech y SaaS corporativo.',
      highlights: [
        'Comprensión integral de administración de personal, nómina y flujos organizacionales.',
        'Alineación estratégica para desarrollo de productos de software en sectores HR-Tech, nómina y gestión interna.',
      ],
      tags: ['HR-Tech', 'SaaS Corporativo', 'Gestión Organizacional', 'Procesos de Negocio'],
    },
  ],
}

export const trajectoryData = careerData

