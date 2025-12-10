import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";

export default function ContactFooter() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate form submission
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(""), 3000);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <section
        id="contact"
        className="relative bg-[#FBFBFB] dark:bg-gray-900 py-16 md:py-24"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-16">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl text-black dark:text-white mb-4">
              Get In Touch
            </h2>
            <div className="w-16 h-1 bg-[#D4AF37] mx-auto mb-6" />
            <p className="font-inter text-base md:text-lg text-[#4D4D4D] dark:text-gray-300 max-w-2xl mx-auto">
              Have questions? We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-inter text-sm font-semibold text-black dark:text-white mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-[#E8E8E8] dark:border-gray-700 rounded-sm text-black dark:text-white font-inter text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block font-inter text-sm font-semibold text-black dark:text-white mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-[#E8E8E8] dark:border-gray-700 rounded-sm text-black dark:text-white font-inter text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block font-inter text-sm font-semibold text-black dark:text-white mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-[#E8E8E8] dark:border-gray-700 rounded-sm text-black dark:text-white font-inter text-sm focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-[#D4AF37] text-black font-inter font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded-sm hover:bg-[#C19A2E] active:bg-[#B08A25] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "sending"
                    ? "Sending..."
                    : status === "success"
                      ? "Message Sent!"
                      : "Send Message"}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-lg text-black dark:text-white mb-1">
                    Email
                  </h3>
                  <p className="font-inter text-sm text-[#4D4D4D] dark:text-gray-300">
                    info@zambiabettingawards.co.zm
                  </p>
                  <p className="font-inter text-sm text-[#4D4D4D] dark:text-gray-300">
                    awards@zba.co.zm
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#50C878]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#50C878]" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-lg text-black dark:text-white mb-1">
                    Phone
                  </h3>
                  <p className="font-inter text-sm text-[#4D4D4D] dark:text-gray-300">
                    +260 211 123 456
                  </p>
                  <p className="font-inter text-sm text-[#4D4D4D] dark:text-gray-300">
                    +260 977 123 456
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-lg text-black dark:text-white mb-1">
                    Address
                  </h3>
                  <p className="font-inter text-sm text-[#4D4D4D] dark:text-gray-300">
                    Zambia Betting Association
                    <br />
                    Plot 123, Independence Avenue
                    <br />
                    Lusaka, Zambia
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-montserrat font-semibold text-lg text-black dark:text-white mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center hover:bg-[#D4AF37] hover:text-white transition-all duration-200 group"
                  >
                    <Facebook className="w-5 h-5 text-[#D4AF37] group-hover:text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center hover:bg-[#D4AF37] hover:text-white transition-all duration-200 group"
                  >
                    <Linkedin className="w-5 h-5 text-[#D4AF37] group-hover:text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center hover:bg-[#D4AF37] hover:text-white transition-all duration-200 group"
                  >
                    <Instagram className="w-5 h-5 text-[#D4AF37] group-hover:text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center hover:bg-[#D4AF37] hover:text-white transition-all duration-200 group"
                  >
                    <Youtube className="w-5 h-5 text-[#D4AF37] group-hover:text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-inter text-sm text-gray-400 text-center md:text-left">
              © 2025 Zambia Betting Association. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#hero"
                className="font-inter text-sm text-gray-400 hover:text-[#D4AF37] transition-colors"
              >
                Home
              </a>
              <a
                href="#categories"
                className="font-inter text-sm text-gray-400 hover:text-[#D4AF37] transition-colors"
              >
                Categories
              </a>
              <a
                href="#tickets"
                className="font-inter text-sm text-gray-400 hover:text-[#D4AF37] transition-colors"
              >
                Tickets
              </a>
              <a
                href="#contact"
                className="font-inter text-sm text-gray-400 hover:text-[#D4AF37] transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
