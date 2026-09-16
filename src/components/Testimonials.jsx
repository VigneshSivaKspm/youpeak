import React from "react";
import { Star, Quote, MapPin, TrendingUp, Users, Wallet } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Aman Sharma",
    role: "College Student",
    location: "Jaipur, Rajasthan",
    avatar: "https://i.pravatar.cc/100?img=11",
    rating: 5,
    payout: "₹3,450 withdrawn",
    color: "from-emerald-500 to-cyan-500",
    PayIcon: Wallet,
    text: '"I used to just scroll reels for fun. Now I scroll and get paid. Withdrew ₹1,200 last month straight to PhonePe — that\'s my mobile bill sorted automatically!"',
  },
  {
    name: "Pooja Verma",
    role: "Tech Creator",
    location: "Indore, MP",
    avatar: "https://i.pravatar.cc/100?img=5",
    rating: 5,
    payout: "₹42,800 earned",
    color: "from-violet-500 to-purple-600",
    PayIcon: TrendingUp,
    text: '"Other platforms pay 45% and take 3 months. YouPeak gave me 80% split from day one and my revenue landed within a week. The video quality is insane too."',
  },
  {
    name: "Rohit Deshmukh",
    role: "Referral Partner",
    location: "Pune, Maharashtra",
    avatar: "https://i.pravatar.cc/100?img=33",
    rating: 5,
    payout: "₹14,200 in 45 days",
    color: "from-amber-400 to-orange-500",
    PayIcon: Users,
    text: '"I invited 60 friends from my campus WhatsApp group. Between stage 1+2 bonuses and the 10% tier commissions, I made ₹14,000 in just 45 days. This actually works."',
  },
];

export default function Testimonials() {
  return (
    <section className="section px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
            Don't take our word for it
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight leading-tight">
            Real Users.{" "}
            <span className="text-gradient-rainbow">Real Payouts.</span>
          </h2>
          <p className="text-white/50 text-base">
            250,000+ users are already making money on YouPeak. Here are a few.
          </p>
        </div>

        {/* TESTIMONIAL CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => {
            const PayIcon = t.PayIcon;
            return (
              <div
                key={i}
                className="glass-card rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group"
              >
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${t.color} opacity-[0.07] rounded-bl-full`}
                />

                <div>
                  <Quote className="w-8 h-8 text-white/10 mb-4" />
                  <p className="text-white/70 text-sm leading-relaxed italic">
                    {t.text}
                  </p>
                </div>

                <div className="flex gap-0.5 mt-5">
                  {[...Array(t.rating)].map((_, r) => (
                    <Star
                      key={r}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <div className="flex items-center justify-between mt-6 pt-5 border-t border-white/5">
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-11 h-11 rounded-full border-2 border-white/10"
                    />
                    <div>
                      <div className="font-bold text-sm text-white">
                        {t.name}
                      </div>
                      <div className="flex items-center gap-1 text-[11px] text-white/40">
                        <MapPin className="w-3 h-3 shrink-0" />
                        {t.role} · {t.location}
                      </div>
                    </div>
                  </div>
                  <div
                    className={`flex items-center gap-1.5 text-[10px] font-black px-2.5 py-1.5 rounded-xl bg-gradient-to-r ${t.color} text-white shadow-md whitespace-nowrap`}
                  >
                    <PayIcon className="w-3 h-3" />
                    {t.payout}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
