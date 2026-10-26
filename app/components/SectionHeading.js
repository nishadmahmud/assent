export default function SectionHeading({
  label,
  title,
  subtitle,
  center = true,
}) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      {label && (
        <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
          {label}
        </span>
      )}
      <h2
        className="text-3xl md:text-4xl font-bold text-primary mb-4"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        {title}
      </h2>
      <div className={`gold-line mb-4 ${center ? "mx-auto" : ""}`} />
      {subtitle && (
        <p className={`text-text-muted text-lg max-w-2xl leading-relaxed ${center ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
