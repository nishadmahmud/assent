import Link from "next/link";
import AssentLogo from "./AssentLogo";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const services = [
  "Real Estate Development",
  "Institutional Property Management",
  "Luxury Residential Construction",
  "Commercial Leasing & Operations",
  "Feasibility & Legal Advisory",
];

export default function Footer() {
  return (
    <footer className="bg-[#0B132B] text-white border-t border-white/10 relative overflow-hidden">
      {/* Background Architectural Ambient Glow & Grid */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-gold/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Footer Container */}
      <div className="container-custom mx-auto px-6 pt-20 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10">
          {/* Company Brand Column */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="mb-6">
                <Link href="/" className="inline-block transition-transform duration-300 hover:scale-[1.01]">
                  <AssentLogo isDark={true} />
                </Link>
              </div>
              <p className="text-white/75 text-sm leading-relaxed mb-6 font-light max-w-sm">
                Assent Real Estate &amp; Property Management Ltd. is dedicated to iconic architectural developments and institutional property care across Bangladesh, creating heirloom assets of lasting distinction.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              {["facebook", "instagram", "linkedin", "youtube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-[#0B132B] text-white/80 transition-all duration-300 shadow-sm"
                  aria-label={social}
                >
                  <SocialIcon name={social} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3
              className="text-xs font-bold mb-5 uppercase tracking-[0.2em] text-accent"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Navigation
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 text-sm hover:text-accent transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/40 group-hover:bg-accent transition-colors" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div className="lg:col-span-3">
            <h3
              className="text-xs font-bold mb-5 uppercase tracking-[0.2em] text-accent"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Our Capabilities
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-white/70 text-sm hover:text-accent transition-colors block font-light"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h3
              className="text-xs font-bold mb-5 uppercase tracking-[0.2em] text-accent"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Headquarters &amp; Site
            </h3>
            <div className="space-y-4 text-sm font-light">
              <div className="flex gap-3">
                <MapPinIcon />
                <div>
                  <p className="text-white font-semibold text-xs tracking-wide uppercase">Assent Vista Tower</p>
                  <p className="text-white/70 text-xs mt-0.5 leading-relaxed">
                    Suite 702, Level 7, Avenue 4, Block C, Banani, Dhaka-1213
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPinIcon />
                <div>
                  <p className="text-white font-semibold text-xs tracking-wide uppercase">Assent Royal Heights Site</p>
                  <p className="text-white/70 text-xs mt-0.5 leading-relaxed">
                    Facing 80&apos; Wide Avenue, Prime Zone, Dhaka
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <PhoneIcon />
                <div className="text-white/80 text-xs font-medium">
                  <p>+880 1713 000 000</p>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <EmailIcon />
                <a
                  href="mailto:info@assentrealestate.com"
                  className="text-white/80 text-xs hover:text-accent transition-colors font-medium"
                >
                  info@assentrealestate.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Executive Private Inquiry Box */}
        <div className="mt-14 p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-sm">
          <div>
            <h4
              className="text-lg md:text-xl font-bold text-white mb-1"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Request Confidential Project Prospectus
            </h4>
            <p className="text-white/70 text-xs md:text-sm font-light">
              Receive full architectural blueprints, material schedules, and pricing directly to your inbox.
            </p>
          </div>
          <Link
            href="/contact"
            className="btn-primary text-xs uppercase tracking-widest py-3 px-7 whitespace-nowrap shadow-lg shrink-0"
          >
            Connect With Advisors
          </Link>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-white/10 relative z-10">
        <div className="container-custom mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50 font-light">
          <p>
            © {new Date().getFullYear()} Assent Real Estate &amp; Property Management Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/about" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-accent transition-colors">Terms of Stewardship</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function MapPinIcon() {
  return (
    <svg className="w-4 h-4 mt-0.5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg className="w-4 h-4 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

function SocialIcon({ name }) {
  if (name === "facebook") {
    return (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    );
  }
  if (name === "instagram") {
    return (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    );
  }
  if (name === "linkedin") {
    return (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    );
  }
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}
