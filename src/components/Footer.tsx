import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

const services = ['UI/UX Design', 'Web Development', 'App Development', 'Digital Marketing', 'Tech Writing', 'Cybersecurity'];
const company = ['About', 'Work', 'Process', 'Contact'];

export default function Footer() {
    return (
        <footer className="bg-navy text-white">
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    <div className="md:col-span-2">
                        <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
                            <div className="w-10 h-10 rounded-xl bg-electric flex items-center justify-center group-hover:bg-coral transition-colors">
                                <span className="text-white font-bold text-sm">CA</span>
                            </div>
                            <span className="text-xl font-bold text-white tracking-tight">
                                Code<span className="text-electric">Aura</span>
                            </span>
                        </Link>
                        <p className="text-white/45 max-w-xs leading-relaxed mb-6 text-sm">
                            Full-spectrum tech agency built for ambitious brands.
                            Design, development, marketing, and security â€” we build what moves the world.
                        </p>
                        <div className="flex items-center gap-2 text-sm">
                            <span className="text-white/35">Founded by</span>
                            <span className="text-white font-semibold">Sharon Olaitan</span>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-white/35 mb-5">Services</h4>
                        <ul className="space-y-3">
                            {services.map(s => (
                                <li key={s}>
                                    <a href="#services" className="text-sm text-white/55 hover:text-electric transition-colors">{s}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-white/35 mb-5">Company</h4>
                        <ul className="space-y-3 mb-8">
                            {company.map(c => (
                                <li key={c}>
                                    <a href={`#${c.toLowerCase()}`} className="text-sm text-white/55 hover:text-electric transition-colors">{c}</a>
                                </li>
                            ))}
                        </ul>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-white/35 mb-5">Follow</h4>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="https://tiktok.com/@sharon_olaitan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-white/55 hover:text-electric transition-colors flex items-center gap-1.5"
                                >
                                    TikTok @sharon_olaitan <ExternalLink size={12} />
                                </a>
                            </li>
                            <li><a href="#" className="text-sm text-white/55 hover:text-electric transition-colors">Instagram</a></li>
                            <li><a href="#" className="text-sm text-white/55 hover:text-electric transition-colors">LinkedIn</a></li>
                            <li><a href="#" className="text-sm text-white/55 hover:text-electric transition-colors">Twitter / X</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/25">
                    <span>&copy; {new Date().getFullYear()} CodeAura. All rights reserved.</span>
                    <span>Crafted with precision by the CodeAura team.</span>
                </div>
            </div>
        </footer>
    );
}
