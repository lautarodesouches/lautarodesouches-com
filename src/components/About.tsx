"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";

export const About = () => {
    const { about } = portfolioData;

    return (
        <section id="about" className="py-28 px-6 bg-white dark:bg-black">
            <motion.div
                className="max-w-6xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="grid lg:grid-cols-12 gap-16">
                    {/* Left Column - Title & Data (5 cols) */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="space-y-4">
                            <p className="text-sm font-mono text-brand dark:text-tech uppercase tracking-widest">
                                Sobre mí
                            </p>
                            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white leading-snug">
                                Construyo productos digitales que funcionan
                            </h2>
                        </div>

                        {/* Quick Data - Simple list */}
                        <dl className="space-y-3 pt-4">
                            {about.quickData?.map((item, idx) => (
                                <div key={idx} className="flex items-baseline gap-3 text-sm">
                                    <dt className="text-slate-400 dark:text-gray-500 font-mono shrink-0">
                                        {item.label}
                                    </dt>
                                    <dd className="text-slate-900 dark:text-white font-medium m-0">
                                        {item.value}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    {/* Right Column - Narrative (7 cols) */}
                    <div className="lg:col-span-7 space-y-6 text-lg text-slate-600 dark:text-gray-400 leading-8">
                        {about.description.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
