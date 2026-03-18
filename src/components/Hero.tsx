"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { FaGithub, FaCode } from "react-icons/fa6";

export const Hero = () => {
    const { hero } = portfolioData;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section className="min-h-screen flex items-center bg-surface text-gray-100 border-b border-surface-border overflow-hidden relative selection:bg-brand-light/30 selection:text-brand-light">

            {/* Background Subtle Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-surface-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-surface-border)_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 dark:opacity-20"></div>

            {/* Glow Effects */}
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-brand/10 rounded-full blur-[128px] pointer-events-none"></div>
            <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-tech/10 rounded-full blur-[128px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 items-center relative z-10 pt-20 pb-20">

                {/* Left Column: Text content (5 cols) */}
                <motion.div
                    className="lg:col-span-5 space-y-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={itemVariants}>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono font-medium text-indigo-700 dark:text-tech bg-indigo-50 dark:bg-tech-dim/20 rounded border border-indigo-200 dark:border-tech-dim/50 backdrop-blur-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 dark:bg-tech opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600 dark:bg-tech"></span>
                            </span>
                            Available for New Projects
                        </div>
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]"
                    >
                        Ingeniería <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-tech">Full-Stack</span> <br />
                        Escalable.
                    </motion.h1>

                    <motion.div variants={itemVariants} className="pl-4 border-l-2 border-brand/30">
                        <p className="text-sm md:text-base font-mono text-brand mb-2 font-medium">
                            Next.js • NestJS • Java Spring
                        </p>
                        <p className="text-lg text-slate-700 dark:text-gray-400 leading-relaxed max-w-lg font-medium dark:font-normal">
                            {hero.intro}
                        </p>
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-8 py-4 rounded-lg bg-brand text-white font-semibold hover:bg-brand-dark transition-colors shadow-lg shadow-brand/20 hover:shadow-brand/40 flex items-center gap-2 group"
                        >
                            <FaCode className="group-hover:rotate-12 transition-transform" />
                            {hero.cta}
                        </motion.a>
                        <motion.a
                            href="#skills"
                            whileHover={{ scale: 1.02, backgroundColor: "rgba(0,0,0,0.02)" }}
                            whileTap={{ scale: 0.98 }}
                            className="px-8 py-4 rounded-lg border border-slate-300 dark:border-surface-border text-slate-700 dark:text-gray-300 font-semibold transition-colors flex items-center gap-2 hover:border-slate-800 hover:text-slate-900 hover:bg-white dark:hover:bg-transparent dark:hover:text-white dark:hover:border-surface-border bg-white dark:bg-transparent shadow-sm dark:shadow-none"
                        >
                            <FaGithub />
                            {hero.contactCta}
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* Spacer (1 col) */}
                <div className="hidden lg:block lg:col-span-1"></div>

                {/* Right Column: Visual (6 cols) */}
                <motion.div
                    className="lg:col-span-6 relative perspective-1000"
                    initial={{ opacity: 0, x: 50, rotateY: -5 }}
                    animate={{ opacity: 1, x: 0, rotateY: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                >
                    {/* Floating Container - ADAPTIVE THEME */}
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="relative rounded-xl bg-white dark:bg-[#0F0F0F] border border-slate-200 dark:border-gray-800 shadow-2xl overflow-hidden group"
                    >
                        {/* Header Window */}
                        <div className="flex items-center justify-between px-4 py-3 bg-slate-50 dark:bg-[#161616] border-b border-slate-200 dark:border-gray-800">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black/10"></div>
                                <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black/10"></div>
                                <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-black/10"></div>
                            </div>
                            <div className="text-xs text-slate-500 dark:text-gray-500 font-mono">portfolio.tsx</div>
                            <div className="w-12"></div>
                        </div>

                        {/* Code Content */}
                        <div className="p-6 font-mono text-xs md:text-sm leading-7 text-slate-800 dark:text-gray-300 overflow-x-auto selection:bg-brand/10">
                            <p><span className="text-purple-600 dark:text-purple-400">interface</span> <span className="text-amber-600 dark:text-yellow-200">Developer</span> <span className="text-slate-500 dark:text-gray-500">{"{"}</span></p>
                            <p className="pl-4"><span className="text-blue-600 dark:text-brand-light">role</span>: <span className="text-emerald-600 dark:text-tech">'Full-Stack Engineer'</span>;</p>
                            <p className="pl-4"><span className="text-blue-600 dark:text-brand-light">location</span>: <span className="text-emerald-600 dark:text-tech">'Argentina'</span>;</p>
                            <p className="pl-4"><span className="text-blue-600 dark:text-brand-light">stack</span>: <span className="text-slate-500 dark:text-gray-500">{"["}</span></p>
                            <p className="pl-8"><span className="text-emerald-600 dark:text-tech">'Next.js'</span>, <span className="text-slate-400 dark:text-gray-500">// Frontend</span></p>
                            <p className="pl-8"><span className="text-emerald-600 dark:text-tech">'NestJS'</span>, <span className="text-slate-400 dark:text-gray-500">// Backend</span></p>
                            <p className="pl-8"><span className="text-emerald-600 dark:text-tech">'Java Spring'</span>  <span className="text-slate-400 dark:text-gray-500">// Enterprise Backend</span></p>
                            <p className="pl-4"><span className="text-slate-500 dark:text-gray-500">{"]"}</span>;</p>
                            <p className="pl-4"><span className="text-blue-600 dark:text-brand-light">focus</span>: <span className="text-emerald-600 dark:text-tech">'End-to-End Scalability'</span>;</p>
                            <p className="text-slate-500 dark:text-gray-500">{"}"}</p>
                            <br />
                            <p className="text-slate-400 dark:text-gray-500">// Let's build something amazing</p>
                            <p><span className="text-purple-600 dark:text-brand-light">const</span> <span className="text-slate-900 dark:text-white">me</span> = <span className="text-purple-600 dark:text-brand-light">new</span> <span className="text-amber-600 dark:text-yellow-200">Developer</span>();</p>
                            <div className="flex items-center gap-2 mt-2">
                                <span className="text-slate-900 dark:text-white">me</span>.<span className="text-amber-600 dark:text-yellow-200">deploy</span>(<span className="text-emerald-600 dark:text-tech">'Production'</span>);
                                <span className="animate-pulse w-2 h-4 bg-brand block"></span>
                            </div>
                        </div>

                        {/* Glow overlay */}
                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-brand/5 to-transparent pointer-events-none"></div>
                    </motion.div>

                    {/* Decorative Elements behind */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-tech/10 rounded-full blur-2xl -z-10"></div>
                </motion.div>
            </div>
        </section>
    );
};
