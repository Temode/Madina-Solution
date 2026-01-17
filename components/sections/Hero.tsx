'use client';

import { useState } from 'react';

export default function Hero() {
  const [service, setService] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('all');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique de recherche à implémenter
    console.log({ service, location, category });
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 md:py-32">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Trouvez des professionnels<br />
            qualifiés près de chez vous
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            Madina Solution est la plateforme de référence en Guinée pour la mise en
            relation entre clients et ouvriers qualifiés. Plomberie, électricité, BTP,
            informatique — trouvez le bon professionnel en quelques clics.
          </p>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-2xl p-4 md:p-6">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Service Search */}
              <div className="flex-1 flex items-center border border-gray-200 rounded-lg px-4 py-3 bg-white">
                <svg
                  className="w-5 h-5 text-gray-400 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Rechercher un service"
                  className="flex-1 outline-none text-gray-700"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                />
              </div>

              {/* Location */}
              <div className="flex-1 flex items-center border border-gray-200 rounded-lg px-4 py-3 bg-white">
                <svg
                  className="w-5 h-5 text-gray-400 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Localisation..."
                  className="flex-1 outline-none text-gray-700"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>

              {/* Category Dropdown */}
              <div className="flex-1 flex items-center border border-gray-200 rounded-lg px-4 py-3 bg-white">
                <svg
                  className="w-5 h-5 text-gray-400 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <select
                  className="flex-1 outline-none text-gray-700 bg-transparent cursor-pointer"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="all">Toutes catégories</option>
                  <option value="btp">Bâtiment et Construction</option>
                  <option value="electricite">Électricité</option>
                  <option value="plomberie">Plomberie</option>
                  <option value="climatisation">Climatisation</option>
                  <option value="informatique">Informatique</option>
                  <option value="menage">Ménage</option>
                  <option value="autres">Autres</option>
                </select>
              </div>

              {/* Search Button */}
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap"
              >
                Rechercher
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
