"use client";

import { useState } from "react";
import { Search, X, Package, MessageCircle } from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/Animations";
import { products, productCategories, businessInfo } from "@/lib/data";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleProductEnquiry = async (productName: string) => {
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Website Visitor",
          phone: "Pending",
          product: productName,
          message: `Interested in ${productName}`,
          source: "product",
        }),
      });
      const data = await res.json();
      if (data.whatsappUrl) {
        window.open(data.whatsappUrl, "_blank");
      }
    } catch {
      window.open(
        `https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent(`Hi, I'm interested in ${productName}. Please share the details and best price.`)}`,
        "_blank"
      );
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Our Products</h1>
            <p className="text-blue-100/80 text-lg max-w-2xl mx-auto">
              Explore our wide range of IT products at competitive prices
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-6 bg-white border-b border-gray-100 sticky top-[108px] lg:top-[116px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 w-full">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-field !pl-10 !pr-10"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted hover:text-foreground transition-colors"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
              {productCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? "bg-secondary text-white shadow-sm"
                      : "bg-surface text-muted hover:bg-surface-alt border border-border"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <FadeIn>
              <div className="text-center py-20">
                <Package size={48} className="text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-muted mb-2">No products found</h3>
                <p className="text-muted/70">Try adjusting your search or filter criteria</p>
              </div>
            </FadeIn>
          ) : (
            <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filteredProducts.map((product) => (
                <StaggerItem key={product.id}>
                  <div className="bg-white rounded-xl overflow-hidden border border-gray-100 card-hover group h-full flex flex-col">
                    {/* Product Image Placeholder */}
                    <div className="aspect-[16/10] bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center relative overflow-hidden">
                      <Package size={40} className="text-secondary/20" />
                      {product.badge && (
                        <span className="absolute top-3 left-3 badge-primary text-[10px]">{product.badge}</span>
                      )}
                    </div>

                    <div className="p-5 flex flex-col flex-1">
                      <span className="inline-block px-2.5 py-0.5 bg-surface text-muted text-[11px] font-medium rounded mb-2.5 self-start">
                        {product.category}
                      </span>
                      <h3 className="text-base font-bold text-primary mb-1 group-hover:text-secondary transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-muted text-sm mb-2 line-clamp-2">{product.description}</p>

                      {/* Specs */}
                      {product.specs && (
                        <ul className="space-y-1 mb-4 flex-1">
                          {product.specs.map((spec) => (
                            <li key={spec} className="flex items-center gap-1.5 text-xs text-muted/80">
                              <span className="w-1 h-1 bg-secondary/40 rounded-full shrink-0" />
                              {spec}
                            </li>
                          ))}
                        </ul>
                      )}

                      <div className="mt-auto">
                        <p className="text-secondary font-bold text-sm mb-3">{product.price}</p>
                        <button
                          onClick={() => handleProductEnquiry(product.name)}
                          className="w-full py-2.5 bg-whatsapp/10 text-whatsapp-dark font-semibold rounded-lg hover:bg-whatsapp hover:text-white transition-all text-sm flex items-center justify-center gap-2"
                        >
                          <MessageCircle size={15} />
                          Enquire Now
                        </button>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
              Can&apos;t Find What You&apos;re Looking For?
            </h2>
            <p className="text-muted text-lg mb-8 max-w-2xl mx-auto">
              We stock products from 50+ brands. Tell us what you need and we&apos;ll get it for you at the best price.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent(
                  "Hi, I'm looking for a specific IT product. Can you help?"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
              <a href="tel:+918050773494" className="btn-outline">
                Call: +91 80507 73494
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
