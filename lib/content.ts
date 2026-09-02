export const profile = {
  name: 'Suriya Jaisankar',
  role: 'Salesforce Developer',
  location: 'Chennai, Tamil Nadu',
  tagline: 'The dev who codes smart, learns fast, and always moves with purpose.',
  summary:
    "A Salesforce Developer with more than 3 years of experience, specializing in Apex, Lightning Components, Java, HTML, CSS, JavaScript, MySQL, and integrations across Sales, Service, Data, Community and Marketing Clouds. Growing hands-on expertise in Agentforce — building and configuring autonomous AI agents, topics, and actions. Adept at designing scalable, tailored solutions while collaborating across teams and mentoring.",
  email: 'suriyajaisankar41@gmail.com',
  phone: '+91 82484 84374',
  socials: {
    linkedin: 'https://www.linkedin.com/in/suriyajaisankar',
    github: 'https://github.com/SuriyaJaisankar',
    trailhead: 'https://www.salesforce.com/trailblazer/suriyajaisankar',
  },
};

export const skillGroups = [
  {
    title: 'Agentforce & Agentic AI',
    items: [
      'Agent Builder',
      'Topics & Actions design',
      'Prompt Builder',
      'Grounding with Knowledge & Data Cloud',
      'Apex invocable actions for agents',
      'Agent testing & guardrails',
    ],
  },
  {
    title: 'Salesforce Development',
    items: [
      'Apex',
      'Lightning Web Components (LWC)',
      'Aura Components',
      'Visualforce',
      'Flows & Process Builder',
      'REST/SOAP Integrations',
      'SOQL Optimization',
      'Bulk & Governor Limits',
      'Data Loader / ETL',
      'Salesforce CLI, Git, DX',
    ],
  },
  {
    title: 'Full Stack',
    items: [
      'Java',
      'JavaScript',
      'SQL / MySQL',
      'HTML, CSS',
      'Responsive UI',
      'OOP & Agile',
    ],
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
      'Advised on case management, omni-channel setup, SLA/entitlement design, and queue configuration for Service Cloud.',
      'Guided customers on Agentforce adoption for Service Cloud — agent scoping, topic and action design, grounding agents in Knowledge and Data Cloud to safely automate case deflection.',
      'Drove knowledge base strategy and self-service deflection goals; positioned Knowledge content as grounding data for Agentforce and self-service search.',
      'Advised on Experience Cloud community/portal strategy, template selection, member profile setup, and audience configuration.',
    ],
  },
  {
    role: 'Salesforce Developer',
    company: 'TechnoRUCS',
    start: 'Apr 2023',
    end: 'Apr 2026',
    location: 'Perungudi, Chennai, India',
    bullets: [
      'Designed and developed custom Salesforce applications using Apex, Visualforce, and Lightning Components (Aura & LWC).',
      'Built Apex invocable actions and flows to extend Agentforce agents — automating record updates, case handling, and data lookups within agent conversations.',
      'Integrated Salesforce with third-party systems using REST APIs for seamless data exchange, including endpoints consumed by Agentforce actions.',
      'Optimized performance with bulk processing, governor limit best practices, and scalable design.',
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
    location: 'Vadapalani, Chennai, India',
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
    location: 'Chennai, India',
  },
  {
    degree: 'B.A., English Literature',
    school: 'Voorhees College',
    period: '2019 – 2022',
    location: 'Vellore, India',
  },
];

export const projects = [
  {
    name: 'Oqema',
    tag: 'Manufacturing • Sales Cloud',
    description:
      'Custom Sales Cloud implementation with Apex + LWC extensions, integrated with third-party inventory and ERP systems via REST APIs.',
    stack: ['Apex', 'LWC', 'REST', 'Flows'],
  },
  {
    name: 'ViaTechnic',
    tag: 'Service Operations',
    description:
      'Service Cloud automation for case handling and dispatch — declarative flows augmented by Apex for complex routing and SLA enforcement.',
    stack: ['Service Cloud', 'Flows', 'Apex'],
  },
  {
    name: 'PriAlto',
    tag: 'B2B Services',
    description:
      'End-to-end lead-to-cash flow with Salesforce CLI–driven deployments, LWC-based agent tooling, and bulk-safe data processing.',
    stack: ['LWC', 'Apex', 'CLI/DX'],
  },
  {
    name: 'Essential Hospital',
    tag: 'Healthcare',
    description:
      'Data migration and ETL initiative into Salesforce with strict integrity and security constraints; automated workflows and dashboards for care operations.',
    stack: ['Data Loader', 'ETL', 'Reports'],
  },
];

export const certifications = [
  'Salesforce Certified Agentforce Specialist',
  'Salesforce Certified Platform App Builder',
  'Agentforce Legend (Trailhead)',
  'Salesforce Certified AI Associate',
  'Salesforce Certified Platform Developer',
  'Salesforce Certified Platform Administrator II',
  'Salesforce Certified Data Cloud Consultant',
  'Salesforce Certified JavaScript Developer',
  'Salesforce Certified Platform Foundations',
  'Salesforce Certified Platform Administrator',
];

export const nav = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
];
