"use client";

import { MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingButtons() {
  const [showLabel, setShowLabel] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {/* WhatsApp with label */}
      <div className="flex items-center gap-2.5">
        <AnimatePresence>
          {showLabel && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="relative bg-white rounded-xl shadow-lg border border-gray-200 px-4 py-2.5 flex items-center gap-3"
            >
              <div className="flex-1">
                <p className="text-sm font-semibold text-primary">Chat with us!</p>
                <p className="text-xs text-muted">We reply instantly</p>
              </div>
              <button
                onClick={() => setShowLabel(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Dismiss"
              >
                <X size={14} />
              </button>
              {/* Arrow */}
              <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-white" />
            </motion.div>
          )}
        </AnimatePresence>

        <a
          href="https://wa.me/918050773494?text=Hi%20Sancheti%20Computers!%20I%20need%20information%20about%20your%20products/services."
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-glow w-14 h-14 bg-whatsapp rounded-full flex items-center justify-center shadow-lg hover:bg-whatsapp-dark transition-all duration-200 hover:scale-105"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={26} className="text-white" />
        </a>
      </div>

      {/* Call Button */}
      <a
        href="tel:+918050773494"
        className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-md hover:bg-primary-light transition-all duration-200 hover:scale-105"
        aria-label="Call Now"
      >
        <Phone size={20} className="text-white" />
      </a>
    </div>
  );
}
