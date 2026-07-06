import type { PortfolioData } from "../types/portfolio.types";
import { EMAIL, LINKEDIN_URL, GITHUB_URL } from "@/shared/constants/contact";

export const portfolioData: PortfolioData = {
    hero: {
        headline: "Ingeniería Full-Stack Escalable con Next.js, NestJS y Java Spring.",
        subtitle: "Creo arquitecturas robustas y performantes. Código limpio, tipado estricto y escalabilidad end-to-end.",
        intro: "Transformo requerimientos complejos en sistemas web modernos y mantenibles. Me especializo en el desarrollo Full-Stack interactuando con ecosistemas de React moderno, y backends sólidos asegurando calidad desde la primera línea.",
        cta: "Ver Código",
        contactCta: "Mi Tech Stack",
    },
    about: {
        description: [
            "Llevo más de 5 años desarrollando soluciones integrales para productos web. Mi trabajo cubre todo ciclo de vida: desde el diseño de la arquitectura backend hasta la experiencia de usuario y su performance.",
            "Especializado en Next.js, NestJS y Java Spring. Priorizo arquitecturas limpias, APIs robustas y tipado estricto. Busco aportar tanto en el servidor como en el cliente para lograr un flujo de datos limpio y robusto.",
            "Me interesa trabajar en equipos orientados a producto, donde la calidad del software y la solidez técnica sean prioridades reales. Mi foco está en construir aplicaciones integrales, escalables de principio a fin.",
        ],
        quickData: [
            { label: "Stack",       value: "Next.js, NestJS, Java Spring" },
            { label: "Enfoque",     value: "Arquitectura y Escalabilidad" },
            { label: "Experiencia", value: "+5 años en producto" },
            { label: "Perfil",      value: "Full-Stack Developer · Semi-Senior" },
        ],
    },
    projects: [
        {
            title: "Gusto - Social Restaurant Discovery",
            type: "Plataforma Social",
            description:
                "Plataforma social para descubrir, calificar y compartir restaurantes con amigos. Combina exploración interactiva mediante mapas, funcionalidades sociales y un dashboard completo para dueños de restaurantes.",
            problem:
                "Los usuarios necesitaban descubrir restaurantes basándose en recomendaciones confiables de amigos, algo que las plataformas existentes con reviews de desconocidos no ofrecían.",
            solution:
                "Integré sistema social con mapas interactivos, autenticación múltiple, perfiles de restaurantes completos, dashboard para dueños y gamificación con niveles y logros.",
            tech: ["Next.js 15", "React", "TypeScript", "CSS Modules", "Firebase Auth", "Google Maps API", ".NET Core API", "FontAwesome"],
            impact:
                "App social completa con autenticación multi-proveedor, mapas en tiempo real y arquitectura escalable con Next.js App Router.",
            demoUrl: "https://gusto-dusky.vercel.app/",
            repoUrl: "https://github.com/lautarodesouches/gusto",
            image: "/projects/gusto.png",
        },
        {
            title: "Desouches Propiedades - Sitio Web Inmobiliario",
            type: "Real-Estate Web App",
            description:
                "Sitio web profesional para una inmobiliaria argentina, con diseño premium, UI/UX moderna y rendimiento óptimo.",
            problem:
                "El cliente necesitaba un sitio web premium para mostrar servicios inmobiliarios con integración a ZonaProp, manteniendo excelente performance y SEO.",
            solution:
                "Desarrollé con Astro, TypeScript y CSS vanilla. Diseño glassmorphic, Core Web Vitals optimizados, SEO completo con Schema.org, 10 categorías de propiedades y formulario con WhatsApp.",
            tech: ["Astro 5.16.8", "TypeScript", "CSS3", "HTML5", "Google Analytics 4", "Schema.org"],
            impact:
                "Lighthouse: 95+ Performance, 100 Accesibilidad, 100 SEO. WCAG 2.1 AAA, LCP < 2.5s y experiencia premium en todos los dispositivos.",
            demoUrl: "https://desouchespropiedades.com.ar",
            repoUrl: "https://github.com/lautarodesouches/desouches-propiedades",
            image: "/projects/desouches-propiedades.png",
        },
        {
            title: "Chichess - Fábrica de Juguetes",
            type: "Catálogo B2B & Admin Panel",
            description:
                "El catálogo digital mayorista y panel interno administrativo de Chichess, fábrica argentina de juguetes de playa, jardín y didácticos desde 1993. Cumpliendo estrictamente con las normas de seguridad IRAM NM 300.",
            problem:
                "Necesitaban digitalizar su catálogo mayorista, permitir al administrador ordenar productos dinámicamente mediante drag & drop, y automatizar la generación de catálogos en PDF.",
            solution:
                "Desarrollé una plataforma con Next.js 16 y Zustand, integrando ordenamiento Drag & Drop con @dnd-kit, NextAuth.js para sesiones B2B de larga duración, Prisma con MariaDB/MySQL, y un pipeline con Husky v9.",
            tech: ["Next.js 16", "TypeScript", "Zustand", "TailwindCSS v4", "Prisma ORM", "NextAuth.js", "@dnd-kit", "Husky v9", "Vitest", "Playwright"],
            impact:
                "Ordenamiento global drag & drop, generación de PDFs en tiempo real, testing trophy completo (unitario, integración y E2E), CD con Runcloud y PM2.",
            demoUrl: "https://github.com/lautarodesouches",
            repoUrl: "https://github.com/lautarodesouches",
            image: "/projects/chichess.png",
        },
        {
            title: "Estudio Jurídico Desouches y Asociados",
            type: "Website Corporativo",
            description:
                "Sitio web oficial modernizado para estudio jurídico especializado en sucesiones, divorcios y asesoramiento legal integral, con diseño responsivo y optimización SEO.",
            problem:
                "El estudio necesitaba modernizar su presencia digital con un sitio profesional que reflejara su solidez y facilitara el contacto con clientes.",
            solution:
                "Next.js 15 estático, animaciones con Framer Motion, WhatsApp integrado, mapas interactivos, optimización de imágenes automática y diseño premium responsive.",
            tech: ["Next.js 15", "React 19", "TypeScript", "CSS Modules", "Framer Motion", "FontAwesome", "Swiper", "next-image-export-optimizer"],
            impact:
                "Sitio estático ultra-rápido sin servidor Node.js, imágenes WEBP optimizadas, SEO completo y widget WhatsApp para comunicación directa.",
            demoUrl: "https://estudiodesouchesyasociados.com.ar/",
            repoUrl: "https://github.com/lautarodesouches/estudio-desouches-y-asociados",
            image: "/projects/estudio-juridico.png",
        },
        {
            title: "Recetas con Essen - E-commerce & Catálogo de Productos",
            type: "E-Commerce Full-Stack",
            description:
                "Plataforma web moderna para mostrar productos Essen (ollas y utensilios de cocina premium) con catálogo completo, recetas inspiradoras y sistema de contacto integrado.",
            problem:
                "La empresa necesitaba mostrar 888 productos organizados, generar engagement con recetas y facilitar contacto con clientes en un sitio moderno y fácil de mantener.",
            solution:
                "Desarrollé una app con Next.js 15 (SSG/ISR), categorizando productos por líneas (Capri, Terra, Nuit), con Google Analytics, SEO optimizado, sitemap automático y diseño responsive.",
            tech: [
                "Next.js 15",
                "React 19",
                "TypeScript",
                "CSS Modules",
                "Font Awesome",
                "Google Analytics/GTM",
                "Static Site Generation (SSG/ISR)",
            ],
            impact:
                "Sitio estático optimizado con ISR horaria, 888 productos organizados con filtros dinámicos, deployment automatizado y mejora significativa en UX y performance.",
            demoUrl: "https://recetasconessen.com",
            repoUrl: "https://github.com/lautarodesouches/ollas-essen",
            image: "/projects/ollas.png",
        },
    ],
    skills: {
        core: {
            title: "Stack Principal",
            items: [
                { category: "Lenguajes",    techs: ["TypeScript", "Java", "JavaScript"] },
                { category: "Frontend",     techs: ["Next.js", "React.js", "Tailwind CSS"] },
                { category: "Backend",      techs: ["NestJS", "Spring Boot", "Node.js"] },
                { category: "Integración",  techs: ["APIs REST", "SQL", "WebSockets"] },
            ],
        },
        secondary: {
            title: "Stack Secundario",
            items: ["Express", "React Native", "MongoDB", "Vue.js", "Angular"],
        },
        background: {
            title: "Background Técnico",
            items: ["Python", "HTML5", "CSS3", "Docker"],
        },
        tools: {
            title: "Herramientas",
            items: ["Git", "GitHub", "Postman", "Figma", "VS Code", "Lighthouse"],
        },
    },
    contact: {
        message:
            "¿Buscas un desarrollador Full-Stack que entienda tanto de arquitectura backend como de producto en el frontend? Estoy disponible para nuevos desafíos técnicos.",
        email: EMAIL,
        linkedin: LINKEDIN_URL,
        github: GITHUB_URL,
    },
};
