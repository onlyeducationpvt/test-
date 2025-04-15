'use client';

import Slider from "@/components/amenities";
import BannerSlider from "@/components/banner";
import ContactForm from "@/components/contactform";
import Footer from "@/components/footer";
import GalleryComponent from "@/components/gallery";
import SaiWorldLocation from "@/components/location";
import MobileBottomBar from "@/components/MobileBottomBar";
import PriceList from "@/components/price";
import SitePlan from "@/components/siteplan";
import VirtualSiteVisit from "@/components/virtualtour";
import SaiWorldEmpire from "@/components/welcome";

export default function Home() {
  return (
    <main className="grid grid-cols-12 gap-4 pt-16"> 
      <div className="bg-gray-50 col-span-full lg:col-span-9">
        <BannerSlider />


        <div id="welcome"><SaiWorldEmpire /></div>
        <div id="price"><PriceList /></div>
        <div id="siteplan"><SitePlan /></div>
        <div id="amenities"><Slider /></div>
        <div id="gallery"><GalleryComponent /></div>
        <div id="location"><SaiWorldLocation /></div>
        <div id="virtualtour"><VirtualSiteVisit /></div>
        <Footer />
      </div>
      <div className="lg:col-span-3 hidden lg:block">
      <ContactForm />
      </div>
      <MobileBottomBar />
    </main>
  );
}