import React from "react";
import {
  Timer,
  Lock,
  Brain,
  Mail,
  ShieldCheck,
  ClipboardList,
} from "lucide-react";

const PILLARS = [
  {
    icon: Timer,
    title: "36-Hour Response",
    desc: "Every complaint is assigned a ticket and resolved within 36 hours — by law.",
    iconClass: "icon-green",
  },
  {
    icon: Lock,
    title: "Bank-Grade Security",
    desc: "Payments are 256-bit encrypted via Razorpay. Your UPI details are never stored in plain text.",
    iconClass: "icon-blue",
  },
  {
    icon: Brain,
    title: "Auto Content Guard",
    desc: "Real-time keyword screening and audio fingerprinting keeps the platform safe for everyone.",
    iconClass: "icon-purple",
  },
];

export default function GrievanceCompliance() {
  return (
    <section id="compliance" className="section px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
            100% Legal & Safe in India
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight leading-tight">
            We Play by <span className="text-gradient-primary">the Rules</span>
          </h2>
          <p className="text-white/50 text-base">
            YouPeak is fully compliant with IT Rules 2021 and designed with user
            safety at the core.
          </p>
        </div>

        {/* 3 PILLARS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="glass-card rounded-3xl p-8 text-center space-y-4"
              >
                <div
                  className={`w-16 h-16 rounded-2xl ${p.iconClass} flex items-center justify-center mx-auto`}
                >
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-xl text-white">
                  {p.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* GRIEVANCE OFFICER CARD */}
        <div
          className="glass-card rounded-3xl p-8 sm:p-10 relative overflow-hidden"
          style={{ border: "1px solid rgba(16,185,129,0.2)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent" />
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                <ClipboardList className="w-4 h-4" />
                IT Rules 2021 — Grievance Officer
              </div>
              <h4 className="font-display font-black text-2xl text-white mb-2">
                Issue with our platform?
              </h4>
              <p className="text-white/50 text-sm max-w-xl">
                Contact our official Grievance Officer. We are legally required
                to respond and resolve within 36 hours. This is a statutory
                commitment, not just a promise.
              </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <a
                href="mailto:grievance@youpeak.in"
                className="btn-primary flex items-center gap-2 whitespace-nowrap"
              >
                <Mail className="w-4 h-4" />
                grievance@youpeak.in
              </a>
              <div className="flex items-center justify-center gap-1.5 text-xs text-white/30">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                Response within 36 hours · Legally guaranteed
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
