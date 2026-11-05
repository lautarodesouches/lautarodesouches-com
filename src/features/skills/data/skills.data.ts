import type { SkillDomain, ArchitecturePrinciple } from '../types'

export const skillDomains: SkillDomain[] = [
  {
    id: 'frontend',
    title: 'Frontend & UI Engineering',
    tag: 'Client Systems',
    description: 'Sistemas visuales determinísticos, renderizado híbrido, accesibilidad WCAG AAA y cero re-renders innecesarios.',
    skills: ['TypeScript', 'React 19', 'Next.js 15/16', 'Astro 5', 'CSS Modules / BEM', 'Zustand', 'GSAP', 'HTML5 Semántico'],
  },
  {
    id: 'backend',
    title: 'Backend & Microservicios',
    tag: 'Server Engines',
    description: 'APIs RESTful de alta concurrencia, desacoplamiento modular bajo DDD y lógica transaccional segura.',
    skills: ['Node.js', 'NestJS', 'Java 21', 'Spring Boot 3', 'Express.js', 'Hibernate / JPA', 'WebSockets', 'Zod Contracts'],
  },
  {
    id: 'data',
    title: 'Persistencia & Modelado de Datos',
    tag: 'Data Integrity',
    description: 'Estructuración relacional, prevención de bloqueos de concurrencia, colas asíncronas y capas de caché.',
    skills: ['PostgreSQL', 'MariaDB / MySQL', 'Redis', 'BullMQ', 'Prisma ORM', 'TypeORM', 'SQL Transaccional ACID'],
  },
  {
    id: 'devops-qa',
    title: 'Testing, DevOps & CI/CD',
    tag: 'Quality Gates',
    description: 'Trophy de pruebas automatizadas, prevención de regresiones en producción y despliegues reproducibles.',
    skills: ['Playwright (E2E)', 'Vitest', 'Docker', 'GitHub Actions', 'Linux VPS', 'PM2', 'Google Lighthouse (100/100)'],
  },
]

export const architecturePrinciples: ArchitecturePrinciple[] = [
  {
    number: '01',
    title: 'Strict Typing & API Contracts',
    tag: 'Tipado de Punta a Punta',
    description: 'Cero tolerancia al tipo any. Validación estricta con esquemas Zod en capas límite antes de tocar base de datos.',
  },
  {
    number: '02',
    title: 'Resilient Operations & Concurrency',
    tag: 'Consistencia Transaccional',
    description: 'Aislamiento transaccional ACID, prevención de race conditions y colas de tareas asíncronas con reintentos exponenciales.',
  },
  {
    number: '03',
    title: 'Zero-Regression Quality Gates',
    tag: 'Testing Trophy Automatizado',
    description: 'Suites E2E con Playwright y unitarias con Vitest integradas a GitHub Actions para blindar flujos críticos de negocio.',
  },
]

