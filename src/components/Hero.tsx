'use client';

import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a12]">
            {/* Animated Background Mesh */}
            <div className="absolute inset-0 w-full h-full opacity-30">
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#8C37DB] blur-[120px] animate-pulse-slow" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#262262] blur-[100px] animate-pulse-slow delay-1000" />
                <div className="absolute top-[40%] left-[60%] w-[300px] h-[300px] rounded-full bg-[#D4ADFC] blur-[80px] opacity-50 animate-float" />
            </div>

            <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center pt-32 md:pt-0">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-2 px-4 rounded-full bg-white/5 border border-white/10 text-[#D4ADFC] text-sm font-medium mb-6 backdrop-blur-sm">
                        ✨ Redefining Digital Excellence
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        We Craft <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D4ADFC] via-[#8C37DB] to-[#262262] animate-text-shimmer bg-[length:200%_auto]">
                            Digital Alchemies
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        CodeAura Studios fuses creative artistry with technical precision to build software, websites, and brands that captivate and convert.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <button className="px-8 py-4 rounded-full bg-[#8C37DB] hover:bg-[#7a2fc2] text-white font-bold text-lg transition-all hover:scale-105 shadow-[0_4px_20px_rgba(140,55,219,0.4)]">
                        Explore Our Work
                    </button>
                    <button className="px-8 py-4 rounded-full bg-transparent border border-white/10 hover:bg-white/5 text-white font-semibold text-lg transition-all hover:scale-105 backdrop-blur-sm">
                        Our Process
                    </button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-[#8C37DB] to-transparent" />
            </motion.div>
        </section>
    );
};

export default Hero;
