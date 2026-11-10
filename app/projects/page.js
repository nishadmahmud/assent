import Link from 'next/link';
import HeroSection from '@/app/components/HeroSection';
import SectionHeading from '@/app/components/SectionHeading';
import ProjectCard from '@/app/components/ProjectCard';
import FloorPlanViewer from '@/app/components/FloorPlanViewer';

export const metadata = {
  title: 'Our Projects | Assent Real Estate & Property Management Ltd.',
  description: 'Explore signature residential developments and architectural landmarks by Assent Real Estate & Property Management Ltd.',
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Header */}
      <HeroSection 
        title="Our Architectural Projects"
        subtitle="Setting benchmark standards in luxury high-rise construction and timeless property development."
        compact={true}
        bgImage="/assent/project/tower-elevation.jpg"
      />

      {/* Flagship Feature Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="reveal reveal-up">
            <SectionHeading 
              label="Signature Flagship Landmark"
              title="Assent Royal Heights"
              subtitle="An iconic 14-story residential tower set along an 80-foot wide avenue, offering discerning buyers grand 4-bedroom residences, dedicated servant suites, and resort-style amenities."
              center={true}
            />
          </div>

          {/* Interactive Project Blueprint Viewer */}
          <div className="mt-12 reveal reveal-up reveal-delay-200">
            <FloorPlanViewer />
          </div>
        </div>
      </section>

      {/* Project Portfolio Grid */}
      <section className="section-padding bg-[#F8F9FA]/80 border-t border-border">
        <div className="container-custom">
          <div className="reveal reveal-up">
            <SectionHeading 
              label="Development Portfolio"
              title="Active &amp; Upcoming Developments"
              subtitle="Explore our growing portfolio of residential towers and commercial properties engineered for lasting value."
              center={true}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Project 1: Assent Royal Heights */}
            <div className="reveal reveal-up reveal-delay-100">
              <ProjectCard 
                name="Assent Royal Heights"
                location="Plot 104, 80' Wide Avenue, Prime Zone, Dhaka"
                type="Luxury Residential High-Rise"
                size="14 Storeys • 4-Bed Suites"
                status="Ongoing"
                features={[
                  "Dual High-Speed Elevators",
                  "2 Units per Floor for Acoustic Privacy",
                  "21 Dedicated Car Parking Bays",
                  "Open-to-Sky Rooftop Pergola & Gardens",
                  "Separate Servant Suite with Bath"
                ]}
                imageUrl="/assent/project/tower-elevation.jpg"
                blueprintHref="#flagship"
              />
            </div>

            {/* Project 2: Assent Panorama Residences */}
            <div className="reveal reveal-up reveal-delay-200">
              <ProjectCard 
                name="Assent Panorama Residences"
                location="Sector 11, Uttara, Dhaka"
                type="Exclusive Residential"
                size="Single & Dual Unit Suites"
                status="Upcoming"
                features={[
                  "Contemporary Green Balconies",
                  "Smart Home Security Integration",
                  "Equipped Fitness Gym & Community Hall",
                  "Three-Tier 24/7 Security"
                ]}
                imageUrl="/assent/project/unit-a-plan.jpg"
                blueprintHref="#flagship"
              />
            </div>

            {/* Project 3: Assent Commercial Centre */}
            <div className="reveal reveal-up reveal-delay-300">
              <ProjectCard 
                name="Assent Commercial Centre"
                location="Commercial Hub, Dhaka"
                type="Mixed-Use Commercial & Corporate"
                size="Premium Floor Plates"
                status="Upcoming"
                features={[
                  "Grade-A Corporate Offices",
                  "Multi-Level Basement Parking",
                  "Central HVAC & Fire Suppression",
                  "Full-Service Property Management"
                ]}
                imageUrl="/assent/project/ground-floor-parking.jpg"
                blueprintHref="#flagship"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Development Standards Banner */}
      <section className="section-padding bg-white border-t border-border relative overflow-hidden">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center reveal reveal-up">
            <span className="text-accent text-[11px] font-bold uppercase tracking-[0.2em] block mb-2">
              Engineering &amp; Building Standards
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B132B] mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
              Built for Longevity, Managed for Excellence
            </h2>
            <p className="text-base text-text-muted leading-relaxed font-light mb-8 max-w-2xl mx-auto">
              At Assent Real Estate &amp; Property Management Ltd., every structural milestone undergoes rigorous multi-tier inspection. From soil-mechanics testing to certified reinforcement steel and eco-efficient thermal insulation, we engineer structures that safeguard your family and investment across generations.
            </p>
            <Link href="/contact" className="btn-primary text-xs uppercase tracking-widest py-4 px-9 shadow-xl">
              Request Project Prospectus
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
