export default function DarkWebHackerIcon() {
  return (
    <svg
      width="280"
      height="280"
      viewBox="0 0 280 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="ring" x1="0" y1="0" x2="280" y2="280">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>

        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer Ring */}
      <g>
        <circle
          cx="140"
          cy="140"
          r="105"
          stroke="url(#ring)"
          strokeWidth="2"
          strokeDasharray="10 10"
          opacity="0.4"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 140 140"
            to="360 140 140"
            dur="20s"
            repeatCount="indefinite"
          />
        </circle>
      </g>

      {/* Network */}
      <g stroke="#3B82F6" opacity="0.4">
        <line x1="70" y1="80" x2="140" y2="140" />
        <line x1="210" y1="80" x2="140" y2="140" />
        <line x1="70" y1="200" x2="140" y2="140" />
        <line x1="210" y1="200" x2="140" y2="140" />
      </g>

      {/* Nodes */}
      {[
        [70, 80],
        [210, 80],
        [70, 200],
        [210, 200],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="5" fill="#60A5FA">
            <animate
              attributeName="opacity"
              values="0.3;1;0.3"
              dur={`${2 + i}s`}
              repeatCount="indefinite"
            />
          </circle>
        </g>
      ))}

      {/* Hood */}
      <path
        d="
          M140 65
          C95 65 75 105 75 145
          C75 195 105 225 140 225
          C175 225 205 195 205 145
          C205 105 185 65 140 65
        "
        fill="#050816"
        stroke="#2563EB"
        strokeWidth="2"
      />

      {/* Face Shadow */}
      <ellipse
        cx="140"
        cy="135"
        rx="42"
        ry="50"
        fill="#020617"
      />

      {/* Eyes */}
      <g filter="url(#glow)">
        <rect
          x="118"
          y="132"
          width="14"
          height="3"
          rx="2"
          fill="#60A5FA"
        >
          <animate
            attributeName="opacity"
            values="1;0.4;1"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </rect>

        <rect
          x="148"
          y="132"
          width="14"
          height="3"
          rx="2"
          fill="#60A5FA"
        >
          <animate
            attributeName="opacity"
            values="1;0.4;1"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </rect>
      </g>

      {/* Terminal */}
      <rect
        x="105"
        y="175"
        width="70"
        height="32"
        rx="6"
        fill="#020617"
        stroke="#2563EB"
      />

      <text
        x="115"
        y="194"
        fill="#60A5FA"
        fontSize="8"
        fontFamily="monospace"
      >
        root@tor
      </text>

      {/* Floating Code */}
      <text
        x="25"
        y="45"
        fill="#3B82F6"
        fontSize="10"
        opacity="0.6"
        fontFamily="monospace"
      >
        .onion
      </text>

      <text
        x="210"
        y="55"
        fill="#3B82F6"
        fontSize="10"
        opacity="0.6"
        fontFamily="monospace"
      >
        darknet
      </text>

      <text
        x="30"
        y="245"
        fill="#3B82F6"
        fontSize="10"
        opacity="0.6"
        fontFamily="monospace"
      >
        hidden
      </text>

      {/* Scan Line */}
      <line
        x1="40"
        y1="140"
        x2="240"
        y2="140"
        stroke="#60A5FA"
        strokeWidth="2"
        opacity="0.8"
        filter="url(#glow)"
      >
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 -70;0 70;0 -70"
          dur="4s"
          repeatCount="indefinite"
        />
      </line>

      {/* Pulse */}
      <circle
        cx="140"
        cy="140"
        r="110"
        stroke="#60A5FA"
        opacity="0.12"
      >
        <animate
          attributeName="r"
          values="100;115;100"
          dur="5s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}