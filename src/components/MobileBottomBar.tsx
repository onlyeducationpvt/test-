import { Phone, FileText, LayoutDashboard } from "lucide-react";
import {  PopupTriggerButton } from "@/components/ui/button";

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-3 bg-blue-900 text-white py-2 lg:hidden md:hidden shadow-md">
      <PopupTriggerButton
        variant="ghost"
        className="flex flex-col items-center justify-center text-white space-y-1 border-r-2 border-blue-700 last:border-r-0 hover:text-white hover:bg-blue-900"
      >
        <Phone size={18} />
        <span className="text-xs">Call</span>
      </PopupTriggerButton>
      <PopupTriggerButton
        variant="ghost"
        className="flex flex-col items-center justify-center text-white space-y-1 border-r-2 border-blue-700 last:border-r-0 hover:text-white hover:bg-blue-900"
      >
        <LayoutDashboard size={18} />
        <span className="text-xs">Floor Plan</span>
      </PopupTriggerButton>
      <PopupTriggerButton
        variant="ghost"
        className="flex flex-col items-center justify-center text-white space-y-1 hover:text-white hover:bg-blue-900"
      >
        <FileText size={18} />
        <span className="text-xs">Brochure</span>
      </PopupTriggerButton>
    </div>
  );
}
