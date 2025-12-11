'use client';

import { motion } from 'framer-motion';

const steps = [
    {
        num: '01',
        title: 'Discovery',
        desc: 'We map the universe of your requirements and define the core problem.'
    },
    {
        num: '02',
        title: 'Alchemy',
        desc: 'Our designers distill concepts into visual gold, creating high-fidelity prototypes.'
    },
    {
        num: '03',
        title: 'Materialization',
        desc: 'Developers build the structure with clean, scalable code.'
    },
    {
        num: '04',
        title: 'Ascension',
        desc: 'We launch your product into the digital ether, optimizing for orbit.'
    }
];

const Process = () => {
    return (
        <section id="process" className="py-24 bg-[#0a0a12] relative overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        The <span className="text-[#8C37DB]">Aura</span> Method
                    </h2>
                </motion.div>

                <div className="relative">
                    {/* Connecting Line */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#8C37DB] via-[#D4ADFC] to-[#262262] opacity-20" />

                    <div className="space-y-12 md:space-y-24">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                <div className="flex-1 w-full text-left md:text-right">
                                    {index % 2 === 0 && (
                                        <div className="md:pr-12">
                                            <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                                            <p className="text-gray-400">{step.desc}</p>
                                        </div>
                                    )}
                                    {index % 2 !== 0 && (
                                        <div className="md:pl-12 text-left md:text-left hidden md:block">
                                            {/* Empty for layout balance on desktop reverse */}
                                        </div>
                                    )}
                                </div>

                                <div className="relative z-10 w-10 h-10 rounded-full bg-[#0a0a12] border-2 border-[#8C37DB] flex items-center justify-center font-bold text-[#D4ADFC]">
                                    {/* Circle Marker */}
                                </div>

                                <div className="flex-1 w-full text-left">
                                    {index % 2 !== 0 && (
                                        <div className="md:pl-12">
                                            <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                                            <p className="text-gray-400">{step.desc}</p>
                                        </div>
                                    )}
                                    {index % 2 === 0 && (
                                        <div className="md:pr-12 hidden md:block">
                                            {/* Empty for layout */}
                                        </div>
                                    )}
                                    {/* Mobile Content Fallback */}
                                    <div className="md:hidden pl-12 -mt-8">
                                        {index % 2 !== 0 && (
                                            <>
                                                {/* Already rendered above for mobile flow? No, logic is tricky with flex-row-reverse. 
                                                    Let's simplify: Text is always in the 'flex-1' blocks.
                                                */}
                                            </>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
