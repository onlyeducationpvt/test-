
import Image from "next/image";
import { Play } from "lucide-react";

export default function VirtualSiteVisit() {
  return (
    <section className="max-w-6xl mx-auto p-2 sm:p-3">
            <div className='bg-white rounded-xl shadow-md p-3 sm:p-6'>
         <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-blue-900 mb-4 md:mb-6">
         Virtual Tour Request

        </h2>
      <div className="relative w-full h-[450px] rounded-xl overflow-hidden shadow-lg">
        {/* Background Image */}
        <Image
          src="https://iili.io/3lVq4AQ.webp"
          alt="Virtual Site Background"
          fill
          className="object-cover"
          priority
        />

        {/* Semi-transparent Play Button */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/60  m-auto h-fit py-3">
          <div className="bg-white/30 rounded-full p-4 cursor-pointer hover:bg-white/40 transition-colors mb-6">
            <Play className="w-8 h-8 text-white" />
          </div>
          
          <h4 className="text-3xl font-semibold text-white">VIRTUAL SITE VISIT</h4>
          <p className="text-xl font-semibold text-white mt-1">Sai World Empire</p>
        </div>
        </div>
      </div>
    </section>
  );
}