import Link from "next/link";

export default function HeroSection({
  title = "Architectural Landmarks & Refined Living",
  subtitle = "Assent Real Estate & Property Management Ltd. delivers signature residential towers and bespoke property management tailored for timeless value.",
  primaryCta = { text: "Explore Flagship Project", href: "/projects" },
  secondaryCta = { text: "Contact Our Advisors", href: "/contact" },
  compact = false,
  bgImage = "/assent/project/tower-elevation.jpg",
}) {
  return (
    <section
      className={`relative w-full flex items-center justify-center overflow-hidden bg-parallax ${
        compact ? "min-h-[48vh]" : "min-h-[90vh]"
      }`}
      style={{
        background: bgImage
          ? `url('${bgImage}') center/cover no-repeat`
          : "linear-gradient(135deg, #0B132B 0%, #16203B 40%, #080D1D 100%)",
      }}
    >
      {/* Luxury Obsidian Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B132B]/95 via-[#0B132B]/85 to-[#0B132B]/75 backdrop-blur-[1px]">
        {/* Subtle Gold Ambient Glows */}
        <div className="absolute top-12 right-12 w-80 h-80 bg-accent/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        
        {/* Geometric Grid Texture */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-16">
        {!compact && (
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/10 border border-accent/40 rounded-full mb-8 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-white/90 text-xs font-semibold tracking-widest uppercase">
              Assent Real Estate & Property Management Ltd.
            </span>
          </div>
        )}

        <h1
          className={`font-bold text-white leading-tight mb-6 tracking-tight ${
            compact ? "text-3xl md:text-5xl" : "text-4xl md:text-6xl lg:text-7xl"
          }`}
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {title}
        </h1>

        <p
          className={`text-white/80 max-w-2xl mx-auto mb-10 ${
            compact ? "text-base" : "text-lg md:text-xl"
          } leading-relaxed font-light`}
        >
          {subtitle}
        </p>

        {!compact && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={primaryCta.href}
              className="btn-primary text-xs uppercase tracking-wider px-8 py-3.5 shadow-xl"
            >
              {primaryCta.text}
              <svg
                className="w-4 h-4 ml-1"
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
              className="inline-flex items-center gap-2 px-8 py-3.5 text-xs uppercase tracking-wider font-semibold text-white border border-white/30 rounded-lg hover:bg-white/10 hover:border-accent transition-all duration-300"
            >
              {secondaryCta.text}
            </Link>
          </div>
        )}
      </div>

      {/* Elegant Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0B132B] to-transparent opacity-90 pointer-events-none" />
    </section>
  );
}
