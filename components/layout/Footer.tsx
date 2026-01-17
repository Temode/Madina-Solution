import Link from 'next/link';
import { Phone, MapPin, Mail, Facebook, Twitter, Instagram, ArrowRight, Heart } from 'lucide-react';

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
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:bg-sky-500' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-pink-600' },
  ];

  return (
    <footer className="bg-neutral-900 text-neutral-300 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-950"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl"></div>

      <div className="relative container-custom">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-4">
              <Link href="/" className="inline-flex items-center gap-3 group mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative bg-gradient-to-br from-primary-600 to-primary-700 text-white w-12 h-12 rounded-2xl flex items-center justify-center font-display font-bold text-xl shadow-soft-md">
                    M
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-2xl font-bold text-white tracking-tight">
                    adina
                  </span>
                  <span className="text-xs text-neutral-500 font-medium tracking-wide -mt-1">
                    SOLUTION
                  </span>
                </div>
              </Link>

              <p className="text-neutral-400 mb-6 leading-relaxed">
                La plateforme de référence pour connecter clients et professionnels qualifiés en
                Guinée. Plomberie, électricité, BTP, informatique et plus encore.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a
                  href="tel:+224628440360"
                  className="flex items-center gap-3 text-sm text-neutral-400 hover:text-white transition-colors group"
                >
                  <div className="p-2 bg-neutral-800 rounded-lg group-hover:bg-primary-600 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>(+224) 628-44-03-60</span>
                </a>
                <a
                  href="mailto:contact@madinasolution.com"
                  className="flex items-center gap-3 text-sm text-neutral-400 hover:text-white transition-colors group"
                >
                  <div className="p-2 bg-neutral-800 rounded-lg group-hover:bg-primary-600 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>contact@madinasolution.com</span>
                </a>
                <div className="flex items-start gap-3 text-sm text-neutral-400">
                  <div className="p-2 bg-neutral-800 rounded-lg">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>Lambangui, Conakry<br />République de Guinée</span>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-2">
              <h3 className="text-white font-display font-semibold text-lg mb-6">Entreprise</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-neutral-400 hover:text-white transition-colors inline-flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h3 className="text-white font-display font-semibold text-lg mb-6">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-neutral-400 hover:text-white transition-colors inline-flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h3 className="text-white font-display font-semibold text-lg mb-6">Support</h3>
              <ul className="space-y-3 mb-8">
                {footerLinks.support.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-neutral-400 hover:text-white transition-colors inline-flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Social Links */}
              <div>
                <p className="text-white font-semibold mb-4">Suivez-nous</p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        className={`w-11 h-11 bg-neutral-800 rounded-xl flex items-center justify-center ${social.color} transition-all duration-200 hover:scale-110 hover:-translate-y-1 group`}
                        aria-label={social.label}
                      >
                        <Icon className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-neutral-500">
              © {currentYear} Madina Solution. Tous droits réservés.
            </p>
            <p className="text-sm text-neutral-500 flex items-center gap-1.5">
              Fait avec <Heart className="w-4 h-4 text-red-500 fill-current animate-bounce-subtle" /> en Guinée
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
