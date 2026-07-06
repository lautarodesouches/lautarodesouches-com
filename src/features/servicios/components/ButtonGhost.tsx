"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ButtonGhostProps {
    href: string;
    children: ReactNode;
    icon?: ReactNode;
    external?: boolean;
}

/** Botón secundario / ghost. */
export function ButtonGhost({ href, children, icon, external = false }: ButtonGhostProps) {
    return (
        <motion.a
            href={href}
            target={external ? "_blank" : "_self"}
            rel={external ? "noopener noreferrer" : undefined}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-7 py-4 rounded-xl font-semibold text-sm transition-colors
                border border-slate-300 text-slate-700 hover:border-slate-500 hover:text-slate-900 bg-white
                dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-500 dark:hover:text-white dark:bg-transparent"
        >
            {icon && <span className="text-base">{icon}</span>}
            {children}
        </motion.a>
    );
}
