import React from "react";

export interface ServiceSector {
  icon: string | React.ComponentType<any>;
  label: string;
  description: string;
  new: boolean;
}

export const InsuranceFraudIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 3L19 6V11C19 16 15.5 19.5 12 21C8.5 19.5 5 16 5 11V6L12 3Z" />
    <circle cx="11" cy="10" r="3" />
    <path d="M13.5 12.5L16.5 15.5" />
    <path d="M12 8V10" />
    <circle cx="12" cy="12" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

export const ShieldIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* <!-- Shield --> */}
    <path d="M12 3L19 6V11C19 16 15.5 19.5 12 21C8.5 19.5 5 16 5 11V6L12 3Z" />

    {/* <!-- Lock --> */}
    <rect x="9" y="10" width="6" height="5" rx="1" />
    <path d="M10 10V8.5A2 2 0 0 1 12 6.5A2 2 0 0 1 14 8.5V10" />

    {/* <!-- Circuit Lines --> */}
    <path d="M12 15V18" />
    <path d="M7 11H5" />
    <path d="M19 11H17" />
  </svg>
);

export const lawProfessionalsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* <!-- Scale Pole --> */}
    <path d="M12 4V18" />
    <path d="M8 4H16" />

    {/* <!-- Scale Arms --> */}
    <path d="M7 8L4.5 12H9.5L7 8Z" />
    <path d="M17 8L14.5 12H19.5L17 8Z" />

    {/* <!-- Balance Beam --> */}
    <path d="M7 8H17" />

    {/* <!-- Evidence Document --> */}
    <rect x="9" y="14" width="6" height="6" rx="1" />
    <path d="M11 17H13" />

    {/* <!-- Base --> */}
    <path d="M8 21H16" />
  </svg>
);

export const antiMoneyLaundering = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* <!-- Money --> */}
    <rect x="3" y="6" width="14" height="10" rx="2" />
    <circle cx="10" cy="11" r="2" />

    {/* <!-- Investigation --> */}
    <circle cx="17" cy="17" r="3" />
    <path d="M19.5 19.5L22 22" />

    {/* <!-- Suspicious Alert --> */}
    <path d="M10 9V11" />
    <circle cx="10" cy="13" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

export const GovernmentIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* <!-- Government Building --> */}
    <path d="M3 9L12 4L21 9" />
    <path d="M5 9V18" />
    <path d="M9 9V18" />
    <path d="M15 9V18" />
    <path d="M19 9V18" />
    <path d="M3 20H21" />

    {/* <!-- Digital Shield --> */}
    <path d="M12 10L14 11V13.5C14 15 13 16 12 16.5C11 16 10 15 10 13.5V11L12 10Z" />
  </svg>
);

export const lawEnforcementIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* <!-- Badge --> */}
    <path d="M12 2L15 5L19 5L19 9L22 12L19 15L19 19L15 19L12 22L9 19L5 19L5 15L2 12L5 9L5 5L9 5L12 2Z" />

    {/* <!-- Investigation Lens --> */}
    <circle cx="11" cy="11" r="3" />
    <path d="M13.5 13.5L16 16" />
  </svg>
);

export const JournalismIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* <!-- Document --> */}
    <path d="M7 3H14L18 7V19A2 2 0 0 1 16 21H7A2 2 0 0 1 5 19V5A2 2 0 0 1 7 3Z" />

    {/* <!-- Fold --> */}
    <path d="M14 3V7H18" />

    {/* <!-- Article --> */}
    <path d="M8 10H15" />
    <path d="M8 13H13" />

    {/* <!-- Investigation Lens --> */}
    <circle cx="14" cy="15" r="3" />
    <path d="M16.2 17.2L18.5 19.5" />
  </svg>
);

export const userIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* <!-- Center User --> */}
    <circle cx="12" cy="8" r="3" />
    <path d="M7 19C7 16.8 9.2 15 12 15C14.8 15 17 16.8 17 19" />

    {/* <!-- Left User --> */}
    <circle cx="5.5" cy="10" r="2" />
    <path d="M2.5 18C2.5 16.4 4 15.2 6 15" />

    {/* <!-- Right User --> */}
    <circle cx="18.5" cy="10" r="2" />
    <path d="M21.5 18C21.5 16.4 20 15.2 18 15" />
  </svg>
);

export const serviceSectors: ServiceSector[] = [
  {
    icon: InsuranceFraudIcon,
    label: "Insurance & Fraud",
    description:
      "Uncover fraudulent patterns and minimize risk through real-time digital intelligence.",
    new: false,
  },
  {
    icon: ShieldIcon,
    label: "Cyber Security",
    description:
      "Identify vulnerabilities and neutralize digital threats with proactive risk assessment.",
    new: false,
  },
  {
    icon: lawProfessionalsIcon,
    label: "Law Professionals",
    description:
      "Streamline digital discovery and evidence management for legal investigations.",
    new: false,
  },
  {
    icon: antiMoneyLaundering,
    label: "Anti-Money Laundering",
    description:
      "Strengthen financial integrity with advanced detection of suspicious transactions.",
    new: false,
  },
  {
    icon: GovernmentIcon,
    label: "Government",
    description:
      "Secure public trust with robust and high-speed digital identity verification.",
    new: true,
  },
  {
    icon: lawEnforcementIcon,
    label: "Law Enforcement",
    description:
      "Equip agencies with precision tools for tracking and analyzing complex digital footprints.",
    new: true,
  },
  {
    icon: "Newspaper",
    label: "Journalism",
    description:
      "Protect the truth by verifying sources and exposing sophisticated disinformation.",
    new: true,
  },
  {
    icon: userIcon,
    label: "Non-Profits",
    description:
      "Empower investigative missions and humanitarian efforts with actionable intelligence.",
    new: true,
  },
];
