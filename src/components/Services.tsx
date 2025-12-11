'use client';

import { motion } from 'framer-motion';
import { Palette, Code2, Smartphone, Package } from 'lucide-react';

const services = [
    {
        icon: <Palette className="w-10 h-10 text-[#8C37DB]" />,
        title: 'Brand & Design',
        description: 'Immersive brand identities, UI/UX design, and visual systems that tell your story.'
    },
    {
        icon: <Code2 className="w-10 h-10 text-[#D4ADFC]" />,
        title: 'Web Development',
        description: 'Blazing fast, SEO-optimized websites and web applications built with modern frameworks.'
    },
    {
        icon: <Smartphone className="w-10 h-10 text-[#8C37DB]" />,
        title: 'App Development',
        description: 'Native and cross-platform mobile experiences that users love to touch.'
    },
    {
        icon: <Package className="w-10 h-10 text-[#D4ADFC]" />,
        title: 'Product Design',
        description: 'Physical and digital packaging design that stands out on the shelf and screen.'
    }
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-[#0a0a12] relative">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        The <span className="text-[#8C37DB]">Aura</span> Spectrum
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        We don't just build; we craft experiences across the entire digital spectrum.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-[#8C37DB]/50 transition-all hover:bg-white/10 group backdrop-blur-sm"
                        >
                            <div className="mb-6 p-4 rounded-2xl bg-[#1B1464]/30 w-fit group-hover:bg-[#8C37DB]/20 transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
