"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { FadeIn, FadeInLeft, FadeInRight } from "@/components/Animations";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    product: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `New Contact Form Submission:\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nProduct: ${formData.product}\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/918050773494?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <FadeInLeft>
              <div>
                <h2 className="text-3xl font-bold text-primary mb-8">Get In Touch</h2>

                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin size={22} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Address</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        112, Sadar Patrappa Road,<br />
                        Dodpete, Nagarathpete,<br />
                        Bengaluru, Karnataka – 560002
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center shrink-0">
                      <Phone size={22} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Phone</h3>
                      <a href="tel:+918050773494" className="text-gray-500 text-sm hover:text-secondary transition-colors">
                        +91 80507 73494
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center shrink-0">
                      <Mail size={22} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Email</h3>
                      <a href="mailto:sancheticomputers888@gmail.com" className="text-gray-500 text-sm hover:text-secondary transition-colors">
                        sancheticomputers888@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center shrink-0">
                      <Clock size={22} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Business Hours</h3>
                      <p className="text-gray-500 text-sm">Monday – Saturday: 10:00 AM – 8:00 PM</p>
                      <p className="text-gray-500 text-sm">Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                {/* Google Maps */}
                <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.985943404576!2d77.5726!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14f3b3b3b3b3%3A0x1234567890abcdef!2sSP%20Road%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="300"
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
              <div className="bg-surface rounded-3xl p-8 lg:p-10 border border-gray-100">
                <h2 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h2>

                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-primary mb-2">Message Sent!</h3>
                    <p className="text-gray-500">We&apos;ll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <input
                      type="text"
                      placeholder="Your Name *"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 bg-white rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary"
                    />
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
                    <select
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      className="w-full px-4 py-3.5 bg-white rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary text-gray-600"
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
                      className="w-full px-4 py-3.5 bg-white rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary resize-none"
                    />
                    <button
                      type="submit"
                      className="w-full py-4 bg-secondary text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-secondary/25 flex items-center justify-center gap-2"
                    >
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
