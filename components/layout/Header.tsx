'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="bg-blue-600 text-white px-3 py-1 rounded font-bold text-xl">
              M
            </div>
            <span className="ml-2 text-xl font-semibold text-gray-900">adina</span>
            <span className="ml-1 text-sm text-gray-500 font-light">Solution</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/btp"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              BTP
            </Link>
            <Link
              href="/informatique"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Informatique
            </Link>
            <Link
              href="/autres"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Autres
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Link
              href="/connexion"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Se connecter
            </Link>
            <Link
              href="/publier"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              <span className="text-xl">+</span>
              <span>Publier une annonce</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
