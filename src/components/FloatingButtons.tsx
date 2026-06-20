"use client";

import { MessageCircle, Phone } from "lucide-react";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918050773494?text=Hi%20Sancheti%20Computers!%20I%20need%20information%20about%20your%20products/services."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} className="text-white" />
      </a>

      {/* Call Now Button */}
      <a
        href="tel:+918050773494"
        className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors animate-pulse"
        aria-label="Call Now"
      >
        <Phone size={24} className="text-white" />
      </a>
    </div>
  );
}
