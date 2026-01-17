'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-soft-md'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-primary-600 to-primary-700 text-white w-12 h-12 rounded-2xl flex items-center justify-center font-display font-bold text-xl shadow-soft-md group-hover:shadow-glow transition-all duration-300">
                M
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-2xl font-bold text-neutral-900 tracking-tight group-hover:text-primary-600 transition-colors">
                adina
              </span>
              <span className="text-xs text-neutral-500 font-medium tracking-wide -mt-1">
                SOLUTION
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {[
              { name: 'BTP', href: '/btp', icon: '🏗️' },
              { name: 'Informatique', href: '/informatique', icon: '💻' },
              { name: 'Autres Services', href: '/autres', icon: '⚡' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-5 py-2.5 rounded-xl text-neutral-700 hover:text-primary-600 hover:bg-primary-50 font-medium transition-all duration-200 flex items-center gap-2 group"
              >
                <span className="text-lg group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/connexion"
              className="px-6 py-2.5 text-neutral-700 hover:text-primary-600 font-semibold transition-colors"
            >
              Connexion
            </Link>
            <Link
              href="/publier"
              className="btn-primary group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Publier une annonce
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-neutral-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-neutral-900" />
            ) : (
              <Menu className="w-6 h-6 text-neutral-900" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-neutral-100 bg-white/95 backdrop-blur-xl">
          <div className="container-custom py-6 space-y-4">
            {[
              { name: 'BTP', href: '/btp', icon: '🏗️' },
              { name: 'Informatique', href: '/informatique', icon: '💻' },
              { name: 'Autres Services', href: '/autres', icon: '⚡' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary-50 hover:text-primary-600 transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="font-semibold">{item.name}</span>
              </Link>
            ))}
            <div className="pt-4 border-t border-neutral-100 space-y-3">
              <Link
                href="/connexion"
                className="block px-4 py-3 text-center rounded-xl border-2 border-neutral-200 font-semibold hover:border-primary-500 hover:text-primary-600 transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Connexion
              </Link>
              <Link
                href="/publier"
                className="btn-primary w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Publier une annonce
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
