"use client";

import Image from "next/image";
import { Button, PopupTriggerButton } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const plans = [
  {
    type: "2 BHK",
    area: "791 - 924 Sq.ft.",
    price: "₹ 1.81 Cr Onwards",
    img: "https://iili.io/3lV49z7.webp",
  },
  {
    type: "3 BHK",
    area: "1094 - 1373 Sq.ft.",
    price: "₹ 2.46 Cr Onwards",
    img: "https://iili.io/3lV49z7.webp",
  },
  {
    type: "3 BHK",
    area: "1178 - 1407 Sq.ft.",
    price: "₹ 2.64 Cr Onwards",
    img: "https://iili.io/3lV49z7.webp",
  },
];

export default function SitePlan() {
  return (
    <div className="max-w-6xl mx-auto p-2 sm:p-3">
      <div className="bg-white rounded-xl shadow-md p-3 sm:p-6">
        <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-blue-900 mb-4 md:mb-6">
          Site & Floor Plan Of Sai World Empire
        </h2>

        {/* Master Plan Section */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Master Plan</h3>
          <div className="relative group   overflow-hidden  block lg:flex justify-center ">
            <Card className="p-0 ">
              <div className="relative h-80 overflow-hidden w-lg">
                <Image
                  src="https://iili.io/3lVUehF.webp"
                  alt="Master Plan"
                  width={1200}
                  height={800}
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
                {/* Enquire Button */}
                <div className="absolute inset-0 flex items-end justify-center group-hover:items-center transition-all duration-500">
                  <PopupTriggerButton className="mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-white text-blue-700 font-semibold hover:bg-gray-100 shadow-md">
                    ENQUIRE NOW
                  </PopupTriggerButton>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Floor Plan Section */}
        <section>
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Floor Plan</h3>
          <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="relative group w-full max-w-sm mx-auto rounded-xl overflow-hidden shadow-lg"
              >
                <Card className="p-0 gap-0">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={plan.img}
                      alt={plan.type}
                      width={500}
                      height={350}
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
                    {/* Enquire PopupTriggerButton */}
                    <div className="absolute inset-0 flex items-end justify-center group-hover:items-center transition-all duration-500">
                      <PopupTriggerButton className="mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-white text-blue-700 font-semibold hover:bg-gray-100 shadow-md">
                        ENQUIRE NOW
                      </PopupTriggerButton>
                    </div>
                  </div>
                  <div className="p-4 text-center font-semibold text-white bg-gradient-to-r from-blue-700 to-blue-500">
                    {plan.type} - {plan.area}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
