import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 text-white px-3 py-1 rounded font-bold text-xl">
                M
              </div>
              <span className="ml-2 text-xl font-semibold text-white">adina</span>
            </div>
            <p className="text-sm mb-4 text-gray-400">
              Plateforme de mise en relation entre clients et professionnels qualifiés en Guinée.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>(+224) 628-44-03-60</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <span>Lambangui, Conakry, Rep.Guinée</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>contact@madinasolution.com</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <p className="text-sm font-semibold mb-3">Suivez nos réseaux sociaux</p>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16.98 0a6.9 6.9 0 01-5.08 1.98A7.05 7.05 0 003.03 8.9c0 .35.04.7.1 1.03A19.83 19.83 0 012.88 5.04a7.09 7.09 0 00-.96 3.57c0 2.43 1.24 4.58 3.1 5.84a6.96 6.96 0 01-3.16-.87v.09c0 3.39 2.41 6.23 5.61 6.87a7.02 7.02 0 01-3.16.12 7.03 7.03 0 006.56 4.87A14.1 14.1 0 010 21.54a19.93 19.93 0 0010.8 3.16c12.96 0 20.05-10.73 20.05-20.04 0-.31 0-.61-.02-.91A14.37 14.37 0 0024 1.79a14.02 14.02 0 01-4.03 1.1A7.03 7.03 0 0023.34.3a14.05 14.05 0 01-4.45 1.7A7 7 0 0011.82 8.4 19.91 19.91 0 011.64 1.16 7.03 7.03 0 003.8 10.6a6.96 6.96 0 01-3.16-.87v.09c0 3.39 2.41 6.23 5.61 6.87a7.02 7.02 0 01-3.16.12 7.03 7.03 0 006.56 4.87A14.1 14.1 0 010 21.54a19.93 19.93 0 0010.8 3.16" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Liens utiles */}
          <div>
            <h3 className="text-white font-semibold mb-4">Liens utiles</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/a-propos" className="hover:text-blue-400 transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/equipe" className="hover:text-blue-400 transition-colors">
                  Notre équipe
                </Link>
              </li>
            </ul>
          </div>

          {/* Catégories */}
          <div>
            <h3 className="text-white font-semibold mb-4">Catégories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/categories/batiment" className="hover:text-blue-400 transition-colors">
                  Bâtiment et Construction
                </Link>
              </li>
              <li>
                <Link href="/categories/reparation" className="hover:text-blue-400 transition-colors">
                  Réparation
                </Link>
              </li>
              <li>
                <Link href="/categories/climatisation" className="hover:text-blue-400 transition-colors">
                  Climatisation
                </Link>
              </li>
              <li>
                <Link href="/categories/informatique" className="hover:text-blue-400 transition-colors">
                  Informatique
                </Link>
              </li>
            </ul>
          </div>

          {/* Annonces récentes */}
          <div>
            <h3 className="text-white font-semibold mb-4">Annonces les plus récentes</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/annonces/1" className="hover:text-blue-400 transition-colors flex items-center">
                  <span className="mr-2">→</span>
                  Frigoriste à Koundara
                </Link>
              </li>
              <li>
                <Link href="/annonces/2" className="hover:text-blue-400 transition-colors flex items-center">
                  <span className="mr-2">→</span>
                  Cabinet des travaux...
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-700 pt-8 text-center text-sm">
          <p>© 2024 Madina Solution. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
