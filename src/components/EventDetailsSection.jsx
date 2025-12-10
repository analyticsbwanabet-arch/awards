import React from "react";
import { Calendar, MapPin, Clock, Users, Shirt, Ticket } from "lucide-react";

export default function EventDetailsSection({ onNavigate }) {
  const timeline = [
    { time: "17:00", event: "Registration & Red Carpet" },
    { time: "18:00", event: "Opening Ceremony" },
    { time: "18:30", event: "Awards Presentation Begins" },
    { time: "20:00", event: "Dinner & Networking" },
    { time: "21:30", event: "After Party" },
  ];

  const ticketTypes = [
    {
      name: "Standard",
      price: "K500",
      features: ["Event Access", "Dinner", "Welcome Drink"],
    },
    {
      name: "VIP",
      price: "K1,200",
      features: [
        "Premium Seating",
        "Full Dinner",
        "Open Bar",
        "VIP Lounge Access",
      ],
    },
    {
      name: "Corporate Table",
      price: "K8,000",
      features: [
        "Table of 10",
        "Premium Location",
        "Branding Opportunity",
        "VIP Treatment",
      ],
    },
  ];

  return (
    <section
      id="tickets"
      className="relative bg-[#FBFBFB] dark:bg-gray-900 py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-16">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl text-black dark:text-white mb-4">
            Event Details
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto" />
        </div>

        {/* Event Info Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Left: Details */}
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-5 bg-white dark:bg-gray-800 rounded-lg border border-[#E8E8E8] dark:border-gray-700">
              <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Calendar className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <h3 className="font-montserrat font-semibold text-lg text-black dark:text-white mb-1">
                  Date
                </h3>
                <p className="font-inter text-sm text-[#4D4D4D] dark:text-gray-300">
                  December 15, 2025
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-white dark:bg-gray-800 rounded-lg border border-[#E8E8E8] dark:border-gray-700">
              <div className="w-12 h-12 bg-[#50C878]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-[#50C878]" />
              </div>
              <div>
                <h3 className="font-montserrat font-semibold text-lg text-black dark:text-white mb-1">
                  Time
                </h3>
                <p className="font-inter text-sm text-[#4D4D4D] dark:text-gray-300">
                  5:00 PM - 11:00 PM
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-white dark:bg-gray-800 rounded-lg border border-[#E8E8E8] dark:border-gray-700">
              <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <h3 className="font-montserrat font-semibold text-lg text-black dark:text-white mb-1">
                  Venue
                </h3>
                <p className="font-inter text-sm text-[#4D4D4D] dark:text-gray-300">
                  Mulungushi International Conference Centre, Lusaka
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-white dark:bg-gray-800 rounded-lg border border-[#E8E8E8] dark:border-gray-700">
              <div className="w-12 h-12 bg-[#50C878]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shirt className="w-6 h-6 text-[#50C878]" />
              </div>
              <div>
                <h3 className="font-montserrat font-semibold text-lg text-black dark:text-white mb-1">
                  Dress Code
                </h3>
                <p className="font-inter text-sm text-[#4D4D4D] dark:text-gray-300">
                  Black Tie / Formal Evening Wear
                </p>
              </div>
            </div>
          </div>

          {/* Right: Map Placeholder */}
          <div className="bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden h-[400px] relative">
            <img
              src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Venue"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-white mx-auto mb-2" />
                <p className="font-inter text-white text-sm">
                  Mulungushi International Conference Centre
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="font-montserrat font-bold text-2xl md:text-3xl text-black dark:text-white mb-8 text-center">
            Event Program
          </h3>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 mb-6 last:mb-0"
              >
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="font-montserrat font-semibold text-lg text-[#D4AF37]">
                    {item.time}
                  </span>
                </div>
                <div className="flex-shrink-0 w-px bg-[#D4AF37] relative">
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#D4AF37] rounded-full" />
                </div>
                <div className="flex-1 pb-6">
                  <p className="font-inter text-base text-black dark:text-white">
                    {item.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ticket Options */}
        <div>
          <h3 className="font-montserrat font-bold text-2xl md:text-3xl text-black dark:text-white mb-8 text-center">
            Ticket Options
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {ticketTypes.map((ticket, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg border-2 border-[#E8E8E8] dark:border-gray-700 hover:border-[#D4AF37] dark:hover:border-[#D4AF37] transition-all duration-300 overflow-hidden"
              >
                <div className="bg-gradient-to-br from-[#D4AF37] to-[#C19A2E] p-6 text-center">
                  <h4 className="font-montserrat font-bold text-xl text-black mb-2">
                    {ticket.name}
                  </h4>
                  <p className="font-montserrat font-bold text-3xl text-black">
                    {ticket.price}
                  </p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {ticket.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 font-inter text-sm text-[#4D4D4D] dark:text-gray-300"
                      >
                        <div className="w-1.5 h-1.5 bg-[#50C878] rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate("contact")}
              className="inline-flex items-center gap-2 bg-[#D4AF37] text-black font-inter font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded-sm hover:bg-[#C19A2E] active:bg-[#B08A25] transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Ticket className="w-4 h-4" />
              Purchase Tickets
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
