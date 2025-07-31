'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

// This will be populated with actual newspaper articles
const pressArticles = [
  {
    id: 1,
    title: 'Beispiel Zeitungsartikel 1',
    date: '2024-01-15',
    source: 'Lokalzeitung',
    filename: 'artikel-1.png',
    description: 'Wichtige Neuigkeiten über das Freibad Niederkrüchten'
  },
  {
    id: 2,
    title: 'Beispiel Zeitungsartikel 2',
    date: '2024-01-10',
    source: 'Regionalzeitung',
    filename: 'artikel-2.png',
    description: 'Bericht über die Entwicklungen beim Bürgerentscheid'
  }
];

export default function PressePage() {
  const [selectedArticle, setSelectedArticle] = useState<typeof pressArticles[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (article: typeof pressArticles[0]) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedArticle(null);
    document.body.style.overflow = 'unset';
  };

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
            <span className="text-gray-900">Presse</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V9a1 1 0 00-1-1h-1v3a2 2 0 11-4 0V7.5A1.5 1.5 0 0110.5 6H15v1z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Presse
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Aktuelle Presseberichte und Medienecho zum Freibad Niederkrüchten - 
              Verfolgen Sie die Berichterstattung über unser Projekt.
            </p>
          </div>
        </div>
      </div>

      {/* Instructions Section */}
      <section className="py-12 bg-yellow-50 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-yellow-200">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Zeitungsartikel hinzufügen</h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Anleitung für Administrator:</strong> Laden Sie PNG-Dateien von Zeitungsartikeln in den Ordner 
                  <code className="bg-gray-100 px-2 py-1 rounded mx-1 text-sm">/public/press/</code> 
                  hoch. Die Dateien sollten im Format <code className="bg-gray-100 px-2 py-1 rounded mx-1 text-sm">artikel-name.png</code> benannt werden. 
                  Anschließend bearbeiten Sie die Datei 
                  <code className="bg-gray-100 px-2 py-1 rounded mx-1 text-sm">src/data/press.ts</code> 
                  um die Metadaten für die neuen Artikel hinzuzufügen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pressArticles.map((article) => (
              <div
                key={article.id}
                className="group cursor-pointer bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                onClick={() => openModal(article)}
              >
                {/* Article Preview */}
                <div className="aspect-[3/4] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative overflow-hidden">
                  {/* Placeholder for newspaper article image */}
                  <div className="text-center text-gray-500">
                    <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                      <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V9a1 1 0 00-1-1h-1v3a2 2 0 11-4 0V7.5A1.5 1.5 0 0110.5 6H15v1z" />
                    </svg>
                    <p className="text-sm">Artikel wird geladen...</p>
                    <p className="text-xs mt-1">{article.filename}</p>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>

                  {/* Source Badge */}
                  <div className="absolute top-2 left-2 px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-medium">
                    {article.source}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2 text-lg line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">
                    {new Date(article.date).toLocaleDateString('de-DE', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                  {article.description && (
                    <p className="text-sm text-gray-600 line-clamp-3">
                      {article.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {pressArticles.length === 0 && (
            <div className="text-center py-16">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V9a1 1 0 00-1-1h-1v3a2 2 0 11-4 0V7.5A1.5 1.5 0 0110.5 6H15v1z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Noch keine Presseberichte</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Sobald neue Zeitungsartikel über das Freibad Niederkrüchten erscheinen, 
                werden sie hier angezeigt.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Modal for full article view */}
      {isModalOpen && selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90" onClick={closeModal}>
          <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200 z-10"
              aria-label="Schließen"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Article */}
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto">
              {/* Article Image */}
              <div className="aspect-[3/4] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                    <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V9a1 1 0 00-1-1h-1v3a2 2 0 11-4 0V7.5A1.5 1.5 0 0110.5 6H15v1z" />
                  </svg>
                  <p>Zeitungsartikel wird geladen...</p>
                  <p className="text-sm mt-2">{selectedArticle.filename}</p>
                </div>
              </div>
              
              {/* Article Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {selectedArticle.title}
                  </h2>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    {selectedArticle.source}
                  </span>
                </div>
                
                <p className="text-gray-500 mb-4">
                  {new Date(selectedArticle.date).toLocaleDateString('de-DE', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
                
                {selectedArticle.description && (
                  <p className="text-gray-700 leading-relaxed">
                    {selectedArticle.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Back Navigation */}
      <section className="py-12 bg-white border-t">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Zurück zur Startseite
          </Link>
        </div>
      </section>
    </div>
  );
}
