import React, { useState, useEffect } from "react";
import {
  Sparkles,
  ArrowRight,
  Tv,
  ThumbsUp,
  Users,
  Wallet,
  Coins,
  Film,
  Calendar,
  CheckCircle2,
  Zap,
  Clock,
} from "lucide-react";

const TIERS = [
  {
    id: "free",
    name: "Free",
    fullName: "Level 1 Tasker (Free)",
    price: 0,
    priceLabel: "Free",
    cap: 500,
    capINR: 5,
    monthlyCap: 150,
    referralBonus: 2.5, // 250 Coins = ₹2.50
    referralLabel: "250 Coins (₹2.50) / ref",
  },
  {
    id: "bronze",
    name: "Bronze",
    fullName: "Bronze Tasker (Starter)",
    price: 999,
    priceLabel: "₹999",
    cap: 2000,
    capINR: 20,
    monthlyCap: 600,
    referralBonus: 99.9, // 10% = ₹99.90
    referralLabel: "10% (₹99.90) / ref",
  },
  {
    id: "silver",
    name: "Silver",
    fullName: "Silver Tasker (Intermediate)",
    price: 2499,
    priceLabel: "₹2,499",
    cap: 4000,
    capINR: 40,
    monthlyCap: 1200,
    referralBonus: 249.9, // 10% = ₹249.90
    referralLabel: "10% (₹249.90) / ref",
  },
  {
    id: "gold",
    name: "Gold",
    fullName: "Gold Tasker (Advanced)",
    price: 4999,
    priceLabel: "₹4,999",
    cap: 12000,
    capINR: 120,
    monthlyCap: 3600,
    referralBonus: 499.9, // 10% = ₹499.90
    referralLabel: "10% (₹499.90) / ref",
  },
  {
    id: "platinum",
    name: "Platinum",
    fullName: "Platinum Tasker (Regional Pro)",
    price: 9999,
    priceLabel: "₹9,999",
    cap: 16667,
    capINR: 166.67,
    monthlyCap: 5000,
    referralBonus: 999.9, // 10% = ₹999.90
    referralLabel: "10% (₹999.90) / ref",
  },
  {
    id: "diamond",
    name: "Diamond",
    fullName: "Diamond Pass (Special Pass)",
    price: 24999,
    priceLabel: "₹24,999/yr",
    cap: 33333,
    capINR: 333.33,
    monthlyCap: 10000,
    referralBonus: 2499.9, // 10% = ₹2,499.90
    referralLabel: "10% (₹2,499.90) / ref",
  },
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
        <span className="flex items-center gap-2 text-sm font-bold text-slate-700">
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
          background: `linear-gradient(to right, ${colorClass === "text-emerald-600" ? "#10b981" : colorClass === "text-violet-600" ? "#8b5cf6" : "#f59e0b"} ${pct}%, rgba(15,23,42,0.1) ${pct}%)`,
        }}
      />
      <div className="flex justify-between text-[10px] text-slate-400">
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

  // Activity score scales smoothly with user engagement
  const watchFactor = watch / 180;
  const engageFactor = engage / 60;
  const activityIntensity = Math.min(
    1.0,
    0.2 + watchFactor * 0.5 + engageFactor * 0.3,
  );
  const dailyINR = Math.min(
    activeTier.capINR,
    Math.round(activeTier.capINR * activityIntensity * 100) / 100,
  );
  const monthlyTasks = Math.min(
    activeTier.monthlyCap,
    Math.round(dailyINR * 30),
  );
  const monthlyReferrals =
    Math.round(refs * activeTier.referralBonus * 10) / 10;
  const monthly = Math.round(monthlyTasks + monthlyReferrals);

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
              color: "#b45309",
            }}
          >
            <Sparkles className="w-3.5 h-3.5" /> Live Earnings Calculator
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-slate-900 tracking-tight">
            How Much Will <span className="text-gradient-gold">You Earn?</span>
          </h2>
          <p className="text-slate-500 text-base">
            Drag the sliders below and see your projected payout in real time
          </p>
        </div>

        {/* MAIN CARD */}
        <div
          className="glass-card rounded-3xl overflow-hidden"
          style={{ border: "1px solid rgba(15,23,42,0.07)" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* LEFT: CONTROLS */}
            <div className="lg:col-span-7 p-8 sm:p-10 space-y-8">
              {/* TIER SELECTOR */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
                  Step 1: Choose Your Starter Pass
                </p>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {TIERS.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setTier(t.id)}
                      className={`p-3 rounded-2xl text-center transition-all duration-200 ${
                        tier === t.id
                          ? "bg-gradient-to-br from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/30 scale-105"
                          : "glass text-slate-500 hover:text-slate-900 hover:bg-slate-100"
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
                  colorClass="text-emerald-600"
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
                  colorClass="text-emerald-600"
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
                  colorClass="text-amber-600"
                  hint={[
                    "0 (Solo)",
                    `30 referrals = ₹${(30 * activeTier.referralBonus).toLocaleString("en-IN", { maximumFractionDigits: 1 })} bonus (${activeTier.referralLabel})`,
                  ]}
                />
              </div>

              {/* INFO NOTE */}
              <div
                className="flex items-start gap-2.5 text-xs text-slate-400 p-4 rounded-xl"
                style={{
                  background: "rgba(15,23,42,0.02)",
                  border: "1px solid rgba(15,23,42,0.04)",
                }}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" />
                Based on official YouPeak economy: 100 coins = ₹1 INR, 20
                ads/day, daily action caps and tier multipliers apply.
              </div>
            </div>

            {/* RIGHT: RESULT PANEL */}
            <div
              className="lg:col-span-5 flex items-center justify-center p-8 sm:p-10 relative"
              style={{
                background:
                  "linear-gradient(135deg, rgba(245,158,11,0.06) 0%, rgba(16,185,129,0.06) 100%)",
                borderLeft: "1px solid rgba(15,23,42,0.06)",
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
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
                    Projected Monthly Income
                  </div>
                  <div className="font-display font-black text-6xl sm:text-7xl text-gradient-gold leading-none">
                    ₹{displayed.toLocaleString("en-IN")}
                  </div>
                  <div className="text-slate-400 text-sm mt-2">
                    per month to your UPI
                  </div>
                </div>

                {/* BREAKDOWN */}
                <div className="grid grid-cols-2 gap-3">
                  <div
                    className="text-center p-3.5 rounded-2xl"
                    style={{
                      background: "rgba(16,185,129,0.1)",
                      border: "1px solid rgba(16,185,129,0.2)",
                    }}
                  >
                    <div className="text-emerald-600 font-black text-lg leading-tight">
                      ₹{dailyINR.toFixed(2)}
                    </div>
                    <div className="text-slate-500 text-[10px] mt-0.5">
                      Per Day (₹{monthlyTasks.toLocaleString("en-IN")}/mo)
                    </div>
                  </div>
                  <div
                    className="text-center p-3.5 rounded-2xl"
                    style={{
                      background: "rgba(245,158,11,0.1)",
                      border: "1px solid rgba(245,158,11,0.2)",
                    }}
                  >
                    <div className="text-amber-600 font-black text-lg leading-tight">
                      ₹
                      {monthlyReferrals.toLocaleString("en-IN", {
                        maximumFractionDigits: 1,
                      })}
                    </div>
                    <div className="text-slate-500 text-[10px] mt-0.5">
                      Referral Bonus ({refs} ref)
                    </div>
                  </div>
                </div>

                {/* COMPARISON */}
                <div
                  className="flex items-center gap-2 text-xs text-slate-500 p-3 rounded-xl justify-center"
                  style={{ background: "rgba(15,23,42,0.03)" }}
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  {comparisonText()}
                </div>

                {/* PAYOUT THRESHOLD PILL */}
                <div
                  className="p-3 rounded-xl text-left border border-slate-200 space-y-1"
                  style={{ background: "rgba(15,23,42,0.03)" }}
                >
                  <div className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider text-emerald-600">
                    <Zap className="w-3 h-3" /> Payout Thresholds
                  </div>
                  <div className="text-[11px] text-slate-700">
                    First Payout:{" "}
                    <span className="text-slate-900 font-bold">Min. ₹100</span>{" "}
                    (Immediate)
                  </div>
                  <div className="text-[11px] text-slate-500">
                    2nd onwards:{" "}
                    <span className="text-slate-700 font-bold">Min. ₹500</span>{" "}
                    (Taskers) /{" "}
                    <span className="text-slate-700 font-bold">₹1,000</span>{" "}
                    (Creators)
                  </div>
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
                  className="text-xs text-slate-400 hover:text-slate-700 transition-colors flex items-center justify-center gap-1 mx-auto"
                >
                  Scan QR to download <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* UPDATED PAYOUT RULES & SCHEDULES */}
        <div className="mt-10 max-w-4xl mx-auto">
          <div
            className="glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden"
            style={{
              border: "1px solid rgba(16,185,129,0.25)",
              boxShadow: "0 0 50px rgba(16,185,129,0.08)",
            }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-5 border-b border-slate-200">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3" /> Updated Policy
                </span>
                <h3 className="font-display font-black text-2xl text-slate-900 mt-2">
                  Updated Payout Rules & Schedules
                </h3>
              </div>
              <div className="text-xs text-slate-500 flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                Instant UPI & Bank Settlement
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* TASKERS CARD */}
              <div
                className="p-5 rounded-2xl border border-slate-200 flex flex-col justify-between"
                style={{ background: "rgba(15,23,42,0.02)" }}
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-white shadow-lg">
                      <Wallet className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-black text-slate-900 text-base">
                        For Taskers
                      </h4>
                      <p className="text-[11px] text-slate-500">
                        Watch, like, comment & daily tasks
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2.5 text-xs">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                      <span className="text-slate-700 font-medium">
                        First Payout
                      </span>
                      <span className="font-black text-emerald-600 text-sm">
                        Min. ₹100
                        <span className="text-[10px] text-slate-500 block font-normal text-right">
                          Immediate withdrawal
                        </span>
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-slate-700 font-medium">
                        Subsequent Payouts
                      </span>
                      <span className="font-black text-slate-900 text-sm">
                        Min. ₹500
                        <span className="text-[10px] text-slate-500 block font-normal text-right">
                          2nd onwards (Instant 24/7)
                        </span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 flex items-center gap-2 text-[11px] text-slate-500">
                  <Zap className="w-3.5 h-3.5 text-amber-600" />
                  Disbursed instantly to PhonePe, Google Pay, Paytm or UPI ID.
                </div>
              </div>

              {/* CREATORS CARD */}
              <div
                className="p-5 rounded-2xl border border-slate-200 flex flex-col justify-between"
                style={{ background: "rgba(15,23,42,0.02)" }}
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white shadow-lg">
                      <Film className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-black text-slate-900 text-base">
                        For Creators
                      </h4>
                      <p className="text-[11px] text-slate-500">
                        Ad splits, shorts, fan funding & VIP perks
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2.5 text-xs">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                      <span className="text-slate-700 font-medium">
                        First Payout
                      </span>
                      <span className="font-black text-emerald-600 text-sm">
                        Min. ₹100
                        <span className="text-[10px] text-slate-500 block font-normal text-right">
                          Immediate withdrawal
                        </span>
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-xl bg-violet-500/5 border border-violet-500/10">
                      <span className="text-slate-700 font-medium">
                        Subsequent Payouts
                      </span>
                      <span className="font-black text-violet-700 text-sm">
                        Min. ₹1,000
                        <span className="text-[10px] text-slate-500 block font-normal text-right">
                          2nd onwards (Monthly cycle)
                        </span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 flex items-center gap-2 text-[11px] text-slate-500">
                  <Calendar className="w-3.5 h-3.5 text-violet-600" />
                  Processed on a flexible monthly cycle between the 21st and
                  26th of every month.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
