"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageCircle } from "lucide-react";
import { FadeIn, FadeInLeft, FadeInRight } from "@/components/Animations";
import { businessInfo } from "@/lib/data";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    product: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          product: formData.product,
          message: formData.message,
          source: "contact",
        }),
      });
      const data = await res.json();
      if (data.whatsappUrl) {
        window.open(data.whatsappUrl, "_blank");
      }
    } catch {
      const text = `New Contact Form Submission:\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nProduct: ${formData.product}\nMessage: ${formData.message}`;
      window.open(`https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
    }
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", phone: "", email: "", product: "", message: "" });
  };

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-blue-100/80 text-lg max-w-2xl mx-auto">
              Get in touch with us for all your IT needs
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
            {/* Contact Info */}
            <FadeInLeft>
              <div>
                <h2 className="text-3xl font-bold text-primary mb-8">Get In Touch</h2>

                <div className="space-y-5 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-secondary/10 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin size={20} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1 text-sm">Address</h3>
                      <p className="text-muted text-sm leading-relaxed">
                        {businessInfo.address.street},<br />
                        {businessInfo.address.area},<br />
                        {businessInfo.address.city}, {businessInfo.address.state} - {businessInfo.address.pincode}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-secondary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Phone size={20} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1 text-sm">Phone</h3>
                      <a href={`tel:${businessInfo.phone}`} className="text-muted text-sm hover:text-secondary transition-colors">
                        {businessInfo.phoneFormatted}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-secondary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Mail size={20} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1 text-sm">Email</h3>
                      <a href={`mailto:${businessInfo.email}`} className="text-muted text-sm hover:text-secondary transition-colors break-all">
                        {businessInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-secondary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Clock size={20} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1 text-sm">Business Hours</h3>
                      <p className="text-muted text-sm">{businessInfo.hours.days}: {businessInfo.hours.time}</p>
                      <p className="text-muted text-sm">Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <a
                  href={`https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent("Hi, I need information about your products/services.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp mb-6"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </a>

                {/* Google Maps */}
                <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm mt-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.985943404576!2d77.5726!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14f3b3b3b3b3%3A0x1234567890abcdef!2sSP%20Road%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="280"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Sancheti Computers Location"
                  />
                </div>
              </div>
            </FadeInLeft>

            {/* Contact Form */}
            <FadeInRight delay={0.2}>
              <div className="bg-surface rounded-2xl p-7 lg:p-9 border border-gray-100">
                <h2 className="text-xl font-bold text-primary mb-6">Send Us a Message</h2>

                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle size={48} className="text-success mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-primary mb-2">Message Sent!</h3>
                    <p className="text-muted text-sm">We&apos;ll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name *"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="input-field"
                    />
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
                    <select
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      className="input-field text-muted"
                    >
                      <option value="">Select Product Category</option>
                      <option value="Laptops">Laptops</option>
                      <option value="Desktops">Desktops</option>
                      <option value="Networking">Networking Equipment</option>
                      <option value="Printers">Printers</option>
                      <option value="CCTV">CCTV & Surveillance</option>
                      <option value="Software">Software</option>
                      <option value="Accessories">Computer Accessories</option>
                      <option value="Other">Other</option>
                    </select>
                    <textarea
                      placeholder="Your Message *"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="input-field resize-none"
                    />
                    <button type="submit" className="btn-primary w-full !py-3.5">
                      <Send size={18} />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>
    </>
  );
}
