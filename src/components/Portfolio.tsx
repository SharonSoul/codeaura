'use client';

import { motion } from 'framer-motion';

const projects = [
    {
        title: 'Nexus Fintech',
        category: 'App Development',
        gradient: 'from-[#1B1464] to-[#00d2ff]'
    },
    {
        title: 'Lumina',
        category: 'Brand & Web',
        gradient: 'from-[#8C37DB] to-[#ff0080]'
    },
    {
        title: 'EcoSphere',
        category: 'Platform Design',
        gradient: 'from-[#00b09b] to-[#96c93d]'
    }
];

const Portfolio = () => {
    return (
        <section id="work" className="py-24 bg-[#050509]">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="mb-16 flex flex-col md:flex-row justify-between items-end">
                    <div>
                        <span className="text-[#8C37DB] font-medium tracking-widest uppercase mb-2 block">Selected Work</span>
                        <h2 className="text-3xl md:text-5xl font-bold">Our Universe</h2>
                    </div>
                    <button className="hidden md:block text-white border-b border-[#8C37DB] pb-1 hover:pb-2 transition-all">
                        View All Projects
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -10 }}
                            viewport={{ once: true }}
                            className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer"
                        >
                            {/* Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-500`} />

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-between">
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold">
                                        {project.category}
                                    </span>
                                </div>

                                <div>
                                    <h3 className="text-3xl font-bold mb-2 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        View Case Study -&gt;
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <button className="text-white border-b border-[#8C37DB] pb-1">
                        View All Projects
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
