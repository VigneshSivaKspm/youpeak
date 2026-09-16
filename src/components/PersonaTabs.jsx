import React, { useState } from "react";
import {
  Eye,
  Film,
  Users,
  ArrowRight,
  Tv,
  Trophy,
  ThumbsUp,
  Clock,
  MonitorPlay,
  Gem,
  Lock,
  BarChart2,
  Mail,
  Timer,
  Briefcase,
  Infinity,
} from "lucide-react";

const TABS = [
  {
    id: "tasker",
    icon: Eye,
    label: "Watch & Earn",
    color: "emerald",
    gradient: "from-emerald-500 to-cyan-500",
  },
  {
    id: "creator",
    icon: Film,
    label: "Create & Profit",
    color: "violet",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    id: "partner",
    icon: Users,
    label: "Refer & Grow",
    color: "amber",
    gradient: "from-amber-400 to-orange-500",
  },
];

const CONTENT = {
  tasker: {
    headline: "Get Paid for Watching Videos",
    sub: "Watch trending videos, check in daily, hit like — and earn real withdrawable cash. No surveys, no tricks, just genuine rewards.",
    image: "/assets/wallet_image.png",
    imageFallback:
      "https://placehold.co/360x360/10b981/fff?text=Watch+%26+Earn",
    badge: "₹5 to ₹167/day",
    badgeColor: "text-emerald-400",
    points: [
      {
        icon: Tv,
        title: "Watch 20 sponsored clips/day",
        sub: "25 coins per ad watched",
        iconClass: "icon-cyan",
      },
      {
        icon: Trophy,
        title: "7-Day streak bonuses",
        sub: "More you watch, more you earn",
        iconClass: "icon-gold",
      },
      {
        icon: ThumbsUp,
        title: "Like & comment rewards",
        sub: "2-5 coins per engagement",
        iconClass: "icon-green",
      },
      {
        icon: Clock,
        title: "2-hour milestone bonus",
        sub: "+500 coins for 120 min watch",
        iconClass: "icon-purple",
      },
    ],
  },
  creator: {
    headline: "Keep Up to 90% of Your Revenue",
    sub: "Publish videos and shorts with Cloudflare Stream quality. Lock premium content behind paywalls. Get paid directly — no 3-month delays.",
    image: "/assets/monetization_image.png",
    imageFallback: "https://placehold.co/360x360/8b5cf6/fff?text=Creator+VIP",
    badge: "Up to 90% Revenue",
    badgeColor: "text-violet-400",
    points: [
      {
        icon: MonitorPlay,
        title: "Cloudflare Stream HLS",
        sub: "1080p zero-buffer streaming",
        iconClass: "icon-blue",
      },
      {
        icon: Gem,
        title: "VIP Creator Passes",
        sub: "50% to 90% ad revenue split",
        iconClass: "icon-purple",
      },
      {
        icon: Lock,
        title: "Pay-per-view content",
        sub: "Sell exclusive videos for coins",
        iconClass: "icon-pink",
      },
      {
        icon: BarChart2,
        title: "Real-time analytics",
        sub: "Track subs, views & revenue",
        iconClass: "icon-cyan",
      },
    ],
  },
  partner: {
    headline: "Earn ₹200 for Every Friend",
    sub: "Invite friends to YouPeak. When they sign up and watch 100 minutes, you pocket ₹200 — automatically, with no selling required.",
    image: "/assets/referral_image.png",
    imageFallback:
      "https://placehold.co/360x360/f59e0b/fff?text=Refer+%26+Earn",
    badge: "₹200 Per Friend",
    badgeColor: "text-amber-400",
    points: [
      {
        icon: Mail,
        title: "₹100 when friend signs up",
        sub: "Instant hold, released in 24h",
        iconClass: "icon-green",
      },
      {
        icon: Timer,
        title: "₹100 after they watch 100 min",
        sub: "Both stages = ₹200 total",
        iconClass: "icon-gold",
      },
      {
        icon: Briefcase,
        title: "+10% on tier upgrades",
        sub: "Earn commission if they buy a pass",
        iconClass: "icon-purple",
      },
      {
        icon: Infinity,
        title: "No cap on referrals",
        sub: "Invite 30 friends = ₹6,000 bonus",
        iconClass: "icon-cyan",
      },
    ],
  },
};

export default function PersonaTabs() {
  const [active, setActive] = useState("tasker");
  const data = CONTENT[active];
  const tab = TABS.find((t) => t.id === active);
  const TabIcon = tab.icon;

  return (
    <section className="section px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
            Who is YouPeak for?
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight leading-tight">
            Built for <span className="text-gradient-primary">Everyone</span>
          </h2>
          <p className="text-white/50 text-base">
            Pick your role and see exactly how YouPeak works for you
          </p>
        </div>

        {/* TAB BUTTONS */}
        <div className="flex justify-center mb-10">
          <div
            className="glass rounded-2xl p-1.5 flex gap-1"
            style={{ border: "1px solid rgba(255,255,255,0.06)" }}
          >
            {TABS.map((t) => {
              const Icon = t.icon;
              return (
                <button
                  key={t.id}
                  onClick={() => setActive(t.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                    active === t.id
                      ? `bg-gradient-to-r ${t.gradient} text-white shadow-lg`
                      : "text-white/50 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{t.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* CONTENT PANEL */}
        <div className="glass-card rounded-3xl overflow-hidden" key={active}>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* LEFT: TEXT */}
            <div className="p-8 sm:p-12 space-y-6">
              <div
                className="inline-flex items-center gap-2 text-xs font-black px-3 py-1.5 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <TabIcon className={`w-3.5 h-3.5 ${data.badgeColor}`} />
                <span className={data.badgeColor}>{data.badge}</span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-white leading-tight">
                {data.headline}
              </h3>
              <p className="text-white/55 text-sm sm:text-base leading-relaxed">
                {data.sub}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {data.points.map((p, i) => {
                  const PointIcon = p.icon;
                  return (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 rounded-2xl"
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.05)",
                      }}
                    >
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${p.iconClass}`}
                      >
                        <PointIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">
                          {p.title}
                        </div>
                        <div className="text-[11px] text-white/40 mt-0.5">
                          {p.sub}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <a
                href="#download"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white shadow-lg bg-gradient-to-r ${tab.gradient}`}
              >
                Start {tab.label} <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* RIGHT: IMAGE */}
            <div
              className="flex items-center justify-center p-8 relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.02), transparent)",
              }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${tab.gradient} opacity-[0.06]`}
              />
              <img
                src={data.image}
                alt={data.headline}
                className="w-64 sm:w-72 h-auto object-contain drop-shadow-2xl relative z-10 animate-float"
                onError={(e) => {
                  e.target.src = data.imageFallback;
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
