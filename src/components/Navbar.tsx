'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Code } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Services', href: '#services' },
        { name: 'Process', href: '#process' },
        { name: 'Work', href: '#work' },
        { name: 'About', href: '#about' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/50 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8C37DB] to-[#262262] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Code className="text-white w-6 h-6" />
                    </div>
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white group-hover:from-[#D4ADFC] group-hover:to-[#8C37DB] transition-all">
                        CodeAura
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-gray-300 hover:text-[#D4ADFC] transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8C37DB] transition-all group-hover:w-full" />
                        </Link>
                    ))}
                    <Link href="#contact" className="px-6 py-2 rounded-full bg-[#8C37DB] hover:bg-[#7a2fc2] text-white font-semibold transition-all hover:scale-105 shadow-[0_0_20px_rgba(140,55,219,0.3)]">
                        Let's Talk
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-full left-0 w-full bg-[#0a0a12]/95 backdrop-blur-lg border-b border-white/10 md:hidden flex flex-col items-center py-8 gap-6"
                        >
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-xl text-gray-300 hover:text-[#D4ADFC]"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="#contact"
                                onClick={() => setIsOpen(false)}
                                className="px-8 py-3 rounded-full bg-[#8C37DB] text-white font-bold"
                            >
                                Let's Talk
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
