'use client';

import { motion } from 'framer-motion';

const brands = [
    'Paystack', 'Flutterwave', 'Kuda Bank', 'Andela', 'PiggyVest',
    'Jumia', 'Cowrywise', 'Interswitch', 'Moniepoint', 'Sabi',
    'TechCabal', 'Ventures Platform', 'Mono', 'Nomba', 'Risevest',
    'Carbon', 'OPay', 'TeamApt', 'Chipper Cash', 'FairMoney',
];

export default function Brands() {
    return (
        <section className="py-16 bg-mist overflow-hidden border-y border-ink/5">
            <div className="text-center mb-10">
                <span className="text-xs text-ink/40 uppercase tracking-[0.25em] font-semibold">
                    Trusted by Ambitious Brands
                </span>
            </div>
            <div
                className="relative flex overflow-hidden"
                style={{ maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)' }}
            >
                <motion.div
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{ ease: 'linear', duration: 28, repeat: Infinity }}
                    className="flex gap-14 items-center whitespace-nowrap"
                >
                    {[...brands, ...brands].map((brand, i) => (
                        <span
                            key={i}
                            className="text-lg font-bold text-ink/15 hover:text-ink/35 transition-colors cursor-default select-none tracking-tight"
                        >
                            {brand}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
