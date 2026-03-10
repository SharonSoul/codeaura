'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';

const stats = [
    { value: 120, suffix: '+', label: 'Projects Delivered' },
    { value: 50, suffix: '+', label: 'Global Brands' },
    { value: 6, suffix: '', label: 'Tech Disciplines' },
    { value: 98, suffix: '%', label: 'Client Satisfaction' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const observed = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !observed.current) {
                    observed.current = true;
                    let start = 0;
                    const duration = 1800;
                    const step = (timestamp: number) => {
                        if (!start) start = timestamp;
                        const progress = Math.min((timestamp - start) / duration, 1);
                        const ease = 1 - Math.pow(1 - progress, 3);
                        setCount(Math.floor(ease * value));
                        if (progress < 1) requestAnimationFrame(step);
                    };
                    requestAnimationFrame(step);
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [value]);

    return <span ref={ref}>{count}{suffix}</span>;
}

export default function Hero() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });
    const [dimensions, setDimensions] = useState({ w: 1200, h: 800 });
    const [shaking, setShaking] = useState(false);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });

    useEffect(() => {
        setDimensions({ w: window.innerWidth, h: window.innerHeight });
        const handleResize = () => setDimensions({ w: window.innerWidth, h: window.innerHeight });
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const orbX1 = useTransform(springX, [0, dimensions.w], [-50, 50]);
    const orbY1 = useTransform(springY, [0, dimensions.h], [-50, 50]);
    const orbX2 = useTransform(springX, [0, dimensions.w], [50, -50]);
    const orbY2 = useTransform(springY, [0, dimensions.h], [50, -50]);

    const handleMouseMove = useCallback(
        (e: React.MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        },
        [mouseX, mouseY]
    );

    // Device orientation (mobile tilt)
    useEffect(() => {
        const handleOrientation = (e: DeviceOrientationEvent) => {
            const y = (e.gamma ?? 0) / 45;
            const x = ((e.beta ?? 0) - 45) / 45;
            setTilt({ x: Math.max(-1, Math.min(1, x)), y: Math.max(-1, Math.min(1, y)) });
        };
        if (typeof DeviceOrientationEvent !== 'undefined') {
            const DevOr = DeviceOrientationEvent as unknown as { requestPermission?: () => Promise<string> };
            if (typeof DevOr.requestPermission === 'function') {
                const handler = () => {
                    DevOr.requestPermission!().then(state => {
                        if (state === 'granted') window.addEventListener('deviceorientation', handleOrientation);
                    });
                };
                window.addEventListener('touchstart', handler, { once: true });
            } else {
                window.addEventListener('deviceorientation', handleOrientation);
            }
        }
        return () => window.removeEventListener('deviceorientation', handleOrientation);
    }, []);

    // Shake detection
    useEffect(() => {
        let lastAcc = { x: 0, y: 0, z: 0 };
        let lastTime = 0;
        const handleMotion = (e: DeviceMotionEvent) => {
            const acc = e.accelerationIncludingGravity;
            if (!acc) return;
            const now = Date.now();
            if (now - lastTime < 100) return;
            lastTime = now;
            const dx = Math.abs((acc.x ?? 0) - lastAcc.x);
            const dy = Math.abs((acc.y ?? 0) - lastAcc.y);
            const dz = Math.abs((acc.z ?? 0) - lastAcc.z);
            if (dx + dy + dz > 30) {
                setShaking(true);
                setTimeout(() => setShaking(false), 700);
            }
            lastAcc = { x: acc.x ?? 0, y: acc.y ?? 0, z: acc.z ?? 0 };
        };
        window.addEventListener('devicemotion', handleMotion);
        return () => window.removeEventListener('devicemotion', handleMotion);
    }, []);

    return (
        <section
            onMouseMove={handleMouseMove}
            className="relative min-h-screen bg-cream overflow-hidden flex flex-col justify-center"
        >
            {/* Dot grid */}
            <div
                className="absolute inset-0 opacity-[0.35]"
                style={{
                    backgroundImage: 'radial-gradient(circle, #1A56F0 1px, transparent 1px)',
                    backgroundSize: '38px 38px',
                }}
            />

            {/* Mouse-tracking orbs */}
            <motion.div
                style={{ x: orbX1, y: orbY1 }}
                className={`absolute top-[8%] right-[8%] w-[520px] h-[520px] rounded-full bg-electric/8 blur-[110px] pointer-events-none transition-all duration-700 ${
                    shaking ? 'scale-150 bg-electric/15' : ''
                }`}
            />
            <motion.div
                style={{ x: orbX2, y: orbY2 }}
                className={`absolute bottom-[8%] left-[3%] w-[420px] h-[420px] rounded-full bg-coral/8 blur-[100px] pointer-events-none transition-all duration-700 ${
                    shaking ? 'scale-150 bg-coral/15' : ''
                }`}
            />
            <div className="absolute top-[45%] left-[45%] w-[500px] h-[500px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

            {/* Mobile tilt parallax element */}
            <div
                className="absolute top-[18%] right-[12%] w-20 h-20 md:hidden pointer-events-none transition-transform duration-100"
                style={{ transform: `translate(${tilt.y * 18}px, ${tilt.x * 18}px)` }}
            >
                <div className="w-full h-full rounded-2xl bg-electric/15 border border-electric/25 rotate-12 backdrop-blur-sm" />
            </div>
            <div
                className="absolute bottom-[28%] left-[8%] w-12 h-12 md:hidden pointer-events-none transition-transform duration-100"
                style={{ transform: `translate(${tilt.y * -12}px, ${tilt.x * -12}px)` }}
            >
                <div className="w-full h-full rounded-full bg-coral/20 border border-coral/30" />
            </div>

            {/* Main content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-32 md:pt-20 pb-20">
                <div className="max-w-5xl">

                    {/* Tag */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-electric/20 bg-electric/5 text-electric text-sm font-medium mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-electric animate-pulse" />
                        Full-Spectrum Tech Agency Â· Founded by Sharon Olaitan
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.1 }}
                        className="text-[clamp(3rem,8vw,7rem)] font-bold leading-[0.93] tracking-tight mb-6"
                    >
                        <span className="text-ink block">We Build Tech</span>
                        <span className="font-display font-normal italic text-electric block">
                            That Moves
                        </span>
                        <span className="text-ink block">The World.</span>
                    </motion.h1>

                    {/* Sub */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="text-lg md:text-xl text-ink/55 max-w-2xl mb-10 leading-relaxed"
                    >
                        Design. Development. Marketing. Cybersecurity. Tech Writing.
                        <br className="hidden md:block" />
                        We are the agency ambitious brands turn to when they need everything done right.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.45 }}
                        className="flex flex-col sm:flex-row gap-4 mb-20"
                    >
                        <Link
                            href="#work"
                            className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-electric text-white font-semibold text-base hover:bg-coral transition-all duration-300 shadow-xl shadow-electric/20 hover:shadow-coral/20 hover:gap-3"
                        >
                            Explore Our Work
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="#contact"
                            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border-2 border-ink/12 text-ink font-semibold text-base hover:border-electric hover:text-electric transition-all duration-300"
                        >
                            Start a Project
                        </Link>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-ink/10"
                    >
                        {stats.map((stat, i) => (
                            <div key={i}>
                                <div className="text-3xl md:text-4xl font-bold text-ink mb-1">
                                    <Counter value={stat.value} suffix={stat.suffix} />
                                </div>
                                <div className="text-sm text-ink/45 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] text-ink/30 uppercase tracking-[0.25em]">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    <ChevronDown size={16} className="text-ink/25" />
                </motion.div>
            </motion.div>

            {/* Floating geometry â€” desktop */}
            <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                className="absolute top-[28%] right-[6%] w-16 h-16 border border-electric/15 rounded-xl hidden md:block"
            />
            <motion.div
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
                className="absolute bottom-[22%] left-[4%] w-10 h-10 border border-coral/20 rounded-full hidden md:block"
            />
            <motion.div
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
                className="absolute top-[60%] right-[15%] w-6 h-6 border border-gold/25 rounded-sm hidden md:block"
            />
        </section>
    );
}
