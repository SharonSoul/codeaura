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
                    <div>
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-sm text-electric font-medium uppercase tracking-[0.2em] block mb-3"
                        >
                            Get In Touch
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-bold text-ink mb-6 leading-tight"
                        >
                            Let&apos;s Build
                            <br />
                            <span className="font-display italic font-normal text-electric">Something Real.</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-ink/55 text-lg leading-relaxed mb-10"
                        >
                            Ready to take your product to the next level? Tell us about your project
                            and let&apos;s get to work.
                        </motion.p>

                        <div className="space-y-4">
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
                        </div>
                    </div>

                    {/* Right — Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
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
