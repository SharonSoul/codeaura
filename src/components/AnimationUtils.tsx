'use client';

import { motion, useScroll, useTransform, useSpring, type Variants } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

// ─── Reusable variants ───────────────────────────────────────────────────────

export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 48, filter: 'blur(6px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export const fadeLeft: Variants = {
    hidden: { opacity: 0, x: -60, filter: 'blur(4px)' },
    visible: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export const fadeRight: Variants = {
    hidden: { opacity: 0, x: 60, filter: 'blur(4px)' },
    visible: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.88 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] } },
};

export const clipReveal: Variants = {
    hidden: { clipPath: 'inset(100% 0% 0% 0%)', opacity: 0 },
    visible: {
        clipPath: 'inset(0% 0% 0% 0%)',
        opacity: 1,
        transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
    },
};

export const staggerContainer: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
};

export const staggerContainerFast: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.07 },
    },
};

// ─── Wrapper that triggers children when section enters viewport ─────────────

interface RevealProps {
    children: ReactNode;
    className?: string;
    variants?: Variants;
    delay?: number;
    amount?: number;
}

export function Reveal({ children, className, variants = fadeUp, delay = 0, amount = 0.15 }: RevealProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount }}
            variants={variants}
            transition={{ delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// ─── Stagger wrapper ─────────────────────────────────────────────────────────

interface StaggerProps {
    children: ReactNode;
    className?: string;
    fast?: boolean;
    amount?: number;
}

export function Stagger({ children, className, fast, amount = 0.1 }: StaggerProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount }}
            variants={fast ? staggerContainerFast : staggerContainer}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// ─── Parallax scroll element (moves slower/faster than scroll) ───────────────

interface ParallaxProps {
    children: ReactNode;
    speed?: number; // negative = up, positive = down (relative to scroll)
    className?: string;
}

export function ParallaxScroll({ children, speed = -0.15, className }: ParallaxProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });
    const raw = useTransform(scrollYProgress, [0, 1], [`${speed * -120}px`, `${speed * 120}px`]);
    const y = useSpring(raw, { stiffness: 80, damping: 25 });

    return (
        <div ref={ref} className={className}>
            <motion.div style={{ y }}>{children}</motion.div>
        </div>
    );
}

// ─── Section entry with a decorative line wipe ───────────────────────────────

export function SectionReveal({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.07 }}
            variants={staggerContainer}
            className={className}
        >
            {children}
        </motion.section>
    );
}
