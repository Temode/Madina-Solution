'use client';

import Link from 'next/link';
import AnnouncementCard from '@/components/ui/AnnouncementCard';
import { announcements } from '@/data/announcements';

export default function RecentAnnouncements() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Annonces récentes
            </h2>
            <p className="text-gray-600">
              Découvrez les nouveaux profils disponibles
            </p>
          </div>
          <Link
            href="/annonces"
            className="flex items-center text-blue-600 hover:text-blue-700 font-medium group"
          >
            <span>Voir plus</span>
            <svg
              className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

        {/* Announcements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {announcements.map((announcement) => (
            <AnnouncementCard key={announcement.id} announcement={announcement} />
          ))}
        </div>
      </div>
    </section>
  );
}
