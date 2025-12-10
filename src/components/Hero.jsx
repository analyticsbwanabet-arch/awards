import React, { useState, useEffect } from "react";
import { Calendar, MapPin } from "lucide-react";

export default function Hero({ onNavigate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const eventDate = new Date("2025-12-15T18:00:00");

    const timer = setInterval(() => {
      const now = new Date();
      const difference = eventDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with spotlight effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, #D4AF37 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#50C878] rounded-full animate-pulse delay-100" />
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse delay-200" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-5 py-8 sm:px-8 md:px-16 max-w-5xl mx-auto">
        {/* Trophy Icon */}
        <div className="mb-6 md:mb-8 flex justify-center">
          <div className="w-16 h-16 md:w-20 md:h-20 relative">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-full h-full text-[#D4AF37]"
            >
              <path
                d="M6 9C6 8.44772 6.44772 8 7 8H17C17.5523 8 18 8.44772 18 9V11C18 13.2091 16.2091 15 14 15H13V17H15C15.5523 17 16 17.4477 16 18V19C16 19.5523 15.5523 20 15 20H9C8.44772 20 8 19.5523 8 19V18C8 17.4477 8.44772 17 9 17H11V15H10C7.79086 15 6 13.2091 6 11V9Z"
                fill="currentColor"
              />
              <path
                d="M4 8H6V10C6 10.3506 6.06015 10.6872 6.17071 11H4C3.44772 11 3 10.5523 3 10V9C3 8.44772 3.44772 8 4 8Z"
                fill="currentColor"
              />
              <path
                d="M18 10V8H20C20.5523 8 21 8.44772 21 9V10C21 10.5523 20.5523 11 20 11H17.8293C17.9398 10.6872 18 10.3506 18 10Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>

        <h1 className="font-montserrat font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4 md:mb-6 leading-tight">
          Zambia Betting Awards
        </h1>

        <p className="font-inter text-lg sm:text-xl md:text-2xl text-[#50C878] mb-6 md:mb-8 font-light tracking-wide">
          Celebrating Excellence in Zambia's Betting Industry
        </p>

        {/* Event Details */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8 md:mb-10 text-white">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#D4AF37]" />
            <span className="font-inter text-sm md:text-base">
              December 15, 2025
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[#D4AF37]" />
            <span className="font-inter text-sm md:text-base">
              Mulungushi International Conference Centre
            </span>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="mb-8 md:mb-10">
          <p className="font-inter text-xs uppercase tracking-widest text-gray-400 mb-4">
            Event starts in
          </p>
          <div className="flex justify-center gap-3 sm:gap-6">
            {[
              { value: timeLeft.days, label: "Days" },
              { value: timeLeft.hours, label: "Hours" },
              { value: timeLeft.minutes, label: "Minutes" },
              { value: timeLeft.seconds, label: "Seconds" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-black/50 backdrop-blur-sm border border-[#D4AF37]/30 rounded px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 min-w-[60px] sm:min-w-[80px]">
                  <span className="font-montserrat font-bold text-2xl sm:text-3xl md:text-4xl text-[#D4AF37]">
                    {String(item.value).padStart(2, "0")}
                  </span>
                </div>
                <span className="font-inter text-xs text-gray-400 mt-2 uppercase tracking-wide">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => onNavigate("categories")}
            className="bg-[#D4AF37] text-black font-inter font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded-sm hover:bg-[#C19A2E] active:bg-[#B08A25] transition-all duration-200 w-full sm:w-auto shadow-lg hover:shadow-xl"
          >
            View Categories
          </button>
          <button
            onClick={() => onNavigate("tickets")}
            className="border-2 border-[#D4AF37] text-[#D4AF37] font-inter font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded-sm hover:bg-[#D4AF37]/10 active:bg-[#D4AF37]/20 transition-all duration-200 w-full sm:w-auto"
          >
            Buy Tickets
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#D4AF37]/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-[#D4AF37] rounded-full" />
        </div>
      </div>
    </section>
  );
}
