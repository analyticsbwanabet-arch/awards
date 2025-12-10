import React from "react";
import { ChevronRight } from "lucide-react";

export default function NomineesSection({ onNavigate }) {
  const featuredNominees = [
    {
      name: "Bwanabet Zambia",
      category: "Betting Company of the Year",
      logo: "images/logo.jpg",
    },
    {
      name: "100xbet",
      category: "Best Mobile Platform",
      logo: "images/logo2.jpg",
    },
    {
      name: "Bwanabet Zambia",
      category: "Most Innovative Product",
      logo: "images/logo.jpg",
    },
    {
      name: "Bwanabet Zambia",
      category: "Best Customer Service",
      logo: "images/logo.jpg",
    },
  ];

  return (
    <section
      id="nominees"
      className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-16">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Featured Nominees
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto mb-6" />
          <p className="font-inter text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            Meet some of this year's outstanding nominees
          </p>
        </div>

        {/* Nominees Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {featuredNominees.map((nominee, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="aspect-square bg-gradient-to-br from-[#D4AF37]/20 to-[#50C878]/20 relative overflow-hidden">
                <img
                  src={nominee.logo}
                  alt={nominee.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="font-montserrat font-semibold text-lg text-white mb-2">
                  {nominee.name}
                </h3>
                <p className="font-inter text-sm text-[#D4AF37]">
                  {nominee.category}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button
            onClick={() => onNavigate("nominees-full")}
            className="inline-flex items-center gap-2 bg-[#D4AF37] text-black font-inter font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded-sm hover:bg-[#C19A2E] active:bg-[#B08A25] transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            See Full Nominees List
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
