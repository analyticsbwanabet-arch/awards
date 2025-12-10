import React from "react";
import { Award, Target, Users } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-[#FBFBFB] dark:bg-gray-900 py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-16">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl text-black dark:text-white mb-4">
            About the Awards
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto" />
        </div>

        {/* Main Content - 2 Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
          {/* Text Content */}
          <div>
            <h3 className="font-montserrat font-semibold text-2xl md:text-3xl text-black dark:text-white mb-4">
              Celebrating Excellence
            </h3>
            <p className="font-inter text-base md:text-lg text-[#4D4D4D] dark:text-gray-300 leading-7 md:leading-8 mb-6">
              The Zambia Betting Awards is the premier recognition platform for
              outstanding achievements in Zambia's betting and gaming industry.
              Our annual ceremony honors operators, innovators, and
              professionals who demonstrate exceptional commitment to
              excellence, integrity, and responsible gaming practices.
            </p>
            <p className="font-inter text-base md:text-lg text-[#4D4D4D] dark:text-gray-300 leading-7 md:leading-8">
              Organized by the Zambia Betting Association (ZBA), these awards
              celebrate the industry's contribution to economic growth,
              technological innovation, and community development while
              promoting the highest standards of corporate responsibility.
            </p>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-[#D4AF37] to-[#50C878] rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 bg-black/20" />
              <img src="/images/hosts.jpg"
                alt="Awards Ceremony"
                
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Award className="w-24 h-24 text-white opacity-90" />
              </div>
            </div>
          </div>
        </div>

        {/* Mission Cards */}
        <div className="grid sm:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-[#E8E8E8] dark:border-gray-700 hover:border-[#D4AF37] dark:hover:border-[#D4AF37] transition-all duration-300 hover:shadow-lg">
            <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-[#D4AF37]" />
            </div>
            <h4 className="font-montserrat font-semibold text-lg text-black dark:text-white mb-2">
              Our Mission
            </h4>
            <p className="font-inter text-sm text-[#4D4D4D] dark:text-gray-300 leading-6">
              To recognize and reward excellence, innovation, and integrity in
              Zambia's betting industry while promoting responsible gaming
              practices.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-[#E8E8E8] dark:border-gray-700 hover:border-[#50C878] dark:hover:border-[#50C878] transition-all duration-300 hover:shadow-lg">
            <div className="w-12 h-12 bg-[#50C878]/10 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-[#50C878]" />
            </div>
            <h4 className="font-montserrat font-semibold text-lg text-black dark:text-white mb-2">
              Industry Leadership
            </h4>
            <p className="font-inter text-sm text-[#4D4D4D] dark:text-gray-300 leading-6">
              Championing professional standards and best practices that elevate
              the entire betting industry ecosystem in Zambia.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-[#E8E8E8] dark:border-gray-700 hover:border-[#D4AF37] dark:hover:border-[#D4AF37] transition-all duration-300 hover:shadow-lg">
            <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-[#D4AF37]" />
            </div>
            <h4 className="font-montserrat font-semibold text-lg text-black dark:text-white mb-2">
              Community Impact
            </h4>
            <p className="font-inter text-sm text-[#4D4D4D] dark:text-gray-300 leading-6">
              Celebrating organizations that contribute to economic development
              and demonstrate commitment to social responsibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
