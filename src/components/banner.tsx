"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import {  PopupTriggerButton } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const bannerImages = [
  "https://iili.io/3lVq6NV.webp",
  "https://iili.io/3lVq4AQ.webp"
];

export default function BannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full flex flex-col sm:block">
      {/* Banner Images */}
      <div className="relative w-full h-[250px] sm:h-[400px] md:h-[500px] lg:h-[550px] overflow-hidden">
        {bannerImages.map((src, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={src}
              alt={`Sai World Empire Banner ${index + 1}`}
              fill
              sizes="100vw"
              priority={index === 0}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Card Info - responsive position */}
      <div className="relative z-10 w-full sm:absolute sm:top-0 sm:left-0 sm:h-full sm:w-auto sm:max-w-md flex justify-center sm:items-center sm:p-8">
        <Card className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-blue-600 text-white p-4">
            <div className="text-center sm:text-left">
              <h2 className="text-xl font-bold mb-1">Sai World Empire</h2>
              <p className="text-sm">At Kharghar By Paradise Group</p>
            </div>
          </div>

          <div className="p-4 space-y-4">
            <div className="grid grid-cols-3 gap-2 text-center border-b border-gray-200 pb-4">
              <div>
                <p className="text-gray-500 text-xs">Land Parcel</p>
                <p className="font-semibold text-sm">18 Acres</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs">Floors</p>
                <p className="font-semibold text-sm">G+40 Storeys</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs">Possession</p>
                <p className="font-semibold text-sm">Ready</p>
              </div>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <ul className="text-sm space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
                  Spot Booking Offer
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
                  Early Buy Discount
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
                  Guaranteed Best Rate
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-sm">
                Luxurious <span className="font-medium">2, 3 & 4 BHK</span> Starting At
              </p>
              <p className="text-2xl font-bold text-blue-700">₹ 1.81 Cr <span className="text-sm font-normal text-gray-600">Onwards</span></p>
            </div>

            <PopupTriggerButton className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Download Brochure
            </PopupTriggerButton>
          </div>
        </Card>
      </div>
    </section>
  );
}
