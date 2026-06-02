import { Car, Globe, Search, Shield, Smartphone, Wrench } from "lucide-react";

export const intelligenceCategories = [
  {
    title: "Crypto Investigation",
    icon: Shield,
    features: ["Wallet Comparison", "Payment Mail", "Wallet Creation"],
  },
  {
    title: "Vehicle Intelligence",
    icon: Car,
    features: ["Driving License", "Challan Check", "Vehicle Details"],
  },
  {
    title: "OSINT",
    icon: Search,
    features: [
      "Indian No OSINT",
      "International Intel",
      "Email Investigation",
      "Gmail",
      "Outlook",
      "Yahoo India",
      "Proton Mail",
    ],
  },
  {
    title: "Domain Intelligence",
    icon: Globe,
    features: ["Domain Intelligence", "Hosting Details", "Creation Data"],
  },
  {
    title: "Cell ID Decoder",
    icon: Smartphone,
    features: [],
  },
  {
    title: "Miscellaneous Tools",
    icon: Wrench,
    features: ["DTH Info", "Gas Info", "Phishing"],
  },
];

export const intelligenceData = [
  {
    title: "IP Investigation",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        {/* <!-- Globe --> */}
        <circle cx="12" cy="12" r="7" />
        <path d="M5 12h14" />
        <path d="M12 5c2.5 2.5 2.5 11.5 0 14" />
        <path d="M12 5c-2.5 2.5-2.5 11.5 0 14" />

        {/* <!-- Magnifying Glass --> */}
        <circle cx="17.5" cy="17.5" r="3" />
        <path d="M20 20l2 2" />
      </svg>
    ),
    description: "Advanced IP tracking and network analysis",
    features: [
      "Geographic Mapping",
      "VPN & Proxy Detection",
      "ISP Identification",
    ],
  },
  {
    title: "Nodal Lookup",
    description: "Detailed analysis of telecommunication nodes",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="7" y1="7" x2="17" y2="7" />
        <line x1="7" y1="7" x2="12" y2="17" />
        <line x1="17" y1="7" x2="12" y2="17" />

        <circle cx="7" cy="7" r="2" />
        <circle cx="17" cy="7" r="2" />
        <circle cx="12" cy="17" r="2" />

        <circle cx="18" cy="18" r="3" />
        <line x1="20.5" y1="20.5" x2="22" y2="22" />
      </svg>
    ),
    features: [
      "Call Detail Records (CDR) Analysis",
      "Tower Location Mapping",
      "Subscriber Information Retrieval",
    ],
  },
  {
    title: "Crypto Investigation",
    description: "Blockchain tracing and wallet intelligence",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect x="4" y="4" width="5" height="5" rx="1" />
        <rect x="15" y="4" width="5" height="5" rx="1" />
        <rect x="9.5" y="15" width="5" height="5" rx="1" />

        <line x1="9" y1="6.5" x2="15" y2="6.5" />
        <line x1="6.5" y1="9" x2="12" y2="15" />
        <line x1="17.5" y1="9" x2="12" y2="15" />

        <circle cx="18" cy="18" r="3" />
        <line x1="20.2" y1="20.2" x2="22" y2="22" />
      </svg>
    ),
    features: ["Wallet Comparison", "Payment Mail", "Wallet Creation"],
  },
  {
    title: "Vehicle Intelligence",
    description: "Vehicle and driver record analysis",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M5 15V11L7 7H17L19 11V15" />
        <path d="M5 15H19" />
        <circle cx="8" cy="15" r="2" />
        <circle cx="16" cy="15" r="2" />

        <circle cx="18" cy="18" r="3" />
        <path d="M20.2 20.2L22 22" />
      </svg>
    ),
    features: ["Vehicle Details", "Challan Check", "Driving License"],
  },
  {
    title: "OSINT",
    description: "Open-source intelligence gathering",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="2.5" />

        <circle cx="6" cy="6" r="1.5" />
        <circle cx="18" cy="6" r="1.5" />
        <circle cx="6" cy="18" r="1.5" />
        <circle cx="18" cy="18" r="1.5" />

        <line x1="7.5" y1="7.5" x2="10.5" y2="10.5" />
        <line x1="16.5" y1="7.5" x2="13.5" y2="10.5" />
        <line x1="7.5" y1="16.5" x2="10.5" y2="13.5" />
        <line x1="16.5" y1="16.5" x2="13.5" y2="13.5" />

        <circle cx="19" cy="19" r="3" />
        <line x1="21.2" y1="21.2" x2="22.5" y2="22.5" />
      </svg>
    ),
    features: [
      "Indian No OSINT",
      "International Intelligence",
      "Email Investigation",
      "Gmail",
      "Proton Mail",
      "Outlook",
      "Yahoo India",
    ],
  },
  {
    title: "Domain Intelligence",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="M4 11H18" />
        <path d="M11 4C13.5 6.5 13.5 15.5 11 18" />
        <path d="M11 4C8.5 6.5 8.5 15.5 11 18" />

        <circle cx="6" cy="6" r="1" />
        <circle cx="16" cy="8" r="1" />
        <circle cx="14" cy="16" r="1" />

        <circle cx="18" cy="18" r="3" />
        <path d="M20.3 20.3L22 22" />
      </svg>
    ),
    description: "Domain and hosting investigations",
    features: ["Creation Data", "Hosting Details", "Domain Intelligence"],
  },
  {
    title: "Miscellaneous Tools",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="2" />

        <circle cx="12" cy="5" r="1.5" />
        <circle cx="19" cy="12" r="1.5" />
        <circle cx="12" cy="19" r="1.5" />
        <circle cx="5" cy="12" r="1.5" />

        <line x1="12" y1="7" x2="12" y2="10" />
        <line x1="14" y1="12" x2="17" y2="12" />
        <line x1="12" y1="14" x2="12" y2="17" />
        <line x1="7" y1="12" x2="10" y2="12" />
      </svg>
    ),
    description: "Additional intelligence modules",
    features: ["DTH Info", "Gas Info", "Phishing"],
  },
];
