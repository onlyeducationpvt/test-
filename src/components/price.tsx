"use client";
import React from "react";
import { Card } from "@/components/ui/card";
import {  PopupTriggerButton } from "@/components/ui/button";

export default function PriceList() {
  const priceData = [
    { type: "2 BHK", area: "791 - 924 Sq. Ft.", price: "₹ 1.81 Cr Onwards", tower: "Phase 1 / Phase 2" },
    { type: "3 BHK", area: "1094 - 1373 Sq. Ft.", price: "₹ 2.46 Cr Onwards", tower: "Phase 2" },
    { type: "3 BHK", area: "1178 - 1407 Sq. Ft.", price: "₹ 2.64 Cr Onwards", tower: "Phase 1" },
    { type: "4 BHK", area: "2173 - 2189 Sq. Ft.", price: "₹ 4.02 Cr Onwards", tower: "Phase 2" },
    { type: "4 BHK", area: "2093 Sq. Ft.", price: "₹ 4.58 Cr Onwards", tower: "Phase 1" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-2 sm:p-3">
      <div className="bg-white rounded-xl shadow-md p-3 sm:p-6">
        <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-blue-900 mb-4 md:mb-6">Price List</h2>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Table */}
          <div className="w-full lg:w-2/3 overflow-x-auto">
            <table className="min-w-full text-sm whitespace-nowrap">
              <thead className="bg-blue-50 text-blue-900 font-semibold rounded-t-md">
                <tr>
                  {["Type", "Carpet Area", "Price", "Tower", "Price Breakup"].map((header) => (
                    <th key={header} className="px-4 py-3 text-left">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {priceData.map((item, index) => (
                  <tr key={index} className="border-b hover:bg-blue-50 transition duration-200">
                    <td className="px-4 py-3 font-medium">{item.type}</td>
                    <td className="px-4 py-3">{item.area}</td>
                    <td className="px-4 py-3">{item.price}</td>
                    <td className="px-4 py-3">{item.tower}</td>
                    <td className="px-4 py-3">
                      <PopupTriggerButton className="bg-blue-700 hover:bg-blue-800 text-white px-3 py-1 rounded-md text-xs shadow-sm">
                        Price Breakup
                      </PopupTriggerButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Image Card */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="relative group w-full max-w-sm rounded-lg overflow-hidden shadow-lg h-fit">
              <Card className="p-0 gap-0">
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src="https://iili.io/3lVGh5x.webp"
                    alt="Costing Details"
                    className="object-cover w-full h-full"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                  {/* Button Transition */}
                  <div className="absolute inset-0 flex items-end justify-center group-hover:items-center transition-all duration-500">
                    <PopupTriggerButton className="mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-white text-blue-700 font-semibold hover:bg-gray-100 shadow-md">
                      ENQUIRE NOW
                    </PopupTriggerButton>
                  </div>
                </div>
                <div className="p-4 text-center font-semibold text-white bg-gradient-to-r from-blue-700 to-blue-500">
                  Complete Costing Details
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
