"use client";

import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import CategoriesSection from "../components/CategoriesSection";
import NomineesSection from "../components/NomineesSection";
import EventDetailsSection from "../components/EventDetailsSection";
import JudgesSection from "../components/JudgesSection";
import GallerySection from "../components/GallerySection";
import AnnouncementsSection from "../components/AnnouncementsSection";
import ContactFooter from "../components/ContactFooter";

export default function HomePage() {
  const smoothScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      {/* Navigation */}
      <Navigation onNavigate={smoothScrollTo} />

      {/* All Sections */}
      <Hero onNavigate={smoothScrollTo} />
      <AboutSection />
      <CategoriesSection />
      <NomineesSection onNavigate={smoothScrollTo} />
      <EventDetailsSection onNavigate={smoothScrollTo} />
      <JudgesSection />
      <GallerySection />
      <AnnouncementsSection />
      <ContactFooter />

      {/* Global Styles */}
      <style jsx global>{`
        .font-inter {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
        }
        .font-montserrat {
          font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
