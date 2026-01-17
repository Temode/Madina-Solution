'use client';

import { useState } from 'react';
import { Search, MapPin, Grid3x3, Sparkles, Users, Award, TrendingUp } from 'lucide-react';

export default function Hero() {
  const [service, setService] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('all');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ service, location, category });
  };

  const stats = [
    { icon: Users, label: '1000+ Professionnels', value: '1000+' },
    { icon: Award, label: 'Services vérifiés', value: '100%' },
    { icon: TrendingUp, label: 'Satisfaction client', value: '98%' },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-24 lg:pt-32">
      {/* Background avec dégradé sophistiqué */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-10"></div>
        {/* Effets de lumière */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600 rounded-full blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-purple rounded-full blur-3xl opacity-15 animate-float" style={{ animationDelay: '1s' }}></div>
        {/* Grille de fond */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-950/50"></div>
      </div>

      <div className="relative container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white/90">
              <Sparkles className="w-4 h-4 text-accent-yellow" />
              <span className="text-sm font-medium">Plateforme N°1 en Guinée</span>
            </div>
          </div>

          {/* Titre principal */}
          <div className="text-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-display-md md:text-display-lg lg:text-display-xl font-display text-white mb-6 leading-tight">
              Trouvez des professionnels
              <br />
              <span className="bg-gradient-to-r from-accent-yellow via-accent-orange to-accent-orange bg-clip-text text-transparent">
                qualifiés
              </span>{' '}
              près de chez vous
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
              La plateforme de référence pour la mise en relation entre clients et ouvriers
              qualifiés. Plomberie, électricité, BTP, informatique — trouvez le bon professionnel
              en quelques clics.
            </p>
          </div>

          {/* Barre de recherche premium */}
          <form
            onSubmit={handleSearch}
            className="max-w-5xl mx-auto mb-16 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="bg-white rounded-3xl shadow-soft-xl p-2 backdrop-blur-xl">
              <div className="flex flex-col lg:flex-row gap-2">
                {/* Service Search */}
                <div className="flex-1 group">
                  <div className="relative flex items-center gap-3 px-5 py-4 rounded-2xl bg-neutral-50 group-hover:bg-white transition-all duration-200">
                    <Search className="w-5 h-5 text-primary-500 flex-shrink-0" />
                    <div className="flex-1">
                      <label className="block text-xs font-medium text-neutral-500 mb-1">
                        Quel service ?
                      </label>
                      <input
                        type="text"
                        placeholder="Ex: Électricien, Plombier..."
                        className="w-full bg-transparent outline-none text-neutral-900 placeholder:text-neutral-400 font-medium"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex-1 group">
                  <div className="relative flex items-center gap-3 px-5 py-4 rounded-2xl bg-neutral-50 group-hover:bg-white transition-all duration-200">
                    <MapPin className="w-5 h-5 text-accent-orange flex-shrink-0" />
                    <div className="flex-1">
                      <label className="block text-xs font-medium text-neutral-500 mb-1">
                        Où ?
                      </label>
                      <input
                        type="text"
                        placeholder="Ex: Conakry, Kindia..."
                        className="w-full bg-transparent outline-none text-neutral-900 placeholder:text-neutral-400 font-medium"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* Category */}
                <div className="flex-1 group">
                  <div className="relative flex items-center gap-3 px-5 py-4 rounded-2xl bg-neutral-50 group-hover:bg-white transition-all duration-200">
                    <Grid3x3 className="w-5 h-5 text-accent-green flex-shrink-0" />
                    <div className="flex-1">
                      <label className="block text-xs font-medium text-neutral-500 mb-1">
                        Catégorie
                      </label>
                      <select
                        className="w-full bg-transparent outline-none text-neutral-900 font-medium cursor-pointer"
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
                  </div>
                </div>

                {/* Search Button */}
                <div className="lg:w-auto">
                  <button
                    type="submit"
                    className="w-full lg:w-auto btn-primary h-full px-10 rounded-2xl text-base font-semibold shadow-glow"
                  >
                    <Search className="w-5 h-5" />
                    <span className="hidden lg:inline">Rechercher</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Suggestions */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm text-white/70">
              <span className="font-medium">Populaires:</span>
              {['Électricien', 'Plombier', 'Maçon', 'Développeur'].map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setService(tag)}
                  className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 transition-all duration-200 backdrop-blur-sm"
                >
                  {tag}
                </button>
              ))}
            </div>
          </form>

          {/* Stats */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative flex items-center gap-4">
                    <div className="p-3 bg-white/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-sm text-white/70 font-medium">{stat.label}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Vague décorative en bas */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-16 md:h-24 text-neutral-50"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </section>
  );
}
