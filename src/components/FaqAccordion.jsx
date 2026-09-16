import React, { useState } from "react";
import {
  ChevronDown,
  Tag,
  Coins,
  Users,
  BarChart2,
  Zap,
  Shield,
  HelpCircle,
  Mail,
} from "lucide-react";

const FAQS = [
  {
    icon: Tag,
    iconClass: "icon-green",
    q: "Is YouPeak really free to use?",
    a: "Yes, 100%. Download, sign up, watch videos, earn coins, and withdraw to UPI — all without paying a single rupee. Starter Passes are optional upgrades that raise your daily earning cap if you want to earn more.",
  },
  {
    icon: Coins,
    iconClass: "icon-gold",
    q: "How does coin conversion work?",
    a: "100 coins = ₹1 INR. Always. No hidden fees. For example, 50,000 coins = ₹500 which you can withdraw anytime you hit the minimum threshold.",
  },
  {
    icon: Users,
    iconClass: "icon-purple",
    q: "How exactly does the referral system work?",
    a: "Share your unique referral link. When your friend signs up: you get ₹100 (held 24h). When they watch 100 minutes total: you get another ₹100 (held 48h). If they buy a membership tier, you also earn 10% commission. So referring 10 friends = up to ₹2,000 bonus!",
  },
  {
    icon: BarChart2,
    iconClass: "icon-blue",
    q: "What do Creator VIP Passes do?",
    a: "By default, you get a 50/50 ad revenue split. Creator VIP Passes upgrade this to 60%, 70%, 80%, or up to 90% depending on your subscriber count. More subscribers = higher split, and you can unlock it early by purchasing the pass.",
  },
  {
    icon: Zap,
    iconClass: "icon-cyan",
    q: "How fast are withdrawals?",
    a: "Instant. Once you tap withdraw and your UPI transfer is initiated via Razorpay, it typically hits your account in 2–10 seconds. Bank transfers (NEFT/IMPS) take 1–2 hours.",
  },
  {
    icon: Shield,
    iconClass: "icon-pink",
    q: "Is this app legal in India?",
    a: "Absolutely. YouPeak is 100% compliant with Indian law including IT Rules 2021. We have a registered Grievance Officer and a 36-hour statutory response commitment. Our payment infrastructure is fully KYC-compliant via Razorpay.",
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="section px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-14 space-y-4">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
            Got questions?
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight leading-tight">
            Quick <span className="text-gradient-primary">Answers</span>
          </h2>
          <p className="text-white/50 text-base">
            Everything you need to know. No jargon, just straight answers.
          </p>
        </div>

        {/* ACCORDION */}
        <div className="space-y-3">
          {FAQS.map((faq, i) => {
            const Icon = faq.icon;
            return (
              <div
                key={i}
                className={`glass-card rounded-2xl overflow-hidden transition-all ${open === i ? "ring-1 ring-emerald-500/30" : ""}`}
              >
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  className="w-full text-left px-6 py-5 flex items-center gap-4"
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${faq.iconClass}`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="flex-1 font-display font-bold text-sm sm:text-base text-white">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform duration-300 ${open === i ? "rotate-180 text-emerald-400" : "text-white/30"}`}
                  />
                </button>
                {open === i && (
                  <div
                    className="px-6 pb-6 text-sm text-white/55 leading-relaxed border-t border-white/5 pt-4 ml-12"
                    style={{ animation: "slide-up 0.2s ease-out" }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* STILL HAVE QUESTIONS */}
        <div className="mt-10 text-center p-8 glass-card rounded-3xl">
          <div className="flex justify-center mb-3">
            <div className="w-14 h-14 rounded-2xl icon-purple flex items-center justify-center">
              <HelpCircle className="w-7 h-7" />
            </div>
          </div>
          <h4 className="font-display font-bold text-lg text-white mb-2">
            Still have questions?
          </h4>
          <p className="text-white/40 text-sm mb-4">
            Our support team replies within a few hours.
          </p>
          <a
            href="mailto:support@youpeak.in"
            className="btn-primary inline-flex items-center gap-2 text-sm"
          >
            <Mail className="w-4 h-4" /> Email Support
          </a>
        </div>
      </div>
    </section>
  );
}
