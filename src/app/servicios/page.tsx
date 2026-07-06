"use client";

import { motion } from "framer-motion";
import {
    FaWhatsapp,
    FaEnvelope,
    FaCircleCheck,
    FaArrowRight,
    FaXmark,
    FaArrowUpRightFromSquare,
    FaPhone,
} from "react-icons/fa6";

// Feature modules
import { services, painPoints, trustItems } from "@/features/servicios/data/servicios.data";
import { WHATSAPP_URL, EMAIL, MAILTO } from "@/features/servicios/constants/contact";
import { FadeUp }        from "@/features/servicios/components/FadeUp";
import { Eyebrow }       from "@/features/servicios/components/Eyebrow";
import { ButtonPrimary } from "@/features/servicios/components/ButtonPrimary";
import { ButtonGhost }   from "@/features/servicios/components/ButtonGhost";
import type { ServiceCard } from "@/features/servicios/types/servicios.types";

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────

export default function ServiciosPage() {
    return (
        <main className="min-h-screen bg-surface text-foreground antialiased overflow-x-hidden">

            {/* ══════════════════════════════════════════════════════════════
                HERO
            ══════════════════════════════════════════════════════════════ */}
            <section className="relative min-h-screen flex flex-col justify-center px-6 pt-28 pb-20 overflow-hidden
                bg-surface border-b border-surface-border">

                {/* Glow radial */}
                <div aria-hidden className="pointer-events-none absolute inset-0
                    [background:radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(99,102,241,0.08)_0%,transparent_70%)]
                    dark:[background:radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(45,212,191,0.1)_0%,transparent_70%)]" />

                {/* Grid overlay */}
                <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
                    style={{
                        backgroundImage: "linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)",
                        backgroundSize: "48px 48px",
                    }} />

                <div className="relative z-10 max-w-5xl mx-auto w-full">
                    {/* Badge */}
                    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-8">
                        <Eyebrow>
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-indigo-500 dark:bg-teal-400" />
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-600 dark:bg-teal-400" />
                            </span>
                            Disponible para nuevos proyectos
                        </Eyebrow>
                    </motion.div>

                    {/* H1 */}
                    <motion.h1
                        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] mb-8
                            text-slate-900 dark:text-white"
                    >
                        Transformá la{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-tech dark:from-teal-400 dark:to-cyan-400">
                            tecnología
                        </span>
                        <br />
                        de tu empresa en{" "}
                        <span className="italic text-slate-600 dark:text-zinc-300">resultados reales.</span>
                    </motion.h1>

                    {/* Subtítulo */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.22 }}
                        className="max-w-2xl text-lg md:text-xl leading-relaxed mb-12 text-slate-600 dark:text-zinc-400"
                    >
                        Desarrollo soluciones digitales a medida para constructoras, inmobiliarias, estudios, comercios
                        y distribuidoras. Sin tecnicismos. Sin intermediarios. Con resultados medibles desde el primer día.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.35 }}
                        className="flex flex-wrap gap-4">
                        <ButtonPrimary href={WHATSAPP_URL} icon={<FaWhatsapp />}>Hablemos de tu proyecto</ButtonPrimary>
                        <ButtonGhost href="#servicios" icon={<FaArrowRight />}>Ver mis servicios</ButtonGhost>
                    </motion.div>

                    {/* Social proof */}
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.55 }}
                        className="mt-20 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-slate-400 dark:text-zinc-500">
                        {["+5 años de experiencia", "Trato directo sin intermediarios", "Proyectos llave en mano", "Velocidad 100/100 garantizada"].map((item) => (
                            <span key={item} className="flex items-center gap-2">
                                <FaCircleCheck className="text-tech dark:text-teal-500 shrink-0" />{item}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════════
                DIAGNÓSTICO
            ══════════════════════════════════════════════════════════════ */}
            <section id="diagnostico" className="py-24 px-6 bg-white dark:bg-black">
                <div className="max-w-5xl mx-auto">
                    <FadeUp>
                        <div className="text-center mb-16 space-y-4">
                            <Eyebrow>Diagnóstico</Eyebrow>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white">
                                ¿Te suena familiar alguno de estos?
                            </h2>
                            <p className="max-w-xl mx-auto leading-relaxed text-slate-500 dark:text-zinc-400">
                                Trabajé con decenas de negocios con los mismos problemas. Todos tienen solución concreta.
                            </p>
                        </div>
                    </FadeUp>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Problemas */}
                        <FadeUp delay={0.1} className="flex flex-col">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-red-100 border border-red-200 dark:bg-red-500/10 dark:border-red-500/20">
                                    <FaXmark className="text-red-500 dark:text-red-400 text-sm" />
                                </div>
                                <span className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400">El problema actual</span>
                            </div>
                            <ul className="flex flex-col gap-3 flex-1">
                                {painPoints.map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 px-5 py-4 rounded-xl text-sm
                                        bg-red-50 border border-red-100 text-slate-700
                                        dark:bg-red-950/20 dark:border-red-500/10 dark:text-zinc-300">
                                        <FaXmark className="text-red-400 shrink-0" />{item.problem}
                                    </li>
                                ))}
                            </ul>
                        </FadeUp>

                        {/* Soluciones */}
                        <FadeUp delay={0.2} className="flex flex-col">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-emerald-100 border border-emerald-200 dark:bg-teal-500/10 dark:border-teal-500/20">
                                    <FaCircleCheck className="text-emerald-600 dark:text-teal-400 text-sm" />
                                </div>
                                <span className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400">Lo que entrego</span>
                            </div>
                            <ul className="flex flex-col gap-3 flex-1">
                                {painPoints.map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 px-5 py-4 rounded-xl text-sm font-medium
                                        bg-emerald-50 border border-emerald-100 text-slate-800
                                        dark:bg-teal-950/20 dark:border-teal-500/10 dark:text-zinc-200">
                                        <FaCircleCheck className="text-emerald-500 dark:text-teal-400 shrink-0" />{item.solution}
                                    </li>
                                ))}
                            </ul>
                        </FadeUp>
                    </div>

                    <FadeUp delay={0.3} className="mt-12 text-center">
                        <ButtonPrimary href={WHATSAPP_URL} icon={<FaWhatsapp />}>Quiero resolver estos problemas</ButtonPrimary>
                    </FadeUp>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════════
                SERVICIOS — Grid asimétrico 7 cards
            ══════════════════════════════════════════════════════════════ */}
            <section id="servicios" className="py-24 px-6 relative bg-slate-50 dark:bg-zinc-950">
                <div aria-hidden className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-px h-24
                    bg-gradient-to-b from-transparent via-brand/30 to-transparent dark:via-teal-500/30" />

                <div className="max-w-6xl mx-auto">
                    <FadeUp className="text-center mb-16 space-y-4">
                        <Eyebrow>Servicios</Eyebrow>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white">
                            Lo que hago, en resultados concretos
                        </h2>
                        <p className="max-w-xl mx-auto leading-relaxed text-slate-500 dark:text-zinc-400">
                            Sin tecnicismos. Cada servicio está diseñado para resolver un problema real y generar retorno tangible.
                        </p>
                    </FadeUp>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                        <ServiceCardLarge  service={services[0]} delay={0.05} colSpan="md:col-span-6" />
                        <ServiceCardLarge  service={services[1]} delay={0.10} colSpan="md:col-span-6" />
                        <ServiceCardMedium service={services[2]} delay={0.15} colSpan="md:col-span-4" />
                        <ServiceCardMedium service={services[3]} delay={0.20} colSpan="md:col-span-4" />
                        <ServiceCardMedium service={services[4]} delay={0.25} colSpan="md:col-span-4" />
                        <ServiceCardLarge  service={services[5]} delay={0.30} colSpan="md:col-span-5" />
                        <ServiceCardLarge  service={services[6]} delay={0.35} colSpan="md:col-span-7" />
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════════
                AUTORIDAD
            ══════════════════════════════════════════════════════════════ */}
            <section id="autoridad" className="py-24 px-6 bg-white dark:bg-black">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        <FadeUp>
                            <div className="space-y-6">
                                <Eyebrow>Por qué trabajar conmigo</Eyebrow>
                                <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight text-slate-900 dark:text-white">
                                    Clientes exigentes <br /> eligen el{" "}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-tech dark:from-teal-400 dark:to-cyan-400">
                                        trato directo.
                                    </span>
                                </h2>
                                <p className="text-lg leading-relaxed text-slate-600 dark:text-zinc-400">
                                    No soy una agencia. Soy un profesional independiente con más de cinco años resolviendo problemas reales para negocios reales.
                                    Lo que acordamos, eso entrego. Sin sorpresas, sin costos extra, sin ruidos.
                                </p>
                                <ul className="space-y-3 pt-2">
                                    {["Presupuestos cerrados y sin sorpresas", "Comunicación clara en cada etapa", "Primera consulta sin costo ni compromiso", "Soporte post-lanzamiento incluido"].map((item) => (
                                        <li key={item} className="flex items-start gap-3 text-sm text-slate-600 dark:text-zinc-300">
                                            <FaCircleCheck className="text-tech dark:text-teal-400 shrink-0 mt-0.5" />{item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="pt-4">
                                    <ButtonPrimary href={WHATSAPP_URL} icon={<FaPhone />}>Agendá tu charla de 10 min</ButtonPrimary>
                                </div>
                            </div>
                        </FadeUp>

                        <FadeUp delay={0.15}>
                            <div className="grid grid-cols-2 gap-4">
                                {trustItems.map((item, i) => (
                                    <motion.div key={i} whileHover={{ y: -4 }} transition={{ duration: 0.2 }}
                                        className="p-6 rounded-2xl space-y-3 transition-colors
                                            bg-slate-50 border border-slate-200 hover:border-brand/30
                                            dark:bg-zinc-900 dark:border-zinc-800 dark:hover:border-teal-500/30">
                                        <div className="w-9 h-9 rounded-lg flex items-center justify-center
                                            bg-indigo-100 text-brand dark:bg-teal-500/10 dark:text-teal-400">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <p className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">{item.metric}</p>
                                            <p className="text-xs font-semibold uppercase tracking-wider mt-0.5 text-brand dark:text-teal-400">{item.label}</p>
                                        </div>
                                        <p className="text-xs leading-relaxed text-slate-500 dark:text-zinc-500">{item.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════════
                CTA FINAL
            ══════════════════════════════════════════════════════════════ */}
            <section id="contacto" className="py-32 px-6 relative overflow-hidden bg-slate-50 dark:bg-zinc-950">
                <div aria-hidden className="pointer-events-none absolute inset-0
                    [background:radial-gradient(ellipse_80%_70%_at_50%_110%,rgba(99,102,241,0.08)_0%,transparent_70%)]
                    dark:[background:radial-gradient(ellipse_80%_70%_at_50%_110%,rgba(45,212,191,0.1)_0%,transparent_70%)]" />

                <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
                    <FadeUp><Eyebrow>Empezamos</Eyebrow></FadeUp>

                    <FadeUp delay={0.1}>
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-tight text-slate-900 dark:text-white">
                            10 minutos pueden <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-tech dark:from-teal-400 dark:to-cyan-400">
                                cambiar tu negocio.
                            </span>
                        </h2>
                    </FadeUp>

                    <FadeUp delay={0.2}>
                        <p className="text-lg leading-relaxed max-w-xl mx-auto text-slate-500 dark:text-zinc-400">
                            No necesitás tener todo claro todavía. Con una charla breve puedo decirte si lo que necesitás
                            es viable, cuánto tiempo llevaría y cuánto costaría. Sin compromiso.
                        </p>
                    </FadeUp>

                    <FadeUp delay={0.3}>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <ButtonPrimary href={WHATSAPP_URL} icon={<FaWhatsapp />}>Escribime por WhatsApp</ButtonPrimary>
                            <ButtonGhost href={MAILTO} icon={<FaEnvelope />} external>Mandame un mail</ButtonGhost>
                        </div>
                    </FadeUp>

                    <FadeUp delay={0.4}>
                        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm font-mono">
                            <span>
                                <span className="text-slate-400 dark:text-zinc-500">WhatsApp: </span>
                                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                                    className="transition-colors text-slate-600 hover:text-brand dark:text-zinc-400 dark:hover:text-teal-400">
                                    +54 11 3011-1503
                                </a>
                            </span>
                            <span className="hidden sm:block text-slate-200 dark:text-zinc-800">·</span>
                            <span>
                                <span className="text-slate-400 dark:text-zinc-500">Mail: </span>
                                <a href={MAILTO} className="transition-colors text-slate-600 hover:text-brand dark:text-zinc-400 dark:hover:text-teal-400">
                                    {EMAIL}
                                </a>
                            </span>
                        </div>
                        <p className="mt-4 text-xs font-mono text-slate-300 dark:text-zinc-700">
                            Respondo en el día · Sin spam · Primera consulta gratuita
                        </p>
                    </FadeUp>

                    <FadeUp delay={0.5}>
                        <div className="pt-8 border-t border-slate-200 dark:border-zinc-800/50">
                            <a href="/" className="inline-flex items-center gap-2 text-sm font-mono transition-colors text-slate-400 hover:text-slate-600 dark:text-zinc-600 dark:hover:text-zinc-400">
                                ← Volver al portfolio técnico
                            </a>
                        </div>
                    </FadeUp>
                </div>
            </section>
        </main>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// SERVICE CARD COMPONENTS (colocated en page ya que solo se usan aquí)
// ─────────────────────────────────────────────────────────────────────────────

function ServiceCardLarge({ service, delay, colSpan }: { service: ServiceCard; delay: number; colSpan: string }) {
    return (
        <FadeUp delay={delay} className={colSpan}>
            <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25 }}
                className="h-full flex flex-col p-7 rounded-2xl group cursor-default transition-colors
                    bg-white border border-slate-200 hover:border-brand/30
                    dark:bg-zinc-900 dark:border-zinc-800 dark:hover:border-teal-500/25">
                <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors
                        bg-indigo-50 border border-indigo-100 text-brand group-hover:bg-indigo-100
                        dark:bg-teal-500/10 dark:border-teal-500/20 dark:text-teal-400 dark:group-hover:bg-teal-500/15">
                        {service.icon}
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-brand/70 dark:text-teal-400/80">{service.eyebrow}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 leading-snug transition-colors text-slate-900 group-hover:text-brand dark:text-white dark:group-hover:text-teal-100">{service.title}</h3>
                <p className="text-sm leading-relaxed mb-6 flex-grow text-slate-500 dark:text-zinc-400">{service.description}</p>
                <ul className="space-y-2">
                    {service.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-400">
                            <FaCircleCheck className="text-tech dark:text-teal-500 shrink-0" />{h}
                        </li>
                    ))}
                </ul>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium transition-colors text-slate-300 group-hover:text-brand dark:text-zinc-600 dark:group-hover:text-teal-400">
                    Consultar <FaArrowUpRightFromSquare className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
            </motion.div>
        </FadeUp>
    );
}

function ServiceCardMedium({ service, delay, colSpan }: { service: ServiceCard; delay: number; colSpan: string }) {
    return (
        <FadeUp delay={delay} className={colSpan}>
            <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25 }}
                className="h-full flex flex-col p-6 rounded-2xl group cursor-default transition-colors
                    bg-white border border-slate-200 hover:border-brand/30
                    dark:bg-zinc-900 dark:border-zinc-800 dark:hover:border-teal-500/25">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-4 transition-colors
                    bg-indigo-50 border border-indigo-100 text-brand group-hover:bg-indigo-100
                    dark:bg-teal-500/10 dark:border-teal-500/20 dark:text-teal-400 dark:group-hover:bg-teal-500/15">
                    {service.icon}
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest mb-2 text-brand/70 dark:text-teal-400/80">{service.eyebrow}</span>
                <h3 className="text-base font-bold mb-3 leading-snug transition-colors flex-grow text-slate-900 group-hover:text-brand dark:text-white dark:group-hover:text-teal-100">{service.title}</h3>
                <p className="text-xs leading-relaxed line-clamp-3 mb-4 text-slate-500 dark:text-zinc-500">{service.description}</p>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium mt-auto transition-colors text-slate-300 group-hover:text-brand dark:text-zinc-600 dark:group-hover:text-teal-400">
                    Consultar <FaArrowUpRightFromSquare className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
            </motion.div>
        </FadeUp>
    );
}
