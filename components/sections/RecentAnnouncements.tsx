'use client';

import Link from 'next/link';
import AnnouncementCard from '@/components/ui/AnnouncementCard';
import { announcements } from '@/data/announcements';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function RecentAnnouncements() {
  return (
    <section className="section bg-neutral-50">
      <div className="container-custom">
        {/* Header avec design amélioré */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-100 rounded-full text-primary-700 text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Nouveaux profils</span>
            </div>
            <h2 className="text-display-sm md:text-display-md font-display text-neutral-900 mb-3">
              Annonces récentes
            </h2>
            <p className="text-lg text-neutral-600 font-light">
              Découvrez les professionnels qualifiés qui viennent de rejoindre notre plateforme
            </p>
          </div>

          <Link
            href="/annonces"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-primary-50 border-2 border-neutral-200 hover:border-primary-500 rounded-xl font-semibold text-neutral-900 hover:text-primary-600 transition-all duration-200 self-start md:self-auto"
          >
            <span>Voir tout</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grille d'annonces avec responsive professionnel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {announcements.map((announcement, index) => (
            <div
              key={announcement.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AnnouncementCard announcement={announcement} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
