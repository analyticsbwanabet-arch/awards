import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function JudgesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const judges = [
    {
      name: "Dr. Sarah Mwansa",
      title: "Gaming Regulation Expert",
      image:
        "images/director3.jpg",
    },
    {
      name: "John Banda",
      title: "Industry Analyst",
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    },
    {
      name: "Grace Tembo",
      title: "Marketing Director, ZBA",
      image:
        "images/director1.jpg",
    },
    {
      name: "Michael Zulu",
      title: "Technology Consultant",
      image:
        "images/director.jpg",
    },
    {
      name: "Patricia Phiri",
      title: "Consumer Rights Advocate",
      image:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    },
  ];

  const itemsPerView = 4;
  const maxSlide = Math.max(0, judges.length - itemsPerView);

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlide));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section
      id="judges"
      className="relative bg-white dark:bg-gray-800 py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-16">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl text-black dark:text-white mb-4">
            Our Judges
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto mb-6" />
          <p className="font-inter text-base md:text-lg text-[#4D4D4D] dark:text-gray-300 max-w-2xl mx-auto">
            A distinguished panel of industry experts ensuring fair and
            transparent evaluation of all nominees
          </p>
        </div>

        {/* Judges Slider */}
        <div className="relative mb-12">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentSlide * (100 / itemsPerView)}%)`,
              }}
            >
              {judges.map((judge, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="bg-[#FBFBFB] dark:bg-gray-900 rounded-lg overflow-hidden border border-[#E8E8E8] dark:border-gray-700 hover:border-[#D4AF37] dark:hover:border-[#D4AF37] transition-all duration-300 hover:shadow-lg">
                    <div className="aspect-square bg-gradient-to-br from-[#D4AF37]/10 to-[#50C878]/10 overflow-hidden">
                      <img
                        src={judge.image}
                        alt={judge.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-5 text-center">
                      <h3 className="font-montserrat font-semibold text-lg text-black dark:text-white mb-1">
                        {judge.name}
                      </h3>
                      <p className="font-inter text-sm text-[#D4AF37]">
                        {judge.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          {judges.length > itemsPerView && (
            <>
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white dark:bg-gray-700 rounded-full shadow-lg flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#D4AF37] hover:text-white transition-all duration-200"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                disabled={currentSlide === maxSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white dark:bg-gray-700 rounded-full shadow-lg flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#D4AF37] hover:text-white transition-all duration-200"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {/* Selection Process */}
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#D4AF37]/5 to-[#50C878]/5 p-8 rounded-lg border border-[#E8E8E8] dark:border-gray-700">
          <h3 className="font-montserrat font-bold text-xl md:text-2xl text-black dark:text-white mb-4 text-center">
            Selection Process
          </h3>
          <p className="font-inter text-sm md:text-base text-[#4D4D4D] dark:text-gray-300 leading-7 text-center">
            Our independent panel of judges evaluates all nominees based on
            strict criteria including innovation, customer satisfaction,
            regulatory compliance, and industry impact. Each category is
            assessed through a combination of quantitative metrics and
            qualitative review, ensuring a fair and transparent selection
            process that truly recognizes excellence in Zambia's betting
            industry.
          </p>
        </div>
      </div>
    </section>
  );
}
