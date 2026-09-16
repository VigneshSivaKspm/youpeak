import React, { useState } from "react";
import {
  Check,
  Eye,
  Film,
  Star,
  Gift,
  Tag,
  Award,
  Gem,
  Crown,
  TrendingUp,
} from "lucide-react";

const TASKER_TIERS = [
  {
    id: "free",
    name: "Free",
    price: "₹0",
    period: "Always free",
    monthlyMax: "₹150",
    dailyCap: "₹5",
    popular: false,
    credits: null,
    features: [
      "Up to ₹5/day",
      "20 ads per day",
      "5 likes per day",
      "2 comments per day",
      "Standard UPI cashout",
    ],
    color: "from-gray-500 to-gray-600",
    btnClass: "bg-white/10 hover:bg-white/15 text-white",
    TierIcon: Tag,
  },
  {
    id: "bronze",
    name: "Bronze",
    price: "₹999",
    period: "One-time",
    monthlyMax: "₹600",
    dailyCap: "₹20",
    popular: false,
    credits: "₹1,000 Ad Credits FREE",
    features: [
      "Up to ₹20/day",
      "20 ads per day",
      "10 likes per day",
      "5 comments per day",
      "₹1,000 credits bonus",
    ],
    color: "from-amber-700 to-yellow-600",
    btnClass: "bg-amber-700/80 hover:bg-amber-700 text-white",
    TierIcon: Award,
  },
  {
    id: "silver",
    name: "Silver",
    price: "₹2,499",
    period: "One-time",
    monthlyMax: "₹1,200",
    dailyCap: "₹40",
    popular: true,
    credits: "₹2,500 Ad Credits FREE",
    features: [
      "Up to ₹40/day",
      "20 ads per day",
      "20 likes per day",
      "10 comments per day",
      "₹2,500 credits bonus",
    ],
    color: "from-emerald-500 to-cyan-500",
    btnClass: "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white",
    TierIcon: Award,
  },
  {
    id: "gold",
    name: "Gold",
    price: "₹4,999",
    period: "One-time",
    monthlyMax: "₹3,600",
    dailyCap: "₹120",
    popular: false,
    credits: "₹5,000 Ad Credits FREE",
    features: [
      "Up to ₹120/day",
      "20 ads per day",
      "40 likes per day",
      "20 comments per day",
      "₹5,000 credits bonus",
    ],
    color: "from-amber-400 to-yellow-500",
    btnClass: "bg-gradient-to-r from-amber-400 to-yellow-500 text-gray-900",
    TierIcon: Crown,
  },
  {
    id: "platinum",
    name: "Platinum",
    price: "₹9,999",
    period: "One-time",
    monthlyMax: "₹5,000+",
    dailyCap: "₹167",
    popular: false,
    credits: "₹10,000 Ad Credits FREE",
    features: [
      "Up to ₹167/day",
      "20 ads per day",
      "60 likes per day",
      "30 comments per day",
      "₹10,000 credits bonus",
    ],
    color: "from-violet-500 to-purple-600",
    btnClass: "bg-gradient-to-r from-violet-500 to-purple-600 text-white",
    TierIcon: Gem,
  },
];

const CREATOR_TIERS = [
  {
    name: "Classic",
    price: "Free",
    subs: "0+ Subs",
    split: "50%",
    max: "₹1,000/video",
    color: "from-gray-500 to-gray-600",
    TierIcon: Tag,
  },
  {
    name: "Starter VIP",
    price: "₹2,999",
    subs: "Any Subs",
    split: "60%",
    max: "₹2,000/video",
    color: "from-emerald-500 to-teal-500",
    TierIcon: Award,
  },
  {
    name: "Silver VIP",
    price: "₹1,999",
    subs: "1K–10K Subs",
    split: "70%",
    max: "₹5,000/video",
    color: "from-blue-500 to-cyan-500",
    TierIcon: Award,
  },
  {
    name: "Gold VIP",
    price: "₹1,499",
    subs: "10K–100K Subs",
    split: "80%",
    max: "₹15,000/video",
    color: "from-amber-400 to-orange-500",
    TierIcon: Crown,
  },
  {
    name: "Platinum VIP",
    price: "Invite Only",
    subs: "100K+ Subs",
    split: "90%",
    max: "Unlimited",
    color: "from-violet-500 to-purple-600",
    TierIcon: Gem,
  },
];

export default function TiersPricing() {
  const [mode, setMode] = useState("tasker");

  return (
    <section id="tiers" className="section px-4 sm:px-6 lg:px-8 relative">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(16,185,129,0.4), rgba(139,92,246,0.4), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
            Transparent pricing. No fine print.
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight leading-tight">
            Pick Your <span className="text-gradient-gold">Power Level</span>
          </h2>
          <p className="text-white/50 text-base">
            Start free. Upgrade anytime. 100% Ad Credits matched on every paid
            tier.
          </p>
        </div>

        {/* SWITCHER */}
        <div className="flex justify-center mb-12">
          <div className="glass rounded-2xl p-1.5 flex gap-1 border border-white/5">
            <button
              onClick={() => setMode("tasker")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all ${mode === "tasker" ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg" : "text-white/50 hover:text-white"}`}
            >
              <Eye className="w-4 h-4" /> Viewer Passes
            </button>
            <button
              onClick={() => setMode("creator")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all ${mode === "creator" ? "bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg" : "text-white/50 hover:text-white"}`}
            >
              <Film className="w-4 h-4" /> Creator VIP
            </button>
          </div>
        </div>

        {/* TASKER TIERS */}
        {mode === "tasker" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {TASKER_TIERS.map((t) => {
              const TierIcon = t.TierIcon;
              return (
                <div
                  key={t.id}
                  className={`tier-card relative flex flex-col glass-card ${t.popular ? "tier-card-popular" : ""}`}
                  style={
                    t.popular
                      ? {
                          border: "2px solid rgba(16,185,129,0.5)",
                          boxShadow: "0 0 40px rgba(16,185,129,0.15)",
                        }
                      : { border: "1px solid rgba(255,255,255,0.06)" }
                  }
                >
                  {t.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[11px] font-black text-white bg-gradient-to-r from-emerald-500 to-cyan-500 shadow-lg whitespace-nowrap flex items-center gap-1.5">
                      <Star className="w-3 h-3 fill-white" /> Most Popular
                    </div>
                  )}

                  <div
                    className={`h-1 rounded-full bg-gradient-to-r ${t.color} mb-6`}
                  />

                  <div className="flex items-center gap-2 mb-1">
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center bg-gradient-to-br ${t.color} shadow`}
                    >
                      <TierIcon className="w-3.5 h-3.5 text-white" />
                    </div>
                    <h3 className="font-display font-black text-base text-white">
                      {t.name}
                    </h3>
                  </div>

                  <div className="mt-3 mb-1">
                    <div className="font-display font-black text-3xl text-white">
                      {t.price}
                    </div>
                    <div className="text-white/40 text-[11px]">{t.period}</div>
                  </div>

                  <div
                    className="mt-3 mb-4 p-3 rounded-xl"
                    style={{ background: "rgba(255,255,255,0.04)" }}
                  >
                    <div className="text-xs text-white/40">Max per month</div>
                    <div
                      className={`font-black text-xl bg-gradient-to-r ${t.color} bg-clip-text text-transparent`}
                    >
                      {t.monthlyMax}
                    </div>
                    <div className="text-[10px] text-white/30">
                      (Daily cap: {t.dailyCap})
                    </div>
                    {t.credits && (
                      <div className="flex items-center gap-1 mt-2 text-[10px] font-bold text-amber-400">
                        <Gift className="w-3 h-3 shrink-0" /> {t.credits}
                      </div>
                    )}
                  </div>

                  <ul className="space-y-2 flex-1 mb-6">
                    {t.features.map((f, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-[12px] text-white/55"
                      >
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#download"
                    className={`w-full py-3 rounded-xl text-[12px] font-black text-center block transition-all ${t.btnClass}`}
                  >
                    {t.price === "₹0" ? "Start Free Now" : `Get ${t.name}`}
                  </a>
                </div>
              );
            })}
          </div>
        )}

        {/* CREATOR TIERS */}
        {mode === "creator" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {CREATOR_TIERS.map((t, i) => {
              const TierIcon = t.TierIcon;
              return (
                <div
                  key={i}
                  className="tier-card glass-card flex flex-col"
                  style={{ border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <div
                    className={`h-1 rounded-full bg-gradient-to-r ${t.color} mb-5`}
                  />

                  <div className="flex items-center gap-2 mb-1">
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center bg-gradient-to-br ${t.color} shadow`}
                    >
                      <TierIcon className="w-3.5 h-3.5 text-white" />
                    </div>
                    <h3 className="font-display font-black text-sm text-white">
                      {t.name}
                    </h3>
                  </div>
                  <div className="text-[11px] text-white/40 mt-1">{t.subs}</div>

                  <div className="mt-4 mb-3">
                    <div className="font-display font-black text-2xl text-white">
                      {t.price}
                    </div>
                    <div className="text-white/30 text-[11px]">
                      One-time upgrade
                    </div>
                  </div>

                  <div className="space-y-3 flex-1 mb-6">
                    <div
                      className="p-3 rounded-xl"
                      style={{ background: "rgba(255,255,255,0.04)" }}
                    >
                      <div className="flex items-center gap-1.5 text-[10px] text-white/30 mb-1">
                        <TrendingUp className="w-3 h-3" /> Your Revenue Share
                      </div>
                      <div
                        className={`font-black text-3xl bg-gradient-to-r ${t.color} bg-clip-text text-transparent`}
                      >
                        {t.split}
                      </div>
                    </div>
                    <div className="text-[11px] text-white/40">
                      <span className="text-white/60 font-bold">
                        Max per video:
                      </span>{" "}
                      {t.max}
                    </div>
                  </div>

                  <a
                    href="#download"
                    className={`w-full py-3 rounded-xl text-[12px] font-black text-center block text-white bg-gradient-to-r ${t.color} hover:opacity-90 transition-opacity`}
                  >
                    {t.price === "Free"
                      ? "Start Creating Free"
                      : "Unlock VIP Pass"}
                  </a>
                </div>
              );
            })}
          </div>
        )}

        <p className="text-center text-white/20 text-xs mt-10">
          100% matched Ad Credits deposited immediately on tier purchase. All
          prices are one-time. No recurring subscription.
        </p>
      </div>
    </section>
  );
}
