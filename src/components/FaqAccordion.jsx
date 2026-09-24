import React, { useState } from "react";
import { ChevronDown, Mail } from "lucide-react";

const FAQS = [
  {
    icon: "icon_faq_free",
    q: "Is YouPeak really free to use?",
    a: "Yes, 100%. Download, sign up, watch videos, earn coins, and withdraw to UPI — all without paying a single rupee. Starter Passes are optional upgrades that raise your daily earning cap if you want to earn more.",
  },
  {
    icon: "icon_faq_coins",
    q: "How does coin conversion work?",
    a: "100 coins = ₹1 INR. Always. No hidden fees. For example, 50,000 coins = ₹500 which you can withdraw anytime you hit the minimum threshold.",
  },
  {
    icon: "icon_faq_referral",
    q: "How exactly does the referral system work?",
    a: "YouPeak has two referral programs. (1) Peak Partner Referral: Earn up to ₹200 per active user — ₹100 (held 24h) when your friend registers via OTP, and another ₹100 (held 48h) when they complete 100 watch-minutes within 7 days. (2) Tasker Referral (10% per pass tier): Earn direct 10% commission on passes purchased by your referrals — Bronze Pass (₹990): ₹99, Silver Pass (₹2,490): ₹249, Gold Pass (₹4,990): ₹499, Platinum Pass (₹9,990): ₹999, Diamond Pass (₹24,990): ₹2,499 (Total Base Amount: ₹4,345 for 1 referral of each tier). Your pass level unlocks progressive multipliers and monthly earning caps: Free Pass (1x, cap ₹5,000/mo), Bronze Pass (~2.3x, cap ₹10,000/mo), Silver Pass (~5.7x, cap ₹25,000/mo), Gold Pass (~11.5x, cap ₹50,000/mo), Platinum Pass (~19.3x, cap ₹84,000/mo), and Diamond Pass (~23x, cap ₹1,00,000/mo). District Digital Partners additionally earn tiered commissions.",
  },
  {
    icon: "icon_faq_vip",
    q: "What do Creator VIP Passes do?",
    a: "By default, you get a 50% long-video ad split on the free Classic Pass. Creator VIP Passes upgrade all 6 revenue streams: long-video splits rise to 60% (Starter), 65% (Silver), 75% (Gold), and 80% (Platinum). Shorts ad share goes from 50% up to 70%. Fan Funding reaches 90% via Direct UPI — bypassing 30% app store fees. VIP members pay 0% merch fees and receive 100% of BrandConnect sponsorships. Platinum VIP is auto-unlocked free at 100K+ subscribers.",
  },
  {
    icon: "icon_faq_speed",
    q: "How fast are withdrawals and what are the payout rules?",
    a: "Withdrawals hit your account instantly via UPI or bank transfer through Razorpay. For Taskers: First Payout is Minimum ₹100 (Immediate withdrawal), and subsequent payouts (2nd onwards) are Minimum ₹500. For Creators: First Payout is Minimum ₹100 (Immediate withdrawal), and subsequent payouts (2nd onwards) are Minimum ₹1,000, processed on a flexible Monthly Payout Cycle between the 21st and 26th of every month.",
  },
  {
    icon: "icon_faq_legal",
    q: "Is this app legal in India?",
    a: "Absolutely. YouPeak is 100% compliant with Indian law including IT Rules 2021. We have a registered Grievance Officer and a 36-hour statutory response commitment. Our payment infrastructure is fully KYC-compliant via Razorpay.",
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="section bg-slate-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-14 space-y-4">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
            Got questions?
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
            Quick <span className="text-gradient-primary">Answers</span>
          </h2>
          <p className="text-slate-500 text-base">
            Everything you need to know. No jargon, just straight answers.
          </p>
        </div>

        {/* ACCORDION */}
        <div className="space-y-3">
          {FAQS.map((faq, i) => {
            return (
              <div
                key={i}
                className={`glass-card rounded-2xl overflow-hidden transition-all ${open === i ? "ring-1 ring-emerald-500/30" : ""}`}
              >
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  className="w-full text-left px-6 py-5 flex items-center gap-4"
                >
                  <img
                    src={`/assets/icons/${faq.icon}.webp`}
                    alt=""
                    loading="lazy"
                    className="w-10 h-10 object-contain shrink-0"
                  />
                  <span className="flex-1 font-display font-bold text-sm sm:text-base text-slate-900">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform duration-300 ${open === i ? "rotate-180 text-emerald-600" : "text-slate-400"}`}
                  />
                </button>
                {open === i && (
                  <div
                    className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-4 ml-14"
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
            <img
              src="/assets/icons/icon_help.webp"
              alt=""
              loading="lazy"
              className="w-20 h-20 object-contain drop-shadow-lg"
            />
          </div>
          <h4 className="font-display font-bold text-lg text-slate-900 mb-2">
            Still have questions?
          </h4>
          <p className="text-slate-500 text-sm mb-4">
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
