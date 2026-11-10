"use client";

import { useState } from "react";
import Link from "next/link";

export default function FloatingConsultationPill() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Expanded Quick Contact Drawer */}
      {isOpen && (
        <div
          className="mb-3 w-72 rounded-2xl bg-[#0B132B]/95 backdrop-blur-xl border border-accent/40 shadow-2xl p-5 text-white transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent block">
                VIP Client Desk
              </span>
              <h4
                className="text-sm font-bold text-white"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Assent Private Advisory
              </h4>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/60 hover:text-white p-1"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          <p className="text-white/70 text-xs mb-4 font-light leading-relaxed">
            Directly connect with our flagship development &amp; property stewardship team.
          </p>

          <div className="space-y-2">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="btn-primary w-full text-center text-[11px] py-2.5 tracking-wider block"
            >
              Schedule Private Site Visit
            </Link>

            <a
              href="tel:+8801713000000"
              className="flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors border border-white/10"
            >
              <svg className="w-3.5 h-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <span>Direct Call: +880 1713-000000</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Action Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#0B132B] text-white border border-accent/60 shadow-[0_6px_25px_rgba(11,19,43,0.35)] hover:border-accent hover:bg-[#16203B] transition-all duration-300"
        aria-label="Private Consultation"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-accent" />
        </span>
        <span className="text-xs font-bold uppercase tracking-wider text-accent group-hover:text-white transition-colors">
          Private Consultation
        </span>
      </button>
    </div>
  );
}
