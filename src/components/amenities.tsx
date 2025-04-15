"use client";
import React, { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { PopupTriggerButton } from "./ui/button";

type FlickityInstance = {
  select: (index: number) => void;
  previous: (isWrapped?: boolean, isInstant?: boolean) => void;
  next: (isWrapped?: boolean, isInstant?: boolean) => void;
  destroy: () => void;
};

const amenities = [
  { src: "https://iili.io/3lWIGn4.webp", label: "MOVIE THEATRE" },
  { src: "https://iili.io/3lWI1tf.webp", label: "OLYMPIC-SIZE POOL" },
  { src: "https://iili.io/3lWIMMl.webp", label: "SQUASH COURT" },
  { src: "https://iili.io/3lWIVP2.webp", label: "MUSIC ROOM" },
  { src: "https://iili.io/3lWIhc7.webp", label: "ROCK CLIMBING" },
  { src: "https://iili.io/3lWIOAu.webp", label: "SUNKEN BAR WITH POOL" },
  { src: "https://iili.io/3lWIewb.webp", label: "TENNIS COURT" },
  { src: "https://iili.io/3lWIktj.webp", label: "VIRTUAL GAMING AREA" },
  { src: "https://iili.io/3lWI8ox.webp", label: "LUXURY POOL VIEW" },
];

const AmenitiesSlider = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const flickityRef = useRef<FlickityInstance | null>(null);

  useEffect(() => {
    const initializeFlickity = async () => {
      if (typeof window !== "undefined" && carouselRef.current) {
        try {
          const Flickity = (await import("flickity")).default;
          await import("flickity/css/flickity.css");
          
          const flickityInstance = new Flickity(carouselRef.current, {
            cellAlign: "left",
            contain: true,
            prevNextButtons: false,
            pageDots: false,
            wrapAround: true,
            adaptiveHeight: true,
            draggable: true,
            autoPlay: 5000,
            groupCells: '100%'
          });
          
          flickityRef.current = flickityInstance as unknown as FlickityInstance;
        } catch (error) {
          console.error("Failed to load Flickity:", error);
        }
      }
    };

    initializeFlickity();
    
    return () => {
      if (flickityRef.current) {
        flickityRef.current.destroy();
      }
    };
  }, []);

  const handlePrevClick = () => {
    if (flickityRef.current) {
      flickityRef.current.previous();
    }
  };

  const handleNextClick = () => {
    if (flickityRef.current) {
      flickityRef.current.next();
    }
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto p-2 sm:p-3">
      <div className="bg-white rounded-xl shadow-md p-3 sm:p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-blue-900 mb-4 md:mb-6">Amenities Of Sai World Empire</h2>
        <PopupTriggerButton className="bg-blue-800 text-white py-2 px-6 rounded-md hover:bg-blue-900 transition-colors">
          Download Amenities
        </PopupTriggerButton>
      </div>
      
      <div className="relative">
        <button 
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
          onClick={handlePrevClick}
          aria-label="Previous"
        >
          <ChevronLeft className="h-6 w-6 text-slate-700" />
        </button>
        
        <button 
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
          onClick={handleNextClick}
          aria-label="Next"
        >
          <ChevronRight className="h-6 w-6 text-slate-700" />
        </button>
        
        <div ref={carouselRef} className="overflow-hidden">
          {amenities.map((item, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
              <div className="relative rounded-lg overflow-hidden shadow-lg h-64">
                <Image 
                  src={item.src}
                  alt={item.label}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 py-2 px-4">
                  <p className="text-white font-medium text-center">{item.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default AmenitiesSlider;