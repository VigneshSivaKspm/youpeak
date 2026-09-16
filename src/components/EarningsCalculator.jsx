import React, { useState, useEffect } from "react";
import {
  Sparkles,
  ArrowRight,
  Tv,
  ThumbsUp,
  Users,
  Wallet,
  Coins,
} from "lucide-react";

const TIERS = [
  { id: "free", name: "Free", price: 0, cap: 500, capINR: 5 },
  { id: "bronze", name: "Bronze", price: 999, cap: 2000, capINR: 20 },
  { id: "silver", name: "Silver", price: 2499, cap: 4000, capINR: 40 },
  { id: "gold", name: "Gold", price: 4999, cap: 12000, capINR: 120 },
  { id: "platinum", name: "Platinum", price: 9999, cap: 16667, capINR: 166.67 },
];

function Slider({
  label,
  icon: Icon,
  iconClass,
  val,
  min,
  max,
  step,
  onChange,
  colorClass,
  hint,
}) {
  const pct = ((val - min) / (max - min)) * 100;
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <span className="flex items-center gap-2 text-sm font-bold text-white/80">
          <span
            className={`w-6 h-6 rounded-lg flex items-center justify-center ${iconClass}`}
          >
            <Icon className="w-3.5 h-3.5" />
          </span>
          {label}
        </span>
        <span className={`text-sm font-black font-mono ${colorClass}`}>
          {typeof val === "number" ? val.toLocaleString() : val}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={val}
        onChange={(e) => onChange(Number(e.target.value))}
        className={`w-full h-2 rounded-full cursor-pointer outline-none appearance-none`}
        style={{
          background: `linear-gradient(to right, ${colorClass === "text-emerald-400" ? "#10b981" : colorClass === "text-violet-400" ? "#8b5cf6" : "#f59e0b"} ${pct}%, rgba(255,255,255,0.1) ${pct}%)`,
        }}
      />
      <div className="flex justify-between text-[10px] text-white/25">
        <span>{hint[0]}</span>
        <span>{hint[1]}</span>
      </div>
    </div>
  );
}

export default function EarningsCalculator({ onOpenQr }) {
  const [tier, setTier] = useState("silver");
  const [watch, setWatch] = useState(60);
  const [engage, setEngage] = useState(15);
  const [refs, setRefs] = useState(5);
  const [displayed, setDisplayed] = useState(0);

  const activeTier = TIERS.find((t) => t.id === tier);

  const watchCoins = Math.floor((watch / 10) * 12) + (watch >= 120 ? 500 : 0);
  const engCoins = engage * 4;
  const adCoins = 20 * 25;
  const checkIn = 25;
  const raw = watchCoins + engCoins + adCoins + checkIn;
  const capped = Math.min(raw, activeTier.cap);
  const dailyINR = capped / 100;
  const monthly = Math.round(dailyINR * 30 + refs * 200);

  useEffect(() => {
    let current = displayed;
    const target = monthly;
    const diff = target - current;
    if (diff === 0) return;
    const steps = 20;
    const inc = diff / steps;
    let step = 0;
    const t = setInterval(() => {
      step++;
      current += inc;
      if (step >= steps) {
        setDisplayed(target);
        clearInterval(t);
      } else setDisplayed(Math.round(current));
    }, 16);
    return () => clearInterval(t);
  }, [monthly]);

  const comparisonText = () => {
    if (monthly < 500) return "Covers your monthly coffee and data!";
    if (monthly < 2000) return "Pays your internet bill every month!";
    if (monthly < 5000) return "Monthly pocket money — automatically!";
    return "Serious side income — build your savings!";
  };

  return (
    <section
      id="calculator"
      className="section px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-amber-500/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-500/8 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold"
            style={{
              background: "rgba(245,158,11,0.12)",
              border: "1px solid rgba(245,158,11,0.25)",
              color: "#fbbf24",
            }}
          >
            <Sparkles className="w-3.5 h-3.5" /> Live Earnings Calculator
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight">
            How Much Will <span className="text-gradient-gold">You Earn?</span>
          </h2>
          <p className="text-white/50 text-base">
            Drag the sliders below and see your projected payout in real time
          </p>
        </div>

        {/* MAIN CARD */}
        <div
          className="glass-card rounded-3xl overflow-hidden"
          style={{ border: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* LEFT: CONTROLS */}
            <div className="lg:col-span-7 p-8 sm:p-10 space-y-8">
              {/* TIER SELECTOR */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-white/40 mb-4">
                  Step 1: Choose Your Starter Pass
                </p>
                <div className="grid grid-cols-5 gap-2">
                  {TIERS.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setTier(t.id)}
                      className={`p-3 rounded-2xl text-center transition-all duration-200 ${
                        tier === t.id
                          ? "bg-gradient-to-br from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/30 scale-105"
                          : "glass text-white/50 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <div className="text-[11px] font-black">{t.name}</div>
                      <div className="text-[10px] mt-0.5 font-bold opacity-70">
                        {t.price === 0 ? "Free" : `₹${t.price / 1000}K`}
                      </div>
                      <div className="text-[9px] mt-1 opacity-50">
                        ≤₹{t.capINR}/d
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* SLIDERS */}
              <div className="space-y-6">
                <Slider
                  label="Daily Watch Time"
                  icon={Tv}
                  iconClass="icon-cyan"
                  val={watch}
                  min={15}
                  max={180}
                  step={15}
                  onChange={setWatch}
                  colorClass="text-emerald-400"
                  hint={["15 min (Quick)", "180 min (Marathon +500 bonus)"]}
                />
                <Slider
                  label="Daily Likes & Comments"
                  icon={ThumbsUp}
                  iconClass="icon-green"
                  val={engage}
                  min={2}
                  max={60}
                  step={2}
                  onChange={setEngage}
                  colorClass="text-emerald-400"
                  hint={["2 actions (Lazy)", "60 actions (Power user)"]}
                />
                <Slider
                  label="Friends Invited This Month"
                  icon={Users}
                  iconClass="icon-purple"
                  val={refs}
                  min={0}
                  max={30}
                  step={1}
                  onChange={setRefs}
                  colorClass="text-amber-400"
                  hint={["0 (Solo)", "30 friends = ₹6,000 bonus"]}
                />
              </div>

              {/* INFO NOTE */}
              <div
                className="flex items-start gap-2.5 text-xs text-white/30 p-4 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.04)",
                }}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400/50 mt-0.5 shrink-0" />
                Based on real YouPeak economy: 100 coins = ₹1 INR, 20 ads/day @
                25 coins each, daily cap applies per tier.
              </div>
            </div>

            {/* RIGHT: RESULT PANEL */}
            <div
              className="lg:col-span-5 flex items-center justify-center p-8 sm:p-10 relative"
              style={{
                background:
                  "linear-gradient(135deg, rgba(245,158,11,0.06) 0%, rgba(16,185,129,0.06) 100%)",
                borderLeft: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="text-center space-y-6 w-full max-w-xs">
                {/* ICON */}
                <div className="flex justify-center">
                  <div className="w-20 h-20 rounded-3xl icon-gold flex items-center justify-center animate-float">
                    <Wallet className="w-10 h-10" />
                  </div>
                </div>

                {/* MAIN NUMBER */}
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2">
                    Projected Monthly Income
                  </div>
                  <div className="font-display font-black text-6xl sm:text-7xl text-gradient-gold leading-none">
                    ₹{displayed.toLocaleString("en-IN")}
                  </div>
                  <div className="text-white/30 text-sm mt-2">
                    per month to your UPI
                  </div>
                </div>

                {/* BREAKDOWN */}
                <div className="grid grid-cols-2 gap-3">
                  <div
                    className="text-center p-4 rounded-2xl"
                    style={{
                      background: "rgba(16,185,129,0.1)",
                      border: "1px solid rgba(16,185,129,0.2)",
                    }}
                  >
                    <div className="text-emerald-400 font-black text-xl">
                      ₹{dailyINR.toFixed(2)}
                    </div>
                    <div className="text-white/40 text-[11px] mt-1">
                      Per Day
                    </div>
                  </div>
                  <div
                    className="text-center p-4 rounded-2xl"
                    style={{
                      background: "rgba(245,158,11,0.1)",
                      border: "1px solid rgba(245,158,11,0.2)",
                    }}
                  >
                    <div className="text-amber-400 font-black text-xl">
                      ₹{refs * 200}
                    </div>
                    <div className="text-white/40 text-[11px] mt-1">
                      Referral Bonus
                    </div>
                  </div>
                </div>

                {/* COMPARISON */}
                <div
                  className="flex items-center gap-2 text-xs text-white/50 p-3 rounded-xl justify-center"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400/70 shrink-0" />
                  {comparisonText()}
                </div>

                {/* CTA */}
                <a
                  href="#download"
                  className="w-full btn-primary text-center block text-sm"
                >
                  Start Earning Now — Free
                </a>
                <button
                  onClick={onOpenQr}
                  className="text-xs text-white/30 hover:text-white/60 transition-colors flex items-center justify-center gap-1 mx-auto"
                >
                  Scan QR to download <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
