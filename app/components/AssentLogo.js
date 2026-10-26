export default function AssentLogo({ isDark = false, className = "" }) {
  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      {/* Architectural Monogram Emblem */}
      <div className="relative flex-shrink-0 w-11 h-11 md:w-12 md:h-12 flex items-center justify-center">
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          <defs>
            <linearGradient id="assentGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E6C875" />
              <stop offset="45%" stopColor="#C5A880" />
              <stop offset="100%" stopColor="#9C7A3C" />
            </linearGradient>
            <linearGradient id="assentDarkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="100%" stopColor="#0B132B" />
            </linearGradient>
          </defs>

          {/* Background Rounded Diamond Shield */}
          <rect
            x="4"
            y="4"
            width="40"
            height="40"
            rx="10"
            fill={isDark ? "url(#assentDarkGrad)" : "#0B132B"}
            stroke="url(#assentGoldGrad)"
            strokeWidth="1.5"
          />

          {/* Architectural 'A' / Skyscraper Structure */}
          {/* Left Tower Pillar */}
          <path
            d="M14 36L22 13H26L18 36H14Z"
            fill="url(#assentGoldGrad)"
            fillOpacity="0.85"
          />
          {/* Right Tower Pillar */}
          <path
            d="M34 36L26 13H22L30 36H34Z"
            fill="url(#assentGoldGrad)"
          />
          {/* Geometric Cantilever / Roof Crossbeam */}
          <path
            d="M17 26.5H31V28.5H17V26.5Z"
            fill="#FFFFFF"
          />
          {/* Apex Beacon */}
          <circle
            cx="24"
            cy="12"
            r="1.8"
            fill="url(#assentGoldGrad)"
          />
        </svg>
      </div>

      {/* Brand Name & Tag */}
      <div className="flex flex-col justify-center">
        <span
          className={`text-xl md:text-2xl font-black tracking-wider leading-none uppercase ${
            isDark ? "text-white" : "text-[#0B132B]"
          }`}
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          ASSENT
        </span>
        <span
          className="text-[9px] md:text-[10px] font-semibold tracking-[0.22em] uppercase leading-tight mt-1 text-[#9C7A3C]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Real Estate & Property Management Ltd.
        </span>
      </div>
    </div>
  );
}
