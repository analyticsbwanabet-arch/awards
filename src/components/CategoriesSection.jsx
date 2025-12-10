import React from "react";
import {
  Trophy,
  Star,
  TrendingUp,
  Users,
  Award,
  Zap,
  Shield,
  Heart,
} from "lucide-react";

export default function CategoriesSection() {
  const categories = [
    {
      icon: Trophy,
      name: "Betting Company of the Year",
      description:
        "Recognizing overall excellence in operations, innovation, and customer service.",
      color: "#D4AF37",
    },
    {
      icon: Star,
      name: "Best Mobile Betting Platform",
      description:
        "Outstanding mobile user experience and innovative app features.",
      color: "#50C878",
    },
    {
      icon: TrendingUp,
      name: "Most Innovative Product",
      description:
        "Revolutionary betting products or features introduced this year.",
      color: "#D4AF37",
    },
    {
      icon: Users,
      name: "Best Customer Service",
      description: "Exceptional customer support and satisfaction ratings.",
      color: "#50C878",
    },
    {
      icon: Award,
      name: "Responsible Gaming Initiative",
      description:
        "Leading programs promoting safe and responsible betting practices.",
      color: "#D4AF37",
    },
    {
      icon: Zap,
      name: "Best Marketing Campaign",
      description:
        "Most creative and effective marketing initiative of the year.",
      color: "#50C878",
    },
    {
      icon: Shield,
      name: "Best Sports Betting Platform",
      description: "Superior sports betting offerings and competitive odds.",
      color: "#D4AF37",
    },
    {
      icon: Heart,
      name: "Community Impact Award",
      description: "Outstanding contribution to community development and CSR.",
      color: "#50C878",
    },
  ];

  return (
    <section
      id="categories"
      className="relative bg-white dark:bg-gray-800 py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-16">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl text-black dark:text-white mb-4">
            Award Categories
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto mb-6" />
          <p className="font-inter text-base md:text-lg text-[#4D4D4D] dark:text-gray-300 max-w-2xl mx-auto">
            Excellence across multiple dimensions of the betting industry
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group bg-[#FBFBFB] dark:bg-gray-900 p-6 rounded-lg border border-[#E8E8E8] dark:border-gray-700 hover:border-[#D4AF37] dark:hover:border-[#D4AF37] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              >
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${category.color}15` }}
                >
                  <Icon className="w-7 h-7" style={{ color: category.color }} />
                </div>
                <h3 className="font-montserrat font-semibold text-lg text-black dark:text-white mb-2 leading-snug">
                  {category.name}
                </h3>
                <p className="font-inter text-sm text-[#4D4D4D] dark:text-gray-300 leading-6">
                  {category.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
