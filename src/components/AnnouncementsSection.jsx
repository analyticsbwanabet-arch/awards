import React from "react";
import { Calendar, ChevronRight } from "lucide-react";

export default function AnnouncementsSection() {
  const announcements = [
    {
      date: "Dec 1, 2025",
      title: "Nominations Now Open",
      excerpt:
        "We are thrilled to announce that nominations for the 2025 Zambia Betting Awards are now officially open...",
      link: "#",
    },
    {
      date: "Nov 28, 2025",
      title: "Event Venue Confirmed",
      excerpt:
        "The prestigious Mulungushi International Conference Centre will host this year's ceremony on December 15th...",
      link: "#",
    },
    {
      date: "Nov 20, 2025",
      title: "Meet Our Panel of Judges",
      excerpt:
        "We're proud to introduce our distinguished panel of industry experts who will evaluate this year's nominees...",
      link: "#",
    },
    {
      date: "Nov 15, 2025",
      title: "Early Bird Tickets Available",
      excerpt:
        "Secure your spot at the most prestigious event in Zambia's betting industry with our special early bird rates...",
      link: "#",
    },
  ];

  return (
    <section
      id="announcements"
      className="relative bg-white dark:bg-gray-800 py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-16">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl text-black dark:text-white mb-4">
            Latest Announcements
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto mb-6" />
          <p className="font-inter text-base md:text-lg text-[#4D4D4D] dark:text-gray-300 max-w-2xl mx-auto">
            Stay updated with the latest news and updates
          </p>
        </div>

        {/* Announcements Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {announcements.map((announcement, index) => (
            <div
              key={index}
              className="bg-[#FBFBFB] dark:bg-gray-900 rounded-lg border border-[#E8E8E8] dark:border-gray-700 overflow-hidden hover:border-[#D4AF37] dark:hover:border-[#D4AF37] transition-all duration-300 hover:shadow-lg group"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-4 h-4 text-[#D4AF37]" />
                  <span className="font-inter text-xs text-[#D4AF37] uppercase tracking-wide">
                    {announcement.date}
                  </span>
                </div>
                <h3 className="font-montserrat font-semibold text-xl text-black dark:text-white mb-3 leading-snug">
                  {announcement.title}
                </h3>
                <p className="font-inter text-sm text-[#4D4D4D] dark:text-gray-300 leading-6 mb-4">
                  {announcement.excerpt}
                </p>
                <a
                  href={announcement.link}
                  className="inline-flex items-center gap-2 font-inter text-sm text-[#D4AF37] hover:text-[#C19A2E] transition-colors group-hover:gap-3 duration-200"
                >
                  Read More
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
