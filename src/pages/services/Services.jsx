import React from "react";
import PageHeader from "../../layout/PageHeader";
import ServicesGrid from "./components/ServicesGrid";
import StatsSection from "./components/StatsSection";
import VideoSection from "./components/VideoSection";
import ProblemsSection from "./components/ProblemsSection";
import QualitySection from "./components/QualitySection";
import ContactSection from "../contacts/Contact";



// Background image
import servicesBg from "/src/assets/vessel.jpg";

export default function Services() {
  return (
    <div>
      {/* 🔹 Top Page Header */}
      <PageHeader
        title="Services"
        subtitle="Our Expertise"
        background={servicesBg}
      />

      {/* 🔹 Sections */}
      <ServicesGrid />
      <StatsSection />
      <VideoSection />
      <ProblemsSection />
      <QualitySection />
      <ContactSection />
    </div>
    
  );
}
