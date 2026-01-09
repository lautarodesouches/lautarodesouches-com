"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

export const Projects = () => {
    const { projects } = portfolioData;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section id="projects" className="py-28 px-6 bg-slate-50 dark:bg-zinc-950">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="space-y-4 mb-16">
                    <p className="text-sm font-mono text-brand dark:text-tech uppercase tracking-widest">
                        Proyectos
                    </p>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                        Trabajos destacados
                    </h2>
                </div>

                {/* Grid - 3 columns with detailed cards */}
                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {projects.map((project, index) => (
                        <motion.article
                            key={index}
                            variants={cardVariants}
                            className="group flex flex-col bg-white dark:bg-black rounded-xl p-6 border border-slate-200 dark:border-white/10 hover:border-brand/50 dark:hover:border-tech/50 transition-colors"
                        >
                            {/* Type + Title */}
                            <div className="mb-4">
                                <span className="text-xs font-mono uppercase tracking-widest text-brand dark:text-tech">
                                    {project.type}
                                </span>
                                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-1">
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
                                        <span
                                            className="px-2.5 py-1 text-xs font-mono rounded bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-gray-400 border border-slate-200 dark:border-white/10 block"
                                        >
                                            {t}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* Links */}
                            <div className="mt-auto flex gap-4 pt-4 border-t border-slate-100 dark:border-white/10">
                                <a
                                    href={project.demoUrl}
                                    className="flex items-center gap-2 text-sm font-medium text-brand dark:text-tech hover:underline"
                                >
                                    <FaArrowUpRightFromSquare className="w-3 h-3" />
                                    Demo
                                </a>
                                <a
                                    href={project.repoUrl}
                                    className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-gray-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                                >
                                    <FaGithub className="w-4 h-4" />
                                    Código
                                </a>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
