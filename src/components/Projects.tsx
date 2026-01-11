"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare, FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Image from "next/image";
import { useState, useEffect } from "react";

export const Projects = () => {
    const { projects } = portfolioData;

    // Duplicate projects 3 times for infinite scroll
    const extendedProjects = [...projects, ...projects, ...projects];
    const [currentIndex, setCurrentIndex] = useState(projects.length); // Start from middle set
    const [isTransitioning, setIsTransitioning] = useState(true);

    const paginate = (direction: number) => {
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev + direction);
    };

    // Reset to equivalent position without animation when reaching boundaries
    useEffect(() => {
        if (!isTransitioning) return;

        // If we're at the end of the first set, jump to the second set
        if (currentIndex <= 0) {
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(projects.length);
            }, 500);
        }
        // If we're at the end of the third set, jump back to the second set
        else if (currentIndex >= projects.length * 2) {
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(projects.length);
            }, 500);
        }
    }, [currentIndex, projects.length, isTransitioning]);

    // Re-enable transitions after reset
    useEffect(() => {
        if (!isTransitioning) {
            setTimeout(() => setIsTransitioning(true), 50);
        }
    }, [isTransitioning]);

    return (
        <section id="projects" className="py-28 px-6 bg-slate-50 dark:bg-zinc-950 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="space-y-4 mb-16 text-center">
                    <p className="text-sm font-mono text-brand dark:text-tech uppercase tracking-widest">
                        Proyectos
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                        Trabajos destacados
                    </h2>
                </div>

                {/* Carousel Container */}
                <div className="relative">
                    {/* Navigation Arrows */}
                    <button
                        onClick={() => paginate(-1)}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white dark:bg-zinc-800 border-2 border-slate-200 dark:border-white/10 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center text-slate-700 dark:text-white hover:border-brand dark:hover:border-tech group"
                        aria-label="Proyecto anterior"
                    >
                        <FaChevronLeft className="w-5 h-5 md:w-6 md:h-6 group-hover:text-brand dark:group-hover:text-tech transition-colors" />
                    </button>
                    <button
                        onClick={() => paginate(1)}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white dark:bg-zinc-800 border-2 border-slate-200 dark:border-white/10 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center text-slate-700 dark:text-white hover:border-brand dark:hover:border-tech group"
                        aria-label="Siguiente proyecto"
                    >
                        <FaChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:text-brand dark:group-hover:text-tech transition-colors" />
                    </button>

                    {/* Carousel Track - Desktop: shows 3, Mobile: shows 1 */}
                    <div className="overflow-hidden">
                        <motion.div
                            className="flex gap-6"
                            animate={{
                                x: `calc(-${currentIndex * (100 / 3)}% - ${currentIndex * 1.5}rem)`
                            }}
                            transition={
                                isTransitioning
                                    ? {
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 30
                                    }
                                    : { duration: 0 }
                            }
                        >
                            {extendedProjects.map((project, index) => (
                                <motion.article
                                    key={index}
                                    className="group flex flex-col bg-white dark:bg-zinc-900/50 rounded-xl overflow-hidden border border-slate-200 dark:border-white/5 hover:border-brand/50 dark:hover:border-tech/50 hover:shadow-2xl hover:shadow-brand/5 dark:hover:shadow-tech/5 transition-all duration-300 shrink-0 w-full lg:w-[calc(33.333%-1rem)]"
                                >
                                    {/* Project Image */}
                                    {project.image && (
                                        <div className="relative w-full aspect-video overflow-hidden bg-slate-100 dark:bg-zinc-800">
                                            <Image
                                                src={project.image}
                                                alt={`Captura de pantalla de ${project.title}`}
                                                fill
                                                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                                sizes="(max-width: 1024px) 100vw, 33vw"
                                            />
                                        </div>
                                    )}

                                    <div className="p-6 flex flex-col flex-grow">
                                        {/* Type + Title */}
                                        <div className="mb-4">
                                            <span className="text-xs font-mono uppercase tracking-widest text-brand dark:text-tech">
                                                {project.type}
                                            </span>
                                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-1 group-hover:text-brand dark:group-hover:text-tech transition-colors">
                                                {project.title}
                                            </h3>
                                        </div>

                                        {/* Detailed sections */}
                                        <div className="flex-grow space-y-4 text-sm text-slate-600 dark:text-gray-400 mb-6">
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

                                        {/* Stack Tags */}
                                        <ul className="flex flex-wrap gap-2 mb-6">
                                            {project.tech.map((t, i) => (
                                                <li key={i}>
                                                    <span className="px-2.5 py-1 text-xs font-mono rounded bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-gray-400 border border-slate-200 dark:border-white/10 block">
                                                        {t}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Links */}
                                        <div className="mt-auto flex gap-4 pt-4 border-t border-slate-100 dark:border-white/10">
                                            <a
                                                href={project.demoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-sm font-medium text-brand dark:text-tech hover:underline"
                                            >
                                                <FaArrowUpRightFromSquare className="w-3 h-3" />
                                                Demo
                                            </a>
                                            <a
                                                href={project.repoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-gray-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                                            >
                                                <FaGithub className="w-4 h-4" />
                                                Código
                                            </a>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </motion.div>
                    </div>

                    {/* Dots Indicators */}
                    <div className="flex justify-center gap-3 mt-12">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setIsTransitioning(true);
                                    setCurrentIndex(projects.length + index);
                                }}
                                className={`transition-all duration-300 rounded-full ${(currentIndex % projects.length) === index
                                    ? "w-12 h-3 bg-brand dark:bg-tech"
                                    : "w-3 h-3 bg-slate-300 dark:bg-zinc-700 hover:bg-slate-400 dark:hover:bg-zinc-600"
                                    }`}
                                aria-label={`Ver proyecto ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Project Counter */}
                <div className="text-center mt-8">
                    <p className="text-sm font-mono text-slate-500 dark:text-gray-500">
                        Mostrando{" "}
                        <span className="text-brand dark:text-tech font-bold">
                            {(currentIndex % projects.length) + 1}
                        </span>
                        {" de "}
                        {projects.length}
                    </p>
                </div>
            </div>
        </section>
    );
};

