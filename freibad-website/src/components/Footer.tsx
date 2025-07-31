import Link from 'next/link';
import { contactInfo, siteConfig } from '@/data/config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            {/* Bild-Logo */}
            <div className="w-8 h-8 relative">
              <Image
                src="/images/I-Love-Freibad-Niederkruechten-150px.png"
                alt="Logo Rettet das Freibad Niederkrüchten"
                fill
                style={{ objectFit: "contain" }}
                sizes="32px"
                priority
              />
            </div>

  {/* Text */}
  <span className="text-xl font-bold text-gray-900">Rettet das Freibad Niederkrüchten</span>
</Link>
            <p className="text-gray-300 mb-4 max-w-md">
              Gemeinsam für unser Freibad in Niederkrüchten - 
              Unterstützen Sie uns bei der Rettung und Modernisierung unseres Freibads.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:dirk.zilz@gmx.de"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="E-Mail"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
              <a
                href="https://facebook.com/freibad-schwimmbad"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://instagram.com/freibad-schwimmbad"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm5 8a1 1 0 11-2 0 1 1 0 012 0zm-5-3a3 3 0 100 6 3 3 0 000-6z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <nav aria-label="Footer Navigation">
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Startseite
                  </Link>
                </li>
                <li>
                  <Link href="/buergerentscheid" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Bürgerentscheid
                  </Link>
                </li>
                <li>
                  <Link href="/petition" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Petition
                  </Link>
                </li>
                <li>
                  <Link href="/unterstuetzen" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Unterstützen
                  </Link>
                </li>
                <li>
                  <Link href="/unser-freibad" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Unser Freibad
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <div className="space-y-2 text-gray-300">
              <p>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-white transition-colors duration-200"
                >
                  {contactInfo.email}
                </a>
              </p>
              {contactInfo.phone && (
                <p>
                  <a 
                    href={`tel:${contactInfo.phone}`}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {contactInfo.phone}
                  </a>
                </p>
              )}
              {contactInfo.address && (
                <p className="text-base">{contactInfo.address}</p>
              )}
            </div>
          </div>
        </div>

        {/* Untere Leiste */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap items-center space-x-6 mb-4 md:mb-0">
              <Link 
                href="/impressum"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-base"
              >
                Impressum
              </Link>
              <Link 
                href="/datenschutz"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-base"
              >
                Datenschutz
              </Link>
              <Link 
                href="/sitemap"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-base"
              >
                Sitemap
              </Link>
            </div>
            <p className="text-gray-400 text-sm">
              © {currentYear} Freibad Niederkrüchten. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
