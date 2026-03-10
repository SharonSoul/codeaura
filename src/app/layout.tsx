import type { Metadata } from 'next';
import { Outfit, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import CursorFollower from '@/components/CursorFollower';
import ScrollProgress from '@/components/ScrollProgress';

const outfit = Outfit({
    subsets: ['latin'],
    variable: '--font-outfit',
    display: 'swap',
});

const cormorant = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    style: ['normal', 'italic'],
    variable: '--font-cormorant',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'CodeAura | Full-Spectrum Tech Agency',
    description: 'CodeAura is a full-spectrum tech agency led by Sharon Olaitan. We design, develop, secure, and grow digital products that define industries.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${outfit.variable} ${cormorant.variable} font-sans`}>
                <CursorFollower />
                <ScrollProgress />
                <Navbar />
                {children}
            </body>
        </html>
    );
}
