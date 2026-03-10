'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const categories = ['All', 'Design', 'Development', 'Marketing', 'Security'];

const projects = [
    {
        title: 'Oya Finance',
        category: 'Development',
        desc: 'Pan-African neobank with 200k+ active users',
        gradient: 'from-[#1A56F0] to-[#7B2FBE]',
        tag: 'Fintech',
    },
    {
        title: 'LagosGrid',
        category: 'Design',
        desc: 'Smart city management platform for Lagos State',
        gradient: 'from-[#FF5C35] to-[#FF9F1C]',
        tag: 'GovTech',
    },
    {
        title: 'HerbnGo',
        category: 'Marketing',
        desc: 'Herbal wellness brand â€” 400% growth in 6 months',
        gradient: 'from-[#10B981] to-[#3B82F6]',
        tag: 'Health & Wellness',
    },
    {
        title: 'VoltShield',
        category: 'Security',
        desc: 'Enterprise cybersecurity infrastructure',
        gradient: 'from-[#6366F1] to-[#0D1B2A]',
        tag: 'Cybersecurity',
    },
    {
        title: 'Scriibo',
        category: 'Design',
        desc: "Africa's leading content platform for creators",
        gradient: 'from-[#F0A500] to-[#FF5C35]',
        tag: 'Creator Economy',
    },
    {
        title: 'Medify',
        category: 'Development',
        desc: 'Telemedicine platform serving 15 countries',
        gradient: 'from-[#0EA5E9] to-[#6366F1]',
        tag: 'HealthTech',
    },
];

export default function Portfolio() {
    const [active, setActive] = useState('All');
    const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

    return (
        <section id="work" className="py-28 bg-cream">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
                    <div>
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-sm text-electric font-medium uppercase tracking-[0.2em] block mb-3"
                        >
                            Selected Work
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-bold text-ink leading-tight"
                        >
                            Work We&apos;re
                            <br />
                            <span className="font-display italic font-normal text-electric">Proud Of</span>
                        </motion.h2>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActive(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                                    active === cat
                                        ? 'bg-electric text-white shadow-lg shadow-electric/20'
                                        : 'bg-ink/5 text-ink/55 hover:bg-ink/10 hover:text-ink'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence>
                        {filtered.map(project => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.3 }}
                                className="group relative h-[360px] rounded-3xl overflow-hidden cursor-pointer"
                            >
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-transform duration-700 group-hover:scale-105`}
                                />
                                <div className="absolute inset-0 bg-black/15 group-hover:bg-black/5 transition-colors duration-300" />
                                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                                    <div className="flex justify-between items-start">
                                        <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold">
                                            {project.tag}
                                        </span>
                                        <div className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all -translate-y-2 group-hover:translate-y-0 duration-300">
                                            <ArrowUpRight size={16} className="text-white" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                        <p className="text-white/70 text-sm translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                                            {project.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}

