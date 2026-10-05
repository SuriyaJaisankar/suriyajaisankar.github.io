export const profile = {
  name: 'Suriya Jaisankar',
  role: 'Senior Salesforce Developer',
  location: 'Chennai, Tamil Nadu',
  tagline:
    'English Literature to shipping Apex in six months. Three-plus years, four implementations, three delivery awards, and now back at TechnoRUCS as a Senior Salesforce Developer.',
  summary:
    "I didn't start in tech — my degree is in English Literature. Six months of full-stack training later, I was hired as a Salesforce Developer at TechnoRUCS: three years, four client implementations, ten certifications, and three back-to-back delivery awards. In 2026 I joined Salesforce as a Success Guide, advising Service Cloud and Experience Cloud customers on roadmaps and Agentforce adoption, then returned to TechnoRUCS as a Senior Salesforce Developer. What I bring: Apex and LWC that scale, Flows that don't fight the platform, and a growing focus on Agentforce — because I like being early on the parts of Salesforce that are still being figured out.",
  email: 'suriyajaisankar41@gmail.com',
  phone: '+91 82484 84374',
  socials: {
    linkedin: 'https://www.linkedin.com/in/suriyajaisankar',
    github: 'https://github.com/SuriyaJaisankar',
    trailhead: 'https://www.salesforce.com/trailblazer/suriyajaisankar',
  },
};

export const stats = [
  { value: '3+', label: 'years shipping Salesforce' },
  { value: '10', label: 'Salesforce certifications' },
  { value: '3×', label: 'delivery awards' },
  { value: '4', label: 'client implementations' },
];

export const highlights = [
  {
    title: 'Fast learner, real receipts',
    body: 'Six months from no-code to shipping in production. Three delivery awards in three years. Ten Salesforce certifications on top of a full-time delivery load.',
  },
  {
    title: 'Bulk-safe by default',
    body: 'The kind of Apex that holds up when a trigger fires on 200 records at once. Refactored a legacy handler out of governor-limit territory — that\'s the work I\'m proudest of.',
  },
  {
    title: 'Early on Agentforce',
    body: 'Building topics, actions, and Apex invocable tools for real agents. Grounding conversations in Knowledge and Data Cloud so agents actually help.',
  },
];

export const skillGroups = [
  {
    title: 'Agentforce & Agentic AI',
    items: [
      'Agent Builder',
      'Topics & Actions',
      'Prompt Builder',
      'Data Cloud grounding',
      'Knowledge grounding',
      'Apex invocable actions',
      'Agent testing & guardrails',
    ],
  },
  {
    title: 'Salesforce Development',
    items: [
      'Apex',
      'Lightning Web Components',
      'Aura',
      'Visualforce',
      'Flows & Process Builder',
      'REST / SOAP integrations',
      'SOQL optimization',
      'Governor limits',
      'Data Loader / ETL',
      'Salesforce CLI / DX',
    ],
  },
  {
    title: 'Foundations',
    items: ['Java', 'JavaScript', 'SQL / MySQL', 'HTML & CSS', 'OOP', 'Agile', 'Git'],
  },
];

export const experience = [
  {
    role: 'Senior Salesforce Developer',
    company: 'TechnoRUCS',
    start: 'Sep 2026',
    end: 'Present',
    location: 'Perungudi, Chennai',
    bullets: [
      'Rejoined TechnoRUCS after my time at Salesforce, this time in a senior role — owning Salesforce design and delivery end to end.',
      'Bringing the Success Guide view back into delivery: roadmap thinking, adoption risk, and Agentforce grounding decisions made at design time instead of patched after go-live.',
      'Building Agentforce agents, topics, and Apex invocable actions, and helping the team ship Apex and LWC that stay bulk-safe.',
    ],
  },
  {
    role: 'Success Guide',
    company: 'Salesforce',
    start: 'Apr 2026',
    end: 'Sep 2026',
    location: 'Remote',
    bullets: [
      'Served as named advisor across three product lines — Service Cloud, Experience Cloud, and Agentforce — so a single customer got one point of contact instead of three.',
      'On Service Cloud: case management, omni-channel routing, SLA and entitlement design, queue configuration — the plumbing that makes support scale.',
      'On Agentforce for Service Cloud: helped teams scope their first agent, design topics and actions, and ground it in Knowledge and Data Cloud so deflection is safe, not aspirational.',
      'On Experience Cloud: template selection, member profiles, and audience targeting — the parts that decide whether a portal actually gets used.',
      'Reframed knowledge base strategy as agent-grounding strategy, so a single content investment powers both self-service search and Agentforce answers.',
    ],
  },
  {
    role: 'Salesforce Developer',
    company: 'TechnoRUCS',
    start: 'Apr 2023',
    end: 'Apr 2026',
    location: 'Perungudi, Chennai',
    bullets: [
      'Recognized three times for delivery across four client implementations — different industries, different clouds, same job of turning requirements into shipped Salesforce.',
      'Built a custom Account Merge solution — the standard merge doesn\'t let you decide what carries over, so I built one that does: field-by-field control over which values migrate.',
      'Built a reusable custom Filter LWC — one component renders the line-item list view on an Opportunity, a second offers a filter dropdown with a "create new filter" flow. Filters compile down to dynamic SOQL that Apex executes, with lazy loading to keep large lists responsive.',
      'Restructured a product data model for SAP S/4HANA integration — remodeled objects, relationships, and identifiers so Salesforce and S/4 could speak the same language across the sync.',
      'Rescued a legacy trigger that was hitting governor limits under bulk load — refactored to bulk-safe patterns and eliminated the recurring failures.',
      'Built Apex invocable actions and flows for Agentforce — automating record updates, case handling, and data lookups inside agent conversations while the feature was still new.',
    ],
  },
  {
    role: 'Full Stack Software Development Trainee',
    company: 'Q Spiders',
    start: 'Oct 2022',
    end: 'Mar 2023',
    location: 'Vadapalani, Chennai',
    bullets: [
      'Six months of full-stack training — SQL, Java backend, and responsive front-end with HTML/CSS/JS.',
      'Coming from an English Literature degree, this is where I picked up OOP, database design, and the habit of thinking in systems.',
      'Left with the foundations I needed to start writing Apex on day one at my first Salesforce role.',
    ],
  },
];

export const education = [
  {
    degree: 'M.B.A., Systems Management',
    school: 'Madras University',
    period: '2023 – 2025',
    location: 'Chennai',
  },
  {
    degree: 'B.A., English Literature',
    school: 'Voorhees College',
    period: '2019 – 2022',
    location: 'Vellore',
  },
];

export const projects = [
  {
    name: 'Oqema',
    tag: 'Chemicals Distribution · Sales Cloud',
    description:
      'Sales Cloud implementation for a global chemicals distributor. Three pieces of custom work I\'m proud of: an Account Merge that gives users real control over what migrates, a reusable Filter LWC for line-item list views, and a restructured product data model that lets Salesforce and SAP S/4HANA speak the same language.',
    outcomes: [
      'Custom Account Merge — field-by-field control over which values carry over during a merge, filling the gap the standard merge leaves.',
      'Custom Filter LWC — two-component pattern (list + filter builder) that compiles user selections into dynamic SOQL executed in Apex, with lazy loading for large line-item sets.',
      'Product data model restructured for SAP S/4HANA — objects, relationships, and identifiers remodeled so the integration could sync cleanly in both directions.',
    ],
    stack: ['Apex', 'LWC', 'Dynamic SOQL', 'SAP S/4HANA', 'REST'],
  },
  {
    name: 'ViaTechnic',
    tag: 'Service Operations · Service Cloud',
    description:
      'Service Cloud build where the interesting work sat in Apex, not the clicks. Declarative flows handled the happy paths; Apex handled the rules Flow couldn\'t express — SLA enforcement, escalation windows, territory-aware routing, and the entitlement edge cases that made or broke a support conversation.',
    outcomes: [
      'Apex-backed SLA and escalation logic — the parts declarative tools couldn\'t reach: escalation windows, territory rules, and entitlement edge cases that Flow alone would have contorted itself around.',
      'Case-handling automation that split cleanly between Flow (happy path) and Apex (everything else), so future changes land in the layer that actually owns the rule.',
      'SLA enforcement moved off spreadsheets and onto the platform — cases are answerable to entitlements, not memory.',
    ],
    stack: ['Service Cloud', 'Apex', 'Flows', 'SLA / Entitlements'],
  },
  {
    name: 'PriAlto',
    tag: 'B2B Services · Zoom Integration',
    description:
      'Salesforce build for a services team where two pieces stood out: a Zoom ↔ Salesforce integration that turns finished meeting transcripts into Task records with the summary attached, and a Salesforce CLI / DX deployment pipeline so changes moved through sandboxes without hand-clicking through setup.',
    outcomes: [
      'Zoom transcription integration — when Zoom finishes transcribing a meeting, a webhook fires into Salesforce and creates a Task record with the meeting summary on the right account or opportunity. Configured both sides of the handshake so the trigger is verified, not hopeful.',
      'Salesforce CLI / DX deployment pipeline — source-driven deploys across sandboxes, so the same change moves from dev to UAT to prod predictably instead of being clicked through Setup screens.',
      'LWCs and bulk-safe Apex to keep the day-to-day workflow snappy as record volume grew.',
    ],
    stack: ['Apex', 'LWC', 'Zoom Webhooks', 'Salesforce CLI', 'DX'],
  },
  {
    name: 'Essential Hospital',
    tag: 'Healthcare · Experience Cloud',
    description:
      'Experience Cloud patient portal work — the interesting part sat in the custom LWCs. Patients logging in got a personalized view of their care, and the appointments piece was the one I spent the most time getting right.',
    outcomes: [
      'Appointments & scheduling LWC — patient-facing view of upcoming visits with the details that actually matter (provider, location, time), built as a reusable component so the portal team could drop it into other pages without rewiring.',
      'Interactive LWC dashboards for patients — filterable, personalized views of the data patients cared about, built directly on the Experience Site rather than bolted onto a standard page.',
      'Built with Experience Cloud\'s sharing model in mind — the LWCs respect record access so a patient only ever sees their own data, no accidental cross-record leakage.',
    ],
    stack: ['Experience Cloud', 'LWC', 'Apex', 'SOQL', 'Sharing & Security'],
  },
];

export const certifications = [
  { name: 'Agentforce Specialist', issuer: 'Salesforce' },
  { name: 'Platform App Builder', issuer: 'Salesforce' },
  { name: 'Agentforce Legend', issuer: 'Trailhead' },
  { name: 'AI Associate', issuer: 'Salesforce' },
  { name: 'Platform Developer', issuer: 'Salesforce' },
  { name: 'Platform Administrator II', issuer: 'Salesforce' },
  { name: 'Data Cloud Consultant', issuer: 'Salesforce' },
  { name: 'JavaScript Developer', issuer: 'Salesforce' },
  { name: 'Platform Foundations', issuer: 'Salesforce' },
  { name: 'Platform Administrator', issuer: 'Salesforce' },
];

export const cast = [
  {
    name: 'Sur / Dev',
    role: 'Senior Salesforce Developer',
    power: 'Writes bulk-safe Apex before your governor limits get grumpy.',
    tools: ['Apex', 'LWC', 'SOQL'],
    hue: 'violet' as const,
    glyph: '{ }',
  },
  {
    name: 'Sur / Mentor',
    role: 'Teammate & Trainer',
    power: 'Explains it once, writes it down, and never gates the answer.',
    tools: ['Onboarding', 'Docs', 'Pairing'],
    hue: 'cyan' as const,
    glyph: '☕',
  },
  {
    name: 'Sur / Bridge',
    role: 'Integrator',
    power: 'Wires REST endpoints into flows without leaking timeouts.',
    tools: ['REST', 'Named Credentials', 'Platform Events'],
    hue: 'pink' as const,
    glyph: '⇋',
  },
  {
    name: 'Sur / Guide',
    role: 'Success Guide',
    power: 'Turns roadmaps into things customers actually ship.',
    tools: ['Service Cloud', 'Experience Cloud', 'SLA design'],
    hue: 'gold' as const,
    glyph: '✦',
  },
];

export const nav = [
  { href: '#about', label: 'About' },
  { href: '#cast', label: 'Cast' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#certifications', label: 'Certs' },
  { href: '#contact', label: 'Contact' },
];
