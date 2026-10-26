import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '@/app/components/HeroSection';
import SectionHeading from '@/app/components/SectionHeading';
import ServiceCard from '@/app/components/ServiceCard';
import Stats from '@/app/components/Stats';
import FloorPlanViewer from '@/app/components/FloorPlanViewer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* 1. HeroSection */}
      <HeroSection 
        title="Architectural Landmarks & Refined Living"
        subtitle="Assent Real Estate & Property Management Ltd. delivers signature residential towers, cutting-edge construction, and institutional property management."
        primaryCta={{ text: "Explore Assent Royal Heights", href: "#flagship" }}
        secondaryCta={{ text: "Contact Our Advisors", href: "/contact" }}
        bgImage="/assent/project/tower-elevation.jpg"
      />

      {/* 2. About Preview */}
      <section className="section-padding bg-[#F8F9FA]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal reveal-left">
              <SectionHeading 
                label="About Our Company"
                title="A Distinctive Standard in Real Estate & Property Management"
                center={false}
              />
              <p className="text-text-muted mb-6 text-base md:text-lg leading-relaxed">
                <strong className="text-[#0B132B]">Assent Real Estate & Property Management Ltd.</strong> is a modern property developer and full-service property management corporation founded on trust, architectural integrity, and client satisfaction.
              </p>
              <p className="text-text-muted mb-8 leading-relaxed">
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
            <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-xl border border-border reveal reveal-right group">
              <Image
                src="/assent/project/tower-elevation.jpg"
                alt="Assent Royal Heights Landmark Tower"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-accent text-xs font-bold uppercase tracking-wider block mb-1">
                  Signature Development
                </span>
                <h3 className="text-xl md:text-2xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
                  Assent Royal Heights
                </h3>
                <p className="text-white/80 text-xs mt-1">
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

          <div className="mt-10 reveal reveal-up">
            <FloorPlanViewer />
          </div>
        </div>
      </section>

      {/* 4. Comprehensive Services Overview */}
      <section className="section-padding bg-[#F8F9FA]">
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
            <div className="reveal reveal-up" style={{ transitionDelay: "100ms" }}>
              <ServiceCard 
                title="Real Estate Development"
                description="Developing prestigious residential towers and prime commercial assets engineered with modern luxury amenities."
                icon={<svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1v1H9V7zm5 0h1v1h-1V7zm-5 4h1v1H9v-1zm5 0h1v1h-1v-1zm-5 4h1v1H9v-1zm5 0h1v1h-1v-1z" /></svg>}
              />
            </div>
            <div className="reveal reveal-up" style={{ transitionDelay: "200ms" }}>
              <ServiceCard 
                title="Property Management"
                description="Complete facility management, tenant relations, predictive maintenance, and asset value appreciation."
                icon={<svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>}
              />
            </div>
            <div className="reveal reveal-up" style={{ transitionDelay: "300ms" }}>
              <ServiceCard 
                title="Architectural Construction"
                description="High-standard structural execution utilizing premium grade materials, earthquake-resistant design, and rigorous safety protocols."
                icon={<svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
              />
            </div>
            <div className="reveal reveal-up" style={{ transitionDelay: "400ms" }}>
              <ServiceCard 
                title="Strategic Consultancy"
                description="Expert investment advisory, title verification, market feasibility, and portfolio optimization for buyers and landlords."
                icon={<svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>}
              />
            </div>
          </div>
          
          <div className="mt-12 text-center reveal reveal-up">
            <Link href="/services" className="btn-outline">
              Explore All Services & Capabilities
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Corporate Principles */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="card-hover p-8 rounded-xl bg-[#F8F9FA] border border-border text-center reveal reveal-up" style={{ transitionDelay: "100ms" }}>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent-light text-[#9C7A3C] mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-[#0B132B]" style={{ fontFamily: "var(--font-playfair)" }}>Integrity & Transparency</h3>
              <p className="text-text-muted text-sm leading-relaxed">Complete transparency in specifications, legal approvals, and milestone timelines.</p>
            </div>
            
            <div className="card-hover p-8 rounded-xl bg-[#F8F9FA] border border-border text-center reveal reveal-up" style={{ transitionDelay: "200ms" }}>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent-light text-[#9C7A3C] mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-[#0B132B]" style={{ fontFamily: "var(--font-playfair)" }}>Architectural Precision</h3>
              <p className="text-text-muted text-sm leading-relaxed">Modern design with optimized layouts, natural light, cross ventilation, and green aesthetics.</p>
            </div>

            <div className="card-hover p-8 rounded-xl bg-[#F8F9FA] border border-border text-center reveal reveal-up" style={{ transitionDelay: "300ms" }}>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent-light text-[#9C7A3C] mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-[#0B132B]" style={{ fontFamily: "var(--font-playfair)" }}>Enduring Quality</h3>
              <p className="text-text-muted text-sm leading-relaxed">Top-tier construction materials and stringent quality control ensuring lifetime durability.</p>
            </div>

            <div className="card-hover p-8 rounded-xl bg-[#F8F9FA] border border-border text-center reveal reveal-up" style={{ transitionDelay: "400ms" }}>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent-light text-[#9C7A3C] mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-[#0B132B]" style={{ fontFamily: "var(--font-playfair)" }}>Dedicated Stewardship</h3>
              <p className="text-text-muted text-sm leading-relaxed">Dedicated property management and round-the-clock maintenance that protects your investment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Stats Metrics */}
      <Stats />

      {/* 7. CTA Banner */}
      <section className="py-20 bg-[#0B132B] text-white text-center border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5 pointer-events-none" />
        <div className="container-custom relative z-10 px-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/20 border border-accent/40 mb-5">
            <span className="text-accent text-xs font-semibold uppercase tracking-wider">
              Assent Real Estate & Property Management Ltd.
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white" style={{ fontFamily: "var(--font-playfair)" }}>
            Ready to Experience Refined Modern Living?
          </h2>
          <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto text-white/80 font-light leading-relaxed">
            Connect with our property specialists to view detailed blueprints, discuss customized payment schedules, or schedule an executive consultation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary text-xs uppercase tracking-wider py-3.5 px-8">
              Book a Consultation
            </Link>
            <Link href="/projects" className="btn-outline text-xs uppercase tracking-wider py-3 px-8 text-white border-white/40 hover:text-[#0B132B]">
              Browse All Projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
