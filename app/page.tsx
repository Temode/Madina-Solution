import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import RecentAnnouncements from '@/components/sections/RecentAnnouncements';
import DigitalProducts from '@/components/sections/DigitalProducts';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <RecentAnnouncements />
        <DigitalProducts />
      </main>
      <Footer />
    </div>
  );
}
