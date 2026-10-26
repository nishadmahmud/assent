import HeroSection from '@/app/components/HeroSection';
import SectionHeading from '@/app/components/SectionHeading';
import Link from 'next/link';

export const metadata = {
  title: 'Our Services | Assent Real Estate & Property Management Ltd.',
  description: 'Full-spectrum real estate development, architectural construction, and professional property management services in Bangladesh.',
};

export default function ServicesPage() {
  const services = [
    {
      title: "Real Estate Development",
      description:
        "From identifying prime arterial locations to masterminding iconic 14-story residential towers like Assent Royal Heights, our developments represent thoughtful spatial design, optimal cross-ventilation, and luxury amenities designed for generations.",
      icon: (
        <svg className="w-16 h-16 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: "Comprehensive Property Management",
      description:
        "Professional stewardship for luxury residential communities and commercial complexes. We oversee 24/7 mechanical maintenance, dual elevator servicing, security operations, caretaker management, common area cleaning, and asset value appreciation.",
      icon: (
        <svg className="w-16 h-16 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      title: "Architectural Construction & Engineering",
      description:
        "Full-scale structural engineering utilizing premium-grade rebar, certified concrete mixing, seismic vibration resistance, and acoustic dampening. Every stage complies with national building codes and environmental standards.",
      icon: (
        <svg className="w-16 h-16 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: "Strategic Asset & Legal Consultancy",
      description:
        "Providing investors and property owners with authoritative advice on title authentication, municipal zoning permits, rental yield optimization, capital gains structuring, and real estate portfolio diversification.",
      icon: (
        <svg className="w-16 h-16 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  const features = [
    {
      title: "Integrated Architectural Planning",
      description: "Optimized floor layouts prioritizing ample natural light, ventilation, and family privacy.",
    },
    {
      title: "Lifelong Property Care",
      description: "Dedicated property management teams ensuring facilities maintain peak operational health.",
    },
    {
      title: "Transparent Legal Clearances",
      description: "100% compliant land titles, municipal approvals, and documented milestone schedules.",
    },
    {
      title: "Sustainable Urban Design",
      description: "Green balconies, rainwater collection reservoirs, and energy-conserving building envelopes.",
    },
  ];

  return (
    <main>
      <HeroSection 
        title="Our Services & Capabilities" 
        subtitle="Complete lifecycle property solutions: from architectural conception and construction to institutional management." 
        compact={true} 
        bgImage="/assent/project/tower-elevation.jpg"
      />

      {/* Main Services Breakdown */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="reveal reveal-up">
            <SectionHeading 
              label="Expertise & Offerings"
              title="What Assent Delivers" 
              subtitle="Setting new standards for real estate development and asset management in Bangladesh."
              center={true}
            />
          </div>
          
          <div className="mt-16 flex flex-col gap-12 md:gap-20">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 flex justify-center items-center bg-[#F8F9FA] p-12 md:p-16 rounded-2xl w-full border border-border shadow-sm min-h-[260px]">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <span className="text-accent text-xs font-bold uppercase tracking-wider block mb-1">
                    Service 0{index + 1}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#0B132B] mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                    {service.title}
                  </h3>
                  <div className="gold-line mb-6"></div>
                  <p className="text-text-muted text-base md:text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Assent */}
      <section className="section-padding bg-[#F8F9FA] border-t border-border">
        <div className="container-custom">
          <div className="reveal reveal-up">
            <SectionHeading 
              label="Competitive Excellence"
              title="The Assent Advantage" 
              subtitle="Why institutional investors, landlords, and families entrust their real estate to Assent."
              center={true}
            />
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-sm card-hover border border-border flex flex-col items-start transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-accent-light text-[#9C7A3C] font-bold flex items-center justify-center mb-4 text-sm">
                  0{index + 1}
                </div>
                <h4 className="text-lg font-bold text-[#0B132B] mb-2">{feature.title}</h4>
                <p className="text-text-muted text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services CTA */}
      <section className="py-20 bg-[#0B132B] text-white text-center">
        <div className="container-custom max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            Need Property Development or Management?
          </h2>
          <p className="text-white/80 text-base mb-8 font-light">
            Whether you own a plot ready for joint-venture development or require executive property management for your multi-unit complex, our team is ready to assist.
          </p>
          <Link href="/contact" className="btn-primary text-xs uppercase tracking-wider py-3.5 px-8">
            Schedule a Private Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
