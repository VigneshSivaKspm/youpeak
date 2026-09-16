import React from "react";
import {
  MonitorPlay,
  Coins,
  Users,
  Zap,
  Lock,
  Shield,
  ArrowRight,
} from "lucide-react";

const FEATURES = [
  {
    icon: MonitorPlay,
    title: "HD Video & Shorts",
    desc: "Ultra-smooth 1080p playback powered by Cloudflare. No buffering — ever.",
    tag: "Streaming",
    iconClass: "icon-cyan",
    gradient: "from-cyan-500/10 to-blue-500/10",
    border: "rgba(6,182,212,0.2)",
  },
  {
    icon: Coins,
    title: "Real Coin Rewards",
    desc: "Earn coins for every video, ad, like and comment. 100 coins = ₹1 INR, always.",
    tag: "Earn",
    iconClass: "icon-gold",
    gradient: "from-amber-500/10 to-orange-500/10",
    border: "rgba(245,158,11,0.2)",
  },
  {
    icon: Users,
    title: "₹200 Referral Engine",
    desc: "Invite a friend, earn ₹100 instantly. They watch 100 mins, you get another ₹100.",
    tag: "Referrals",
    iconClass: "icon-purple",
    gradient: "from-violet-500/10 to-purple-500/10",
    border: "rgba(139,92,246,0.2)",
  },
  {
    icon: Zap,
    title: "Instant UPI Cashout",
    desc: "Tap withdraw → money hits PhonePe, GPay or your bank in seconds.",
    tag: "Payments",
    iconClass: "icon-green",
    gradient: "from-emerald-500/10 to-green-500/10",
    border: "rgba(16,185,129,0.2)",
  },
  {
    icon: Lock,
    title: "Pay-Per-View Content",
    desc: "Creators lock exclusive videos. Viewers pay coins. Creator gets 80% instantly.",
    tag: "Creator",
    iconClass: "icon-pink",
    gradient: "from-rose-500/10 to-pink-500/10",
    border: "rgba(236,72,153,0.2)",
  },
  {
    icon: Shield,
    title: "Safe & 100% Legal",
    desc: "IT Rules 2021 compliant. Grievance Officer with 36-hour response guarantee.",
    tag: "Safety",
    iconClass: "icon-blue",
    gradient: "from-blue-500/10 to-indigo-500/10",
    border: "rgba(59,130,246,0.2)",
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="section px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
            What makes us different
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight leading-tight">
            Everything You Need <br />
            <span className="text-gradient-primary">in One App</span>
          </h2>
          <p className="text-white/50 text-base">
            Built different. Designed to reward you, not exploit you.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="glass-card rounded-3xl p-8 relative overflow-hidden group cursor-pointer"
                style={{ border: `1px solid ${f.border}` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${f.gradient} opacity-40 group-hover:opacity-70 transition-opacity`}
                />

                {/* Top row */}
                <div className="relative flex items-center justify-between mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center ${f.iconClass} group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  <span
                    className="text-[11px] font-bold px-3 py-1 rounded-full"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      color: "rgba(255,255,255,0.5)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    {f.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="font-display font-bold text-xl text-white mb-3">
                    {f.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {f.desc}
                  </p>
                </div>

                {/* Bottom arrow */}
                <div className="relative flex items-center gap-1 mt-6 text-xs font-bold text-white/30 group-hover:text-white/60 transition-colors">
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
