"use client";

import { useEffect, useState, useRef } from "react";

const stats = [
  { target: 14, suffix: "+", label: "Storeys Flagship Architecture", detail: "Assent Royal Heights Tower" },
  { target: 100, suffix: "%", label: "Structural Compliance & Safety", detail: "Engineered to BNBC Standards" },
  { target: 24, suffix: "/7", label: "Dedicated Property Management", detail: "Round-The-Clock Facility Care" },
  { target: 21, suffix: "+", label: "Secured Parking Bays", detail: "Dual Level Protected Access" },
];

function StatCard({ stat }) {
  const [count, setCount] = useState(0);
  const cardRef = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          const duration = 1800; // ms
          const steps = 40;
          const stepTime = duration / steps;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            // easeOutQuad
            const easeOut = 1 - (1 - progress) * (1 - progress);
            const currentCount = Math.round(easeOut * stat.target);
            setCount(currentCount);

            if (currentStep >= steps) {
              clearInterval(timer);
              setCount(stat.target);
            }
          }, stepTime);
        }
      },
      { threshold: 0.25 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [stat.target]);

  return (
    <div
      ref={cardRef}
      className="relative p-6 md:p-8 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-accent/40 transition-all duration-400 group text-center flex flex-col justify-between"
    >
      {/* Subtle Corner Accent */}
      <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-accent/30 group-hover:bg-accent transition-colors" />

      <div>
        <div
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-accent mb-2.5 transition-transform duration-300 group-hover:scale-105"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {count}
          <span className="text-accent-gold">{stat.suffix}</span>
        </div>
        <h4 className="text-white text-sm md:text-base font-bold tracking-wide mb-1">
          {stat.label}
        </h4>
      </div>

      <p className="text-white/60 text-xs mt-2 pt-2 border-t border-white/5">
        {stat.detail}
      </p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="bg-[#0B132B] py-20 px-6 border-y border-white/10 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <StatCard key={idx} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
