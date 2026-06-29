"use client";

import { useState } from "react";
import { Send, CheckCircle, MessageCircle } from "lucide-react";
import { FadeIn } from "@/components/Animations";
import { businessInfo } from "@/lib/data";

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

const customerTypes = [
  "Individual Buyer (B2C)",
  "Business / Enterprise (B2B)",
  "Government Department (GEM)",
  "Educational Institution",
  "Other",
];

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    customerType: "",
    category: "",
    quantity: "",
    budget: "",
    requirements: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Customer Type: ${formData.customerType}\nCategory: ${formData.category}\nQuantity: ${formData.quantity}\nBudget: ${formData.budget}\nRequirements: ${formData.requirements}`;
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          product: formData.category,
          category: formData.customerType,
          message,
          source: "quote",
        }),
      });
      const data = await res.json();
      if (data.whatsappUrl) {
        window.open(data.whatsappUrl, "_blank");
      }
    } catch {
      const text = `New Quote Request:\nName: ${formData.name}\nCompany: ${formData.company}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nCustomer Type: ${formData.customerType}\nCategory: ${formData.category}\nQuantity: ${formData.quantity}\nBudget: ${formData.budget}\nRequirements: ${formData.requirements}`;
      window.open(`https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
    }
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: "", company: "", phone: "", email: "", customerType: "", category: "", quantity: "", budget: "", requirements: "" });
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
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            {submitted ? (
              <div className="bg-surface rounded-2xl p-10 lg:p-12 border border-gray-100 text-center">
                <CheckCircle size={56} className="text-success mx-auto mb-5" />
                <h2 className="text-2xl font-bold text-primary mb-3">Quote Request Submitted!</h2>
                <p className="text-muted mb-8">
                  Thank you for your interest. We&apos;ll get back to you with the best prices shortly.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-primary"
                  >
                    Submit Another Request
                  </button>
                  <a
                    href={`https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent("Hi, I just submitted a quote request. Please check.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp"
                  >
                    <MessageCircle size={18} />
                    Follow up on WhatsApp
                  </a>
                </div>
              </div>
            ) : (
              <div className="bg-surface rounded-2xl p-7 lg:p-10 border border-gray-100">
                <h2 className="text-xl font-bold text-primary mb-6">Fill in Your Requirements</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Customer Name *"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="input-field"
                    />
                    <input
                      type="text"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="input-field"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="input-field"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="input-field"
                    />
                  </div>

                  <select
                    required
                    value={formData.customerType}
                    onChange={(e) => setFormData({ ...formData, customerType: e.target.value })}
                    className="input-field text-muted"
                  >
                    <option value="">Customer Type *</option>
                    {customerTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>

                  <select
                    required
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="input-field text-muted"
                  >
                    <option value="">Product Category *</option>
                    {productCategories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Quantity"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="input-field"
                    />
                    <input
                      type="text"
                      placeholder="Budget (e.g., ₹50,000)"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="input-field"
                    />
                  </div>

                  <textarea
                    placeholder="Detailed Requirements *"
                    rows={5}
                    required
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    className="input-field resize-none"
                  />

                  <button type="submit" className="btn-primary w-full !py-3.5">
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
