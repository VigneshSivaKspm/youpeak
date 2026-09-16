import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import PersonaTabs from "./components/PersonaTabs";
import FeaturesGrid from "./components/FeaturesGrid";
import EarningsCalculator from "./components/EarningsCalculator";
import AppScreenshots from "./components/AppScreenshots";
import HowItWorks from "./components/HowItWorks";
import TiersPricing from "./components/TiersPricing";
import GrievanceCompliance from "./components/GrievanceCompliance";
import Testimonials from "./components/Testimonials";
import FaqAccordion from "./components/FaqAccordion";
import DownloadCTA from "./components/DownloadCTA";
import Footer from "./components/Footer";
import QrModal from "./components/QrModal";

export default function App() {
  const [qrOpen, setQrOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#020608] text-white">
      <Navbar onOpenQr={() => setQrOpen(true)} />
      <Hero onOpenQr={() => setQrOpen(true)} />
      <StatsBar />
      <PersonaTabs />
      <FeaturesGrid />
      <EarningsCalculator onOpenQr={() => setQrOpen(true)} />
      <AppScreenshots />
      <HowItWorks onOpenQr={() => setQrOpen(true)} />
      <TiersPricing />
      <Testimonials />
      <GrievanceCompliance />
      <FaqAccordion />
      <DownloadCTA onOpenQr={() => setQrOpen(true)} />
      <Footer />
      {qrOpen && <QrModal onClose={() => setQrOpen(false)} />}
    </div>
  );
}
