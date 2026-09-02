export const profile = {
  name: 'Suriya Jaisankar',
  role: 'Salesforce Developer',
  location: 'Chennai, Tamil Nadu',
  tagline: 'The dev who codes smart, learns fast, and always moves with purpose.',
  summary:
    "Salesforce Developer with 3+ years designing and shipping platform-native solutions across Sales, Service, Data, Experience, and Marketing clouds. Deep in Apex, LWC, and Flows — increasingly focused on Agentforce: building autonomous agents, wiring Apex invocable actions, and grounding conversations in Knowledge and Data Cloud.",
  email: 'suriyajaisankar41@gmail.com',
  phone: '+91 82484 84374',
  socials: {
    linkedin: 'https://www.linkedin.com/in/suriyajaisankar',
    github: 'https://github.com/SuriyaJaisankar',
    trailhead: 'https://www.salesforce.com/trailblazer/suriyajaisankar',
  },
};

export const stats = [
  { value: '3+', label: 'years in Salesforce' },
  { value: '10', label: 'Salesforce certifications' },
  { value: '4', label: 'client implementations shipped' },
  { value: '5', label: 'clouds worked across' },
];

export const highlights = [
  {
    title: 'Agentforce-native',
    body: 'Design agents that stay grounded — topics, actions, prompts, and Apex-backed tools that behave in production.',
  },
  {
    title: 'Apex & LWC that scale',
    body: 'Bulk-safe patterns, governor-limit budgets, and LWCs that stay responsive under real customer data volumes.',
  },
  {
    title: 'Data with integrity',
    body: 'ETL pipelines, Data Loader work, and Data Cloud grounding — mapped, validated, and observable.',
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
    role: 'Success Guide',
    company: 'Salesforce',
    start: 'Apr 2026',
    end: 'Present',
    location: 'Remote',
    bullets: [
      'Named advisor for Service Cloud and Experience Cloud implementations — proactive guidance, roadmap planning, and risk identification.',
      'Advised on case management, omni-channel setup, SLA/entitlement design, and queue configuration.',
      'Guided customers on Agentforce adoption for Service Cloud — agent scoping, topic and action design, grounding in Knowledge and Data Cloud to safely automate case deflection.',
      'Drove knowledge base strategy and self-service deflection goals; positioned Knowledge content as grounding data for Agentforce.',
      'Advised on Experience Cloud community/portal strategy, template selection, member profile setup, and audience configuration.',
    ],
  },
  {
    role: 'Salesforce Developer',
    company: 'TechnoRUCS',
    start: 'Apr 2023',
    end: 'Apr 2026',
    location: 'Perungudi, Chennai',
    bullets: [
      'Designed and developed custom Salesforce applications using Apex, Visualforce, and Lightning Components (Aura & LWC).',
      'Built Apex invocable actions and flows to extend Agentforce agents — automated record updates, case handling, and data lookups within agent conversations.',
      'Integrated Salesforce with third-party systems using REST APIs — including endpoints consumed by Agentforce actions.',
      'Optimized performance with bulk processing, governor-limit best practices, and scalable design.',
      'Handled data migration and ETL processes to preserve data integrity and security.',
      'Automated business processes with Flows, Process Builder, and declarative tools.',
      'Managed deployments using Salesforce CLI, Git, and version control best practices.',
    ],
  },
  {
    role: 'Full Stack Software Development Trainee',
    company: 'Q Spiders',
    start: 'Oct 2022',
    end: 'Mar 2023',
    location: 'Vadapalani, Chennai',
    bullets: [
      'Designed and managed SQL databases — data integrity and efficient query execution.',
      'Developed server-side logic in Java; strengthened backend problem-solving skills.',
      'Built responsive web applications with HTML, CSS, and JavaScript, focused on UI/UX principles.',
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
    tag: 'Manufacturing · Sales Cloud',
    description:
      'Custom Sales Cloud implementation for a global chemicals distributor. Built Apex + LWC extensions and integrated inventory/ERP systems through REST endpoints consumed inside Salesforce flows and agent actions.',
    outcomes: [
      'Unified pipeline visibility across regions',
      'Reduced quote-to-order friction with LWC-driven UX',
      'Bulk-safe integration handling thousands of ERP records/day',
    ],
    stack: ['Apex', 'LWC', 'REST', 'Flows', 'Sales Cloud'],
  },
  {
    name: 'ViaTechnic',
    tag: 'Service Operations',
    description:
      'Service Cloud automation for case handling and dispatch. Declarative flows do the routing; Apex handles the edge cases — complex SLA rules, escalation windows, and territory logic that flow alone can\'t express.',
    outcomes: [
      'Cut manual case triage substantially',
      'SLA enforcement moved from spreadsheets into the platform',
      'Groundwork for Agentforce-driven deflection',
    ],
    stack: ['Service Cloud', 'Flows', 'Apex', 'SLA/Entitlements'],
  },
  {
    name: 'PriAlto',
    tag: 'B2B Services',
    description:
      'End-to-end lead-to-cash flow. Salesforce CLI–driven deployments, LWC-based agent tooling, and bulk-safe data processing to keep the platform snappy as volume climbed.',
    outcomes: [
      'Reliable CLI/DX deploy pipeline across sandboxes',
      'Agent-facing LWCs to speed up daily workflows',
      'No governor-limit incidents post-launch',
    ],
    stack: ['LWC', 'Apex', 'Salesforce CLI', 'DX'],
  },
  {
    name: 'Essential Hospital',
    tag: 'Healthcare',
    description:
      'Data migration and ETL initiative into Salesforce under strict integrity and security constraints, followed by automated workflows and operational dashboards for care teams.',
    outcomes: [
      'Zero-loss migration with reconciled record counts',
      'Care-ops dashboards for real-time visibility',
      'PHI-conscious data handling throughout',
    ],
    stack: ['Data Loader', 'ETL', 'Flows', 'Reports & Dashboards'],
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

export const nav = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#certifications', label: 'Certs' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
];
