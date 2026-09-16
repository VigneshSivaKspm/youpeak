import React, { useState, useEffect } from "react";
import { Menu, X, Zap, Calculator } from "lucide-react";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#calculator", label: "Calculator", icon: Calculator },
  { href: "#tiers", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar({ onOpenQr }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-dark py-3 shadow-xl shadow-black/30"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* LOGO */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-500 to-violet-600 animate-glow-pulse blur-sm" />
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-violet-600 p-0.5 shadow-lg flex items-center justify-center overflow-hidden">
              <img
                src="/assets/app_logo.png"
                alt="YouPeak"
                className="w-full h-full object-contain rounded-[10px]"
                onError={(e) => {
                  e.target.src = "https://placehold.co/80/10b981/fff?text=YP";
                }}
              />
            </div>
          </div>
          <div>
            <span className="font-display font-black text-xl text-white tracking-tight">
              You<span className="text-gradient-primary">Peak</span>
            </span>
            <p className="text-[10px] text-white/40 font-medium -mt-0.5">
              by Legendary One
            </p>
          </div>
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.href}
                href={link.href}
                className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white/60 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
              >
                {Icon && <Icon className="w-3.5 h-3.5" />}
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* DESKTOP CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenQr}
            className="px-4 py-2 text-sm font-semibold text-white/60 hover:text-white transition-colors"
          >
            Scan QR
          </button>
          <a
            href="#download"
            className="btn-primary flex items-center gap-2 text-sm !py-2.5 !px-5"
          >
            <Zap className="w-4 h-4" />
            Download Free
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden flex items-center gap-2">
          <a
            href="#download"
            className="btn-primary text-xs !py-2 !px-4 flex items-center gap-1.5"
          >
            <Zap className="w-3.5 h-3.5" /> Get App
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-white/70 hover:text-white"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden glass-dark border-t border-white/5 px-4 py-6 space-y-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-all"
              >
                {Icon && <Icon className="w-4 h-4" />}
                {link.label}
              </a>
            );
          })}
          <div className="pt-3 space-y-2 border-t border-white/5">
            <button
              onClick={() => {
                setOpen(false);
                onOpenQr();
              }}
              className="w-full btn-ghost text-sm !py-3 flex items-center justify-center gap-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
              </svg>
              Scan QR Code
            </button>
            <a
              href="#download"
              onClick={() => setOpen(false)}
              className="w-full btn-primary text-sm !py-3 text-center flex items-center justify-center gap-2 block"
            >
              <Zap className="w-4 h-4" /> Download Free Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
