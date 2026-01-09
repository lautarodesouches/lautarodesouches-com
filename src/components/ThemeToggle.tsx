"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { FaSun, FaMoon, FaDesktop } from "react-icons/fa6";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const cycleTheme = () => {
        if (theme === "light") setTheme("dark");
        else if (theme === "dark") setTheme("system");
        else setTheme("light");
    };

    const Icon = () => {
        if (theme === "light") return <FaSun className="text-amber-500" />;
        if (theme === "dark") return <FaMoon className="text-brand-light" />;
        return <FaDesktop className="text-gray-400" />;
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <button
                onClick={cycleTheme}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-surface-card border border-surface-border shadow-lg hover:shadow-xl transition-all outline-none focus:ring-2 focus:ring-brand"
                aria-label="Toggle theme"
            >
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={theme}
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 10, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Icon />
                    </motion.div>
                </AnimatePresence>
            </button>
        </div>
    );
}
