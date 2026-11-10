import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
  name,
  location,
  type,
  size,
  features = [],
  status = "Ongoing",
  imageUrl,
  blueprintHref = "#flagship",
}) {
  const statusBadge =
    status === "Ongoing"
      ? "bg-gradient-to-r from-accent via-accent-gold to-accent-dark text-[#0B132B] font-bold"
      : status === "Flagship"
      ? "bg-accent-gold text-[#0B132B] font-extrabold"
      : "bg-[#0B132B] text-white";

  return (
    <div className="bg-white rounded-2xl border border-border/80 overflow-hidden card-hover flex flex-col justify-between shadow-[0_4px_25px_rgba(11,19,43,0.04)] group">
      {/* Image / Showcase Area */}
      <div className="relative h-64 sm:h-72 bg-[#0B132B]/5 flex items-center justify-center overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="text-center p-6">
            <svg
              className="w-12 h-12 mx-auto text-accent/50 mb-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 7.5h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
              />
            </svg>
            <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">
              Assent Architectural Project
            </span>
          </div>
        )}

        {/* Ambient Dark Gradient on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

        {/* Status Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className={`px-3 py-1.5 text-[11px] uppercase tracking-wider rounded-full shadow-lg ${statusBadge}`}>
            {status}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-7 flex-1 flex flex-col justify-between">
        <div>
          <h3
            className="text-xl md:text-2xl font-bold text-[#0B132B] mb-2 leading-snug group-hover:text-accent-dark transition-colors duration-300"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {name}
          </h3>

          <div className="flex items-center gap-2 text-text-muted text-xs mb-4">
            <svg
              className="w-4 h-4 text-accent flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <span className="truncate">{location}</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-5">
            {type && (
              <span className="inline-flex items-center px-3 py-1 bg-accent-light text-[#9C7A3C] text-[11px] font-bold rounded-md">
                {type}
              </span>
            )}
            {size && (
              <span className="inline-flex items-center px-3 py-1 bg-[#F8F9FA] text-text-muted text-[11px] font-medium rounded-md border border-border/80">
                {size}
              </span>
            )}
          </div>

          {features.length > 0 && (
            <ul className="space-y-2 mb-6">
              {features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-xs text-text-muted"
                >
                  <svg
                    className="w-3.5 h-3.5 text-accent shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="pt-4 border-t border-border/60 flex items-center gap-3">
          <Link
            href="/contact"
            className="flex-1 btn-primary text-xs text-center py-3 uppercase tracking-wider"
          >
            Inquire Availability
          </Link>
          {blueprintHref && (
            <Link
              href={blueprintHref}
              className="p-3 rounded-lg border border-border hover:border-accent text-accent hover:bg-accent-light transition-colors"
              title="View Architectural Plan"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
