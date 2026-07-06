"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ButtonPrimaryProps {
    href: string;
    children: ReactNode;
    icon?: ReactNode;
}

/** CTA principal con hover scale. Indigo en light, teal en dark. Siempre abre en nueva pestaña. */
export function ButtonPrimary({ href, children, icon }: ButtonPrimaryProps) {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-7 py-4 rounded-xl font-bold text-sm transition-colors
                bg-brand text-white shadow-lg shadow-brand/20 hover:bg-brand-dark
                dark:bg-teal-500 dark:text-zinc-950 dark:shadow-teal-500/20 dark:hover:bg-teal-400"
        >
            {icon && <span className="text-base">{icon}</span>}
            {children}
        </motion.a>
    );
}
