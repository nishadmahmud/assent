export default function SectionHeading({
  label,
  title,
  subtitle,
  center = true,
  light = false,
}) {
  return (
    <div className={`mb-12 md:mb-14 ${center ? "text-center" : ""}`}>
      {label && (
        <div className={`inline-flex items-center gap-2 mb-3.5 ${center ? "justify-center" : ""}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-accent font-bold text-xs uppercase tracking-[0.2em]">
            {label}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        </div>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-[42px] font-bold tracking-tight mb-4 leading-tight ${
          light ? "text-white" : "text-[#0B132B]"
        }`}
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        {title}
      </h2>

      {/* Decorative Architectural Gold Accent Line */}
      <div className={`flex items-center gap-2 mb-4 ${center ? "justify-center" : ""}`}>
        <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-accent" />
        <div className="w-2 h-2 rotate-45 border border-accent bg-accent/30" />
        <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-accent" />
      </div>

      {subtitle && (
        <p
          className={`text-sm md:text-base lg:text-lg max-w-2xl leading-relaxed font-light ${
            light ? "text-white/80" : "text-text-muted"
          } ${center ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
