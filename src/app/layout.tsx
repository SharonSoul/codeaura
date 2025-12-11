import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'CodeAura Studios | Digital Alchemy',
    description: 'Premium software development and design studio specializing in web, app, and brand experiences.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={outfit.className}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
