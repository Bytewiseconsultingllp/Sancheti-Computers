"use client";

import { Award, Target, Eye, Shield, IndianRupee, Users, Zap, ThumbsUp } from "lucide-react";
import { FadeIn, FadeInLeft, FadeInRight, StaggerChildren, StaggerItem } from "@/components/Animations";
import Link from "next/link";

const whyChooseUs = [
  { icon: Shield, title: "Genuine Products", description: "100% authentic products from authorized distributors." },
  { icon: IndianRupee, title: "Competitive Pricing", description: "Best market prices without compromising on quality." },
  { icon: Users, title: "Experienced Team", description: "Knowledgeable staff with years of industry expertise." },
  { icon: Zap, title: "Quick Service", description: "Fast turnaround on repairs, upgrades, and deliveries." },
  { icon: ThumbsUp, title: "Trusted by Businesses", description: "Serving both individual and enterprise clients since 2017." },
  { icon: Award, title: "Customer Satisfaction", description: "We prioritize building long-term relationships." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">About Us</h1>
            <p className="text-blue-100/80 text-lg max-w-2xl mx-auto">
              Your trusted IT solutions provider since 2017
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInLeft>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">Our Story</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Sancheti Computers has been serving customers across Bengaluru and Karnataka since 2017, providing reliable IT hardware, software, networking products, and technical support solutions.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Founded by Mahendra Kumar, we started with a vision to provide genuine IT products at competitive prices with exceptional customer service. Over the years, we have grown to become one of the most trusted computer shops on SP Road, Bengaluru.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our commitment to quality, transparency, and customer satisfaction has helped us build a loyal customer base of over 1000 happy customers, including businesses, educational institutions, and individual buyers.
                </p>
              </div>
            </FadeInLeft>

            <FadeInRight delay={0.2}>
              <div className="bg-surface rounded-3xl p-8 border border-gray-100">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
                    <div className="text-4xl font-bold gradient-text mb-2">8+</div>
                    <p className="text-gray-500 text-sm">Years in Business</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
                    <div className="text-4xl font-bold gradient-text mb-2">1000+</div>
                    <p className="text-gray-500 text-sm">Happy Customers</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
                    <div className="text-4xl font-bold gradient-text mb-2">50+</div>
                    <p className="text-gray-500 text-sm">Brands Available</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
                    <div className="text-4xl font-bold gradient-text mb-2">100%</div>
                    <p className="text-gray-500 text-sm">Genuine Products</p>
                  </div>
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <FadeInLeft>
              <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm h-full">
                <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Target size={28} className="text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To deliver genuine products, expert guidance, and exceptional customer service to every client. We strive to make quality IT solutions accessible and affordable for all.
                </p>
              </div>
            </FadeInLeft>

            <FadeInRight delay={0.1}>
              <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm h-full">
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                  <Eye size={28} className="text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To become Karnataka&apos;s most trusted IT solutions provider, known for our commitment to quality, innovation, and customer-first approach in the IT hardware industry.
                </p>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Why Choose Us</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                What makes Sancheti Computers the preferred choice for IT solutions
              </p>
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => (
              <StaggerItem key={item.title}>
                <div className="bg-surface rounded-2xl p-8 border border-gray-100 card-hover h-full">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-5">
                    <item.icon size={24} className="text-secondary" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Partner With Us Today</h2>
            <p className="text-blue-100/80 text-lg mb-8 max-w-2xl mx-auto">
              Experience the Sancheti Computers difference — quality products, expert advice, and unbeatable service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-lg"
              >
                Contact Us
              </Link>
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
              >
                Get a Quote
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
