import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <main className="min-h-screen bg-[#0a0a12] text-white overflow-hidden">
            <Hero />
            <Services />
            <Process />
            <Portfolio />
            <Testimonials />
            <Contact />
            <Footer />
        </main>
    );
}
