"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";

export const Skills = () => {
    const { skills } = portfolioData;

    return (
        <section id="skills" className="py-28 px-6 bg-white dark:bg-black">
            <motion.div
                className="max-w-6xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                {/* Header */}
                <div className="space-y-4 mb-16">
                    <p className="text-sm font-mono text-brand dark:text-tech uppercase tracking-widest">
                        Tecnologías
                    </p>
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                        Stack Tecnológico
                    </h2>
                </div>

                <div className="space-y-16">
                    {/* Core Stack - Highlighted */}
                    <div>
                        <h3 className="text-sm font-mono uppercase tracking-widest text-brand dark:text-tech mb-8">
                            {skills.core.title}
                        </h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {skills.core.items.map((group, idx) => (
                                <div key={idx}>
                                    <p className="text-xs font-mono text-slate-400 dark:text-gray-500 uppercase tracking-wider mb-3">
                                        {group.category}
                                    </p>
                                    <ul className="flex flex-wrap gap-2">
                                        {group.techs.map((tech) => (
                                            <li key={tech}>
                                                <span
                                                    className="px-3 py-1.5 text-sm font-medium rounded-md bg-brand/5 dark:bg-tech/10 text-brand dark:text-tech border border-brand/20 dark:border-tech/30 block"
                                                >
                                                    {tech}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Secondary, Background, Tools - Neutral */}
                    <div className="grid lg:grid-cols-3 gap-12 pt-8 border-t border-slate-100 dark:border-white/10">
                        {/* Secondary */}
                        <div>
                            <h3 className="text-sm font-mono uppercase tracking-widest text-slate-400 dark:text-gray-500 mb-4">
                                {skills.secondary.title}
                            </h3>
                            <ul className="flex flex-wrap gap-2">
                                {skills.secondary.items.map((item) => (
                                    <li key={item}>
                                        <span
                                            className="px-3 py-1.5 text-sm font-medium rounded-md bg-slate-50 dark:bg-white/5 text-slate-600 dark:text-gray-400 border border-slate-200 dark:border-white/10 block"
                                        >
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Background */}
                        <div>
                            <h3 className="text-sm font-mono uppercase tracking-widest text-slate-400 dark:text-gray-500 mb-4">
                                {skills.background.title}
                            </h3>
                            <ul className="flex flex-wrap gap-2">
                                {skills.background.items.map((item) => (
                                    <li key={item}>
                                        <span
                                            className="px-3 py-1.5 text-sm font-medium rounded-md bg-slate-50 dark:bg-white/5 text-slate-600 dark:text-gray-400 border border-slate-200 dark:border-white/10 block"
                                        >
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Tools */}
                        <div>
                            <h3 className="text-sm font-mono uppercase tracking-widest text-slate-400 dark:text-gray-500 mb-4">
                                {skills.tools.title}
                            </h3>
                            <ul className="flex flex-wrap gap-2">
                                {skills.tools.items.map((item) => (
                                    <li key={item}>
                                        <span
                                            className="px-3 py-1.5 text-sm font-medium rounded-md bg-slate-50 dark:bg-white/5 text-slate-600 dark:text-gray-400 border border-slate-200 dark:border-white/10 block"
                                        >
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
