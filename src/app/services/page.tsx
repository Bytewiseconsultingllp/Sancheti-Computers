"use client";

import Link from "next/link";
import {
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
  ArrowRight,
} from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/Animations";
import { services } from "@/lib/data";

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

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Our Services</h1>
            <p className="text-blue-100/80 text-lg max-w-2xl mx-auto">
              Comprehensive IT solutions tailored to your needs
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Monitor;
              return (
                <StaggerItem key={service.title}>
                  <div className="bg-surface rounded-2xl p-8 border border-gray-100 card-hover h-full group">
                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                      <Icon size={28} className="text-secondary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{service.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">Need a Custom Solution?</h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              We provide tailored IT solutions for businesses of all sizes. Get in touch to discuss your requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-secondary/25"
              >
                Request a Quote
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-secondary text-secondary font-semibold rounded-xl hover:bg-secondary hover:text-white transition-all"
              >
                Contact Us
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
