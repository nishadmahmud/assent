import Link from "next/link";

export default function HeroSection({
  title = "Architectural Landmarks & Refined Living",
  subtitle = "Assent Real Estate & Property Management Ltd. delivers signature residential towers and bespoke property management tailored for timeless value.",
  primaryCta = { text: "Explore Flagship Project", href: "#flagship" },
  secondaryCta = { text: "Contact Our Advisors", href: "/contact" },
  compact = false,
  bgImage = "/assent/project/tower-elevation.jpg",
}) {
  const highlights = [
    { value: "14 Storeys", label: "Flagship Tower" },
    { value: "80 Feet", label: "Avenue Frontage" },
    { value: "4-Bed", label: "Luxury Suites" },
    { value: "21 Bays", label: "Secured Parking" },
  ];

  return (
    <section
      className={`relative w-full flex items-center justify-center overflow-hidden bg-parallax ${
        compact ? "min-h-[46vh] py-16" : "min-h-[92vh] py-20"
      }`}
      style={{
        background: bgImage
          ? `url('${bgImage}') center/cover no-repeat`
          : "linear-gradient(135deg, #0B132B 0%, #16203B 40%, #080D1D 100%)",
      }}
    >
      {/* Luxury Obsidian Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B132B]/95 via-[#0B132B]/85 to-[#0B132B]/95 backdrop-blur-[1.5px]">
        {/* Soft Ambient Gold Glows */}
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-accent/15 rounded-full blur-[110px] pointer-events-none animate-float" />
        <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-accent-gold/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Geometric Architectural Grid Texture */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        {/* Hero Title */}
        <h1
          className={`font-bold text-white leading-[1.15] mb-6 tracking-tight ${
            compact ? "text-3xl md:text-5xl" : "text-4xl sm:text-5xl md:text-6xl lg:text-[68px]"
          }`}
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {title}
        </h1>

        {/* Hero Subtitle */}
        <p
          className={`text-white/85 max-w-2xl mx-auto mb-10 ${
            compact ? "text-base" : "text-lg md:text-xl"
          } leading-relaxed font-light`}
        >
          {subtitle}
        </p>

        {/* Action Buttons */}
        {!compact && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link
              href={primaryCta.href}
              className="btn-primary text-xs uppercase tracking-widest px-8 py-4 shadow-2xl w-full sm:w-auto"
            >
              {primaryCta.text}
              <svg
                className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
            <Link
              href={secondaryCta.href}
              className="btn-outline-dark text-xs uppercase tracking-widest px-8 py-3.5 w-full sm:w-auto"
            >
              {secondaryCta.text}
            </Link>
          </div>
        )}

        {/* Floating Quick Architectural Highlights Capsule Strip */}
        {!compact && (
          <div className="mt-14 w-full max-w-3xl grid grid-cols-2 sm:grid-cols-4 gap-3 pt-8 border-t border-white/10">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-white/[0.04] backdrop-blur-md border border-white/10 text-center transition-all duration-300 hover:border-accent/40 hover:bg-white/[0.08]"
              >
                <div
                  className="text-lg md:text-xl font-bold text-accent"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {item.value}
                </div>
                <div className="text-[11px] uppercase tracking-wider text-white/70 mt-0.5">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Scroll Indicator Cue */}
        {!compact && (
          <div className="mt-10 hidden sm:flex flex-col items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
            <span className="text-[10px] tracking-[0.25em] uppercase text-white/60">
              Scroll to Explore
            </span>
            <div className="w-5 h-9 rounded-full border-2 border-accent/50 flex justify-center p-1">
              <span className="w-1 h-2 bg-accent rounded-full animate-bounce" />
            </div>
          </div>
        )}
      </div>

      {/* Elegant Bottom Shadow Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0B132B] to-transparent opacity-90 pointer-events-none" />
    </section>
  );
}
