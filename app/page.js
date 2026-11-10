import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '@/app/components/HeroSection';
import SectionHeading from '@/app/components/SectionHeading';
import ServiceCard from '@/app/components/ServiceCard';
import Stats from '@/app/components/Stats';
import FloorPlanViewer from '@/app/components/FloorPlanViewer';

export default function Home() {
  const amenities = [
    {
      title: "Dual High-Speed Elevators",
      desc: "Top-tier European/Japanese passenger lifts with ARD automatic rescue device and emergency battery backup.",
      icon: (
        <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0 3v4.5m0 3v1.5m4.5-16.5h12a2.25 2.25 0 012.25 2.25v12a2.25 2.25 0 01-2.25 2.25H8.25m-4.5 0h4.5m0-16.5v16.5m3-12l3-3m0 0l3 3m-3-3v12" />
        </svg>
      ),
    },
    {
      title: "100% Full Generator Backup",
      desc: "Sound-attenuated heavy duty generator powering complete lighting, appliances, lifts, and water pumps.",
      icon: (
        <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
    },
    {
      title: "Earthquake Resistant RCC",
      desc: "Engineered to strict BNBC seismic zone parameters utilizing 500W deformed rebar and certified stone-aggregate concrete.",
      icon: (
        <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
    },
    {
      title: "Landscaped Rooftop Sanctuary",
      desc: "Open-to-sky gardens, paved walking deck, BBQ lounge, and panoramic skyline vistas exclusive to residents.",
      icon: (
        <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      ),
    },
    {
      title: "16' Driveway & 21 Parking Bays",
      desc: "Wide dual vehicular access with guarded security checkpoints, CCTV coverage, and basement ventilation.",
      icon: (
        <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.25h1.5a1.5 1.5 0 011.5 1.5v3.75h-3v-5.25z" />
        </svg>
      ),
    },
    {
      title: "Fire Protection & Hydrant Rings",
      desc: "Comprehensive certified fire hydrant networks, heat & smoke sensors, dedicated fire stairs, and central emergency alarms.",
      icon: (
        <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        </svg>
      ),
    },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      {/* 1. HeroSection */}
      <HeroSection 
        title="Architectural Landmarks & Refined Living"
        subtitle="Assent Real Estate & Property Management Ltd. delivers signature residential towers, cutting-edge construction, and institutional property management."
        primaryCta={{ text: "Explore Assent Royal Heights", href: "#flagship" }}
        secondaryCta={{ text: "Schedule Private Consultation", href: "/contact" }}
        bgImage="/assent/project/tower-elevation.jpg"
      />

      {/* 2. About Preview */}
      <section className="section-padding bg-[#F8F9FA]/80 relative overflow-hidden">
        {/* Subtle Ambient Decorative Glow */}
        <div className="absolute top-10 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="reveal reveal-left">
              <SectionHeading 
                label="About Our Company"
                title="A Distinctive Standard in Real Estate & Property Management"
                center={false}
              />
              <p className="text-text-muted mb-6 text-base md:text-lg leading-relaxed font-light">
                <strong className="text-[#0B132B] font-semibold">Assent Real Estate &amp; Property Management Ltd.</strong> is a modern property developer and full-service property management corporation founded on trust, architectural integrity, and client satisfaction.
              </p>
              <p className="text-text-muted mb-8 leading-relaxed font-light">
                Whether creating bespoke high-rise residential communities like <em>Assent Royal Heights</em> or overseeing long-term asset preservation, our multi-disciplinary team ensures every property is constructed with uncompromising precision and maintained to institutional standards.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/about" className="btn-primary">
                  Discover Our Company
                </Link>
                <Link href="/services" className="btn-outline">
                  Our Management Services
                </Link>
              </div>
            </div>
            
            {/* Visual Feature Card */}
            <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-2xl border border-border reveal reveal-right group">
              <Image
                src="/assent/project/tower-elevation.jpg"
                alt="Assent Royal Heights Landmark Tower"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-[#0B132B]/30 to-transparent opacity-85 group-hover:opacity-75 transition-opacity duration-300" />
              
              <div className="absolute bottom-7 left-7 right-7 text-white">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/40 mb-2 backdrop-blur-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-accent text-[11px] font-bold uppercase tracking-wider">
                    Signature Residential High-Rise
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-1" style={{ fontFamily: "var(--font-playfair)" }}>
                  Assent Royal Heights
                </h3>
                <p className="text-white/80 text-xs md:text-sm font-light mt-1">
                  14 Storeys • 80&apos; Road Frontage • Dual Units per Floor • 21 Parking Bays
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Flagship Project & Interactive Floor Plan Explorer */}
      <section id="flagship" className="section-padding bg-white scroll-mt-20">
        <div className="container-custom">
          <div className="reveal reveal-up">
            <SectionHeading 
              label="Flagship Architectural Showcase"
              title="Assent Royal Heights"
              subtitle="Step inside our 14-story residential masterpiece facing an 80-foot avenue. Explore typical floors, 4-bedroom floor plans, rooftop gardens, and underground parking."
              center={true}
            />
          </div>

          <div className="mt-12 reveal reveal-up reveal-delay-200">
            <FloorPlanViewer />
          </div>
        </div>
      </section>

      {/* 4. Architectural Amenities & Engineering Excellence */}
      <section className="section-padding bg-[#0B132B] text-white relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-gold/5 rounded-full blur-[110px] pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="reveal reveal-up">
            <SectionHeading 
              label="Engineering & Comfort"
              title="Built for Timeless Reliability"
              subtitle="Every detail in our developments is chosen to ensure enduring safety, acoustic comfort, and lifelong convenience."
              center={true}
              light={true}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {amenities.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-accent/40 hover:bg-white/[0.06] transition-all duration-400 group card-dark-hover flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:bg-accent group-hover:border-accent transition-colors duration-300">
                    <div className="group-hover:text-[#0B132B] transition-colors duration-300">
                      {item.icon}
                    </div>
                  </div>
                  <h4
                    className="text-lg font-bold text-white mb-2 tracking-wide group-hover:text-accent transition-colors"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {item.title}
                  </h4>
                  <p className="text-white/70 text-xs md:text-sm leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Comprehensive Services Overview */}
      <section className="section-padding bg-[#F8F9FA]/80">
        <div className="container-custom">
          <div className="reveal reveal-up">
            <SectionHeading 
              label="What We Deliver"
              title="Comprehensive Real Estate & Management Solutions"
              subtitle="Integrated expertise spanning the complete property lifecycle from conceptual drafting to lifelong asset stewardship."
              center={true}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="reveal reveal-up reveal-delay-100">
              <ServiceCard 
                title="Real Estate Development"
                description="Developing prestigious residential towers and prime commercial assets engineered with modern luxury amenities."
                icon={<svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1v1H9V7zm5 0h1v1h-1V7zm-5 4h1v1H9v-1zm5 0h1v1h-1v-1zm-5 4h1v1H9v-1zm5 0h1v1h-1v-1z" /></svg>}
              />
            </div>
            <div className="reveal reveal-up reveal-delay-200">
              <ServiceCard 
                title="Property Management"
                description="Complete facility management, tenant relations, predictive maintenance, and asset value appreciation."
                icon={<svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>}
              />
            </div>
            <div className="reveal reveal-up reveal-delay-300">
              <ServiceCard 
                title="Architectural Construction"
                description="High-standard structural execution utilizing premium grade materials, earthquake-resistant design, and rigorous safety protocols."
                icon={<svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
              />
            </div>
            <div className="reveal reveal-up reveal-delay-400">
              <ServiceCard 
                title="Strategic Consultancy"
                description="Expert investment advisory, title verification, market feasibility, and portfolio optimization for buyers and landlords."
                icon={<svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>}
              />
            </div>
          </div>
          
          <div className="mt-12 text-center reveal reveal-up">
            <Link href="/services" className="btn-outline">
              Explore All Services &amp; Capabilities
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Corporate Principles */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="reveal reveal-up">
            <SectionHeading 
              label="Our Guiding Values"
              title="The Assent Standard"
              subtitle="Every building we construct and every asset we manage adheres to four bedrock commitments."
              center={true}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-12">
            <div className="card-hover p-8 rounded-2xl bg-[#F8F9FA]/70 border border-border text-center reveal reveal-up reveal-delay-100">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent-light text-[#9C7A3C] mb-5 shadow-sm">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-[#0B132B]" style={{ fontFamily: "var(--font-playfair)" }}>Integrity &amp; Transparency</h3>
              <p className="text-text-muted text-sm leading-relaxed font-light">Complete transparency in specifications, legal approvals, and milestone timelines.</p>
            </div>
            
            <div className="card-hover p-8 rounded-2xl bg-[#F8F9FA]/70 border border-border text-center reveal reveal-up reveal-delay-200">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent-light text-[#9C7A3C] mb-5 shadow-sm">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-[#0B132B]" style={{ fontFamily: "var(--font-playfair)" }}>Architectural Precision</h3>
              <p className="text-text-muted text-sm leading-relaxed font-light">Modern design with optimized layouts, natural light, cross ventilation, and green aesthetics.</p>
            </div>

            <div className="card-hover p-8 rounded-2xl bg-[#F8F9FA]/70 border border-border text-center reveal reveal-up reveal-delay-300">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent-light text-[#9C7A3C] mb-5 shadow-sm">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-[#0B132B]" style={{ fontFamily: "var(--font-playfair)" }}>Enduring Quality</h3>
              <p className="text-text-muted text-sm leading-relaxed font-light">Top-tier construction materials and stringent quality control ensuring lifetime durability.</p>
            </div>

            <div className="card-hover p-8 rounded-2xl bg-[#F8F9FA]/70 border border-border text-center reveal reveal-up reveal-delay-400">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent-light text-[#9C7A3C] mb-5 shadow-sm">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-[#0B132B]" style={{ fontFamily: "var(--font-playfair)" }}>Dedicated Stewardship</h3>
              <p className="text-text-muted text-sm leading-relaxed font-light">Dedicated property management and round-the-clock maintenance that protects your investment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Stats Metrics with Animated Viewport Counter */}
      <Stats />

      {/* 8. Signature Call to Action Banner */}
      <section className="py-24 bg-[#0B132B] text-white text-center border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/10 pointer-events-none" />
        <div className="container-custom relative z-10 px-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Direct Developer Access
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
            Ready to Experience Refined Modern Living?
          </h2>
          <p className="text-base md:text-lg mb-10 max-w-2xl mx-auto text-white/80 font-light leading-relaxed">
            Connect with our property specialists to view detailed blueprints, discuss customized payment schedules, or schedule an executive site consultation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary text-xs uppercase tracking-widest py-4 px-9 shadow-2xl">
              Book a Consultation
            </Link>
            <Link href="/projects" className="btn-outline-dark text-xs uppercase tracking-widest py-3.5 px-9">
              Browse All Projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
