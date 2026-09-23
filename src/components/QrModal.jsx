import React from "react";
import { X, Smartphone } from "lucide-react";
import { APP_INFO } from "../data/content";

export default function QrModal({ onClose }) {
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(APP_INFO.playStoreUrl)}&color=059669&bgcolor=ffffff&qzone=2`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(15,23,42,0.45)", backdropFilter: "blur(20px)" }}
      onClick={onClose}
    >
      <div
        className="glass-card rounded-3xl p-8 max-w-xs w-full text-center relative"
        style={{
          border: "1px solid rgba(16,185,129,0.2)",
          boxShadow: "0 0 60px rgba(16,185,129,0.15)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-all"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex justify-center mb-4">
          <img
            src="/assets/logo_mark.webp"
            alt="YouPeak"
            className="w-16 h-16 object-contain drop-shadow-lg"
          />
        </div>

        <h3 className="font-display font-black text-xl text-slate-900 mb-1">
          Scan to Download
        </h3>
        <p className="text-slate-500 text-sm mb-6">
          Point your camera at the QR code
        </p>

        {/* QR CODE */}
        <div
          className="p-4 rounded-2xl mx-auto w-fit mb-5"
          style={{
            background: "rgba(15,23,42,0.04)",
            border: "1px solid rgba(15,23,42,0.06)",
          }}
        >
          <img
            src={qrUrl}
            alt="YouPeak Download QR"
            className="w-48 h-48 rounded-xl"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
          <div className="w-48 h-48 rounded-xl bg-slate-100 items-center justify-center text-slate-400 text-sm hidden flex-col gap-2 p-3">
            <img
              src="/assets/empty_state.webp"
              alt=""
              className="w-24 h-24 object-contain"
            />
            <span>QR unavailable. Download from App Store.</span>
          </div>
        </div>

        <p className="flex items-center justify-center gap-1.5 text-slate-400 text-xs mb-4">
          <Smartphone className="w-3.5 h-3.5" /> Available on Android & iOS
        </p>

        <div className="flex gap-3">
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noreferrer"
            className="flex-1 py-2.5 rounded-xl text-xs font-bold text-center btn-primary"
          >
            Google Play
          </a>
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noreferrer"
            className="flex-1 py-2.5 rounded-xl text-xs font-bold text-center btn-ghost"
          >
            App Store
          </a>
        </div>
      </div>
    </div>
  );
}
