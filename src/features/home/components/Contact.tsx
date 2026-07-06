"use client";

import { portfolioData } from "@/features/home/data/portfolio.data";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa6";

export const Contact = () => {
    const { contact } = portfolioData;

    return (
        <section id="contact" className="py-28 px-6 bg-slate-50 dark:bg-zinc-950">
            <motion.div
                className="max-w-6xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="grid lg:grid-cols-12 gap-16">
                    {/* Left - Header & Message */}
                    <div className="lg:col-span-5 space-y-6">
                        <p className="text-sm font-mono text-brand dark:text-tech uppercase tracking-widest">
                            Contacto
                        </p>
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                            Hablemos
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-gray-400 leading-relaxed">
                            {contact.message}
                        </p>
                    </div>

                    {/* Right - Contact Links */}
                    <div className="lg:col-span-7 flex flex-col justify-center">
                        <ul className="space-y-4">
                            {/* Email */}
                            <li>
                                <a
                                    href={`mailto:${contact.email}`}
                                    className="group flex items-center justify-between p-5 rounded-lg bg-white dark:bg-black border border-slate-200 dark:border-white/10 hover:border-brand/50 dark:hover:border-tech/50 transition-colors"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-brand/10 dark:bg-tech/10 flex items-center justify-center">
                                            <FaEnvelope className="w-4 h-4 text-brand dark:text-tech" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-mono text-slate-400 dark:text-gray-500 uppercase tracking-wider">Email</p>
                                            <p className="text-sm font-medium text-slate-900 dark:text-white">{contact.email}</p>
                                        </div>
                                    </div>
                                    <span className="text-sm text-brand dark:text-tech opacity-0 group-hover:opacity-100 transition-opacity">Enviar →</span>
                                </a>
                            </li>

                            {/* LinkedIn */}
                            <li>
                                <a
                                    href={contact.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-between p-5 rounded-lg bg-white dark:bg-black border border-slate-200 dark:border-white/10 hover:border-brand/50 dark:hover:border-tech/50 transition-colors"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center">
                                            <FaLinkedin className="w-4 h-4 text-slate-600 dark:text-gray-400" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-mono text-slate-400 dark:text-gray-500 uppercase tracking-wider">LinkedIn</p>
                                            <p className="text-sm font-medium text-slate-900 dark:text-white">Perfil profesional</p>
                                        </div>
                                    </div>
                                    <span className="text-sm text-brand dark:text-tech opacity-0 group-hover:opacity-100 transition-opacity">Abrir →</span>
                                </a>
                            </li>

                            {/* GitHub */}
                            <li>
                                <a
                                    href={contact.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-between p-5 rounded-lg bg-white dark:bg-black border border-slate-200 dark:border-white/10 hover:border-brand/50 dark:hover:border-tech/50 transition-colors"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center">
                                            <FaGithub className="w-4 h-4 text-slate-600 dark:text-gray-400" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-mono text-slate-400 dark:text-gray-500 uppercase tracking-wider">GitHub</p>
                                            <p className="text-sm font-medium text-slate-900 dark:text-white">Repositorios</p>
                                        </div>
                                    </div>
                                    <span className="text-sm text-brand dark:text-tech opacity-0 group-hover:opacity-100 transition-opacity">Abrir →</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
