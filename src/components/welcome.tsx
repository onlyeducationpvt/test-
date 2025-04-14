"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DownloadIcon, ArrowDownCircleIcon, ArrowUpCircleIcon } from "lucide-react";

export default function SaiWorldEmpire() {
  const [showMore, setShowMore] = useState(false);


  return (
    <div className="max-w-6xl mx-auto p-2 sm:p-3">
      <div className="bg-white rounded-lg shadow-md   p-3 sm:p-6">
        <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-blue-900 mb-4 md:mb-6">
          Welcome To Sai World Empire
        </h2>

        <div className="text-gray-700">
          <p className="text-base leading-relaxed">
            Inspired by the grandeur of the glorious kingdoms of old - the Sai World Empire in Kharghar is built along the lines of famous royal civilisations. Its exquisite 2, 3, and 4 BHK apartments with stylish interiors define lavishness & offer every imaginable comfort. The key hallmark of this residence is the amenities served indoors. Like a wave pool, tennis court, virtual gaming area, squash court, rock climbing, movie theatre, Olympic-size pool, library, kids fun pool, bowling alley, etc.
            {!showMore && (
              <Button
                variant="link"
                className="inline-flex items-center gap-1 text-blue-800 hover:text-blue-600 font-medium underline-offset-4 ml-1 p-0 h-auto"
                onClick={() => setShowMore(true)}
              >
                Read more <ArrowDownCircleIcon className="w-4 h-4" />
              </Button>
            )}
          </p>

          {showMore && (
            <div className="mt-4">
              <p className="text-base leading-relaxed">
                The neighbourhood of Kharghar is invigorating as well, welcoming you to the finest schools, healthcare, and entertainment. Furthermore, the property offers you seamless connectivity being close to the Mumbai Pune Expressway, Kharghar Railway Station, the upcoming Navi Mumbai International Airport, & the upcoming metro line.
                <Button
                  variant="link"
                  className="inline-flex items-center gap-1 text-blue-800 hover:text-blue-600 font-medium underline-offset-4 ml-1 p-0 h-auto"
                  onClick={() => setShowMore(false)}
                >
                  Read less <ArrowUpCircleIcon className="w-4 h-4" />
                </Button>
              </p>
            </div>
          )}
        </div>

        <div className="mt-6">
          <Button 
            className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 transition-all duration-300 text-white px-6 py-2 rounded-md shadow-md"
          >
            <DownloadIcon className="w-4 h-4" /> 
            Download Brochure
          </Button>
        </div>
      </div>
    </div>
  );
}