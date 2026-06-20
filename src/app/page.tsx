"use client";

import Link from "next/link";
import {
  ArrowRight,
  Star,
  ChevronRight,
  Monitor,
  Laptop,
  Cpu,
  Network,
  Wifi,
  Printer,
  Disc,
  Keyboard,
  Camera,
  Building,
  ArrowUpCircle,
  Wrench,
  Briefcase,
} from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn, FadeInLeft, FadeInRight, ScaleIn, StaggerChildren, StaggerItem } from "@/components/Animations";
import { services, testimonials, brands, stats } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Monitor,
  Laptop,
  Cpu,
  Network,
  Wifi,
  Printer,
  Disc,
  Keyboard,
  Camera,
  Building,
  ArrowUpCircle,
  Wrench,
  Briefcase,
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl" />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInLeft>
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white/90 text-sm mb-6">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  Trusted IT Partner Since 2017
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  Your Trusted{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                    IT Partner
                  </span>{" "}
                  Since 2017
                </h1>
                <p className="text-lg text-blue-100/80 mb-8 max-w-xl leading-relaxed">
                  Providing Computers, Laptops, Networking Solutions, Software, and IT Infrastructure at Competitive Prices.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/quote"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-secondary/30 hover:shadow-xl hover:shadow-secondary/40"
                  >
                    Get a Quote
                    <ArrowRight size={20} />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </FadeInLeft>

            <FadeInRight delay={0.2}>
              <div className="relative hidden lg:block">
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 p-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-2xl p-6 text-center animate-float">
                      <Monitor size={40} className="text-blue-300 mx-auto mb-3" />
                      <p className="text-white font-semibold text-sm">Desktops</p>
                    </div>
                    <div className="bg-white/10 rounded-2xl p-6 text-center animate-float" style={{ animationDelay: "0.5s" }}>
                      <Laptop size={40} className="text-cyan-300 mx-auto mb-3" />
                      <p className="text-white font-semibold text-sm">Laptops</p>
                    </div>
                    <div className="bg-white/10 rounded-2xl p-6 text-center animate-float" style={{ animationDelay: "1s" }}>
                      <Network size={40} className="text-green-300 mx-auto mb-3" />
                      <p className="text-white font-semibold text-sm">Networking</p>
                    </div>
                    <div className="bg-white/10 rounded-2xl p-6 text-center animate-float" style={{ animationDelay: "1.5s" }}>
                      <Cpu size={40} className="text-purple-300 mx-auto mb-3" />
                      <p className="text-white font-semibold text-sm">Components</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-16 z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerChildren className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="bg-white rounded-2xl shadow-xl p-6 text-center border border-gray-100">
                <div className="text-3xl lg:text-4xl font-bold gradient-text mb-1">{stat.number}</div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Our Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Comprehensive IT solutions for individuals and businesses
              </p>
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.slice(0, 8).map((service) => {
              const Icon = iconMap[service.icon] || Monitor;
              return (
                <StaggerItem key={service.title}>
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover group cursor-pointer">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                      <Icon size={24} className="text-secondary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-2">{service.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>

          <FadeIn>
            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-3 bg-secondary text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-secondary/25"
              >
                View All Services
                <ChevronRight size={18} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">What Our Customers Say</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Trusted by hundreds of happy customers across Bengaluru
              </p>
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((review) => (
              <StaggerItem key={review.name}>
                <div className="bg-surface rounded-2xl p-8 border border-gray-100 card-hover h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6 flex-1">&ldquo;{review.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
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

          <FadeIn>
            <div className="text-center mt-12">
              <Link
                href="/testimonials"
                className="inline-flex items-center gap-2 px-8 py-3 border-2 border-secondary text-secondary font-semibold rounded-xl hover:bg-secondary hover:text-white transition-all duration-300"
              >
                Read More Reviews
                <ChevronRight size={18} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Brands We Deal With</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Authorized dealer of top international brands
              </p>
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {brands.map((brand) => (
              <StaggerItem key={brand}>
                <div className="bg-white rounded-xl p-6 flex items-center justify-center border border-gray-100 card-hover">
                  <span className="text-gray-700 font-bold text-lg">{brand}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Ready to Upgrade Your IT Infrastructure?
            </h2>
            <p className="text-blue-100/80 text-lg mb-10 max-w-2xl mx-auto">
              Get expert advice and competitive quotes for all your computer, networking, and IT needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg"
              >
                Request a Quote
                <ArrowRight size={20} />
              </Link>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                Call: +91 98765 43210
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
