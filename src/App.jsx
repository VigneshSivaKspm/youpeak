import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PersonaTabs from "./components/PersonaTabs";
import FeaturesGrid from "./components/FeaturesGrid";
import EarningsCalculator from "./components/EarningsCalculator";
import AppScreenshots from "./components/AppScreenshots";
import HowItWorks from "./components/HowItWorks";
import TiersPricing from "./components/TiersPricing";
import GrievanceCompliance from "./components/GrievanceCompliance";
import FaqAccordion from "./components/FaqAccordion";
import DownloadCTA from "./components/DownloadCTA";
import Footer from "./components/Footer";
import QrModal from "./components/QrModal";
import ChatWidget from "./components/ChatWidget";
import AuthModal from "./components/AuthModal";

export default function App() {
  const [qrOpen, setQrOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [authTier, setAuthTier] = useState("free");
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem("youpeak_user");
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const handleOpenAuth = (tier = "free") => {
    setAuthTier(tier);
    setAuthOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar
        onOpenQr={() => setQrOpen(true)}
        onOpenAuth={handleOpenAuth}
        currentUser={currentUser}
      />
      <Hero onOpenQr={() => setQrOpen(true)} onOpenAuth={handleOpenAuth} />
      <PersonaTabs onSelectPass={handleOpenAuth} />
      <FeaturesGrid />
      <EarningsCalculator
        onOpenQr={() => setQrOpen(true)}
        onSelectPass={handleOpenAuth}
      />
      <AppScreenshots />
      <HowItWorks onOpenQr={() => setQrOpen(true)} />
      <TiersPricing onSelectPass={handleOpenAuth} />
      <GrievanceCompliance />
      <FaqAccordion />
      <DownloadCTA onOpenQr={() => setQrOpen(true)} />
      <Footer />
      <ChatWidget />
      {qrOpen && <QrModal onClose={() => setQrOpen(false)} />}
      {authOpen && (
        <AuthModal
          isOpen={authOpen}
          onClose={() => setAuthOpen(false)}
          initialTier={authTier}
          currentUser={currentUser}
          onAuthSuccess={(user) => {
            setCurrentUser(user);
          }}
          onLogout={() => {
            localStorage.removeItem("youpeak_user");
            setCurrentUser(null);
            setAuthOpen(false);
          }}
        />
      )}
    </div>
  );
}
