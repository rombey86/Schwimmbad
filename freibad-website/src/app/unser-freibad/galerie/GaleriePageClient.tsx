'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GalleryImage } from '@/types';

// Hilfsfunktionen, die früher in gallery.ts waren.
// Wir definieren sie hier, da sie für die Filter-Logik auf dem Client benötigt werden.
const getAllCategories = (): GalleryImage['category'][] => {
  return ['allgemein', 'bauphase', 'aktionstag', 'flyer'];
};

const getCategoryLabel = (category: GalleryImage['category']): string => {
  switch (category) {
    case 'allgemein': return 'Allgemein';
    case 'bauphase': return 'Bauphase';
    case 'aktionstag': return 'Aktionstage';
    case 'flyer': return 'Flyer & Plakate';
    default: return 'Unbekannt';
  }
};

const getCategoryColor = (category: GalleryImage['category']): string => {
  switch (category) {
    case 'allgemein': return 'blue';
    case 'bauphase': return 'orange';
    case 'aktionstag': return 'green';
    case 'flyer': return 'purple';
    default: return 'gray';
  }
};

// Die Haupt-Client-Komponente
export default function GaleriePageClient({ images }: { images: GalleryImage[] }) {
  const [selectedCategory, setSelectedCategory] = useState<GalleryImage['category'] | 'all'>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = getAllCategories();
  
  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(image => image.category === selectedCategory);

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredImages[newIndex]);
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-700 border-blue-200',
      orange: 'bg-orange-100 text-orange-700 border-orange-200',
      green: 'bg-green-100 text-green-700 border-green-200',
      purple: 'bg-purple-100 text-purple-700 border-purple-200',
      gray: 'bg-gray-100 text-gray-700 border-gray-200'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.gray;
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
            <Link href="/unser-freibad" className="hover:text-blue-600 transition-colors duration-200">
              Unser Freibad
            </Link>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-900">Galerie</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Galerie
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Bilder aus verschiedenen Epochen unseres Freibads - 
              von der Bauphase bis zu den schönsten Sommermomenten.
            </p>
          </div>
        </div>
      </div>

      {/* Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Alle ({images.length})
            </button>
            {categories.map((category) => {
              const categoryImages = images.filter(img => img.category === category);
              const color = getCategoryColor(category);
              const isSelected = selectedCategory === category;
              
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 border ${
                    isSelected
                      ? `bg-${color}-600 text-white border-${color}-600`
                      : `${getColorClasses(color)} hover:bg-${color}-200`
                  }`}
                >
                  {getCategoryLabel(category)} ({categoryImages.length})
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group cursor-pointer bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                onClick={() => openModal(image)}
              >
                <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>

                  <div className={`absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-medium ${getColorClasses(getCategoryColor(image.category))}`}>
                    {getCategoryLabel(image.category)}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1">
                    {image.title}
                  </h3>
                  {image.date && (
                    <p className="text-sm text-gray-500 mb-2">
                      {new Date(image.date).toLocaleDateString('de-DE', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Keine Bilder gefunden</h3>
              <p className="text-gray-600">
                In dieser Kategorie sind noch keine Bilder verfügbar.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90" onClick={closeModal}>
          <div className="relative max-w-5xl w-full max-h-full" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="absolute -top-12 right-0 text-white hover:text-gray-300 z-10"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button>
            <button onClick={() => navigateImage('prev')} className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg></button>
            <button onClick={() => navigateImage('next')} className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></button>

            <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
              <div className="w-full h-[80vh] relative">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">{selectedImage.title}</h2>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getColorClasses(getCategoryColor(selectedImage.category))}`}>{getCategoryLabel(selectedImage.category)}</span>
                </div>
                {selectedImage.date && <p className="text-gray-500 mb-3">{new Date(selectedImage.date).toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}</p>}
                {selectedImage.description && <p className="text-gray-700 leading-relaxed">{selectedImage.description}</p>}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
