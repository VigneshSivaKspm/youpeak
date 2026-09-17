import React from "react";
import { Mail, MapPin, ShieldCheck, Globe } from "lucide-react";

const LINKS = {
  Product: [
    { label: "Download", href: "#download" },
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#tiers" },
    { label: "Earnings Calculator", href: "#calculator" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy.html" },
    { label: "Terms of Service", href: "/terms.html" },
    { label: "Cookie Policy", href: "#" },
    { label: "Content Policy", href: "#" },
    { label: "Grievance Officer", href: "#compliance" },
  ],
  Support: [
    { label: "Help Center", href: "#faq" },
    { label: "Contact Us", href: "mailto:support@youpeak.in" },
    { label: "Creator Support", href: "mailto:creators@youpeak.in" },
    { label: "Report Content", href: "mailto:grievance@youpeak.in" },
    { label: "Business Enquiry", href: "mailto:business@youpeak.in" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-8 px-4 sm:px-6 lg:px-8 border-t border-white/[0.04]">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(16,185,129,0.3), rgba(139,92,246,0.3), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 mb-16">
          {/* BRAND COLUMN */}
          <div className="col-span-2 md:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-emerald-500/20">
                <img
                  src="/assets/app_logo.png"
                  alt="YouPeak"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.src = "https://placehold.co/80/10b981/fff?text=YP";
                  }}
                />
              </div>
              <div>
                <span className="font-display font-black text-xl text-white">
                  You<span className="text-gradient-primary">Peak</span>
                </span>
                <p className="text-[10px] text-white/30 -mt-0.5">
                  YouPeak Digital Solutions Pvt Ltd
                </p>
              </div>
            </div>

            <p className="text-white/40 text-sm leading-relaxed">
              India's leading watch-and-earn platform. Real rewards. Instant UPI
              cashouts. Up to 90% creator revenue share.
            </p>

            <div className="space-y-2 text-xs text-white/35">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 shrink-0" />
                <a
                  href="mailto:support@youpeak.in"
                  className="hover:text-white transition-colors"
                >
                  support@youpeak.in
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                <span>India</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 shrink-0" />
                <span>youpeak.in</span>
              </div>
            </div>

            {/* Razorpay badge */}
            <div
              className="flex items-center gap-2 px-3 py-2 rounded-xl w-fit"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <img
                src="/assets/razorPay.png"
                alt="Razorpay"
                className="h-5 object-contain"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
              <span className="text-[11px] text-white/30">
                Powered by Razorpay
              </span>
            </div>
          </div>

          {/* LINKS */}
          {Object.entries(LINKS).map(([title, links]) => (
            <div key={title} className="col-span-1 md:col-span-2 space-y-4">
              <h4 className="font-display font-bold text-sm text-white">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs text-white/35 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Download column */}
          <div className="col-span-2 md:col-span-2 space-y-4">
            <h4 className="font-display font-bold text-sm text-white">
              Download Now
            </h4>
            <div className="space-y-2">
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 p-3 rounded-xl text-xs font-semibold text-white transition-all"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <svg
                  className="w-5 h-5 text-emerald-500 shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Google Play Store
              </a>
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 p-3 rounded-xl text-xs font-semibold text-white transition-all"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <svg
                  className="w-5 h-5 text-white shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M15.97,4.69C16.55,3.96 16.96,2.94 16.85,1.91C15.96,1.95 14.88,2.51 14.24,3.25C13.67,3.91 13.18,4.96 13.31,5.97C14.31,6.05 15.36,5.43 15.97,4.69Z" />
                </svg>
                Apple App Store
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.04]">
          <p className="text-xs text-white/25 text-center sm:text-left">
            © 2026 YouPeak Digital Solutions Pvt Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-white/20">
            <a
              href="/privacy.html"
              className="hover:text-white/50 transition-colors"
            >
              Privacy
            </a>
            <a
              href="/terms.html"
              className="hover:text-white/50 transition-colors"
            >
              Terms
            </a>
            <a
              href="#compliance"
              className="hover:text-white/50 transition-colors"
            >
              Grievance
            </a>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-500/50" /> IT Rules
              2021 Compliant
            </span>
            <span className="flex items-center gap-1">
              <Globe className="w-3 h-3 text-white/30" /> Made in India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
