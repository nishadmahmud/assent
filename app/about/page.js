import Image from 'next/image';
import HeroSection from '@/app/components/HeroSection';
import SectionHeading from '@/app/components/SectionHeading';

export const metadata = {
  title: 'About Us | Assent Real Estate & Property Management Ltd.',
  description: 'Learn about Assent Real Estate & Property Management Ltd., our philosophy, architectural vision, and commitment to lifelong property stewardship.',
};

export default function AboutPage() {
  return (
    <main>
      {/* 1. HeroSection */}
      <HeroSection 
        title="About Assent Real Estate"
        subtitle="A heritage of architectural distinction, superior engineering, and dedicated property management."
        compact={true}
        bgImage="/assent/project/tower-elevation.jpg"
      />

      {/* 2. Company Background */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal reveal-left">
              <SectionHeading 
                label="Our Vision & Philosophy"
                title="Crafting Spaces of Enduring Distinction"
                center={false}
              />
              <p className="text-text-muted mb-6 text-base md:text-lg leading-relaxed">
                <strong className="text-[#0B132B]">Assent Real Estate & Property Management Ltd.</strong> was established with a singular objective: to elevate the standard of urban living and commercial property management across Bangladesh.
              </p>
              <p className="text-text-muted mb-6 leading-relaxed">
                We believe that real estate development transcends mere concrete and steel. True excellence lies in the harmonious integration of thoughtful architectural planning, durable construction standards, environmental responsibility, and lifelong facility care.
              </p>
              <p className="text-text-muted leading-relaxed">
                From our signature 14-story residential showcase, <em>Assent Royal Heights</em>, to comprehensive corporate asset management, we serve homeowners and institutional investors with absolute integrity and technical precision.
              </p>
            </div>
            
            <div className="relative h-[460px] rounded-2xl overflow-hidden shadow-xl border border-border reveal reveal-right group">
              <Image
                src="/assent/project/tower-elevation.jpg"
                alt="Assent Architectural Tower"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-accent text-xs font-bold uppercase tracking-wider block mb-1">
                  Assent Landmark
                </span>
                <p className="text-sm font-semibold">
                  Engineered with state-of-the-art materials &amp; sustainable green architecture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Leadership Message */}
      <section className="section-padding bg-[#F8F9FA] border-y border-border">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="reveal reveal-up">
              <SectionHeading 
                label="Executive Statement"
                title="A Message From Our Leadership"
                center={true}
              />
            </div>
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-border mt-8 relative reveal reveal-up">
              {/* Quote Icon */}
              <svg className="w-12 h-12 text-accent/30 absolute top-8 left-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-base md:text-lg text-[#1E293B] font-light leading-relaxed italic relative z-10 pl-12 md:pl-16">
                &quot;Welcome to Assent Real Estate &amp; Property Management Ltd. We believe that real estate should be an asset that grows in beauty, function, and capital value over time. Whether building signature high-rises or managing residential complexes, our foundation rests on delivering transparent timelines, uncompromised structural integrity, and dedicated property management. We thank our valued homeowners and partners for placing their faith in our vision.&quot;
              </blockquote>
              <div className="mt-8 flex items-center gap-4 pl-12 md:pl-16">
                <div className="w-14 h-14 rounded-full bg-[#0B132B] flex items-center justify-center text-accent font-bold text-xl">
                  A
                </div>
                <div>
                  <h4 className="font-bold text-[#0B132B] text-base" style={{ fontFamily: "var(--font-playfair)" }}>
                    Executive Board of Directors
                  </h4>
                  <p className="text-accent-dark text-xs font-semibold">
                    Assent Real Estate &amp; Property Management Ltd.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Vision & Mission Cards */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#F8F9FA] p-8 md:p-10 rounded-2xl border border-border card-hover reveal reveal-up" style={{ transitionDelay: "100ms" }}>
              <div className="w-12 h-12 bg-accent-light rounded-xl flex items-center justify-center mb-6 text-[#9C7A3C]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0B132B] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                Our Vision
              </h3>
              <p className="text-text-muted leading-relaxed text-sm md:text-base">
                To be Bangladesh&apos;s benchmark real estate development and asset management firm, renowned for iconic architecture, flawless structural reliability, and sustainable community living.
              </p>
            </div>
            
            <div className="bg-[#F8F9FA] p-8 md:p-10 rounded-2xl border border-border card-hover reveal reveal-up" style={{ transitionDelay: "200ms" }}>
              <div className="w-12 h-12 bg-accent-light rounded-xl flex items-center justify-center mb-6 text-[#9C7A3C]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0B132B] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                Our Mission
              </h3>
              <p className="text-text-muted leading-relaxed text-sm md:text-base">
                Assent Real Estate &amp; Property Management Ltd. is committed to delivering state-of-the-art properties that combine modern luxury, seismic resilience, transparent legal governance, and round-the-clock property stewardship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Team Commitment */}
      <section className="section-padding bg-[#0B132B] text-white">
        <div className="container-custom max-w-4xl mx-auto text-center reveal reveal-up">
          <span className="text-accent text-xs font-bold uppercase tracking-wider block mb-2">
            Multidisciplinary Expertise
          </span>
          <h3 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
            Engineered by Masters, Managed by Professionals
          </h3>
          <p className="text-white/80 leading-relaxed text-sm md:text-base mb-8">
            Our enterprise unites seasoned civil engineers, award-winning architectural planners, legal advisors, and proactive property managers. Each project reflects rigorous attention to detail, from driveway turning radiuses to electro-mechanical setups and pristine rooftop terraces.
          </p>
          <a href="/contact" className="btn-primary text-xs uppercase tracking-wider py-3.5 px-8">
            Connect With Our Leadership
          </a>
        </div>
      </section>
    </main>
  );
}
