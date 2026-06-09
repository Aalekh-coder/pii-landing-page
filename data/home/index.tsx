import {
  Car,
  Search,
  Shield,
  Smartphone,
  Wrench,
  Activity,
  Globe,
  BellRing,
  CheckCircle,
  Mail,
  CarFront,
  PhoneCall,
  ShieldAlert,
  Flame,
  Tv,
  Network,
  Wallet,
  History,
  Server,
} from "lucide-react";

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
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
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
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
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
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
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
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
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
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
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
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
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
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
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

export const deepWeb = [
  {
    title: "Hidden Connections",
    icon: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 20L44 14M20 20L16 44M44 14L48 44M16 44L48 44"
          stroke="#3B82F6"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        <circle cx="20" cy="20" r="5" fill="#2563EB" />
        <circle cx="44" cy="14" r="5" fill="#60A5FA" />
        <circle cx="16" cy="44" r="5" fill="#60A5FA" />
        <circle cx="48" cy="44" r="5" fill="#2563EB" />

        <circle
          cx="32"
          cy="30"
          r="4"
          fill="#0F172A"
          stroke="#60A5FA"
          strokeWidth="2"
          strokeDasharray="2 2"
        />

        <path
          d="M20 20L32 30L44 14"
          stroke="#60A5FA"
          strokeWidth="1.5"
          strokeDasharray="3 3"
        />
      </svg>
    ),
  },
  {
    title: "Private Sources",
    icon: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20" cy="20" r="5" fill="#60A5FA" />
        <circle cx="44" cy="20" r="5" fill="#60A5FA" />
        <circle cx="32" cy="48" r="5" fill="#60A5FA" />

        <path
          d="M20 20L32 32L44 20"
          stroke="#3B82F6"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        <path
          d="M32 32L32 48"
          stroke="#3B82F6"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        <rect
          x="26"
          y="26"
          width="12"
          height="10"
          rx="2"
          fill="#0F172A"
          stroke="#3B82F6"
          strokeWidth="2"
        />

        <path
          d="M29 26V23C29 21.3 30.3 20 32 20C33.7 20 35 21.3 35 23V26"
          stroke="#3B82F6"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Secure Discovery",
    icon: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32 12L46 18V28C46 38 40 46 32 50C24 46 18 38 18 28V18L32 12Z"
          stroke="#3B82F6"
          strokeWidth="2.5"
          fill="none"
        />

        <circle cx="30" cy="28" r="6" stroke="#60A5FA" strokeWidth="2.5" />

        <path
          d="M35 33L40 38"
          stroke="#60A5FA"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Deep Intelligence",
    icon: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="32"
          cy="32"
          r="22"
          stroke="#3B82F6"
          strokeWidth="2"
          opacity="0.4"
        />

        <circle
          cx="32"
          cy="32"
          r="14"
          stroke="#60A5FA"
          strokeWidth="2"
          opacity="0.7"
        />

        <circle cx="32" cy="32" r="5" fill="#60A5FA" />

        <circle cx="32" cy="10" r="3" fill="#2563EB" />
        <circle cx="54" cy="32" r="3" fill="#2563EB" />
        <circle cx="32" cy="54" r="3" fill="#2563EB" />
        <circle cx="10" cy="32" r="3" fill="#2563EB" />

        <path
          d="M32 13V27"
          stroke="#60A5FA"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M37 32H51"
          stroke="#60A5FA"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M32 37V51"
          stroke="#60A5FA"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M13 32H27"
          stroke="#60A5FA"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Private Ecosystems",
    icon: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="32" cy="32" r="22" stroke="#3B82F6" strokeWidth="2.5" />

        <circle cx="24" cy="24" r="4" fill="#60A5FA" />
        <circle cx="40" cy="24" r="4" fill="#60A5FA" />
        <circle cx="32" cy="40" r="4" fill="#60A5FA" />

        <path
          d="M24 24L40 24"
          stroke="#60A5FA"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M24 24L32 40"
          stroke="#60A5FA"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M40 24L32 40"
          stroke="#60A5FA"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <circle
          cx="32"
          cy="32"
          r="7"
          fill="#0F172A"
          stroke="#3B82F6"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    title: "Quantum Security Interface",
    icon: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="32" cy="32" r="18" stroke="#3B82F6" strokeWidth="2" />
        <circle cx="32" cy="32" r="5" fill="#60A5FA" />

        <path
          d="M32 16C41 16 48 23 48 32"
          stroke="#60A5FA"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <path
          d="M32 48C23 48 16 41 16 32"
          stroke="#60A5FA"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <path
          d="M32 22L38 24V30C38 34 35 37 32 39C29 37 26 34 26 30V24L32 22Z"
          fill="#0F172A"
          stroke="#60A5FA"
          strokeWidth="2"
        />
      </svg>
    ),
  },
];

export const tree = {
  root: { id: "root", label: ["MRM", "Intelligence"] },
  branches: [
    {
      id: "misc",
      label: "Miscellaneous Tools",
      children: [
        { id: "dth", label: "DTH Info" },
        { id: "gas", label: "GAS Info" },
        { id: "phish", label: "Phishing" },
      ],
    },
    {
      id: "domain",
      label: "Domain Intelligence",
      children: [
        { id: "creation", label: "Creation Data" },
        { id: "hosting", label: "Hosting Details" },
        { id: "domainIntel", label: "Domain Intelligence" },
      ],
    },
    {
      id: "osint",
      label: "OSINT",
      highlight: true,
      children: [
        { id: "indian", label: "Indian No OSINT" },
        {
          id: "intl",
          label: "International Intelligence",
          grandchildren: [
            { id: "gmail", label: "Gmail" },
            { id: "proton", label: "Proton Mail" },
            { id: "outlook", label: "Outlook" },
            { id: "yahoo", label: "Yahoo India" },
          ],
        },
        { id: "email", label: "Email" },
      ],
    },
    {
      id: "ip",
      label: "IP Investigation",
      children: [],
    },
    {
      id: "crypto",
      label: "Crypto Investigation",
      children: [
        { id: "wallet", label: "Wallet Creation" },
        { id: "paymail", label: "Payment Mail" },
        { id: "walletcomp", label: "Wallet Comparison" },
      ],
    },
    {
      id: "nodal",
      label: "Nodal Lookup",
      children: [],
    },
  ],
};

export const osintOperationsItems = [
  {
    title: "Active OSINT Operations",
    description:
      "Equipped with advanced interactive tools for real-time, in-field intelligence gathering, including live verification, digital footprint expansion, and immediate cross-platform data correlation.",
    icon: <Activity size={30} className="text-blue-500" />,
  },
  {
    title: "Real-Time Alerts & Threat Detection",
    description:
      "Immediate notifications when monitored entities show new activity or appear in new data sources.",
    icon: <BellRing size={30} className="text-blue-500" />,
  },
];

export const identifierTracingItems = [
  "Mobile Numbers (with integrated local lookup for subscriber & region details)",
  "Email Addresses",
  "Usernames & Aliases",
  "Cryptocurrency Wallets",
  "IP Addresses & Domains",
  "Comprehensive Internet Monitoring",
];

export const intelligenceSpecialties = [
  {
    title: "Indian Number OSINT",
    description:
      "Identifies ownership, breach history, and social linkages across 300+ services with real-time digital footprint insights.",
    icon: <CheckCircle size={24} className="text-blue-500" />,
  },
  {
    title: "International Intelligence",
    description:
      "OSINT collection on global numbers using sourced datasets to support cross-border investigations and scam detection.",
    icon: <Globe size={24} className="text-blue-500" />,
  },
  {
    title: "Email Intelligence",
    description:
      "Analyzes leaked credentials and exposure in cyber incidents to determine if an email is compromised or malicious.",
    icon: <Mail size={24} className="text-blue-500" />,
  },
  {
    title: "Vehicle Intelligence",
    description:
      "Retrieves owner history, RC status, and traffic violations to assist in surveillance operations and case mapping.",
    icon: <CarFront size={24} className="text-blue-500" />,
  },
];

export const infrastructureItems = [
  {
    title: "Domain Intelligence",
    description:
      "Analyzes registration timelines and asset age to identify newly created fraud infrastructure and campaign stability.",
    icon: <History size={24} className="text-blue-500" />,
  },
  {
    title: "Hosting Analysis",
    description:
      "Maps backend IPs and technical stacks to uncover linked malicious networks and domains sharing the same server infrastructure.",
    icon: <Server size={24} className="text-blue-500" />,
  },
];

export const cryptoItems = [
  {
    title: "Blockchain Tracing",
    description:
      "Tracks wallet activity and payment trails across the blockchain to support financial attribution and identify laundering pathways.",
    icon: <Wallet size={24} className="text-blue-500" />,
  },
  {
    title: "Wallet Lifecycle",
    description:
      "Analyzes registration history to distinguish between long-term assets and throwaway wallets used for short-term criminal campaigns.",
    icon: <History size={24} className="text-blue-500" />,
  },
  {
    title: "Threat Correlation",
    description:
      "Compares multiple addresses to identify shared counterparties and paths, linking separate incidents to the same threat actor.",
    icon: <Network size={24} className="text-blue-500" />,
  },
];

export const miscellaneousItems = [
  {
    title: "DTH Information",
    description:
      "Retrieves subscriber data from major Indian DTH providers to correlate TV subscriptions with personal identifiers for address confirmation.",
    icon: <Tv size={24} className="text-blue-500" />,
  },
  {
    title: "Utility Profiling",
    description:
      "Identifies active LPG connections (HP, Indane, Bharat) to link utility services to households for background profiling and forensic verification.",
    icon: <Flame size={24} className="text-blue-500" />,
  },
  {
    title: "Investigative Toolkit",
    description:
      "Advanced tools for real-time GPS/IP tracking, FootMRM movement monitoring, and authorized remote device verification for LEA use.",
    icon: <ShieldAlert size={24} className="text-blue-500" />,
  },
];

export const nodalLookupItems = [
  {
    title: "Nodal Officer Database",
    description:
      "Comprehensive and up-to-date database of nodal officers for Indian telecom and ISP service providers, facilitating quick contact for lawful requests and escalations.",
    icon: <PhoneCall size={24} className="text-blue-500" />,
  },
];
