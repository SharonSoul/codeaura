import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-[#050509] border-t border-white/5 py-16">
            <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
                <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="relative w-8 h-8">
                            <Image
                                src="/codeaura_icon_nobg.png"
                                alt="CodeAura Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#8C37DB]">
                            CodeAura Studios
                        </h2>
                    </div>
                    <p className="text-gray-500 max-w-sm mb-6">
                        Where code meets creativity. We build the future of digital experiences.
                    </p>
                    <div className="flex gap-4">
                        {/* Social Placeholders */}
                        <div className="w-10 h-10 rounded-full bg-white/5"></div>
                        <div className="w-10 h-10 rounded-full bg-white/5"></div>
                        <div className="w-10 h-10 rounded-full bg-white/5"></div>
                    </div>
                </div>

                <div>
                    <h3 className="font-bold mb-6">Services</h3>
                    <ul className="space-y-4 text-gray-400 text-sm">
                        <li><a href="#" className="hover:text-[#8C37DB]">Web Development</a></li>
                        <li><a href="#" className="hover:text-[#8C37DB]">App Design</a></li>
                        <li><a href="#" className="hover:text-[#8C37DB]">Brand Identity</a></li>
                        <li><a href="#" className="hover:text-[#8C37DB]">SEO & Strategy</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold mb-6">Company</h3>
                    <ul className="space-y-4 text-gray-400 text-sm">
                        <li><a href="#about" className="hover:text-[#8C37DB]">About Us</a></li>
                        <li><a href="#work" className="hover:text-[#8C37DB]">Our Work</a></li>
                        <li><a href="#" className="hover:text-[#8C37DB]">Careers</a></li>
                        <li><a href="#contact" className="hover:text-[#8C37DB]">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="max-w-[1200px] mx-auto px-6 mt-16 pt-8 border-t border-white/5 text-center text-gray-600 text-sm">
                &copy; {new Date().getFullYear()} CodeAura Studios. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
