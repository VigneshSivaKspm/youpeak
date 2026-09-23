import React from "react";
import { Users, TrendingUp, Trophy, Zap } from "lucide-react";

const STATS = [
  {
    icon: Trophy,
    val: "250K+",
    label: "Active Users",
    sub: "Across India",
    color: "from-emerald-500 to-cyan-500",
    glow: "rgba(16,185,129,0.8)",
  },
  {
    icon: TrendingUp,
    val: "₹2.4 Cr+",
    label: "Total Paid Out",
    sub: "Real money, real accounts",
    color: "from-violet-500 to-purple-600",
    glow: "rgba(139,92,246,0.8)",
  },
  {
    icon: Users,
    val: "Up to 90%",
    label: "Creator Revenue",
    sub: "Industry-highest split",
    color: "from-amber-400 to-orange-500",
    glow: "rgba(245,158,11,0.8)",
  },
  {
    icon: Zap,
    val: "Instant",
    label: "UPI Withdrawals",
    sub: "GPay, PhonePe, Paytm",
    color: "from-blue-500 to-cyan-500",
    glow: "rgba(59,130,246,0.8)",
  },
];

export default function StatsBar() {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 -mt-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {STATS.map((s, i) => {
          const Icon = s.icon;
          return (
            <div
              key={i}
              className="glass-card rounded-3xl p-6 sm:p-8 text-center relative overflow-hidden group"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-[0.07] group-hover:opacity-[0.12] transition-opacity`}
              />
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-0.5 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
                style={{
                  background: `linear-gradient(90deg, transparent, ${s.glow}, transparent)`,
                }}
              />

              <div className="flex justify-center mb-3">
                <div
                  className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center shadow-lg`}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
              </div>

              <div
                className={`font-display font-black text-3xl sm:text-4xl bg-gradient-to-br ${s.color} bg-clip-text text-transparent`}
              >
                {s.val}
              </div>
              <div className="font-bold text-slate-900 text-sm sm:text-base mt-1">
                {s.label}
              </div>
              <div className="text-slate-500 text-xs mt-1">{s.sub}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
