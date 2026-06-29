"use client";

import { Star, Quote, ExternalLink, MessageCircle } from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/Animations";
import { testimonials, businessInfo } from "@/lib/data";

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Customer Reviews</h1>
            <p className="text-blue-100/80 text-lg max-w-2xl mx-auto">
              See what our customers have to say about us
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Reviews Summary */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-surface rounded-2xl p-8 lg:p-10 border border-gray-100 text-center">
              <div className="text-5xl font-bold gradient-text mb-2">4.8</div>
              <div className="flex justify-center gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={22} className={i < 5 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} />
                ))}
              </div>
              <p className="text-muted mb-6">Based on Google Reviews</p>
              <a
                href={businessInfo.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <ExternalLink size={16} />
                View on Google
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* All Reviews */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((review, index) => (
              <StaggerItem key={index}>
                <div className="bg-white rounded-xl p-7 border border-gray-100 card-hover-subtle h-full flex flex-col">
                  <Quote size={28} className="text-secondary/15 mb-3" />
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted leading-relaxed mb-5 flex-1 text-sm">&ldquo;{review.text}&rdquo;</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className="w-9 h-9 bg-secondary/10 rounded-full flex items-center justify-center">
                      <span className="text-secondary font-bold text-xs">{review.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-primary text-sm">{review.name}</p>
                      <p className="text-muted text-xs">via {review.source}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-5">Share Your Experience</h2>
            <p className="text-muted text-lg mb-8 max-w-2xl mx-auto">
              We value your feedback! Leave us a review on Google and help others find us.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={businessInfo.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Star size={18} />
                Leave a Review on Google
              </a>
              <a
                href={`https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent("Hi, I'd like to share my feedback about Sancheti Computers.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <MessageCircle size={18} />
                Share via WhatsApp
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
