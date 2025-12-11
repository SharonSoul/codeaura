'use client';

import { motion } from 'framer-motion';

const testimonials = [
    {
        quote: "CodeAura didn't just build an app; they engineered an entire brand ecosystem.",
        author: "Sarah J.",
        role: "CEO, FinTech Global"
    },
    {
        quote: "The level of detail in the animations and user flow is simply vertically integrated.",
        author: "Mike T.",
        role: "Founder, HealthBase"
    },
    {
        quote: "Truly digital alchemy. They took our fragmented vision and turned it into gold.",
        author: "Elena R.",
        role: "CTO, NextGen"
    }
];

const Testimonials = () => {
    return (
        <section className="py-24 bg-[#0a0a12] overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6 mb-12">
                <h2 className="text-3xl font-bold">Frequency <span className="text-[#8C37DB]">Alignment</span></h2>
            </div>

            <div className="relative flex overflow-x-hidden">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ ease: "linear", duration: 20, repeat: Infinity }}
                    className="flex gap-8 whitespace-nowrap"
                >
                    {[...testimonials, ...testimonials].map((item, index) => (
                        <div key={index} className="w-[400px] p-8 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm flex-shrink-0">
                            <p className="text-xl text-gray-300 mb-6 italic whitespace-normal">"{item.quote}"</p>
                            <div>
                                <h4 className="font-bold text-white">{item.author}</h4>
                                <span className="text-sm text-[#8C37DB]">{item.role}</span>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Gradient Fade Overlay */}
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0a0a12] to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0a0a12] to-transparent z-10" />
            </div>
        </section>
    );
};

export default Testimonials;
