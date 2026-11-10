"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const planTabs = [
  {
    id: "elevation",
    label: "3D Tower Render",
    category: "Exterior Architecture",
    badge: "14 Storeys",
    image: "/assent/project/tower-elevation.jpg",
    title: "Assent Royal Heights: 14-Story Luxury Landmark",
    description:
      "A testament to modern architectural excellence featuring private balconies, integrated vertical greenery, and floor-to-ceiling panoramic glass facade facing an 80' wide avenue.",
    specs: [
      { label: "Building Height", value: "14 Storeys (Ground + 13)" },
      { label: "Avenue Frontage", value: "80 Feet Wide Main Avenue" },
      { label: "Elevators", value: "2 High-Speed Passenger Lifts" },
      { label: "Architecture", value: "Contemporary Green-Living" },
    ],
  },
  {
    id: "typical",
    label: "Typical Floor (1st to 13th)",
    category: "Floor Layout",
    badge: "Dual Suites",
    image: "/assent/project/typical-floor-1-to-13.jpg",
    title: "Typical 1st to 13th Floor Architectural Plan",
    description:
      "Engineered for optimum cross-ventilation, abundant daylight, and maximum acoustic privacy. Featuring only two sprawling units per level with a central dual-elevator core.",
    specs: [
      { label: "Units per Floor", value: "2 Private Suites (A & B)" },
      { label: "Central Lobby", value: "15'-4\" x 13'-6\" Core" },
      { label: "Staircase", value: "8'-0\" x 11'-0\" Fire Exit" },
      { label: "Orientation", value: "North-South Breezeways" },
    ],
  },
  {
    id: "unit-a",
    label: "Unit-A (4-Bed Suite)",
    category: "Unit Layout",
    badge: "North-Facing",
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
      { label: "Servant Suite", value: "Bedroom + Private Bath" },
    ],
  },
  {
    id: "unit-b",
    label: "Unit-B (4-Bed Suite)",
    category: "Unit Layout",
    badge: "South-Facing",
    image: "/assent/project/unit-b-plan.jpg",
    title: "Unit-B Detailed Floor Plan: Luxury 4-Bed Residence",
    description:
      "Sophisticated dual-aspect layout offering tranquil bedrooms, multiple attached verandas for garden living, and dedicated zones for entertainment and domestic staff.",
    specs: [
      { label: "Master Bed", value: "15'-4\" x 14'-2\"" },
      { label: "Living Salon", value: "16'-0\" x 17'-0\"" },
      { label: "Dining Area", value: "13'-0\" x 14'-0\"" },
      { label: "Child Bed 1 & 2", value: "Spacious with Verandas" },
      { label: "Kitchen", value: "13'-5\" x 7'-0\"" },
      { label: "Servant Suite", value: "Private access & toilet" },
    ],
  },
  {
    id: "rooftop",
    label: "Rooftop Terrace Garden",
    category: "Amenities",
    badge: "Skyline View",
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
    badge: "21 Bays",
    image: "/assent/project/ground-floor-parking.jpg",
    title: "Driveway, Ground & Semi-Basement Parking",
    description:
      "Spacious 16' wide driveway with guarded security gates, separate caretaker quarters, electro-mechanical generator room, LPG cylinder zone, and 21 dedicated parking bays.",
    specs: [
      { label: "Driveway Width", value: "16 Feet Wide Driveway" },
      { label: "Total Parking", value: "21 Dedicated Bays" },
      { label: "Facilities", value: "Caretaker (15'-7\"x10'-5\")" },
      { label: "Utilities", value: "Substation & LPG Zone" },
    ],
  },
];

export default function FloorPlanViewer() {
  const [activeTab, setActiveTab] = useState(planTabs[0].id);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  const currentPlan = planTabs.find((p) => p.id === activeTab) || planTabs[0];

  const handleOpenLightbox = () => {
    setZoomLevel(1);
    setLightboxOpen(true);
  };

  const zoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  const zoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
  const resetZoom = () => setZoomLevel(1);

  return (
    <div className="w-full bg-white rounded-2xl border border-border shadow-[0_10px_35px_rgba(11,19,43,0.06)] overflow-hidden transition-all duration-300">
      {/* Header & Category Tabs */}
      <div className="bg-[#0B132B] px-6 py-7 md:px-10 border-b border-white/10 relative overflow-hidden">
        {/* Subtle Ambient Light in Header */}
        <div className="absolute top-0 right-0 w-80 h-40 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 border border-accent/35 mb-2.5">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-[11px] font-bold tracking-[0.15em] uppercase">
                Interactive Architectural Blueprint Explorer
              </span>
            </div>
            <h3
              className="text-2xl md:text-3xl font-bold text-white tracking-wide"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Assent Royal Heights: Plan &amp; Specs Studio
            </h3>
          </div>
          <button
            onClick={handleOpenLightbox}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/10 hover:bg-accent text-white hover:text-[#0B132B] text-xs font-bold tracking-wider uppercase transition-all duration-200 border border-white/20 self-start md:self-auto shadow-md"
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
            Inspect High-Res Blueprint
          </button>
        </div>

        {/* Tab Buttons */}
        <div className="relative z-10 flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          {planTabs.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 px-4 py-2.5 rounded-lg text-xs md:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? "bg-gradient-to-r from-accent via-accent-gold to-accent text-[#0B132B] shadow-md shadow-accent/25 font-bold"
                    : "bg-white/5 text-white/80 hover:bg-white/15 hover:text-white border border-transparent hover:border-white/10"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded ${
                    isActive
                      ? "bg-[#0B132B]/20 text-[#0B132B]"
                      : "bg-white/10 text-white/60"
                  }`}
                >
                  {tab.badge}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-10 items-stretch bg-[#F8F9FA]/60">
        {/* Interactive Image Showcase */}
        <div className="lg:col-span-7 xl:col-span-8 flex flex-col items-center justify-between">
          <div
            onClick={handleOpenLightbox}
            className="relative w-full rounded-xl overflow-hidden border border-border shadow-md bg-white cursor-zoom-in group aspect-[4/3] md:aspect-[16/11] flex items-center justify-center p-3 transition-transform duration-300"
          >
            {/* Grid Watermark / Drafting Guidelines */}
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(#0B132B 1px, transparent 1px), linear-gradient(90deg, #0B132B 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />

            <div className="relative w-full h-full">
              <Image
                src={currentPlan.image}
                alt={currentPlan.title}
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-[1.02] p-2"
                sizes="(max-width: 1024px) 100vw, 65vw"
                unoptimized
              />
            </div>

            {/* Hover overlay hint */}
            <div className="absolute inset-0 bg-[#0B132B]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
              <span className="px-5 py-2.5 bg-accent text-[#0B132B] font-bold text-xs uppercase tracking-widest rounded-lg shadow-xl flex items-center gap-2 transform group-hover:scale-105 transition-transform duration-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Click to Enlarge / Inspect Drawing
              </span>
            </div>

            {/* Category tag */}
            <div className="absolute top-4 left-4 px-3.5 py-1.5 bg-[#0B132B]/90 backdrop-blur-md text-accent text-[11px] font-bold uppercase tracking-wider rounded-md border border-accent/30 shadow-md">
              {currentPlan.category}
            </div>
          </div>
          <p className="text-xs text-text-muted mt-3 text-center flex items-center justify-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Click blueprint to view dimension labels, room layouts, and high-detail drafting notes.
          </p>
        </div>

        {/* Specs & Description Column */}
        <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-between bg-white p-7 rounded-xl border border-border shadow-sm">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9C7A3C] mb-1">
              Architectural Specifications
            </div>
            <h4
              className="text-xl md:text-2xl font-bold text-[#0B132B] mb-3 leading-snug"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {currentPlan.title}
            </h4>
            <div className="gold-line mb-4" />
            <p className="text-text-muted text-sm leading-relaxed mb-6 font-light">
              {currentPlan.description}
            </p>

            {/* Spec items grid */}
            <div className="space-y-2.5 mb-6">
              {currentPlan.specs.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-lg bg-[#F8F9FA] border border-border/70 hover:border-accent/40 transition-colors text-xs"
                >
                  <span className="text-text-muted font-medium">{item.label}</span>
                  <span className="text-[#0B132B] font-bold">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-border flex flex-col gap-3">
            <Link
              href="/contact"
              className="btn-primary w-full text-center text-xs py-3.5 uppercase tracking-widest shadow-md"
            >
              Request Floor Brochure &amp; Pricing
            </Link>
            <button
              onClick={handleOpenLightbox}
              className="btn-outline w-full text-center text-xs py-3"
            >
              Examine Blueprint Fullscreen
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal with Zoom Controls */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#0B132B]/95 backdrop-blur-md flex flex-col items-center justify-center p-3 md:p-6"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative max-w-6xl w-full max-h-[92vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#0B132B] text-white border-b border-white/10">
              <div>
                <h3
                  className="text-lg md:text-xl font-bold text-white tracking-wide"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {currentPlan.title}
                </h3>
                <p className="text-xs text-accent uppercase tracking-wider">{currentPlan.category}</p>
              </div>

              {/* Zoom and Close Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={zoomOut}
                  className="w-8 h-8 rounded bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-sm font-bold transition-colors"
                  title="Zoom Out"
                >
                  -
                </button>
                <button
                  onClick={resetZoom}
                  className="px-2.5 h-8 rounded bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                  title="Reset Zoom"
                >
                  {Math.round(zoomLevel * 100)}%
                </button>
                <button
                  onClick={zoomIn}
                  className="w-8 h-8 rounded bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-sm font-bold transition-colors"
                  title="Zoom In"
                >
                  +
                </button>
                <button
                  onClick={() => setLightboxOpen(false)}
                  className="ml-2 w-8 h-8 rounded bg-white/10 hover:bg-accent text-white hover:text-[#0B132B] flex items-center justify-center transition-colors"
                  aria-label="Close"
                >
                  <svg
                    className="w-5 h-5"
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
            </div>

            {/* Modal Blueprint Viewer */}
            <div className="flex-1 overflow-auto p-4 md:p-6 flex items-center justify-center relative min-h-[65vh] bg-[#F8F9FA]">
              <div
                style={{
                  transform: `scale(${zoomLevel})`,
                  transition: "transform 0.2s ease-out",
                }}
                className="cursor-grab active:cursor-grabbing max-w-full"
              >
                <Image
                  src={currentPlan.image}
                  alt={currentPlan.title}
                  width={1400}
                  height={1000}
                  className="max-h-[75vh] w-auto object-contain rounded-lg shadow-sm"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
