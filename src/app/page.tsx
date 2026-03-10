import Hero from '@/components/Hero';
import Brands from '@/components/Brands';
import Services from '@/components/Services';
import About from '@/components/About';
import Process from '@/components/Process';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <main className="min-h-screen bg-cream text-ink overflow-hidden">
            <Hero />
            <Brands />
            <Services />
            <About />
            <Process />
            <Portfolio />
            <Testimonials />
            <Contact />
            <Footer />
        </main>
    );
}
