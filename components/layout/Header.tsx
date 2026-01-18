'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-blue-600 text-white w-9 h-9 rounded flex items-center justify-center font-bold text-lg">
              M
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-semibold text-gray-900">adina</span>
              <span className="text-sm text-gray-500">Solution</span>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/btp" className="text-gray-700 hover:text-blue-600 font-medium">
              BTP
            </Link>
            <Link href="/informatique" className="text-gray-700 hover:text-blue-600 font-medium">
              Informatique
            </Link>
            <Link href="/autres" className="text-gray-700 hover:text-blue-600 font-medium">
              Autres
            </Link>
          </nav>

          {/* Actions Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/connexion" className="text-gray-700 hover:text-blue-600 font-medium">
              Se connecter
            </Link>
            <Link
              href="/publier"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 flex items-center gap-2"
            >
              <span className="text-lg">+</span>
              <span>Publier une annonce</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col gap-4">
              <Link href="/btp" className="text-gray-700 hover:text-blue-600 font-medium">
                BTP
              </Link>
              <Link href="/informatique" className="text-gray-700 hover:text-blue-600 font-medium">
                Informatique
              </Link>
              <Link href="/autres" className="text-gray-700 hover:text-blue-600 font-medium">
                Autres
              </Link>
              <Link href="/connexion" className="text-gray-700 hover:text-blue-600 font-medium">
                Se connecter
              </Link>
              <Link
                href="/publier"
                className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium text-center"
              >
                + Publier une annonce
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
