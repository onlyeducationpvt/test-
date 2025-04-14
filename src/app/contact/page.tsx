// src/app/contact/page.tsx

import ContactFormWrapper from "@/components/contactformwrapper";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto">
        <ContactFormWrapper variant="static" />
      </div>
    </div>
  );
}