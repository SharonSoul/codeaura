'use client';

import { motion } from 'framer-motion';
import { Palette, Code2, Smartphone, Megaphone, FileText, Shield } from 'lucide-react';

const services = [
    {
        num: '01',
        icon: Palette,
        title: 'UI/UX Design',
        description: 'Brand identities, design systems, and interfaces that turn first impressions into lasting relationships.',
        color: 'text-electric',
        bg: 'bg-electric/8',
        border: 'hover:border-electric/25',
    },
    {
        num: '02',
        icon: Code2,
        title: 'Web Development',
        description: 'Blazing-fast websites and web apps built with modern frameworks, optimized for conversion and scale.',
        color: 'text-coral',
        bg: 'bg-coral/8',
        border: 'hover:border-coral/25',
    },
    {
        num: '03',
        icon: Smartphone,
        title: 'App Development',
        description: 'Native and cross-platform mobile experiences that users actually want to open. iOS, Android, React Native.',
        color: 'text-gold',
        bg: 'bg-gold/8',
        border: 'hover:border-gold/25',
    },
    {
        num: '04',
        icon: Megaphone,
        title: 'Digital Marketing',
        description: 'Performance marketing, SEO, social strategy, and campaigns that drive real pipeline and revenue.',
        color: 'text-electric',
        bg: 'bg-electric/8',
        border: 'hover:border-electric/25',
    },
    {
        num: '05',
        icon: FileText,
        title: 'Tech Writing',
        description: 'Developer docs, whitepapers, product copy, and content that communicates complex ideas with clarity.',
        color: 'text-coral',
        bg: 'bg-coral/8',
        border: 'hover:border-coral/25',
    },
    {
        num: '06',
        icon: Shield,
        title: 'Cybersecurity',
        description: "Pen testing, audits, and security architecture for companies that can't afford to be compromised.",
        color: 'text-gold',
        bg: 'bg-gold/8',
        border: 'hover:border-gold/25',
    },
];

export default function Services() {
    return (
        <section id="services" className="py-28 bg-cream">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <div>
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-sm text-electric font-medium uppercase tracking-[0.2em] block mb-3"
                        >
                            What We Do
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-bold text-ink leading-tight"
                        >
                            Full-Spectrum
                            <br />
                            <span className="font-display font-normal italic text-electric">Tech Services</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-ink/55 max-w-sm text-base leading-relaxed md:text-right"
                    >
                        From zero to launch and beyond â€” we handle every layer of the tech stack so you don\'t have to.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.07 }}
                            whileHover={{ y: -5 }}
                            className={`group p-7 rounded-2xl bg-white border border-ink/5 ${service.border} transition-all duration-300 hover:shadow-xl hover:shadow-ink/5`}
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className={`p-3 rounded-xl ${service.bg}`}>
                                    <service.icon className={`w-6 h-6 ${service.color}`} />
                                </div>
                                <span className="text-5xl font-bold text-ink/4 group-hover:text-ink/8 transition-colors font-display select-none">
                                    {service.num}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-ink mb-3">{service.title}</h3>
                            <p className="text-sm text-ink/55 leading-relaxed">{service.description}</p>
                            <div className={`mt-5 flex items-center gap-1 text-sm font-semibold ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                                Learn more
                                <span className="group-hover:translate-x-1 transition-transform inline-block">&#8594;</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

