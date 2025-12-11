'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
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
                    <div className="relative w-10 h-10 group-hover:scale-110 transition-transform">
                        <Image
                            src="/codeaura_icon_nobg.png"
                            alt="CodeAura Logo"
                            fill
                            className="object-contain"
                        />
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
                    className="md:hidden text-white z-[10000] relative"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={{
                                open: {
                                    opacity: 1,
                                    height: "100vh",
                                    transition: {
                                        type: "spring",
                                        bounce: 0,
                                        duration: 0.7,
                                        delayChildren: 0.3,
                                        staggerChildren: 0.1
                                    }
                                },
                                closed: {
                                    opacity: 0,
                                    height: 0,
                                    transition: {
                                        type: "spring",
                                        bounce: 0,
                                        duration: 0.3
                                    }
                                }
                            }}
                            className="absolute top-0 left-0 w-full bg-[#0a0a12] md:hidden flex flex-col items-center justify-center gap-8 overflow-hidden"
                            style={{ top: "0", height: "100vh", position: "fixed", zIndex: 9999 }}
                        >


                            {navLinks.map((link) => (
                                <motion.div
                                    key={link.name}
                                    variants={{
                                        open: {
                                            opacity: 1,
                                            y: 0,
                                            transition: { type: "spring", stiffness: 300, damping: 24 }
                                        },
                                        closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
                                    }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white hover:from-[#D4ADFC] hover:to-[#8C37DB] transition-all"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                variants={{
                                    open: {
                                        opacity: 1,
                                        y: 0,
                                        transition: { type: "spring", stiffness: 300, damping: 24 }
                                    },
                                    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
                                }}
                            >
                                <Link
                                    href="#contact"
                                    onClick={() => setIsOpen(false)}
                                    className="px-10 py-4 rounded-full bg-gradient-to-r from-[#8C37DB] to-[#262262] text-white font-bold text-xl shadow-lg hover:shadow-[#8C37DB]/50 transition-shadow"
                                >
                                    Let's Talk
                                </Link>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
