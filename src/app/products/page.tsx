"use client";

import { useState } from "react";
import { Search, X, Send, Package } from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/Animations";
import { products, productCategories } from "@/lib/data";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [inquiryProduct, setInquiryProduct] = useState("");
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleInquiry = (productName: string) => {
    setInquiryProduct(productName);
    setShowInquiryForm(true);
  };

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi, I'm interested in ${inquiryProduct}. ${formData.message}`;
    const whatsappUrl = `https://wa.me/918050773494?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    setShowInquiryForm(false);
    setFormData({ name: "", phone: "", email: "", message: "" });
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
      <section className="py-8 bg-white border-b border-gray-100 sticky top-16 lg:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 w-full">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-surface rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              {productCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? "bg-secondary text-white shadow-lg shadow-secondary/25"
                      : "bg-surface text-gray-600 hover:bg-gray-200 border border-gray-200"
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
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <FadeIn>
              <div className="text-center py-20">
                <Package size={48} className="text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-500 mb-2">No products found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria</p>
              </div>
            </FadeIn>
          ) : (
            <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <StaggerItem key={product.id}>
                  <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 card-hover group">
                    {/* Product Image Placeholder */}
                    <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center relative overflow-hidden">
                      <Package size={48} className="text-secondary/30" />
                      <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/5 transition-all duration-300" />
                    </div>
                    <div className="p-6">
                      <span className="inline-block px-3 py-1 bg-blue-50 text-secondary text-xs font-medium rounded-full mb-3">
                        {product.category}
                      </span>
                      <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-secondary font-semibold text-sm mb-4">{product.price}</p>
                      <button
                        onClick={() => handleInquiry(product.name)}
                        className="w-full py-2.5 bg-secondary/10 text-secondary font-medium rounded-lg hover:bg-secondary hover:text-white transition-all text-sm"
                      >
                        Inquire Now
                      </button>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          )}
        </div>
      </section>

      {/* Inquiry Form Modal */}
      {showInquiryForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-primary">Product Inquiry</h3>
              <button onClick={() => setShowInquiryForm(false)} className="text-gray-400 hover:text-gray-600">
                <X size={20} />
              </button>
            </div>
            <p className="text-gray-500 text-sm mb-6">
              Product: <span className="font-semibold text-primary">{inquiryProduct}</span>
            </p>
            <form onSubmit={handleSubmitInquiry} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-surface rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 bg-surface rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary"
              />
              <input
                type="email"
                placeholder="Email (optional)"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-surface rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary"
              />
              <textarea
                placeholder="Your message or requirements..."
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-surface rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary resize-none"
              />
              <button
                type="submit"
                className="w-full py-3 bg-secondary text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-secondary/25 flex items-center justify-center gap-2"
              >
                <Send size={16} />
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
