import React, { useState, useEffect } from "react";
import {
  ShieldCheck,
  Star,
  Zap,
  Wallet,
  Users,
  CheckCircle2,
  TrendingUp,
  Smartphone,
  Trophy,
  Coins,
  Clock,
  Target,
  Play,
} from "lucide-react";

const TICKER_ITEMS = [
  { icon: Trophy, text: "250K+ Active Users" },
  { icon: TrendingUp, text: "₹2.4 Cr+ Paid Out" },
  { icon: Zap, text: "Instant UPI Cashouts" },
  { icon: ShieldCheck, text: "Razorpay Secured" },
  { icon: Star, text: "4.8/5 Rating" },
  { icon: Smartphone, text: "Android & iOS" },
  { icon: Coins, text: "100 Coins = ₹1 INR" },
  { icon: TrendingUp, text: "Up to 90% Ad Revenue" },
  { icon: Users, text: "Earn Up to ₹200 Per Referral" },
  { icon: Trophy, text: "250K+ Active Users" },
  { icon: TrendingUp, text: "₹2.4 Cr+ Paid Out" },
  { icon: Zap, text: "Instant UPI Cashouts" },
  { icon: ShieldCheck, text: "Razorpay Secured" },
  { icon: Star, text: "4.8/5 Rating" },
  { icon: Smartphone, text: "Android & iOS" },
  { icon: Coins, text: "100 Coins = ₹1 INR" },
  { icon: TrendingUp, text: "Up to 90% Ad Revenue" },
  { icon: Users, text: "Earn Up to ₹200 Per Referral" },
];

export default function Hero({ onOpenQr }) {
  const [coinCount, setCoinCount] = useState(0);
  useEffect(() => {
    const t = setInterval(() => {
      setCoinCount((p) => {
        if (p >= 2450) {
          clearInterval(t);
          return 2450;
        }
        return p + 42;
      });
    }, 25);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-hero-gradient overflow-hidden">
      {/* ANIMATED BACKGROUND ORBS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] animate-glow-pulse" />
        <div
          className="absolute top-1/3 right-1/4 w-80 h-80 bg-violet-600/10 rounded-full blur-[100px] animate-glow-pulse"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] animate-glow-pulse"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute top-1/2 right-10 w-64 h-64 bg-amber-500/8 rounded-full blur-[80px] animate-glow-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,23,42,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT: COPY */}
          <div className="lg:col-span-6 space-y-8">
            {/* TOP BADGE */}
            <div
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass"
              style={{ border: "1px solid rgba(16,185,129,0.3)" }}
            >
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 relative">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75" />
              </span>
              <Trophy className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-xs font-bold text-emerald-600 tracking-wide">
                INDIA'S #1 WATCH & EARN APP
              </span>
            </div>

            {/* HEADLINE */}
            <div className="space-y-3">
              <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-6xl xl:text-7xl leading-[1.06] tracking-tight text-slate-900">
                Watch Videos.
                <br />
                <span className="text-gradient-primary">Get Paid.</span>
                <br />
                <span className="text-slate-800">Repeat Daily.</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 max-w-xl leading-relaxed font-medium">
                Stop watching for free. YouPeak pays you{" "}
                <strong className="text-slate-900 font-bold">real money</strong> for
                every video you watch, like, and share — straight to your{" "}
                <strong className="text-emerald-600 font-bold">
                  UPI in seconds
                </strong>
                .
              </p>
            </div>

            {/* QUICK STATS PILLS */}
            <div className="flex flex-wrap gap-3">
              {[
                {
                  icon: Wallet,
                  val: "Up to ₹333.33/day",
                  sub: "Pass Maximum Income",
                  color: "text-emerald-600",
                },
                {
                  icon: Zap,
                  val: "Instant Payout",
                  sub: "UPI / PhonePe / GPay",
                  color: "text-amber-600",
                },
                {
                  icon: Users,
                  val: "₹200/Referral",
                  sub: "Peak Partner 2-Stage",
                  color: "text-violet-600",
                },
              ].map((b, i) => (
                <div
                  key={i}
                  className="glass flex items-center gap-2.5 px-4 py-2.5 rounded-2xl"
                  style={{ border: "1px solid rgba(15,23,42,0.08)" }}
                >
                  <b.icon className={`w-4 h-4 ${b.color} shrink-0`} />
                  <div>
                    <div className="text-xs font-black text-slate-900">{b.val}</div>
                    <div className="text-[10px] text-slate-500">{b.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* STORE BUTTONS */}
            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                {/* Google Play */}
                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="store-btn bg-white text-gray-900 border border-slate-200 shadow-xl shadow-slate-900/10 hover:shadow-emerald-500/20 hover:shadow-2xl"
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
                      Get it on
                    </div>
                    <div className="text-base font-black tracking-tight font-display mt-0.5">
                      Google Play
                    </div>
                  </div>
                </a>

                {/* App Store */}
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noreferrer"
                  className="store-btn bg-slate-900 text-white shadow-xl shadow-slate-900/20 hover:bg-slate-800"
                >
                  <svg
                    className="w-7 h-7 text-white shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M15.97,4.69C16.55,3.96 16.96,2.94 16.85,1.91C15.96,1.95 14.88,2.51 14.24,3.25C13.67,3.91 13.18,4.96 13.31,5.97C14.31,6.05 15.36,5.43 15.97,4.69Z" />
                  </svg>
                  <div className="leading-none">
                    <div className="text-[10px] font-medium text-white/60 uppercase tracking-widest">
                      Download on the
                    </div>
                    <div className="text-base font-black tracking-tight font-display text-white mt-0.5">
                      App Store
                    </div>
                  </div>
                </a>

                {/* QR */}
                <button
                  onClick={onOpenQr}
                  className="btn-ghost text-sm !py-3 !px-4 flex items-center gap-2"
                >
                  <Smartphone className="w-4 h-4" /> QR Code
                </button>
              </div>

              {/* Trust line */}
              <div className="flex items-center gap-4 text-xs text-slate-500">
                <div className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Verified Safe APK v1.0</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 text-amber-400 fill-amber-400"
                    />
                  ))}
                  <span className="ml-1">4.8 · 12K+ reviews</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: PHONE MOCKUP */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end items-center relative">
            <div className="absolute w-[480px] h-[480px] rounded-full border border-emerald-500/10 animate-spin-slow" />
            <div className="absolute w-[380px] h-[380px] rounded-full border border-violet-500/10 animate-counter-spin" />

            <div className="relative animate-float">
              <div
                className="absolute -inset-4 rounded-[52px] opacity-30 blur-3xl"
                style={{
                  background:
                    "linear-gradient(135deg, #10b981 0%, #8b5cf6 50%, #f59e0b 100%)",
                }}
              />

              <div
                className="relative w-[290px] sm:w-[310px] h-[580px] sm:h-[620px] rounded-[46px] overflow-hidden shadow-2xl shadow-slate-900/25"
                style={{
                  background:
                    "linear-gradient(160deg, #ffffff 0%, #f1f5f9 100%)",
                  border: "7px solid #0f172a",
                }}
              >
                {/* Dynamic Island */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-30 flex items-center justify-center gap-1.5 border border-black">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0d1f11] border border-emerald-600/30" />
                  <div className="w-8 h-1 bg-gray-900 rounded-full" />
                </div>

                {/* Screen */}
                <div className="flex flex-col h-full px-4 pt-14 pb-4">
                  {/* App Top Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <img
                        src="/assets/app_logo.png"
                        alt="YP"
                        className="w-7 h-7 rounded-xl object-contain"
                        onError={(e) => {
                          e.target.src =
                            "https://placehold.co/50/10b981/fff?text=YP";
                        }}
                      />
                      <span className="font-display font-black text-sm text-slate-900">
                        YouPeak
                      </span>
                    </div>
                    <div
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold"
                      style={{
                        background: "rgba(245,158,11,0.15)",
                        border: "1px solid rgba(245,158,11,0.3)",
                        color: "#b45309",
                      }}
                    >
                      <Coins className="w-3 h-3" />
                      {coinCount.toLocaleString()}
                    </div>
                  </div>

                  {/* Video Thumbnail */}
                  <div
                    className="flex-1 rounded-2xl overflow-hidden relative"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(16,185,129,0.15) 0%, rgba(139,92,246,0.1) 100%)",
                      border: "1px solid rgba(15,23,42,0.05)",
                    }}
                  >
                    <img
                      src="/assets/boarding_1.png"
                      alt="YouPeak App"
                      className="w-full h-full object-contain p-4 drop-shadow-2xl"
                      onError={(e) => {
                        e.target.src =
                          "https://placehold.co/280x400/10b981/fff?text=Watch+%26+Earn";
                      }}
                    />

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center shadow-2xl animate-pulse-ring"
                        style={{
                          background:
                            "linear-gradient(135deg, #10b981, #059669)",
                        }}
                      >
                        <Play
                          className="w-6 h-6 text-white ml-1"
                          fill="white"
                        />
                      </div>
                    </div>

                    {/* Live Badge */}
                    <div
                      className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-black"
                      style={{
                        background: "rgba(239,68,68,0.9)",
                        color: "white",
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      LIVE EARNING
                    </div>
                  </div>

                  {/* Bottom Task Row */}
                  <div className="flex gap-2 mt-3">
                    <div
                      className="flex-1 flex items-center gap-2 px-3 py-2.5 rounded-xl"
                      style={{
                        background: "rgba(16,185,129,0.12)",
                        border: "1px solid rgba(16,185,129,0.2)",
                      }}
                    >
                      <Target className="w-4 h-4 text-emerald-600 shrink-0" />
                      <div>
                        <div className="text-[11px] font-black text-slate-900">
                          Daily Check-in
                        </div>
                        <div className="text-[9px] text-slate-500">
                          Day 5 — Streak!
                        </div>
                      </div>
                    </div>
                    <button
                      className="px-3 py-2.5 rounded-xl text-[11px] font-black text-white shrink-0 flex items-center gap-1"
                      style={{
                        background: "linear-gradient(135deg,#10b981,#059669)",
                      }}
                    >
                      <Coins className="w-3 h-3" /> +50
                    </button>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-28 h-1 bg-slate-100 rounded-full" />
            </div>

            {/* FLOATING BADGE 1: Payout notification */}
            <div
              className="absolute -left-2 sm:-left-8 top-24 notif-badge animate-float2"
              style={{
                background: "rgba(255,255,255,0.95)",
                animationDelay: "0.5s",
                maxWidth: "200px",
              }}
            >
              <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 icon-green">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-black text-slate-900">
                  ₹500 Withdrawn!
                </div>
                <div className="text-[10px] text-slate-500">
                  PhonePe · just now
                </div>
              </div>
            </div>

            {/* FLOATING BADGE 2: Coin earned */}
            <div
              className="absolute -right-2 sm:-right-8 bottom-32 notif-badge animate-float2"
              style={{
                background: "rgba(255,255,255,0.95)",
                animationDelay: "1.5s",
                maxWidth: "190px",
              }}
            >
              <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 icon-gold">
                <Coins className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-black text-amber-600">
                  +25 Coins!
                </div>
                <div className="text-[10px] text-slate-500">Ad watched ✓</div>
              </div>
            </div>

            {/* FLOATING BADGE 3: Referral bonus */}
            <div
              className="absolute -right-2 sm:-right-4 top-16 notif-badge animate-float"
              style={{
                background: "rgba(255,255,255,0.95)",
                animationDelay: "2.5s",
                maxWidth: "190px",
              }}
            >
              <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 icon-purple">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-black text-violet-600">
                  +₹100 Referral!
                </div>
                <div className="text-[10px] text-slate-500">
                  Friend signed up
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SCROLLING TICKER */}
      <div
        className="absolute bottom-0 left-0 right-0 py-3 overflow-hidden"
        style={{
          background: "rgba(16,185,129,0.08)",
          borderTop: "1px solid rgba(16,185,129,0.15)",
        }}
      >
        <div className="flex animate-ticker">
          {TICKER_ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <span
                key={i}
                className="flex items-center gap-2 text-xs font-bold text-emerald-700 px-8 whitespace-nowrap border-r border-emerald-500/20"
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                {item.text}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
