'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Process', href: '#process' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="fixed top-3 left-0 right-0 z-50 px-4 md:px-8">
            <div className={`max-w-7xl mx-auto rounded-2xl transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-ink/5 py-3 px-6' : 'bg-transparent py-5 px-2'}`}>
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-9 h-9 rounded-xl bg-electric flex items-center justify-center group-hover:bg-coral transition-colors duration-300">
                            <span className="text-white font-bold text-sm tracking-tight">CA</span>
                        </div>
                        <span className="text-lg font-bold text-ink tracking-tight">
                            Code<span className="text-electric group-hover:text-coral transition-colors">Aura</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map(link => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm text-ink/65 hover:text-electric transition-colors font-medium relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-electric group-hover:w-full transition-all duration-300" />
                            </Link>
                        ))}
                        <Link
                            href="#contact"
                            className="px-5 py-2.5 rounded-full bg-electric text-white text-sm font-semibold hover:bg-coral transition-colors duration-300 shadow-lg shadow-electric/20"
                        >
                            Start a Project
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden w-9 h-9 rounded-lg bg-ink/5 flex items-center justify-center"
                        aria-label="Menu"
                    >
                        {isOpen ? <X size={18} className="text-ink" /> : <Menu size={18} className="text-ink" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden mt-2 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl shadow-ink/10 p-6 max-w-7xl mx-auto"
                    >
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-lg font-medium text-ink hover:text-electric transition-colors block py-1"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <Link
                                href="#contact"
                                onClick={() => setIsOpen(false)}
                                className="mt-2 px-5 py-3 rounded-full bg-electric text-white text-sm font-semibold text-center hover:bg-coral transition-colors"
                            >
                                Start a Project
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
