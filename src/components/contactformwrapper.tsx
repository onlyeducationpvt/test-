// src/components/contact-form-wrapper.tsx
"use client";

import { useEffect } from "react";
import ContactForm from "@/components/contactform";
import PopupForm from "@/components/popupcontactform";
import usePopupTimer from "@/lib/hooks";

interface ContactFormWrapperProps {
  variant?: "static" | "homepage";
}

export default function ContactFormWrapper({ variant = "static" }: ContactFormWrapperProps) {
  const { showPopup, closePopup, handleFormSubmitted, hasSubmitted } = usePopupTimer();

  return (
    <>
      {variant === "static" && (
        <div className="max-w-4xl mx-auto py-12 px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions or feedback? We'd love to hear from you. Fill out the form below
              and our team will get back to you as soon as possible.
            </p>
          </div>
          <ContactForm onSubmitSuccess={handleFormSubmitted} />
        </div>
      )}

      {/* Popup Form */}
      <PopupForm 
        isOpen={showPopup} 
        onClose={closePopup} 
        onSubmitSuccess={handleFormSubmitted} 
      />
    </>
  );
}