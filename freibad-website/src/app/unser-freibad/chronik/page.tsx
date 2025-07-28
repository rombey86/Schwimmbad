import { Metadata } from 'next';
import Link from 'next/link';
import { chronikEvents, getCategoryLabel, getCategoryColor } from '@/data/chronik';

export const metadata: Metadata = {
  title: 'Chronik',
  description: 'Die Geschichte unseres Freibads - wichtige Meilensteine von der Gründung bis heute',
};

export default function ChronikPage() {
  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        text: 'text-blue-600',
        dot: 'bg-blue-600'
      },
      green: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        text: 'text-green-600',
        dot: 'bg-green-600'
      },
      orange: {
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        text: 'text-orange-600',
        dot: 'bg-orange-600'
      },
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        text: 'text-purple-600',
        dot: 'bg-purple-600'
      },
      gray: {
        bg: 'bg-gray-50',
        border: 'border-gray-200',
        text: 'text-gray-600',
        dot: 'bg-gray-600'
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.gray;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('de-DE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getYear = (dateString: string) => {
    return new Date(dateString).getFullYear();
  };
  // Gruppiere Events nach Jahrzehnten
  /*const groupEventsByDecade = () => {
    const decades: { [key: string]: typeof chronikEvents } = {};
    
    chronikEvents.forEach(event => {
      const year = getYear(event.date);
      const decade = Math.floor(year / 10) * 10;
      const decadeKey = `${decade}er`;
      
      if (!decades[decadeKey]) {
        decades[decadeKey] = [];
      }
      decades[decadeKey].push(event);
    });

    return decades;
  };*/

  //const decades = groupEventsByDecade();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-600 transition-colors duration-200">
              Startseite
            </Link>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            <Link href="/unser-freibad" className="hover:text-blue-600 transition-colors duration-200">
              Unser Freibad
            </Link>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-900">Chronik</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Chronik unseres Freibads
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
              Eine Reise durch über 50 Jahre Freibadgeschichte - 
              von den ersten Planungen bis zur geplanten Modernisierung.
            </p>
          </div>
        </div>
      </div>

      {/* Legende */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-blue-600 rounded-full mr-2"></div>
              <span className="text-sm text-gray-700">Meilenstein</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-600 rounded-full mr-2"></div>
              <span className="text-sm text-gray-700">Entscheidung</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-orange-600 rounded-full mr-2"></div>
              <span className="text-sm text-gray-700">Baumaßnahme</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-purple-600 rounded-full mr-2"></div>
              <span className="text-sm text-gray-700">Ereignis</span>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertikale Linie */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>

            <div className="space-y-12">
              {chronikEvents.map((event, index) => {
                const color = getCategoryColor(event.category);
                const colorClasses = getColorClasses(color);
                const isEven = index % 2 === 0;

                return (
                  <div key={event.id} className="relative">
                    {/* Timeline Dot */}
                    <div className={`absolute left-6 w-4 h-4 ${colorClasses.dot} rounded-full border-4 border-white shadow-lg z-10`}></div>

                    {/* Content */}
                    <div className={`ml-16 ${isEven ? 'md:ml-16' : 'md:ml-16'}`}>
                      <div className={`bg-white rounded-xl shadow-md p-6 ${colorClasses.border} border-l-4 hover:shadow-lg transition-shadow duration-300`}>
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                          <div className="flex items-center mb-2 sm:mb-0">
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${colorClasses.bg} ${colorClasses.text} mr-3`}>
                              {getCategoryLabel(event.category)}
                            </span>
                            <time className="text-sm text-gray-500 font-medium">
                              {formatDate(event.date)}
                            </time>
                          </div>
                          <div className="text-2xl font-bold text-gray-400">
                            {getYear(event.date)}
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {event.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-700 leading-relaxed mb-4">
                          {event.description}
                        </p>

                        {/* Link */}
                        {event.link && (
                          <Link
                            href={event.link}
                            className={`inline-flex items-center ${colorClasses.text} hover:underline font-medium`}
                          >
                            Mehr erfahren
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Statistiken */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Unsere Geschichte in Zahlen
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                {chronikEvents.length}
              </div>
              <div className="text-gray-600 font-medium">Ereignisse</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
                {getYear(chronikEvents[chronikEvents.length - 1].date) - getYear(chronikEvents[0].date)}
              </div>
              <div className="text-gray-600 font-medium">Jahre Geschichte</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
                {chronikEvents.filter(e => e.category === 'construction').length}
              </div>
              <div className="text-gray-600 font-medium">Baumaßnahmen</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">
                {chronikEvents.filter(e => e.category === 'milestone').length}
              </div>
              <div className="text-gray-600 font-medium">Meilensteine</div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Mehr über unser Freibad erfahren
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/unser-freibad/fakten-zahlen"
              className="flex items-center p-6 bg-white rounded-xl hover:bg-gray-50 transition-colors duration-200 group"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-orange-200 transition-colors duration-200">
                <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Fakten & Zahlen</h3>
                <p className="text-sm text-gray-600">Alle wichtigen Daten zu unserem Freibad</p>
              </div>
              <svg className="w-5 h-5 text-gray-400 ml-auto group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>

            <Link
              href="/unser-freibad/galerie"
              className="flex items-center p-6 bg-white rounded-xl hover:bg-gray-50 transition-colors duration-200 group"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors duration-200">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Galerie</h3>
                <p className="text-sm text-gray-600">Bilder aus verschiedenen Epochen</p>
              </div>
              <svg className="w-5 h-5 text-gray-400 ml-auto group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}