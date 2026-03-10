'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="py-28 bg-navy overflow-hidden relative">
            {/* Background dot pattern */}
            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                }}
            />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-electric/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-coral/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left — Founder visual */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >
                        <div className="relative w-full max-w-sm mx-auto lg:mx-0">
                            <div className="w-full aspect-[3/4] rounded-3xl bg-gradient-to-br from-electric/20 via-navy to-coral/20 border border-white/10 overflow-hidden relative flex flex-col items-center justify-end p-8">
                                {/* Decorative elements */}
                                <div className="absolute top-6 left-6 w-14 h-14 border border-white/10 rounded-2xl" />
                                <div className="absolute top-12 right-8 w-8 h-8 border border-electric/30 rounded-full" />
                                <div className="absolute top-1/3 left-4 w-2 h-2 bg-coral/60 rounded-full" />
                                <div className="absolute top-1/2 right-6 w-3 h-3 bg-electric/60 rounded-full" />

                                {/* Concentric rings */}
                                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-white/5" />
                                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-white/5" />

                                {/* Avatar */}
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-electric to-coral border-4 border-white/20 mb-4 flex items-center justify-center shadow-xl">
                                    <span className="text-2xl font-bold text-white font-display italic">SO</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-1 text-center">Sharon Olaitan</h3>
                                <p className="text-white/50 text-sm text-center">Founder & CEO</p>
                            </div>

                            {/* Floating stat cards */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                                className="absolute -right-5 top-[20%] bg-white rounded-2xl p-4 shadow-2xl shadow-ink/10"
                            >
                                <div className="text-2xl font-bold text-ink">5+</div>
                                <div className="text-xs text-ink/50 font-medium mt-0.5">Years in Tech</div>
                            </motion.div>
                            <motion.div
                                animate={{ y: [0, 8, 0] }}
                                transition={{ repeat: Infinity, duration: 5, delay: 1, ease: 'easeInOut' }}
                                className="absolute -left-5 bottom-[20%] bg-white rounded-2xl p-4 shadow-2xl shadow-ink/10"
                            >
                                <div className="text-2xl font-bold text-electric">120+</div>
                                <div className="text-xs text-ink/50 font-medium mt-0.5">Brands Served</div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right — Story */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="text-white"
                    >
                        <span className="text-sm text-electric font-medium uppercase tracking-[0.2em] block mb-4">Our Story</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] mb-6">
                            Built by a<br />
                            <span className="font-display font-normal italic text-coral">Founder</span><br />
                            Who Cares.
                        </h2>

                        <blockquote className="border-l-2 border-electric pl-6 mb-8">
                            <p className="text-lg md:text-xl text-white/75 leading-relaxed font-display italic">
                                "I built CodeAura because I believed ambitious brands deserved world-class tech.
                                Not almost world-class. Actually world-class."
                            </p>
                        </blockquote>

                        <p className="text-white/55 leading-relaxed mb-10 text-base">
                            Sharon Olaitan founded CodeAura with one mission: to be the agency that does it all,
                            and does it brilliantly. From design to development, marketing to cybersecurity,
                            we sit at the intersection of creativity, technology, and strategy — building digital
                            products that move markets.
                        </p>

                        <div className="grid grid-cols-3 gap-6 mb-10 pt-8 border-t border-white/10">
                            {[['2019', 'Founded'], ['50+', 'Team Members'], ['6', 'Disciplines']].map(([val, label]) => (
                                <div key={label}>
                                    <div className="text-3xl font-bold text-white mb-1">{val}</div>
                                    <div className="text-sm text-white/35">{label}</div>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="#contact"
                            className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-electric text-white font-semibold hover:bg-coral transition-all duration-300 shadow-lg shadow-electric/30"
                        >
                            Work With Us
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
