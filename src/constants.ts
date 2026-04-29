import { SlideData } from './types';

export const SLIDES: SlideData[] = [
  {
    id: 1,
    title: "Cyber Security Awareness: Securing the Digital World in 2026",
    subtitle: "Stay Smart. Stay Safe. Stay Secure. \nPresenter: Umika Tiwari",
    content: "The gateway to our digital future depends on our ability to protect it against an ever-evolving threat matrix.",
    visualType: "hero-shield",
  },
  {
    id: 2,
    title: "The Evolving Landscape",
    content: [
      "Cybersecurity is now a multi-layered defense system, transcending simple legacy antivirus solutions.",
      "The Digital Triad: Protecting Identity (User Credentials), Infrastructure (Network/Hardware), and Intel (Proprietary Data).",
      "Narrative: 'In an era where our lives are stored in the cloud, understanding security is the first step toward universal protection.'"
    ],
    visualType: "smart-city",
  },
  {
    id: 3,
    title: "Global Cost Crisis",
    content: [
      "The Economic Toll: Global cybercrime costs are projected to hit $13.82 Trillion by 2028.",
      "Exponential Growth: We are seeing a 16x increase in financial damage since 2018 ($0.86T).",
      "Pro-Tip: When damage costs outpace security budgets, traditional reactive models fail."
    ],
    visualType: "threat-landscape-chart",
    sources: [
      { label: "Statista Market Insights", url: "https://www.statista.com" },
      { label: "Cybersecurity Ventures", url: "https://cybersecurityventures.com" }
    ]
  },
  {
    id: 4,
    title: "Financial Impact & The 'Money Trail'",
    content: [
      "Indian Loss: In 2025 alone, citizens lost approximately ₹22,495 Crore to sophisticated cyber fraud.",
      "Global Loss: FBI reports (IC3) indicate losses rising from $16.6B in 2024 to over $21B in 2025.",
      "Scam Dominance: Investment frauds account for a staggering 76% of all total money lost."
    ],
    visualType: "financial-funnel",
    sources: [
      { label: "FBI IC3 Report", url: "https://www.ic3.gov" },
      { label: "CERT-In Alerts", url: "https://www.cert-in.org.in" }
    ]
  },
  {
    id: 5,
    title: "Common Types of Modern Threats",
    content: [
      "Phishing: AI-generated emails that mimic financial institutions with near-perfect authenticity.",
      "Ransomware: Professional-grade asymmetric encryption locking files until high-value ransoms are extracted.",
      "Identity Theft: Using stolen credentials to orchestrate 'Digital Arrest' and social engineering scams."
    ],
    visualType: "four-pillars",
  },
  {
    id: 6,
    title: "Identifying Subtle Warning Signs",
    content: [
      "Session Hijacking: Receiving unexpected 'Login Success' alerts or unauthorized password reset emails.",
      "Hardware Lag: Sudden device performance degradation caused by hidden crypto-mining or data exfiltration.",
      "Pro-Tip: Monitor active background processes; unusual CPU spikes are often red flags for malware."
    ],
    visualType: "detection-phase",
  },
  {
    id: 7,
    title: "Advanced Preventive Measures",
    content: [
      "Passphrases: Move beyond 8-character passwords; implement 16+ character coherent passphrases.",
      "MFA: Multi-Factor Authentication is the single most effective shield (99.9% protection) against credential theft.",
      "Update Cadence: Patch critical zero-day vulnerabilities within 24 hours of release."
    ],
    visualType: "prevention-vault",
  },
  {
    id: 8,
    title: "Safe Online Behavioral Protocols",
    content: [
      "Zero Trust Model: Never implicitly trust links, files, or attachments—even from known contacts.",
      "Social Engineering: Limit the oversharing of personal identifiers (DOB, Location) on public social platforms.",
      "Network Hygiene: Avoid public Wi-Fi for sensitive transactions; always utilize encrypted VPN tunnels."
    ],
    visualType: "behavior-blueprint",
  },
  {
    id: 9,
    title: "Case Study: The WhatsApp Breach",
    content: [
      "Incident: Hacker compromised account via SMS intercept; requested ₹15,000 from contacts.",
      "Recovery Step 1: Stay Calm—Never send funds under pressure; verify identity via alternate channels.",
      "Step 2: Lockdown—Log out all web sessions and enable 2-Step Verification (PIN) immediately.",
      "Step 3: Alert & Report—Inform contacts and log the incident at cybercrime.gov.in with evidence."
    ],
    visualType: "case-study",
  },
  {
    id: 10,
    title: "The VirusTotal Tool (virustotal.com)",
    content: [
      "Aggregated Defense: Scans URLs and files using 70+ industry-leading antivirus engines simultaneously.",
      "Safety Score: A 0/70 score indicates high safety; even a 1/70 score should be treated as a critical red flag.",
      "Pro-Tip: Use the browser extension to scan files before they even reach your local storage."
    ],
    visualType: "virus-total",
  },
  {
    id: 11,
    title: "The 'Have I Been Pwned' Audit",
    content: [
      "Data Breaches: Large-scale corporate hacks often leak email/password combinations to the Dark Web.",
      "Credential Stuffing: Hackers use leaked data to attempt logins on other platforms (Banking, Amazon).",
      "Action: Use haveibeenpwned.com to audit your risk; rotate passwords instantly if your email is 'Pwned'."
    ],
    visualType: "defense-toolkit",
  },
  {
    id: 12,
    title: "India’s Official Reporting Mechanisms",
    content: [
      "CERT-In: The National Nodal Agency for responding to computer security incidents and alerts.",
      "Cyber Swachhta Kendra: Botnet cleaning and malware analysis center focusing on public safety.",
      "National Duty: Reporting is a shared responsibility; every logged incident helps protect the collective network."
    ],
    visualType: "reporting-channels",
  },
  {
    id: 13,
    title: "Final Mission Statement",
    content: [
      "Think Before You Click: Pause for 5 seconds before interacting with any digital request.",
      "Hacking is a Crime: Always report suspicious activity, even if no direct financial loss occurred.",
      "Presented by Umika Tiwari."
    ],
    visualType: "hero-shield",
  }
];

export const THEME = {
  bg: '#0B0E14',
  cyan: '#00F2FF',
  green: '#39FF14',
  red: '#FF1439',
};
