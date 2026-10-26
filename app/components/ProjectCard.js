import Image from "next/image";

export default function ProjectCard({
  name,
  location,
  type,
  size,
  features = [],
  status = "Ongoing",
  imageUrl,
}) {
  const statusColor =
    status === "Ongoing"
      ? "bg-accent text-[#0B132B] font-bold"
      : "bg-[#0B132B] text-white";

  return (
    <div className="bg-white rounded-xl border border-border overflow-hidden card-hover flex flex-col justify-between shadow-sm">
      {/* Image / Showcase Area */}
      <div className="relative h-64 bg-[#0B132B]/5 flex items-center justify-center overflow-hidden group">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
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
        {/* Status Badge */}
        <span
          className={`absolute top-4 left-4 px-3 py-1 text-xs uppercase tracking-wider rounded-full shadow-md ${statusColor}`}
        >
          {status}
        </span>
      </div>

      {/* Content Area */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3
            className="text-xl font-bold text-[#0B132B] mb-2 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {name}
          </h3>

          <div className="flex items-center gap-2 text-text-muted text-xs mb-3">
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
            <span>{location}</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {type && (
              <span className="inline-flex items-center px-2.5 py-1 bg-accent-light text-[#9C7A3C] text-[11px] font-bold rounded-md">
                {type}
              </span>
            )}
            {size && (
              <span className="inline-flex items-center px-2.5 py-1 bg-[#F8F9FA] text-text-muted text-[11px] font-medium rounded-md border border-border">
                {size}
              </span>
            )}
          </div>

          {features.length > 0 && (
            <ul className="space-y-1.5 mb-6">
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
                  {feature}
                </li>
              ))}
            </ul>
          )}
        </div>

        <a
          href="/contact"
          className="w-full btn-outline text-xs text-center py-2.5 block uppercase tracking-wider"
        >
          Inquire About Availability
        </a>
      </div>
    </div>
  );
}
