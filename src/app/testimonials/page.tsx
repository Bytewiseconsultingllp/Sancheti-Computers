"use client";

import { Star, Quote, ExternalLink } from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/Animations";
import { testimonials } from "@/lib/data";

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
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-surface rounded-3xl p-10 border border-gray-100 text-center">
              <div className="text-6xl font-bold gradient-text mb-2">4.8</div>
              <div className="flex justify-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={24} className={i < 5 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} />
                ))}
              </div>
              <p className="text-gray-500 mb-6">Based on Google Reviews</p>
              <a
                href="https://g.page/sancheticomputers"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white font-medium rounded-xl hover:bg-blue-700 transition-all"
              >
                <ExternalLink size={16} />
                View on Google
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* All Reviews */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((review, index) => (
              <StaggerItem key={index}>
                <div className="bg-white rounded-2xl p-8 border border-gray-100 card-hover h-full flex flex-col">
                  <Quote size={32} className="text-secondary/20 mb-4" />
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6 flex-1">&ldquo;{review.text}&rdquo;</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                      <span className="text-secondary font-bold text-sm">{review.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-primary text-sm">{review.name}</p>
                      <p className="text-gray-400 text-xs">via {review.source}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">Share Your Experience</h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              We value your feedback! Leave us a review on Google and help others find us.
            </p>
            <a
              href="https://g.page/sancheticomputers/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-secondary/25"
            >
              <Star size={20} />
              Leave a Review on Google
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
