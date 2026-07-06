import {
    FaBolt,
    FaCartShopping,
    FaServer,
    FaChartBar,
    FaEnvelopeOpenText,
    FaRobot,
    FaMobileScreen,
    FaStar,
    FaUserTie,
    FaShieldHalved,
    FaRocket,
} from "react-icons/fa6";
import type { ServiceCard, PainItem, TrustItem } from "../types/servicios.types";

export const services: ServiceCard[] = [
    {
        icon: <FaBolt />,
        eyebrow: "Presencia digital",
        title: "Páginas Web Corporativas de Alta Velocidad",
        description:
            "Tu sitio web es el primer apretón de manos con cada cliente. Diseñamos páginas que cargan en segundos, se adaptan a cualquier dispositivo y ranquean en Google desde el primer día.",
        highlights: ["Velocidad 100/100 en PageSpeed", "SEO técnico incluido", "Diseño 100% responsive"],
    },
    {
        icon: <FaCartShopping />,
        eyebrow: "E-commerce",
        title: "Tiendas Virtuales y Paneles E-commerce Avanzados",
        description:
            "Vendé online con un sistema propio: stock en tiempo real, gestión de pedidos, múltiples medios de pago y catálogos que se actualizan solos. Sin comisiones de terceros, sin límites.",
        highlights: ["Control de stock en tiempo real", "Mercado Pago y tarjetas integradas", "Panel de gestión propio"],
    },
    {
        icon: <FaServer />,
        eyebrow: "Infraestructura",
        title: "Modernización, Hosting y Mantenimiento",
        description:
            "Migramos tu plataforma obsoleta a infraestructura moderna. Más velocidad, más seguridad y un costo mensual significativamente menor. Gestión técnica delegada al 100%.",
        highlights: ["Reducción de costos de servidor", "Migración sin tiempo de caída", "Soporte técnico continuo"],
    },
    {
        icon: <FaChartBar />,
        eyebrow: "Analítica",
        title: "Auditoría de Ventas y Analítica Web",
        description:
            "Instalamos mapas de calor, embudos de conversión y métricas clave para entender exactamente por qué tus visitantes entran y no compran, y cómo corregirlo.",
        highlights: ["Mapas de calor y grabaciones", "Embudos de conversión", "Informe ejecutivo de diagnóstico"],
    },
    {
        icon: <FaEnvelopeOpenText />,
        eyebrow: "CRM & Email",
        title: "Sincronización con Emails y CRM",
        description:
            "Conectamos tu base de datos con Mailchimp, HubSpot u otras plataformas para automatizar campañas, segmentar contactos y hacer seguimiento sin esfuerzo manual.",
        highlights: ["Integración Mailchimp / HubSpot", "Automatización de campañas", "Segmentación de contactos"],
    },
    {
        icon: <FaRobot />,
        eyebrow: "Inteligencia Artificial",
        title: "Automatizaciones y Bots Inteligentes",
        description:
            "Asistentes de respuesta automática, flujos de atención al cliente y procesos repetitivos convertidos en sistemas que trabajan solos mientras vos te enfocás en lo que importa.",
        highlights: ["Atención al cliente 24/7", "Respuestas automáticas por WhatsApp", "Flujos de tareas sin intervención"],
    },
    {
        icon: <FaMobileScreen />,
        eyebrow: "Desarrollo a medida",
        title: "Aplicaciones Móviles e Interfaces a Medida",
        description:
            "Cuando tu negocio necesita algo único. Desarrollamos apps y herramientas internas diseñadas exactamente para tus procesos, sin compromisos de plataformas genéricas.",
        highlights: ["Apps iOS y Android", "Interfaces administrativas internas", "Integración con sistemas existentes"],
    },
];

export const painPoints: PainItem[] = [
    { problem: "Tu sitio tarda 8 segundos en cargar",          solution: "Carga instantánea con velocidad 100/100" },
    { problem: "Gestionás el stock en planillas de Excel",      solution: "Panel digital con stock en tiempo real" },
    { problem: "Pagás un hosting caro que nadie entiende",      solution: "Infraestructura moderna al mínimo costo" },
    { problem: "No sabés por qué los visitantes no convierten", solution: "Analítica y mapas de calor que lo revelan" },
    { problem: "Respondés consultas manualmente todo el día",   solution: "Bots y automatizaciones que trabajan solos" },
];

export const trustItems: TrustItem[] = [
    {
        icon: <FaStar />,
        metric: "+5",
        label: "años de experiencia",
        description: "Proyectos reales en rubros como el jurídico, inmobiliario y comercio mayorista.",
    },
    {
        icon: <FaUserTie />,
        metric: "100%",
        label: "trato directo",
        description: "Hablás conmigo desde el día uno hasta el cierre. Sin intermediarios, sin ruidos.",
    },
    {
        icon: <FaShieldHalved />,
        metric: "Llave",
        label: "en mano",
        description: "Me hago cargo del diseño, desarrollo, configuración y lanzamiento completo.",
    },
    {
        icon: <FaRocket />,
        metric: "100/100",
        label: "PageSpeed Score",
        description: "Sitios auditados con velocidad máxima en Google, comprobado en producción.",
    },
];
