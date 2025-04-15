// components/LocationMap.tsx
"use client";
import React from 'react';
import Image from 'next/image';
import {  MapPinned } from 'lucide-react';

export default function LocationMap() {
  const nearbyLocations = [
    {
      id: 1,
      description: "Kharghar Sector 34 Metro Station is just 5 minutes away",
      icon: <MapPinned className="h-5 w-5 text-blue-800" />
    },
    {
      id: 2,
      description: "Ornate Hospitals is within 15 minutes.",
      icon: <MapPinned className="h-5 w-5 text-blue-800" />
    },
    {
      id: 3,
      description: "Just 6 minutes drive to Empyrean School",
      icon: <MapPinned className="h-5 w-5 text-blue-800" />
    },
    {
      id: 4,
      description: "The Executive Inn is just at the distance of 8 minutes",
      icon: <MapPinned className="h-5 w-5 text-blue-800" />
    },
    {
      id: 5,
      description: "Reach Kharghar Railway Station in 18 minutes.",
      icon: <MapPinned className="h-5 w-5 text-blue-800" />
    },
    {
      id: 6,
      description: "Just 20 minutes drive to Mumbai-Pune Expressway",
      icon: <MapPinned className="h-5 w-5 text-blue-800" />
    }
  ];

  return (
    <section className="max-w-6xl mx-auto p-2 sm:p-3">
            <div className='bg-white rounded-xl shadow-md p-3 sm:p-6'>
            <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-blue-900 mb-4 md:mb-6">
            Address of Sai World Empire
        </h2>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Google Map Section */}
        <div className="bg-white rounded-lg overflow-hidden col-span-full md:col-span-8">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Map View</h3>
          <div className="relative h-80 md:h-70">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.8116432079636!2d73.07234761490928!3d19.03367998710943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c24cce39457b%3A0x8bd69bba10d9b151!2sSai%20World%20Empire!5e0!3m2!1sen!2sin!4v1650012345678!5m2!1sen!2sin"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sai World Empire Google Map"
              className="absolute inset-0"
            />
          </div>
        
        </div>

        {/* Location Map Section */}
        <div className="bg-white rounded-lg overflow-hidden col-span-full md:col-span-4">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 ">Location Map</h3>
          <div className="relative h-80 md:h-70">
            <Image 
              src="https://iili.io/3lWIGn4.webp" 
              alt="Sai World Empire Location Map"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Nearby Landmarks */}
      <div className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {nearbyLocations.map((location) => (
            <div 
              key={location.id} 
              className="bg-blue-50/40 p-4 rounded-sm shadow-sm flex items-start gap-3"
            >
              <div className="flex-shrink-0 rounded-full bg-blue-100 p-2">
                {location.icon}
              </div>
              <p className="text-gray-800">{location.description}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}