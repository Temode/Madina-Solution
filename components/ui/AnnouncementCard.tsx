'use client';

import { useState } from 'react';
import { Announcement } from '@/types';
import { MapPin, Phone, MessageCircle, Heart, Eye, Zap } from 'lucide-react';

interface AnnouncementCardProps {
  announcement: Announcement;
}

export default function AnnouncementCard({ announcement }: AnnouncementCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="card-interactive group">
      {/* Image Container avec overlay gradient */}
      <div className="relative h-56 overflow-hidden rounded-t-2xl bg-gradient-to-br from-primary-100 via-primary-50 to-accent-orange/10">
        {/* Placeholder pour l'image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-white shadow-soft flex items-center justify-center">
              <span className="text-3xl">👷</span>
            </div>
            <p className="text-sm text-neutral-500 font-medium">Photo à venir</p>
          </div>
        </div>

        {/* Overlay au survol */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

        {/* Badge Urgent */}
        {announcement.isUrgent && (
          <div className="absolute top-4 left-4">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-red-500 to-accent-orange rounded-full text-white text-xs font-bold shadow-lg animate-bounce-subtle">
              <Zap className="w-3 h-3 fill-current" />
              <span>URGENT</span>
            </div>
          </div>
        )}

        {/* Bouton favori */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
          className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-soft hover:shadow-soft-md transition-all duration-200 hover:scale-110 active:scale-95"
        >
          <Heart
            className={`w-5 h-5 transition-all duration-200 ${
              isFavorite
                ? 'fill-red-500 text-red-500 scale-110'
                : 'text-neutral-600'
            }`}
          />
        </button>

        {/* Compteur de vues */}
        <div className="absolute bottom-4 right-4">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-neutral-700 text-xs font-semibold shadow-soft">
            <Eye className="w-3.5 h-3.5" />
            <span>{announcement.views.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Titre */}
        <h3 className="text-lg font-bold text-neutral-900 mb-3 line-clamp-2 min-h-[3.5rem] group-hover:text-primary-600 transition-colors">
          {announcement.title}
        </h3>

        {/* Localisation */}
        <div className="flex items-center gap-2 mb-5 text-neutral-600">
          <div className="p-1.5 bg-accent-orange/10 rounded-lg">
            <MapPin className="w-4 h-4 text-accent-orange" />
          </div>
          <span className="text-sm font-medium">
            {announcement.location}, <span className="text-neutral-500">{announcement.city}</span>
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button className="flex-1 btn-secondary group/btn">
            <Phone className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
            <span className="text-sm">Appeler</span>
          </button>
          <button className="flex-1 btn-primary">
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm">Message</span>
          </button>
        </div>
      </div>

      {/* Barre de couleur en bas pour la variété */}
      <div className="h-1 bg-gradient-to-r from-primary-500 via-accent-orange to-accent-yellow"></div>
    </div>
  );
}
