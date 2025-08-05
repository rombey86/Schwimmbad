import Link from 'next/link';
import Image from 'next/image';
import { heroStats } from '@/data/config';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
      {/* Hintergrund-Pattern */}
      <div className="absolute inset-0">
        <Image
          src="/images/Freibad_Niederkrüchten_Bahnen_2017-scaled.jpg"
          alt="Freibad Niederkrüchten"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
          priority
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hauptinhalt */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Unser Freibad
              <span className="block text-blue-200">braucht Sie!</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Gemeinsam retten wir unser Freibad und sichern die Zukunft der Freibadkultur 
              in unserer Gemeinde. Jede Stimme zählt!
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link
                href="/unterstuetzen"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                Jetzt unterstützen
              </Link>
              
              <Link
                href="/buergerentscheid"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-700 transition-all duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Zur Abstimmungsgrafik
              </Link>
            </div>
          </div>

          {/* Statistiken */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <div className="text-3xl md:text-4xl font-bold text-blue-100 mb-2">
                {heroStats.foerdersumme}
              </div>
              <div className="text-blue-200 font-medium">
                Fördersumme
              </div>
              <div className="text-base text-blue-300 mt-2">
                Für die Modernisierung
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <div className="text-3xl md:text-4xl font-bold text-blue-100 mb-2">
                {heroStats.abstimmungsergebnis}
              </div>
              <div className="text-blue-200 font-medium">
                {heroStats.jaStimmen}
              </div>
              <div className="text-base text-blue-300 mt-2">
                beim Bürgerentscheid
              </div>
            </div>

            <div className="sm:col-span-2 bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <div className="flex items-center justify-center mb-3">
                <svg className="w-8 h-8 text-blue-200 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-lg font-semibold text-blue-100">
                  Gemeinsam stark für unser Freibad
                </span>
              </div>
              <p className="text-blue-300 text-sm">
                Mit Ihrer Unterstützung sichern wir die Zukunft unseres Freibads 
                und erhalten ein wichtiges Stück Lebensqualität für alle Generationen.
              </p>
            </div>
          </div>
        </div>

        {/* Scroll-Indikator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}