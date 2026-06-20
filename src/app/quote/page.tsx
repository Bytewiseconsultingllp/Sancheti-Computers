"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { FadeIn } from "@/components/Animations";

const productCategories = [
  "Laptops",
  "Desktops",
  "Gaming Systems",
  "Printers",
  "Networking Equipment",
  "SSDs & Storage",
  "RAM & Components",
  "Monitors",
  "CCTV Products",
  "Computer Accessories",
  "Software",
  "Other",
];

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    category: "",
    quantity: "",
    budget: "",
    requirements: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `New Quote Request:\nName: ${formData.name}\nCompany: ${formData.company}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nCategory: ${formData.category}\nQuantity: ${formData.quantity}\nBudget: ${formData.budget}\nRequirements: ${formData.requirements}`;
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: "", company: "", phone: "", email: "", category: "", quantity: "", budget: "", requirements: "" });
  };

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Request a Quote</h1>
            <p className="text-blue-100/80 text-lg max-w-2xl mx-auto">
              Tell us your requirements and we&apos;ll provide the best competitive prices
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            {submitted ? (
              <div className="bg-surface rounded-3xl p-12 border border-gray-100 text-center">
                <CheckCircle size={64} className="text-green-500 mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-primary mb-3">Quote Request Submitted!</h2>
                <p className="text-gray-500 mb-8">
                  Thank you for your interest. We&apos;ll get back to you with the best prices shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-3 bg-secondary text-white font-semibold rounded-xl hover:bg-blue-700 transition-all"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <div className="bg-surface rounded-3xl p-8 lg:p-12 border border-gray-100">
                <h2 className="text-2xl font-bold text-primary mb-8">Fill in Your Requirements</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <input
                      type="text"
                      placeholder="Customer Name *"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 bg-white rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary"
                    />
                    <input
                      type="text"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3.5 bg-white rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 bg-white rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 bg-white rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary"
                    />
                  </div>

                  <select
                    required
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3.5 bg-white rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary text-gray-600"
                  >
                    <option value="">Select Product Category *</option>
                    {productCategories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <input
                      type="text"
                      placeholder="Quantity"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full px-4 py-3.5 bg-white rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary"
                    />
                    <input
                      type="text"
                      placeholder="Budget (e.g., ₹50,000)"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3.5 bg-white rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary"
                    />
                  </div>

                  <textarea
                    placeholder="Detailed Requirements *"
                    rows={5}
                    required
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    className="w-full px-4 py-3.5 bg-white rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary resize-none"
                  />

                  <button
                    type="submit"
                    className="w-full py-4 bg-secondary text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-secondary/25 flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    Submit Quote Request
                  </button>
                </form>
              </div>
            )}
          </FadeIn>
        </div>
      </section>
    </>
  );
}
