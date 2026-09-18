import React from "react";
import { X, QrCode, Smartphone } from "lucide-react";
import { APP_INFO } from "../data/content";

export default function QrModal({ onClose }) {
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(APP_INFO.playStoreUrl)}&color=10b981&bgcolor=020608&qzone=2`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(2,6,8,0.9)", backdropFilter: "blur(20px)" }}
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
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 rounded-2xl icon-green flex items-center justify-center">
            <QrCode className="w-7 h-7" />
          </div>
        </div>

        <h3 className="font-display font-black text-xl text-white mb-1">
          Scan to Download
        </h3>
        <p className="text-white/40 text-sm mb-6">
          Point your camera at the QR code
        </p>

        {/* QR CODE */}
        <div
          className="p-4 rounded-2xl mx-auto w-fit mb-5"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.06)",
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
          <div className="w-48 h-48 rounded-xl bg-white/5 items-center justify-center text-white/30 text-sm hidden flex-col gap-2">
            <Smartphone className="w-8 h-8 text-white/20" />
            <span>QR unavailable. Download from App Store.</span>
          </div>
        </div>

        <p className="flex items-center justify-center gap-1.5 text-white/30 text-xs mb-4">
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
