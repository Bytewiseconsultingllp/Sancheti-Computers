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
  MessageCircle,
  Shield,
  Truck,
  CheckCircle,
  Building2,
  Package,
} from "lucide-react";
import {
  FadeIn,
  FadeInLeft,
  FadeInRight,
  StaggerChildren,
  StaggerItem,
} from "@/components/Animations";
import {
  services,
  testimonials,
  brands,
  stats,
  products,
  customerSegments,
  gemInfo,
  businessInfo,
} from "@/lib/data";

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

const segmentIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  b2c: Laptop,
  b2b: Briefcase,
  gem: Building2,
};

const featuredProducts = products.slice(0, 6);

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden min-h-[85vh] flex items-center">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-72 h-72 bg-secondary/8 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-accent/8 rounded-full blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeInLeft>
              <div>
                {/* Trust badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/15 text-white/90 text-sm mb-6">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  Trusted IT Partner Since 2012
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] mb-6 text-balance">
                  Your One-Stop{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                    IT Solutions
                  </span>{" "}
                  Store in Bengaluru
                </h1>

                <p className="text-lg text-blue-100/70 mb-8 max-w-xl leading-relaxed">
                  Computers, Laptops, Networking, Software, CCTV & IT Infrastructure.
                  Serving Individual Buyers, Businesses & Government (GEM).
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mb-10">
                  <a
                    href={`https://wa.me/${businessInfo.whatsapp}?text=Hi%20Sancheti%20Computers!%20I%20need%20information%20about%20your%20products/services.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp !py-4 !px-8 !text-base"
                  >
                    <MessageCircle size={20} />
                    Chat on WhatsApp
                  </a>
                  <Link
                    href="/products"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/15 hover:bg-white/15 transition-all duration-200"
                  >
                    Browse Products
                    <ArrowRight size={18} />
                  </Link>
                </div>

                {/* Trust indicators */}
                <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <Shield size={16} className="text-green-400" />
                    100% Genuine Products
                  </div>
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <Truck size={16} className="text-blue-300" />
                    Fast Delivery
                  </div>
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <CheckCircle size={16} className="text-cyan-300" />
                    GEM Registered
                  </div>
                </div>
              </div>
            </FadeInLeft>

            <FadeInRight delay={0.2}>
              <div className="relative hidden lg:block">
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-xl p-6 text-center animate-float border border-white/5">
                      <Monitor size={36} className="text-blue-300 mx-auto mb-3" />
                      <p className="text-white font-semibold text-sm">Desktops</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-6 text-center animate-float border border-white/5" style={{ animationDelay: "0.5s" }}>
                      <Laptop size={36} className="text-cyan-300 mx-auto mb-3" />
                      <p className="text-white font-semibold text-sm">Laptops</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-6 text-center animate-float border border-white/5" style={{ animationDelay: "1s" }}>
                      <Network size={36} className="text-green-300 mx-auto mb-3" />
                      <p className="text-white font-semibold text-sm">Networking</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-6 text-center animate-float border border-white/5" style={{ animationDelay: "1.5s" }}>
                      <Camera size={36} className="text-purple-300 mx-auto mb-3" />
                      <p className="text-white font-semibold text-sm">CCTV</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-12 z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerChildren className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="bg-white rounded-xl shadow-md p-5 sm:p-6 text-center border border-gray-100">
                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">{stat.number}</div>
                <div className="text-xs sm:text-sm text-muted font-medium">{stat.label}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </section>

      {/* Customer Segments */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                Solutions for Every Customer
              </h2>
              <p className="text-muted max-w-2xl mx-auto">
                Whether you&apos;re an individual buyer, a business, or a government department — we have the right IT solutions for you.
              </p>
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {customerSegments.map((segment) => {
              const SegmentIcon = segmentIcons[segment.id] || Monitor;
              return (
                <StaggerItem key={segment.id}>
                  <div className="segment-card h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-11 h-11 bg-secondary/10 rounded-lg flex items-center justify-center">
                        <SegmentIcon size={22} className="text-secondary" />
                      </div>
                      <div>
                        <span className="badge-primary text-[10px]">{segment.subtitle}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-2">{segment.title}</h3>
                    <p className="text-muted text-sm leading-relaxed mb-5 flex-1">{segment.description}</p>
                    <ul className="space-y-2 mb-5">
                      {segment.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted">
                          <CheckCircle size={14} className="text-success shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={segment.ctaLink}
                      className="btn-primary !py-2.5 !text-sm w-full justify-center"
                      {...(segment.id === "gem" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {segment.cta}
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* Featured Services */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Our Services</h2>
              <p className="text-muted max-w-2xl mx-auto">
                Comprehensive IT solutions for individuals and businesses
              </p>
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.slice(0, 8).map((service) => {
              const Icon = iconMap[service.icon] || Monitor;
              return (
                <StaggerItem key={service.title}>
                  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 card-hover group cursor-pointer h-full">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-3.5 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                      <Icon size={20} className="text-secondary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-base font-bold text-primary mb-1.5">{service.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{service.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>

          <FadeIn>
            <div className="text-center mt-10">
              <Link href="/services" className="btn-primary">
                View All Services
                <ChevronRight size={18} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured Products with WhatsApp Enquiry */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Featured Products</h2>
              <p className="text-muted max-w-2xl mx-auto">
                Browse our popular products — click &quot;Enquire Now&quot; to get instant pricing on WhatsApp
              </p>
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredProducts.map((product) => (
              <StaggerItem key={product.id}>
                <div className="bg-white rounded-xl overflow-hidden border border-gray-100 card-hover group">
                  {/* Product Image Placeholder */}
                  <div className="aspect-[16/10] bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center relative overflow-hidden">
                    <Package size={40} className="text-secondary/20" />
                    {product.badge && (
                      <span className="absolute top-3 left-3 badge-primary text-[10px]">{product.badge}</span>
                    )}
                  </div>
                  <div className="p-5">
                    <span className="inline-block px-2.5 py-0.5 bg-surface text-muted text-[11px] font-medium rounded mb-2.5">
                      {product.category}
                    </span>
                    <h3 className="text-base font-bold text-primary mb-1 group-hover:text-secondary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-muted text-sm mb-3 line-clamp-2">{product.description}</p>
                    <p className="text-secondary font-bold text-sm mb-4">{product.price}</p>
                    <a
                      href={`https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent(`Hi, I'm interested in ${product.name}. Please share the details and best price.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 bg-whatsapp/10 text-whatsapp-dark font-semibold rounded-lg hover:bg-whatsapp hover:text-white transition-all text-sm flex items-center justify-center gap-2"
                    >
                      <MessageCircle size={15} />
                      Enquire Now
                    </a>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <FadeIn>
            <div className="text-center mt-10">
              <Link href="/products" className="btn-primary">
                View All Products
                <ChevronRight size={18} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* GEM Section */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Content */}
                <div className="p-8 lg:p-12">
                  <span className="badge-success mb-4 inline-flex">
                    <Building2 size={12} />
                    Government e-Marketplace
                  </span>
                  <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
                    {gemInfo.title}
                  </h2>
                  <p className="text-muted leading-relaxed mb-6">
                    {gemInfo.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {gemInfo.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-muted">
                        <CheckCircle size={16} className="text-success mt-0.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent("Hi, I'm interested in GEM procurement for government department. Please share the details.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp"
                  >
                    <MessageCircle size={18} />
                    {gemInfo.ctaText}
                  </a>
                </div>

                {/* Visual */}
                <div className="bg-gradient-to-br from-primary to-primary-light p-8 lg:p-12 flex items-center justify-center">
                  <div className="text-center">
                    <Building2 size={64} className="text-white/20 mx-auto mb-4" />
                    <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-4">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-white/90 text-sm font-medium">Active on GEM Portal</span>
                    </div>
                    <p className="text-white/60 text-sm">
                      Supplying IT Hardware to<br />Government Departments
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">What Our Customers Say</h2>
              <p className="text-muted max-w-2xl mx-auto">
                Trusted by hundreds of happy customers across Bengaluru
              </p>
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.slice(0, 3).map((review) => (
              <StaggerItem key={review.name}>
                <div className="bg-surface rounded-xl p-7 border border-gray-100 card-hover-subtle h-full flex flex-col">
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
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

          <FadeIn>
            <div className="text-center mt-10">
              <Link href="/testimonials" className="btn-outline">
                Read More Reviews
                <ChevronRight size={18} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Brands Section */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Brands We Deal With</h2>
              <p className="text-muted max-w-2xl mx-auto">
                Authorized dealer of top international brands
              </p>
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {brands.map((brand) => (
              <StaggerItem key={brand}>
                <div className="bg-white rounded-lg p-5 flex items-center justify-center border border-gray-100 card-hover-subtle">
                  <span className="text-gray-600 font-bold text-sm">{brand}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-72 h-72 bg-secondary/8 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-accent/8 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5">
              Ready to Upgrade Your IT Infrastructure?
            </h2>
            <p className="text-blue-100/70 text-lg mb-8 max-w-2xl mx-auto">
              Get expert advice and competitive quotes for all your computer, networking, and IT needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent("Hi, I'd like to get a quote for IT products/services.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp !py-4 !px-8 !text-base"
              >
                <MessageCircle size={20} />
                Get Quote on WhatsApp
              </a>
              <a href="tel:+918050773494" className="btn-ghost !text-white border border-white/15 hover:bg-white/10 !py-4 !px-8 !text-base">
                Call: +91 80507 73494
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
