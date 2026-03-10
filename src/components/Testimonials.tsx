'use client';

import { motion } from 'framer-motion';

const testimonials = [
    {
        quote: "CodeAura didn't just build our platform \u2014 they transformed how we think about product. The quality is genuinely world-class.",
        author: 'Adaeze Obi',
        role: 'CEO, Oya Finance',
        initials: 'AO',
        color: 'bg-electric',
    },
    {
        quote: 'The attention to detail in every animation, every transition \u2014 it is the kind of work that makes investors take notice.',
        author: 'Tunde Fashola',
        role: 'Founder, LagosGrid',
        initials: 'TF',
        color: 'bg-coral',
    },
    {
        quote: 'We went from a basic landing page to a full brand ecosystem in 8 weeks. CodeAura operates at a completely different level.',
        author: 'Chiamaka Peters',
        role: 'CMO, HerbnGo',
        initials: 'CP',
        color: 'bg-gold',
    },
    {
        quote: 'After CodeAura audited our infrastructure, we caught 3 critical vulnerabilities. Best security investment we ever made.',
        author: 'Emeka Eze',
        role: 'CTO, VoltShield',
        initials: 'EE',
        color: 'bg-electric',
    },
    {
        quote: 'The tech writing team made our developer docs actually readable. Our API integration time dropped by 40%.',
        author: 'Nadia Alli',
        role: 'Head of Product, Scriibo',
        initials: 'NA',
        color: 'bg-coral',
    },
    {
        quote: 'Sharon and her team brought our vision to life with precision and creativity I have never seen from any other agency.',
        author: 'Dami Adeyemi',
        role: 'Founder, Medify',
        initials: 'DA',
        color: 'bg-gold',
    },
];

export default function Testimonials() {
    return (
        <section className="py-28 bg-white overflow-hidden">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
                className="max-w-7xl mx-auto px-6 md:px-8 mb-14"
            >
                <div className="overflow-hidden mb-3">
                    <motion.span
                        variants={{
                            hidden: { y: '120%', opacity: 0 },
                            visible: { y: '0%', opacity: 1, transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } },
                        }}
                        className="text-sm text-electric font-medium uppercase tracking-[0.2em] block"
                    >
                        Client Love
                    </motion.span>
                </div>
                <div className="overflow-hidden">
                    <motion.div
                        variants={{
                            hidden: { y: '110%' },
                            visible: { y: '0%', transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } },
                        }}
                        className="text-4xl md:text-6xl font-bold text-ink"
                    >
                        What Our Clients
                    </motion.div>
                </div>
                <div className="overflow-hidden">
                    <motion.div
                        variants={{
                            hidden: { y: '110%' },
                            visible: { y: '0%', transition: { duration: 0.9, delay: 0.07, ease: [0.76, 0, 0.24, 1] } },
                        }}
                        className="text-4xl md:text-6xl font-bold text-ink"
                    >
                        <span className="font-display italic font-normal text-electric">Are Saying</span>
                    </motion.div>
                </div>
            </motion.div>

            <div
                className="relative flex overflow-hidden"
                style={{ maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)' }}
            >
                <motion.div
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{ ease: 'linear', duration: 32, repeat: Infinity }}
                    className="flex gap-6 items-stretch"
                >
                    {[...testimonials, ...testimonials].map((item, i) => (
                        <div
                            key={i}
                            className="w-[380px] flex-shrink-0 bg-cream rounded-2xl p-8 border border-ink/6 flex flex-col justify-between"
                        >
                            <p className="text-base md:text-lg text-ink/65 leading-relaxed mb-6 font-display italic">
                                &ldquo;{item.quote}&rdquo;
                            </p>
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-full ${item.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                                    {item.initials}
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-ink">{item.author}</div>
                                    <div className="text-xs text-ink/45">{item.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

