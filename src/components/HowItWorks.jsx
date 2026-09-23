import React from "react";
import { Download, Play, Smartphone } from "lucide-react";

const STEPS = [
  {
    step: "01",
    icon: "icon_step_download",
    title: "Download the App",
    desc: "Install YouPeak on Android or iOS. Create your account in 30 seconds with OTP login.",
    color: "from-emerald-500 to-cyan-500",
    glow: "rgba(16,185,129,0.3)",
  },
  {
    step: "02",
    icon: "icon_step_watch",
    title: "Watch & Engage",
    desc: "Browse trending videos and shorts. Like what you enjoy. Comment. Watch daily ads. It all counts!",
    color: "from-violet-500 to-purple-600",
    glow: "rgba(139,92,246,0.3)",
  },
  {
    step: "03",
    icon: "icon_step_collect",
    title: "Collect Coins",
    desc: "Coins hit your wallet automatically. Every action rewarded. Check in daily for bonus coins.",
    color: "from-amber-400 to-orange-500",
    glow: "rgba(245,158,11,0.3)",
  },
  {
    step: "04",
    icon: "icon_step_withdraw",
    title: "Cash Out to UPI",
    desc: "100 coins = ₹1. Tap withdraw, choose UPI or bank, done. Arrives in seconds.",
    color: "from-blue-500 to-cyan-500",
    glow: "rgba(59,130,246,0.3)",
  },
];

export default function HowItWorks({ onOpenQr }) {
  return (
    <section
      id="how-it-works"
      className="section px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage: "url(/assets/bg/dots.webp)",
          backgroundSize: "512px 512px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      <div className="max-w-7xl mx-auto relative">
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
            So simple, it takes 4 steps
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
            Download{" "}
            <img
              src="/assets/emoji/emoji_phone.webp"
              alt=""
              className="inline w-10 h-10 -mt-2 object-contain"
            />{" "}
            Watch{" "}
            <Play
              className="w-7 h-7 text-violet-600 inline -mt-1"
              fill="currentColor"
            />
            <br />
            <span className="text-gradient-blue">Earn · Withdraw</span>
          </h2>
          <p className="text-slate-500 text-base">
            That's literally it. No surveys. No fake tasks. No waiting weeks.
          </p>
        </div>

        {/* STEP CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line (desktop) */}
          <div className="absolute top-14 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-emerald-500/30 via-violet-500/30 to-blue-500/30 hidden lg:block" />

          {STEPS.map((s, i) => {
            return (
              <div key={i} className="relative group">
                <div
                  className="glass-card rounded-3xl p-8 text-center h-full flex flex-col items-center gap-4"
                  style={{ border: "1px solid rgba(15,23,42,0.06)" }}
                >
                  <div className="relative">
                    <img
                      src={`/assets/icons/${s.icon}.webp`}
                      alt=""
                      loading="lazy"
                      className="w-24 h-24 object-contain drop-shadow-xl group-hover:scale-110 transition-transform"
                    />
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-slate-100 text-[10px] font-black text-slate-900 flex items-center justify-center border border-slate-200">
                      {s.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
                      {s.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                  <div
                    className="w-full h-0.5 rounded-full mt-auto"
                    style={{
                      background: `linear-gradient(to right, ${s.glow}, transparent)`,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <a href="#download" className="btn-primary flex items-center gap-2">
              <Download className="w-4 h-4" /> Download Now — It's Free!
            </a>
            <button
              onClick={onOpenQr}
              className="btn-ghost text-sm flex items-center gap-2"
            >
              <Smartphone className="w-4 h-4" /> Scan QR to Install
            </button>
          </div>
          <p className="text-slate-400 text-xs mt-4">
            250,000+ users already earning every day
          </p>
        </div>
      </div>
    </section>
  );
}
