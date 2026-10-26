import HeroSection from "@/app/components/HeroSection";
import SectionHeading from "@/app/components/SectionHeading";
import ContactForm from "@/app/components/ContactForm";

export const metadata = {
  title: "Contact Us | Assent Real Estate & Property Management Ltd.",
  description: "Get in touch with Assent Real Estate & Property Management Ltd. for inquiries regarding Assent Royal Heights, joint venture development, and property management services.",
};

export default function ContactPage() {
  return (
    <main>
      <HeroSection
        compact={true}
        title="Connect With Our Advisors"
        subtitle="We invite you to reach out for project brochures, investment consultations, or property management inquiries."
        bgImage="/assent/project/tower-elevation.jpg"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="reveal reveal-up">
            <SectionHeading
              label="Direct Communications"
              title="We Look Forward to Hearing From You"
              center={true}
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            {/* Contact Form Card */}
            <div className="reveal reveal-left">
              <div className="bg-[#F8F9FA] p-8 md:p-10 rounded-2xl shadow-sm border border-border h-full">
                <span className="text-accent text-xs font-bold uppercase tracking-wider block mb-1">
                  Inquiry Portal
                </span>
                <h3 className="text-2xl font-bold mb-6 text-[#0B132B]" style={{ fontFamily: "var(--font-playfair)" }}>
                  Send Our Team a Message
                </h3>
                <ContactForm />
              </div>
            </div>
            
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {/* Head Office Card */}
              <div className="flex items-start gap-4 p-6 bg-[#F8F9FA] rounded-xl shadow-sm border border-border card-hover">
                <div className="text-accent mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#0B132B]">Corporate Headquarters</h4>
                  <p className="text-text-muted text-sm mt-1 leading-relaxed">
                    Assent Vista Tower, Level 7<br />
                    Suite 702, Avenue 4, Block C, Banani, Dhaka-1213
                  </p>
                </div>
              </div>

              {/* Operations & Management Office */}
              <div className="flex items-start gap-4 p-6 bg-[#F8F9FA] rounded-xl shadow-sm border border-border card-hover">
                <div className="text-accent mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#0B132B]">Property Management &amp; Customer Care</h4>
                  <p className="text-text-muted text-sm mt-1 leading-relaxed">
                    Assent Royal Heights Site Office<br />
                    Facing 80&apos; Wide Avenue, Dhaka
                  </p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="flex items-start gap-4 p-6 bg-[#F8F9FA] rounded-xl shadow-sm border border-border card-hover">
                <div className="text-accent mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#0B132B]">Telephone &amp; Hotlines</h4>
                  <div className="text-text-muted text-sm mt-1 flex flex-col gap-0.5">
                    <span className="font-medium">017**-******</span>
                    <span className="font-medium">019**-******</span>
                  </div>
                </div>
              </div>

              {/* Email & Web Card */}
              <div className="flex items-start gap-4 p-6 bg-[#F8F9FA] rounded-xl shadow-sm border border-border card-hover">
                <div className="text-accent mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#0B132B]">Electronic Mail</h4>
                  <p className="text-text-muted text-sm mt-1 flex flex-col">
                    <a href="mailto:info@assentrealestate.com" className="hover:text-accent font-medium transition-colors">
                      info@assentrealestate.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Embed Section */}
      <section className="section-padding bg-[#F8F9FA] border-t border-border">
        <div className="container-custom">
          <div className="reveal reveal-up">
            <SectionHeading
              label="Office Location"
              title="Visit Our Corporate Center"
              center={true}
            />
          </div>
          <div className="mt-8 rounded-2xl overflow-hidden shadow-sm h-[320px] md:h-[420px] border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14601.597753177894!2d90.41498116544062!3d23.824707647895697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c65f97b5e43b%3A0xbc94916a908a8a65!2sDhaka!5e0!3m2!1sen!2sbd!4v1705822363148!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
