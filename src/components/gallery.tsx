"use client";
import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

export default function ImageGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images: GalleryImage[] = [
    { id: 1, src: "https://iili.io/3lWIGn4.webp", alt: "Luxurious interior of Sai World Empire" },
    { id: 2, src: "https://iili.io/3lWIVP2.webp", alt: "Elegant dome structure at night" },
    { id: 3, src: "https://iili.io/3lWIhc7.webp", alt: "Kids water play area with slides" },
    { id: 4, src: "https://iili.io/3lWIktj.webp", alt: "Tennis court with player" }
  ];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!lightboxOpen) return;
    
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowRight') {
      navigateImage('next');
    } else if (e.key === 'ArrowLeft') {
      navigateImage('prev');
    }
  };

  return (
    <div 
      className="max-w-6xl mx-auto p-2 sm:p-3 " 
      onKeyDown={handleKeyDown} 
      tabIndex={0}
    >
      <div className='bg-white rounded-xl shadow-md p-3 sm:p-6'>
      
      <div className="flex justify-between items-center mb-8 ">
        <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-blue-900 mb-4 md:mb-6">
        Gallery Of Sai World Empire
        </h2>
        <Button variant="default" className="bg-blue-800 hover:bg-blue-900 sm:block hidden">
          Download Gallery
        </Button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div 
            key={image.id} 
            className="overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={() => openLightbox(index)}
          >
            <div className="relative h-40 rounded-sm w-full">
              <Image 
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Overlay */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Close button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 hover:bg-opacity-70 z-10"
              onClick={closeLightbox}
            >
              <X size={24} />
            </Button>
            
            {/* Navigation buttons */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute left-4 text-white bg-black bg-opacity-50 hover:bg-opacity-70 z-10"
              onClick={() => navigateImage('prev')}
            >
              <ChevronLeft size={32} />
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-4 text-white bg-black bg-opacity-50 hover:bg-opacity-70 z-10"
              onClick={() => navigateImage('next')}
            >
              <ChevronRight size={32} />
            </Button>
            
            {/* Current image */}
            <div className="relative max-h-screen max-w-screen-lg">
              <Image 
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                width={1200}
                height={800}
                className="object-contain max-h-[90vh]"
              />
            </div>
            
            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-4 py-1 rounded-full">
              {currentImageIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}