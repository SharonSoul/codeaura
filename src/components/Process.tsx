'use client';

import { motion } from 'framer-motion';

const steps = [
    {
        num: '01',
        title: 'Discovery',
        desc: 'We map your universe â€” goals, audience, competitive landscape, and success metrics before writing a single line of code.',
        tag: 'Research & Strategy',
    },
    {
        num: '02',
        title: 'Strategy',
        desc: 'Data-driven roadmaps, architecture decisions, and design systems that align every stakeholder from day one.',
        tag: 'Planning & Architecture',
    },
    {
        num: '03',
        title: 'Craft',
        desc: 'Our designers and engineers build with obsessive attention to detail â€” every pixel, every interaction, every millisecond.',
        tag: 'Design & Development',
    },
    {
        num: '04',
        title: 'Launch & Grow',
        desc: "We don't just ship and disappear. We optimize, iterate, and scale alongside your business.",
        tag: 'Deployment & Growth',
    },
];

export default function Process() {
    return (
        <section id="process" className="py-28 bg-mist overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-sm text-electric font-medium uppercase tracking-[0.2em] block mb-3"
                    >
                        How We Work
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold text-ink"
                    >
                        The CodeAura
                        <br />
                        <span className="font-display font-normal italic text-electric">Method</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group relative bg-white rounded-3xl p-8 border border-ink/5 hover:border-electric/20 transition-all duration-300 hover:shadow-xl hover:shadow-ink/5 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 text-[8rem] font-bold text-ink/[0.03] font-display leading-none select-none group-hover:text-electric/[0.05] transition-colors">
                                {step.num}
                            </div>
                            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-electric/8 text-electric mb-5">
                                {step.tag}
                            </span>
                            <div className="text-5xl font-bold text-ink mb-4 font-display">{step.num}</div>
                            <h3 className="text-2xl font-bold text-ink mb-3">{step.title}</h3>
                            <p className="text-ink/55 leading-relaxed">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

