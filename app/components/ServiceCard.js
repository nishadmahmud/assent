import Link from "next/link";

export default function ServiceCard({ icon, title, description, href = "/services" }) {
  return (
    <div className="bg-white p-8 rounded-2xl border border-border/80 card-hover group flex flex-col justify-between h-full relative overflow-hidden shadow-[0_4px_20px_rgba(11,19,43,0.03)]">
      {/* Subtle Top-Right Ambient Glow */}
      <div className="absolute top-0 right-0 w-28 h-28 bg-accent/5 rounded-bl-full pointer-events-none group-hover:bg-accent/15 transition-colors duration-400" />

      <div>
        {/* Icon Container */}
        <div className="w-14 h-14 bg-[#F8F9FA] rounded-xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-accent-dark transition-all duration-400 shadow-sm border border-border/60 group-hover:border-transparent group-hover:shadow-md">
          <div className="text-accent group-hover:text-[#0B132B] transition-colors duration-400">
            {icon}
          </div>
        </div>

        <h3
          className="text-xl font-bold text-primary mb-3 leading-snug group-hover:text-accent-dark transition-colors duration-300"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {title}
        </h3>

        <p className="text-text-muted text-sm leading-relaxed mb-6 font-light">
          {description}
        </p>
      </div>

      {/* Learn More Cue */}
      <Link
        href={href}
        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent group-hover:text-primary transition-colors pt-4 border-t border-border/50"
      >
        <span>Explore Expertise</span>
        <svg
          className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </Link>
    </div>
  );
}
