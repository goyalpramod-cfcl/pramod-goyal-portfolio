/**
 * ============================================================================
 * WEBSITE TEXT CONTENT FILE (src/data/siteContent.ts)
 * ============================================================================
 *
 * HOW TO EDIT THIS FILE:
 * - All text displayed on your website lives right here in one place.
 * - Only edit the text inside quotation marks ("like this").
 * - Do not remove quotation marks, commas, or brackets.
 * - Any item marked with [ADD: ...] is an optional placeholder you can fill in
 *   or remove whenever you are ready.
 * ============================================================================
 */

export const siteContent = {
  // --------------------------------------------------------------------------
  // 1. PERSONAL IDENTITY & SEO METADATA
  // --------------------------------------------------------------------------
  identity: {
    fullName: "Pramod Goyal",
    initials: "PG",
    credentialsBanner: "MBA (Kellogg & Schulich), AICB, PFP, AMP",
    licensesBanner: "Dual-Licensed in Ontario: Mortgage Broker (FSRA) & Real Estate Broker (RECO)",
    title: "President & CEO, Canadawide Financial Corporation Ltd.",
    location: "Greater Toronto Area, Ontario, Canada",
    headshotUrl: "/images/pramod-goyal-headshot.png",
    headshotAlt: "Pramod Goyal — President & CEO, Canadawide Financial Corporation Ltd.",
    standingPhotoUrl: "/images/pramod-goyal-standing.png",
  },

  seo: {
    pageTitle: "Pramod Goyal | Commercial Finance, Strategic Advisory & Board Governance | GTA",
    metaDescription:
      "Pramod Goyal (MBA Kellogg, EMBA Schulich, AICB, PFP, AMP) — President & CEO of Canadawide Financial Corporation. 35+ years in commercial real estate debt ($2M–$20M+), corporate credit restructuring, strategic management advisory, and board governance across the Greater Toronto Area.",
    ogUrl: "https://pramodgoyal.com",
  },

  // --------------------------------------------------------------------------
  // 2. NAVIGATION BAR
  // --------------------------------------------------------------------------
  navigation: {
    links: [
      { label: "About", href: "#about" },
      { label: "Expertise", href: "#expertise" },
      { label: "Experience", href: "#experience" },
      { label: "Leadership", href: "#leadership" },
      { label: "Credentials", href: "#credentials" },
      { label: "Contact", href: "#contact" },
    ],
    ctaLabel: "Get in Touch",
    ctaHref: "#contact",
  },

  // --------------------------------------------------------------------------
  // 3. HERO SECTION (ABOVE THE FOLD)
  // --------------------------------------------------------------------------
  hero: {
    eyebrow: "Advisory First. Financing Second. Execution Throughout.",
    headline: "Commercial Finance Executive, Strategic Business Advisor & Board Chair",
    valueStatement:
      "Across 35+ years in Canadian chartered banking, regulated commercial debt structuring, and C-suite enterprise management, I partner with mid-market business owners, real estate investors, and boards to structure resilient capital ($2M to $20M+), navigate complex transitions, and strengthen fiduciary governance.",
    primaryCta: {
      label: "Get in Touch",
      href: "#contact",
    },
    secondaryCta: {
      label: "Explore Areas of Practice",
      href: "#expertise",
    },
    keyMetrics: [
      {
        value: "$300M+",
        label: "Cumulative Commercial Real Estate & Business Financing Advised & Placed",
        sourceNote: "Canadawide Financial Corporation tenure (2009–Present)",
      },
      {
        value: "35+ Years",
        label: "Leadership Across Chartered Banking, Regulated Finance & Enterprise Management",
        sourceNote: "RBC Royal Bank, Scotiabank, Canadawide & Prior C-Suite Mandates",
      },
      {
        value: "125+",
        label: "Mid-Market Enterprises Advised on Cash Flow, Working Capital & DSCR",
        sourceNote: "Business Performance & Turnaround Reviews",
      },
      {
        value: "$2M–$20M+",
        label: "Core Commercial Real Estate & Corporate Debt Transaction Mandate Focus",
        sourceNote: "Tier-1 Banks, Credit Unions & Institutional Private Capital",
      },
    ],
  },

  // --------------------------------------------------------------------------
  // 4. ABOUT SECTION (155-WORD EXECUTIVE SUMMARY)
  // --------------------------------------------------------------------------
  about: {
    sectionLabel: "01 / Executive Profile",
    heading: "Closing the Divide Between Operational Upside and Institutional Underwriting",
    pullQuote:
      "I know how a credit committee stress-tests a file because I used to sit on that side of the table—and I understand executive P&L realities because I operate on the owner's side.",
    // 158 words strictly derived from LinkedIn Profile & Board Resume
    paragraphs: [
      "Business owners evaluate upside. Credit committees evaluate downside risk. Across more than three decades on both sides of that table, my work has been closing that divide for mid-market owners, commercial real estate investors, and governing boards across the Greater Toronto Area.",
      "As President and CEO of Canadawide Financial Corporation since 2009—and through prior commercial banking leadership tenures at RBC Royal Bank and Scotiabank—I work from an uncommon vantage point. I know how an institutional credit committee stress-tests a file because I used to adjudicate those portfolios, and I understand executive P&L realities because I have led operating enterprises as a CEO and Managing Director.",
      "My work follows a disciplined sequence: advisory first, financing second, execution throughout. I never lead with an off-the-shelf loan application. Instead, I diagnose the enterprise—pressure-testing financial models, evaluating operational risk, strengthening governance, and structuring debt facilities across Tier-1 banks, credit unions, and private capital.",
    ],
    principles: [
      {
        title: "A Lender's Discipline",
        description:
          "Credit adjudication, risk rating, covenant structuring, and balance-sheet forensics honed at RBC Royal Bank and Scotiabank.",
      },
      {
        title: "An Operator's Perspective",
        description:
          "Direct P&L, working capital, supply chain, and commercial contracting accountability across three CEO and Managing Director mandates.",
      },
      {
        title: "An Auditor's Eye for Governance",
        description:
          "Post-graduate training in Internal Audit & Management Control Systems combined with a decade as Chief Compliance Officer of an FSCO/FSRA-regulated brokerage.",
      },
    ],
  },

  // --------------------------------------------------------------------------
  // 5. EXPERTISE / SERVICES SECTION (HYBRID: 3 INTERACTIVE PILLARS + 6 CORE SERVICES)
  // --------------------------------------------------------------------------
  expertise: {
    sectionLabel: "02 / Expertise & Services",
    heading: "Areas of Practice",
    leadIn:
      "Select a practice pillar below to examine how I work with business owners, corporate borrowers, and governing boards—or review the six core advisory capabilities beneath.",

    // Interactive Three-Tab Switcher (aligned with Reference Sheet & LinkedIn/Resume facts)
    pillars: [
      {
        id: "financing",
        tabLabel: "Commercial Real Estate & Debt Financing",
        eyebrow: "Mandate Range: $2M to $20M+ · Chartered Banks, Credit Unions & Private Capital",
        title: "Disciplined Capital Structuring & Credit Advisory",
        summary:
          "Drawing on commercial banking leadership at RBC and Scotiabank and 17+ years leading Canadawide Financial, I help mid-market companies, real estate investors, and developers design resilient capital stacks and execute complex debt placements.",
        audience: "Owner-operators, commercial real estate investors, developers, CFOs, and professional referral partners.",
        capabilities: [
          {
            name: "Commercial Real Estate Execution ($2M–$20M+)",
            detail:
              "Strategic underwriting and debt placement for industrial buildings, commercial plazas, owner-occupied facilities, construction financing, and equity take-out.",
          },
          {
            name: "Credit Restructuring & Stalled File Turnarounds",
            detail:
              "Resuscitating declined or stalled commercial credit applications by dismantling flawed capital stacks and rebuilding them to withstand bank credit committee stress tests.",
          },
          {
            name: "Multi-Layered Debt Architecture",
            detail:
              "Structuring senior secured facilities, revolving operating lines, equipment leasing, asset-based lending, and A/B, mezzanine, or bridge financing across Tier-1 banks, Schedule II banks, credit unions, and institutional mortgage funds.",
          },
        ],
        factualTrackRecord: [
          "Advised and placed $300M+ in cumulative commercial real estate and business financing facilities as President & CEO of Canadawide Financial Corporation.",
          "Transitioned growing enterprises from leasing to owning their commercial and industrial facilities by structuring high-LTV financing with minimal working capital depletion.",
          "Maintained a >90% first-pass credit committee approval rate and scaled portfolio commitments beyond $85M+ as Commercial Banking Manager at RBC Royal Bank.",
        ],
        placeholderNote:
          "[ADD: Optional Representative Deal Tombstones — e.g., '$[XX]M Industrial Facility Acquisition (Mississauga)' or '$[XX]M Multi-Tranche Corporate Debt Refinancing']",
        ctaLabel: "Discuss a Financing Mandate",
        inquirySubject: "Commercial Real Estate & Debt Financing",
      },
      {
        id: "advisory",
        tabLabel: "Strategic Management & Transition Advisory",
        eyebrow: "C-Level Enterprise Advisory · Turnarounds · Bilateral Expansion",
        title: "Practical Strategy for Growth, Transformation & Operational Readiness",
        summary:
          "Capital structure must serve your business strategy—not dictate it. I act as an external strategic advisor and interim executive operator for mid-market enterprises navigating rapid expansion, operational restructuring, or ownership succession.",
        audience: "Founders, mid-market CEOs, family enterprises in transition, and bilateral trade organizations.",
        capabilities: [
          {
            name: "Business Transformation & Interim Executive Advisory",
            detail:
              "Serving as an external C-suite advisor during high-stakes transitions, succession, or rapid expansion—leading business process re-engineering, financial forecasting, and P&L turnaround.",
          },
          {
            name: "Cash Flow, Working Capital & DSCR Optimization",
            detail:
              "Diagnosing margin compression, restructuring inefficient balance sheets, optimizing debt amortization, and strengthening debt service coverage ratios ahead of capital raises.",
          },
          {
            name: "Due Diligence, Contracting & Cross-Border Strategy",
            detail:
              "Pre-financing balance sheet readiness, commercial contract negotiation, private equity/corporate finance transaction support, and bilateral market entry across Canada and India/South Asia.",
          },
        ],
        factualTrackRecord: [
          "Spearheaded business performance reviews for 125+ companies, directly improving operational cash flow, working capital efficiency, and debt service coverage ratios (DSCR).",
          "11+ years as Managing Director of Distribution Networks India Limited and 4+ years as concurrent Executive Director & CEO of Acer Telecom Limited, directing full P&L, OEM negotiations, and large-scale logistics.",
          "Led bilateral trade delegations and cross-border commercial partnerships as President & Board Chair of the Indo Canada Chamber of Commerce and Startup Chamber of Canada.",
        ],
        placeholderNote:
          "[ADD: Optional Anonymized Advisory Case Study — e.g., 'Restructured working capital and cost controls for a GTA manufacturing enterprise ahead of recapitalization']",
        ctaLabel: "Inquire About Strategic Advisory",
        inquirySubject: "Strategic & Turnaround Advisory",
      },
      {
        id: "governance",
        tabLabel: "Board Governance & Institutional Stewardship",
        eyebrow: "Fiduciary Oversight · Audit, Finance & Risk · Member-Based & Regulated Entities",
        title: "Fiduciary Stewardship, Credit Risk Oversight & Mission Sustainability",
        summary:
          "I bring a lender's discipline to credit, capital, and liquidity oversight, an auditor's eye for internal control, and three decades of board leadership across bilateral chambers, real estate boards, and community institutions.",
        audience: "Corporate and credit union nominating committees, not-for-profit boards, regulatory bodies, and bilateral trade chambers.",
        capabilities: [
          {
            name: "Credit, Capital & Liquidity Oversight",
            detail:
              "Board-level evaluation of credit policy, portfolio risk ratings, impaired-loan containment, and capital allocation informed by managing bank portfolios through the 2008–09 financial crisis.",
          },
          {
            name: "Audit, Internal Control & Regulatory Compliance",
            detail:
              "Post-graduate qualification in Internal Audit & Management Control Systems combined with 10 years as Chief Compliance Officer of an FSCO/FSRA-licensed brokerage with an unblemished audit record.",
          },
          {
            name: "Board Chairmanship, Governance & Succession",
            detail:
              "Steering multi-year strategic plans, governance committee reforms, board recruitment and succession planning, fiscal stewardship, and government/diplomatic stakeholder alignment.",
          },
        ],
        factualTrackRecord: [
          "President & Board Chair, Startup Chamber of Canada (2022–Present) and Past President & Board Chair, Indo Canada Chamber of Commerce (2018–2021; Governance Chair 2023–2024; Nominations Co-Chair 2024–2025).",
          "Finance Committee Member, Toronto Regional Real Estate Board (TRREB, 2024–2025) and Brampton Board of Trade (2010–2011).",
          "Zero regulatory penalties or lender fraud losses across a 10-year tenure as Principal Broker & Chief Compliance Officer under Ontario's MBLAA regulatory framework.",
        ],
        placeholderNote:
          "[ADD: Optional Board Endorsement or Peer Reference Quote]",
        ctaLabel: "Inquire Regarding Board & Governance Mandates",
        inquirySubject: "Board & Governance Mandate",
      },
    ],

    // 6 Clear Core Focus Cards (satisfying the 3–6 areas of focus requirement directly)
    coreServicesGridTitle: "Six Core Areas of Focus",
    coreServices: [
      {
        number: "01",
        title: "Commercial Real Estate Debt ($2M–$20M+)",
        description:
          "Acquisition financing, equity take-out, construction facilities, and debt refinancing for industrial buildings, commercial plazas, and owner-occupied properties across the GTA.",
      },
      {
        number: "02",
        title: "Corporate Debt & Credit Restructuring",
        description:
          "Resuscitating stalled or declined bank files, structuring working capital lines, equipment leasing, asset-based lending, and multi-layered A/B, mezzanine, and bridge capital stacks.",
      },
      {
        number: "03",
        title: "Strategic Management & Transition Advisory",
        description:
          "External strategic advisory and interim executive leadership during rapid expansion, operational restructuring, or family enterprise succession.",
      },
      {
        number: "04",
        title: "Balance Sheet & Cash-Flow Optimization",
        description:
          "Comprehensive business performance diagnostics focused on improving working capital efficiency, debt service coverage ratios (DSCR), and pre-financing lender readiness.",
      },
      {
        number: "05",
        title: "Due Diligence & Transaction Execution",
        description:
          "Pre-financing balance sheet forensics, financial modeling, covenant structuring, commercial contract negotiation, and private equity or corporate finance transaction support.",
      },
      {
        number: "06",
        title: "Board Governance, Audit & Risk Stewardship",
        description:
          "Independent board directorship, governance and nominations leadership, audit and finance committee oversight, and bilateral trade diplomacy.",
      },
    ],
  },

  // --------------------------------------------------------------------------
  // 6. EXPERIENCE SECTION (EXECUTIVE CAREER TIMELINE)
  // --------------------------------------------------------------------------
  experience: {
    sectionLabel: "03 / Executive Career",
    heading: "35+ Years Across Chartered Banking, Regulated Finance & C-Suite Leadership",
    subtitle:
      "A career built on both sides of the institutional credit table—combining chartered bank underwriting discipline with direct CEO and Managing Director operating accountability.",
    roles: [
      {
        role: "President & Chief Executive Officer",
        organization: "Canadawide Financial Corporation Ltd.",
        period: "May 2009 – Present",
        location: "Greater Toronto Area, Ontario",
        mandate:
          "Provide C-level management advisory and institutional capital solutions to mid-market enterprises, real estate investors, and developers navigating expansion, operational change, or capital constraints.",
        highlights: [
          "Advised and placed $300M+ in cumulative commercial real estate and business financing facilities ($2M–$20M+ core focus) across chartered banks, credit unions, and private lenders.",
          "Spearheaded business performance reviews for 125+ companies, directly improving operational cash flow, working capital efficiency, and debt service coverage ratios (DSCR).",
          "Transformed stalled or declined commercial credit applications into approved funding packages through balance sheet restructuring, covenant negotiation, and high-LTV owner-occupied facility acquisition structuring.",
        ],
        competencies: [
          "Commercial Real Estate Advisory",
          "Corporate Debt Structuring",
          "Financial Turnarounds",
          "Interim Executive Advisory",
          "Due Diligence & Governance",
        ],
      },
      {
        role: "Founder, President, Principal Broker & Chief Compliance Officer",
        organization: "Canadawide Mortgages Limited",
        period: "February 2012 – February 2022",
        location: "Mississauga, Ontario",
        mandate:
          "Founded and led an FSCO/FSRA-licensed Ontario mortgage brokerage specializing in mid-market commercial debt, construction financing, and complex private credit solutions across Ontario.",
        highlights: [
          "Established and enforced statutory compliance frameworks under the Mortgage Brokerages, Lenders and Administrators Act (MBLAA), maintaining an unblemished regulatory audit record with zero regulatory penalties or lender fraud losses.",
          "Cultivated direct origination relationships across Tier-1 institutions, Schedule II banks, trust companies, credit unions, and institutional private mortgage funds, structuring multi-layered A/B, mezzanine, and bridge facilities.",
          "Recruited, trained, and supervised licensed mortgage brokers and agents, reviewing high-dollar underwriting memos, LTV assessments, environmental reports, and property appraisals.",
        ],
        competencies: [
          "FSCO/FSRA Regulatory Compliance",
          "Lender Syndicate Management",
          "Complex Debt Architecture",
          "Risk Underwriting",
        ],
      },
      {
        role: "Commercial Banking Manager",
        organization: "RBC Royal Bank",
        period: "March 2008 – May 2009",
        location: "Greater Toronto Area, Ontario",
        mandate:
          "Directed a commercial banking portfolio across mid-market retail, wholesale, and diversified business services ($1M to $10M debt facilities) through the 2008–09 financial crisis.",
        highlights: [
          "Scaled portfolio to over $85M+ in total loan commitments and deposits while maintaining a >90% first-pass credit committee approval rate through disciplined stress-testing and narrative structuring.",
          "Kept impaired loans under 3% across economic cycles via proactive covenant monitoring, risk rating, cash-flow diagnostics, and account remediation.",
        ],
        competencies: [
          "Commercial Credit Adjudication",
          "Portfolio Risk Governance",
          "Covenant Structuring",
          "Treasury & Working Capital",
        ],
      },
      {
        role: "Professional & Business Banking Manager",
        organization: "Scotiabank",
        period: "February 2002 – March 2008",
        location: "Greater Toronto Area, Ontario",
        mandate:
          "Managed and expanded a commercial portfolio of professional and diversified owner-managed enterprises across the GTA, structuring custom financing packages from $500K to $10M.",
        highlights: [
          "Consistently exceeded annual net loan growth targets by 125% and reduced credit turnaround timelines by ~20% through pre-adjudication stress-testing and disciplined documentation packaging.",
          "Built a premier center-of-influence (COI) referral network of accountants, lawyers, and commercial brokers generating >35% of inbound deals; recognized with Scotiabank's 'Best of the Best' Award (2004) and Team Award (2002).",
        ],
        competencies: [
          "Middle-Market Commercial Lending",
          "Balance-Sheet Forensics",
          "Senior Secured & Asset-Based Debt",
          "Team Coaching & Talent Development",
        ],
      },
      {
        role: "Managing Director",
        organization: "Distribution Networks India Limited",
        period: "June 1990 – October 2001",
        location: "New Delhi, India",
        mandate:
          "Provided holistic executive leadership across corporate strategy, financial governance, legal compliance, and commercial operations for a major marketing and distribution enterprise representing leading national FMCG and OTC healthcare brands.",
        highlights: [
          "Directed full P&L performance, working capital optimization, statutory compliance, and high-value commercial negotiations with top manufacturers, government bodies, hospitality groups, and retail chains.",
          "Engineered synchronized daily, weekly, and monthly distribution networks serving thousands of retail outlets, optimizing inventory turnover and route-to-market execution.",
        ],
        competencies: [
          "Enterprise P&L Stewardship",
          "Institutional Contract Negotiation",
          "Statutory & Regulatory Compliance",
          "Large-Scale Supply Chain Execution",
        ],
      },
      {
        role: "Executive Director & Chief Executive Officer (Concurrent)",
        organization: "Acer Telecom Limited",
        period: "April 1995 – June 1999",
        location: "New Delhi, India",
        mandate:
          "Spearheaded end-to-end commercial operations, P&L management, and strategic growth for an authorized distributor of premier telecom and office automation brands including Samsung, Xerox, Panasonic, and Airtel.",
        highlights: [
          "Negotiated high-value OEM distribution agreements and expanded B2B enterprise market share across wireless radio, EPABX, and multifunction printing solutions.",
          "Built a high-performing sales and certified technical service organization that maximized recurring annual maintenance contract (AMC) revenue and strengthened enterprise client retention.",
        ],
        competencies: [
          "B2B Enterprise Operations",
          "OEM Alliance Management",
          "Recurring Revenue Architecture",
        ],
      },
    ],
  },

  // --------------------------------------------------------------------------
  // 7. LEADERSHIP, BOARDS & INSTITUTIONAL AFFILIATIONS
  // --------------------------------------------------------------------------
  leadership: {
    sectionLabel: "04 / Leadership & Governance",
    heading: "Board Positions, Committee Stewardship & Bilateral Trade Leadership",
    subtitle:
      "Three decades of fiduciary governance, audit and finance committee oversight, and bilateral corridor building across national chambers, real estate boards, and community institutions.",
    featuredBoards: [
      {
        organization: "Startup Chamber of Canada",
        role: "President & Board Chair",
        period: "January 2022 – Present",
        category: "National Entrepreneurial & Economic Empowerment NFP",
        highlights: [
          "Provide overarching strategic leadership and fiduciary governance to empower Canadian founders and strengthen the national entrepreneurial ecosystem.",
          "Lead the Board in shaping long-term policy priorities, overseeing fiscal stewardship, and serving as primary liaison with government policymakers, corporate sponsors, and ecosystem partners across Canada and South Asia.",
        ],
      },
      {
        organization: "Indo Canada Chamber of Commerce (ICCC)",
        role: "President & Board Chair (2018–2021) · Governance & Nominations Chair",
        period: "September 2017 – 2025",
        category: "Bilateral Business Chamber",
        subRoles: [
          "Co-Chair, Nominations Committee (2024 – 2025)",
          "Chair, Governance Committee (2023 – 2024)",
          "President & Board Chair (Dec 2018 – Jan 2021)",
          "Director, Corporate Secretary & Vice President (Oct 2018 – Nov 2018)",
          "Director & Vice President, Finance & Sponsorship (Sep 2017 – Sep 2018)",
        ],
        highlights: [
          "Elected to lead one of Canada's largest and oldest bilateral business organizations; steered multi-year strategic planning, audit oversight, and revenue diversification through the onset of the COVID-19 pandemic.",
          "Led high-level inbound and outbound bilateral trade delegations, increased corporate sponsorship commitments from Tier-1 banks and institutions, and strengthened board governance and succession standards.",
        ],
      },
      {
        organization: "Toronto Regional Real Estate Board (TRREB)",
        role: "Member, Finance Committee",
        period: "January 2024 – January 2025",
        category: "Professional Real Estate Regulatory & Industry Body",
        highlights: [
          "Contributed financial oversight, budget stewardship, and audit/internal control expertise to one of North America's largest real estate boards.",
        ],
      },
      {
        organization: "Indo-Canadian Harmony Forum",
        role: "Secretary General & VP, New Initiatives & Strategy",
        period: "October 2017 – Present",
        category: "Community & Institutional Governance",
        highlights: [
          "Direct strategic initiatives, organizational governance, and cross-community stakeholder relations.",
        ],
      },
    ],
    additionalAffiliations: [
      {
        role: "Vice President",
        organization: "Indo-Canada SME Business Council",
        period: "Aug 2020 – Dec 2023",
      },
      {
        role: "Honorary Member, National Advisory Board",
        organization: "SME Chamber of India",
        period: "Aug 2020 – Dec 2023",
      },
      {
        role: "Director",
        organization: "Kellogg–Schulich Alumni Association",
        period: "Alumni Board Leadership",
      },
      {
        role: "Member, International Trade Committee",
        organization: "Mississauga Board of Trade",
        period: "2016",
      },
      {
        role: "Member, Finance Committee & Multicultural Committee",
        organization: "Brampton Board of Trade (BBOT)",
        period: "Oct 2010 – Sep 2011",
      },
      {
        role: "Volunteer Team Leader (2003–Present) & Multicultural Committee (2005–2007)",
        organization: "United Way Toronto & York Region / Scotiabank",
        period: "2003 – Present",
      },
      {
        role: "Club President, Director & Committee Chair",
        organization: "Rotary International & HELP (Education Not-for-Profit Board Member)",
        period: "1987 – 2001",
      },
    ],
  },

  // --------------------------------------------------------------------------
  // 8. CREDENTIALS SECTION (LICENCES, EDUCATION, DESIGNATIONS, HONOURS)
  // --------------------------------------------------------------------------
  credentials: {
    sectionLabel: "05 / Credentials & Recognition",
    heading: "Licences, Academic Education, Designations & Honours",
    subtitle:
      "Academic grounding in corporate strategy, finance, and internal audit paired with active regulatory licensing in both Ontario mortgage brokering and real estate.",

    regulatoryLicences: [
      {
        title: "Licensed Mortgage Broker / Agent",
        issuer: "Financial Services Regulatory Authority of Ontario (FSRA)",
        year: "Licensed Since 2008",
        detail: "10 years serving as Principal Broker & Chief Compliance Officer under Ontario's MBLAA framework.",
      },
      {
        title: "Licensed Real Estate Broker",
        issuer: "Real Estate Council of Ontario (RECO)",
        year: "2022",
        detail: "Commercial & investment real estate advisory across the Greater Toronto Area.",
      },
    ],

    designationsAndCertificates: [
      {
        code: "AICB",
        name: "Associate, Institute of Canadian Bankers",
        issuer: "Institute of Canadian Bankers",
        year: "2008",
      },
      {
        code: "AMP",
        name: "Accredited Mortgage Professional & Commercial Mortgage Specialist",
        issuer: "Mortgage Professionals Canada",
        year: "2010",
      },
      {
        code: "PFP",
        name: "Personal Financial Planner & Financial Counselling Certificate",
        issuer: "Institute of Canadian Bankers / CSI",
        year: "2004",
      },
      {
        code: "CSC",
        name: "Canadian Securities Course & Personal Financial Planning Course",
        issuer: "Canadian Securities Institute",
        year: "2003",
      },
      {
        code: "BoardMatch",
        name: "BoardMatch Leaders Governance Program",
        issuer: "Altruvest Charitable Services",
        year: "2010",
      },
      {
        code: "Leadership",
        name: "Leadership 300 (Enhancing Leadership Skills) & Leadership 100",
        issuer: "Professional Leadership Certification",
        year: "Certified",
      },
    ],

    education: [
      {
        degree: "Executive Master of Business Administration (EMBA)",
        institutions: "Kellogg School of Management, Northwestern University & Schulich School of Business, York University",
        focus: "Joint Program — Corporate Strategy, Finance, Marketing & General Management",
        period: "2006 – 2007",
      },
      {
        degree: "Post-Graduate Diploma (PGDIA & MCS)",
        institutions: "University of Delhi",
        focus: "Internal Audit & Management Control Systems",
        period: "1988 – 1989",
      },
      {
        degree: "Post-Graduate Diploma in Business Administration (PGDBA)",
        institutions: "Annamalai University",
        focus: "Business Administration & Management",
        period: "1986 – 1987",
      },
      {
        degree: "Bachelor of Science (B.Sc.)",
        institutions: "University of Delhi",
        focus: "Biology & Chemistry",
        period: "1982 – 1985",
      },
    ],

    honoursAndAwards: [
      {
        title: "The King's Coronation Medal",
        issuer: "Government of Canada / Crown Honour",
        year: "2023",
      },
      {
        title: "Queen Elizabeth II Platinum Jubilee Pin",
        issuer: "Commemorative Canadian Honour",
        year: "2022",
      },
      {
        title: "Scotiabank \"Best of the Best\" Individual Award & Team Award",
        issuer: "Scotiabank Commercial & Professional Banking",
        year: "2004 & 2002",
      },
      {
        title: "Paul Harris Fellow (PHF)",
        issuer: "Rotary International Foundation",
        year: "1999",
      },
    ],

    languages: [
      { language: "English", proficiency: "Full Professional" },
      { language: "Hindi", proficiency: "Native or Bilingual" },
      { language: "Punjabi", proficiency: "Professional Working" },
      { language: "Urdu", proficiency: "Professional Working" },
    ],
  },

  // --------------------------------------------------------------------------
  // 9. OPTIONAL TESTIMONIALS / ENDORSEMENTS PLACEHOLDER SECTION
  // --------------------------------------------------------------------------
  placeholdersSection: {
    showOnSite: false, // Set to true once you replace the placeholders below with real quotes
    note: "[ADD: Client Testimonials or Board Peer Endorsements — currently hidden from public view until provided so no placeholder brackets appear to clients]",
    items: [
      {
        quote: "[ADD: Client testimonial from a GTA business owner or commercial real estate borrower]",
        author: "[ADD: Name, Title & Company]",
      },
      {
        quote: "[ADD: Endorsement from a fellow Board Director, Institutional Lender, or Chamber Leader]",
        author: "[ADD: Name, Title & Organization]",
      },
    ],
  },

  // --------------------------------------------------------------------------
  // 10. CONTACT SECTION & WEB3FORMS CONFIGURATION
  // --------------------------------------------------------------------------
  contact: {
    sectionLabel: "06 / Initiate a Conversation",
    heading: "Let's Examine the Strategy Before You Commit to Terms",
    description:
      "Whether you are evaluating a commercial property acquisition, restructuring a complex corporate debt facility, navigating a business transition, or discussing a board governance mandate, I welcome a confidential conversation.",
    corporateEmail: "pgoyal@canadawidefinancial.ca",
    corporateEmailLabel: "Commercial Financing & Advisory Mandates",
    boardEmail: "goyal.pramod@gmail.com",
    boardEmailLabel: "Board Directorship & Governance Inquiries",
    phone: "647.739.0050",
    phoneHref: "tel:+16477390050",
    linkedinUrl: "https://www.linkedin.com/in/pramodgoyal/",
    linkedinLabel: "linkedin.com/in/pramodgoyal",
    companyWebsiteUrl: "https://www.canadawidefinancial.ca",
    companyWebsiteLabel: "www.canadawidefinancial.ca",
    locationText: "Greater Toronto Area, Ontario, Canada",

    // Web3Forms Access Key:
    // Replace the placeholder string below with your free access key from https://web3forms.com
    // Until replaced, submitting the form opens a pre-filled email in the visitor's email client so no inquiry is ever lost.
    web3FormsAccessKey: "YOUR_WEB3FORMS_ACCESS_KEY_HERE",

    formCategories: [
      "Commercial Real Estate & Debt Financing ($2M–$20M+)",
      "Corporate Credit Restructuring / Stalled Bank File",
      "Strategic Management & Transition Advisory",
      "Board Directorship & Governance Mandate",
      "General Executive Inquiry",
    ],
  },

  // --------------------------------------------------------------------------
  // 11. FOOTER & INDUSTRY DISCLAIMER
  // --------------------------------------------------------------------------
  footer: {
    copyrightName: "Pramod Goyal · Canadawide Financial Corporation Ltd.",
    disclaimer:
      "Advisory & Regulatory Notice: Information presented on this website is for general informational purposes only and does not constitute a commitment to lend, financial or legal advice, or an offer of securities. Commercial financing, mortgage brokering, and real estate advisory services are subject to formal engagement, underwriting due diligence, and applicable regulatory requirements in the Province of Ontario (FSRA / RECO).",
    statutoryLicensePlaceholder:
      "[ADD: Optional statutory brokerage registration numbers if required by your current brokerage affiliation]",
  },
};
