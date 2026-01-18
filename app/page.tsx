import Header from "@/components/layout/Header"
import HeroSection from "@/components/sections/hero_section/HeroSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-1">
        <HeroSection />
        {/* Votre contenu ici */}
      </main>
    </div>
  );
}
