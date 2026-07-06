"use client";

import { portfolioData } from "@/features/home/data/portfolio.data";
import { FaArrowUpRightFromSquare, FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

export const Projects = () => {
    const { projects } = portfolioData;
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    // Duplicamos el array por 3 para lograr scroll infinito continuo
    const tripleProjects = [...projects, ...projects, ...projects];

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const scrollAmount = container.clientWidth * 0.8;
            container.scrollTo({
                left: container.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount),
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        // Posicionamiento inicial en el set del medio
        const initializeScroll = () => {
            const oneSetWidth = container.scrollWidth / 3;
            if (oneSetWidth > 0) {
                container.scrollLeft = oneSetWidth;
            }
        };

        initializeScroll();
        const timer = setTimeout(initializeScroll, 100);

        const handleScroll = () => {
            const scrollLeft = container.scrollLeft;
            const oneSetWidth = container.scrollWidth / 3;

            if (oneSetWidth <= 0) return;

            // Salto invisible cuando cruzamos los límites del set del medio
            if (scrollLeft >= oneSetWidth * 2) {
                container.scrollLeft = scrollLeft - oneSetWidth;
            } else if (scrollLeft <= 0) {
                container.scrollLeft = scrollLeft + oneSetWidth;
            }

            // Calculamos el índice activo relativo a un único set
            const itemWidth = oneSetWidth / projects.length;
            const relativeScroll = container.scrollLeft - oneSetWidth;
            const newIndex = Math.round(relativeScroll / itemWidth);
            if (newIndex >= 0 && newIndex < projects.length) {
                setActiveIndex(newIndex);
            }
        };

        container.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            clearTimeout(timer);
            container.removeEventListener("scroll", handleScroll);
        };
    }, [projects.length]);

    const scrollToProject = (index: number) => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const oneSetWidth = container.scrollWidth / 3;
            const itemWidth = oneSetWidth / projects.length;
            container.scrollTo({
                left: oneSetWidth + (itemWidth * index),
                behavior: "smooth"
            });
            setActiveIndex(index);
        }
    };

    return (
        <section id="projects" className="py-24 px-4 md:px-6 bg-slate-50 dark:bg-zinc-950 overflow-hidden relative">
            <div className="max-w-7xl mx-auto w-full">
                {/* Header */}
                <div className="space-y-4 mb-12 text-center md:text-left">
                    <p className="text-sm font-mono text-brand dark:text-tech uppercase tracking-widest font-semibold">
                        Proyectos
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                        Trabajos destacados
                    </h2>
                </div>

                {/* Carousel */}
                <div className="relative group">
                    <button
                        onClick={() => scroll("left")}
                        className="hidden md:flex absolute -left-5 top-[40%] -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white dark:bg-zinc-800 border-2 border-slate-200 dark:border-white/10 shadow-lg hover:scale-105 transition-all duration-200 items-center justify-center text-slate-600 dark:text-white hover:text-brand dark:hover:text-tech"
                        aria-label="Proyecto anterior"
                    >
                        <FaChevronLeft className="w-5 h-5 ml-[-2px]" />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="hidden md:flex absolute -right-5 top-[40%] -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white dark:bg-zinc-800 border-2 border-slate-200 dark:border-white/10 shadow-lg hover:scale-105 transition-all duration-200 items-center justify-center text-slate-600 dark:text-white hover:text-brand dark:hover:text-tech"
                        aria-label="Siguiente proyecto"
                    >
                        <FaChevronRight className="w-5 h-5 mr-[-2px]" />
                    </button>

                    {/* Nota: Eliminamos la clase 'scroll-smooth' del contenedor para permitir los saltos instantáneos e invisibles */}
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pt-2 pb-8 md:pb-12 px-1 md:-mx-4 md:px-4 hide-scrollbar"
                    >
                        {tripleProjects.map((project, index) => (
                            <article
                                key={`${index}-${project.title}`}
                                className="group flex flex-col bg-white dark:bg-zinc-900/40 rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 hover:border-brand/30 dark:hover:border-tech/30 transition-all duration-200 shrink-0 w-[85vw] sm:w-[60vw] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-center md:snap-start shadow-sm hover:shadow-xl active:scale-[0.98] outline-none"
                            >
                                {project.image && (
                                    <div className="relative w-full aspect-[16/10] sm:aspect-video overflow-hidden bg-slate-100 dark:bg-zinc-800 border-b border-slate-100 dark:border-white/5">
                                        <Image
                                            src={project.image}
                                            alt={`Captura del proyecto: ${project.title}`}
                                            fill
                                            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                            sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw"
                                        />
                                        <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-white text-xs font-mono px-3 py-1 rounded-full border border-white/10 shadow-lg">
                                            {project.type.split(" ")[0]}
                                        </div>
                                    </div>
                                )}

                                <div className="p-5 md:p-6 flex flex-col flex-grow">
                                    <div className="mb-5">
                                        <span className="text-xs font-mono uppercase tracking-widest text-brand dark:text-tech">
                                            {project.type}
                                        </span>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1 group-hover:text-brand dark:group-hover:text-tech transition-colors leading-tight">
                                            {project.title}
                                        </h3>
                                    </div>

                                    <div className="flex-grow space-y-4 text-sm text-slate-600 dark:text-gray-400 mb-6 leading-relaxed">
                                        <div>
                                            <strong className="text-slate-900 dark:text-white block mb-1 font-medium">Problema:</strong>
                                            {project.problem}
                                        </div>
                                        <div>
                                            <strong className="text-slate-900 dark:text-white block mb-1 font-medium">Solución:</strong>
                                            {project.solution}
                                        </div>
                                        <div>
                                            <strong className="text-slate-900 dark:text-white block mb-1 font-medium">Impacto:</strong>
                                            {project.impact}
                                        </div>
                                    </div>

                                    <ul className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((t, i) => (
                                            <li key={i}>
                                                <span className="px-2 py-1 text-[11px] font-mono rounded bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-gray-300 border border-slate-200 dark:border-white/10 block">
                                                    {t}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-auto flex flex-col sm:flex-row gap-3">
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 bg-brand dark:bg-white text-white dark:text-zinc-900 px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-brand-dark dark:hover:bg-gray-100 transition-colors shadow-md"
                                        >
                                            Demo En Vivo
                                            <FaArrowUpRightFromSquare className="w-3.5 h-3.5" />
                                        </a>
                                        {project.repoUrl && (
                                            <a
                                                href={project.repoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 flex items-center justify-center gap-2 border border-slate-300 dark:border-white/20 bg-white/50 dark:bg-transparent px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                                            >
                                                <FaGithub className="w-4 h-4" />
                                                Código
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Dots - Mobile */}
                    <div className="flex justify-center gap-2 mt-2 md:hidden">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => scrollToProject(index)}
                                className={`transition-all duration-300 rounded-full h-2 ${
                                    activeIndex === index
                                        ? "w-8 bg-brand dark:bg-tech"
                                        : "w-2 bg-slate-200 dark:bg-zinc-800"
                                }`}
                                aria-label={`Página ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <style jsx global>{`
                .hide-scrollbar::-webkit-scrollbar { display: none; }
                .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </section>
    );
};
