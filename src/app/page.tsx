"use client";

import React, { useState } from "react";
import { siteContent } from "@/data/siteContent";

export default function PortfolioPage() {
  const [activePillarId, setActivePillarId] = useState<string>(
    siteContent.expertise.pillars[0].id
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Contact form state
  const [selectedCategory, setSelectedCategory] = useState<string>(
    siteContent.contact.formCategories[0]
  );
  const [formState, setFormState] = useState<{
    name: string;
    organization: string;
    email: string;
    phone: string;
    message: string;
  }>({
    name: "",
    organization: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "submitting" | "success" | "mailto_fallback" | "error"
  >("idle");

  const activePillar =
    siteContent.expertise.pillars.find((p) => p.id === activePillarId) ||
    siteContent.expertise.pillars[0];

  const handlePillarCtaClick = (inquirySubject: string) => {
    const matchingCategory = siteContent.contact.formCategories.find((cat) =>
      cat.toLowerCase().includes(inquirySubject.toLowerCase().split(" ")[0])
    );
    if (matchingCategory) {
      setSelectedCategory(matchingCategory);
    }
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus("submitting");

    const accessKey = siteContent.contact.web3FormsAccessKey;
    const isKeyConfigured =
      accessKey &&
      accessKey !== "YOUR_WEB3FORMS_ACCESS_KEY_HERE" &&
      accessKey.trim().length > 10;

    if (isKeyConfigured) {
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: accessKey,
            subject: `[Website Inquiry] ${selectedCategory} — from ${formState.name}`,
            from_name: formState.name,
            organization: formState.organization || "Not specified",
            email: formState.email,
            phone: formState.phone || "Not provided",
            category: selectedCategory,
            message: formState.message,
          }),
        });

        const result = await response.json();
        if (result.success) {
          setSubmitStatus("success");
          setFormState({
            name: "",
            organization: "",
            email: "",
            phone: "",
            message: "",
          });
          return;
        } else {
          setSubmitStatus("error");
          return;
        }
      } catch {
        setSubmitStatus("error");
        return;
      }
    }

    // Graceful fallback before Web3Forms key is pasted: open pre-addressed email
    const targetEmail = selectedCategory.toLowerCase().includes("board")
      ? siteContent.contact.boardEmail
      : siteContent.contact.corporateEmail;

    const subject = encodeURIComponent(
      `${selectedCategory} — Inquiry from ${formState.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formState.name}\nOrganization: ${
        formState.organization || "N/A"
      }\nEmail: ${formState.email}\nPhone: ${
        formState.phone || "N/A"
      }\nMandate Area: ${selectedCategory}\n\nMessage:\n${formState.message}`
    );
    window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
    setSubmitStatus("mailto_fallback");
  };

  return (
    <div className="min-h-screen flex flex-col bg-ivory text-charcoal">
      {/* =====================================================================
          STICKY EXECUTIVE NAVIGATION BAR
      ===================================================================== */}
      <header className="sticky top-0 z-50 bg-ivory/95 backdrop-blur-md border-b border-ivory-border transition-all">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
          {/* Brand Monogram & Name */}
          <a
            href="#top"
            className="flex items-center gap-3.5 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-lg bg-charcoal text-ivory flex items-center justify-center font-serif font-semibold text-lg tracking-wider border border-bronze/50 shadow-sm group-hover:bg-forest transition-colors">
              {siteContent.identity.initials}
            </div>
            <div>
              <span className="block font-serif text-xl sm:text-2xl font-semibold tracking-tight text-charcoal leading-none">
                {siteContent.identity.fullName}
              </span>
              <span className="block text-[11px] uppercase tracking-[0.14em] text-slate-muted mt-1">
                {siteContent.identity.credentialsBanner}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-8"
          >
            {siteContent.navigation.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-body hover:text-forest transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href={siteContent.navigation.ctaHref}
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-ivory bg-forest hover:bg-forest-dark rounded-md shadow-sm transition-all"
            >
              {siteContent.navigation.ctaLabel}
            </a>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="lg:hidden inline-flex items-center justify-center p-2.5 rounded-md text-charcoal hover:bg-ivory-warm focus:outline-none"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.75}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.75}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-ivory border-b border-ivory-border px-6 pt-3 pb-6 space-y-3">
            <p className="text-xs uppercase tracking-[0.14em] text-bronze font-semibold pb-2 border-b border-ivory-border">
              {siteContent.identity.credentialsBanner}
            </p>
            <div className="flex flex-col space-y-2.5">
              {siteContent.navigation.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-charcoal hover:text-forest py-1.5"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="pt-2">
              <a
                href={siteContent.navigation.ctaHref}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-ivory bg-forest hover:bg-forest-dark rounded-md shadow-sm transition-all"
              >
                {siteContent.navigation.ctaLabel}
              </a>
            </div>
          </div>
        )}
      </header>

      <main id="top" className="flex-grow">
        {/* ===================================================================
            SECTION 1: HERO (ABOVE THE FOLD)
        =================================================================== */}
        <section className="relative overflow-hidden pt-10 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28 border-b border-ivory-border">
          {/* Subtle architectural background accent */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-full lg:w-5/12 bg-gradient-to-b from-ivory-warm/70 via-ivory-warm/40 to-transparent"
          />

          <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
              {/* Left Column: Executive Positioning */}
              <div className="lg:col-span-7 space-y-6 animate-fade-in">
                <div className="space-y-3">
                  <p className="text-xs sm:text-sm uppercase tracking-[0.16em] text-forest font-semibold">
                    {siteContent.hero.eyebrow}
                  </p>
                  <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold text-charcoal tracking-tight leading-[1.08]">
                    {siteContent.identity.fullName}
                  </h1>
                  <p className="font-serif text-2xl sm:text-3xl text-charcoal/90 font-medium leading-snug pt-1">
                    {siteContent.hero.headline}
                  </p>
                </div>

                <p className="text-base sm:text-lg text-slate-body leading-relaxed max-w-2xl">
                  {siteContent.hero.valueStatement}
                </p>

                {/* Regulatory License Callout */}
                <div className="pt-1 flex items-center gap-2.5 text-xs sm:text-sm text-slate-muted font-medium">
                  <svg
                    className="w-4 h-4 text-forest shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <span>{siteContent.identity.licensesBanner}</span>
                </div>

                {/* CTAs */}
                <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <a
                    href={siteContent.hero.primaryCta.href}
                    className="inline-flex items-center justify-center px-7 py-3.5 text-sm sm:text-base font-medium text-ivory bg-forest hover:bg-forest-dark rounded-md shadow-sm transition-all"
                  >
                    <span>{siteContent.hero.primaryCta.label}</span>
                    <svg
                      className="w-4 h-4 ml-2.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                  <a
                    href={siteContent.hero.secondaryCta.href}
                    className="inline-flex items-center justify-center px-6 py-3.5 text-sm sm:text-base font-medium text-charcoal bg-white hover:bg-ivory-warm border border-ivory-border rounded-md transition-all"
                  >
                    {siteContent.hero.secondaryCta.label}
                  </a>
                </div>
              </div>

              {/* Right Column: Executive Portrait in Architectural Frame */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-md">
                  {/* Subtle decorative frame offset */}
                  <div
                    aria-hidden="true"
                    className="absolute -inset-2.5 rounded-2xl border border-bronze/30 translate-x-2 translate-y-2 pointer-events-none"
                  />
                  <div className="relative rounded-xl overflow-hidden bg-gradient-to-b from-[#232528] via-[#1B1D20] to-[#121316] border border-charcoal/15 shadow-executive">
                    {/* Subtle warm studio radial glow behind transparent PNG portrait */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(181,158,125,0.22),transparent_70%)]"
                    />
                    <div className="relative pt-4 px-4 flex justify-center items-end">
                      <img
                        src={siteContent.identity.headshotUrl}
                        alt={siteContent.identity.headshotAlt}
                        className="w-full h-[410px] sm:h-[430px] object-contain object-bottom relative z-10"
                      />
                    </div>
                    {/* Nameplate Caption Strip */}
                    <div className="relative z-20 bg-charcoal/95 backdrop-blur-sm border-t border-white/10 px-6 py-4 text-ivory">
                      <p className="font-serif text-lg font-medium tracking-wide text-ivory">
                        {siteContent.identity.fullName}
                      </p>
                      <p className="text-xs text-ivory/75 mt-0.5">
                        {siteContent.identity.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quantified Executive Metrics Bar */}
            <div className="mt-14 sm:mt-16 pt-10 border-t border-ivory-border grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {siteContent.hero.keyMetrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="bg-white/90 border border-ivory-border rounded-lg p-6 shadow-card flex flex-col justify-between"
                >
                  <div>
                    <p className="font-serif text-3xl sm:text-4xl font-semibold text-forest tracking-tight">
                      {metric.value}
                    </p>
                    <p className="mt-2 text-sm font-medium text-charcoal leading-snug">
                      {metric.label}
                    </p>
                  </div>
                  <p className="mt-3 pt-3 border-t border-ivory-border/70 text-[11px] text-slate-muted">
                    {metric.sourceNote}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 2: ABOUT (EXECUTIVE SUMMARY & VANTAGE POINT)
        =================================================================== */}
        <section
          id="about"
          className="scroll-mt-20 py-20 sm:py-24 lg:py-28 bg-white border-b border-ivory-border"
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Section Heading & Pull Quote */}
              <div className="lg:col-span-5 space-y-6">
                <p className="text-xs uppercase tracking-[0.18em] text-forest font-semibold">
                  {siteContent.about.sectionLabel}
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-charcoal leading-tight">
                  {siteContent.about.heading}
                </h2>
                <blockquote className="p-6 rounded-xl bg-ivory border-l-4 border-forest shadow-sm">
                  <p className="font-serif italic text-lg sm:text-xl text-charcoal leading-relaxed">
                    &ldquo;{siteContent.about.pullQuote}&rdquo;
                  </p>
                  <footer className="mt-3 text-xs uppercase tracking-[0.14em] text-slate-muted font-semibold">
                    — {siteContent.identity.fullName}
                  </footer>
                </blockquote>
              </div>

              {/* Right Column: 158-Word Narrative & Operating Principles */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-5 text-base sm:text-[17px] text-slate-body leading-relaxed">
                  {siteContent.about.paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                {/* Three Core Pillars of Perspective */}
                <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {siteContent.about.principles.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-lg bg-ivory border border-ivory-border"
                    >
                      <div className="w-7 h-7 rounded-md bg-forest/10 text-forest flex items-center justify-center font-serif font-bold text-sm mb-3">
                        0{idx + 1}
                      </div>
                      <h3 className="font-serif text-lg font-semibold text-charcoal">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-xs sm:text-sm text-slate-body leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 3: EXPERTISE / SERVICES (INTERACTIVE 3-TAB + 6 FOCUS AREAS)
        =================================================================== */}
        <section
          id="expertise"
          className="scroll-mt-20 py-20 sm:py-24 lg:py-28 bg-ivory border-b border-ivory-border"
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            {/* Section Header */}
            <div className="max-w-3xl space-y-3">
              <p className="text-xs uppercase tracking-[0.18em] text-forest font-semibold">
                {siteContent.expertise.sectionLabel}
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-charcoal leading-tight">
                {siteContent.expertise.heading}
              </h2>
              <p className="text-base text-slate-body leading-relaxed">
                {siteContent.expertise.leadIn}
              </p>
            </div>

            {/* Interactive Three-Tab Switcher Bar */}
            <div
              role="tablist"
              aria-label="Practice Pillars"
              className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-3 bg-ivory-warm p-2 rounded-xl border border-ivory-border"
            >
              {siteContent.expertise.pillars.map((pillar, index) => {
                const isSelected = pillar.id === activePillarId;
                return (
                  <button
                    key={pillar.id}
                    role="tab"
                    aria-selected={isSelected}
                    aria-controls={`panel-${pillar.id}`}
                    id={`tab-${pillar.id}`}
                    type="button"
                    onClick={() => setActivePillarId(pillar.id)}
                    className={`text-left px-5 py-4 rounded-lg transition-all focus:outline-none ${
                      isSelected
                        ? "bg-charcoal text-ivory shadow-sm"
                        : "bg-transparent text-charcoal hover:bg-white/70"
                    }`}
                  >
                    <span
                      className={`block text-[11px] uppercase tracking-[0.14em] font-semibold ${
                        isSelected ? "text-bronze-light" : "text-forest"
                      }`}
                    >
                      Pillar 0{index + 1}
                    </span>
                    <span className="mt-1 block font-serif text-lg sm:text-xl font-semibold leading-snug">
                      {pillar.tabLabel}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Pillar Content Panel */}
            <div
              role="tabpanel"
              id={`panel-${activePillar.id}`}
              aria-labelledby={`tab-${activePillar.id}`}
              className="mt-6 bg-white rounded-2xl border border-ivory-border p-6 sm:p-10 lg:p-12 shadow-executive"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Left Column: Pillar Overview & Capabilities */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.14em] text-forest font-semibold">
                      {activePillar.eyebrow}
                    </p>
                    <h3 className="mt-2 font-serif text-2xl sm:text-3xl font-semibold text-charcoal">
                      {activePillar.title}
                    </h3>
                    <p className="mt-3 text-base text-slate-body leading-relaxed">
                      {activePillar.summary}
                    </p>
                  </div>

                  <div className="pt-2 space-y-4">
                    <h4 className="text-xs uppercase tracking-[0.14em] text-slate-muted font-semibold">
                      Core Mandates & Capabilities
                    </h4>
                    <div className="space-y-4">
                      {activePillar.capabilities.map((cap, i) => (
                        <div
                          key={i}
                          className="p-4 rounded-lg bg-ivory border border-ivory-border"
                        >
                          <p className="font-serif text-lg font-semibold text-charcoal">
                            {cap.name}
                          </p>
                          <p className="mt-1 text-sm text-slate-body leading-relaxed">
                            {cap.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Factual Track Record, Audience & Direct Inquiry Button */}
                <div className="lg:col-span-5 flex flex-col justify-between bg-ivory rounded-xl border border-ivory-border p-6 sm:p-8 space-y-6">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs uppercase tracking-[0.14em] text-forest font-semibold">
                        Who This Serves
                      </h4>
                      <p className="mt-1.5 text-sm text-charcoal font-medium leading-relaxed">
                        {activePillar.audience}
                      </p>
                    </div>

                    <div className="border-t border-ivory-border pt-5">
                      <h4 className="text-xs uppercase tracking-[0.14em] text-forest font-semibold">
                        Verified Career Track Record
                      </h4>
                      <ul className="mt-3 space-y-3">
                        {activePillar.factualTrackRecord.map((point, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 text-sm text-slate-body leading-relaxed"
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-forest shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-ivory-border">
                    <button
                      type="button"
                      onClick={() =>
                        handlePillarCtaClick(activePillar.inquirySubject)
                      }
                      className="w-full inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium text-ivory bg-forest hover:bg-forest-dark rounded-md shadow-sm transition-all"
                    >
                      <span>{activePillar.ctaLabel}</span>
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 6 Core Areas of Focus Grid */}
            <div className="mt-16">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-charcoal">
                  {siteContent.expertise.coreServicesGridTitle}
                </h3>
                <div className="hidden sm:block h-px flex-1 bg-ivory-border ml-6" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {siteContent.expertise.coreServices.map((service) => (
                  <div
                    key={service.number}
                    className="bg-white rounded-xl border border-ivory-border p-6 sm:p-7 shadow-card hover:border-forest/40 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-bronze">
                        Area {service.number}
                      </span>
                      <h4 className="mt-2 font-serif text-xl font-semibold text-charcoal leading-snug">
                        {service.title}
                      </h4>
                      <p className="mt-2.5 text-sm text-slate-body leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 4: EXPERIENCE (EXECUTIVE TIMELINE)
        =================================================================== */}
        <section
          id="experience"
          className="scroll-mt-20 py-20 sm:py-24 lg:py-28 bg-white border-b border-ivory-border"
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl space-y-3">
              <p className="text-xs uppercase tracking-[0.18em] text-forest font-semibold">
                {siteContent.experience.sectionLabel}
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-charcoal leading-tight">
                {siteContent.experience.heading}
              </h2>
              <p className="text-base text-slate-body leading-relaxed">
                {siteContent.experience.subtitle}
              </p>
            </div>

            {/* Timeline Items */}
            <div className="mt-12 relative border-l-2 border-ivory-border ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-12">
              {siteContent.experience.roles.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline node */}
                  <div
                    aria-hidden="true"
                    className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 ${
                      idx === 0
                        ? "bg-forest border-forest ring-4 ring-forest/15"
                        : "bg-white border-bronze group-hover:border-forest"
                    } transition-all`}
                  />

                  <div className="bg-ivory rounded-xl border border-ivory-border p-6 sm:p-8 shadow-card">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 pb-4 border-b border-ivory-border">
                      <div>
                        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-charcoal">
                          {item.role}
                        </h3>
                        <p className="text-base font-medium text-forest mt-0.5">
                          {item.organization}
                        </p>
                      </div>
                      <div className="lg:text-right">
                        <span className="inline-block px-3 py-1 rounded-full bg-white border border-ivory-border text-xs font-semibold text-charcoal">
                          {item.period}
                        </span>
                        <p className="text-xs text-slate-muted mt-1">
                          {item.location}
                        </p>
                      </div>
                    </div>

                    <p className="mt-4 text-sm sm:text-base text-charcoal font-medium leading-relaxed">
                      {item.mandate}
                    </p>

                    <ul className="mt-4 space-y-2.5">
                      {item.highlights.map((highlight, hIdx) => (
                        <li
                          key={hIdx}
                          className="flex items-start gap-2.5 text-sm text-slate-body leading-relaxed"
                        >
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-forest shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 pt-4 border-t border-ivory-border/80 flex flex-wrap gap-2">
                      {item.competencies.map((comp, cIdx) => (
                        <span
                          key={cIdx}
                          className="px-2.5 py-1 rounded bg-white border border-ivory-border text-xs text-slate-body font-medium"
                        >
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 5: LEADERSHIP, BOARDS & AFFILIATIONS
        =================================================================== */}
        <section
          id="leadership"
          className="scroll-mt-20 py-20 sm:py-24 lg:py-28 bg-ivory border-b border-ivory-border"
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl space-y-3">
              <p className="text-xs uppercase tracking-[0.18em] text-forest font-semibold">
                {siteContent.leadership.sectionLabel}
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-charcoal leading-tight">
                {siteContent.leadership.heading}
              </h2>
              <p className="text-base text-slate-body leading-relaxed">
                {siteContent.leadership.subtitle}
              </p>
            </div>

            {/* Featured Board Mandates Grid */}
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
              {siteContent.leadership.featuredBoards.map((board, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-ivory-border p-6 sm:p-8 shadow-card flex flex-col justify-between"
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs uppercase tracking-[0.14em] text-bronze font-semibold">
                        {board.category}
                      </span>
                      <span className="text-xs font-medium text-slate-muted bg-ivory px-2.5 py-1 rounded border border-ivory-border">
                        {board.period}
                      </span>
                    </div>

                    <h3 className="mt-3 font-serif text-2xl font-semibold text-charcoal">
                      {board.organization}
                    </h3>
                    <p className="text-sm sm:text-base font-medium text-forest mt-1">
                      {board.role}
                    </p>

                    {board.subRoles && (
                      <div className="mt-4 p-3.5 rounded-lg bg-ivory border border-ivory-border">
                        <p className="text-[11px] uppercase tracking-[0.12em] text-slate-muted font-semibold mb-2">
                          Board & Committee Progression
                        </p>
                        <ul className="space-y-1 text-xs text-charcoal font-medium">
                          {board.subRoles.map((sr, sIdx) => (
                            <li key={sIdx}>• {sr}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <ul className="mt-4 space-y-2.5">
                      {board.highlights.map((hl, hIdx) => (
                        <li
                          key={hIdx}
                          className="flex items-start gap-2.5 text-sm text-slate-body leading-relaxed"
                        >
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-forest shrink-0" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Governance, Advisory & Community Affiliations */}
            <div className="mt-12 bg-white rounded-xl border border-ivory-border p-6 sm:p-8 shadow-card">
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-charcoal pb-4 border-b border-ivory-border">
                Additional Board, Committee & Community Leadership
              </h3>
              <div className="mt-4 divide-y divide-ivory-border">
                {siteContent.leadership.additionalAffiliations.map(
                  (aff, idx) => (
                    <div
                      key={idx}
                      className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1"
                    >
                      <div>
                        <span className="font-medium text-charcoal text-sm sm:text-base">
                          {aff.organization}
                        </span>
                        <span className="hidden sm:inline text-slate-muted mx-2">
                          —
                        </span>
                        <span className="block sm:inline text-sm text-slate-body">
                          {aff.role}
                        </span>
                      </div>
                      <span className="text-xs font-medium text-slate-muted shrink-0">
                        {aff.period}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 6: CREDENTIALS (LICENCES, EDUCATION, DESIGNATIONS, HONOURS)
        =================================================================== */}
        <section
          id="credentials"
          className="scroll-mt-20 py-20 sm:py-24 lg:py-28 bg-white border-b border-ivory-border"
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl space-y-3">
              <p className="text-xs uppercase tracking-[0.18em] text-forest font-semibold">
                {siteContent.credentials.sectionLabel}
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-charcoal leading-tight">
                {siteContent.credentials.heading}
              </h2>
              <p className="text-base text-slate-body leading-relaxed">
                {siteContent.credentials.subtitle}
              </p>
            </div>

            {/* Active Regulatory Licences Banner */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              {siteContent.credentials.regulatoryLicences.map((lic, idx) => (
                <div
                  key={idx}
                  className="bg-charcoal text-ivory rounded-xl p-6 sm:p-7 border border-charcoal-muted shadow-card flex items-start gap-4"
                >
                  <div className="w-11 h-11 rounded-lg bg-forest flex items-center justify-center shrink-0 text-ivory font-serif font-semibold text-lg">
                    0{idx + 1}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-serif text-xl font-semibold text-ivory">
                        {lic.title}
                      </h3>
                      <span className="text-[11px] uppercase tracking-wider px-2 py-0.5 rounded bg-white/10 text-bronze-light font-medium">
                        {lic.year}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-ivory/80 font-medium mt-1">
                      {lic.issuer}
                    </p>
                    <p className="text-xs text-ivory/65 mt-2 leading-relaxed">
                      {lic.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Education & Professional Designations Two-Column Layout */}
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Academic Education */}
              <div className="lg:col-span-6 bg-ivory rounded-xl border border-ivory-border p-6 sm:p-8">
                <h3 className="font-serif text-2xl font-semibold text-charcoal pb-4 border-b border-ivory-border">
                  Academic Education
                </h3>
                <div className="mt-5 space-y-6">
                  {siteContent.credentials.education.map((edu, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex items-baseline justify-between gap-2">
                        <h4 className="font-serif text-lg font-semibold text-charcoal">
                          {edu.degree}
                        </h4>
                        <span className="text-xs font-medium text-slate-muted shrink-0">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-forest">
                        {edu.institutions}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-body">
                        {edu.focus}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Professional Designations & Certifications */}
              <div className="lg:col-span-6 bg-ivory rounded-xl border border-ivory-border p-6 sm:p-8">
                <h3 className="font-serif text-2xl font-semibold text-charcoal pb-4 border-b border-ivory-border">
                  Professional Designations & Certifications
                </h3>
                <div className="mt-5 space-y-4">
                  {siteContent.credentials.designationsAndCertificates.map(
                    (des, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-lg bg-white border border-ivory-border flex items-start justify-between gap-3"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 rounded bg-forest/10 text-forest text-xs font-bold">
                              {des.code}
                            </span>
                            <h4 className="text-sm font-semibold text-charcoal">
                              {des.name}
                            </h4>
                          </div>
                          <p className="text-xs text-slate-muted mt-1">
                            {des.issuer}
                          </p>
                        </div>
                        <span className="text-xs font-medium text-slate-muted shrink-0">
                          {des.year}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Honours, Medals & Languages Strip */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8 bg-ivory rounded-xl border border-ivory-border p-6 sm:p-8">
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-charcoal pb-4 border-b border-ivory-border">
                  State & Institutional Honours
                </h3>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {siteContent.credentials.honoursAndAwards.map(
                    (award, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-lg bg-white border border-ivory-border"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-semibold uppercase tracking-wider text-bronze">
                            {award.year}
                          </span>
                        </div>
                        <p className="font-serif text-base font-semibold text-charcoal mt-1">
                          {award.title}
                        </p>
                        <p className="text-xs text-slate-muted mt-0.5">
                          {award.issuer}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="lg:col-span-4 bg-ivory rounded-xl border border-ivory-border p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-charcoal pb-4 border-b border-ivory-border">
                    Languages
                  </h3>
                  <div className="mt-4 space-y-3">
                    {siteContent.credentials.languages.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between py-1.5 border-b border-ivory-border/60 last:border-none"
                      >
                        <span className="text-sm font-semibold text-charcoal">
                          {item.language}
                        </span>
                        <span className="text-xs text-slate-muted">
                          {item.proficiency}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 7: CONTACT (DIRECT CHANNELS & INQUIRY FORM)
        =================================================================== */}
        <section
          id="contact"
          className="scroll-mt-20 py-20 sm:py-24 lg:py-28 bg-ivory"
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Left Column: Direct Contact Coordinates */}
              <div className="lg:col-span-5 space-y-8">
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.18em] text-forest font-semibold">
                    {siteContent.contact.sectionLabel}
                  </p>
                  <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-charcoal leading-tight">
                    {siteContent.contact.heading}
                  </h2>
                  <p className="text-base text-slate-body leading-relaxed">
                    {siteContent.contact.description}
                  </p>
                </div>

                {/* Direct Contact Cards */}
                <div className="space-y-4">
                  {/* Corporate / Financing Email */}
                  <div className="p-5 rounded-xl bg-white border border-ivory-border shadow-card">
                    <p className="text-xs uppercase tracking-[0.12em] text-forest font-semibold">
                      {siteContent.contact.corporateEmailLabel}
                    </p>
                    <a
                      href={`mailto:${siteContent.contact.corporateEmail}`}
                      className="mt-1 block font-medium text-charcoal hover:text-forest transition-colors break-all"
                    >
                      {siteContent.contact.corporateEmail}
                    </a>
                  </div>

                  {/* Board / Governance Email */}
                  <div className="p-5 rounded-xl bg-white border border-ivory-border shadow-card">
                    <p className="text-xs uppercase tracking-[0.12em] text-bronze font-semibold">
                      {siteContent.contact.boardEmailLabel}
                    </p>
                    <a
                      href={`mailto:${siteContent.contact.boardEmail}`}
                      className="mt-1 block font-medium text-charcoal hover:text-forest transition-colors break-all"
                    >
                      {siteContent.contact.boardEmail}
                    </a>
                  </div>

                  {/* Direct Phone & LinkedIn */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 rounded-xl bg-white border border-ivory-border shadow-card">
                      <p className="text-xs uppercase tracking-[0.12em] text-slate-muted font-semibold">
                        Direct Telephone
                      </p>
                      <a
                        href={siteContent.contact.phoneHref}
                        className="mt-1 block font-medium text-charcoal hover:text-forest transition-colors"
                      >
                        {siteContent.contact.phone}
                      </a>
                    </div>

                    <div className="p-5 rounded-xl bg-white border border-ivory-border shadow-card">
                      <p className="text-xs uppercase tracking-[0.12em] text-slate-muted font-semibold">
                        LinkedIn Profile
                      </p>
                      <a
                        href={siteContent.contact.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-flex items-center gap-1.5 font-medium text-charcoal hover:text-forest transition-colors"
                      >
                        <span>/in/pramodgoyal</span>
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Location & Corporate Site */}
                  <div className="p-5 rounded-xl bg-ivory-warm border border-ivory-border text-xs sm:text-sm text-slate-body space-y-1">
                    <p>
                      <strong className="text-charcoal">Location:</strong>{" "}
                      {siteContent.contact.locationText}
                    </p>
                    <p>
                      <strong className="text-charcoal">
                        Corporate Portal:
                      </strong>{" "}
                      <a
                        href={siteContent.contact.companyWebsiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-forest hover:underline"
                      >
                        {siteContent.contact.companyWebsiteLabel}
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Confidential Inquiry Form */}
              <div className="lg:col-span-7">
                <div className="bg-white rounded-2xl border border-ivory-border p-6 sm:p-10 shadow-executive">
                  <h3 className="font-serif text-2xl font-semibold text-charcoal">
                    Send a Confidential Inquiry
                  </h3>
                  <p className="mt-1 text-sm text-slate-muted">
                    Select the nature of your mandate below and provide a brief
                    overview.
                  </p>

                  <form onSubmit={handleFormSubmit} className="mt-6 space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-2"
                        >
                          Full Name *
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) =>
                            setFormState({ ...formState, name: e.target.value })
                          }
                          placeholder="Your full name"
                          className="w-full px-4 py-3 rounded-lg bg-ivory border border-ivory-border text-sm text-charcoal focus:outline-none focus:border-forest"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="organization"
                          className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-2"
                        >
                          Organization / Enterprise
                        </label>
                        <input
                          id="organization"
                          type="text"
                          value={formState.organization}
                          onChange={(e) =>
                            setFormState({
                              ...formState,
                              organization: e.target.value,
                            })
                          }
                          placeholder="Company, board, or firm name"
                          className="w-full px-4 py-3 rounded-lg bg-ivory border border-ivory-border text-sm text-charcoal focus:outline-none focus:border-forest"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-2"
                        >
                          Email Address *
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) =>
                            setFormState({
                              ...formState,
                              email: e.target.value,
                            })
                          }
                          placeholder="name@company.com"
                          className="w-full px-4 py-3 rounded-lg bg-ivory border border-ivory-border text-sm text-charcoal focus:outline-none focus:border-forest"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-2"
                        >
                          Telephone (Optional)
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          value={formState.phone}
                          onChange={(e) =>
                            setFormState({
                              ...formState,
                              phone: e.target.value,
                            })
                          }
                          placeholder="e.g., 416-555-0199"
                          className="w-full px-4 py-3 rounded-lg bg-ivory border border-ivory-border text-sm text-charcoal focus:outline-none focus:border-forest"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="category"
                        className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-2"
                      >
                        Area of Focus / Mandate Type *
                      </label>
                      <select
                        id="category"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-ivory border border-ivory-border text-sm text-charcoal focus:outline-none focus:border-forest"
                      >
                        {siteContent.contact.formCategories.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-2"
                      >
                        Brief Mandate Overview *
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        required
                        value={formState.message}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            message: e.target.value,
                          })
                        }
                        placeholder="Please share the context of your inquiry (e.g., property acquisition, refinancing, advisory transition, or board discussion)..."
                        className="w-full px-4 py-3 rounded-lg bg-ivory border border-ivory-border text-sm text-charcoal focus:outline-none focus:border-forest"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitStatus === "submitting"}
                      className="w-full inline-flex items-center justify-center px-6 py-4 text-sm sm:text-base font-medium text-ivory bg-forest hover:bg-forest-dark rounded-lg shadow-sm transition-all disabled:opacity-60"
                    >
                      {submitStatus === "submitting"
                        ? "Transmitting Inquiry..."
                        : "Submit Confidential Inquiry"}
                    </button>

                    {submitStatus === "success" && (
                      <div className="p-4 rounded-lg bg-forest-subtle border border-forest/30 text-sm text-forest">
                        Thank you. Your inquiry has been received and I will
                        respond promptly.
                      </div>
                    )}

                    {submitStatus === "mailto_fallback" && (
                      <div className="p-4 rounded-lg bg-ivory-warm border border-ivory-border text-xs sm:text-sm text-charcoal">
                        Your email program has been opened with your inquiry
                        pre-addressed to{" "}
                        <strong>
                          {selectedCategory.toLowerCase().includes("board")
                            ? siteContent.contact.boardEmail
                            : siteContent.contact.corporateEmail}
                        </strong>
                        . You can also call directly at{" "}
                        <strong>{siteContent.contact.phone}</strong>.
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-xs sm:text-sm text-red-800">
                        There was an issue sending the form online. Please email{" "}
                        <a
                          href={`mailto:${siteContent.contact.corporateEmail}`}
                          className="underline font-semibold"
                        >
                          {siteContent.contact.corporateEmail}
                        </a>{" "}
                        or call <strong>{siteContent.contact.phone}</strong>.
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================================
          SECTION 8: FOOTER & PROFESSIONAL DISCLAIMER
      ===================================================================== */}
      <footer className="bg-charcoal text-ivory border-t border-charcoal-muted">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16 space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div className="flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-lg bg-forest text-ivory flex items-center justify-center font-serif font-semibold text-base tracking-wider">
                {siteContent.identity.initials}
              </div>
              <div>
                <p className="font-serif text-lg font-semibold text-ivory">
                  {siteContent.identity.fullName}
                </p>
                <p className="text-xs text-ivory/65">
                  {siteContent.identity.credentialsBanner}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              {siteContent.navigation.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs sm:text-sm text-ivory/75 hover:text-ivory transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={siteContent.contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pramod Goyal on LinkedIn"
                className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-white/10 hover:bg-forest text-ivory transition-colors"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="space-y-3 text-xs text-ivory/60 leading-relaxed">
            <p>{siteContent.footer.disclaimer}</p>
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-ivory/50">
              <p>
                &copy; {new Date().getFullYear()}{" "}
                {siteContent.footer.copyrightName}. All rights reserved.
              </p>
              <p>{siteContent.identity.location}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
