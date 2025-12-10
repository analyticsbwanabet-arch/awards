import React, { useState } from "react";
import { X } from "lucide-react";

export default function GallerySection() {
  const [lightboxImage, setLightboxImage] = useState(null);

  const galleryImages = [
    "images/cocktail.jpg",
    "images/finally.jpg",
    "images/candid.jpg",
    "images/marketing.jpg",
    "images/toast.jpg",
    "images/res.jpg",
  ];

  return (
    <>
      <section
        id="gallery"
        className="relative bg-[#FBFBFB] dark:bg-gray-900 py-16 md:py-24"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-16">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl text-black dark:text-white mb-4">
              Event Gallery
            </h2>
            <div className="w-16 h-1 bg-[#D4AF37] mx-auto mb-6" />
            <p className="font-inter text-base md:text-lg text-[#4D4D4D] dark:text-gray-300 max-w-2xl mx-auto">
              Highlights from previous Zambia Betting Awards ceremonies
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                onClick={() => setLightboxImage(image)}
                className="aspect-square bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden cursor-pointer group relative"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center">
                    <span className="text-black text-xl font-bold">+</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <img
            src={lightboxImage}
            alt="Gallery"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
