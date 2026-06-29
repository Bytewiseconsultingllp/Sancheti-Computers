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
  MessageCircle,
} from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/Animations";
import { services, businessInfo } from "@/lib/data";

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
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Monitor;
              return (
                <StaggerItem key={service.title}>
                  <div className="bg-surface rounded-xl p-7 border border-gray-100 card-hover-subtle h-full group">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                      <Icon size={24} className="text-secondary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-2">{service.title}</h3>
                    <p className="text-muted text-sm leading-relaxed mb-4">{service.description}</p>
                    <a
                      href={`https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent(
                        `Hi, I'm interested in ${service.title}. Please share more details.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary hover:text-secondary-dark transition-colors"
                    >
                      <MessageCircle size={14} />
                      Enquire Now
                    </a>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-surface">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-5">Need a Custom Solution?</h2>
            <p className="text-muted text-lg mb-8 max-w-2xl mx-auto">
              We provide tailored IT solutions for businesses of all sizes. Get in touch to discuss your requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent(
                  "Hi, I need a custom IT solution for my business. Can we discuss?"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
              <Link href="/quote" className="btn-outline">
                Request a Quote
                <ArrowRight size={18} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
