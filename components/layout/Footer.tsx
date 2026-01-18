import Link from 'next/link';
import { Phone, MapPin, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'À propos', href: '/a-propos' },
      { name: 'Notre équipe', href: '/equipe' },
      { name: 'Blog', href: '/blog' },
      { name: 'Carrières', href: '/carrieres' },
    ],
    services: [
      { name: 'Bâtiment & Construction', href: '/categories/batiment' },
      { name: 'Informatique', href: '/categories/informatique' },
      { name: 'Réparation', href: '/categories/reparation' },
      { name: 'Climatisation', href: '/categories/climatisation' },
    ],
    support: [
      { name: 'Centre d\'aide', href: '/aide' },
      { name: 'Contact', href: '/contact' },
      { name: 'Conditions générales', href: '/cgv' },
      { name: 'Politique de confidentialité', href: '/confidentialite' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-4">
              <Link href="/" className="inline-flex items-center gap-2 mb-4">
                <div className="bg-blue-600 text-white w-9 h-9 rounded flex items-center justify-center font-bold text-lg">
                  M
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-semibold text-white">adina</span>
                  <span className="text-sm text-gray-400">Solution</span>
                </div>
              </Link>

              <p className="text-gray-400 mb-6">
                La plateforme de référence pour connecter clients et professionnels qualifiés en
                Guinée. Plomberie, électricité, BTP, informatique et plus encore.
              </p>

              {/* Contact Info */}
              <div className="space-y-2">
                <a
                  href="tel:+224628440360"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-white"
                >
                  <Phone className="w-4 h-4" />
                  <span>(+224) 628-44-03-60</span>
                </a>
                <a
                  href="mailto:contact@madinasolution.com"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-white"
                >
                  <Mail className="w-4 h-4" />
                  <span>contact@madinasolution.com</span>
                </a>
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <MapPin className="w-4 h-4 mt-0.5" />
                  <span>Lambangui, Conakry<br />République de Guinée</span>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-2">
              <h3 className="text-white font-semibold text-base mb-4">Entreprise</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h3 className="text-white font-semibold text-base mb-4">Services</h3>
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h3 className="text-white font-semibold text-base mb-4">Support</h3>
              <ul className="space-y-2 mb-6">
                {footerLinks.support.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Social Links */}
              <div>
                <p className="text-white font-semibold text-sm mb-3">Suivez-nous</p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                        aria-label={social.label}
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2">
            <p className="text-sm text-gray-500">
              © {currentYear} Madina Solution. Tous droits réservés.
            </p>
            <p className="text-sm text-gray-500">
              Fait avec ❤️ en Guinée
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
