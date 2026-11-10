"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Assent Royal Heights (Luxury Suite)",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid corporate or personal email";
    }
    if (!formData.message.trim()) newErrors.message = "Please share your inquiry details";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  if (submitted) {
    return (
      <div className="bg-[#FAF9F6] border border-accent/40 rounded-2xl p-8 md:p-12 text-center shadow-lg transition-all duration-500">
        <div className="w-16 h-16 bg-gradient-to-tr from-accent-dark via-accent to-accent-gold rounded-full flex items-center justify-center mx-auto mb-5 shadow-[0_4px_20px_rgba(197,168,128,0.35)]">
          <svg className="w-8 h-8 text-[#0B132B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <div className="inline-block px-3 py-1 bg-accent/15 text-accent-dark text-[11px] font-bold uppercase tracking-widest rounded-full mb-3">
          Consultation Request Confirmed
        </div>
        <h3
          className="text-2xl md:text-3xl font-bold text-[#0B132B] mb-3"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Thank You, {formData.name}
        </h3>
        <p className="text-text-muted text-sm md:text-base max-w-md mx-auto leading-relaxed mb-6 font-light">
          Your inquiry regarding <strong className="text-[#0B132B]">{formData.interest}</strong> has been routed to our senior property advisors. We will contact you within 24 business hours.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              email: "",
              phone: "",
              interest: "Assent Royal Heights (Luxury Suite)",
              subject: "",
              message: "",
            });
          }}
          className="btn-outline text-xs uppercase tracking-wider py-2.5 px-6"
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2">
            Full Name <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3.5 rounded-xl border ${
              errors.name ? "border-red-400 bg-red-50/20" : "border-border/80"
            } bg-white text-text focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm`}
            placeholder="e.g. Mr. Tariq Rahman"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2">
            Email Address <span className="text-accent">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3.5 rounded-xl border ${
              errors.email ? "border-red-400 bg-red-50/20" : "border-border/80"
            } bg-white text-text focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm`}
            placeholder="your.email@domain.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2">
            Direct Phone / WhatsApp
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3.5 rounded-xl border border-border/80 bg-white text-text focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm"
            placeholder="+880 1713 000 000"
          />
        </div>

        <div>
          <label htmlFor="interest" className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2">
            Area of Interest
          </label>
          <select
            id="interest"
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            className="w-full px-4 py-3.5 rounded-xl border border-border/80 bg-white text-text focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm cursor-pointer"
          >
            <option value="Assent Royal Heights (Luxury Suite)">Assent Royal Heights (Luxury Suite)</option>
            <option value="Architectural Construction & Joint Venture">Architectural Construction &amp; Joint Venture</option>
            <option value="Institutional Property Management">Institutional Property Management</option>
            <option value="Strategic Asset & Legal Advisory">Strategic Asset &amp; Legal Advisory</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2">
          Subject / Requirement Overview
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3.5 rounded-xl border border-border/80 bg-white text-text focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm"
          placeholder="e.g. Schedule private site visit for Unit-A (4-Bed)"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2">
          Message &amp; Timeline Details <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className={`w-full px-4 py-3.5 rounded-xl border ${
            errors.message ? "border-red-400 bg-red-50/20" : "border-border/80"
          } bg-white text-text focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all text-sm resize-none`}
          placeholder="Please tell us about your preferred schedule, unit requirements, or property management needs..."
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="btn-primary w-full py-4 text-xs uppercase tracking-widest shadow-xl"
      >
        <span>Submit Private Consultation Request</span>
        <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>
      </button>

      <p className="text-[11px] text-text-muted text-center mt-3">
        🔒 All communications are treated with absolute discretion and executive confidentiality.
      </p>
    </form>
  );
}
