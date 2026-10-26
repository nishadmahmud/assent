"use client";

import { useState } from "react";
import Image from "next/image";

const planTabs = [
  {
    id: "elevation",
    label: "3D Tower Render",
    category: "Exterior View",
    image: "/assent/project/tower-elevation.jpg",
    title: "Assent Royal Heights: 14-Story Luxury Landmark",
    description:
      "A testament to modern architectural excellence featuring private balconies, integrated vertical greenery, and floor-to-ceiling panoramic glass facade facing an 80' wide avenue.",
    specs: [
      { label: "Building Height", value: "14 Storeys (Ground + 13)" },
      { label: "Avenue Frontage", value: "80 Feet Wide Main Road" },
      { label: "Elevators", value: "2 High-Speed Passenger Lifts" },
      { label: "Architecture", value: "Contemporary Green-Living" },
    ],
  },
  {
    id: "typical",
    label: "Typical Floor (1st to 13th)",
    category: "Floor Layout",
    image: "/assent/project/typical-floor-1-to-13.jpg",
    title: "Typical 1st to 13th Floor Architectural Plan",
    description:
      "Engineered for optimum cross-ventilation, abundant daylight, and maximum acoustic privacy. Featuring only two sprawling units per level with a central dual-elevator core.",
    specs: [
      { label: "Units per Floor", value: "2 Private Suites (A & B)" },
      { label: "Central Lobby", value: "15'-4\" x 13'-6\"" },
      { label: "Staircase", value: "8'-0\" x 11'-0\" Fire Exit" },
      { label: "Orientation", value: "North-South Breezeways" },
    ],
  },
  {
    id: "unit-a",
    label: "Unit-A (4-Bed Suite)",
    category: "Unit Layout",
    image: "/assent/project/unit-a-plan.jpg",
    title: "Unit-A Detailed Floor Plan: Premium 4-Bed Residence",
    description:
      "Expansive 4-bedroom layout with an opulent master suite, 2 children's bedrooms, guest bedroom, lavish living & dining spaces, kitchen with utility, and separate servant quarters.",
    specs: [
      { label: "Master Bed", value: "15'-4\" x 14'-2\" + Veranda" },
      { label: "Living Salon", value: "16'-0\" x 17'-0\"" },
      { label: "Dining Area", value: "13'-0\" x 14'-0\"" },
      { label: "Kitchen", value: "13'-5\" x 7'-0\"" },
      { label: "Guest Bed", value: "16'-2\" x 12'-7\"" },
      { label: "Servant Suite", value: "Bedroom + Private Toilet" },
    ],
  },
  {
    id: "unit-b",
    label: "Unit-B (4-Bed Suite)",
    category: "Unit Layout",
    image: "/assent/project/unit-b-plan.jpg",
    title: "Unit-B Detailed Floor Plan: Luxury 4-Bed Residence",
    description:
      "Sophisticated dual-aspect layout offering tranquil bedrooms, multiple attached verandas for garden living, and dedicated zones for entertainment and domestic staff.",
    specs: [
      { label: "Master Bed", value: "15'-4\" x 14'-2\"" },
      { label: "Living Salon", value: "16'-0\" x 17'-0\"" },
      { label: "Dining Area", value: "13'-0\" x 14'-0\"" },
      { label: "Child Bed 1 & 2", value: "Spacious with Balconies" },
      { label: "Kitchen", value: "13'-5\" x 7'-0\"" },
      { label: "Servant Room", value: "Private access & toilet" },
    ],
  },
  {
    id: "rooftop",
    label: "Rooftop Terrace Garden",
    category: "Amenities",
    image: "/assent/project/rooftop-plan.jpg",
    title: "Rooftop Floor Plan & Open-to-Sky Terraces",
    description:
      "Landscaped rooftop sanctuary featuring open-to-sky gardens, pergola seating, community gathering spaces, and panoramic skyline vistas for residents.",
    specs: [
      { label: "Open To Sky", value: "Dual Expansive Terraces" },
      { label: "Landscaping", value: "Green Planters & Trees" },
      { label: "Community Area", value: "Residents' Lounge Space" },
      { label: "Access", value: "Full Dual-Lift & Stair Access" },
    ],
  },
  {
    id: "parking",
    label: "Parking & Basements",
    category: "Infrastructure",
    image: "/assent/project/ground-floor-parking.jpg",
    title: "Driveway, Ground & Semi-Basement Parking",
    description:
      "Spacious 16' wide driveway with guarded security gates, separate caretaker quarters, electro-mechanical generator room, LPG cylinder zone, and 21 dedicated parking bays.",
    specs: [
      { label: "Driveway Width", value: "16 Feet Wide Driveway" },
      { label: "Total Parking", value: "21 Dedicated Bays" },
      { label: "Facilities", value: "Caretaker (15'-7\"x10'-5\")" },
      { label: "Utilities", value: "Electro-Mechanical Room & LPG Zone" },
    ],
  },
];

export default function FloorPlanViewer() {
  const [activeTab, setActiveTab] = useState(planTabs[0].id);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const currentPlan = planTabs.find((p) => p.id === activeTab) || planTabs[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-border/80 shadow-lg overflow-hidden">
      {/* Header & Category Tabs */}
      <div className="bg-[#0B132B] px-6 py-6 md:px-8 border-b border-white/10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/40 mb-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-xs font-semibold tracking-wider uppercase">
                Interactive Architectural Blueprint
              </span>
            </div>
            <h3
              className="text-2xl md:text-3xl font-bold text-white tracking-wide"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Assent Royal Heights: Project Explorer
            </h3>
          </div>
          <button
            onClick={() => setLightboxOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/10 hover:bg-accent text-white hover:text-[#0B132B] text-xs font-semibold transition-all duration-200 border border-white/20 self-start md:self-auto"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
              />
            </svg>
            Click to Enlarge / Zoom
          </button>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
          {planTabs.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 px-4 py-2.5 rounded-lg text-xs md:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-accent text-[#0B132B] shadow-md shadow-accent/20"
                    : "bg-white/5 text-white/80 hover:bg-white/15 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-8 items-center bg-[#F8F9FA]">
        {/* Interactive Image Showcase */}
        <div className="lg:col-span-7 xl:col-span-8 flex flex-col items-center">
          <div
            onClick={() => setLightboxOpen(true)}
            className="relative w-full rounded-xl overflow-hidden border border-border shadow-md bg-white cursor-zoom-in group aspect-[4/3] md:aspect-[16/11] flex items-center justify-center p-3"
          >
            <div className="relative w-full h-full">
              <Image
                src={currentPlan.image}
                alt={currentPlan.title}
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-102 p-2"
                sizes="(max-width: 1024px) 100vw, 65vw"
                unoptimized
              />
            </div>
            {/* Hover overlay hint */}
            <div className="absolute inset-0 bg-[#0B132B]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="px-4 py-2 bg-accent text-[#0B132B] font-bold text-xs uppercase tracking-wider rounded-full shadow-lg">
                View Full Resolution
              </span>
            </div>
            {/* Status indicator tag */}
            <div className="absolute top-4 left-4 px-3 py-1 bg-[#0B132B]/85 backdrop-blur-sm text-accent text-[11px] font-semibold uppercase tracking-wider rounded-md border border-accent/30">
              {currentPlan.category}
            </div>
          </div>
          <p className="text-xs text-text-muted mt-3 text-center">
            Click architectural drawing to inspect dimension labels & room sizes in high detail.
          </p>
        </div>

        {/* Specs & Description Column */}
        <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-between h-full bg-white p-6 md:p-7 rounded-xl border border-border shadow-sm">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#9C7A3C] mb-1">
              Architectural Specifications
            </div>
            <h4
              className="text-xl md:text-2xl font-bold text-[#0B132B] mb-3 leading-snug"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {currentPlan.title}
            </h4>
            <div className="gold-line mb-4"></div>
            <p className="text-text-muted text-sm leading-relaxed mb-6">
              {currentPlan.description}
            </p>

            {/* Spec items grid */}
            <div className="space-y-3 mb-6">
              {currentPlan.specs.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-lg bg-[#F8F9FA] border border-border/60 text-xs"
                >
                  <span className="text-text-muted font-medium">{item.label}</span>
                  <span className="text-[#0B132B] font-bold">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-4 border-t border-border flex flex-col gap-2.5">
            <a
              href="/contact"
              className="btn-primary w-full text-center text-xs py-3 uppercase tracking-wider"
            >
              Request Floor Brochure & Pricing
            </a>
            <button
              onClick={() => setLightboxOpen(true)}
              className="btn-outline w-full text-center text-xs py-2.5"
            >
              Examine Blueprint Fullscreen
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#0B132B]/95 backdrop-blur-md flex flex-col items-center justify-center p-4 md:p-8"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-2xl p-4 overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-border">
              <div>
                <h3
                  className="text-lg md:text-xl font-bold text-[#0B132B]"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {currentPlan.title}
                </h3>
                <p className="text-xs text-text-muted">{currentPlan.category}</p>
              </div>
              <button
                onClick={() => setLightboxOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-black transition-colors"
                aria-label="Close"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 overflow-auto p-4 flex items-center justify-center relative min-h-[60vh]">
              <Image
                src={currentPlan.image}
                alt={currentPlan.title}
                width={1200}
                height={900}
                className="max-h-[75vh] w-auto object-contain rounded-lg"
                unoptimized
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
