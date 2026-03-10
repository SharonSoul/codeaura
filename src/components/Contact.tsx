'use client';

import { motion } from 'framer-motion';
import { Send, MapPin, Mail, ExternalLink } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-28 bg-cream relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-coral/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left — Info */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
                    >
                        <div className="overflow-hidden mb-3">
                            <motion.span
                                variants={{
                                    hidden: { y: '120%', opacity: 0 },
                                    visible: { y: '0%', opacity: 1, transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } },
                                }}
                                className="text-sm text-electric font-medium uppercase tracking-[0.2em] block"
                            >
                                Get In Touch
                            </motion.span>
                        </div>
                        <div className="overflow-hidden mb-6">
                            <motion.div
                                variants={{
                                    hidden: { y: '110%' },
                                    visible: { y: '0%', transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] } },
                                }}
                                className="text-4xl md:text-6xl font-bold text-ink leading-tight"
                            >
                                Let&apos;s Build
                            </motion.div>
                        </div>
                        <div className="overflow-hidden mb-6">
                            <motion.div
                                variants={{
                                    hidden: { y: '110%' },
                                    visible: { y: '0%', transition: { duration: 0.85, delay: 0.07, ease: [0.76, 0, 0.24, 1] } },
                                }}
                                className="text-4xl md:text-6xl font-bold text-ink leading-tight"
                            >
                                <span className="font-display italic font-normal text-electric">Something Real.</span>
                            </motion.div>
                        </div>
                        <motion.p
                            variants={{
                                hidden: { opacity: 0, y: 16 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                            }}
                            className="text-ink/55 text-lg leading-relaxed mb-10"
                        >
                            Ready to take your product to the next level? Tell us about your project
                            and let&apos;s get to work.
                        </motion.p>

                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.08 } },
                            }}
                            className="space-y-4"
                        >
                            <a
                                href="mailto:hello@codeaura.io"
                                className="flex items-center gap-3 text-ink/60 hover:text-electric transition-colors group"
                            >
                                <div className="w-10 h-10 rounded-xl bg-electric/8 flex items-center justify-center group-hover:bg-electric/15 transition-colors flex-shrink-0">
                                    <Mail size={18} className="text-electric" />
                                </div>
                                hello@codeaura.io
                            </a>
                            <div className="flex items-center gap-3 text-ink/55">
                                <div className="w-10 h-10 rounded-xl bg-electric/8 flex items-center justify-center flex-shrink-0">
                                    <MapPin size={18} className="text-electric" />
                                </div>
                                Lagos, Nigeria · Remote Worldwide
                            </div>
                            <a
                                href="https://tiktok.com/@sharon_olaitan"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-ink/60 hover:text-electric transition-colors group"
                            >
                                <div className="w-10 h-10 rounded-xl bg-electric/8 flex items-center justify-center group-hover:bg-electric/15 transition-colors flex-shrink-0">
                                    <ExternalLink size={18} className="text-electric" />
                                </div>
                                TikTok: @sharon_olaitan
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right — Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                        onSubmit={(e) => e.preventDefault()}
                        className="bg-white rounded-3xl p-8 md:p-10 border border-ink/5 shadow-xl shadow-ink/5"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                            <div>
                                <label className="text-xs font-semibold text-ink/45 uppercase tracking-wider block mb-2">Name</label>
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="w-full bg-cream border border-ink/10 rounded-xl px-4 py-3.5 text-ink text-sm focus:outline-none focus:border-electric transition-colors placeholder:text-ink/30"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-ink/45 uppercase tracking-wider block mb-2">Email</label>
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="w-full bg-cream border border-ink/10 rounded-xl px-4 py-3.5 text-ink text-sm focus:outline-none focus:border-electric transition-colors placeholder:text-ink/30"
                                />
                            </div>
                        </div>
                        <div className="mb-5">
                            <label className="text-xs font-semibold text-ink/45 uppercase tracking-wider block mb-2">Service Needed</label>
                            <select className="w-full bg-cream border border-ink/10 rounded-xl px-4 py-3.5 text-ink text-sm focus:outline-none focus:border-electric transition-colors">
                                <option value="">Choose a service…</option>
                                <option>UI/UX Design</option>
                                <option>Web Development</option>
                                <option>App Development</option>
                                <option>Digital Marketing</option>
                                <option>Tech Writing</option>
                                <option>Cybersecurity</option>
                                <option>Full-Service Partnership</option>
                            </select>
                        </div>
                        <div className="mb-7">
                            <label className="text-xs font-semibold text-ink/45 uppercase tracking-wider block mb-2">Project Brief</label>
                            <textarea
                                rows={4}
                                placeholder="Tell us about your vision, timeline, and budget…"
                                className="w-full bg-cream border border-ink/10 rounded-xl px-4 py-3.5 text-ink text-sm focus:outline-none focus:border-electric transition-colors resize-none placeholder:text-ink/30"
                            />
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            type="submit"
                            className="w-full py-4 rounded-xl bg-electric text-white font-bold text-base hover:bg-coral transition-colors flex items-center justify-center gap-2 group shadow-lg shadow-electric/20"
                        >
                            Send Message
                            <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
