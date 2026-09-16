import React from "react";
import { Check, Star, Smartphone, Download } from "lucide-react";

const CHECKS = [
  "Sign up in 30 seconds",
  "Zero joining fee",
  "Earn from day one",
  "Instant UPI cashout",
];

export default function DownloadCTA({ onOpenQr }) {
  return (
    <section
      id="download"
      className="section px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* MASSIVE BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full opacity-30 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(16,185,129,0.4) 0%, rgba(139,92,246,0.3) 50%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative">
        <div
          className="relative overflow-hidden rounded-3xl p-1"
          style={{
            background:
              "linear-gradient(135deg, rgba(16,185,129,0.5) 0%, rgba(139,92,246,0.5) 50%, rgba(245,158,11,0.5) 100%)",
          }}
        >
          <div
            className="rounded-[22px] p-10 sm:p-16 relative overflow-hidden text-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(5,15,10,0.97) 0%, rgba(8,4,20,0.97) 100%)",
            }}
          >
            {/* Decorative orbs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-500/10 rounded-full blur-2xl pointer-events-none" />

            {/* APP ICON */}
            <div className="relative inline-flex mb-8">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-emerald-500 to-violet-600 blur opacity-60 animate-glow-pulse" />
              <div className="relative w-24 h-24 rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl">
                <img
                  src="/assets/app_logo.png"
                  alt="YouPeak"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.src =
                      "https://placehold.co/100/10b981/fff?text=YP";
                  }}
                />
              </div>
            </div>

            {/* HEADLINE */}
            <h2 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight leading-tight mb-4">
              Your Money Is <br />
              <span className="text-gradient-rainbow">Waiting For You</span>
            </h2>
            <p className="text-white/50 text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Download YouPeak free. Start watching. Start earning. First
              withdrawal possible within your first 24 hours.
            </p>

            {/* CHECKLIST */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {CHECKS.map((c, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-sm text-white/60"
                >
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  {c}
                </div>
              ))}
            </div>

            {/* STORE BUTTONS */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noreferrer"
                className="store-btn bg-white text-gray-900 shadow-2xl shadow-black/40 hover:shadow-emerald-500/20"
              >
                <svg
                  className="w-7 h-7 text-emerald-600 shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="leading-none">
                  <div className="text-[10px] font-medium text-gray-500 uppercase tracking-widest">
                    GET IT ON
                  </div>
                  <div className="text-base font-black tracking-tight font-display mt-0.5">
                    Google Play
                  </div>
                </div>
              </a>
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noreferrer"
                className="store-btn glass text-white shadow-2xl shadow-black/40"
                style={{ border: "1px solid rgba(255,255,255,0.15)" }}
              >
                <svg
                  className="w-7 h-7 text-white shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M15.97,4.69C16.55,3.96 16.96,2.94 16.85,1.91C15.96,1.95 14.88,2.51 14.24,3.25C13.67,3.91 13.18,4.96 13.31,5.97C14.31,6.05 15.36,5.43 15.97,4.69Z" />
                </svg>
                <div className="leading-none">
                  <div className="text-[10px] font-medium text-white/40 uppercase tracking-widest">
                    DOWNLOAD ON THE
                  </div>
                  <div className="text-base font-black tracking-tight font-display text-white mt-0.5">
                    App Store
                  </div>
                </div>
              </a>
              <button
                onClick={onOpenQr}
                className="btn-ghost flex items-center gap-2 text-sm"
              >
                <Smartphone className="w-4 h-4" /> Scan QR
              </button>
            </div>

            {/* RATING */}
            <div className="flex items-center justify-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-amber-400 text-amber-400"
                />
              ))}
              <span className="text-white/40 text-sm ml-1">
                4.8 · 12,400+ reviews
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
