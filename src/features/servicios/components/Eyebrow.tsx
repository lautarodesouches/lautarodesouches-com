import type { ReactNode } from "react";

interface EyebrowProps {
    children: ReactNode;
}

/** Badge de sección. Indigo en light mode, teal en dark mode. */
export function Eyebrow({ children }: EyebrowProps) {
    return (
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase
            bg-indigo-50 text-indigo-600 border border-indigo-200
            dark:bg-teal-500/10 dark:text-teal-400 dark:border-teal-500/20">
            {children}
        </span>
    );
}
