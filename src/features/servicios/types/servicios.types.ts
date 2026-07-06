import type { ReactNode } from "react";

export interface ServiceCard {
    icon: ReactNode;
    eyebrow: string;
    title: string;
    description: string;
    highlights: string[];
}

export interface PainItem {
    problem: string;
    solution: string;
}

export interface TrustItem {
    icon: ReactNode;
    metric: string;
    label: string;
    description: string;
}
